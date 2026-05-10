export default function KineticPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#0D0D0D', color: '#FFFFFF', fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5">
          <span className="text-lg font-bold uppercase tracking-widest" style={{ color: '#FF4500' }}>Ritual</span>
          <button className="px-5 py-2 text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: '#FF4500', color: 'white' }}>Enter</button>
        </nav>
        <section className="px-8 md:px-16 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <div className="text-[25rem] font-black uppercase leading-none" style={{ transform: 'rotate(-10deg)' }}>AI</div>
          </div>
          <div className="max-w-5xl mx-auto relative">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter" style={{ transform: 'skewY(-2deg)' }}>
              <span className="block" style={{ color: '#FF4500' }}>MOTION</span>
              <span className="block">IS</span>
              <span className="block" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>EVERYTHING</span>
            </h1>
            <p className="text-base mt-8 max-w-md" style={{ fontFamily: '"Inter", sans-serif', color: '#888' }}>Deploy autonomous agents with kinetic energy. On-chain ML, encrypted compute, sovereign execution.</p>
          </div>
        </section>
        <section className="border-t border-white/10">
          <div className="grid md:grid-cols-3">
            {['INFERENCE', 'AGENTS', 'COMPUTE'].map((t, i) => (
              <div key={i} className="p-8 border-r border-white/10 last:border-r-0 group cursor-pointer hover:bg-[#FF4500] transition-colors duration-200">
                <span className="text-xs font-mono tracking-widest block mb-4" style={{ color: '#FF4500' }}>0{i+1}</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-white">{t}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 py-16 text-center">
          <div className="text-6xl md:text-8xl font-black uppercase tracking-tighter" style={{ color: '#FF4500', transform: 'skewX(-5deg)' }}>3,847</div>
          <div className="text-xs uppercase tracking-widest mt-2" style={{ color: '#888' }}>Agents in Motion</div>
        </section>
        <footer className="px-8 py-6 border-t border-white/10 text-center text-xs uppercase tracking-widest" style={{ color: '#888' }}>
          © 2026 Ritual · Never Stop Moving
        </footer>
      </div>
    </div>
  );
}