export default function MinimalDarkPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#0A0A0F', color: '#FAFAFA', fontFamily: '"Inter", sans-serif' }}>
      <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, rgba(245,158,11,0.03), transparent 50%)' }} />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]" style={{ backgroundColor: '#F59E0B', filter: 'blur(150px)' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-6">
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Ritual</span>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#71717A' }}>
            <span className="hover:text-[#F59E0B] cursor-pointer transition-colors">Protocol</span>
            <span className="hover:text-[#F59E0B] cursor-pointer transition-colors">Network</span>
            <span className="hover:text-[#F59E0B] cursor-pointer transition-colors">Docs</span>
            <button className="px-5 py-2.5 rounded-lg font-medium text-sm text-[#0A0A0F] hover:brightness-110 transition-all active:scale-[0.98]" style={{ backgroundColor: '#F59E0B', boxShadow: '0 0 20px rgba(245,158,11,0.2)' }}>Get Started</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-24 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-mono tracking-wide" style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(26,26,36,0.6)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#F59E0B', boxShadow: '0 0 6px #F59E0B' }} />
              <span style={{ color: '#71717A' }}>Now Live</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-8" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Infrastructure for
              <br />Autonomous Intelligence
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto" style={{ color: '#71717A' }}>Deploy sovereign agents with verifiable ML, encrypted compute, and on-chain settlement. Built for the long run.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3.5 rounded-lg font-medium text-[#0A0A0F] hover:brightness-110 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all active:scale-[0.98]" style={{ backgroundColor: '#F59E0B' }}>Start Building</button>
              <button className="px-8 py-3.5 rounded-lg font-medium border hover:bg-white/5 transition-all active:scale-[0.98]" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>Read Docs</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { title: 'Verifiable Inference', desc: 'ONNX models as precompiles with TEE attestation.' },
              { title: 'Sovereign Agents', desc: 'Self-funding agents that outlive their operators.' },
              { title: 'Encrypted Compute', desc: 'FHE and dKMS for private, confidential execution.' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:border-white/[0.15] cursor-pointer" style={{ backgroundColor: 'rgba(26,26,36,0.6)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.08)' }}>
                <h3 className="text-lg font-semibold mb-3 tracking-tight" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#71717A' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ v: '3,847', l: 'Agents' }, { v: '142', l: 'Nodes' }, { v: '99.99%', l: 'Uptime' }, { v: '$10M+', l: 'Settled' }].map((s, i) => (
              <div key={i} className="p-6 rounded-xl border text-center" style={{ backgroundColor: 'rgba(26,26,36,0.6)', borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="text-2xl font-semibold tracking-tight" style={{ fontFamily: '"Space Grotesk", sans-serif', color: '#F59E0B' }}>{s.v}</div>
                <div className="text-xs mt-1 tracking-wide" style={{ color: '#71717A' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-6 flex justify-between text-xs" style={{ color: '#71717A' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span className="hover:text-[#F59E0B] cursor-pointer">Github</span><span className="hover:text-[#F59E0B] cursor-pointer">Docs</span></div>
        </footer>
      </div>
    </div>
  );
}