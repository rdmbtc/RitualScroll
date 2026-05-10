"use client"

export default function VaporwavePreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#090014', color: '#E0E0E0', fontFamily: '"Share Tech Mono", monospace' }}>
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{ background: 'linear-gradient(rgba(18,16,20,0) 50%, rgba(0,0,0,0.2) 50%)', backgroundSize: '100% 4px' }} />
      {/* Floating sun */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-15" style={{ background: 'linear-gradient(to bottom, #FF9900, #FF00FF)', filter: 'blur(100px)' }} />
      {/* Perspective grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-20" style={{ backgroundImage: 'linear-gradient(transparent 95%, #FF00FF 95%), linear-gradient(90deg, transparent 95%, #FF00FF 95%)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2.5)', WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)', maskImage: 'linear-gradient(to top, black 30%, transparent 100%)' }} />

      <div className="relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between px-8 py-4 border-b-2" style={{ borderColor: '#2D1B4E' }}>
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl uppercase tracking-widest" style={{ fontFamily: '"Orbitron", sans-serif', color: '#FF00FF', filter: 'drop-shadow(0 0 8px rgba(255,0,255,0.6))' }}>
              RITUAL
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wider">
            <span className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" style={{ color: '#00FFFF' }}>Protocol</span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" style={{ color: '#00FFFF' }}>Network</span>
            <span className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" style={{ color: '#00FFFF' }}>Docs</span>
            <button className="px-5 py-2 border-2 uppercase tracking-wider text-sm -skew-x-12 transform transition-all duration-200 hover:skew-x-0 hover:text-black" style={{ borderColor: '#00FFFF', color: '#00FFFF', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#00FFFF'; e.currentTarget.style.boxShadow = '0 0 20px #00FFFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}>
              <span className="inline-block skew-x-12">CONNECT</span>
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-8 md:px-16 py-24 md:py-32 text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1 border-2 mb-8 uppercase tracking-widest text-xs -skew-x-12" style={{ borderColor: '#FF00FF', color: '#FF00FF' }}>
              <span className="inline-block skew-x-12">{'>'} ENTERING THE GRID</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-wider mb-8 leading-none" style={{ fontFamily: '"Orbitron", sans-serif', background: 'linear-gradient(to right, #FF9900, #FF00FF, #00FFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 30px rgba(255,0,255,0.4))' }}>
              AUTONOMOUS
              <br />
              INTELLIGENCE
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
              {'>'} Deploy sovereign agents into the digital sprawl. On-chain execution, verifiable inference, and persistent state in one protocol.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-8 py-4 border-2 text-lg uppercase tracking-wider -skew-x-12 font-bold transition-all duration-200 hover:skew-x-0" style={{ borderColor: '#FF00FF', backgroundColor: '#FF00FF', color: 'white', boxShadow: '0 0 20px rgba(255,0,255,0.4)' }}>
                <span className="inline-block skew-x-12">LAUNCH PROTOCOL</span>
              </button>
              <button className="px-8 py-4 border-2 text-lg uppercase tracking-wider -skew-x-12 font-bold transition-all duration-200 hover:skew-x-0 hover:bg-[#00FFFF] hover:text-black" style={{ borderColor: '#00FFFF', color: '#00FFFF' }}>
                <span className="inline-block skew-x-12">EXPLORE DOCS</span>
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-8 md:px-16 py-24 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-16 text-center" style={{ fontFamily: '"Orbitron", sans-serif', color: '#00FFFF', filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.5))' }}>
              SYSTEM MODULES
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'LLM INFERENCE', desc: 'Run language models on-chain with TEE attestation and deterministic outputs.', accent: '#FF00FF' },
                { title: 'SOVEREIGN AGENTS', desc: 'Self-funding, self-scheduling agents that outlive their operators.', accent: '#00FFFF' },
                { title: 'ENCRYPTED COMPUTE', desc: 'FHE and dKMS for private execution. Your strategy stays confidential.', accent: '#FF9900' },
              ].map((f, i) => (
                <div key={i} className="p-6 border-2 transition-all duration-200 hover:-translate-y-2 relative" style={{ borderColor: `${f.accent}30`, borderTopColor: f.accent, borderTopWidth: '3px', backgroundColor: 'rgba(26,16,60,0.8)', backdropFilter: 'blur(8px)' }}>
                  <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF00FF' }} />
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00FFFF' }} />
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FF9900' }} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-3" style={{ fontFamily: '"Orbitron", sans-serif', color: f.accent, filter: `drop-shadow(0 0 5px ${f.accent}80)` }}>
                    {f.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-8 md:px-16 py-16 border-y-2" style={{ borderColor: '#2D1B4E' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '3,847', label: 'AGENTS LIVE', color: '#FF00FF' },
              { val: '142', label: 'ACTIVE NODES', color: '#00FFFF' },
              { val: '99.99%', label: 'UPTIME', color: '#FF9900' },
              { val: '$10M+', label: 'SETTLED', color: '#FF00FF' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black mb-1" style={{ fontFamily: '"Orbitron", sans-serif', color: s.color, filter: `drop-shadow(0 0 10px ${s.color}60)` }}>
                  {s.val}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-50">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-16 py-24 text-center">
          <div className="max-w-4xl mx-auto p-12 border-2 relative" style={{ borderColor: '#00FFFF', backgroundColor: 'rgba(26,16,60,0.5)', boxShadow: '0 0 50px rgba(0,255,255,0.15)' }}>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider mb-6" style={{ fontFamily: '"Orbitron", sans-serif', background: 'linear-gradient(to right, #FF9900, #FF00FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ENTER THE GRID
            </h2>
            <p className="text-lg mb-8 opacity-70">{'>'} Deploy your first autonomous agent. No permission required.</p>
            <button className="px-10 py-4 border-2 text-lg uppercase tracking-wider font-bold -skew-x-12 transition-all duration-200 hover:skew-x-0" style={{ borderColor: '#FF00FF', backgroundColor: '#FF00FF', color: 'white', boxShadow: '0 0 30px rgba(255,0,255,0.5)' }}>
              <span className="inline-block skew-x-12">INITIALIZE PROTOCOL →</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 px-8 py-6 flex justify-between items-center text-xs uppercase tracking-widest" style={{ borderColor: '#2D1B4E' }}>
          <span className="opacity-30">© 2026 RITUAL PROTOCOL</span>
          <div className="flex gap-6">
            <span className="opacity-50 hover:opacity-100 cursor-pointer" style={{ color: '#FF00FF' }}>Github</span>
            <span className="opacity-50 hover:opacity-100 cursor-pointer" style={{ color: '#00FFFF' }}>Docs</span>
            <span className="opacity-50 hover:opacity-100 cursor-pointer" style={{ color: '#FF9900' }}>Discord</span>
          </div>
        </footer>
      </div>
    </div>
  );
}