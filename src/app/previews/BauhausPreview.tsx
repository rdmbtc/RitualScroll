import React from 'react';

export default function BauhausPreview() {
  return (
    <div className="w-full bg-[#F0F0F0] text-[#121212] overflow-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center py-6 px-8 border-b-4 border-[#121212] bg-[#F0F0F0]">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-6 h-6 bg-[#D02020] rounded-full border-2 border-[#121212]"></div>
            <div className="w-6 h-6 bg-[#1040C0] border-2 border-[#121212]"></div>
            <div className="w-6 h-6 bg-[#F0C020] border-2 border-[#121212]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          </div>
          <span className="text-2xl font-black uppercase tracking-tighter">Ritual</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold uppercase tracking-wider text-sm">
          <a href="#" className="hover:text-[#D02020] transition-colors">Platform</a>
          <a href="#" className="hover:text-[#1040C0] transition-colors">Use Cases</a>
          <a href="#" className="hover:text-[#F0C020] transition-colors">Docs</a>
        </div>
        <button className="bg-[#121212] text-white font-bold uppercase tracking-wider px-6 py-2 border-2 border-[#121212] hover:bg-[#1040C0] transition-colors shadow-[4px_4px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
          Start Building
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row border-b-4 border-[#121212]">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-12 md:p-24 bg-[#F0F0F0] flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-[#121212]">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Build The<br />
            <span className="text-[#D02020]">Machine</span><br />
            Future
          </h1>
          <p className="text-xl font-medium mb-12 max-w-md">
            Constructivist infrastructure for autonomous intelligence. Hard-edged compute for a decentralized world.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#D02020] text-white font-bold uppercase tracking-widest px-8 py-4 border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
              Deploy Network
            </button>
            <button className="bg-white text-[#121212] font-bold uppercase tracking-widest px-8 py-4 border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] hover:bg-[#F0C020] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
              Read Manifesto
            </button>
          </div>
        </div>

        {/* Right Panel - Composition */}
        <div className="w-full md:w-1/2 bg-[#1040C0] p-12 relative overflow-hidden min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Geometric Composition */}
            <div className="absolute w-64 h-64 bg-[#D02020] rounded-full border-4 border-[#121212] -ml-32 -mt-32 mix-blend-multiply"></div>
            <div className="absolute w-72 h-72 bg-[#F0C020] border-4 border-[#121212] rotate-45 mix-blend-multiply shadow-[16px_16px_0px_0px_#121212]"></div>
            <div className="absolute w-48 h-48 bg-white border-4 border-[#121212] ml-48 mt-48 z-20 shadow-[8px_8px_0px_0px_#121212] flex items-center justify-center">
              <div className="w-24 h-24 bg-[#121212]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE COLUMN FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-[#121212]">
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-[#121212] bg-white group hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 bg-[#F0C020] rounded-full border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] mb-8 flex items-center justify-center">
            <span className="font-black text-xl">01</span>
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tight mb-4">ONNX<br/>Compute</h3>
          <p className="font-medium text-lg leading-relaxed">Deterministic execution of machine learning models on-chain. Pure function, pure form.</p>
        </div>
        
        <div className="p-12 border-b-4 md:border-b-0 md:border-r-4 border-[#121212] bg-[#F0F0F0] group hover:-translate-y-2 transition-transform">
          <div className="w-16 h-16 bg-[#D02020] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] mb-8 flex items-center justify-center">
            <span className="font-black text-xl text-white">02</span>
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tight mb-4">HTTP<br/>Oracles</h3>
          <p className="font-medium text-lg leading-relaxed">Direct access to off-chain data without middlemen. Constructed for speed and verifiability.</p>
        </div>
        
        <div className="p-12 bg-white group hover:-translate-y-2 transition-transform relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#1040C0] border-l-4 border-b-4 border-[#121212]"></div>
          
          <div className="w-16 h-16 bg-[#121212] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#D02020] mb-8 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
            <span className="font-black text-xl text-white pt-4">03</span>
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Sovereign<br/>Agents</h3>
          <p className="font-medium text-lg leading-relaxed">Entities with persistent memory and wallet capabilities. They operate. They build. They exist.</p>
        </div>
      </section>

      {/* ASYNC STATE PIPELINE */}
      <section className="p-12 md:p-24 bg-[#F0C020] border-b-4 border-[#121212]">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">Lifecycle Pipeline</h2>
        
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white border-4 border-[#121212] rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_#121212] mb-4">
              <span className="text-3xl font-black">·</span>
            </div>
            <span className="font-bold uppercase tracking-widest text-sm bg-[#121212] text-white px-3 py-1">Submit</span>
          </div>
          
          <div className="flex-1 border-t-4 border-[#121212] mx-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#D02020] border-2 border-[#121212] rotate-45"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-[#1040C0] border-4 border-[#121212] flex items-center justify-center shadow-[6px_6px_0px_0px_#121212] mb-4">
              <span className="text-3xl font-black text-white">⟳</span>
            </div>
            <span className="font-bold uppercase tracking-widest text-sm bg-[#121212] text-white px-3 py-1">Process</span>
          </div>
          
          <div className="flex-1 border-t-4 border-[#121212] mx-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#D02020] border-2 border-[#121212] rotate-45"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-[#D02020] border-4 border-[#121212] flex items-center justify-center shadow-[6px_6px_0px_0px_#121212] mb-4" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <span className="text-3xl font-black text-white pt-4">✓</span>
            </div>
            <span className="font-bold uppercase tracking-widest text-sm bg-[#121212] text-white px-3 py-1">Settled</span>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-[#121212] text-[#F0F0F0] p-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t-8 border-[#D02020]">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-6 h-6 bg-[#D02020] rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-[#1040C0] border-2 border-white"></div>
            <div className="w-6 h-6 bg-[#F0C020] border-2 border-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
          </div>
          <span className="text-3xl font-black uppercase tracking-tighter">Ritual</span>
        </div>
        
        <div className="flex gap-12 font-bold uppercase tracking-widest text-sm">
          <a href="#" className="hover:text-[#D02020] transition-colors">Manifesto</a>
          <a href="#" className="hover:text-[#1040C0] transition-colors">Network</a>
          <a href="#" className="hover:text-[#F0C020] transition-colors">System</a>
        </div>
      </footer>
    </div>
  );
}