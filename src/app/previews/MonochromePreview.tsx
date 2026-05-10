export default function MonochromePreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FFFFFF', color: '#000000', fontFamily: '"DM Serif Display", "Georgia", serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b-2 border-black">
          <span className="text-xl tracking-wide">Ritual</span>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: '"Inter", sans-serif' }}>
            <span className="cursor-pointer hover:underline underline-offset-4">Protocol</span>
            <span className="cursor-pointer hover:underline underline-offset-4">Research</span>
            <span className="cursor-pointer hover:underline underline-offset-4">About</span>
            <button className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all duration-200">Enter</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-32 border-b-2 border-black">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[7fr_5fr] gap-16 items-end">
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
                Autonomous
                <br /><em>Intelligence</em>
              </h1>
              <p className="text-lg leading-relaxed max-w-md" style={{ fontFamily: '"Inter", sans-serif', color: '#333' }}>A lab for autonomous intelligence. The next markets will not be built by humans alone.</p>
            </div>
            <div className="hidden md:block">
              <button className="w-full px-8 py-4 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black border-2 border-black transition-all duration-200 mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>Read the Thesis</button>
              <button className="w-full px-8 py-4 border-2 border-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-200" style={{ fontFamily: '"Inter", sans-serif' }}>Documentation</button>
            </div>
          </div>
        </section>
        <section className="border-b-2 border-black">
          <div className="grid md:grid-cols-3">
            {['Verifiable Inference', 'Sovereign Agents', 'Encrypted Compute'].map((t, i) => (
              <div key={i} className="p-8 md:p-12 border-r-2 border-black last:border-r-0 group cursor-pointer hover:bg-black hover:text-white transition-all duration-200">
                <span className="text-xs uppercase tracking-[0.2em] block mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>0{i+1}</span>
                <h3 className="text-2xl md:text-3xl mb-4"><em>{t}</em></h3>
                <p className="text-sm leading-relaxed opacity-70" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {i === 0 && 'ONNX models run on-chain with TEE attestation and deterministic outputs.'}
                  {i === 1 && 'Self-funding agents with persistent state that outlive their operators.'}
                  {i === 2 && 'FHE and dKMS ensure private execution. Keys stay confidential.'}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 md:py-24 border-b-2 border-black bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-3xl md:text-5xl leading-tight italic">&ldquo;The question is whether intelligence can persist, coordinate, and survive in the wild.&rdquo;</blockquote>
            <div className="w-12 h-0.5 bg-white mx-auto mt-8 mb-4" />
            <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: '"Inter", sans-serif' }}>Ritual Manifesto</span>
          </div>
        </section>
        <footer className="px-8 py-8 flex justify-between text-xs uppercase tracking-[0.2em]" style={{ fontFamily: '"Inter", sans-serif' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span className="hover:underline cursor-pointer">Github</span><span className="hover:underline cursor-pointer">Contact</span></div>
        </footer>
      </div>
    </div>
  );
}