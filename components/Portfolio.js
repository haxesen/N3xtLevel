const Portfolio = `
<!-- Portfolio Section -->
<section id="portfolio" class="py-32 bg-dark border-t border-white/5 relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div>
                <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Ausgewählte <span
                        class="text-accent">Projekte</span></h2>
                <p class="text-gray-400">Innovation trifft auf Design.</p>
            </div>
            <a href="#"
                class="hidden md:inline-block text-accent font-semibold hover:text-white transition-colors mt-6 md:mt-0">Alle
                Projekte ansehen →</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                    alt="Dashboard"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">FinTech</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Alpha Analytics</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        KI-gestütztes Dashboard für Finanzanalysen.</p>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]"
                style="transition-delay: 100ms;">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000"
                    alt="E-Commerce"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">E-Commerce</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Lumina Shop</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Performance-optimierter Online Store.</p>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]"
                style="transition-delay: 200ms;">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                    alt="Corporate"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">Corporate</p>
                    <h3 class="text-2xl font-bold text-white mb-2">BauWesen AG</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Moderne Unternehmenswebseite.</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-8 md:hidden">
            <a href="#" class="text-accent font-semibold hover:text-white transition-colors">Alle Projekte
                ansehen
                →</a>
        </div>
    </div>
</section>
`;
