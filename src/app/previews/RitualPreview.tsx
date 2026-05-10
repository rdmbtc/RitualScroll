import React from 'react';

export default function RitualPreview() {
  return (
    <div className="w-full bg-[#000000] text-[#9CA3AF] overflow-hidden min-h-screen" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .font-display { font-family: 'Archivo Black', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        .shadow-glow-green { box-shadow: 0 0 30px -5px rgba(25, 209, 132, 0.25); }
        .shadow-glow-pink { box-shadow: 0 0 30px -5px rgba(255, 29, 206, 0.2); }
        .shadow-card { box-shadow: 0 4px 40px -12px rgba(0, 0, 0, 0.5); }
        
        .bg-ritual-elevated { background-color: #111827; }
        .bg-ritual-surface { background-color: #1F2937; }
      `}} />

      {/* HEADER */}
      <header className="flex justify-between items-center py-6 px-8 border-b border-[#374151]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-[#19D184] rounded-lg shadow-glow-green bg-[#19D184]/10 text-[#19D184] font-bold">
            R
          </div>
          <span className="font-display text-2xl text-[#D1D5DB] tracking-tight">RITUAL</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          <a href="#" className="text-[#19D184] hover:text-[#BFFF00] transition-colors">Compute</a>
          <a href="#" className="text-[#D1D5DB] hover:text-[#19D184] transition-colors">Agents</a>
          <a href="#" className="text-[#D1D5DB] hover:text-[#19D184] transition-colors">Network</a>
        </nav>
        <button className="font-semibold text-sm px-4 py-2.5 rounded-lg border border-[#19D184] text-[#19D184] hover:bg-[#19D184]/10 hover:shadow-glow-green transition-all">
          Connect Wallet
        </button>
      </header>

      {/* MAIN CONTENT - ASYMMETRIC LAYOUT */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN - HERO & CONTROLS */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          
          <div>
            <h1 className="font-display text-5xl md:text-6xl text-[#D1D5DB] leading-tight tracking-tight mb-6">
              SOVEREIGN<br />
              <span className="text-[#19D184]">INTELLIGENCE</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg max-w-lg leading-relaxed">
              Verifiable off-chain compute infrastructure for the next generation of autonomous decentralized applications.
            </p>
          </div>

          {/* INTERACTIVE COMPUTE CARD */}
          <div className="bg-ritual-elevated border border-[#374151] rounded-xl shadow-card p-8 relative overflow-hidden">
            {/* TEE Verified Badge */}
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 bg-[#19D184]/10 text-[#19D184] border border-[#19D184]/20 px-3 py-1 rounded-md text-xs font-semibold">
              <span className="text-[10px] transform rotate-45 border border-[#19D184] w-2 h-2 inline-block"></span>
              TEE VERIFIED
            </div>

            <h2 className="font-display text-2xl text-[#D1D5DB] tracking-tight mb-6">Execution Request</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Precompile Target</label>
                <div className="bg-ritual-surface border border-[#374151] rounded-lg px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FF1DCE] font-mono font-bold">◇</span>
                    <span className="text-[#D1D5DB] font-semibold text-sm">LLM Inference</span>
                  </div>
                  <span className="font-mono text-[#6B7280] text-xs">0x0802</span>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Prompt Input</label>
                <div className="bg-ritual-surface border border-[#374151] rounded-lg p-4 h-32 text-sm text-[#9CA3AF] font-mono leading-relaxed">
                  Generate an optimal bonding curve for a new persistent agent system...
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button className="font-semibold text-sm px-6 py-3 rounded-lg border border-[#19D184] text-[#19D184] hover:bg-[#19D184]/10 shadow-glow-green transition-all flex items-center gap-2">
                  <span>Dispatch Compute</span>
                  <span className="font-mono">→</span>
                </button>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#6B7280] uppercase tracking-wider font-semibold">Est. Fee</span>
                  <span className="font-mono text-[#BFFF00]">0.0024 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - ASYNC STATE & AI OUTPUT */}
        <div className="lg:col-span-5 flex flex-col gap-8 pt-4 lg:pt-0">
          
          {/* AI SLOP PREVENTION - AI OUTPUT CARD */}
          <div className="bg-ritual-elevated border-t-2 border-t-[#FF1DCE]/50 border border-[#374151] rounded-xl shadow-card shadow-glow-pink p-6 relative">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#374151]">
              <div className="flex items-center gap-2">
                <span className="text-[#FF1DCE] text-sm">◇</span>
                <span className="text-[#FF1DCE] text-xs uppercase tracking-wider font-bold">AI Output</span>
              </div>
              <span className="font-mono text-[#6B7280] text-[10px]">model: claude-3-5</span>
            </div>
            
            <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6 font-mono italic">
              "The optimal bonding curve for long-term agent survival requires a sigmoid distribution of initial capital, ensuring early adopter protection while maintaining late-stage liquidity depth."
            </p>
            
            <div className="bg-[#000000] border border-[#374151] rounded-lg p-3">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] text-[#6B7280] uppercase tracking-widest font-semibold">spcCalls Receipt</span>
                 <button className="text-[10px] text-[#19D184] hover:text-[#BFFF00] font-mono">Decode</button>
               </div>
               <div className="font-mono text-[#9CA3AF] text-xs break-all leading-tight opacity-70">
                 0x000000000000000000000000000000000000000000000000000000000000020
               </div>
            </div>
          </div>

          {/* ASYNC LIFECYCLE TRACKER */}
          <div className="bg-ritual-elevated border border-[#374151] rounded-xl shadow-card p-6">
            <h3 className="text-sm font-semibold text-[#D1D5DB] mb-6 flex items-center justify-between">
              <span>Transaction State</span>
              <span className="font-mono text-[#FACC15] text-[10px] px-2 py-1 bg-[#FACC15]/10 rounded border border-[#FACC15]/20">⏲ Scheduled</span>
            </h3>
            
            <div className="space-y-4">
              {/* Completed State */}
              <div className="flex items-start gap-4">
                <div className="w-5 flex justify-center mt-0.5">
                  <span className="text-[#19D184] font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="text-sm text-[#19D184] font-semibold">Submitting</div>
                  <div className="text-xs text-[#6B7280] font-mono mt-0.5">Tx: 0x8f2a...391c</div>
                </div>
              </div>
              
              <div className="ml-[9px] w-px h-6 bg-gradient-to-b from-[#19D184] to-[#FACC15]"></div>
              
              {/* Active State */}
              <div className="flex items-start gap-4">
                <div className="w-5 flex justify-center mt-0.5">
                  <span className="text-[#FACC15] font-bold text-lg animate-pulse">⟳</span>
                </div>
                <div>
                  <div className="text-sm text-[#FACC15] font-semibold">Processing</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">Awaiting executor response</div>
                </div>
              </div>
              
              <div className="ml-[9px] w-px h-6 bg-[#374151]"></div>
              
              {/* Pending State */}
              <div className="flex items-start gap-4 opacity-50">
                <div className="w-5 flex justify-center mt-0.5">
                  <span className="text-[#6B7280] font-bold text-lg">◈</span>
                </div>
                <div>
                  <div className="text-sm text-[#6B7280] font-semibold">Result Ready</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">Pending validation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEPARATOR */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#374151] to-transparent w-full my-8"></div>
      
      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <span className="font-display tracking-tight text-[#D1D5DB]">RITUAL</span>
          <span className="text-[#6B7280]">© 2026</span>
        </div>
        <div className="font-mono text-[#6B7280] flex gap-4">
          <span>Chain ID: 1979</span>
        </div>
      </footer>

    </div>
  );
}
