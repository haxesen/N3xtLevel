export const Portfolio = `
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
            <!-- Project 1: Beauty & Wellness -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1600334019640-eb827a4d52d9?auto=format&fit=crop&q=80&w=1000"
                    alt="Beauty Salon"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">Beauty & Wellness</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Glow & Relax</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Online-Terminbuchung & Elegantes Design für mehr Kunden.</p>
                </div>
            </div>

            <!-- Project 2: Gastronomy -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]"
                style="transition-delay: 100ms;">
                <img src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&q=80&w=1000"
                    alt="Bakery & Ice Cream"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">Gastronomie</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Eiscafe Müller</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Digitale Speisekarte & Lokale SEO-Optimierung.</p>
                </div>
            </div>

            <!-- Project 3: Medical -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]"
                style="transition-delay: 200ms;">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                    alt="Medical Practice"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">Gesundheit</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Praxis Dr. Weber</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Vertrauensvolle Patientenkommunikation & Rezept-Service.</p>
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
