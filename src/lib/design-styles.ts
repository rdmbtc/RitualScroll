export interface DesignStyle {
  id: string;
  name: string;
  theme: "light" | "dark";
  fontType: "sans" | "serif" | "mono";
  color: string;
  description: string;
  prompt: string;
}

export const designStyles: DesignStyle[] = [
  {
    id: "ritual",
    name: "Ritual",
    theme: "light",
    fontType: "serif",
    color: "#08fc00ff",
    description: "Editorial, austere, intellectual, and cinematic. A lab for autonomous intelligence. Pure green and white, serif-led typography, oversized headlines, sharp geometry, heavy horizontal rules, dramatic whitespace. Like a luxury architectural monograph or high-end fashion publication.",
    prompt: ""
  },
  {
    id: "bauhaus",
    name: "Bauhaus",
    theme: "light",
    fontType: "serif",
    color: "#D02020",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "academia",
    name: "Academia",
    theme: "dark",
    fontType: "serif",
    color: "#1C1714",
    description: "Core Principles: Scholarly gravitas meets timeless elegance. This style channels the atmosphere of centuries-old university libraries, Victorian study halls, and Renaissance manuscripts. Every element must feel like it belongs in a prestigious ins...",
    prompt: ""
  },
  {
    id: "art-deco",
    name: "Art Deco",
    theme: "light",
    fontType: "serif",
    color: "#D4AF37",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "bold-typography",
    name: "Bold Typography",
    theme: "dark",
    fontType: "mono",
    color: "#0A0A0A",
    description: "Bold Typography is poster design translated to web. Typography isn't decoration—it's the entire visual language. Every design decision serves the type: color exists to create contrast, space exists to frame letterforms, and interaction exists to r...",
    prompt: ""
  },
  {
    id: "botanical",
    name: "Botanical",
    theme: "light",
    fontType: "serif",
    color: "#F9F8F4",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "claymorphism",
    name: "Claymorphism",
    theme: "light",
    fontType: "serif",
    color: "#F4F1FA",
    description: "Core Concept: Digital Clay\r This design system is not merely a \"soft UI\"—it is a high-fidelity simulation of a tangible, physical world constructed from premium digital clay. Every element on the screen should evoke the sensation of holding a high...",
    prompt: ""
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    theme: "dark",
    fontType: "mono",
    color: "#0a0a0f",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "enterprise",
    name: "Enterprise",
    theme: "light",
    fontType: "serif",
    color: "#F8FAFC",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "flat-design",
    name: "Flat Design",
    theme: "light",
    fontType: "serif",
    color: "#FFFFFF",
    description: "Flat Design removes all artifice. It rejects the illusion of three-dimensionality—no drop shadows, no bevels, no realistic gradients, no textures. It relies entirely on hierarchy through size, color, and typography. This is not minimalism for the ...",
    prompt: ""
  },
  {
    id: "industrial",
    name: "Industrial",
    theme: "light",
    fontType: "mono",
    color: "#e0e5ec",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "kinetic",
    name: "Kinetic",
    theme: "dark",
    fontType: "serif",
    color: "#09090B",
    description: "Core Principle: Typography is not decoration—it is the entire visual structure. Text becomes image, headline becomes hero, motion becomes rhythm. This style rejects static layouts completely. Every element should feel alive through constant motion...",
    prompt: ""
  },
  {
    id: "luxury",
    name: "Luxury",
    theme: "dark",
    fontType: "mono",
    color: "#F9F8F6",
    description: "Core Principles: Elegance through restraint, precision, and depth. This style emulates high-end fashion magazines (Vogue, Harper's Bazaar, Kinfolk) and luxury brand websites (Chanel, Hermès, Aesop). Success depends on exquisite typography hierarch...",
    prompt: ""
  },
  {
    id: "material-design",
    name: "Material Design",
    theme: "light",
    fontType: "sans",
    color: "#6750A4",
    description: "Core Principles: Personal, adaptive, and spirited. Material You (MD3) represents a shift from Material Design 2's rigid \"paper and ink\" metaphor to a more organic, expressive system. The design extracts color palettes from seed colors (simulating ...",
    prompt: ""
  },
  {
    id: "maximalism",
    name: "Maximalism",
    theme: "dark",
    fontType: "mono",
    color: "#0D0D1A",
    description: "Core Principle: MORE IS MORE. Maximalism/Dopamine design rejects minimalist restraint in favor of sensory overload, visual abundance, and unapologetic excess. Every pixel should spark joy. Empty space is wasted space. Patterns clash, colors scream...",
    prompt: ""
  },
  {
    id: "minimal-dark",
    name: "Minimal Dark",
    theme: "dark",
    fontType: "mono",
    color: "#0A0A0F",
    description: "### Core Principle\r \r Atmospheric Depth. Minimalist Dark creates visual interest not through color saturation or complex patterns, but through carefully orchestrated layers of darkness. Multiple shades of slate and charcoal stack upon each other, ...",
    prompt: ""
  },
  {
    id: "modern-dark",
    name: "Modern Dark",
    theme: "dark",
    fontType: "mono",
    color: "#050506",
    description: "Core Principles: Precision, depth, and fluidity define this design system. Every surface exists in three-dimensional space, illuminated by soft ambient light sources that breathe and move. The design communicates \"premium developer tools\"—fast, re...",
    prompt: ""
  },
  {
    id: "monochrome",
    name: "Monochrome",
    theme: "dark",
    fontType: "mono",
    color: "#000000",
    description: "### Core Principle\r \r Reduction to Essence. Minimalist Monochrome strips design down to its most fundamental elements: black, white, and typography. There are no accent colors to hide behind, no gradients to soften edges, no shadows to create fals...",
    prompt: ""
  },
  {
    id: "neo-brutalism",
    name: "Neo Brutalism",
    theme: "dark",
    fontType: "mono",
    color: "#000000",
    description: "Neo-brutalism (or Neu-Brutalism) is the digital punk rebellion against the \"Corporate Memphis\" and polished \"Clean SaaS\" aesthetics that dominated the 2010s. While traditional Brutalism (architecture/early web) was utilitarian and drab, Neo-brutal...",
    prompt: ""
  },
  {
    id: "neumorphism",
    name: "Neumorphism",
    theme: "light",
    fontType: "mono",
    color: "#E0E5EC",
    description: "Core Principles: Neumorphism creates the illusion of physical depth through carefully balanced dual shadows—one light source from the top-left, one dark shadow falling bottom-right—on monochromatic backgrounds. Elements appear to either extrude fr...",
    prompt: ""
  },
  {
    id: "newsprint",
    name: "Newsprint",
    theme: "dark",
    fontType: "mono",
    color: "#F9F9F7",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "organic",
    name: "Organic",
    theme: "light",
    fontType: "serif",
    color: "#FDFCF8",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "playful-geometric",
    name: "Playful Geometric",
    theme: "light",
    fontType: "serif",
    color: "#FFFDF5",
    description: "Playful Geometric is the antidote to sterile, corporate minimalism. It creates an emotional connection through optimism, clarity, and tactile fun.\r \r The core concept is \"Stable Grid, Wild Decoration\". The content itself (text, forms) lives in cle...",
    prompt: ""
  },
  {
    id: "professional",
    name: "Professional",
    theme: "light",
    fontType: "mono",
    color: "#FAFAF8",
    description: "### Core Principle\r \r Typographic elegance through classical restraint. This design system draws inspiration from the finest editorial publications, literary magazines, and luxury brand identities. It believes that the highest form of design is on...",
    prompt: ""
  },
  {
    id: "retro",
    name: "Retro",
    theme: "dark",
    fontType: "mono",
    color: "#C0C0C0",
    description: "Core Principles: Embrace the raw, unfiltered aesthetic of the early web. This design celebrates the \"ugly-cool\" charm of 1990s websites—beveled buttons, system fonts, garish colors, and animated elements. It's deliberately anti-modern, rejecting m...",
    prompt: ""
  },
  {
    id: "saas",
    name: "SaaS",
    theme: "light",
    fontType: "mono",
    color: "#0052FF",
    description: "### Core Principle\r \r Clarity through structure, character through bold detail. This design system embraces modern web layouts and dynamic interactions while honoring minimalist foundations. It operates on a fundamental tension: restraint in quant...",
    prompt: ""
  },
  {
    id: "sketch",
    name: "Sketch",
    theme: "light",
    fontType: "sans",
    color: "#fdfbf7",
    description: "The Hand-Drawn design style celebrates authentic imperfection and human touch in a digital world. It rejects the clinical precision of modern UI design in favor of organic, playful irregularity that evokes sketches on paper, sticky notes on a wall...",
    prompt: ""
  },
  {
    id: "swiss-minimalist",
    name: "Swiss Minimalist",
    theme: "dark",
    fontType: "mono",
    color: "#FF3000",
    description: "The International Typographic Style (Swiss Style) is not merely a visual trend; it is a philosophy of objective communication born in 1950s Switzerland. It rejects personal expression and subjectivity in favor of universal clarity, mathematical pr...",
    prompt: ""
  },
  {
    id: "terminal",
    name: "Terminal",
    theme: "dark",
    fontType: "mono",
    color: "#0a0a0a",
    description: "The Terminal CLI aesthetic pays homage to the raw power of the command line. It strips away the \"user interface\" layers to reveal the \"system\" underneath. It is brutally functional, high-contrast, and authentically retro. It feels like hacking int...",
    prompt: ""
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    theme: "dark",
    fontType: "mono",
    color: "#FF00FF",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  },
  {
    id: "web3",
    name: "Web3",
    theme: "dark",
    fontType: "mono",
    color: "#030304",
    description: "A unique design style for Ritual dApps.",
    prompt: ""
  }
];
