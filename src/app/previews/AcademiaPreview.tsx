export default function AcademiaPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FAF7F2', color: '#2C2418', fontFamily: '"EB Garamond", "Garamond", "Georgia", serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b" style={{ borderColor: '#D4C5A9' }}>
          <span className="text-xl tracking-wide italic">Ritual</span>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif', color: '#8B7E6A' }}>
            <span className="cursor-pointer hover:text-[#8B2500] transition-colors">Thesis</span>
            <span className="cursor-pointer hover:text-[#8B2500] transition-colors">Research</span>
            <span className="cursor-pointer hover:text-[#8B2500] transition-colors">Archive</span>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-32 border-b" style={{ borderColor: '#D4C5A9' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] mb-8" style={{ fontFamily: '"Inter", sans-serif', color: '#8B7E6A' }}>Vol. IV · No. 2 · May 2026</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              On the Nature of
              <br /><em>Autonomous</em>
              <br />Intelligence
            </h1>
            <div className="h-px w-24 mb-8" style={{ backgroundColor: '#8B2500' }} />
            <p className="text-xl leading-relaxed max-w-xl mb-10" style={{ color: '#5C4F3C' }}>A rigorous examination of how intelligence can persist, coordinate, and survive in the wild — beyond the laboratory, beyond human oversight.</p>
            <button className="px-8 py-3 border text-sm uppercase tracking-widest hover:bg-[#2C2418] hover:text-[#FAF7F2] transition-all duration-300" style={{ fontFamily: '"Inter", sans-serif', borderColor: '#2C2418' }}>Read the Full Paper →</button>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 md:py-24">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6">I. First Principles</h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#5C4F3C' }}>The infrastructure for autonomous intelligence requires three pillars: verifiable inference, sovereign agency, and encrypted computation.</p>
              <p className="text-lg leading-relaxed" style={{ color: '#5C4F3C' }}>Each must be trustless, composable, and resilient to adversarial conditions.</p>
            </div>
            <div>
              <h2 className="text-3xl mb-6">II. The Architecture</h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#5C4F3C' }}>Models run as precompiles. Agents schedule themselves. Wallets self-fund. The chain becomes a substrate for intelligence itself.</p>
              <p className="text-lg leading-relaxed italic" style={{ color: '#8B2500' }}>&ldquo;Single agents become workflows. Workflows become markets.&rdquo;</p>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 border-t" style={{ borderColor: '#D4C5A9', backgroundColor: '#F0EBE1' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] mb-8" style={{ fontFamily: '"Inter", sans-serif', color: '#8B7E6A' }}>Selected Figures</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[{ v: '3,847', l: 'Agents Deployed' }, { v: '142', l: 'Validator Nodes' }, { v: '99.99%', l: 'Network Uptime' }, { v: 'VI', l: 'Precompiles' }].map((s, i) => (
                <div key={i}><div className="text-3xl mb-1">{s.v}</div><div className="text-xs uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif', color: '#8B7E6A' }}>{s.l}</div></div>
              ))}
            </div>
          </div>
        </section>
        <footer className="px-8 md:px-16 py-8 border-t flex justify-between items-center text-xs" style={{ fontFamily: '"Inter", sans-serif', borderColor: '#D4C5A9', color: '#8B7E6A' }}>
          <span className="italic" style={{ fontFamily: '"EB Garamond", serif' }}>© 2026 Ritual — A Lab for Autonomous Intelligence</span>
          <div className="flex gap-4 uppercase tracking-widest"><span className="cursor-pointer hover:text-[#8B2500]">Archive</span><span className="cursor-pointer hover:text-[#8B2500]">Subscribe</span></div>
        </footer>
      </div>
    </div>
  );
}