export default function CyberpunkPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#0a0a0f', color: '#e0e0e0', fontFamily: '"JetBrains Mono", "Fira Code", monospace' }}>
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)' }} />
      {/* Circuit grid background */}
      <div className="absolute inset-0 opacity-100" style={{ backgroundImage: 'linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      {/* Gradient mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00ff88, transparent 70%)' }} />
      <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #ff00ff, transparent 70%)' }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: '#2a2a3a' }}>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1" style={{ clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))', backgroundColor: '#00ff88', color: '#0a0a0f' }}>
              <span className="font-bold text-sm uppercase tracking-widest">RITUAL</span>
            </div>
            <span className="text-xs uppercase tracking-widest opacity-50">{'>'} SYS_v4.2.1</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest">
            <span className="cursor-pointer hover:opacity-100 opacity-60" style={{ color: '#00ff88' }}>[PROTOCOL]</span>
            <span className="cursor-pointer hover:opacity-100 opacity-60" style={{ color: '#00ff88' }}>[NETWORK]</span>
            <span className="cursor-pointer hover:opacity-100 opacity-60" style={{ color: '#00ff88' }}>[DOCS]</span>
            <button className="px-4 py-2 text-xs uppercase tracking-widest border" style={{ borderColor: '#00ff88', color: '#00ff88', clipPath: 'polygon(0 4px, 4px 0, calc(100% - 4px) 0, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))' }}>
              CONNECT_
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-8 md:px-16 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-16 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color: '#ff00ff' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ff00ff', boxShadow: '0 0 8px #ff00ff' }} />
                PROTOCOL_ACTIVE
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-widest mb-6 leading-none relative" style={{ fontFamily: '"Orbitron", monospace' }}>
                <span className="relative" style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4), -2px 0 #ff00ff, 2px 0 #00d4ff' }}>
                  AUTONOMOUS
                </span>
                <br />
                <span style={{ color: '#e0e0e0' }}>INTELLIGENCE</span>
              </h1>
              <p className="text-lg leading-relaxed tracking-wide opacity-70 mb-8 max-w-lg">
                {'>'} The next markets will not be built by humans alone. Deploy sovereign agents with on-chain execution guarantees._
                <span className="animate-pulse">▌</span>
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 text-sm uppercase tracking-widest font-bold" style={{ backgroundColor: '#00ff88', color: '#0a0a0f', clipPath: 'polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))', boxShadow: '0 0 15px rgba(0,255,136,0.4)' }}>
                  EXECUTE_PROTOCOL
                </button>
                <button className="px-6 py-3 text-sm uppercase tracking-widest border" style={{ borderColor: '#2a2a3a', color: '#e0e0e0', clipPath: 'polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                  --HELP
                </button>
              </div>
            </div>

            {/* HUD Panel */}
            <div className="hidden md:block relative p-6 border" style={{ borderColor: 'rgba(0,255,136,0.3)', backgroundColor: 'rgba(28,28,46,0.3)', backdropFilter: 'blur(8px)', boxShadow: '0 0 20px rgba(0,255,136,0.1)' }}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#00ff88' }} />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: '#00ff88' }} />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: '#00ff88' }} />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#00ff88' }} />
              <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#00ff88' }}>{'>'} SYSTEM_STATUS</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b py-2" style={{ borderColor: '#2a2a3a' }}>
                  <span className="opacity-50">BLOCK_HEIGHT</span>
                  <span style={{ color: '#00ff88' }}>8,432,109</span>
                </div>
                <div className="flex justify-between border-b py-2" style={{ borderColor: '#2a2a3a' }}>
                  <span className="opacity-50">ACTIVE_NODES</span>
                  <span style={{ color: '#00d4ff' }}>142</span>
                </div>
                <div className="flex justify-between border-b py-2" style={{ borderColor: '#2a2a3a' }}>
                  <span className="opacity-50">AGENTS_LIVE</span>
                  <span style={{ color: '#ff00ff' }}>3,847</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="opacity-50">NETWORK</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00ff88', boxShadow: '0 0 6px #00ff88' }} />
                    <span style={{ color: '#00ff88' }}>OPTIMAL</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features - Terminal style */}
        <section className="px-8 md:px-16 py-24 border-t" style={{ borderColor: '#2a2a3a' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: '#ff00ff' }}>{'>'} CORE_MODULES</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide mb-16" style={{ fontFamily: '"Orbitron", monospace', color: '#e0e0e0' }}>
              SYSTEM <span style={{ color: '#00ff88' }}>CAPABILITIES</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '⬡', title: 'ON-CHAIN_ML', desc: 'Run ONNX models directly on-chain with verifiable inference and deterministic outputs.', color: '#00ff88' },
                { icon: '◇', title: 'LLM_INFERENCE', desc: 'Deploy language models as precompiles. Synchronous or async with TEE attestation.', color: '#ff00ff' },
                { icon: '⇄', title: 'HTTP_ORACLE', desc: 'Fetch external data on-chain. REST APIs, webhooks, and real-time feeds with JQ extraction.', color: '#00d4ff' },
              ].map((f, i) => (
                <div key={i} className="p-6 border relative group transition-all duration-150" style={{ borderColor: '#2a2a3a', backgroundColor: '#12121a', clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                  <div className="text-3xl mb-4" style={{ color: f.color, filter: `drop-shadow(0 0 8px ${f.color})` }}>{f.icon}</div>
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-3" style={{ color: f.color }}>{f.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{f.desc}</p>
                  <div className="absolute bottom-3 right-3 text-xs opacity-30 uppercase">[MODULE_{String(i + 1).padStart(2, '0')}]</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal section */}
        <section className="px-8 md:px-16 py-24 border-t" style={{ borderColor: '#2a2a3a' }}>
          <div className="max-w-4xl mx-auto">
            <div className="border" style={{ borderColor: '#2a2a3a', backgroundColor: '#0a0a0f' }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: '#2a2a3a', backgroundColor: '#12121a' }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff3366' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFD93D' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00ff88' }} />
                <span className="text-xs ml-2 opacity-40 uppercase tracking-widest">ritual_terminal</span>
              </div>
              <div className="p-6 text-sm space-y-2" style={{ color: '#00ff88' }}>
                <p><span className="opacity-50">$</span> ritual deploy --agent sovereign --model llama-3.1</p>
                <p className="opacity-60">Compiling agent contract...</p>
                <p className="opacity-60">Deploying to Ritual Chain (chainId: 1234)...</p>
                <p className="opacity-60">Funding RitualWallet with 0.1 ETH...</p>
                <p style={{ color: '#00ff88' }}>✓ Agent deployed at <span style={{ color: '#00d4ff' }}>0x7a3f...e91b</span></p>
                <p style={{ color: '#00ff88' }}>✓ Scheduler configured: every 100 blocks</p>
                <p>
                  <span className="opacity-50">$</span> <span className="animate-pulse">▌</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 md:px-16 py-8 border-t flex justify-between items-center text-xs uppercase tracking-widest" style={{ borderColor: '#2a2a3a' }}>
          <span className="opacity-30">© 2026 RITUAL PROTOCOL</span>
          <div className="flex gap-6 opacity-40">
            <span style={{ color: '#00ff88' }}>[GITHUB]</span>
            <span style={{ color: '#00ff88' }}>[DOCS]</span>
            <span style={{ color: '#00ff88' }}>[DISCORD]</span>
          </div>
        </footer>
      </div>
    </div>
  );
}