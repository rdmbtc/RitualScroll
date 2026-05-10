import { useAccount, useWriteContract, useWaitForTransactionReceipt, useChainId } from 'wagmi';
import { parseEther, createPublicClient, http } from 'viem';
import { PROMPT_ACCESS_ABI } from './prompt-access-abi';
import { useEffect, useCallback, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { ritualChain } from './web3-config';

const CONTRACT_ADDRESS = (process.env.NEXT_PUBLIC_PROMPT_ACCESS_CONTRACT || '') as `0x${string}`;
const PROMPT_PRICE = '0.001';

const publicClient = createPublicClient({
  chain: ritualChain,
  transport: http()
});

export function usePromptAccess(promptId: string) {
  const { address } = useAccount();
  const chainId = useChainId();
  const queryClient = useQueryClient();
  const hasRefreshedRef = useRef(false);
  
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isAccessLoading, setIsAccessLoading] = useState(false);
  const [accessError, setAccessError] = useState<Error | null>(null);
  const [purchases, setPurchases] = useState<number>(0);

  const fetchAccess = useCallback(async () => {
    if (!address || !CONTRACT_ADDRESS) return;
    
    setIsAccessLoading(true);
    setAccessError(null);
    
    try {
      console.log('🔄 Fetching access directly from RPC for', promptId);
      const access = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: PROMPT_ACCESS_ABI,
        functionName: 'checkAccess',
        args: [address, promptId]
      });
      setHasAccess(access);
      
      const p = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: PROMPT_ACCESS_ABI,
        functionName: 'getPromptPurchases',
        args: [promptId]
      });
      setPurchases(Number(p));
      console.log('📊 Direct Access result:', { promptId, access, purchases: Number(p) });
    } catch (err) {
      console.error('❌ Error fetching access:', err);
      setAccessError(err as Error);
    } finally {
      setIsAccessLoading(false);
    }
  }, [address, promptId]);

  useEffect(() => {
    fetchAccess();
  }, [fetchAccess]);

  // Покупка доступа
  const { 
    writeContract, 
    data: hash, 
    isPending: isPurchasing,
    error: purchaseError,
    reset: resetPurchase
  } = useWriteContract();

  // Ожидание подтверждения транзакции
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Hard invalidation that forces fresh RPC calls
  const hardRefresh = useCallback(async () => {
    console.log('🔄 Hard-refreshing access from chain...');
    await fetchAccess();
  }, [fetchAccess]);

  // Автоматическое обновление после подтверждения транзакции
  useEffect(() => {
    if (isConfirmed && !hasRefreshedRef.current) {
      hasRefreshedRef.current = true;
      console.log('✅ Transaction confirmed! Hard-refreshing access...');
      
      // Aggressive refresh: refetch at multiple intervals
      const intervals = [300, 1000, 2000, 4000, 8000];
      const timers = intervals.map(delay => 
        setTimeout(async () => {
          console.log(`🔄 Refetching access (${delay}ms)...`);
          await fetchAccess();
        }, delay)
      );
      
      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [isConfirmed, fetchAccess]);

  // Reset refresh flag when hash changes (new purchase attempt)
  useEffect(() => {
    if (hash) {
      hasRefreshedRef.current = false;
    }
  }, [hash]);

  // Сброс состояния при смене промпта
  useEffect(() => {
    resetPurchase();
    hasRefreshedRef.current = false;
  }, [promptId, resetPurchase]);

  const purchaseAccess = () => {
    if (!CONTRACT_ADDRESS) {
      console.error('Contract address not configured');
      return;
    }
    
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: PROMPT_ACCESS_ABI,
      functionName: 'purchaseAccess',
      args: [promptId],
      value: parseEther(PROMPT_PRICE),
    });
  };

  return {
    hasAccess: hasAccess || false,
    purchases: purchases ? Number(purchases) : 0,
    purchaseAccess,
    isPurchasing,
    isConfirming,
    isConfirmed,
    purchaseError,
    refetchAccess: hardRefresh,  // Expose the hard refresh instead of bare refetch
    promptPrice: PROMPT_PRICE,
    isContractConfigured: !!CONTRACT_ADDRESS,
    isAccessLoading,
  };
}
