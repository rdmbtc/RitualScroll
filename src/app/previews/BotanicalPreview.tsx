export default function BotanicalPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#F5F0E8', color: '#2D3B2D', fontFamily: '"Cormorant Garamond", "Georgia", serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b" style={{ borderColor: '#C5B69E' }}>
          <span className="text-2xl italic tracking-wide" style={{ color: '#4A6741' }}>Ritual</span>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: '"Inter", sans-serif', color: '#8B7E6A' }}>
            <span className="hover:text-[#4A6741] cursor-pointer">Garden</span>
            <span className="hover:text-[#4A6741] cursor-pointer">Catalog</span>
            <span className="hover:text-[#4A6741] cursor-pointer">Press</span>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-32">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[3fr_2fr] gap-16 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] mb-6" style={{ fontFamily: '"Inter", sans-serif', color: '#8B7E6A' }}>— Season V · 2026 —</div>
              <h1 className="text-5xl md:text-7xl leading-[0.95] mb-8 italic">
                Growing
                <br />Autonomous
                <br /><span style={{ color: '#4A6741' }}>Intelligence</span>
              </h1>
              <p className="text-lg leading-relaxed max-w-md mb-10" style={{ color: '#5C5240' }}>Like roots seeking water, intelligence finds its own path. We cultivate the infrastructure — verifiable, encrypted, sovereign.</p>
              <button className="px-8 py-3 text-xs uppercase tracking-[0.2em] border hover:bg-[#4A6741] hover:text-[#F5F0E8] hover:border-[#4A6741] transition-all duration-500" style={{ fontFamily: '"Inter", sans-serif', borderColor: '#4A6741', color: '#4A6741' }}>Enter the Garden →</button>
            </div>
            <div className="hidden md:flex flex-col items-center gap-4 opacity-20">
              <div className="text-[200px] leading-none" style={{ color: '#4A6741' }}>❦</div>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 border-t" style={{ borderColor: '#C5B69E' }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            {[
              { title: 'Seeds', subtitle: 'On-Chain ML', desc: 'ONNX models planted as precompiles. They germinate into verifiable, deterministic inference.' },
              { title: 'Roots', subtitle: 'Sovereign Agents', desc: 'Self-funding agents that take root and outlive their gardeners. Persistent and autonomous.' },
              { title: 'Canopy', subtitle: 'Encrypted Compute', desc: 'FHE encryption shelters private execution. Your strategies grow in shade.' },
            ].map((f, i) => (
              <div key={i} className="border-t pt-8" style={{ borderColor: '#C5B69E' }}>
                <span className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: '"Inter", sans-serif', color: '#8B7E6A' }}>{f.title}</span>
                <h3 className="text-2xl italic mt-2 mb-4" style={{ color: '#4A6741' }}>{f.subtitle}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#5C5240' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 md:px-16 py-16" style={{ backgroundColor: '#4A6741', color: '#F5F0E8' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl italic mb-6">Tend the Future</h2>
            <p className="text-base opacity-80 mb-8">Deploy where intelligence takes root.</p>
            <button className="px-8 py-3 border text-xs uppercase tracking-[0.2em] hover:bg-[#F5F0E8] hover:text-[#4A6741] transition-all duration-500" style={{ fontFamily: '"Inter", sans-serif', borderColor: '#F5F0E8' }}>Plant Your Agent →</button>
          </div>
        </section>
        <footer className="px-8 py-8 text-center text-xs italic" style={{ color: '#8B7E6A' }}>
          © 2026 Ritual · Cultivating Autonomous Intelligence
        </footer>
      </div>
    </div>
  );
}