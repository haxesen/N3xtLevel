export const Blog = (lang = 'de') => {
    const content = {
        de: {
            title: "N3XT LEVEL",
            title_highlight: "Insights",
            subtitle: "Wissen, Trends & Strategien für Ihren digitalen Vorsprung.",
            read_more: "Artikel lesen",
            articles: [
                {
                    date: "12. Dez 2024",
                    category: "AI Technology",
                    title: "Warum Chatbots 2025 unverzichtbar sind",
                    desc: "Automatisierter Kundenservice ist kein Trend mehr, sondern Standard. Wie Sie damit Zeit und Geld sparen.",
                    icon: "fa-robot"
                },
                {
                    date: "28. Nov 2024",
                    category: "Web Performance",
                    title: "Speed is King: Google Core Vitals",
                    desc: "Ladezeiten unter 1 Sekunde? Warum langsame Webseiten Kunden kosten und wie wir das lösen.",
                    icon: "fa-bolt"
                },
                {
                    date: "15. Nov 2024",
                    category: "Case Study",
                    title: "30% mehr Umsatz durch Redesign",
                    desc: "Ein Blick hinter die Kulissen: Wie wir einem lokalen Unternehmen zu mehr Anfragen verholfen haben.",
                    icon: "fa-chart-line"
                }
            ]
        },
        en: {
            title: "N3XT LEVEL",
            title_highlight: "Insights",
            subtitle: "Knowledge, Trends & Strategies for your digital advantage.",
            read_more: "Read Article",
            articles: [
                {
                    date: "Dec 12, 2024",
                    category: "AI Technology",
                    title: "Why Chatbots are essential in 2025",
                    desc: "Automated customer service is no longer a trend, but a standard. How to save time and money.",
                    icon: "fa-robot"
                },
                {
                    date: "Nov 28, 2024",
                    category: "Web Performance",
                    title: "Speed is King: Google Core Vitals",
                    desc: "Load times under 1 second? Why slow websites cost customers and how we solve it.",
                    icon: "fa-bolt"
                },
                {
                    date: "Nov 15, 2024",
                    category: "Case Study",
                    title: "30% Revenue Growth via Redesign",
                    desc: "Behind the scenes: How we helped a local business generate more leads.",
                    icon: "fa-chart-line"
                }
            ]
        },
        hu: {
            title: "N3XT LEVEL",
            title_highlight: "Tudástár",
            subtitle: "Tudás, Trendek & Stratégiák a digitális előnyért.",
            read_more: "Tovább olvasom",
            articles: [
                {
                    date: "2024. Dec 12.",
                    category: "AI Technológia",
                    title: "Miért elengedhetetlenek a Chatbotok 2025-ben?",
                    desc: "Az automatizált ügyfélszolgálat már nem trend, hanem elvárás. Hogyan spórolhatsz vele időt?",
                    icon: "fa-robot"
                },
                {
                    date: "2024. Nov 28.",
                    category: "Web Teljesítmény",
                    title: "A Sebesség a Király: Google Core Vitals",
                    desc: "1 másodperc alatti betöltés? Miért veszítesz vevőket a lassú oldallal, és mi a megoldás?",
                    icon: "fa-bolt"
                },
                {
                    date: "2024. Nov 15.",
                    category: "Esettanulmány",
                    title: "30% Bevételnövekedés Redesign által",
                    desc: "Bepillantás a kulisszák mögé: Hogyan szereztünk több ügyfelet egy helyi vállalkozásnak.",
                    icon: "fa-chart-line"
                }
            ]
        }
    };

    const t = content[lang] || content.de;

    return `
<!-- Blog / Insights Section -->
<section id="blog" class="py-24 bg-black relative border-t border-white/5 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">${t.title} <span class="text-accent">${t.title_highlight}</span></h2>
            <p class="text-gray-400 max-w-2xl mx-auto text-lg">${t.subtitle}</p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${t.articles.map((article, index) => `
                <article class="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 reveal" style="transition-delay: ${index * 100}ms;">
                    <!-- Hover Glow -->
                    <div class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <!-- Decorative Top Border -->
                    <div class="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

                    <div class="p-8 flex flex-col h-full relative z-10">
                        <!-- Header: Icon & Date -->
                        <div class="flex justify-between items-start mb-6">
                            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 shadow-glow-sm">
                                <i class="fas ${article.icon} text-xl"></i>
                            </div>
                            <span class="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded bg-black/50">${article.date}</span>
                        </div>

                        <!-- Content -->
                        <div class="flex-1">
                            <span class="text-accent text-xs font-bold uppercase tracking-wider mb-3 block">${article.category}</span>
                            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight">${article.title}</h3>
                            <p class="text-gray-400 text-sm leading-relaxed mb-6">${article.desc}</p>
                        </div>

                        <!-- Footer -->
                        <div class="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                            <span class="text-white text-sm font-semibold group-hover:translate-x-1 transition-transform cursor-pointer">${t.read_more}</span>
                            <i class="fas fa-arrow-right text-accent -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
                        </div>
                    </div>
                </article>
            `).join('')}
        </div>
        
        <!-- View All Button (Optional) -->
        <div class="text-center mt-16 reveal">
             <button class="text-gray-500 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-accent pb-0.5">
                ${lang === 'hu' ? 'Minden cikk megtekintése' : (lang === 'en' ? 'View all articles' : 'Alle Artikel ansehen')}
             </button>
        </div>

    </div>
</section>
`;
};
