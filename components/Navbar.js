export const Navbar = (lang = 'de') => {
    const content = {
        de: {
            links: [
                { text: "Leistungen", href: "#services" },
                { text: "Portfolio", href: "#portfolio" },
                { text: "Kontakt", href: "#contact" }
            ],
            btn: "Anfragen"
        },
        en: {
            links: [
                { text: "Services", href: "#services" },
                { text: "Portfolio", href: "#portfolio" },
                { text: "Contact", href: "#contact" }
            ],
            btn: "Get Quote"
        },
        hu: {
            links: [
                { text: "Szolgáltatások", href: "#services" },
                { text: "Portfólió", href: "#portfolio" },
                { text: "Kapcsolat", href: "#contact" }
            ],
            btn: "Ajánlatkérés"
        }
    };

    const t = content[lang] || content.de;

    // Build nav items HTML
    const navItems = t.links.map(link =>
        `<a href="${link.href}" class="hover:text-white transition-colors">${link.text}</a>`
    ).join('');

    return `
    <nav class="fixed top-0 w-full z-50 glass">
        <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="#" class="text-2xl font-black tracking-tighter hover:text-accent transition-colors duration-300">
                N<span class="text-[#ff0000]">3</span>XT LEVEL<span class="text-accent">.</span>
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-300">
                ${navItems}
                <a href="#contact"
                    class="px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded font-semibold hover:bg-accent hover:border-accent hover:shadow-glow transition-all duration-300">
                    ${t.btn}
                </a>
                
                <!-- Language Switcher -->
                <button class="lang-switch-btn flex items-center gap-2 bg-black/50 border border-white/10 hover:border-accent px-3 py-2 rounded-full transition-all group ml-4" title="Sprache wechseln / Change Language">
                    <span class="current-lang-flag text-xl">🇦🇹</span>
                    <span class="text-xs text-gray-400 group-hover:text-white uppercase font-bold w-4 current-lang-text">DE</span>
                </button>
            </div>

            <!-- Mobile Menu Icon -->
            <button class="md:hidden text-white" aria-label="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Dropdown (Simplified) -->
        <div id="mobile-menu" class="hidden md:hidden bg-black/95 border-b border-white/10 absolute w-full backdrop-blur-xl">
            <div class="flex flex-col p-6 space-y-6 text-center">
                ${navItems}
                <a href="#contact" class="text-accent font-bold text-lg">${t.btn}</a>
                
                <!-- Mobile Language Switcher -->
                <button class="lang-switch-btn flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-accent px-6 py-3 rounded-xl transition-all group mx-auto w-full max-w-xs">
                    <span class="current-lang-flag text-2xl">🇦🇹</span>
                    <span class="text-sm text-gray-300 group-hover:text-white uppercase font-bold current-lang-text">DE</span>
                    <span class="text-xs text-gray-500 ml-auto group-hover:text-accent">Change Language</span>
                </button>
            </div>
        </div>
    </nav>
    `;
};
