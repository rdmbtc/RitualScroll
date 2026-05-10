export default function TerminalPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#0a0a0a', color: '#00ff41', fontFamily: '"JetBrains Mono", "Fira Code", "Consolas", monospace' }}>
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)' }} />

      <div className="relative z-10 p-4 md:p-8 max-w-5xl mx-auto">
        {/* Terminal chrome */}
        <div className="border border-[#333] rounded-sm overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-[#333]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-[#666] uppercase tracking-widest">ritual@mainnet:~</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8 space-y-1 text-sm leading-relaxed bg-[#0a0a0a]">
            <p className="text-[#666]">Last login: Fri May 9 08:33:26 2026 from 10.0.0.1</p>
            <p className="text-[#666]">Welcome to Ritual Chain v4.2.1 (GNU/Linux 6.1.0-ritual arm64)</p>
            <p>&nbsp;</p>

            {/* ASCII Banner */}
            <pre className="text-[#00ff41] text-xs md:text-sm leading-tight mb-4" style={{ filter: 'drop-shadow(0 0 4px rgba(0,255,65,0.3))' }}>{`
 ██████╗ ██╗████████╗██╗   ██╗ █████╗ ██╗     
 ██╔══██╗██║╚══██╔══╝██║   ██║██╔══██╗██║     
 ██████╔╝██║   ██║   ██║   ██║███████║██║     
 ██╔══██╗██║   ██║   ██║   ██║██╔══██║██║     
 ██║  ██║██║   ██║   ╚██████╔╝██║  ██║███████╗
 ╚═╝  ╚═╝╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝`}</pre>
            <p className="text-[#888]">  A lab for autonomous intelligence.</p>
            <p className="text-[#888]">  The next markets will not be built by humans alone.</p>
            <p>&nbsp;</p>

            <p><span className="text-[#00aaff]">ritual@mainnet</span>:<span className="text-[#888]">~</span>$ cat /etc/ritual/capabilities.conf</p>
            <p>&nbsp;</p>
            <p className="text-[#ffbd2e]">[CORE_MODULES]</p>
            <p>  onnx_inference     = <span className="text-[#27c93f]">enabled</span>   # On-chain ML model inference ⬡</p>
            <p>  llm_precompile     = <span className="text-[#27c93f]">enabled</span>   # LLM text generation ◇</p>
            <p>  http_oracle        = <span className="text-[#27c93f]">enabled</span>   # External data fetching ⇄</p>
            <p>  fhe_compute        = <span className="text-[#27c93f]">enabled</span>   # Encrypted computation ◈</p>
            <p>  sovereign_agents   = <span className="text-[#27c93f]">enabled</span>   # Self-funding agents ▣</p>
            <p>&nbsp;</p>

            <p className="text-[#ffbd2e]">[NETWORK_STATUS]</p>
            <p>  block_height       = <span className="text-[#00aaff]">8,432,109</span></p>
            <p>  active_nodes       = <span className="text-[#00aaff]">142</span></p>
            <p>  agents_deployed    = <span className="text-[#00aaff]">3,847</span></p>
            <p>  tee_attestation    = <span className="text-[#27c93f]">verified</span></p>
            <p>  uptime             = <span className="text-[#27c93f]">99.99%</span></p>
            <p>&nbsp;</p>

            <p><span className="text-[#00aaff]">ritual@mainnet</span>:<span className="text-[#888]">~</span>$ ritual agent deploy --help</p>
            <p>&nbsp;</p>
            <p className="text-[#ffbd2e]">USAGE:</p>
            <p>  ritual agent deploy [OPTIONS]</p>
            <p>&nbsp;</p>
            <p className="text-[#ffbd2e]">OPTIONS:</p>
            <p>  --model &lt;MODEL&gt;         Model ID (e.g. llama-3.1, gpt-4o)</p>
            <p>  --schedule &lt;CRON&gt;       Block-based scheduling expression</p>
            <p>  --wallet &lt;ADDR&gt;        RitualWallet address for funding</p>
            <p>  --tee                  Enable TEE verification</p>
            <p>  --secret &lt;KEY=VAL&gt;     Add encrypted secret via dKMS</p>
            <p>&nbsp;</p>

            <p><span className="text-[#00aaff]">ritual@mainnet</span>:<span className="text-[#888]">~</span>$ ritual agent deploy \</p>
            <p>  --model llama-3.1 \</p>
            <p>  --schedule &quot;every 100 blocks&quot; \</p>
            <p>  --tee \</p>
            <p>  --wallet 0x7a3f...e91b</p>
            <p>&nbsp;</p>
            <p className="text-[#888]">Compiling agent contract...</p>
            <p className="text-[#888]">Deploying to Ritual Chain (chainId: 1234)...</p>
            <p className="text-[#888]">Funding RitualWallet with 0.1 ETH...</p>
            <p className="text-[#888]">Configuring scheduler (0x000...fa7e)...</p>
            <p>&nbsp;</p>
            <p className="text-[#27c93f]">✓ Agent deployed successfully</p>
            <p className="text-[#27c93f]">  Contract: <span className="text-[#00aaff]">0x7a3f...e91b</span></p>
            <p className="text-[#27c93f]">  Status: <span className="text-[#ffbd2e]">Awaiting Executor ◌</span></p>
            <p className="text-[#27c93f]">  TEE: <span className="text-white">Verified ✓</span></p>
            <p>&nbsp;</p>

            <p><span className="text-[#00aaff]">ritual@mainnet</span>:<span className="text-[#888]">~</span>$ <span className="animate-pulse">▌</span></p>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="mt-4 flex justify-between text-xs text-[#444] uppercase tracking-widest px-2">
          <span>Ritual Terminal v4.2.1</span>
          <span>UTF-8 | LF | Ritual Shell</span>
        </div>
      </div>
    </div>
  );
}