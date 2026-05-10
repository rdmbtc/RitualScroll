// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title PromptAccess
 * @dev Gas-optimized contract for managing paid access to prompts
 */
contract PromptAccess {
    // Price for accessing one prompt (0.001 RITUAL)
    uint256 public constant PROMPT_PRICE = 1e15; // 0.001 ether in wei
    
    // Contract owner (immutable saves gas)
    address public immutable owner;
    
    // Mapping: keccak256(abi.encodePacked(user, promptId)) => access
    // Using single mapping instead of nested for gas savings
    mapping(bytes32 => bool) private _access;
    
    // Mapping: keccak256(promptId) => purchase count
    mapping(bytes32 => uint32) private _purchases;
    
    // Events (indexed parameters for efficient searching)
    event AccessGranted(address indexed user, bytes32 indexed promptHash);
    
    // Errors (cheaper than require with strings)
    error InsufficientPayment();
    error AlreadyHasAccess();
    error Unauthorized();
    error InvalidAddress();
    
    constructor() {
        owner = msg.sender;
    }
    
    /**
     * @dev Purchase access to a prompt (gas-optimized version)
     * @param promptId Prompt identifier
     */
    function purchaseAccess(string calldata promptId) external payable {
        if (msg.value < PROMPT_PRICE) revert InsufficientPayment();
        
        // Calculate hash once and reuse
        bytes32 promptHash = keccak256(bytes(promptId));
        bytes32 accessKey = keccak256(abi.encodePacked(msg.sender, promptHash));
        
        if (_access[accessKey]) revert AlreadyHasAccess();
        
        // Grant access
        _access[accessKey] = true;
        
        // Increment counter (using unchecked for gas savings)
        unchecked {
            _purchases[promptHash]++;
        }
        
        emit AccessGranted(msg.sender, promptHash);
        
        // Automatic transfer to owner (using call instead of transfer)
        (bool success, ) = owner.call{value: PROMPT_PRICE}("");
        require(success);
        
        // Refund excess if sent more
        unchecked {
            uint256 refund = msg.value - PROMPT_PRICE;
            if (refund > 0) {
                (bool refundSuccess, ) = msg.sender.call{value: refund}("");
                require(refundSuccess);
            }
        }
    }
    
    /**
     * @dev Check user's access to a prompt
     * @param user User address
     * @param promptId Prompt identifier
     */
    function checkAccess(address user, string calldata promptId) external view returns (bool) {
        bytes32 promptHash = keccak256(bytes(promptId));
        bytes32 accessKey = keccak256(abi.encodePacked(user, promptHash));
        return _access[accessKey];
    }
    
    /**
     * @dev Get purchase count for a prompt
     * @param promptId Prompt identifier
     */
    function getPromptPurchases(string calldata promptId) external view returns (uint32) {
        bytes32 promptHash = keccak256(bytes(promptId));
        return _purchases[promptHash];
    }
    
    /**
     * @dev Get prompt hash (for use in events)
     * @param promptId Prompt identifier
     */
    function getPromptHash(string calldata promptId) external pure returns (bytes32) {
        return keccak256(bytes(promptId));
    }
    
    /**
     * @dev Transfer contract ownership
     * @param newOwner New owner address
     * @notice Owner is immutable, this function is kept for compatibility but doesn't work
     */
    function transferOwnership(address newOwner) external pure {
        revert("Owner is immutable");
    }
}
