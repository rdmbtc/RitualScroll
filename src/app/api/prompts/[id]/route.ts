import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { createPublicClient, http, defineChain } from 'viem';

const ritualChain = defineChain({
  id: 1979,
  name: 'Ritual',
  nativeCurrency: {
    decimals: 18,
    name: 'Ritual',
    symbol: 'RITUAL',
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_RITUAL_RPC_URL || 'https://rpc.ritualfoundation.org'],
      webSocket: [process.env.NEXT_PUBLIC_RITUAL_WS_URL || 'wss://rpc.ritualfoundation.org/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Ritual Explorer',
      url: 'https://explorer.ritualfoundation.org',
    },
  },
  contracts: {
    multicall3: {
      address: '0x5577Ea679673Ec7508E9524100a188E7600202a3',
    },
  },
});
import { PROMPT_ACCESS_ABI } from '@/lib/prompt-access-abi';

const CONTRACT_ADDRESS = (process.env.NEXT_PUBLIC_PROMPT_ACCESS_CONTRACT || '') as `0x${string}`;

const publicClient = createPublicClient({
  chain: ritualChain,
  transport: http()
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 });
  }

  // 1. Verify access on-chain
  try {
    const hasAccess = await publicClient.readContract({
      address: CONTRACT_ADDRESS,
      abi: PROMPT_ACCESS_ABI,
      functionName: 'checkAccess',
      args: [address as `0x${string}`, id]
    });

    if (!hasAccess) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }
  } catch (err) {
    console.error('Error checking access:', err);
    return NextResponse.json({ error: 'Failed to verify access' }, { status: 500 });
  }

  // 2. Map ID to filename
  const filename = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + '.enc';
  const filePath = path.resolve(process.cwd(), 'prompts', 'encrypted', filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Prompt not found' }, { status: 404 });
  }

  // 3. Read and decrypt
  try {
    const encryptedContent = fs.readFileSync(filePath, 'utf8');
    
    const SECRET_KEY = process.env.PROMPTS_SECRET_KEY;
    if (!SECRET_KEY) {
      console.error('PROMPTS_SECRET_KEY is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const key = crypto.createHash('sha256').update(SECRET_KEY).digest();
    
    const parts = encryptedContent.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const encryptedTextHex = parts[1];
    
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedTextHex, 'hex', 'utf8');
    decrypted += decipher.final().toString('utf8');

    return NextResponse.json({ prompt: decrypted });
  } catch (err) {
    console.error('Error decrypting prompt:', err);
    return NextResponse.json({ error: 'Failed to process prompt' }, { status: 500 });
  }
}
