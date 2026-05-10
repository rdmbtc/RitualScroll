export default function NewsprintPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#F5F0E8', color: '#1A1A1A', fontFamily: '"Newsreader", "Times New Roman", serif' }}>
      <div className="relative z-10">
        <header className="text-center px-8 py-6 border-b-4 border-black">
          <div className="text-xs uppercase tracking-[0.5em] mb-2" style={{ fontFamily: '"Inter", sans-serif' }}>EST. 2024 · A LAB FOR AUTONOMOUS INTELLIGENCE</div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>THE RITUAL GAZETTE</h1>
          <div className="flex items-center justify-center gap-4 mt-2 text-xs uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif', color: '#666' }}>
            <span>Volume IV</span><span>·</span><span>May 9, 2026</span><span>·</span><span>Price: Free</span>
          </div>
        </header>
        <div className="h-1 bg-black" /><div className="h-px bg-black mt-0.5" />
        <section className="px-8 md:px-16 py-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="border-r-2 border-black pr-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Autonomous Agents Reach New Milestone as Network Surpasses 3,847 Live Deployments</h2>
              <div className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: '"Inter", sans-serif', color: '#666' }}>By the Editorial Board · Breaking News</div>
              <div className="columns-2 gap-8 text-base leading-relaxed" style={{ color: '#333' }}>
                <p className="mb-4"><span className="text-5xl float-left mr-2 leading-[0.8] font-bold">T</span>he Ritual protocol has reached an unprecedented milestone this week, with the number of live autonomous agents surpassing 3,847 — a figure that represents a fundamental shift in how on-chain intelligence operates.</p>
                <p className="mb-4">The network, which provides infrastructure for verifiable ML inference, sovereign agents, and encrypted compute, now processes over $10 million in settled transactions.</p>
                <p>&ldquo;The question is whether intelligence can persist, coordinate, and survive in the wild,&rdquo; reads the Ritual manifesto. Based on these numbers, the answer appears to be a resounding yes.</p>
              </div>
            </div>
            <div>
              <div className="border-b-2 border-black pb-4 mb-4">
                <h3 className="text-xl font-bold mb-2">IN THIS EDITION</h3>
              </div>
              {['ONNX Precompiles Now 40% Faster', 'FHE Compute Reaches Production', 'Scheduler System Gets Upgrade', 'dKMS: Private Keys On-Chain'].map((t, i) => (
                <div key={i} className="py-3 border-b border-black/20"><span className="text-sm leading-snug">{t}</span></div>
              ))}
              <div className="mt-6 p-4 border-2 border-black text-center">
                <div className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: '"Inter", sans-serif' }}>NETWORK STATS</div>
                <div className="text-3xl font-bold">142</div>
                <div className="text-xs uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif', color: '#666' }}>Active Validator Nodes</div>
              </div>
            </div>
          </div>
        </section>
        <footer className="px-8 py-4 border-t-2 border-black text-center text-xs uppercase tracking-widest" style={{ fontFamily: '"Inter", sans-serif', color: '#666' }}>
          © 2026 The Ritual Gazette · All Rights Reserved
        </footer>
      </div>
    </div>
  );
}