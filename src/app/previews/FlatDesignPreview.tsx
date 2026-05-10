export default function FlatDesignPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FFFFFF', color: '#333333', fontFamily: '"Roboto", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4" style={{ backgroundColor: '#2196F3' }}>
          <span className="text-lg font-medium text-white">ritual</span>
          <div className="hidden md:flex items-center gap-4">
            {['Features', 'Docs', 'About'].map(t => (<span key={t} className="text-sm text-white/80 cursor-pointer hover:text-white px-3 py-1">{t}</span>))}
            <button className="px-5 py-2 text-sm font-medium" style={{ backgroundColor: '#1976D2', color: 'white' }}>Get Started</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-28" style={{ backgroundColor: '#2196F3', color: 'white' }}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">Autonomous Intelligence Infrastructure</h1>
            <p className="text-lg opacity-90 mb-8 max-w-xl">Deploy sovereign agents with verifiable ML, encrypted compute, and seamless on-chain execution.</p>
            <div className="flex gap-3">
              <button className="px-8 py-3.5 text-sm font-medium uppercase tracking-wide" style={{ backgroundColor: '#FF5722', color: 'white' }}>Get Started</button>
              <button className="px-8 py-3.5 text-sm font-medium uppercase tracking-wide border-2 border-white/50 hover:bg-white/10">Learn More</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-0">
            {[
              { title: 'On-Chain ML', desc: 'ONNX inference as native precompiles. Fast, verifiable, deterministic.', color: '#2196F3', icon: '◼' },
              { title: 'Agent Platform', desc: 'Self-funding agents with scheduling and persistent state.', color: '#4CAF50', icon: '◼' },
              { title: 'Encrypted Compute', desc: 'FHE and TEE for private execution at scale.', color: '#FF5722', icon: '◼' },
            ].map((f, i) => (
              <div key={i} className="p-8 border-l-4" style={{ borderColor: f.color }}>
                <div className="text-3xl mb-4" style={{ color: f.color }}>{f.icon}</div>
                <h3 className="text-lg font-medium mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#757575' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12" style={{ backgroundColor: '#F5F5F5' }}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-8 text-center">
            {[{ v: '3,847', l: 'Agents', c: '#2196F3' }, { v: '142', l: 'Nodes', c: '#4CAF50' }, { v: '99.99%', l: 'Uptime', c: '#FF5722' }, { v: '$10M+', l: 'Settled', c: '#FFC107' }].map((s, i) => (
              <div key={i}><div className="text-3xl font-medium" style={{ color: s.c }}>{s.v}</div><div className="text-xs uppercase tracking-widest mt-1" style={{ color: '#9E9E9E' }}>{s.l}</div></div>
            ))}
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 text-center" style={{ backgroundColor: '#FF5722', color: 'white' }}>
          <h2 className="text-3xl font-light mb-4">Ready to build?</h2>
          <p className="text-base opacity-80 mb-8">Deploy your first agent in minutes.</p>
          <button className="px-8 py-3.5 text-sm font-medium uppercase tracking-wide" style={{ backgroundColor: 'white', color: '#FF5722' }}>Start Now</button>
        </section>
        <footer className="px-8 py-6 flex justify-between text-xs" style={{ color: '#9E9E9E' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span>Github</span><span>Docs</span></div>
        </footer>
      </div>
    </div>
  );
}