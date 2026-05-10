export default function EnterprisePreview() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto relative" style={{ backgroundColor: '#0F172A', color: '#E2E8F0', fontFamily: '"Inter", sans-serif' }}>
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: '#1E293B' }}>
          <span className="text-lg font-semibold text-white">RITUAL</span>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: '#94A3B8' }}>
            <span className="hover:text-white cursor-pointer">Platform</span>
            <span className="hover:text-white cursor-pointer">Security</span>
            <span className="hover:text-white cursor-pointer">Compliance</span>
            <button className="px-5 py-2.5 rounded text-sm font-medium" style={{ backgroundColor: '#3B82F6', color: 'white' }}>Request Access</button>
          </div>
        </nav>
        <section className="px-8 md:px-16 py-24 md:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-medium mb-6" style={{ backgroundColor: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.2)' }}>SOC 2 Type II Certified</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">Enterprise-grade AI infrastructure for the blockchain</h1>
            <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: '#94A3B8' }}>Deploy verifiable ML models, sovereign agents, and encrypted compute with the security and compliance your organization requires.</p>
            <div className="flex gap-4">
              <button className="px-8 py-4 rounded text-white font-medium text-sm" style={{ backgroundColor: '#3B82F6' }}>Talk to Sales</button>
              <button className="px-8 py-4 rounded border text-sm font-medium" style={{ borderColor: '#334155', color: '#CBD5E1' }}>Read Whitepaper</button>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-16 py-16" style={{ backgroundColor: '#1E293B' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ v: '99.99%', l: 'Uptime SLA' }, { v: 'SOC 2', l: 'Certified' }, { v: '142', l: 'Global Nodes' }, { v: '<50ms', l: 'Latency p99' }].map((s, i) => (
              <div key={i} className="p-6 rounded" style={{ backgroundColor: 'rgba(15,23,42,0.5)' }}>
                <div className="text-2xl font-bold text-white mb-1">{s.v}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#64748B' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-8 md:px-16 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { title: 'Security First', desc: 'TEE attestation, FHE encryption, and hardware-backed key management.', icon: '🛡️' },
              { title: 'Scalable Infrastructure', desc: '142 validator nodes with automatic load balancing and failover.', icon: '📈' },
              { title: 'Compliance Ready', desc: 'SOC 2, GDPR, and HIPAA compliant infrastructure out of the box.', icon: '✅' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded border" style={{ borderColor: '#1E293B', backgroundColor: 'rgba(30,41,59,0.3)' }}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="px-8 py-6 border-t flex justify-between text-xs" style={{ borderColor: '#1E293B', color: '#64748B' }}>
          <span>© 2026 Ritual Technologies</span>
          <div className="flex gap-4"><span>Security</span><span>Privacy</span><span>Terms</span></div>
        </footer>
      </div>
    </div>
  );
}