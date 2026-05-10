export default function ClaymorphismPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#F0EEFF', color: '#2D2B55', fontFamily: '"Nunito", "Inter", sans-serif' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FFD6E0, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #C3B1FF, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5">
          <span className="text-xl font-bold" style={{ color: '#6C5CE7' }}>Ritual</span>
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-2xl text-sm font-semibold text-white" style={{ backgroundColor: '#6C5CE7', boxShadow: '0 8px 20px rgba(108,92,231,0.35), inset 0 -3px 6px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.3)' }}>Get Started</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-28 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-5 py-2 rounded-2xl mb-8 text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: 'rgba(255,214,224,0.6)', color: '#E84393', boxShadow: '0 4px 12px rgba(232,67,147,0.15), inset 0 -2px 4px rgba(0,0,0,0.05), inset 0 2px 4px rgba(255,255,255,0.5)' }}>✨ Now Live</div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">Build Autonomous <span style={{ color: '#6C5CE7' }}>Intelligence</span></h1>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#7C7A9C' }}>Deploy sovereign agents with ML inference, encrypted compute, and on-chain settlement.</p>
            <button className="px-10 py-4 rounded-2xl text-white font-bold text-lg" style={{ backgroundColor: '#6C5CE7', boxShadow: '0 10px 25px rgba(108,92,231,0.4), inset 0 -4px 8px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.3)' }}>Start Building →</button>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: 'On-Chain ML', desc: 'ONNX models as precompiles with verifiable outputs.', bg: '#FFD6E0', color: '#E84393' },
              { title: 'Sovereign Agents', desc: 'Self-funding agents that outlive their operators.', bg: '#D6E4FF', color: '#4A90D9' },
              { title: 'Encrypted Compute', desc: 'FHE encryption for private, confidential execution.', bg: '#D6FFE4', color: '#27AE60' },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl" style={{ backgroundColor: `${f.bg}90`, boxShadow: '0 8px 24px rgba(0,0,0,0.08), inset 0 -4px 8px rgba(0,0,0,0.04), inset 0 4px 8px rgba(255,255,255,0.6)' }}>
                <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center text-xl font-bold" style={{ backgroundColor: f.color, color: 'white', boxShadow: `0 6px 16px ${f.color}50, inset 0 -2px 4px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.3)` }}>⬡</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7C7A9C' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-6 flex justify-between text-xs" style={{ color: '#7C7A9C' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span className="hover:text-[#6C5CE7] cursor-pointer">Github</span><span className="hover:text-[#6C5CE7] cursor-pointer">Docs</span></div>
        </footer>
      </div>
    </div>
  );
}