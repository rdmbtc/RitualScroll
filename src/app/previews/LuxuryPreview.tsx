export default function LuxuryPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#F9F8F6', color: '#1A1A1A', fontFamily: '"Inter", sans-serif' }}>
      {/* Paper noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
      {/* Visible gridlines */}
      <div className="fixed inset-0 pointer-events-none z-40 hidden lg:flex justify-between px-[15%]">
        {[0,1,2,3].map(i => <div key={i} className="w-px h-full" style={{ backgroundColor: 'rgba(26,26,26,0.06)' }} />)}
      </div>

      <div className="relative z-10">
        {/* Nav */}
        <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <span className="text-xs uppercase tracking-[0.25em]" style={{ color: '#6C6863' }}>Ritual</span>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]" style={{ color: '#6C6863' }}>
            <span className="cursor-pointer hover:text-[#D4AF37] transition-colors duration-500">Protocol</span>
            <span className="cursor-pointer hover:text-[#D4AF37] transition-colors duration-500">Journal</span>
            <span className="cursor-pointer hover:text-[#D4AF37] transition-colors duration-500">About</span>
            <button className="px-6 py-3 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-500 relative overflow-hidden group">
              <span className="relative z-10">Enter</span>
              <span className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-8 md:px-16 py-20 md:py-32 border-b" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <div className="max-w-[1600px] mx-auto grid md:grid-cols-[7fr_5fr] gap-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8" style={{ backgroundColor: '#1A1A1A' }} />
                <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: '#6C6863' }}>A Lab for Autonomous Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
                Curated
                <br />
                <em className="not-italic" style={{ color: '#D4AF37' }}>Excellence</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-10" style={{ color: '#6C6863' }}>
                <span className="float-left text-6xl leading-[0.8] mr-3 font-normal" style={{ fontFamily: '"Playfair Display", serif' }}>T</span>
                he next markets will not be built by humans alone. Ritual provides the infrastructure where models, agents, and workflows become sovereign participants.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-500 relative overflow-hidden group">
                  <span className="relative z-10">Read Thesis</span>
                  <span className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
                <button className="px-8 py-4 border text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-500" style={{ borderColor: '#1A1A1A' }}>
                  Documentation
                </button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="aspect-[3/4] bg-[#EBE5DE] relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.12)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[10rem] opacity-[0.06] font-light" style={{ fontFamily: '"Playfair Display", serif' }}>R</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-[10px] uppercase tracking-[0.3em]" style={{ color: '#6C6863' }}>
                  <div style={{ writingMode: 'vertical-rl', position: 'absolute', right: '12px', bottom: '12px' }}>Editorial / Vol. 01</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-8 md:px-16 py-20 md:py-32">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: '#D4AF37' }} />
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: '#D4AF37' }}>The Process</span>
            </div>
            <div className="grid md:grid-cols-3 gap-px" style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}>
              {[
                { title: 'Verifiable Inference', desc: 'ONNX models as precompiles. TEE-attested, deterministic, trustless.' },
                { title: 'Sovereign Agents', desc: 'Self-funding agents with persistent state that outlive their operators.' },
                { title: 'Encrypted Compute', desc: 'FHE and dKMS ensure private execution. Keys stay confidential.' },
              ].map((f, i) => (
                <div key={i} className="pt-8 pr-12 group cursor-pointer">
                  <div className="text-[10px] uppercase tracking-[0.3em] mb-6" style={{ color: '#6C6863' }}>0{i+1}</div>
                  <h3 className="text-xl mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-700" style={{ fontFamily: '"Playfair Display", serif' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6C6863' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark Section */}
        <section className="px-8 md:px-16 py-20 md:py-32" style={{ backgroundColor: '#1A1A1A', color: '#F9F8F6' }}>
          <div className="max-w-[1600px] mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] block mb-8" style={{ color: 'rgba(249,248,246,0.5)' }}>The Thesis</span>
            <blockquote className="text-3xl md:text-5xl leading-tight tracking-tight max-w-3xl mx-auto mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              &ldquo;The question is whether intelligence can persist, coordinate, and <em>survive</em> in the wild.&rdquo;
            </blockquote>
            <div className="h-px w-12 mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }} />
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(249,248,246,0.4)' }}>Ritual Manifesto, 2026</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 md:px-16 py-8 border-t flex justify-between items-center text-[10px] uppercase tracking-[0.3em]" style={{ borderColor: 'rgba(26,26,26,0.1)', color: '#6C6863' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-6">
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-500">Github</span>
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors duration-500">Privacy</span>
          </div>
        </footer>
      </div>
    </div>
  );
}