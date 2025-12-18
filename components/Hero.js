export const Hero = (lang = 'de') => {
    const content = {
        de: {
            badge: "N3XT LEVEL WEB SOLUTIONS",
            h1_start: "Wir bauen",
            h1_highlight: "digitale",
            h1_end: "Meisterwerke.",
            p: "High-Performance Webseiten & AI-Lösungen für österreichische Unternehmen. Schnell. Modern. Zukunftssicher.",
            cta_primary: "Kostenloses Erstgespräch",
            cta_secondary: "Portfolio ansehen",
            stat1: "Ladezeit",
            stat2: "SEO Score",
            stat_level: "Level"
        },
        en: {
            badge: "N3XT LEVEL WEB SOLUTIONS",
            h1_start: "We build",
            h1_highlight: "digital",
            h1_end: "masterpieces.",
            p: "High-Performance Websites & AI Solutions for modern businesses. Fast. Scalable. Future-proof.",
            cta_primary: "Free Consultation",
            cta_secondary: "View Portfolio",
            stat1: "Load Time",
            stat2: "SEO Score",
            stat_level: "Level"
        },
        hu: {
            badge: "N3XT LEVEL WEB MEGOLDÁSOK",
            h1_start: "Digitális",
            h1_highlight: "remekműveket",
            h1_end: "építünk.",
            p: "Nagy teljesítményű weboldalak és AI megoldások vállalkozások számára. Gyors. Modern. Jövőbiztos.",
            cta_primary: "Ingyenes Konzultáció",
            cta_secondary: "Portfólió Megtekintése",
            stat1: "Betöltés",
            stat2: "SEO Pontszám",
            stat_level: "Szint"
        }
    };

    const t = content[lang] || content.de;

    return `
<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    
    <!-- Background Video / Effect -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-black to-black opacity-50"></div>
        
        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <!-- Animated Blobs -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <div class="container mx-auto px-6 relative z-20 text-center">
        
        <!-- Badge -->
        <div class="inline-block mb-6 reveal">
            <span class="py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold tracking-widest text-accent uppercase shadow-glow">
                ${t.badge}
            </span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-tight reveal">
            <span class="block">${t.h1_start}</span>
            <span class="text-stroke-white text-transparent relative inline-block">
                ${t.h1_highlight}
                <svg class="absolute w-full h-3 -bottom-1 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
                </svg>
            </span>
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                ${t.h1_end}
            </span>
        </h1>

        <!-- Subheadline -->
        <p class="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed reveal">
            ${t.p}
        </p>

        <!-- CTAs -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 reveal">
            <button onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})" 
                class="group relative px-8 py-4 bg-accent text-white font-bold rounded-full overflow-hidden shadow-glow hover:shadow-glow-intense transition-all hover:-translate-y-1">
                <span class="relative z-10 flex items-center gap-2">
                    ${t.cta_primary} <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button onclick="document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})" 
                class="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-white transition-all">
                ${t.cta_secondary}
            </button>
        </div>

        <!-- Stats / Social Proof (Simplified) -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-8 max-w-4xl mx-auto reveal opacity-50 hover:opacity-100 transition-opacity">
            <div>
                <p class="text-3xl font-bold text-white">&lt; 0.4s</p>
                <p class="text-xs text-gray-500 uppercase tracking-widest">${t.stat1}</p>
            </div>
            <div>
                <p class="text-3xl font-bold text-white">100/100</p>
                <p class="text-xs text-gray-500 uppercase tracking-widest">${t.stat2}</p>
            </div>
            <div>
                <p class="text-3xl font-bold text-white">24/7</p>
                <p class="text-xs text-gray-500 uppercase tracking-widest">Support</p>
            </div>
            <div>
                <p class="text-3xl font-bold text-white">N<span class="text-white border-black" style="-webkit-text-stroke: 1px white;">3</span>XT</p>
                <p class="text-xs text-gray-500 uppercase tracking-widest">${t.stat_level}</p>
            </div>
        </div>

    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <i class="fas fa-chevron-down"></i>
    </div>
</section>
`;
};
