export const ProjectConfig = (lang = 'de') => {


    const icons = {
        types: {
            landing: "fa-rocket",
            website: "fa-laptop-code",
            ecommerce: "fa-cart-shopping"
        },
        features: {
            content_ai: "fa-robot",
            seo_pro: "fa-magnifying-glass-chart",
            chat_sales: "fa-comments-dollar",
            automation: "fa-gears",
            blog: "fa-newspaper",
            booking: "fa-calendar-check",
            multilang: "fa-globe",
            design: "fa-palette",
            maintenance: "fa-screwdriver-wrench"
        }
    };

    const t = {
        de: {
            // Teaser
            teaser_title: "Starten Sie Ihr Projekt",
            teaser_text: "Nutzen Sie unseren interaktiven Konfigurator, um Ihr individuelles Angebot zu erstellen. Schnell, einfach & unverbindlich.",
            btn_start: "Jetzt Konfigurierer starten",

            // Wizard
            title: "Projekt Konfigurator",
            subtitle: "Wählen Sie Ihre Wunsch-Features.",
            step1: "Was benötigen Sie?",
            step2: "Gewünschte Extras & Funktionen",
            step3: "Ihre Kontaktdaten",
            btn_next: "Weiter",
            btn_back: "Zurück",
            btn_send: "Anfrage senden",
            types: {
                landing: { title: "Landing Page", desc: "High-Performance One-Pager. (ab €990)" },
                website: { title: "Corporate Website", desc: "Mehrseitiger Auftritt mit CMS. (ab €1.790)" },
                ecommerce: { title: "E-Commerce", desc: "Webshop mit Payment-System. (ab €3.990)" }
            },
            features: {
                content_ai: { title: "AI Content Boost", desc: "Texte & Bilder fixfertig generiert. (+€150)" },
                seo_pro: { title: "SEO & Analytics", desc: "Top-Rankings & Conversion-Tracking. (+€250)" },
                chat_sales: { title: "Sales Chatbot", desc: "Verkauft 24/7 automatisch. (+€300)" },
                automation: { title: "Workflows", desc: "Zapier, Make & Auto-Emails. (+€250)" },
                blog: { title: "Blog / News", desc: "Content-Modul für Reichweite. (+€200)" },
                booking: { title: "Buchungssystem", desc: "Termine automatisch verwalten. (+€200)" },
                multilang: { title: "Mehrsprachigkeit", desc: "International skalieren. (+€300)" },
                design: { title: "Premium Motion", desc: "High-End Animationen & Design. (+€200)" },
                maintenance: { title: "Monatliche Wartung", desc: "Systempflege & CRM Support. (+€79/Mo)" }
            },
            form: {
                name: "Ihr Name",
                email: "Ihre E-Mail",
                phone: "Telefon (Optional)"
            },
            summary_title: "Zusammenfassung",
            summary_placeholder: "Wählen Sie Ihre Optionen..."
        },
        en: {
            teaser_title: "Start Your Project",
            teaser_text: "Use our interactive configurator to create your individual offer. Fast, easy & non-binding.",
            btn_start: "Start Configurator Now",

            title: "Project Configurator",
            subtitle: "Select your desired features.",
            step1: "What do you need?",
            step2: "Visual & Functional Extras",
            step3: "Contact Details",
            btn_next: "Next",
            btn_back: "Back",
            btn_send: "Send Request",
            types: {
                landing: { title: "Landing Page", desc: "High-Performance One-Pager. (from €990)" },
                website: { title: "Corporate Website", desc: "Multi-page site with CMS. (from €1,790)" },
                ecommerce: { title: "E-Commerce", desc: "Webshop with Payment System. (from €3,990)" }
            },
            features: {
                content_ai: { title: "AI Content Boost", desc: "Text & Images generated. (+€150)" },
                seo_pro: { title: "SEO & Analytics", desc: "Top Rankings & Tracking. (+€250)" },
                chat_sales: { title: "Sales Chatbot", desc: "Sells 24/7 automatically. (+€300)" },
                automation: { title: "Workflows", desc: "Zapier, Make & Auto-Emails. (+€250)" },
                blog: { title: "Blog / News", desc: "Content module for reach. (+€200)" },
                booking: { title: "Booking System", desc: "Manage appointments auto. (+€200)" },
                multilang: { title: "Multi-language", desc: "Scale internationally. (+€300)" },
                design: { title: "Premium Motion", desc: "High-end animations. (+€200)" },
                maintenance: { title: "Monthly Maintenance", desc: "System Health & CRM. (+€79/mo)" }
            },
            form: {
                name: "Your Name",
                email: "Your Email",
                phone: "Phone (Optional)"
            },
            summary_title: "Summary",
            summary_placeholder: "Select your options..."
        },
        hu: {
            teaser_title: "Indítsa el Projektjét",
            teaser_text: "Használja interaktív konfigurátorunkat egyedi árajánlat kéréséhez. Gyors, egyszerű és kötelezettségmentes.",
            btn_start: "Konfigurátor indítása",

            title: "Projekt Konfigurátor",
            subtitle: "Válassza ki a kívánt funkciókat.",
            step1: "Mire van szüksége?",
            step2: "Extrák és Funkciók",
            step3: "Elérhetőség",
            btn_next: "Tovább",
            btn_back: "Vissza",
            btn_send: "Ajánlatkérés Küldése",
            types: {
                landing: { title: "Landing Page", desc: "High-Performance One-Pager. (kb. €990)" },
                website: { title: "Céges Weboldal", desc: "Többoldalas szájt CMS-sel. (kb. €1.790)" },
                ecommerce: { title: "E-Commerce", desc: "Webshop fizetési rendszerrel. (kb. €3.990)" }
            },
            features: {
                content_ai: { title: "AI Tartalom", desc: "Szövegírás & Képek. (+€150)" },
                seo_pro: { title: "SEO & Analytics", desc: "Top helyezések & Mérés. (+€250)" },
                chat_sales: { title: "Sales Chatbot", desc: "0-24 automata eladás. (+€300)" },
                automation: { title: "Automatizálás", desc: "Zapier, Make & E-mailek. (+€250)" },
                blog: { title: "Blog / Hírek", desc: "Tartalommodul a látogatókért. (+€200)" },
                booking: { title: "Időpontfoglaló", desc: "Automata naptárkezelés. (+€200)" },
                multilang: { title: "Többnyelvűség", desc: "Nemzetközi piac. (+€300)" },
                design: { title: "Prémium Motion", desc: "High-End animációk. (+€200)" },
                maintenance: { title: "Havi Karbantartás", desc: "Rendszerfelügyelet & CRM. (+€79/hó)" }
            },
            form: {
                name: "Az Ön neve",
                email: "Email címe",
                phone: "Telefonszám (Nem kötelező)"
            },
            summary_title: "Összegzés",
            summary_placeholder: "Válasszon opciókat..."
        }
    }[lang];

    return `
    <!-- MODAL (Hidden by default) -->
    <div id="project-config-modal" class="fixed inset-0 z-[100] hidden opacity-0 transition-opacity duration-300">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/95 backdrop-blur-md" onclick="closeCalculator()"></div>
        
        <!-- Modal Content -->
        <div class="relative w-full h-full md:h-auto md:max-w-4xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-gradient-to-br from-[#0b0512] to-[#020202] border border-accent/60 md:rounded-3xl shadow-[0_0_60px_rgba(255,69,0,0.15)] p-6 md:p-12 overflow-y-auto transform scale-95 transition-transform duration-300" id="project-config-content">
            
            <button onclick="closeCalculator()" class="absolute top-6 right-6 text-gray-400 hover:text-white transition-all z-20 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md shadow-lg group">
                <i class="fas fa-times text-lg group-hover:rotate-90 transition-transform duration-300"></i>
            </button>

            <div class="text-center mb-10">
                <h3 class="text-3xl font-bold text-white">${t.title}</h3>
                <p class="text-gray-400 mt-2">${t.subtitle}</p>
            </div>

            <!-- Wizard -->
            <div class="relative overflow-hidden">
                <!-- Progress Bar -->
                <div class="flex items-center justify-between mb-12 px-4 relative max-w-2xl mx-auto">
                    <div class="absolute top-1/2 left-0 w-full h-1 bg-white/5 -z-10 rounded-full"></div>
                    <div id="uic-progress-track" class="absolute top-1/2 left-0 h-1 bg-accent -z-10 rounded-full transition-all duration-500" style="width: 0%"></div>
                    
                    <div class="uic-step active flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-300" onclick="goToStep(0)">
                        <div class="w-10 h-10 rounded-full bg-accent text-black font-bold flex items-center justify-center shadow-glow transition-all duration-300"><i class="fas fa-list-check"></i></div>
                        <span class="text-[10px] md:text-sm text-accent font-medium uppercase hidden md:block mt-1">${t.step1}</span>
                    </div>
                    <div class="uic-step flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300" onclick="goToStep(1)">
                        <div class="w-10 h-10 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10 transition-all duration-300"><i class="fas fa-puzzle-piece"></i></div>
                        <span class="text-[10px] md:text-sm text-gray-400 font-medium uppercase hidden md:block mt-1">${t.step2}</span>
                    </div>
                    <div class="uic-step flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300" onclick="goToStep(2)">
                        <div class="w-10 h-10 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10 transition-all duration-300"><i class="fas fa-paper-plane"></i></div>
                        <span class="text-[10px] md:text-sm text-gray-400 font-medium uppercase hidden md:block mt-1">${t.step3}</span>
                    </div>
                </div>

                <!-- Steps Content -->
                <div class="min-h-[400px]">
                    <!-- Step 1: Types -->
                    <div id="uic-step-0" class="uic-view animate-fade-in block">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${Object.entries(t.types).map(([key, data]) => {
        const theme = {
            landing: { border: 'border-blue-500/20', bg: 'bg-gradient-to-br from-blue-500/5 to-transparent', hover: 'hover:border-blue-500', shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]', icon: 'text-blue-400 bg-blue-500/10 group-hover:bg-blue-500', check: 'bg-blue-500' },
            website: { border: 'border-purple-500/20', bg: 'bg-gradient-to-br from-purple-500/5 to-transparent', hover: 'hover:border-purple-500', shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]', icon: 'text-purple-400 bg-purple-500/10 group-hover:bg-purple-500', check: 'bg-purple-500' },
            ecommerce: { border: 'border-orange-500/20', bg: 'bg-gradient-to-br from-orange-500/5 to-transparent', hover: 'hover:border-orange-500', shadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]', icon: 'text-orange-400 bg-orange-500/10 group-hover:bg-orange-500', check: 'bg-orange-500' }
        }[key] || { border: 'border-white/10', bg: 'bg-white/5', hover: 'hover:border-accent', shadow: 'hover:shadow-glow', icon: 'text-accent bg-accent/10 group-hover:bg-accent', check: 'bg-accent' };

        return `
                                <div onclick="toggleSelection('type', '${key}')" 
                                     class="uic-card-type p-6 rounded-2xl border ${theme.border} ${theme.bg} ${theme.hover} cursor-pointer transition-all duration-500 flex items-start gap-4 ${theme.shadow} group h-full relative overflow-hidden"
                                     data-value="${key}">
                                    
                                    <!-- Background Glow -->
                                    <div class="absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40" 
                                         style="background-color: ${key === 'landing' ? '#3b82f6' : (key === 'website' ? '#a855f7' : '#f97316')}"></div>

                                    <div class="w-12 h-12 rounded-xl ${theme.icon} text-xl flex-shrink-0 flex items-center justify-center group-hover:text-black transition-all duration-300 border border-white/5 relative z-10">
                                        <i class="fas ${icons.types[key]}"></i>
                                    </div>
                                    
                                    <div class="flex-1 relative z-10">
                                        <div class="flex justify-between items-start">
                                            <h4 class="text-white font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">${data.title}</h4>
                                            <div class="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center ml-2">
                                                 <div class="w-2.5 h-2.5 rounded-full opacity-0 transition-opacity uic-check-circle ${theme.check}"></div>
                                            </div>
                                        </div>
                                        <p class="text-gray-400 text-sm leading-relaxed">${data.desc}</p>
                                    </div>
                                </div>
                            `}).join('')}
                        </div>
                    </div>

                    <!-- Step 2: Features -->
                    <div id="uic-step-1" class="uic-view hidden">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            ${Object.entries(t.features).map(([key, data]) => `
                                <div onclick="toggleSelection('feature', '${key}')" 
                                     class="uic-card-feat p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:border-accent/30 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 group h-40 relative overflow-hidden"
                                     data-value="${key}">
                                    
                                     <!-- Hover Glow -->
                                     <div class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                     <div class="relative mb-1 z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                        <div class="text-2xl text-gray-400 group-hover:text-accent transition-colors duration-300">
                                            <i class="fas ${icons.features[key]}"></i>
                                        </div>
                                        <div class="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full text-black text-xs flex items-center justify-center opacity-0 transition-opacity uic-feat-check shadow-lg font-bold z-20">
                                            <i class="fas fa-check"></i>
                                        </div>
                                     </div>

                                    <span class="text-white font-bold text-sm leading-tight relative z-10">${data.title}</span>
                                    <span class="text-gray-400 text-xs leading-tight opacity-70 group-hover:opacity-100 transition-opacity relative z-10">${data.desc}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 3: Contact -->
                    <div id="uic-step-2" class="uic-view hidden">
                         <div class="max-w-md mx-auto space-y-5">
                            <div class="group">
                                <label class="block text-sm text-gray-400 mb-2 group-focus-within:text-accent transition-colors">${t.form.name}</label>
                                <div class="relative">
                                    <input type="text" id="uic-name" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 text-white focus:border-accent outline-none transition-all focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,69,0,0.1)]">
                                    <i class="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors"></i>
                                </div>
                            </div>
                            
                            <div class="group">
                                <label class="block text-sm text-gray-400 mb-2 group-focus-within:text-accent transition-colors">${t.form.email}</label>
                                <div class="relative">
                                    <input type="email" id="uic-email" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 text-white focus:border-accent outline-none transition-all focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,69,0,0.1)]">
                                    <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors"></i>
                                </div>
                            </div>
                            
                            <div class="group">
                                <label class="block text-sm text-gray-400 mb-2 group-focus-within:text-accent transition-colors">${t.form.phone}</label>
                                <div class="relative">
                                    <input type="tel" id="uic-phone" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 text-white focus:border-accent outline-none transition-all focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,69,0,0.1)]">
                                    <i class="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors"></i>
                                </div>
                            </div>

                            <div class="p-6 bg-gradient-to-br from-[#1e1b4b] via-[#0f0720] to-black rounded-xl border border-indigo-500/30 mt-6 relative overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-md">
                                <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl text-indigo-500 rotate-12 mix-blend-overlay"><i class="fas fa-file-invoice"></i></div>
                                <h4 class="text-indigo-200 font-bold mb-4 text-xs uppercase tracking-[0.2em] flex items-center gap-2 border-b border-white/5 pb-3">
                                    <i class="fas fa-calculator"></i> ${t.summary_title}
                                </h4>
                                <div id="uic-summary-text" class="relative z-10">
                                    <p class="text-base text-gray-300 font-medium">${t.summary_placeholder}</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <!-- Navigation -->
                <div class="flex justify-between items-center mt-8 pt-8 border-t border-white/10">
                    <button id="uic-btn-back" onclick="changeStep(-1)" class="px-6 py-3 rounded-xl text-gray-400 hover:text-white font-medium transition-colors hidden flex items-center gap-2 group">
                        <i class="fas fa-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></i> ${t.btn_back}
                    </button>
                    
                    <button id="uic-btn-next" onclick="changeStep(1)" class="ml-auto px-10 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-lg transform hover:-translate-y-1 flex items-center gap-3">
                        ${t.btn_next} <i class="fas fa-arrow-right"></i>
                    </button>
                    
                    <button id="uic-btn-send" onclick="submitConfig()" class="ml-auto px-10 py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent-hover transition-all shadow-glow hover:shadow-glow-intense transform hover:-translate-y-1 hidden flex items-center gap-3">
                        <i class="fas fa-paper-plane"></i> ${t.btn_send}
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
};
