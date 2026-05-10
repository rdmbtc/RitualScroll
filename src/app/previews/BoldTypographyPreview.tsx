export default function BoldTypographyPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#0C0C0C', color: '#FFFFFF', fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-6">
          <span className="text-2xl font-black uppercase tracking-tighter">RITUAL</span>
          <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest" style={{ color: '#888' }}>
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
            <span className="hover:text-white cursor-pointer transition-colors">Work</span>
            <button className="px-6 py-2.5 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-[#E5FF00] transition-colors">Enter</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
              AUTO
              <br /><span style={{ color: '#E5FF00' }}>NOMOUS</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-16 items-end">
              <p className="text-lg leading-relaxed" style={{ color: '#888' }}>The next markets will not be built by humans alone. Ritual provides the infrastructure for sovereign intelligence.</p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-[#E5FF00] transition-colors">Build Now</button>
                <button className="px-8 py-4 border border-white/30 text-sm font-bold uppercase tracking-widest hover:border-white transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-0">
              {[
                { num: '01', title: 'ON-CHAIN ML', desc: 'Verifiable ONNX inference as a native precompile.' },
                { num: '02', title: 'AGENTS', desc: 'Self-funding sovereign agents with persistent state.' },
                { num: '03', title: 'ENCRYPTED', desc: 'FHE and dKMS for private, confidential execution.' },
              ].map((f, i) => (
                <div key={i} className="py-8 pr-8 border-r border-white/10 last:border-r-0">
                  <span className="text-xs font-mono tracking-widest block mb-4" style={{ color: '#E5FF00' }}>{f.num}</span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3">{f.title}</h3>
                  <p className="text-sm" style={{ color: '#888' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
            {[{ v: '3,847', l: 'AGENTS' }, { v: '142', l: 'NODES' }, { v: '99.99%', l: 'UPTIME' }].map((s, i) => (
              <div key={i} className="text-center"><div className="text-5xl md:text-7xl font-black tracking-tighter">{s.v}</div><div className="text-xs font-mono tracking-widest mt-2" style={{ color: '#888' }}>{s.l}</div></div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-6 border-t border-white/10 flex justify-between text-xs font-bold uppercase tracking-widest" style={{ color: '#888' }}>
          <span>© 2026</span>
          <div className="flex gap-4"><span className="hover:text-[#E5FF00] cursor-pointer">Github</span><span className="hover:text-[#E5FF00] cursor-pointer">Docs</span></div>
        </footer>
      </div>
    </div>
  );
}