export default function OrganicPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FEFCF3', color: '#3D352A', fontFamily: '"Lora", "Georgia", serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 md:px-16 py-6">
          <span className="text-xl italic" style={{ color: '#8B6914' }}>ritual</span>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.15em]" style={{ fontFamily: '"Inter", sans-serif', color: '#A09078' }}>
            <span className="hover:text-[#8B6914] cursor-pointer">Explore</span>
            <span className="hover:text-[#8B6914] cursor-pointer">Journal</span>
            <button className="px-5 py-2 rounded-full text-xs" style={{ backgroundColor: '#8B6914', color: '#FEFCF3' }}>Connect</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl leading-[1.1] mb-8 italic">Naturally <span style={{ color: '#8B6914' }}>Autonomous</span></h1>
            <p className="text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: '#6B5D4A' }}>Like ecosystems in the wild, autonomous intelligence finds its own equilibrium. We build the terrain — verifiable, encrypted, self-sustaining.</p>
            <button className="px-8 py-3.5 rounded-full text-sm hover:brightness-110 transition-all" style={{ fontFamily: '"Inter", sans-serif', backgroundColor: '#8B6914', color: '#FEFCF3' }}>Begin Your Journey</button>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: 'Rooted Inference', desc: 'ONNX models grow as precompiles. Verifiable and deeply integrated.' },
              { title: 'Living Agents', desc: 'Self-sustaining agents that adapt and persist beyond their origins.' },
              { title: 'Sheltered Compute', desc: 'FHE encryption provides a canopy of privacy over your data.' },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl border" style={{ borderColor: '#E8DFD0', backgroundColor: '#FBF7EC' }}>
                <h3 className="text-xl italic mb-3" style={{ color: '#8B6914' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: '"Inter", sans-serif', color: '#6B5D4A' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 text-center" style={{ backgroundColor: '#3D352A', color: '#FEFCF3' }}>
          <blockquote className="text-2xl md:text-4xl italic max-w-3xl mx-auto leading-relaxed mb-6">&ldquo;Intelligence, like nature, finds a way.&rdquo;</blockquote>
          <div className="w-8 h-px mx-auto" style={{ backgroundColor: '#8B6914' }} />
        </section>
        <footer className="px-8 py-8 text-center text-xs italic" style={{ color: '#A09078' }}>© 2026 Ritual · Growing the Future</footer>
      </div>
    </div>
  );
}