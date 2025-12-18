export const Stats = (lang = 'de') => {
    const content = {
        de: {
            stat1: "Ladezeit",
            stat2: "Google SEO Score",
            stat3: "AI Support",
            stat4: "Made in Austria"
        },
        en: {
            stat1: "Load Time",
            stat2: "Google SEO Score",
            stat3: "AI Support",
            stat4: "Made in Austria"
        },
        hu: {
            stat1: "Betöltési idő",
            stat2: "Google SEO Pont",
            stat3: "AI Ügyfélszolgálat",
            stat4: "Osztrák Minőség"
        }
    };

    const t = content[lang] || content.de;

    return `
<!-- Stats Counter Section -->
<section id="stats" class="py-20 bg-[#050505] border-y border-white/5 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            
            <!-- Stat 1 -->
            <div class="reveal p-4 group">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2 flex justify-center items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                    <span>&lt;</span>
                    <span class="counter" data-target="0.4">0</span>
                    <span class="text-accent">s</span>
                </div>
                <p class="text-gray-400 text-sm uppercase tracking-wider font-semibold">${t.stat1}</p>
            </div>

            <!-- Stat 2 -->
            <div class="reveal p-4 group" style="transition-delay: 100ms;">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2 flex justify-center items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                    <span class="counter" data-target="100">0</span>
                    <span class="text-accent">/100</span>
                </div>
                <p class="text-gray-400 text-sm uppercase tracking-wider font-semibold">${t.stat2}</p>
            </div>

            <!-- Stat 3 -->
            <div class="reveal p-4 group" style="transition-delay: 200ms;">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2 flex justify-center items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                    <span class="counter" data-target="24">0</span>
                    <span class="text-accent">/7</span>
                </div>
                <p class="text-gray-400 text-sm uppercase tracking-wider font-semibold">${t.stat3}</p>
            </div>

            <!-- Stat 4 -->
            <div class="reveal p-4 group" style="transition-delay: 300ms;">
                <div class="text-4xl md:text-5xl font-bold text-white mb-2 flex justify-center items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                    <span class="counter" data-target="100">0</span>
                    <span class="text-accent">%</span>
                </div>
                <p class="text-gray-400 text-sm uppercase tracking-wider font-semibold">${t.stat4}</p>
            </div>

        </div>
    </div>
</section>
`;
};
