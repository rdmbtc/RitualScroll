export default function PlayfulGeometricPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FFF8E7', color: '#1A1A2E', fontFamily: '"Outfit", sans-serif' }}>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#FF6B6B' }} />
      <div className="absolute bottom-40 left-10 w-24 h-24 opacity-15 rotate-45" style={{ backgroundColor: '#4ECDC4' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: '#FFE66D' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5">
          <span className="text-xl font-bold" style={{ color: '#FF6B6B' }}>ritual ●</span>
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#FF6B6B' }}>Let&apos;s Go!</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: '#4ECDC4', color: 'white' }}>✨ Now Live!</div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
                Build <span style={{ color: '#FF6B6B' }}>Fun</span> Autonomous <span style={{ color: '#4ECDC4' }}>Agents</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#666' }}>Deploy sovereign AI with on-chain ML, encrypted compute, and self-funding wallets. It&apos;s easier than you think!</p>
              <div className="flex gap-3">
                <button className="px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform" style={{ backgroundColor: '#FF6B6B' }}>Start Building 🚀</button>
                <button className="px-8 py-4 rounded-full border-2 font-bold text-lg hover:scale-105 transition-transform" style={{ borderColor: '#4ECDC4', color: '#4ECDC4' }}>Learn More</button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center relative">
              <div className="w-40 h-40 rounded-3xl rotate-12" style={{ backgroundColor: '#FF6B6B', opacity: 0.9 }} />
              <div className="absolute w-32 h-32 rounded-full -rotate-6" style={{ backgroundColor: '#4ECDC4', opacity: 0.8, top: '20%', left: '20%' }} />
              <div className="absolute w-24 h-24 rotate-45" style={{ backgroundColor: '#FFE66D', opacity: 0.7, bottom: '10%', right: '20%' }} />
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { title: 'On-Chain ML', desc: 'ONNX models run as precompiles!', color: '#FF6B6B', shape: '●' },
              { title: 'Smart Agents', desc: 'Self-funding & self-scheduling!', color: '#4ECDC4', shape: '■' },
              { title: 'Encrypted', desc: 'FHE keeps everything private!', color: '#FFE66D', shape: '▲' },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl hover:scale-[1.03] transition-transform cursor-pointer" style={{ backgroundColor: 'white', boxShadow: `0 8px 24px ${f.color}30` }}>
                <div className="text-4xl mb-4" style={{ color: f.color }}>{f.shape}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-sm" style={{ color: '#888' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 py-16 text-center rounded-3xl mx-8 mb-8" style={{ backgroundColor: '#1A1A2E', color: 'white' }}>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ready to play? <span style={{ color: '#FF6B6B' }}>🎮</span></h2>
          <button className="px-10 py-4 rounded-full text-lg font-bold mt-4 hover:scale-105 transition-transform" style={{ backgroundColor: '#FFE66D', color: '#1A1A2E' }}>Get Started →</button>
        </section>
        <footer className="px-8 py-6 text-center text-xs" style={{ color: '#999' }}>© 2026 Ritual · Made with ❤️</footer>
      </div>
    </div>
  );
}