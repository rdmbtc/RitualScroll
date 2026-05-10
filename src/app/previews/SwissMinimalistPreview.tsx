export default function SwissMinimalistPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FFFFFF', color: '#000000', fontFamily: '"Inter", "Helvetica Neue", sans-serif' }}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 py-6 border-b-4 border-black">
          <span className="text-xl font-black uppercase tracking-widest">Ritual</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <span className="cursor-pointer hover:text-[#FF3000] transition-colors duration-150">System</span>
            <span className="cursor-pointer hover:text-[#FF3000] transition-colors duration-150">Method</span>
            <span className="cursor-pointer hover:text-[#FF3000] transition-colors duration-150">Journal</span>
            <button className="px-6 py-3 bg-black text-white uppercase text-sm font-bold tracking-widest hover:bg-[#FF3000] transition-colors duration-200">
              Enter
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="border-b-4 border-black">
          <div className="grid md:grid-cols-[7fr_5fr]">
            {/* Left - massive typography */}
            <div className="px-8 md:px-16 py-16 md:py-24 border-r-4 border-black">
              <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#FF3000' }}>
                01. System
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-8">
                Auton
                <br />
                omous
              </h1>
              <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-10">
                A lab for autonomous intelligence. The next markets will not be built by humans alone.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-black text-white uppercase text-sm font-bold tracking-widest hover:bg-[#FF3000] transition-colors duration-200">
                  Read Thesis
                </button>
                <button className="px-8 py-4 border-2 border-black uppercase text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors duration-200">
                  Documentation
                </button>
              </div>
            </div>

            {/* Right - geometric composition */}
            <div className="hidden md:flex items-center justify-center p-12 relative" style={{ backgroundColor: '#F2F2F2', backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
              {/* Bauhaus-inspired composition */}
              <div className="relative w-64 h-64">
                <div className="absolute top-0 left-0 w-32 h-32 bg-black" />
                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full border-4 border-black" />
                <div className="absolute top-8 right-0 w-24 h-24" style={{ backgroundColor: '#FF3000' }} />
                <div className="absolute bottom-4 left-4 w-16 h-1 bg-black" />
                <div className="absolute top-16 left-12 w-1 h-24 bg-black" />
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="border-b-4 border-black">
          <div className="grid md:grid-cols-3">
            {[
              { num: 'I', title: 'VERIFIABLE INFERENCE', desc: 'Run ONNX models on-chain with deterministic outputs. TEE-attested computation.' },
              { num: 'II', title: 'SOVEREIGN AGENTS', desc: 'Self-funding agents that outlive their operators. Persistent state and scheduling.' },
              { num: 'III', title: 'ENCRYPTED COMPUTE', desc: 'FHE and dKMS for private execution. Strategy and keys stay confidential.' },
            ].map((f, i) => (
              <div key={i} className="p-8 md:p-12 border-r-4 border-b-4 md:border-b-0 border-black group hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">
                <div className="text-5xl md:text-6xl font-black mb-6 opacity-10 group-hover:opacity-30 transition-opacity">{f.num}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-[#FF3000] transition-colors">{f.title}</h3>
                <p className="text-base leading-relaxed font-medium opacity-70">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats section */}
        <section className="border-b-4 border-black" style={{ backgroundColor: '#F2F2F2', backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px', backgroundPosition: '0 0' }}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { val: '3,847', label: 'AGENTS LIVE' },
              { val: '142', label: 'ACTIVE NODES' },
              { val: '99.99%', label: 'UPTIME SLA' },
              { val: '$10M+', label: 'SETTLED' },
            ].map((s, i) => (
              <div key={i} className="p-8 md:p-12 border-r-4 border-b-4 md:border-b-0 border-black text-center group hover:bg-[#FF3000] hover:text-white transition-colors duration-200 cursor-pointer" style={{ backgroundColor: 'rgba(242,242,242,0.9)' }}>
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2 group-hover:scale-105 transition-transform">{s.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-50">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Thesis section */}
        <section className="px-8 md:px-16 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#FF3000' }}>
              02. Method
            </div>
            <div className="grid md:grid-cols-[5fr_7fr] gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                  The
                  <br />
                  Shift
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed font-medium">
                <p>Single agents become workflows. Workflows become multi-agent systems. Multi-agent systems become markets, institutions, and execution environments.</p>
                <p className="font-black text-xl">The question is whether intelligence can persist, coordinate, and survive in the wild.</p>
                <div className="h-1 w-24 bg-black mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-16 py-16 md:py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              Build
            </h2>
            <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto">
              Deploy your first autonomous agent. Model calls, scheduling, keys, attestation, and execution guarantees are first-class.
            </p>
            <button className="px-10 py-5 border-2 border-white text-white uppercase text-sm font-bold tracking-widest hover:bg-[#FF3000] hover:border-[#FF3000] transition-colors duration-200">
              Start Building →
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-black px-8 py-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest">
          <span>© 2026 Ritual</span>
          <div className="flex gap-6 opacity-50">
            <span className="hover:text-[#FF3000] hover:opacity-100 cursor-pointer transition-all">Github</span>
            <span className="hover:text-[#FF3000] hover:opacity-100 cursor-pointer transition-all">Docs</span>
            <span className="hover:text-[#FF3000] hover:opacity-100 cursor-pointer transition-all">Contact</span>
          </div>
        </footer>
      </div>
    </div>
  );
}