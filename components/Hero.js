export const Hero = (lang = 'de') => {
    const content = {
        de: {
            h1_line1: "Bringen Sie Ihr Business",
            h1_line2_prefix: "auf das",
            h1_span_text: "N3XT LEVEL.",
            p_start: "KI-optimierte Web-Lösungen für maximalen",
            p_highlight: "Unternehmenserfolg",
            p_end: ".",
            cta_primary: "Jetzt anfragen",
            cta_secondary: "Portfolio ansehen"
        },
        en: {
            h1_line1: "Take your Business",
            h1_line2_prefix: "to the",
            h1_span_text: "N3XT LEVEL.",
            p_start: "AI-optimized web solutions for maximum",
            p_highlight: "business success",
            p_end: ".",
            cta_primary: "Get in touch",
            cta_secondary: "View Portfolio"
        },
        hu: {
            h1_line1: "Emelje vállalkozását",
            h1_line2_prefix: "a",
            h1_span_text: "N3XT LEVEL-re.",
            p_start: "MI-optimalizált webes megoldások a maximális",
            p_highlight: "üzleti sikerért",
            p_end: ".",
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
<section class="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
    <!-- Background Glows -->
    <div
        class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none">
    </div>
    <div
        class="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none">
    </div>

    <div class="max-w-7xl mx-auto px-6 text-center z-10">
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
            <a href="#contact"
                class="group relative px-10 py-5 bg-accent text-white text-lg font-bold rounded overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-intense">
                <span class="relative z-10">${t.cta_primary}</span>
                <div
                    class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                </div>
            </a>
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
