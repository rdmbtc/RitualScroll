const fs = require('fs');
const path = require('path');

const promptsDir = path.join(__dirname, '../prompts');
const outputFile = path.join(__dirname, '../src/lib/design-styles.ts');

const ritualRules = `
<ritual-dapp-rules>
When styling a new Ritual dApp frontend, you must adhere to the Ritual Visual Language while using the design system defined above. Note: Do not override the design system's colors/fonts (colors don't matter for these rules), just apply the following semantic requirements:

1. Async Lifecycle States: Async precompiles pass through up to 9 states. Show status indicators with appropriate labels and icons: Submitting (·), Awaiting Executor (◌), Committed (◉), Processing (⟳), Result Ready (◈), Settling (◎), Settled (✓), Failed (✗), Expired (⊘).
2. Precompile Type Icons: Use geometric icons for precompile types: ONNX ⬡, HTTP ⇄, LLM ◇, JQ {}, Long HTTP ⟳, ZK △, FHE ◈, Sovereign Agent ▣, Image ◐, Audio ♫, Video ▶, Persistent Agent ⊞.
3. TEE Verification Badge: Include a "TEE Verified" badge and geometric icon for enclave-computed results.
4. AI Output Treatment: Visually distinguish AI-produced content (LLM, Agent, Image) with a diamond icon ◇, "AI Output" label, and model name.
5. Address Formatting: Always use a monospace font for hex addresses and truncate them (e.g., 0x1234...5678).
6. Encrypted Content: Show blurred placeholders with lock icons for ECIES-encrypted results until decrypted.
7. Scheduler Badge: Transactions from the system scheduler (sender 0x000...fa7e) should show a "Scheduled" badge.
</ritual-dapp-rules>
`;

function processFiles() {
    const files = fs.readdirSync(promptsDir).filter(f => f.endsWith('.xml'));
    let styles = [];

    for (const file of files) {
        const fullPath = path.join(promptsDir, file);
        const content = fs.readFileSync(fullPath, 'utf8');
        
        const name = file.replace('.xml', '');
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        const isDark = content.match(/dark mode|#000000|background:[ ]*#(111|0a0a0a|000000|1C1714|1a1a1a|0a0a0a)/i);
        const theme = isDark ? 'dark' : 'light';
        
        let fontType = 'sans';
        if (content.match(/monospace|mono/i)) {
            fontType = 'mono';
        } else if (content.match(/serif/i)) {
            fontType = 'serif';
        }
        
        const colorMatch = content.match(/#([0-9a-fA-F]{6})/);
        const color = colorMatch ? colorMatch[0] : (isDark ? '#ffffff' : '#000000');
        
        let descriptionMatch = content.match(/# Design Philosophy\s+([\s\S]*?)(?=\n#|\n\n)/i);
        let description = "";
        if (descriptionMatch) {
            // Strip markdown formatting and extra spaces
            description = descriptionMatch[1].replace(/\*\*/g, '').replace(/\n/g, ' ').trim();
            if (description.length > 250) {
                description = description.substring(0, 247) + '...';
            }
        } else {
            description = "A unique design style for Ritual dApps.";
        }

        let prompt = content;
        if (prompt.includes('</role>')) {
            prompt = prompt.replace('</role>', '\n' + ritualRules + '\n</role>');
        } else {
            prompt += '\n' + ritualRules;
        }
        
        styles.push({
            id,
            name,
            theme,
            fontType,
            color,
            description,
            prompt
        });
    }

    styles.push({
        id: "ritual",
        name: "Ritual",
        theme: "dark",
        fontType: "serif",
        color: "#000000",
        description: "Editorial, austere, intellectual, and cinematic. A lab for autonomous intelligence. Pure black and white, serif-led typography, oversized headlines, sharp geometry, heavy horizontal rules, dramatic whitespace. Like a luxury architectural monograph or high-end fashion publication.",
        prompt: `<role>You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to help the user integrate a design system into an existing codebase in a way that is visually consistent, maintainable, and idiomatic to their tech stack.</role>

<design-system>
# Design Style: Ritual — Monochrome Editorial

## Design Philosophy

### Core Principle
**Institutional Permanence.** Ritual is not a product—it's a research institution exploring autonomous intelligence. The design must communicate permanence, systems thinking, non-human agency, institutional gravity, and technical elegance. This is editorial design for machine-native systems.

### Visual Vibe
**Emotional Keywords**: Editorial, Austere, Intellectual, Cinematic, Permanent, Institutional, Technical, Elegant, Monumental, Computational

This is the visual language of:
- Luxury architectural monographs
- High-end fashion publications (Vogue, System Magazine)
- Research institutions and academic journals
- Museum exhibition catalogs
- Computational manifestos

### What This Design Is NOT
- ❌ Startup-style SaaS UI
- ❌ Bright colors, gradients, soft cards
- ❌ Glowing effects, rounded corners
- ❌ Generic web3 aesthetics
- ❌ Product marketing pages

### The DNA of Ritual

#### 1. Pure Black & White Only
Use only #000000 (pure black) and #FFFFFF (pure white). No grays except for subtle textures.

#### 2. Serif-Led Typography
Serif fonts are the primary design element. Headlines should dominate visually—some should feel almost too large.

#### 3. Oversized Headlines
Use massive type scales (8rem, 10rem, 12rem). Words become graphic elements.

#### 4. Sharp Geometry
Zero border radius everywhere. Perfect 90-degree corners. Architectural precision.

#### 5. Heavy Horizontal Rules
Thick black lines (2px-4px) separate major sections. These are structural elements.

#### 6. Dramatic Whitespace
Maximum negative space. Let content breathe. Whitespace is active, not empty.

#### 7. Strict Editorial Composition
Layout should feel like print editorial—precise grids, clear hierarchy, deliberate spacing.

#### 8. Subtle Monochrome Textures
Add depth through subtle patterns, not shadows or gradients.

---

## Page Structure

### SECTION 1 — HERO
Massive editorial hero with oversized typography.

**Headline**: "Ritual" (10rem-12rem, serif, bold)
**Subheadline**: "A lab for autonomous intelligence." (3rem-4rem, serif, light)
**Supporting copy**: "The next markets will not be built by humans alone." (1.5rem-2rem, serif, regular)

**Visual**: A monochrome abstract falling wireframe human figure or skeletal computational form suspended in negative space. Use simple SVG lines.

**Heavy horizontal rule below** (2px-4px solid black, full width)

---

## Typography Rules
- Headlines should dominate visually
- Use serif typography as the primary design element
- Some headlines should feel almost too large
- Text must feel like print editorial composition
- Use EB Garamond, Playfair Display, or similar high-quality serifs

## Layout Rules
- Maximum negative space
- Zero border radius
- No shadows
- No colorful accents
- No gradients
- No generic dashboard components
- Use borders, rules, spacing, and type scale instead of decorative UI

## Design Reference
Think:
- Luxury editorial publication
- Architectural catalog
- Research institution
- Computational manifesto

The final result should feel like Ritual is not a product, but a serious machine-native institution.
</design-system>
\n${ritualRules}`
    });

    // Sort to put Ritual/Bauhaus at the beginning if they exist, or just alphabetical
    styles.sort((a, b) => {
        if (a.id === 'ritual') return -1;
        if (b.id === 'ritual') return 1;
        if (a.id === 'bauhaus') return -1;
        if (b.id === 'bauhaus') return 1;
        return a.name.localeCompare(b.name);
    });

    let tsContent = `export interface DesignStyle {
  id: string;
  name: string;
  theme: "light" | "dark";
  fontType: "sans" | "serif" | "mono";
  color: string;
  description: string;
  prompt: string;
}

export const designStyles: DesignStyle[] = [\n`;

    for (let i = 0; i < styles.length; i++) {
        const s = styles[i];
        tsContent += `  {
    id: ${JSON.stringify(s.id)},
    name: ${JSON.stringify(s.name)},
    theme: ${JSON.stringify(s.theme)},
    fontType: ${JSON.stringify(s.fontType)},
    color: ${JSON.stringify(s.color)},
    description: ${JSON.stringify(s.description)},
    prompt: ${JSON.stringify(s.prompt)}
  }${i < styles.length - 1 ? ',' : ''}\n`;
    }

    tsContent += `];\n`;
    
    fs.writeFileSync(outputFile, tsContent, 'utf8');
    console.log('Successfully generated ' + styles.length + ' styles.');
}

processFiles();
