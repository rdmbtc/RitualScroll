export default function Web3Preview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#030304', color: '#FFFFFF', fontFamily: '"Inter", sans-serif' }}>
      <div className="absolute inset-0" style={{ backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(to right, rgba(30,41,59,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.4) 1px, transparent 1px)', WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] opacity-10" style={{ background: 'radial-gradient(ellipse, #F7931A, transparent 70%)', filter: 'blur(120px)' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5">
          <span className="text-xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Ritual</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-mono uppercase tracking-wider" style={{ color: '#94A3B8' }}>
            <span className="hover:text-[#F7931A] cursor-pointer transition-colors">Protocol</span>
            <span className="hover:text-[#F7931A] cursor-pointer transition-colors">Docs</span>
            <button className="px-6 py-2.5 rounded-full text-white font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform" style={{ background: 'linear-gradient(to right, #EA580C, #F7931A)', boxShadow: '0 0 20px -5px rgba(234,88,12,0.5)' }}>Launch App</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-24 md:py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-mono uppercase tracking-widest" style={{ borderColor: 'rgba(247,147,26,0.3)', color: '#F7931A', backgroundColor: 'rgba(247,147,26,0.08)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F7931A', boxShadow: '0 0 8px #F7931A' }} />Live on Mainnet
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              The Infrastructure for{' '}<span style={{ background: 'linear-gradient(to right, #F7931A, #FFD600)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Autonomous Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#94A3B8' }}>Deploy sovereign agents with on-chain ML, verifiable inference, and encrypted compute.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 rounded-full text-white font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform" style={{ background: 'linear-gradient(to right, #EA580C, #F7931A)', boxShadow: '0 0 30px -5px rgba(247,147,26,0.6)' }}>Start Building</button>
              <button className="px-8 py-4 rounded-full border-2 text-white font-medium text-sm hover:bg-white/10 transition-colors" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>Explore Docs</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { icon: '⬡', title: 'On-Chain ML', desc: 'ONNX inference as a native precompile. Deterministic and verifiable.', color: '#F7931A' },
              { icon: '◈', title: 'Encrypted Compute', desc: 'FHE and TEE for private execution. Your strategy stays secret.', color: '#EA580C' },
              { icon: '⇄', title: 'HTTP Oracle', desc: 'Fetch external data on-chain. JQ extraction, webhook delivery.', color: '#FFD600' },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group" style={{ backgroundColor: '#0F1115', borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center text-xl border" style={{ backgroundColor: `${f.color}20`, borderColor: `${f.color}50`, color: f.color }}>{f.icon}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-8 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8 text-center">
            {[{ val: '$10M+', label: 'TVL Settled' }, { val: '3,847', label: 'Agents Live' }, { val: '142', label: 'Active Nodes' }, { val: '99.99%', label: 'Uptime' }].map((s, i) => (
              <div key={i}><div className="text-2xl md:text-3xl font-bold font-mono" style={{ color: '#F7931A' }}>{s.val}</div><div className="text-xs uppercase tracking-widest mt-1" style={{ color: '#94A3B8' }}>{s.label}</div></div>
            ))}
          </div>
        </section>
        <footer className="border-t px-8 py-6 flex justify-between items-center text-xs" style={{ borderColor: 'rgba(255,255,255,0.06)', color: '#94A3B8' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-6"><span className="hover:text-[#F7931A] cursor-pointer">Github</span><span className="hover:text-[#F7931A] cursor-pointer">Docs</span></div>
        </footer>
      </div>
    </div>
  );
}