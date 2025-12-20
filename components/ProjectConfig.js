export const ProjectConfig = (lang = 'de') => {
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
            step2: "Welche Extras?",
            step3: "Kontaktdaten",
            btn_next: "Weiter",
            btn_back: "Zurück",
            btn_send: "Anfrage senden",
            types: {
                website: "Webseite (Corporate / Landing Page)",
                seo: "SEO & Sichtbarkeit",
                ai: "AI & Automatisierung",
                content: "Foto / Video / Drohne"
            },
            features: {
                multilang: "Mehrsprachigkeit (DE/EN/...)",
                booking: "Buchungssystem",
                chatbot: "AI Chatbot",
                seo_setup: "SEO Grundoptimierung",
                blog: "Blog / News Bereich",
                cms: "Einfach selbst bearbeitbar",
                darkmode: "Premium Dark Mode",
                drone: "Drohnenaufnahmen"
            },
            form: {
                name: "Ihr Name",
                email: "Ihre E-Mail",
                phone: "Telefon (Optional)"
            }
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
                website: "Website (Corporate / Landing Page)",
                seo: "SEO & Visibility",
                ai: "AI & Automation",
                content: "Photo / Video / Drone"
            },
            features: {
                multilang: "Multi-language",
                booking: "Booking System",
                chatbot: "AI Chatbot",
                seo_setup: "Basic SEO Setup",
                blog: "Blog / News Section",
                cms: "Easy to Edit",
                darkmode: "Premium Dark Mode",
                drone: "Drone Shots"
            },
            form: {
                name: "Your Name",
                email: "Your Email",
                phone: "Phone (Optional)"
            }
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
                website: "Weboldal (Landing / Céges)",
                seo: "SEO & Láthatóság",
                ai: "AI & Automatizálás",
                content: "Fotó / Videó / Drón"
            },
            features: {
                multilang: "Többnyelvűség",
                booking: "Időpontfoglaló Rendszer",
                chatbot: "AI Chatbot",
                seo_setup: "SEO Alapbeállítás",
                blog: "Blog / Hírek modul",
                cms: "Könnyen szerkeszthető",
                darkmode: "Prémium Dark Mode",
                drone: "Drónfelvételek"
            },
            form: {
                name: "Az Ön neve",
                email: "Email címe",
                phone: "Telefonszám (Opcionális)"
            }
        }
    }[lang];

    return `
    <!-- MODAL (Hidden by default) -->
    <div id="project-config-modal" class="fixed inset-0 z-[100] hidden opacity-0 transition-opacity duration-300">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/95 backdrop-blur-md" onclick="closeCalculator()"></div>
        
        <!-- Modal Content -->
        <div class="relative w-full h-full md:h-auto md:max-w-4xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-[#0a0a0a] border border-white/10 md:rounded-3xl shadow-2xl p-6 md:p-12 overflow-y-auto transform scale-95 transition-transform duration-300" id="project-config-content">
            
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
                <div class="flex items-center justify-between mb-10 px-4 relative">
                    <div class="absolute top-1/2 left-0 w-full h-1 bg-white/5 -z-10 rounded-full"></div>
                    <div id="uic-progress-track" class="absolute top-1/2 left-0 h-1 bg-accent -z-10 rounded-full transition-all duration-500" style="width: 0%"></div>
                    
                    <div class="uic-step active flex flex-col items-center gap-2 cursor-pointer" onclick="goToStep(0)">
                        <div class="w-8 h-8 rounded-full bg-accent text-black font-bold flex items-center justify-center shadow-glow transition-all duration-300">1</div>
                        <span class="text-[10px] md:text-xs text-accent font-medium uppercase hidden md:block">${t.step1}</span>
                    </div>
                    <div class="uic-step flex flex-col items-center gap-2 cursor-pointer opacity-40" onclick="goToStep(1)">
                        <div class="w-8 h-8 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10 transition-all duration-300">2</div>
                        <span class="text-[10px] md:text-xs text-gray-400 font-medium uppercase hidden md:block">${t.step2}</span>
                    </div>
                    <div class="uic-step flex flex-col items-center gap-2 cursor-pointer opacity-40" onclick="goToStep(2)">
                        <div class="w-8 h-8 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10 transition-all duration-300">3</div>
                        <span class="text-[10px] md:text-xs text-gray-400 font-medium uppercase hidden md:block">${t.step3}</span>
                    </div>
                </div>

                <!-- Steps Content -->
                <div class="min-h-[350px]">
                    <!-- Step 1: Types -->
                    <div id="uic-step-0" class="uic-view animate-fade-in block">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${Object.entries(t.types).map(([key, label]) => `
                                <div onclick="toggleSelection('type', '${key}')" 
                                     class="uic-card-type p-6 rounded-xl border border-white/10 bg-white/5 hover:border-accent/50 cursor-pointer transition-all duration-300 flex items-center gap-4 hover:shadow-lg"
                                     data-value="${key}">
                                    <div class="w-6 h-6 rounded-full border-2 border-white/20 flex-shrink-0 flex items-center justify-center">
                                        <div class="w-3 h-3 rounded-full bg-accent opacity-0 transition-opacity"></div>
                                    </div>
                                    <span class="text-white font-medium text-sm md:text-base">${label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 2: Features -->
                    <div id="uic-step-1" class="uic-view hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${Object.entries(t.features).map(([key, label]) => `
                                <div onclick="toggleSelection('feature', '${key}')" 
                                     class="uic-card-feat p-5 rounded-xl border border-white/10 bg-white/5 hover:border-accent/50 cursor-pointer transition-all duration-300 flex items-center gap-4 hover:bg-white/10"
                                     data-value="${key}">
                                    <div class="w-5 h-5 rounded border border-white/30 flex-shrink-0 flex items-center justify-center">
                                        <i class="fas fa-check text-xs text-black opacity-0 transition-opacity"></i>
                                    </div>
                                    <span class="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">${label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 3: Contact -->
                    <div id="uic-step-2" class="uic-view hidden">
                         <div class="max-w-md mx-auto space-y-4">
                            <div>
                                <label class="block text-sm text-gray-400 mb-2">${t.form.name}</label>
                                <input type="text" id="uic-name" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none">
                            </div>
                            <div>
                                <label class="block text-sm text-gray-400 mb-2">${t.form.email}</label>
                                <input type="email" id="uic-email" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none">
                            </div>
                            <div>
                                <label class="block text-sm text-gray-400 mb-2">${t.form.phone}</label>
                                <input type="tel" id="uic-phone" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none">
                            </div>
                            <div class="p-4 bg-accent/10 rounded-lg border border-accent/20 mt-4">
                                <p class="text-sm text-accent text-center" id="uic-summary-text">Summary...</p>
                            </div>
                         </div>
                    </div>
                </div>

                <!-- Navigation -->
                <div class="flex justify-between mt-8 pt-8 border-t border-white/10">
                    <button id="uic-btn-back" onclick="changeStep(-1)" class="px-6 py-3 rounded-lg text-gray-400 hover:text-white font-medium transition-colors hidden">${t.btn_back}</button>
                    <button id="uic-btn-next" onclick="changeStep(1)" class="ml-auto px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-lg transform hover:-translate-y-1">${t.btn_next}</button>
                    <button id="uic-btn-send" onclick="submitConfig()" class="ml-auto px-8 py-3 rounded-lg bg-accent text-white font-bold hover:bg-accent-hover transition-all shadow-glow hidden">${t.btn_send}</button>
                </div>
            </div>
        </div>
    </div>
    `;
};
