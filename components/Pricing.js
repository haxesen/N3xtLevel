export const Pricing = (lang = 'de') => {

    const content = {
        de: {
            title: "Investitionspläne",
            subtitle: "Transparent & Fair. Wählen Sie das Paket für Ihren Erfolg.",
            launch_offer: "🚀 Einführungsangebot: Preise gültig für die nächsten 3 Monate!",
            future_note: "*Danach gelten die regulären Preise (+20%).",
            future_label: "Normale Preis:",
            essential: {
                name: "Essential",
                price: "€990",
                future_price: "€1.190",
                period: "einmalig",
                desc: "Für Start-ups & lokale Helden.",
                features: ["High-Conversion Landing Page", "Google Maps & Kontakt-Setup", "Ultra-Fast Speed Performance", "SEO Basis & Social Media"],
                btn: "Jetzt starten"
            },
            professional: {
                name: "Professional",
                price: "€1.790",
                future_price: "€2.190",
                period: "einmalig",
                desc: "Unser Bestseller für KMUs.",
                features: ["Bis zu 7 Unterseiten & Blog", "CMS (Einfache Selbstverwaltung)", "AI-Optimierte Texte & Bilder", "Erweitertes Local SEO & Analytics", "Basis Automatisierung (Kalender)"],
                btn: "Durchstarten"
            },
            enterprise: {
                name: "Enterprise & Shop",
                price: "Ab €3.990",
                future_price: "€4.790",
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
            launch_offer: "🚀 Launch Pricing: Valid for the next 3 months only!",
            future_note: "*Regular prices (+20%) apply thereafter.",
            future_label: "Regular Price:",
            essential: {
                name: "Essential",
                price: "€990",
                future_price: "€1,190",
                period: "one-time",
                desc: "For Start-ups & Local Heroes.",
                features: ["High-Conversion Landing Page", "Google Maps & Contact Setup", "Ultra-Fast Speed Performance", "Basic SEO & Social Media"],
                btn: "Get Started"
            },
            professional: {
                name: "Professional",
                price: "€1,790",
                future_price: "€2,190",
                period: "one-time",
                desc: "Our Bestseller for SMEs.",
                features: ["Up to 7 Subpages & Blog", "CMS (Easy Self-Management)", "AI-Optimized Content & Images", "Advanced Local SEO & Analytics", "Basic Automation (Calendar)"],
                btn: "Boost Business"
            },
            enterprise: {
                name: "Enterprise & Commerce",
                price: "From €3,990",
                future_price: "€4,790",
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
            future_note: "*A 3 hónap letelte után a normál árak (+20%) érvényesek.",
            future_label: "Normál ár:",
            essential: {
                name: "Essential",
                price: "€990",
                future_price: "€1.190",
                period: "egyszeri",
                desc: "Induló vállalkozásoknak.",
                features: ["High-Conversion Landing Page", "Google Térkép & Kapcsolat", "Ultra-Gyors Betöltés", "Alap SEO & Social Media"],
                btn: "Indítás"
            },
            professional: {
                name: "Professional",
                price: "€1.790",
                future_price: "€2.190",
                period: "egyszeri",
                desc: "Bestseller KKV-knak.",
                features: ["Akár 7 aloldal & Blog", "CMS (Könnyű Szerkeszthetőség)", "AI Szövegírás & Képek", "Haladó Helyi SEO & Analytics", "Alap Automatizálás (Naptár)"],
                btn: "Turbózzuk fel"
            },
            enterprise: {
                name: "Enterprise & Shop",
                price: "€3.990-tól",
                future_price: "€4.790",
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

    const t = content[lang] || content.de;

    const renderCard = (data, isPopular = false) => {
        // Updated Styling for Launch Offer
        // More distinct background (dark grey/blue tint instead of transparent)
        // Stronger borders
        const borderClass = isPopular ? 'border-accent shadow-[0_0_40px_rgba(255,69,0,0.15)] scale-105 z-10' : 'border-white/10 hover:border-accent/40 hover:bg-white/5';
        const bgClass = isPopular ? 'bg-[#0f0f0f]' : 'bg-[#0a0a0a]';
        const btnClass = isPopular ? 'bg-accent text-white hover:bg-accent-hover shadow-glow hover:shadow-glow-intense' : 'bg-transparent border border-white/20 text-white hover:bg-white/10';

        // Dynamic Tech Background for Popular Card
        // We put this in a wrapper with overflow-hidden to clip the animation,
        // but the CARD itself must NOT be overflow-hidden so the Badge (-top-4) is visible.
        const techBg = isPopular ? `
            <style>
                @keyframes techMove { 0% { background-position: 0 0; } 100% { background-position: 40px 40px; } }
            </style>
            <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none -z-10">
                <div class="absolute inset-0 opacity-[0.07]" 
                     style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px); animation: techMove 4s linear infinite;">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-50"></div>
            </div>
        ` : '';

        return `
            <div class="relative p-8 rounded-2xl border ${borderClass} ${bgClass} transition-all duration-300 flex flex-col h-full group backdrop-blur-sm"
                 data-aos="fade-up" data-aos-delay="${isPopular ? '100' : '0'}">
                ${isPopular ? '<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg shadow-accent/20 z-20 whitespace-nowrap">MOST POPULAR</div>' : ''}
                
                ${techBg}

                <h3 class="text-2xl font-bold text-white mb-2 relative z-10">${data.name}</h3>
                <p class="text-gray-400 text-sm mb-6 min-h-[40px] relative z-10">${data.desc}</p>
                
                <div class="mb-6 relative z-10">
                    <span class="text-4xl font-bold text-white">${data.price}</span>
                    <span class="text-gray-500 text-sm ml-2">/ ${data.period}</span>
                    
                    <div class="mt-2 text-xs text-gray-400 bg-white/5 inline-block px-2 py-1 rounded border border-white/5">
                        ${t.future_label} <span class="line-through decoration-red-500 decoration-2 text-gray-500">${data.future_price}</span>
                    </div>
                </div>
                
                <ul class="space-y-4 mb-8 flex-1 relative z-10">
                    ${data.features.map(f => `
                        <li class="flex items-start gap-3 text-gray-300 text-sm">
                            <i class="fas fa-check text-accent mt-1"></i>
                            <span>${f}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <button onclick="window.selectPackage('${data.name}')" class="w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${btnClass} relative z-10">
                    ${data.btn}
                </button>
            </div>
        `;
    };

    return `
    <!-- Pricing Section with Highlighted "Launch" Background -->
    <section id="pricing" class="py-24 relative overflow-hidden border-y border-white/5 bg-[#050510]">
        <!-- High-Tech Grid Background -->
        <div class="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none"></div>
        
        <!-- Deep Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] pointer-events-none"></div>
        
        <!-- Central Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.15),transparent_70%)] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                    ${t.title} <span class="text-accent">.</span>
                </h2>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-6">${t.subtitle}</p>
                
                <!-- Launch Offer Badge -->
                <div class="inline-block bg-accent/10 border border-accent/30 rounded-full px-6 py-2 animate-pulse-slow mt-4">
                    <span class="text-accent font-bold text-sm md:text-base tracking-wide">
                        ${t.launch_offer}
                    </span>
                </div>
                <p class="text-xs text-gray-500 mt-2">${t.future_note}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${renderCard(t.essential)}
                ${renderCard(t.professional, true)}
                ${renderCard(t.enterprise)}
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
