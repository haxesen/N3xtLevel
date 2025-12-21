export const TechStack = (lang = 'de') => {
    const t = {
        de: "Powering your success with",
        en: "Powering your success with",
        hu: "A sikered motorja:"
    }[lang] || "Power your success with";

    // Tech Stack items: Icon class, Name
    const stack = [
        { icon: "fa-solid fa-brain", name: "OpenAI" },
        { icon: "fa-solid fa-bolt", name: "Make.com" },
        { icon: "fa-brands fa-google", name: "Google" },
        { icon: "fa-solid fa-chart-line", name: "Google Analytics" },
        { icon: "fa-solid fa-rocket", name: "Performance" },
        { icon: "fa-solid fa-magnifying-glass-chart", name: "SEO Pro" }
    ];

    return `
    <section class="py-12 bg-black border-b border-white/5 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 text-center">
             <p class="text-sm text-gray-500 uppercase tracking-[0.2em] mb-8 font-medium">${t}</p>
             
             <!-- Tech Grid (Mobile: 3x2, Desktop: Flex) -->
             <div class="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                ${stack.map(item => `
                    <div class="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110">
                        <i class="${item.icon} text-3xl md:text-4xl text-gray-400 group-hover:text-accent transition-colors"></i>
                        <span class="text-[10px] md:text-xs text-gray-600 group-hover:text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">${item.name}</span>
                    </div>
                `).join('')}
             </div>
        </div>
    </section>
    `;
};
