export default function NeumorphismPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#E0E5EC', color: '#2D3748', fontFamily: '"Inter", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5">
          <span className="text-lg font-semibold px-4 py-2 rounded-xl" style={{ boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff' }}>Ritual</span>
          <div className="hidden md:flex items-center gap-4">
            {['Protocol', 'Docs'].map(t => (
              <span key={t} className="px-4 py-2 rounded-xl cursor-pointer text-sm" style={{ boxShadow: '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff', color: '#718096' }}>{t}</span>
            ))}
            <button className="px-6 py-2.5 rounded-xl text-sm font-medium text-white" style={{ backgroundColor: '#667EEA', boxShadow: '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff' }}>Connect</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 rounded-full mb-8 text-xs font-medium uppercase tracking-widest" style={{ boxShadow: 'inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff', color: '#667EEA' }}>Now Live</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">Infrastructure for Autonomous Intelligence</h1>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#718096' }}>Deploy sovereign agents with verifiable ML, encrypted compute, and on-chain settlement.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 rounded-2xl text-white font-medium active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] transition-shadow" style={{ backgroundColor: '#667EEA', boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff' }}>Start Building</button>
              <button className="px-8 py-4 rounded-2xl font-medium active:shadow-[inset_4px_4px_8px_#b8bec7] transition-shadow" style={{ boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff' }}>Read Docs</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: 'On-Chain ML', desc: 'ONNX inference as precompiles. Verifiable and deterministic.' },
              { title: 'Sovereign Agents', desc: 'Self-funding agents with persistent state and scheduling.' },
              { title: 'Encrypted Compute', desc: 'FHE and dKMS for private, confidential execution.' },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl transition-shadow" style={{ boxShadow: '8px 8px 16px #b8bec7, -8px -8px 16px #ffffff' }}>
                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl" style={{ boxShadow: 'inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff', color: '#667EEA' }}>⬡</div>
                <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#718096' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ v: '3,847', l: 'Agents' }, { v: '142', l: 'Nodes' }, { v: '99.99%', l: 'Uptime' }, { v: '$10M+', l: 'Settled' }].map((s, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ boxShadow: 'inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff' }}>
                <div className="text-2xl font-bold" style={{ color: '#667EEA' }}>{s.v}</div>
                <div className="text-xs mt-1" style={{ color: '#718096' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-6 flex justify-between text-xs" style={{ color: '#718096' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span className="hover:text-[#667EEA] cursor-pointer">Github</span><span className="hover:text-[#667EEA] cursor-pointer">Docs</span></div>
        </footer>
      </div>
    </div>
  );
}