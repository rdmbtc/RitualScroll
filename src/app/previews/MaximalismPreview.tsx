export default function MaximalismPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FF1493', color: '#FFFFFF', fontFamily: '"Archivo Black", "Impact", sans-serif' }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '25px 25px' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4 border-b-4 border-black bg-[#FFD700]" style={{ color: '#000' }}>
          <span className="text-2xl font-black uppercase tracking-tight">RITUAL!!!</span>
          <button className="px-6 py-2 bg-black text-[#FFD700] font-black text-sm uppercase">GO</button>
        </nav>
        <section className="px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-[200px] font-black opacity-10 leading-none rotate-12">AI</div>
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#FFD700] text-black font-black text-sm uppercase tracking-widest mb-6 rotate-[-3deg] border-4 border-black" style={{ boxShadow: '6px 6px 0 #000' }}>🔥 BREAKING NEWS 🔥</div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-8" style={{ textShadow: '6px 6px 0 rgba(0,0,0,0.3)' }}>
              AUTONOMOUS
              <br /><span style={{ color: '#FFD700', textShadow: '4px 4px 0 #000' }}>INTELLIGENCE</span>
              <br />IS HERE!!!
            </h1>
            <p className="text-xl font-bold mb-8 max-w-xl" style={{ fontFamily: '"Inter", sans-serif' }}>The next markets will NOT be built by humans alone. Deploy sovereign agents NOW. No permission needed.</p>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-[#FFD700] text-black font-black text-xl uppercase border-4 border-black rotate-[1deg] active:rotate-0 transition-transform" style={{ boxShadow: '8px 8px 0 #000' }}>BUILD NOW →</button>
              <button className="px-10 py-5 bg-black text-[#FFD700] font-black text-xl uppercase border-4 border-[#FFD700] rotate-[-1deg]" style={{ boxShadow: '8px 8px 0 #FFD700' }}>DOCS</button>
            </div>
          </div>
        </section>
        <section className="bg-[#FFD700] text-black py-6 border-y-4 border-black overflow-hidden">
          <div className="flex gap-12 items-center justify-center font-black text-2xl uppercase tracking-wider whitespace-nowrap">
            ★ 3,847 AGENTS ★ 142 NODES ★ 99.99% UPTIME ★ $10M+ SETTLED ★ UNSTOPPABLE ★
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 bg-[#00CED1] border-b-4 border-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { title: 'ON-CHAIN ML!!!', desc: 'ONNX inference. Verifiable. FAST.', bg: '#FF1493' },
              { title: 'AGENTS!!!', desc: 'Self-funding. Sovereign. ETERNAL.', bg: '#FFD700' },
              { title: 'ENCRYPTED!!!', desc: 'FHE. Private. UNSTOPPABLE.', bg: '#7B68EE' },
            ].map((f, i) => (
              <div key={i} className="p-8 border-4 border-black font-black uppercase rotate-[1deg] hover:rotate-0 transition-transform" style={{ backgroundColor: f.bg, boxShadow: '8px 8px 0 #000', color: f.bg === '#FFD700' ? '#000' : '#FFF' }}>
                <h3 className="text-2xl mb-3">{f.title}</h3>
                <p className="text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-4 bg-black text-[#FFD700] text-center font-black text-sm uppercase tracking-widest">
          © 2026 RITUAL · THE FUTURE IS NOW · LFG!!! 🚀
        </footer>
      </div>
    </div>
  );
}