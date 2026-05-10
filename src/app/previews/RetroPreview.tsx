export default function RetroPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#1a0533', color: '#F0E6FF', fontFamily: '"Press Start 2P", "VT323", monospace' }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(240,230,255,0.05) 3px, rgba(240,230,255,0.05) 4px)' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4 border-b-2" style={{ borderColor: '#FF6EC7' }}>
          <span className="text-sm" style={{ color: '#FF6EC7' }}>★ RITUAL ★</span>
          <div className="hidden md:flex gap-6 text-[10px] uppercase">
            <span className="cursor-pointer hover:text-[#FF6EC7] transition-colors">START</span>
            <span className="cursor-pointer hover:text-[#FF6EC7] transition-colors">OPTIONS</span>
            <span className="cursor-pointer hover:text-[#FF6EC7] transition-colors">CREDITS</span>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] mb-6 animate-pulse" style={{ color: '#00FF88' }}>▶ PRESS START ◀</div>
            <h1 className="text-3xl md:text-5xl leading-relaxed mb-8" style={{ color: '#FF6EC7', textShadow: '3px 3px 0 #6B0080, -1px -1px 0 #00FF88' }}>
              AUTONOMOUS
              <br />INTELLIGENCE
            </h1>
            <p className="text-[10px] leading-loose max-w-lg mx-auto mb-8 uppercase" style={{ color: '#B89AFF' }}>
              Deploy sovereign agents with on-chain ML. Verifiable. Encrypted. Unstoppable. The future is now, player.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 text-[10px] uppercase border-2 hover:bg-[#FF6EC7] hover:text-[#1a0533] transition-all" style={{ borderColor: '#FF6EC7', color: '#FF6EC7' }}>▶ PLAY</button>
              <button className="px-6 py-3 text-[10px] uppercase border-2 hover:bg-[#00FF88] hover:text-[#1a0533] transition-all" style={{ borderColor: '#00FF88', color: '#00FF88' }}>? HELP</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-12 border-t-2" style={{ borderColor: '#6B0080' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-[10px] mb-8 uppercase text-center" style={{ color: '#FF6EC7' }}>— SELECT YOUR MODULE —</div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'ML ENGINE', desc: 'ONNX MODELS ON-CHAIN', hp: '9999', color: '#FF6EC7' },
                { title: 'AGENT CORE', desc: 'SOVEREIGN + ETERNAL', hp: '∞', color: '#00FF88' },
                { title: 'CRYPTO VAULT', desc: 'FHE ENCRYPTED', hp: '████', color: '#B89AFF' },
              ].map((f, i) => (
                <div key={i} className="p-6 border-2 hover:-translate-y-1 transition-transform" style={{ borderColor: f.color, backgroundColor: 'rgba(26,5,51,0.8)' }}>
                  <div className="text-xs mb-2" style={{ color: f.color }}>{'>'} {f.title}</div>
                  <div className="text-[10px] mb-4 opacity-60">{f.desc}</div>
                  <div className="text-[10px]" style={{ color: f.color }}>HP: {f.hp}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-8 py-12 border-t-2" style={{ borderColor: '#6B0080' }}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[{ v: '3847', l: 'SCORE' }, { v: 'LV.142', l: 'NODES' }, { v: '99.99', l: 'UPTIME%' }, { v: '$10M', l: 'GOLD' }].map((s, i) => (
              <div key={i} className="p-4 border" style={{ borderColor: '#6B0080' }}>
                <div className="text-lg mb-1" style={{ color: '#FF6EC7' }}>{s.v}</div>
                <div className="text-[8px] uppercase" style={{ color: '#B89AFF' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-4 text-center text-[8px] uppercase border-t-2" style={{ borderColor: '#6B0080', color: '#B89AFF' }}>
          © 2026 RITUAL · INSERT COIN TO CONTINUE
        </footer>
      </div>
    </div>
  );
}