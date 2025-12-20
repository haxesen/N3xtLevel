export const Pricing = (lang = 'de') => {

    const translations = {
        de: {
            title: "Investitionspläne",
            subtitle: "Transparent & Fair. Wählen Sie das Paket für Ihren Erfolg.",
            starter: {
                name: "Starter",
                price: "€1.290",
                period: "einmalig",
                desc: "Perfekter Einstieg für Selbstständige.",
                features: ["Modernes One-Pager Design", "Mobile Optimierung", "SEO Basis-Setup", "Rechtssicheres Impressum"],
                btn: "Jetzt starten"
            },
            business: {
                name: "Business Growth",
                price: "€2.490",
                period: "einmalig",
                desc: "Für Unternehmen, die wachsen wollen.",
                features: ["Bis zu 8 Unterseiten", "CMS (Selbstverwaltung)", "Blog Funktion", "Erweitertes SEO", "Schnelle Ladezeiten"],
                btn: "Durchstarten"
            },
            dominance: {
                name: "Market Dominance",
                price: "Ab €4.990",
                period: "individuell",
                desc: "Maßgeschneiderte Web-Apps & Systeme.",
                features: ["Alles aus Business Growth", "React / Next.js Apps", "KI-Chatbots", "Mehrsprachigkeit", "API Integrationen"],
                btn: "Beratung anfordern"
            },
            cta: {
                title: "Haben Sie individuelle Anforderungen?",
                desc: "Nicht das Passende dabei? Nutzen Sie unseren Projekt Konfigurator für ein maßgeschneidertes Angebot.",
                btn: "Kalkulator starten"
            }
        },
        en: {
            title: "Investment Plans",
            subtitle: "Transparent & Fair. Choose the package for your success.",
            starter: {
                name: "Starter",
                price: "€1,290",
                period: "one-time",
                desc: "Perfect start for freelancers.",
                features: ["Modern One-Pager Design", "Mobile Optimization", "Basic SEO Setup", "Legal Imprint"],
                btn: "Get Started"
            },
            business: {
                name: "Business Growth",
                price: "€2,490",
                period: "one-time",
                desc: "For companies aiming to grow.",
                features: ["Up to 8 Subpages", "CMS (Self-management)", "Blog Function", "Advanced SEO", "Fast Loading"],
                btn: "Boost Business"
            },
            dominance: {
                name: "Market Dominance",
                price: "From €4,990",
                period: "individual",
                desc: "Tailored Web Apps & Systems.",
                features: ["Everything in Business Growth", "React / Next.js Apps", "AI Chatbots", "Multilingual", "API Integrations"],
                btn: "Request Consult"
            },
            cta: {
                title: "Have custom requirements?",
                desc: "Didn't find what you need? Use our Project Configurator for a tailored offer.",
                btn: "Start Calculator"
            }
        },
        hu: {
            title: "Befektetési Csomagok",
            subtitle: "Átlátható és korrekt. Válaszd a sikeredhez illő csomagot.",
            starter: {
                name: "Kezdő",
                price: "€1.290",
                period: "egyszeri",
                desc: "Tökéletes indulás vállalkozóknak.",
                features: ["Modern One-Pager Dizájn", "Mobil Optimalizálás", "Alap SEO Beállítás", "Jogtiszta Impresszum"],
                btn: "Indítás"
            },
            business: {
                name: "Üzleti Növekedés",
                price: "€2.490",
                period: "egyszeri",
                desc: "Cégeknek, akik növekedni akarnak.",
                features: ["Akár 8 aloldal", "CMS (Szerkeszthető)", "Blog Funkció", "Haladó SEO", "Gyors Betöltés"],
                btn: "Turbózzuk fel"
            },
            dominance: {
                name: "Piaci Dominancia",
                price: "€4.990-tól",
                period: "egyéni",
                desc: "Egyedi Web-Appok és Rendszerek.",
                features: ["Minden a Növekedés csomagból", "React / Next.js Appok", "AI Chatbotok", "Többnyelvűség", "API Integrációk"],
                btn: "Konzultáció"
            },
            cta: {
                title: "Egyedi igényeid vannak?",
                desc: "Nem találod a megfelelőt? Használd a Projekt Konfigurátort egy személyre szabott ajánlatért.",
                btn: "Kalkulátor Indítása"
            }
        }
    };

    const t = translations[lang] || translations.de;

    const renderCard = (type, isPopular = false) => {
        const data = t[type];
        const borderClass = isPopular ? "border-accent shadow-glow" : "border-white/10 hover:border-accent/50";
        const bgClass = isPopular ? "bg-white/5" : "bg-card-bg";
        const btnClass = isPopular ? "bg-accent hover:bg-accent-hover text-white shadow-lg" : "border border-accent/50 hover:bg-accent text-white";

        return `
        <div class="flex flex-col p-8 rounded-3xl border transition-all duration-300 ${borderClass} ${bgClass} relative group hover:-translate-y-2">
            ${isPopular ? `<div class="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>` : ''}
            
            <h3 class="text-2xl font-bold text-white mb-2">${data.name}</h3>
            <div class="flex items-baseline mb-4">
                <span class="text-4xl font-bold text-accent">${data.price}</span>
                <span class="text-xs text-gray-500 ml-2">${data.period}</span>
            </div>
            <p class="text-gray-400 text-sm mb-6 h-10">${data.desc}</p>
            
            <ul class="space-y-3 mb-8 flex-grow">
                ${data.features.map(f => `
                <li class="flex items-start text-gray-300 text-sm">
                    <span class="text-accent mr-2">✓</span> ${f}
                </li>
                `).join('')}
            </ul>

            <button onclick="window.hubSelect('message')" class="w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${btnClass}">
                ${data.btn}
            </button>
        </div>
        `;
    };

    return `
    <section id="pricing" class="py-20 bg-black relative border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">${t.title}</h2>
                <div class="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                <p class="text-gray-400">${t.subtitle}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${renderCard('starter')}
                ${renderCard('business', true)}
                ${renderCard('dominance')}
            </div>

            <!-- Custom Calculator CTA -->
            <div class="mt-16 p-8 rounded-3xl border border-white/10 bg-white/5 text-center relative overflow-hidden group hover:border-accent/50 transition-colors">
                <div class="absolute inset-0 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div class="relative z-10">
                    <h3 class="text-2xl font-bold text-white mb-4">
                        ${t.cta.title}
                    </h3>
                    <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
                        ${t.cta.desc}
                    </p>
                    <button onclick="window.openCalculator()" class="px-8 py-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-white rounded-xl font-bold transition-all shadow-glow hover:shadow-glow-intense flex items-center gap-2 mx-auto group-btn">
                        <span>${t.cta.btn}</span>
                        <i class="fas fa-calculator group-btn-hover:rotate-12 transition-transform"></i>
                    </button>
                </div>
            </div>

        </div>
    </section>
    `;
};
