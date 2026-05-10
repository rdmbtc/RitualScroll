export default function BauhausPreview() {
  return (
    <div className="w-full h-full min-h-[800px] bg-[#F3F1EC] text-[#111111] overflow-auto font-sans">
      {/* SECTION 1 — HERO */}
      <section className="min-h-screen grid md:grid-cols-2 relative">
        {/* Left Side */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-24 relative z-10">
          <h1 className="text-[15vw] md:text-[8rem] lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
            RITUAL
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-8 leading-tight">
            A LAB FOR<br />AUTONOMOUS<br />INTELLIGENCE
          </p>
          <p className="text-lg md:text-xl text-[#111111]/70 max-w-md leading-relaxed">
            The next markets will not be built by humans alone.
          </p>
          
          {/* Geometric accent */}
          <div className="mt-12 flex items-center gap-4">
            <div className="w-16 h-16 border-4 border-[#8F2E2E]" />
            <div className="w-24 h-1 bg-[#111111]" />
          </div>
        </div>

        {/* Right Side - Geometric Composition */}
        <div className="relative flex items-center justify-center p-8 md:p-12 bg-[#D9D5CE]/30">
          <svg width="400" height="500" viewBox="0 0 400 500" className="max-w-full h-auto">
            {/* Wireframe falling figure */}
            <g opacity="0.9">
              {/* Head circle */}
              <circle cx="200" cy="80" r="40" fill="none" stroke="#111111" strokeWidth="3" />
              
              {/* Spine */}
              <line x1="200" y1="120" x2="200" y2="280" stroke="#111111" strokeWidth="3" />
              
              {/* Shoulders */}
              <line x1="140" y1="150" x2="260" y2="150" stroke="#111111" strokeWidth="3" />
              
              {/* Arms */}
              <line x1="140" y1="150" x2="110" y2="250" stroke="#111111" strokeWidth="3" />
              <line x1="260" y1="150" x2="290" y2="250" stroke="#111111" strokeWidth="3" />
              
              {/* Hips */}
              <line x1="170" y1="280" x2="230" y2="280" stroke="#111111" strokeWidth="3" />
              
              {/* Legs */}
              <line x1="170" y1="280" x2="160" y2="420" stroke="#111111" strokeWidth="3" />
              <line x1="230" y1="280" x2="240" y2="420" stroke="#111111" strokeWidth="3" />
              
              {/* Execution nodes */}
              <rect x="190" y="70" width="20" height="20" fill="#8F2E2E" />
              <rect x="130" y="140" width="20" height="20" fill="#23395D" />
              <rect x="250" y="140" width="20" height="20" fill="#23395D" />
              <rect x="190" y="270" width="20" height="20" fill="#9E7B2F" />
              
              {/* Intersecting circles */}
              <circle cx="200" cy="200" r="80" fill="none" stroke="#8F2E2E" strokeWidth="2" opacity="0.5" />
              <circle cx="200" cy="240" r="60" fill="none" stroke="#23395D" strokeWidth="2" opacity="0.5" />
              
              {/* Grid overlay */}
              <line x1="0" y1="150" x2="400" y2="150" stroke="#111111" strokeWidth="1" opacity="0.2" />
              <line x1="0" y1="280" x2="400" y2="280" stroke="#111111" strokeWidth="1" opacity="0.2" />
              <line x1="200" y1="0" x2="200" y2="500" stroke="#111111" strokeWidth="1" opacity="0.2" />
            </g>
          </svg>
        </div>

        {/* Heavy horizontal rule */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#111111]" />
      </section>

      {/* SECTION 2 — THESIS */}
      <section className="px-8 md:px-12 lg:px-24 py-24 md:py-32 border-b-4 border-[#111111]">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-16 tracking-tight">
            THE INTERNET IS MOVING<br />FROM TOOLS TO PARTICIPANTS
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg leading-relaxed border-l-4 border-[#8F2E2E] pl-6">
              <p className="font-bold">Single agents become workflows.</p>
              <p className="font-bold">Workflows become multi-agent systems.</p>
              <p className="font-bold">Multi-agent systems become markets, institutions, and execution environments.</p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed border-l-4 border-[#23395D] pl-6">
              <p>The frontier is no longer intelligence alone.</p>
              <p className="font-black text-xl">The frontier is persistence, coordination, and survival.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SYSTEM FAILURE MODES */}
      <section className="px-8 md:px-12 lg:px-24 py-24 md:py-32 bg-[#D9D5CE]/20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border-4 border-[#111111] p-8 bg-[#F3F1EC] hover:translate-x-1 hover:translate-y-1 transition-transform duration-100">
            <div className="text-6xl font-black mb-4 text-[#8F2E2E]">01</div>
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">IDENTITY</h3>
            <div className="w-12 h-12 border-4 border-[#8F2E2E] mt-6" />
          </div>
          <div className="border-4 border-[#111111] p-8 bg-[#F3F1EC] hover:translate-x-1 hover:translate-y-1 transition-transform duration-100">
            <div className="text-6xl font-black mb-4 text-[#23395D]">02</div>
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">SETTLEMENT</h3>
            <div className="w-12 h-12 border-4 border-[#23395D] mt-6" />
          </div>
          <div className="border-4 border-[#111111] p-8 bg-[#F3F1EC] hover:translate-x-1 hover:translate-y-1 transition-transform duration-100">
            <div className="text-6xl font-black mb-4 text-[#9E7B2F]">03</div>
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">COORDINATION</h3>
            <div className="w-12 h-12 border-4 border-[#9E7B2F] mt-6" />
          </div>
        </div>
      </section>

      {/* SECTION 4 — AUTONOMOUS AGENT PROPERTIES */}
      <section className="px-8 md:px-12 lg:px-24 py-24 md:py-32 border-t-4 border-[#111111]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="relative">
              <div className="text-[8rem] font-black leading-none text-[#8F2E2E]/20">01</div>
              <div className="absolute top-4 left-4 w-24 h-24 border-4 border-[#8F2E2E]" />
            </div>
            <div className="border-l-4 border-[#111111] pl-8">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">
                OUTLIVES ITS OPERATOR
              </h3>
              <p className="text-lg text-[#111111]/70">
                State, identity, and execution persist.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
            <div className="border-l-4 border-[#111111] pl-8 order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">
                HOLDS CAPITAL
              </h3>
              <p className="text-lg text-[#111111]/70">
                Software earns, spends, and reinvests.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="text-[8rem] font-black leading-none text-[#23395D]/20 text-right">02</div>
              <div className="absolute top-4 right-4 w-24 h-24 border-4 border-[#23395D]" />
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="relative">
              <div className="text-[8rem] font-black leading-none text-[#9E7B2F]/20">03</div>
              <div className="absolute top-4 left-4 w-24 h-24 border-4 border-[#9E7B2F]" />
            </div>
            <div className="border-l-4 border-[#111111] pl-8">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">
                KEEPS SECRETS
              </h3>
              <p className="text-lg text-[#111111]/70">
                Keys, prompts, and strategy remain private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — MACHINE INSTITUTIONS (Inverted) */}
      <section className="bg-[#111111] text-[#F3F1EC] px-8 md:px-12 lg:px-24 py-24 md:py-32 relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-[#F3F1EC]" />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-16 tracking-tight">
            SOFTWARE NEEDS<br />INSTITUTIONS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="border-4 border-[#F3F1EC] p-6">
              <p className="text-2xl font-black uppercase">RULES</p>
            </div>
            <div className="border-4 border-[#F3F1EC] p-6">
              <p className="text-2xl font-black uppercase">GUARANTEES</p>
            </div>
            <div className="border-4 border-[#F3F1EC] p-6">
              <p className="text-2xl font-black uppercase">MARKETS</p>
            </div>
            <div className="border-4 border-[#F3F1EC] p-6">
              <p className="text-2xl font-black uppercase">MEMORY</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — RESEARCH FRONTIERS */}
      <section className="px-8 md:px-12 lg:px-24 py-24 md:py-32 border-t-4 border-[#111111]">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight">
          RESEARCH FRONTIERS
        </h2>
        <p className="text-xl text-[#111111]/70 mb-16 max-w-3xl">
          Each frontier enables a different dimension of autonomous intelligence.
        </p>
        <div className="grid md:grid-cols-2 gap-0 border-4 border-[#111111] max-w-5xl">
          <div className="border-b-4 md:border-b-0 md:border-r-4 border-[#111111] p-10 bg-[#F3F1EC] hover:bg-[#8F2E2E] hover:text-[#F3F1EC] transition-colors duration-100">
            <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">
              ARTIFICIAL INTELLIGENCE
            </h3>
            <p className="text-sm">Decision under open-world pressure</p>
          </div>
          <div className="border-b-4 border-[#111111] p-10 bg-[#F3F1EC] hover:bg-[#23395D] hover:text-[#F3F1EC] transition-colors duration-100">
            <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">
              MECHANISM DESIGN
            </h3>
            <p className="text-sm">Coordination through incentives</p>
          </div>
          <div className="md:border-r-4 border-[#111111] p-10 bg-[#F3F1EC] hover:bg-[#9E7B2F] hover:text-[#F3F1EC] transition-colors duration-100">
            <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">
              SYSTEMS
            </h3>
            <p className="text-sm">Execution, memory, continuity</p>
          </div>
          <div className="p-10 bg-[#F3F1EC] hover:bg-[#111111] hover:text-[#F3F1EC] transition-colors duration-100">
            <h3 className="text-2xl font-black uppercase mb-3 tracking-tight">
              CRYPTOGRAPHY
            </h3>
            <p className="text-sm">Privacy, proofs, guarantees</p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL STATEMENT */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-12 lg:px-24 py-32 border-t-4 border-[#111111] relative">
        {/* Geometric background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#8F2E2E] opacity-20" />
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full border-4 border-[#23395D] opacity-20" />
        
        <div className="max-w-5xl relative z-10">
          <h2 className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-black uppercase leading-[0.85] mb-12 tracking-tighter">
            AGENTS ARE<br />ALREADY IN<br />THE WILD
          </h2>
          <p className="text-xl md:text-2xl text-[#111111]/70 mb-16 max-w-3xl leading-relaxed">
            Build where scheduling, keys, attestation, and execution guarantees are first-class.
          </p>
          <button className="border-4 border-[#111111] bg-[#111111] text-[#F3F1EC] px-12 py-6 text-xl font-black uppercase hover:translate-x-1 hover:translate-y-1 transition-transform duration-100">
            READ THE DOCS →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-[#111111] px-8 md:px-12 lg:px-24 py-8 bg-[#D9D5CE]/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#111111]/60">
          <div className="font-bold uppercase tracking-wide">© 2026 RITUAL LAB</div>
          <div className="flex gap-8 uppercase text-xs font-bold">
            <a href="#" className="hover:text-[#8F2E2E] transition-colors">RESEARCH</a>
            <a href="#" className="hover:text-[#23395D] transition-colors">DOCUMENTATION</a>
            <a href="#" className="hover:text-[#9E7B2F] transition-colors">CONTACT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
