const fs = require('fs');
const path = require('path');

const promptsDir = path.join(__dirname, '../prompts');
const previewsDir = path.join(__dirname, '../src/app/previews');

function toPascalCase(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const categoryMap = {
    'terminal': 'terminal',
    'cyberpunk': 'terminal',
    
    'academia': 'editorial',
    'newsprint': 'editorial',
    'luxury': 'editorial',
    'ritual': 'editorial',
    
    'bauhaus': 'minimalist',
    'swiss-minimalist': 'minimalist',
    'monochrome': 'minimalist',
    'minimal-dark': 'minimalist',
    'flat-design': 'minimalist',
    
    'brutalist': 'brutalist',
    'neo-brutalism': 'brutalist',
    'maximalism': 'brutalist',
    
    'glassmorphism': 'glass',
    'web3': 'glass',
    'modern-dark': 'glass',
    'vaporwave': 'glass',
    
    'organic': 'organic',
    'botanical': 'organic',
    
    'kinetic': 'kinetic',
    'retro': 'kinetic',
    'playful-geometric': 'kinetic',
};

function getTemplate(style) {
    const category = categoryMap[style.id] || 'saas';
    const isDark = style.theme === 'dark';
    const bg = isDark ? '#0a0a0a' : '#f9fafb';
    const fg = isDark ? '#f9fafb' : '#0a0a0a';
    const color = style.color;
    const font = style.fontType === 'mono' ? 'font-mono' : style.fontType === 'serif' ? 'font-serif' : 'font-sans';
    const componentName = toPascalCase(style.id) + 'Preview';

    if (category === 'terminal') {
        return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} p-8" style={{ backgroundColor: '#000000', color: '${color}' }}>
      <div className="max-w-5xl mx-auto border border-current p-8 shadow-[0_0_20px_rgba(var(--color),0.2)]">
        <header className="border-b border-current pb-4 mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">&gt;${style.name.toUpperCase()}_</h1>
            <p className="text-sm opacity-80 uppercase tracking-widest">[SYSTEM LOG: INITIALIZED]</p>
          </div>
          <div className="hidden md:flex gap-4 text-sm">
            <span>[DOCS]</span>
            <span>[NODES]</span>
            <span>[SYS_STATUS]</span>
          </div>
        </header>
        
        <div className="mb-12">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">{${JSON.stringify(style.description)}}</p>
          <div className="flex gap-4">
            <button className="px-6 py-2 border border-current hover:bg-current hover:text-black transition-colors">
              EXECUTE_PROTOCOL
            </button>
            <button className="px-6 py-2 border border-current opacity-50 hover:opacity-100">
              --HELP
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border-t border-current pt-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">&gt;&gt; CORE_MODULES</h2>
            <div className="border border-current p-4 space-y-2">
              <p>[+] Autonomous Agents</p>
              <p>[+] Cryptographic Proofs</p>
              <p>[+] On-chain Settlement</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">&gt;&gt; NETWORK_STATUS</h2>
            <div className="border border-current p-4 font-mono text-sm space-y-2 opacity-80">
              <p>Block height: 8,432,109</p>
              <p>Active nodes: 142</p>
              <p>Hashrate: OPTIMAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
    }

    if (category === 'editorial') {
        return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} px-8 py-16 md:px-24" style={{ backgroundColor: '${bg}', color: '${fg}' }}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-24 border-b pb-12" style={{ borderColor: 'rgba(128,128,128,0.3)' }}>
          <h1 className="text-6xl md:text-8xl font-normal tracking-tight mb-6" style={{ color: '${color}' }}>${style.name}</h1>
          <p className="text-xl italic max-w-2xl mx-auto opacity-80">An exploration in autonomous intelligence and computational longevity.</p>
        </header>

        <article className="prose prose-lg max-w-none" style={{ color: '${fg}' }}>
          <p className="text-2xl leading-relaxed mb-12 border-l-4 pl-8" style={{ borderColor: '${color}' }}>
            <span className="float-left text-7xl font-bold mr-4 leading-none" style={{ color: '${color}' }}>${style.description.charAt(0)}</span>
            ${style.description.substring(1)}
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mt-24">
            <div className="col-span-2">
              <h2 className="text-4xl mb-8 font-normal">The Shift to Participants</h2>
              <p className="text-lg opacity-80 leading-relaxed mb-6">Single agents become workflows. Workflows become multi-agent systems. Multi-agent systems become markets, institutions, and execution environments.</p>
              <button className="mt-8 px-8 py-3 border tracking-widest uppercase text-sm hover:opacity-70 transition-opacity" style={{ borderColor: '${color}', color: '${color}' }}>Read Manifesto</button>
            </div>
            <div className="border p-8" style={{ borderColor: '${color}' }}>
              <h3 className="text-xl mb-4 italic">Vol. 01</h3>
              <ul className="space-y-4 opacity-80">
                <li className="border-b border-gray-500/30 pb-2">I. Identity</li>
                <li className="border-b border-gray-500/30 pb-2">II. Settlement</li>
                <li>III. Coordination</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}`;
    }

    if (category === 'minimalist') {
        return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} p-8 md:p-16" style={{ backgroundColor: '${bg}', color: '${fg}' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[70vh]">
        <div className="space-y-8">
          <div className="w-16 h-16" style={{ backgroundColor: '${color}' }}></div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">${style.name}</h1>
          <p className="text-2xl font-medium max-w-md opacity-90">{${JSON.stringify(style.description)}}</p>
          <div className="flex gap-4 pt-8">
            <button className="px-8 py-4 font-bold uppercase tracking-wide text-white" style={{ backgroundColor: '${color}' }}>Get Started</button>
            <button className="px-8 py-4 font-bold uppercase tracking-wide border-2" style={{ borderColor: '${color}', color: '${color}' }}>Learn More</button>
          </div>
        </div>
        
        <div className="hidden md:grid grid-cols-2 gap-8">
          <div className="aspect-square flex items-end p-6 border-4" style={{ borderColor: '${color}' }}>
            <span className="text-3xl font-black uppercase">Build</span>
          </div>
          <div className="aspect-square flex items-end p-6 text-white" style={{ backgroundColor: '${color}' }}>
            <span className="text-3xl font-black uppercase">Scale</span>
          </div>
          <div className="aspect-square flex items-end p-6 text-white col-span-2" style={{ backgroundColor: '${fg}', color: '${bg}' }}>
            <span className="text-3xl font-black uppercase">Coordinate</span>
          </div>
        </div>
      </div>
    </div>
  );
}`;
    }

    if (category === 'glass') {
        return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} p-8 relative" style={{ backgroundColor: '${bg}', color: '${fg}' }}>
      {/* Background Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: '${color}' }}></div>
      <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20" style={{ backgroundColor: '${fg}' }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto min-h-[70vh] flex flex-col justify-center">
        <header className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-3xl shadow-2xl mb-12 text-center">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 bg-white/10" style={{ color: '${color}' }}>New Era</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">${style.name}</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">{${JSON.stringify(style.description)}}</p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="px-8 py-3 rounded-full font-medium text-white shadow-lg shadow-current/20 hover:scale-105 transition-transform" style={{ backgroundColor: '${color}' }}>Connect Wallet</button>
            <button className="px-8 py-3 rounded-full font-medium border border-white/20 backdrop-blur-md hover:bg-white/10 transition-colors">Explore Ecosystem</button>
          </div>
        </header>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-white/10" style={{ color: '${color}' }}>✦</div>
              <h3 className="text-xl font-bold mb-3">Feature 0{i}</h3>
              <p className="opacity-70 text-sm leading-relaxed">Secure, verifiable, and completely decentralized infrastructure for the modern web.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;
    }

    if (category === 'brutalist') {
        return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} p-8" style={{ backgroundColor: '${bg}', color: '${fg}' }}>
      <nav className="border-4 border-current p-4 mb-12 flex justify-between items-center font-black uppercase text-xl">
        <span style={{ color: '${color}' }}>${style.name}</span>
        <div className="flex gap-4">
          <span className="hover:underline cursor-pointer">Index</span>
          <span className="hover:underline cursor-pointer">About</span>
        </div>
      </nav>
      
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute top-4 left-4 w-full h-full border-4 border-current" style={{ backgroundColor: '${color}' }}></div>
          <div className="relative border-4 border-current p-8 md:p-16 bg-white text-black">
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8 tracking-tighter">RAW<br/>POWER.</h1>
            <p className="text-xl md:text-2xl font-bold max-w-md border-l-8 pl-6" style={{ borderColor: '${color}' }}>{${JSON.stringify(style.description)}}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-8 justify-center">
          <div className="border-4 border-current p-6 bg-[#facc15] text-black shadow-[8px_8px_0px_0px_currentColor]">
            <h2 className="text-3xl font-black uppercase mb-2">Unapologetic</h2>
            <p className="font-bold text-lg">No soft shadows. No gradients. Just pure structural integrity.</p>
          </div>
          <div className="border-4 border-current p-6 bg-white text-black shadow-[8px_8px_0px_0px_currentColor]">
            <h2 className="text-3xl font-black uppercase mb-2">Functional</h2>
            <p className="font-bold text-lg">Design that prioritizes extreme legibility and raw aesthetics.</p>
          </div>
          <button className="border-4 border-current p-6 text-3xl font-black uppercase hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_currentColor] transition-all" style={{ backgroundColor: '${color}', color: 'white' }}>
            START BUILDING -&gt;
          </button>
        </div>
      </div>
    </div>
  );
}`;
    }

    if (category === 'organic') {
        return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} p-8 md:p-16" style={{ backgroundColor: '${bg}', color: '${fg}' }}>
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-24">
          <h1 className="text-3xl font-medium tracking-wide" style={{ color: '${color}' }}>${style.name}</h1>
          <button className="px-6 py-2 rounded-full border opacity-70 hover:opacity-100 transition-opacity">Menu</button>
        </header>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <h2 className="text-5xl md:text-7xl font-normal leading-tight">${style.description.split('.')[0]}.</h2>
            <p className="text-xl opacity-70 leading-relaxed max-w-md">{${JSON.stringify(style.description)}}</p>
            <button className="px-8 py-4 rounded-[2rem] text-white text-lg font-medium shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: '${color}' }}>
              Discover More
            </button>
          </div>
          
          <div className="relative h-[60vh]">
            <div className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 animate-[spin_20s_linear_infinite]" style={{ backgroundColor: '${color}' }}></div>
            <div className="absolute inset-4 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-40 animate-[spin_15s_linear_infinite_reverse]" style={{ backgroundColor: '${color}' }}></div>
            <div className="absolute inset-8 rounded-[50%] flex items-center justify-center overflow-hidden border-4 border-white/20" style={{ backgroundColor: '${bg}' }}>
              <span className="text-[10rem] opacity-5">🌿</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
    }

    if (category === 'kinetic') {
        return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} overflow-x-hidden" style={{ backgroundColor: '${bg}', color: '${fg}' }}>
      <div className="bg-current text-black overflow-hidden whitespace-nowrap py-3 rotate-[-2deg] scale-110 shadow-xl relative z-20" style={{ color: '${color}' }}>
        <p className="text-2xl font-black italic uppercase tracking-widest animate-[slide_10s_linear_infinite]">
          ${Array(10).fill(style.name).join(' // ')}
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto p-8 md:p-16 mt-12">
        <h1 className="text-[10vw] font-black italic uppercase leading-none tracking-tighter mix-blend-difference mb-8">
          MOTION<br/>
          <span style={{ color: '${color}' }}>IS LIFE</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl transform hover:rotate-2 transition-transform shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold italic leading-tight">{${JSON.stringify(style.description)}}</p>
          </div>
          
          <div className="flex flex-col gap-6 justify-center">
            <button className="w-full py-6 text-2xl font-black italic uppercase rounded-full text-white transform hover:-skew-x-12 transition-transform shadow-[0_10px_0_0_rgba(0,0,0,0.2)]" style={{ backgroundColor: '${color}' }}>
              Join the Movement
            </button>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-2xl flex items-center justify-center font-black text-4xl italic" style={{ border: '4px solid ' + '${color}', color: '${color}' }}>
                  0{i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: '@keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }'}} />
    </div>
  );
}`;
    }

    // Default to SaaS template
    return `export default function ${componentName}() {
  return (
    <div className="w-full h-full min-h-[800px] overflow-auto ${font} bg-[#f8fafc] text-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '${color}' }}></div>
          ${style.name}
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <span className="hover:text-slate-900 cursor-pointer">Product</span>
          <span className="hover:text-slate-900 cursor-pointer">Solutions</span>
          <span className="hover:text-slate-900 cursor-pointer">Pricing</span>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-medium px-4 py-2 text-slate-600 hover:text-slate-900">Login</button>
          <button className="text-sm font-medium px-4 py-2 rounded-lg text-white shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '${color}' }}>Sign Up</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-4 py-24 max-w-5xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 bg-slate-100 text-slate-600 border border-slate-200">
          ✨ New Features Available
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          The modern platform for<br />
          <span style={{ color: '${color}' }}>autonomous workflows</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {${JSON.stringify(style.description)}}
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 rounded-xl text-white font-medium shadow-lg hover:-translate-y-0.5 transition-transform" style={{ backgroundColor: '${color}' }}>
            Start Free Trial
          </button>
          <button className="px-8 py-4 rounded-xl font-medium bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '${color}' }}>0{i}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Scalable Infrastructure</h3>
              <p className="text-slate-600 leading-relaxed">Built for teams of all sizes, our platform scales effortlessly as your organizational needs grow and evolve.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}`;
}

function processFiles() {
    const files = fs.readdirSync(promptsDir).filter(f => f.endsWith('.xml'));
    let styles = [];
    
    // Read the generated design-styles to get the full list including the Ritual one
    for (const file of files) {
        const fullPath = path.join(promptsDir, file);
        const content = fs.readFileSync(fullPath, 'utf8');
        const name = file.replace('.xml', '');
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        const isDark = content.match(/dark mode|#000000|background:[ ]*#(111|0a0a0a|000000|1C1714|1a1a1a|0a0a0a)/i);
        const theme = isDark ? 'dark' : 'light';
        let fontType = 'sans';
        if (content.match(/monospace|mono/i)) fontType = 'mono';
        else if (content.match(/serif/i)) fontType = 'serif';
        const colorMatch = content.match(/#([0-9a-fA-F]{6})/);
        const color = colorMatch ? colorMatch[0] : (isDark ? '#ffffff' : '#000000');
        let descriptionMatch = content.match(/# Design Philosophy\s+([\s\S]*?)(?=\n#|\n\n)/i);
        let description = descriptionMatch ? descriptionMatch[1].replace(/\*\*/g, '').replace(/\n/g, ' ').trim() : "A unique design style for Ritual dApps.";
        
        styles.push({ id, name, theme, fontType, color, description });
    }

    styles.push({
        id: "ritual",
        name: "Ritual",
        theme: "dark",
        fontType: "serif",
        color: "#ffffff", // Ritual typically uses white text on black
        description: "Editorial, austere, intellectual, and cinematic. A lab for autonomous intelligence. Pure black and white, serif-led typography, oversized headlines, sharp geometry, heavy horizontal rules, dramatic whitespace."
    });

    let indexContent = '';

    for (const style of styles) {
        const componentName = toPascalCase(style.id) + 'Preview';
        const componentContent = getTemplate(style);
        
        const outPath = path.join(previewsDir, componentName + '.tsx');
        fs.writeFileSync(outPath, componentContent, 'utf8');
        
        indexContent += `export { default as ${componentName} } from './${componentName}';\n`;
    }

    fs.writeFileSync(path.join(previewsDir, 'index.ts'), indexContent, 'utf8');
    console.log('Successfully generated preview components and index.ts.');
}

processFiles();
