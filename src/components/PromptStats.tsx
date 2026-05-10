"use client";

import { useReadContract } from 'wagmi';

const PROMPT_ACCESS_ABI = [
  {
    inputs: [{ name: 'promptId', type: 'string' }],
    name: 'getPromptPurchases',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

const CONTRACT_ADDRESS = (process.env.NEXT_PUBLIC_PROMPT_ACCESS_CONTRACT || '') as `0x${string}`;

interface PromptStatsProps {
  promptId: string;
}

export function PromptStats({ promptId }: PromptStatsProps) {
  const { data: purchases } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: PROMPT_ACCESS_ABI,
    functionName: 'getPromptPurchases',
    args: [promptId],
    query: {
      enabled: !!CONTRACT_ADDRESS,
      refetchInterval: 10000, // Обновление каждые 10 секунд
    },
  });

  if (!CONTRACT_ADDRESS || !purchases) return null;

  const count = Number(purchases);
  
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <span className="text-xs text-white/60">
        {count} {count === 1 ? 'purchase' : 'purchases'}
      </span>
    </div>
  );
}
