"use client"

export default function ArtDecoPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#0A0A0A', color: '#F2F0E4', fontFamily: '"Josefin Sans", sans-serif' }}>
      {/* Diagonal crosshatch bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
      {/* Sunburst radial from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-[0.08]" style={{ background: 'radial-gradient(ellipse at center top, #D4AF37, transparent 70%)' }} />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-center px-8 py-6 border-b" style={{ borderColor: 'rgba(212,175,55,0.2)' }}>
          <div className="flex items-center gap-12">
            <div className="hidden md:flex gap-6 text-xs uppercase tracking-[0.2em]" style={{ color: '#888888' }}>
              <span className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-300">Protocol</span>
              <span className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-300">Network</span>
            </div>
            <h1 className="text-2xl uppercase tracking-[0.3em] font-normal" style={{ fontFamily: '"Marcellus", "Playfair Display", serif', color: '#D4AF37' }}>
              ◆ RITUAL ◆
            </h1>
            <div className="hidden md:flex gap-6 text-xs uppercase tracking-[0.2em]" style={{ color: '#888888' }}>
              <span className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-300">Docs</span>
              <span className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-300">Connect</span>
            </div>
          </div>
        </nav>

        {/* Decorative gold line */}
        <div className="flex justify-center py-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px" style={{ backgroundColor: '#D4AF37' }} />
            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: '#D4AF37' }} />
            <div className="w-16 h-px" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </div>

        {/* Hero */}
        <section className="px-8 md:px-16 py-16 md:py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#888888' }}>
              — A LAB FOR AUTONOMOUS INTELLIGENCE —
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl uppercase tracking-[0.15em] leading-none mb-8 font-normal" style={{ fontFamily: '"Marcellus", "Playfair Display", serif', color: '#D4AF37', textShadow: '0 0 40px rgba(212,175,55,0.2)' }}>
              THE FUTURE
              <br />
              IS AUTONOMOUS
            </h1>
            <div className="flex justify-center my-8">
              <div className="flex items-center gap-4">
                <div className="w-24 h-px" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
                <div className="w-3 h-3 rotate-45 border" style={{ borderColor: '#D4AF37' }} />
                <div className="w-24 h-px" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: '#888888' }}>
              The next markets will not be built by humans alone. Deploy sovereign agents with verifiable inference, encrypted compute, and on-chain settlement.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-8 py-4 border-2 uppercase text-sm tracking-[0.2em] transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]" style={{ borderColor: '#D4AF37', color: '#D4AF37', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D4AF37'; e.currentTarget.style.color = '#0A0A0A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#D4AF37'; }}>
                Enter Protocol
              </button>
              <button className="px-8 py-4 border uppercase text-sm tracking-[0.2em] transition-all duration-500 hover:border-[#D4AF37]" style={{ borderColor: 'rgba(212,175,55,0.3)', color: '#888888' }}>
                Read Thesis
              </button>
            </div>
          </div>
        </section>

        {/* Features with corner decorations */}
        <section className="px-8 md:px-16 py-16 md:py-24 border-t" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: '#D4AF37' }}>System Capabilities</span>
                <div className="w-12 h-px" style={{ backgroundColor: '#D4AF37' }} />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: 'I', title: 'VERIFIABLE INFERENCE', desc: 'ONNX models execute on-chain with TEE attestation. Deterministic and trustless.' },
                { num: 'II', title: 'SOVEREIGN AGENTS', desc: 'Self-funding agents with persistent state. They outlive their operators.' },
                { num: 'III', title: 'ENCRYPTED COMPUTE', desc: 'FHE and dKMS ensure private execution. Keys and strategies stay confidential.' },
              ].map((f, i) => (
                <div key={i} className="p-8 border relative group transition-all duration-500 hover:-translate-y-2" style={{ borderColor: 'rgba(212,175,55,0.2)', backgroundColor: '#141414' }}>
                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l transition-opacity duration-500 opacity-50 group-hover:opacity-100" style={{ borderColor: '#D4AF37' }} />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r transition-opacity duration-500 opacity-50 group-hover:opacity-100" style={{ borderColor: '#D4AF37' }} />

                  <div className="text-3xl mb-6 font-normal" style={{ fontFamily: '"Marcellus", serif', color: 'rgba(212,175,55,0.3)' }}>{f.num}</div>
                  <h3 className="text-lg uppercase tracking-[0.15em] mb-4 font-normal" style={{ fontFamily: '"Marcellus", serif', color: '#D4AF37' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats with rotated diamond icons */}
        <section className="px-8 md:px-16 py-16 border-t" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '3,847', label: 'AGENTS' },
              { val: '142', label: 'NODES' },
              { val: '99.99%', label: 'UPTIME' },
              { val: '$10M+', label: 'SETTLED' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-3 h-3 rotate-45 mb-4" style={{ backgroundColor: '#D4AF37' }} />
                <div className="text-3xl md:text-4xl mb-2 font-normal tracking-tight" style={{ fontFamily: '"Marcellus", serif', color: '#D4AF37', textShadow: '0 0 15px rgba(212,175,55,0.2)' }}>{s.val}</div>
                <div className="text-xs uppercase tracking-[0.2em]" style={{ color: '#888888' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-8 md:px-16 py-16 md:py-24 text-center border-t" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
          <div className="max-w-3xl mx-auto">
            <div className="p-12 border relative" style={{ borderColor: 'rgba(212,175,55,0.3)', boxShadow: '0 0 30px rgba(212,175,55,0.08)' }}>
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: '#D4AF37' }} />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: '#D4AF37' }} />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: '#D4AF37' }} />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: '#D4AF37' }} />

              <h2 className="text-4xl md:text-6xl uppercase tracking-[0.1em] mb-6 font-normal" style={{ fontFamily: '"Marcellus", serif', color: '#D4AF37' }}>
                Enter the Protocol
              </h2>
              <p className="text-base mb-8" style={{ color: '#888888' }}>Deploy where model calls, scheduling, and execution guarantees are first-class.</p>
              <button className="px-10 py-4 border-2 uppercase text-sm tracking-[0.2em] transition-all duration-500" style={{ borderColor: '#D4AF37', backgroundColor: '#D4AF37', color: '#0A0A0A' }}>
                Begin →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t px-8 py-8 text-center" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
            <div className="w-8 h-px" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
          </div>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: '#888888' }}>© MMXXVI · RITUAL · A LAB FOR AUTONOMOUS INTELLIGENCE</span>
        </footer>
      </div>
    </div>
  );
}