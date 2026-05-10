export default function ProfessionalPreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#FFFFFF', color: '#1E293B', fontFamily: '"Inter", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4 border-b" style={{ borderColor: '#E2E8F0' }}>
          <span className="text-lg font-semibold" style={{ color: '#0F172A' }}>Ritual</span>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#64748B' }}>
            <span className="cursor-pointer hover:text-[#0F172A]">Platform</span>
            <span className="cursor-pointer hover:text-[#0F172A]">Solutions</span>
            <span className="cursor-pointer hover:text-[#0F172A]">Resources</span>
            <button className="px-5 py-2.5 rounded-md text-white text-sm font-medium" style={{ backgroundColor: '#0F172A' }}>Contact Sales</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-20 md:py-28">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: '#F0F9FF', color: '#0369A1' }}>Enterprise Ready</div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: '#0F172A' }}>Autonomous intelligence infrastructure</h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#64748B' }}>Deploy verifiable ML, sovereign agents, and encrypted compute with enterprise-grade reliability and compliance.</p>
              <div className="flex gap-3">
                <button className="px-6 py-3 rounded-md text-white text-sm font-medium" style={{ backgroundColor: '#0F172A' }}>Schedule Demo</button>
                <button className="px-6 py-3 rounded-md border text-sm font-medium" style={{ borderColor: '#CBD5E1', color: '#334155' }}>View Documentation</button>
              </div>
            </div>
            <div className="hidden md:block p-8 rounded-lg" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div className="space-y-4">
                {[{ label: 'Uptime SLA', value: '99.99%' }, { label: 'Active Nodes', value: '142' }, { label: 'Agents Deployed', value: '3,847' }, { label: 'Transactions Settled', value: '$10M+' }].map((s, i) => (
                  <div key={i} className="flex justify-between py-3 border-b" style={{ borderColor: '#E2E8F0' }}>
                    <span className="text-sm" style={{ color: '#64748B' }}>{s.label}</span>
                    <span className="text-sm font-semibold" style={{ color: '#0F172A' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#0F172A' }}>Platform Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Verifiable ML', desc: 'ONNX inference with TEE attestation and deterministic outputs.', icon: '📊' },
                { title: 'Agent Orchestration', desc: 'Self-funding agents with persistent state and automated scheduling.', icon: '⚙️' },
                { title: 'Data Privacy', desc: 'FHE encryption and dKMS for confidential execution at scale.', icon: '🛡️' },
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-lg bg-white border hover:shadow-sm transition-shadow" style={{ borderColor: '#E2E8F0' }}>
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#0F172A' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="px-8 py-6 border-t flex justify-between text-xs" style={{ borderColor: '#E2E8F0', color: '#94A3B8' }}>
          <span>© 2026 Ritual Technologies, Inc.</span>
          <div className="flex gap-4"><span>Privacy</span><span>Terms</span><span>Security</span></div>
        </footer>
      </div>
    </div>
  );
}