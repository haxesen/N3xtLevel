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

    const renderCard = (data, theme = 'bronze') => {
        // Theme Configurations
        const themes = {
            bronze: {
                border: 'border-orange-700/50 hover:border-orange-500',
                bg: 'bg-[#0f0a05]',
                btn: 'bg-gradient-to-r from-orange-700 to-orange-600 text-white hover:from-orange-600 hover:to-orange-500 shadow-[0_0_15px_rgba(194,65,12,0.3)]',
                icon: 'text-orange-600',
                price: 'text-orange-500 drop-shadow-[0_0_8px_rgba(234,88,12,0.3)]',
                badge: null,
                plasma1: 'bg-orange-700/20',
                plasma2: 'bg-red-900/10'
            },
            gold: {
                border: 'border-amber-400 shadow-[0_0_50px_rgba(251,191,36,0.2)] scale-105 z-10',
                bg: 'bg-[#12120e]',
                btn: 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-300 hover:to-yellow-400 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]',
                icon: 'text-amber-400',
                price: 'text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]',
                badge: 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black border-yellow-200',
                plasma1: 'bg-amber-500/20',
                plasma2: 'bg-yellow-200/10'
            },
            silver: {
                border: 'border-slate-300/40 hover:border-slate-100', // Platinum look
                bg: 'bg-[#0a0c10]',
                btn: 'bg-gradient-to-r from-slate-300 to-slate-100 text-black hover:from-white hover:to-slate-200 shadow-[0_0_15px_rgba(226,232,240,0.3)]',
                icon: 'text-slate-300',
                price: 'text-slate-200 drop-shadow-[0_0_8px_rgba(226,232,240,0.3)]',
                badge: null,
                plasma1: 'bg-slate-400/20',
                plasma2: 'bg-blue-300/5'
            }
        };

        const t = themes[theme] || themes.bronze;

        // Dynamic Tech Background (Now for ALL cards with specific colors)
        const techBg = `
            <style>
                @keyframes blobFloat-${theme} { 
                    0%, 100% { transform: translate(0, 0) scale(1); } 
                    33% { transform: translate(30px, -30px) scale(1.1); } 
                    66% { transform: translate(-20px, 20px) scale(0.9); } 
                }
            </style>
            <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none -z-10">
                <!-- Plasma Effect -->
                <div class="absolute top-0 right-0 w-64 h-64 ${t.plasma1} rounded-full blur-[80px] opacity-40 animate-pulse-slow" style="animation-duration: 4s;"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 ${t.plasma2} rounded-full blur-[80px] opacity-40 animate-pulse-slow" style="animation-duration: 6s; animation-delay: 1s;"></div>
                
                <!-- Mesh -->
                <div class="absolute inset-[-50%] opacity-20"
                     style="background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%); 
                            animation: blobFloat-${theme} 10s ease-in-out infinite;">
                </div>
            </div>
        `;

        return `
            <div class="relative p-8 rounded-2xl border ${t.border} ${t.bg} transition-all duration-300 flex flex-col h-full group backdrop-blur-sm"
                 data-aos="fade-up" data-aos-delay="${theme === 'gold' ? '100' : '0'}">
                ${t.badge ? `<div class="absolute -top-4 left-1/2 -translate-x-1/2 ${t.badge} font-black tracking-wider px-6 py-1.5 rounded-full text-xs shadow-lg z-20 whitespace-nowrap uppercase border">Most Popular</div>` : ''}
                
                ${techBg}

                <h3 class="text-2xl font-bold text-white mb-2 relative z-10">${data.name}</h3>
                <p class="text-gray-400 text-sm mb-6 min-h-[40px] relative z-10">${data.desc}</p>
                
                <div class="mb-6 relative z-10">
                    <span class="text-4xl font-bold ${t.price}">${data.price}</span>
                    <span class="text-gray-500 text-sm ml-2">/ ${data.period}</span>
                    
                    <div class="mt-2 text-xs text-gray-400 bg-white/5 inline-block px-2 py-1 rounded border border-white/5">
                        ${data.future_label || 'Normal:'} <span class="line-through decoration-red-500 decoration-2 text-gray-500">${data.future_price}</span>
                    </div>
                </div>
                
                <ul class="space-y-4 mb-8 flex-1 relative z-10">
                    ${data.features.map(f => `
                        <li class="flex items-start gap-3 text-gray-300 text-sm">
                            <i class="fas fa-check ${t.icon} mt-1 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]"></i>
                            <span>${f}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <button onclick="window.selectPackage('${data.name}')" class="w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${t.btn} relative z-10 transform hover:scale-[1.02]">
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
                ${renderCard(t.essential, 'bronze')}
                ${renderCard(t.professional, 'gold')}
                ${renderCard(t.enterprise, 'silver')}
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
                    <button onclick="window.openCalculator()" class="px-10 py-4 bg-white text-black border border-white hover:bg-gray-200 hover:border-gray-200 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center gap-2 mx-auto transform hover:-translate-y-1">
                        <span>${t.cta.btn}</span>
                        <i class="fas fa-calculator text-accent"></i>
                    </button>
                </div>
            </div>

        </div>
    </section>
    `;
};
