export const Blog = (lang = 'de') => {
    const content = {
        de: {
            title: "Aktuelle Einblicke & Erfolgsgeschichten",
            subtitle: "Konkrete Beispiele, wie wir lokalen Unternehmen helfen.",
            articles: [
                {
                    category: "Praxis & Gesundheit",
                    date: "Fallstudie",
                    title: "Zahnarztpraxis: 30% mehr Patienten",
                    excerpt: "Wie eine lokale Praxis durch Online-Terminbuchung und SEO täglich 2 Stunden Admin-Zeit spart und neue Patienten gewinnt.",
                    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                },
                {
                    category: "Handwerk & Bau",
                    date: "Lösung",
                    title: "Dachdeckerei: Kundenanfragen auf Autopilot",
                    excerpt: "Während das Team auf dem Dach steht, beantwortet unser AI-Chatbot Preisanfragen und filtert echte Aufträge vor.",
                    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                },
                {
                    category: "Gastronomie & Lokal",
                    date: "SEO Strategie",
                    title: "Café & Bistro: Nr. 1 auf Google Maps",
                    excerpt: "Vom Geheimtipp zum Stadtgespräch. Durch gezieltes 'Local SEO' haben wir die Sichtbarkeit in der Google-Suche verdoppelt.",
                    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                }
            ],
            readMore: "Ähnliches Projekt starten"
        },
        en: {
            title: "Insights & Success Stories",
            subtitle: "Concrete examples of how we help local businesses.",
            articles: [
                {
                    category: "Practice & Health",
                    date: "Case Study",
                    title: "Dental Practice: 30% More Patients",
                    excerpt: "How a local practice saves 2 hours of admin time daily and gains new patients via online booking and SEO.",
                    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                },
                {
                    category: "Crafts & Construction",
                    date: "Solution",
                    title: "Roofing Company: Inquiries on Autopilot",
                    excerpt: "While the team is on the roof, our AI Chatbot answers price inquiries and filters for real jobs.",
                    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                },
                {
                    category: "Gastronomy & Local",
                    date: "SEO Strategy",
                    title: "Cafe & Bistro: #1 on Google Maps",
                    excerpt: "From hidden gem to talk of the town. Through targeted 'Local SEO', we doubled visibility in Google searches.",
                    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                }
            ],
            readMore: "Start similar project"
        },
        hu: {
            title: "Esettanulmányok & Megoldások",
            subtitle: "Konkrét példák, hogyan segítünk a helyi vállalkozóknak.",
            articles: [
                {
                    category: "Praxis & Egészség",
                    date: "Esettanulmány",
                    title: "Fogorvosi Rendelő: 30%-kal több páciens",
                    excerpt: "Hogyan spórolt meg egy helyi rendelő napi 2 óra adminisztrációt és szerzett új pácienseket az online foglalórendszerrel.",
                    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                },
                {
                    category: "Építőipar & Kézműves",
                    date: "Megoldás",
                    title: "Tetőfedő Vállalkozás: Ügyfélszolgálat AI-val",
                    excerpt: "Miközben a csapat a tetőn dolgozik, az AI Chatbotunk megválaszolja az árakkal kapcsolatos kérdéseket és előszűri a munkákat.",
                    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                },
                {
                    category: "Vendéglátás",
                    date: "SEO Stratégia",
                    title: "Kávézó: 1. hely a Google Térképen",
                    excerpt: "Rejtett helyből a város kedvence. Célzott 'Helyi SEO' stratégiával megdupláztuk a láthatóságot a keresőben.",
                    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
                    link: "#contact"
                }
            ],
            readMore: "Hasonló projekt indítása"
        }
    };

    const t = content[lang] || content.de;

    return `
    <section id="blog" class="py-24 bg-black relative border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">${t.title}</h2>
                <p class="text-xl text-gray-400 max-w-2xl">${t.subtitle}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${t.articles.map((article, index) => `
                <div class="group cursor-pointer" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
                    <div class="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                        <div class="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img src="${article.img}" alt="${article.title}" class="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                            <span class="text-xs text-accent font-bold uppercase tracking-wider">${article.category}</span>
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>${article.date}</span>
                        <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span>N3XT LEVEL</span>
                    </div>
                    
                    <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight">
                        ${article.title}
                    </h3>
                    
                    <p class="text-gray-400 leading-relaxed mb-4">
                        ${article.excerpt}
                    </p>
                    
                    <div class="text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                        ${t.readMore}
                        <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
};
