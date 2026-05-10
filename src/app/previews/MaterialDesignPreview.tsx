export default function MaterialDesignPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FAFAFA', color: '#212121', fontFamily: '"Roboto", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4" style={{ backgroundColor: '#673AB7', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          <span className="text-lg font-medium text-white tracking-wide">Ritual</span>
          <div className="hidden md:flex items-center gap-4 text-sm text-white/80">
            <span className="hover:text-white cursor-pointer px-3 py-1.5 rounded hover:bg-white/10">Explore</span>
            <span className="hover:text-white cursor-pointer px-3 py-1.5 rounded hover:bg-white/10">Docs</span>
            <button className="px-5 py-2 rounded text-sm font-medium text-[#673AB7]" style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>Launch</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: '#212121' }}>Autonomous <strong className="font-bold">Intelligence</strong> Infrastructure</h1>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#757575' }}>Deploy sovereign agents with verifiable ML, encrypted compute, and on-chain settlement on Ritual Chain.</p>
              <button className="px-8 py-3 rounded text-white text-sm font-medium uppercase tracking-wide hover:brightness-110 transition-all" style={{ backgroundColor: '#673AB7', boxShadow: '0 3px 6px rgba(103,58,183,0.3)' }}>Get Started</button>
            </div>
            <div className="hidden md:block p-6 rounded-lg bg-white" style={{ boxShadow: '0 3px 10px rgba(0,0,0,0.12)' }}>
              <div className="p-4 rounded mb-4" style={{ backgroundColor: '#EDE7F6' }}>
                <div className="text-xs uppercase tracking-wider font-medium mb-2" style={{ color: '#673AB7' }}>Network Status</div>
                <div className="text-3xl font-medium" style={{ color: '#673AB7' }}>3,847 <span className="text-sm font-normal" style={{ color: '#757575' }}>agents live</span></div>
              </div>
              {[{ l: 'Active Nodes', v: '142' }, { l: 'Uptime', v: '99.99%' }, { l: 'Settled', v: '$10M+' }].map((s, i) => (
                <div key={i} className="flex justify-between py-3 border-b" style={{ borderColor: '#EEEEEE' }}>
                  <span className="text-sm" style={{ color: '#757575' }}>{s.l}</span>
                  <span className="text-sm font-medium">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { title: 'On-Chain ML', desc: 'ONNX inference as native precompiles with TEE attestation.', icon: '🧠', color: '#673AB7' },
              { title: 'Agent Platform', desc: 'Self-funding agents with scheduling and persistent state.', icon: '🤖', color: '#00BCD4' },
              { title: 'Privacy', desc: 'FHE and dKMS for encrypted, confidential computation.', icon: '🔒', color: '#FF5722' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-lg bg-white hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center text-xl text-white" style={{ backgroundColor: f.color }}>{f.icon}</div>
                <h3 className="text-base font-medium mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#757575' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 py-16 text-center" style={{ backgroundColor: '#673AB7', color: 'white' }}>
          <h2 className="text-3xl font-light mb-4">Ready to build?</h2>
          <button className="px-8 py-3 rounded text-sm font-medium uppercase tracking-wide mt-4" style={{ backgroundColor: '#FF5722', color: 'white', boxShadow: '0 3px 6px rgba(255,87,34,0.4)' }}>Start Building</button>
        </section>
        <footer className="px-8 py-6 flex justify-between text-xs" style={{ color: '#9E9E9E' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span>Github</span><span>Docs</span></div>
        </footer>
      </div>
    </div>
  );
}