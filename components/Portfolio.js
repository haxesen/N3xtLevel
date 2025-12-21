export const Portfolio = (lang = 'de') => {
    const content = {
        de: {
            title_prefix: "Ausgewählte",
            title_highlight: "Design-Konzepte",
            subtitle: "Innovation trifft auf Design.",
            view_all: "Eigenes Projekt starten →",
            proj1_cat: "Beauty & Wellness",
            proj1_desc: "Online-Terminbuchung & Elegantes Design für mehr Kunden.",
            proj2_cat: "Gastronomie",
            proj2_desc: "Digitale Speisekarte & Lokale SEO-Optimierung.",
            proj3_cat: "Gesundheit",
            proj3_desc: "Vertrauensvolle Patientenkommunikation & Rezept-Service."
        },
        en: {
            title_prefix: "Selected",
            title_highlight: "Design Concepts",
            subtitle: "Innovation meets Design.",
            view_all: "Start your Project →",
            proj1_cat: "Beauty & Wellness",
            proj1_desc: "Online booking & Elegant design for more customers.",
            proj2_cat: "Gastronomy",
            proj2_desc: "Digital menu & Local SEO optimization.",
            proj3_cat: "Health",
            proj3_desc: "Trustworthy patient communication & Prescription service."
        },
        hu: {
            title_prefix: "Kiemelt",
            title_highlight: "Design Koncepciók",
            subtitle: "Innováció és Design találkozása.",
            view_all: "Saját projekt indítása →",
            proj1_cat: "Szépség & Wellness",
            proj1_desc: "Online időpontfoglalás & Elegáns dizájn a több ügyfélért.",
            proj2_cat: "Gasztronómia",
            proj2_desc: "Digitális étlap & Helyi SEO optimalizálás.",
            proj3_cat: "Egészségügy",
            proj3_desc: "Bizalomépítő kommunikáció & Recept szolgáltatás."
        }
    };

    const t = content[lang] || content.de;

    return `
<!-- Portfolio Section -->
<section id="portfolio" class="py-32 bg-dark border-t border-white/5 relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div>
                <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">${t.title_prefix} <span
                        class="text-accent">${t.title_highlight}</span></h2>
                <p class="text-gray-400">${t.subtitle}</p>
            </div>
            <a onclick="window.openCalculator()" style="cursor: pointer;"
                class="hidden md:inline-block text-accent font-semibold hover:text-white transition-colors mt-6 md:mt-0">${t.view_all}</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1: Beauty & Wellness -->
            <div class="group reveal rounded-2xl overflow-hidden relative aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1000"
                    alt="Beauty Salon"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">${t.proj1_cat}</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Glow & Relax</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        ${t.proj1_desc}</p>
                </div>
            </div>

            <!-- Project 2: Gastronomy -->
            <div class="group reveal rounded-2xl overflow-hidden relative aspect-[4/3]"
                style="transition-delay: 100ms;">
                <img src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&q=80&w=1000"
                    alt="Bakery & Ice Cream"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">${t.proj2_cat}</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Eiscafe Müller</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        ${t.proj2_desc}</p>
                </div>
            </div>

            <!-- Project 3: Medical -->
            <div class="group reveal rounded-2xl overflow-hidden relative aspect-[4/3]"
                style="transition-delay: 200ms;">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                    alt="Medical Practice"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">${t.proj3_cat}</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Praxis Dr. Weber</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        ${t.proj3_desc}</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-8 md:hidden">
            <a onclick="window.openCalculator()" style="cursor: pointer;" class="text-accent font-semibold hover:text-white transition-colors">${t.view_all}</a>
        </div>
    </div>
</section>
`;
};
