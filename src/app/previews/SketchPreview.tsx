export default function SketchPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FFFEF5', color: '#333', fontFamily: '"Caveat", "Patrick Hand", cursive' }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5 border-b-2" style={{ borderColor: '#333', borderStyle: 'dashed' }}>
          <span className="text-2xl">ritual ✏️</span>
          <div className="hidden md:flex gap-6 text-lg">
            <span className="cursor-pointer hover:underline" style={{ textDecorationStyle: 'wavy' }}>ideas</span>
            <span className="cursor-pointer hover:underline" style={{ textDecorationStyle: 'wavy' }}>notes</span>
            <button className="px-5 py-1.5 border-2 rounded-[20px_5px_20px_5px] text-lg hover:bg-[#333] hover:text-white transition-colors" style={{ borderColor: '#333' }}>let&apos;s go →</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm mb-4 opacity-50" style={{ fontFamily: '"Inter", sans-serif' }}>[ rough draft — v4 ]</div>
            <h1 className="text-5xl md:text-7xl leading-tight mb-6" style={{ transform: 'rotate(-1deg)' }}>
              what if intelligence could
              <br /><span className="underline decoration-wavy" style={{ textDecorationColor: '#FF6B6B', color: '#FF6B6B' }}>think for itself?</span>
            </h1>
            <p className="text-xl leading-relaxed max-w-lg mb-8" style={{ transform: 'rotate(0.5deg)' }}>we&apos;re building the infrastructure for autonomous agents. on-chain ML, encrypted compute, self-funding wallets... the whole sketch.</p>
            <button className="px-8 py-3 border-2 text-xl rounded-[15px_5px_15px_5px] hover:bg-[#333] hover:text-white transition-colors" style={{ borderColor: '#333', transform: 'rotate(-0.5deg)' }}>start sketching →</button>
          </div>
        </section>
        <section className="px-8 md:px-16 py-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { title: 'on-chain ML ⚡', desc: 'models run as precompiles. verifiable outputs.', angle: '-1deg' },
              { title: 'sovereign agents 🤖', desc: 'they fund themselves and outlive you.', angle: '0.5deg' },
              { title: 'encrypted 🔒', desc: 'FHE keeps your strategies secret.', angle: '-0.5deg' },
            ].map((f, i) => (
              <div key={i} className="p-6 border-2 rounded-[10px_3px_10px_3px]" style={{ borderColor: '#333', borderStyle: 'dashed', transform: `rotate(${f.angle})` }}>
                <h3 className="text-2xl mb-2">{f.title}</h3>
                <p className="text-base" style={{ color: '#666' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 py-12 text-center">
          <div className="text-3xl mb-4" style={{ transform: 'rotate(-1deg)' }}>&ldquo;the future is a rough draft&rdquo; ✨</div>
          <div className="text-sm opacity-50" style={{ fontFamily: '"Inter", sans-serif' }}>— someone, probably</div>
        </section>
        <footer className="px-8 py-6 border-t-2 text-center text-sm" style={{ borderColor: '#333', borderStyle: 'dashed', color: '#999' }}>
          © 2026 ritual · scribbled with love ♡
        </footer>
      </div>
    </div>
  );
}