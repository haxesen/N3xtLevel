export const Hero = (lang = 'de') => {
    const content = {
        de: {
            h1_line1: "Bringen Sie Ihr Business",
            h1_line2_prefix: "auf das",
            h1_span_text: "N3XT LEVEL.",
            p_start: "Premium-Webseiten für",
            p_highlight: "KMUs & lokale Dienstleister",
            p_end: ". KI-optimierte Lösungen für maximalen Erfolg.",
            cta_primary: "Jetzt anfragen",
            cta_secondary: "Portfolio ansehen"
        },
        en: {
            h1_line1: "Take your Business",
            h1_line2_prefix: "to the",
            h1_span_text: "N3XT LEVEL.",
            p_start: "Premium Websites for",
            p_highlight: "SMEs & Local Services",
            p_end: ". AI-optimized solutions for maximum success.",
            cta_primary: "Get in touch",
            cta_secondary: "View Portfolio"
        },
        hu: {
            h1_line1: "Emelje vállalkozását",
            h1_line2_prefix: "a",
            h1_span_text: "N3XT LEVEL-re.",
            p_start: "Prémium weboldalak",
            p_highlight: "KKV-knak & Helyi Szolgáltatóknak",
            p_end: ". MI-optimalizált megoldások a maximális sikerért.",
            cta_primary: "Ajánlatkérés",
            cta_secondary: "Portfólió"
        }
    };

    const t = content[lang] || content.de;

    // A '3' szám kezelése (speciális formázás) a 'N3XT' szóban
    // Mivel a N3XT szó a fordításban is benne van (márkanév), dinamikusan építjük fel
    // De itt a `h1_span_text` tartalmazza az egészet. 
    // Hogy egyszerű legyen, feltételezzük, hogy a márkanevet mindenhol így formázzuk.
    // De a legegyszerűbb, ha a HTML-be égetjük be a formázást, és a szöveget igazítjuk.
    // Az eredeti kód speciális HTML struktúrát használt a 3-asra.
    // Ezt rekonstruálom: N<span ...>3</span>XT ...

    // Helper a N3XT szó formázásához, ha benne van a stringben
    const formatBrand = (text) => {
        return text.replace('N3XT', `N<span class="text-[#ff0000]" style="-webkit-text-stroke: 2px white;">3</span>XT`);
    };

    return `
<!-- Hero Section -->
<section id="hero" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <!-- Background Canvas (Neural Network) -->
    <canvas id="neural-canvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30"></canvas>
    
    <!-- Background Glow (Mobile) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] -z-10 md:hidden animate-pulse-slow"></div>
    
    <!-- Background Glow (Desktop) -->
    <div class="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10 animate-morph"></div>
    <div class="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-morph" style="animation-delay: 2s"></div>

    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <h1
            class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-fade-in-up">
            ${t.h1_line1}<br>
            ${t.h1_line2_prefix} <span class="text-accent drop-shadow-[0_0_15px_rgba(255,69,0,0.3)]">${formatBrand(t.h1_span_text)}</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.2s;">
            ${t.p_start} <span class="text-white font-medium">${t.p_highlight}</span>${t.p_end}
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up"
            style="animation-delay: 0.4s;">
            <button onclick="window.openCalculator()"
                class="group relative px-10 py-5 bg-accent text-white text-lg font-bold rounded overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-intense cursor-pointer">
                <span class="relative z-10">${t.cta_primary}</span>
                <div
                    class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                </div>
            </button>
            <a href="#portfolio"
                class="px-10 py-5 border border-white/20 text-white text-lg font-medium rounded hover:bg-white/5 hover:border-white transition-all duration-300">
                ${t.cta_secondary}
            </a>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-slow opacity-50">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div class="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
    </div>
</section>
`;
};
