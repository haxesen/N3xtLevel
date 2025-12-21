export const Blog = (lang = 'de') => {
    const content = {
        de: {
            title: "Insights & Success Stories",
            subtitle: "Wie KI & Automation den Unterschied machen.",
            articles: [
                {
                    category: "Innovation",
                    date: "Webdesign 2.0",
                    title: "Warum KI-Webseiten 3x mehr Kunden konvertieren",
                    excerpt: "KI-generierte Inhalte und dynamische Strukturen passen sich dem Besucher an. Das Ergebnis: Höhere Relevanz und mehr Verkäufe.",
                    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                },
                {
                    category: "Effizienz",
                    date: "Automation",
                    title: "20 Stunden/Woche sparen mit Make.com",
                    excerpt: "Schluss mit Excel-Chaos. Wie wir Terminbuchungen, Rechnungen und E-Mails vollautomatisch synchronisieren.",
                    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                },
                {
                    category: "Wachstum",
                    date: "Local SEO",
                    title: "Google Maps Dominanz in 30 Tagen",
                    excerpt: "Lokale Sichtbarkeit ist der Schlüssel. Mit unserer optimierten Strategie landet Ihr Unternehmen ganz oben.",
                    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                }
            ],
            readMore: "Lösung anfragen"
        },
        en: {
            title: "Insights & Success Stories",
            subtitle: "How AI & Automation make the difference.",
            articles: [
                {
                    category: "Innovation",
                    date: "Web Design 2.0",
                    title: "Why AI Websites Convert 3x Better",
                    excerpt: "AI-generated content and dynamic structures adapt to the visitor. The result: Higher relevance and more sales.",
                    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                },
                {
                    category: "Efficiency",
                    date: "Automation",
                    title: "Save 20 Hours/Week with Make.com",
                    excerpt: "Stop the spreadsheet chaos. How we fully synchronize bookings, invoices, and emails automatically.",
                    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                },
                {
                    category: "Growth",
                    date: "Local SEO",
                    title: "Google Maps Dominance in 30 Days",
                    excerpt: "Local visibility is key. With our optimized strategy, your business lands at the very top.",
                    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                }
            ],
            readMore: "Request Solution"
        },
        hu: {
            title: "Esettanulmányok & Tudástár",
            subtitle: "Hogyan tesz különbséget az AI & Automatizáció.",
            articles: [
                {
                    category: "Innováció",
                    date: "Webdesign 2.0",
                    title: "Miért konvertálnak 3x jobban az AI weboldalak?",
                    excerpt: "Az AI által generált tartalmak és dinamikus struktúrák alkalmazkodnak a látogatóhoz. Eredmény: Magasabb eladás.",
                    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                },
                {
                    category: "Hatékonyság",
                    date: "Automatizáció",
                    title: "Heti 20 óra megtakarítás Make.com-mal",
                    excerpt: "Vége az Excel-káosznak. Bemutatjuk, hogyan szinkronizáljuk teljesen automatán a foglalásokat, számlákat és e-maileket.",
                    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                },
                {
                    category: "Növekedés",
                    date: "Helyi SEO",
                    title: "Google Térkép uralom 30 nap alatt",
                    excerpt: "A helyi láthatóság a kulcs. Optimalizált stratégiánkkal vállalkozása garantáltan a találati lista élére kerül.",
                    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
                    link: "#"
                }
            ],
            readMore: "Megoldás kérése"
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
                <div class="group cursor-pointer" onclick="window.openCalculator()">
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
