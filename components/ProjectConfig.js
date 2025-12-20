export const ProjectConfig = (lang = 'de') => {

    // Icon Mappings
    const icons = {
        types: {
            website: "fa-laptop-code",
            upgrade: "fa-screwdriver-wrench",
            content: "fa-camera-retro"
        },
        features: {
            multilang: "fa-globe",
            booking: "fa-calendar-check",
            chatbot: "fa-comments",
            seo_setup: "fa-magnifying-glass",
            blog: "fa-newspaper",
            cms: "fa-pen-to-square",
            darkmode: "fa-moon",
            drone: "fa-helicopter"
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
                website: { title: "Neues Web-Projekt", desc: "Corporate Website, Landing Page oder Portfolio." },
                upgrade: { title: "Website Optimierung", desc: "Relaunch, Erweiterung oder Modernisierung bestehender Seiten." },
                content: { title: "Content Creation", desc: "Foto, Video, Drohnenaufnahmen & Texte." }
            },
            features: {
                multilang: "Mehrsprachigkeit",
                booking: "Buchungssystem",
                chatbot: "AI Chatbot Integration",
                seo_setup: "SEO Basis-Setup",
                blog: "Blog / News Bereich",
                cms: "CMS (Selbstverwaltung)",
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
                website: { title: "New Web Project", desc: "Corporate Website, Landing Page or Portfolio." },
                upgrade: { title: "Website Upgrade", desc: "Relaunch, Extension or Modernization." },
                content: { title: "Content Creation", desc: "Photo, Video, Drone Shots & Copywriting." }
            },
            features: {
                multilang: "Multi-language",
                booking: "Booking System",
                chatbot: "AI Chatbot",
                seo_setup: "Basic SEO Setup",
                blog: "Blog / News Section",
                cms: "Easy to Edit (CMS)",
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
                website: { title: "Új Weboldal", desc: "Céges weboldal, Landing Page vagy Portfólió." },
                upgrade: { title: "Meglévő Weboldal fejlesztése", desc: "Relaunch, Modernizálás vagy Bővítés." },
                content: { title: "Tartalomgyártás", desc: "Fotó, Videó, Drónfelvételek & Szövegírás." }
            },
            features: {
                multilang: "Többnyelvűség",
                booking: "Időpontfoglaló",
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
        <div class="relative w-full h-full md:h-auto md:max-w-4xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-[#0a0a0a] border border-accent md:rounded-3xl shadow-glow p-6 md:p-12 overflow-y-auto transform scale-95 transition-transform duration-300" id="project-config-content">
            
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
                            ${Object.entries(t.types).map(([key, data]) => `
                                <div onclick="toggleSelection('type', '${key}')" 
                                     class="uic-card-type p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-accent hover:bg-white/10 cursor-pointer transition-all duration-300 flex items-start gap-4 hover:shadow-glow group h-full"
                                     data-value="${key}">
                                    
                                    <div class="w-12 h-12 rounded-xl bg-accent/10 text-accent flex-shrink-0 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300 border border-accent/20">
                                        <i class="fas ${icons.types[key]} text-xl"></i>
                                    </div>
                                    
                                    <div class="flex-1">
                                        <div class="flex justify-between items-start">
                                            <h4 class="text-white font-bold text-lg mb-1 group-hover:text-accent transition-colors">${data.title}</h4>
                                            <div class="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center ml-2">
                                                 <div class="w-2.5 h-2.5 rounded-full bg-accent opacity-0 transition-opacity uic-check-circle"></div>
                                            </div>
                                        </div>
                                        <p class="text-gray-400 text-sm leading-relaxed">${data.desc}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 2: Features -->
                    <div id="uic-step-1" class="uic-view hidden">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            ${Object.entries(t.features).map(([key, label]) => `
                                <div onclick="toggleSelection('feature', '${key}')" 
                                     class="uic-card-feat p-4 rounded-xl border border-white/10 bg-white/5 hover:border-accent/40 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 hover:bg-white/10 group h-32"
                                     data-value="${key}">
                                    
                                     <div class="relative">
                                        <div class="text-3xl text-gray-500 group-hover:text-accent transition-colors duration-300">
                                            <i class="fas ${icons.features[key]}"></i>
                                        </div>
                                        <div class="absolute -top-2 -right-3 w-5 h-5 bg-accent rounded-full text-black text-xs flex items-center justify-center opacity-0 transition-opacity uic-feat-check shadow-lg font-bold">
                                            <i class="fas fa-check"></i>
                                        </div>
                                     </div>

                                    <span class="text-gray-300 group-hover:text-white transition-colors text-sm font-medium leading-tight">${label}</span>
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

                            <div class="p-6 bg-accent/5 rounded-xl border border-accent/20 mt-6 relative overflow-hidden">
                                <div class="absolute top-0 right-0 p-4 opacity-10 text-4xl text-accent"><i class="fas fa-file-invoice"></i></div>
                                <h4 class="text-accent font-bold mb-2 text-sm uppercase tracking-wider">Zusammenfassung</h4>
                                <p class="text-sm text-gray-300 leading-relaxed" id="uic-summary-text">Wählen Sie Ihre Optionen...</p>
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
