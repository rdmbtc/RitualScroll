export default function ModernDarkPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#050506', color: '#EDEDEF', fontFamily: '"Inter", sans-serif' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, #0a0a0f, #050506 50%, #020203)' }} />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-[0.12]" style={{ background: 'radial-gradient(ellipse, #5E6AD2, transparent 60%)', filter: 'blur(150px)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-[0.06]" style={{ background: 'radial-gradient(circle, #7C3AED, transparent 60%)', filter: 'blur(120px)' }} />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundSize: '64px 64px', backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5">
          <span className="text-lg font-semibold tracking-tight">Ritual</span>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#8A8F98' }}>
            <span className="hover:text-white cursor-pointer transition-colors">Features</span>
            <span className="hover:text-white cursor-pointer transition-colors">Docs</span>
            <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            <button className="px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-all hover:brightness-110" style={{ backgroundColor: '#5E6AD2', boxShadow: '0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3), inset 0 1px 0 0 rgba(255,255,255,0.2)' }}>Get Started</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-24 md:py-40 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-mono tracking-widest" style={{ borderColor: 'rgba(94,106,210,0.3)', color: '#5E6AD2' }}>INTRODUCING RITUAL</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] leading-none mb-8" style={{ background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Build autonomous
              <br />intelligence
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: '#8A8F98' }}>The infrastructure where models, agents, and workflows become sovereign participants in on-chain markets.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3.5 rounded-lg text-white font-medium hover:brightness-110 transition-all active:scale-[0.98]" style={{ backgroundColor: '#5E6AD2', boxShadow: '0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' }}>Start Building</button>
              <button className="px-8 py-3.5 rounded-lg font-medium hover:bg-white/[0.08] transition-all active:scale-[0.98]" style={{ backgroundColor: 'rgba(255,255,255,0.05)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.06)' }}>View Docs</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#5E6AD2' }}>Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4" style={{ background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Everything you need</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'On-Chain ML', desc: 'ONNX models as precompiles with verifiable, deterministic inference.' },
                { title: 'Sovereign Agents', desc: 'Self-funding agents with persistent state and block-based scheduling.' },
                { title: 'Encrypted Compute', desc: 'FHE and TEE for private execution. Keys stay confidential.' },
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.02))', borderColor: 'rgba(255,255,255,0.06)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4)' }}>
                  <h3 className="text-lg font-semibold mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8A8F98' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)' }} />
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12 text-center">
            {[{ v: '3,847', l: 'Agents' }, { v: '142', l: 'Nodes' }, { v: '99.99%', l: 'Uptime' }, { v: '$10M+', l: 'Settled' }].map((s, i) => (
              <div key={i}><div className="text-3xl font-semibold tracking-tight">{s.v}</div><div className="text-xs mt-1" style={{ color: '#8A8F98' }}>{s.l}</div></div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-6 flex justify-between text-xs" style={{ color: '#8A8F98' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span className="hover:text-white cursor-pointer">Github</span><span className="hover:text-white cursor-pointer">Docs</span></div>
        </footer>
      </div>
    </div>
  );
}