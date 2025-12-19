export const Services = (lang = 'de') => {
    const content = {
        de: {
            title_prefix: "Unsere",
            title_highlight: "Leistungen",
            card1_title: "Modernes Webdesign",
            card1_desc: "High-End Interfaces, die Ihre Marke perfekt in Szene setzen. Ästhetisch, intuitiv und conversion-optimiert.",
            card2_title: "SEO & Google-Ranking",
            card2_desc: "Wir bringen Sie nach oben. Durch datengetriebene Strategien erhöhen wir Ihre Sichtbarkeit und Reichweite nachhaltig.",
            card3_title: "KI-Automatisierung",
            card3_desc: "Verschaffen Sie sich einen Wettbewerbsvorteil durch intelligente Prozessautomatisierung und KI-Integrationen.",
            learn_more: "Mehr erfahren"
        },
        en: {
            title_prefix: "Our",
            title_highlight: "Services",
            card1_title: "Modern Web Design",
            card1_desc: "High-end interfaces that perfectly showcase your brand. Aesthetic, intuitive, and optimize for conversion.",
            card2_title: "SEO & Google Ranking",
            card2_desc: "We take you to the top. Using data-driven strategies to sustainably increase your visibility and reach.",
            card3_title: "AI Automation",
            card3_desc: "Gain a competitive edge through intelligent process automation and cutting-edge AI integrations.",
            learn_more: "Learn more"
        },
        hu: {
            title_prefix: "",
            title_highlight: "Szolgáltatásaink",
            card1_title: "Modern Webdizájn",
            card1_desc: "Csúcskategóriás felületek, amelyek tökéletesen bemutatják márkáját. Esztétikus, intuitív és konverzióra optimalizált.",
            card2_title: "SEO & Google Rangsor",
            card2_desc: "A csúcsra juttatjuk. Adatvezérelt stratégiákkal fenntarthatóan növeljük láthatóságát és elérését.",
            card3_title: "AI Automatizáció",
            card3_desc: "Szerezzen versenyelőnyt intelligens folyamatautomatizálással és mesterséges intelligencia integrációval.",
            learn_more: "Részletek"
        }
    };

    const t = content[lang] || content.de;

    return `
    return `
        < !--Services Section-- >
            <section id="services" class="py-32 bg-black relative overflow-hidden">
                <!-- Mobile Glow -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[90px] pointer-events-none md:hidden"></div>

                <div class="max-w-7xl mx-auto px-6">
                    <div class="text-center mb-24 reveal">
                        <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">${t.title_prefix} <span
                            class="text-accent">${t.title_highlight}</span></h2>
                        <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Card 1 -->
                        <div
                            class="group reveal p-10 rounded-3xl bg-card-bg border border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow relative overflow-hidden flex flex-col cursor-pointer">
                            <div
                                class="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-white">${t.card1_title}</h3>
                            <p class="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors flex-1">
                                ${t.card1_desc}
                            </p>
                            <div class="mt-8 flex items-center gap-3 text-accent font-bold text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                                <span>${t.learn_more}</span>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <!-- Card 2 -->
                        <div class="group reveal p-10 rounded-3xl bg-card-bg border border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow relative overflow-hidden flex flex-col cursor-pointer"
                            style="transition-delay: 100ms;">
                            <div
                                class="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-white">${t.card2_title}</h3>
                            <p class="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors flex-1">
                                ${t.card2_desc}
                            </p>
                            <div class="mt-8 flex items-center gap-3 text-accent font-bold text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                                <span>${t.learn_more}</span>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="group reveal p-10 rounded-3xl bg-card-bg border border-white/5 hover:border-accent/40 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow relative overflow-hidden flex flex-col cursor-pointer"
                            style="transition-delay: 200ms;">
                            <div
                                class="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-white">${t.card3_title}</h3>
                            <p class="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors flex-1">
                                ${t.card3_desc}
                            </p>
                            <div class="mt-8 flex items-center gap-3 text-accent font-bold text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                                <span>${t.learn_more}</span>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `;
`;
};
