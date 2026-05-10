export default function NeoBrutalismPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FFFDF5', color: '#000000', fontFamily: '"Space Grotesk", sans-serif' }}>
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)' }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 border-b-4 border-black">
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 border-4 border-black font-black text-sm uppercase tracking-widest" style={{ backgroundColor: '#FF6B6B', boxShadow: '4px 4px 0px 0px #000' }}>
              RITUAL
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 font-bold text-sm uppercase">
            <span className="px-3 py-1 cursor-pointer hover:bg-[#FF6B6B] hover:border-2 hover:border-black transition-all duration-100">Protocol</span>
            <span className="px-3 py-1 cursor-pointer hover:bg-[#FFD93D] hover:border-2 hover:border-black transition-all duration-100">Docs</span>
            <span className="px-3 py-1 cursor-pointer hover:bg-[#C4B5FD] hover:border-2 hover:border-black transition-all duration-100">Community</span>
            <button className="px-4 py-2 border-4 border-black font-black uppercase text-sm bg-black text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100" style={{ boxShadow: '4px 4px 0px 0px #FF6B6B' }}>
              Launch App
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-6 md:px-16 py-16 md:py-24 border-b-4 border-black relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-8 right-8 w-20 h-20 border-4 border-black rotate-12" style={{ backgroundColor: '#FFD93D', boxShadow: '6px 6px 0px 0px #000' }} />
          <div className="absolute bottom-16 right-32 w-16 h-16 rounded-full border-4 border-black" style={{ backgroundColor: '#C4B5FD' }} />

          <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 border-4 border-black font-black text-xs uppercase tracking-widest mb-6 rotate-[-2deg]" style={{ backgroundColor: '#FFD93D', boxShadow: '4px 4px 0px 0px #000' }}>
                ★ NEW ERA OF INTELLIGENCE ★
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-6">
                <span className="block" style={{ WebkitTextStroke: '3px black', color: 'transparent' }}>BUILD</span>
                <span className="block rotate-[1deg]" style={{ color: '#FF6B6B' }}>AUTONOMOUS</span>
                <span className="block -rotate-[1deg]">AGENTS</span>
              </h1>
              <p className="text-xl font-bold mb-8 max-w-lg leading-snug border-l-4 border-black pl-4">
                The next markets will not be built by humans alone. Ritual provides the infrastructure for sovereign AI agents.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 border-4 border-black font-black text-lg uppercase bg-[#FF6B6B] text-black active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100" style={{ boxShadow: '6px 6px 0px 0px #000' }}>
                  Start Building →
                </button>
                <button className="px-8 py-4 border-4 border-black font-black text-lg uppercase bg-white text-black active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100" style={{ boxShadow: '6px 6px 0px 0px #000' }}>
                  Read Docs
                </button>
              </div>
            </div>

            {/* Stacked card composition */}
            <div className="hidden md:block relative">
              <div className="absolute top-4 left-4 w-full h-full border-4 border-black bg-[#C4B5FD]" />
              <div className="relative border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0px 0px #000' }}>
                <div className="border-b-4 border-black pb-4 mb-6 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-black bg-[#FF6B6B]" />
                  <div className="w-4 h-4 rounded-full border-2 border-black bg-[#FFD93D]" />
                  <div className="w-4 h-4 rounded-full border-2 border-black bg-[#00ff88]" />
                  <span className="text-xs font-bold uppercase ml-2">agent_dashboard.tsx</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <p><span className="text-[#C4B5FD] font-bold">const</span> agent = <span className="text-[#FF6B6B]">await</span> ritual.<span className="text-[#FFD93D]">deploy</span>{'({'}</p>
                  <p className="pl-4">model: <span className="text-[#00ff88]">&quot;llama-3.1&quot;</span>,</p>
                  <p className="pl-4">schedule: <span className="text-[#00ff88]">&quot;every 100 blocks&quot;</span>,</p>
                  <p className="pl-4">wallet: <span className="text-[#00ff88]">&quot;auto-fund&quot;</span>,</p>
                  <p>{'}'});</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features with color blocking */}
        <section className="border-b-4 border-black">
          <div className="grid md:grid-cols-3">
            {[
              { title: 'SOVEREIGN AGENTS', desc: 'Agents that outlive their operators. Persistent state, scheduling, and self-funding.', bg: '#FFD93D', icon: '▣' },
              { title: 'ON-CHAIN ML', desc: 'Run models as precompiles. ONNX inference with deterministic, verifiable results.', bg: '#FF6B6B', icon: '⬡' },
              { title: 'ENCRYPTED COMPUTE', desc: 'TEE-backed private execution. Keys, prompts, and strategies stay confidential.', bg: '#C4B5FD', icon: '◈' },
            ].map((f, i) => (
              <div key={i} className="border-r-4 border-b-4 md:border-b-0 border-black p-8 md:p-10 relative group hover:-translate-y-2 transition-all duration-200" style={{ backgroundColor: f.bg }}>
                <div className="text-5xl mb-4 font-black">{f.icon}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">{f.title}</h3>
                <p className="font-bold text-base leading-snug opacity-80">{f.desc}</p>
                <div className="absolute top-3 right-3 text-7xl font-black opacity-10">{String(i + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats marquee-style */}
        <section className="border-b-4 border-black bg-black text-white py-6 overflow-hidden">
          <div className="flex gap-12 items-center justify-center font-black text-2xl uppercase tracking-widest">
            <span>★ 3,847 AGENTS LIVE</span>
            <span style={{ color: '#FF6B6B' }}>★</span>
            <span>142 NODES</span>
            <span style={{ color: '#FFD93D' }}>★</span>
            <span>99.99% UPTIME</span>
            <span style={{ color: '#C4B5FD' }}>★</span>
            <span>$10M+ SETTLED</span>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-16 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              READY TO <span style={{ color: '#FF6B6B' }}>BUILD</span>?
            </h2>
            <p className="text-xl font-bold mb-8 max-w-2xl mx-auto">
              Deploy your first autonomous agent in minutes. No permission needed.
            </p>
            <button className="px-10 py-5 border-4 border-black font-black text-xl uppercase bg-[#FF6B6B] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-100 rotate-[-1deg]" style={{ boxShadow: '8px 8px 0px 0px #000' }}>
              START BUILDING NOW →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-black px-6 py-6 flex justify-between items-center">
          <span className="font-black text-sm uppercase">© 2026 RITUAL</span>
          <div className="flex gap-4 font-bold text-sm uppercase">
            <span className="hover:bg-[#FFD93D] hover:border-2 hover:border-black px-2 py-1 cursor-pointer transition-all duration-100">Github</span>
            <span className="hover:bg-[#FF6B6B] hover:border-2 hover:border-black px-2 py-1 cursor-pointer transition-all duration-100">Docs</span>
            <span className="hover:bg-[#C4B5FD] hover:border-2 hover:border-black px-2 py-1 cursor-pointer transition-all duration-100">Discord</span>
          </div>
        </footer>
      </div>
    </div>
  );
}