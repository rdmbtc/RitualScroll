export default function SaaSPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FAFAFA', color: '#111827', fontFamily: '"Inter", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: '#E5E7EB' }}>
          <span className="text-xl font-bold" style={{ color: '#6366F1' }}>ritual</span>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#6B7280' }}>
            <span className="cursor-pointer hover:text-[#111827]">Product</span>
            <span className="cursor-pointer hover:text-[#111827]">Pricing</span>
            <span className="cursor-pointer hover:text-[#111827]">Docs</span>
            <button className="px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: '#6366F1' }}>Get Started</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-28 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: '#EEF2FF', color: '#6366F1' }}>🚀 Now in General Availability</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Ship autonomous agents
              <br /><span style={{ color: '#6366F1' }}>in minutes, not months</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>Ritual gives you on-chain ML, agent scheduling, encrypted compute, and wallet management — all through a simple API.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3.5 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: '#6366F1' }}>Start Free Trial</button>
              <button className="px-8 py-3.5 rounded-lg border font-medium hover:bg-gray-50 transition-colors" style={{ borderColor: '#D1D5DB' }}>Book Demo</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-6">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest" style={{ color: '#9CA3AF' }}>
            <span>Trusted by 142+ teams</span><span>·</span><span>3,847 agents deployed</span><span>·</span><span>99.99% uptime SLA</span>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6366F1' }}>Platform</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Everything you need to build with AI on-chain</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '⚡', title: 'On-Chain ML', desc: 'Run ONNX models as native precompiles. Verifiable and deterministic.' },
                { icon: '🤖', title: 'Agent Platform', desc: 'Self-funding agents with scheduling, persistence, and wallet management.' },
                { icon: '🔐', title: 'Encrypted Compute', desc: 'FHE and TEE for private execution. Your strategies stay confidential.' },
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-xl border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" style={{ borderColor: '#E5E7EB' }}>
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16 text-center" style={{ backgroundColor: '#6366F1', color: 'white' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg opacity-80 mb-8">Deploy your first agent in under 5 minutes. No credit card required.</p>
            <button className="px-8 py-3.5 rounded-lg bg-white font-medium shadow-lg" style={{ color: '#6366F1' }}>Start Building Free →</button>
          </div>
        </section>
        <footer className="px-8 py-6 border-t flex justify-between text-xs" style={{ borderColor: '#E5E7EB', color: '#9CA3AF' }}>
          <span>© 2026 Ritual</span>
          <div className="flex gap-4"><span className="hover:text-[#6366F1] cursor-pointer">Github</span><span className="hover:text-[#6366F1] cursor-pointer">Docs</span><span className="hover:text-[#6366F1] cursor-pointer">Status</span></div>
        </footer>
      </div>
    </div>
  );
}