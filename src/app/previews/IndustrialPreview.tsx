export default function IndustrialPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#1C1C1C', color: '#D4D4D4', fontFamily: '"DM Mono", "JetBrains Mono", monospace' }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #444 0, #444 1px, transparent 0, transparent 10px)' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: '#333' }}>
          <span className="text-sm uppercase tracking-[0.3em] font-bold" style={{ color: '#FF6600' }}>RITUAL</span>
          <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest" style={{ color: '#666' }}>
            <span className="hover:text-[#FF6600] cursor-pointer">Specs</span>
            <span className="hover:text-[#FF6600] cursor-pointer">Manual</span>
            <button className="px-4 py-2 border text-xs uppercase tracking-widest" style={{ borderColor: '#FF6600', color: '#FF6600' }}>ENGAGE</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-24 md:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6"><div className="w-3 h-3" style={{ backgroundColor: '#FF6600' }} /><span className="text-xs uppercase tracking-[0.3em]" style={{ color: '#666' }}>SYSTEM SPECIFICATION</span></div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none mb-8" style={{ color: '#FFFFFF' }}>AUTONOMOUS<br />INTELLIGENCE<br /><span style={{ color: '#FF6600' }}>PROTOCOL</span></h1>
            <p className="text-sm leading-relaxed max-w-lg mb-8" style={{ color: '#888' }}>Industrial-grade infrastructure for deploying verifiable ML, sovereign agents, and encrypted compute on-chain. Built for reliability.</p>
            <button className="px-8 py-3 border-2 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF6600] hover:text-black hover:border-[#FF6600] transition-all" style={{ borderColor: '#FF6600', color: '#FF6600' }}>INITIALIZE →</button>
          </div>
        </section>
        <section className="border-t" style={{ borderColor: '#333' }}>
          <div className="grid md:grid-cols-3">
            {[
              { code: 'MOD-001', title: 'ONNX ENGINE', desc: 'Verifiable inference. TEE attested.', status: 'OPERATIONAL' },
              { code: 'MOD-002', title: 'AGENT CORE', desc: 'Sovereign scheduling. Self-funding.', status: 'OPERATIONAL' },
              { code: 'MOD-003', title: 'CRYPTO UNIT', desc: 'FHE encrypted. dKMS managed.', status: 'OPERATIONAL' },
            ].map((f, i) => (
              <div key={i} className="p-8 border-r border-b" style={{ borderColor: '#333' }}>
                <div className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#666' }}>{f.code}</div>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-2" style={{ color: '#FF6600' }}>{f.title}</h3>
                <p className="text-xs mb-4" style={{ color: '#888' }}>{f.desc}</p>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00FF00' }} /><span className="text-[10px] uppercase tracking-widest" style={{ color: '#00FF00' }}>{f.status}</span></div>
              </div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-6 border-t flex justify-between text-[10px] uppercase tracking-[0.3em]" style={{ borderColor: '#333', color: '#666' }}>
          <span>© 2026 RITUAL SYSTEMS</span>
          <div className="flex gap-4"><span>DOCS</span><span>STATUS</span></div>
        </footer>
      </div>
    </div>
  );
}