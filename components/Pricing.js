export const Pricing = (lang = 'de') => {

    const translations = {
        de: {
            title: "Investitionspläne",
            subtitle: "Transparent & Fair. Wählen Sie das Paket für Ihren Erfolg.",
            launch_offer: "🚀 Einführungsangebot: Preise gültig für die nächsten 3 Monate!",
            essential: {
                name: "Essential",
                price: "€990",
                period: "einmalig",
                desc: "Für Start-ups & lokale Helden.",
                features: ["High-Conversion Landing Page", "Google Maps & Kontakt-Setup", "Ultra-Fast Speed Performance", "SEO Basis & Social Media"],
                btn: "Jetzt starten"
            },
            professional: {
                name: "Professional",
                price: "€1.790",
                period: "einmalig",
                desc: "Unser Bestseller für KMUs.",
                features: ["Bis zu 7 Unterseiten & Blog", "CMS (Einfache Selbstverwaltung)", "AI-Optimierte Texte & Bilder", "Erweitertes Local SEO & Analytics", "Basis Automatisierung (Kalender)"],
                btn: "Durchstarten"
            },
            enterprise: {
                name: "Enterprise & Shop",
                price: "Ab €3.990",
                period: "individuell",
                desc: "Innovation & Marktführerschaft.",
                features: ["High-End E-Commerce System", "24/7 AI Sales Chatbot", "Profi Make.com Automatisierung", "International (Mehrsprachig)", "CRM & Priority Support"],
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
            launch_offer: "🚀 Launch Prising: Valid for the next 3 months only!",
            essential: {
                name: "Essential",
                price: "€990",
                period: "one-time",
                desc: "For Start-ups & Local Heroes.",
                features: ["High-Conversion Landing Page", "Google Maps & Contact Setup", "Ultra-Fast Speed Performance", "Basic SEO & Social Media"],
                btn: "Get Started"
            },
            professional: {
                name: "Professional",
                price: "€1,790",
                period: "one-time",
                desc: "Our Bestseller for SMEs.",
                features: ["Up to 7 Subpages & Blog", "CMS (Easy Self-Management)", "AI-Optimized Content & Images", "Advanced Local SEO & Analytics", "Basic Automation (Calendar)"],
                btn: "Boost Business"
            },
            enterprise: {
                name: "Enterprise & Commerce",
                price: "From €3,990",
                period: "individual",
                desc: "Innovation & Market Leadership.",
                features: ["High-End E-Commerce System", "24/7 AI Sales Chatbot", "Pro Make.com Automation", "International (Multi-language)", "CRM & Priority Support"],
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
            launch_offer: "🚀 Bevezető Árak: Az ajánlat a következő 3 hónapban érvényes!",
            essential: {
                name: "Essential",
                price: "€990",
                period: "egyszeri",
                desc: "Induló vállalkozásoknak.",
                features: ["High-Conversion Landing Page", "Google Térkép & Kapcsolat", "Ultra-Gyors Betöltés", "Alap SEO & Social Media"],
                btn: "Indítás"
            },
            professional: {
                name: "Professional",
                price: "€1.790",
                period: "egyszeri",
                desc: "Bestseller KKV-knak.",
                features: ["Akár 7 aloldal & Blog", "CMS (Könnyű Szerkeszthetőség)", "AI Szövegírás & Képek", "Haladó Helyi SEO & Analytics", "Alap Automatizálás (Naptár)"],
                btn: "Turbózzuk fel"
            },
            enterprise: {
                name: "Enterprise & Shop",
                price: "€3.990-tól",
                period: "egyéni",
                desc: "Innováció és Piacvezetés.",
                features: ["High-End Webáruház Rendszer", "24/7 AI Sales Chatbot", "Professzionális Make.com Automatizálás", "Nemzetközi (Többnyelvűség)", "CRM & Priority Support"],
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
            ${isPopular ? `<div class="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl flex items-center gap-1"><i class="fas fa-star text-[10px]"></i> POPULAR</div>` : ''}
            
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

            <button onclick="window.selectPackage('${data.name}')" class="w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${btnClass}">
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
                
                <!-- Launch Offer Badge -->
                <div class="inline-block bg-accent/10 border border-accent/30 rounded-full px-6 py-2 animate-pulse-slow mt-4">
                    <span class="text-accent font-bold text-sm md:text-base tracking-wide">
                        ${t.launch_offer}
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${renderCard('essential')}
                ${renderCard('professional', true)}
                ${renderCard('enterprise')}
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
