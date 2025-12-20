export const ProjectConfig = (lang = 'de') => {
    const t = {
        de: {
            title: "Projekt Kalkulator",
            subtitle: "Wählen Sie Ihre Wunsch-Features und erhalten Sie ein unverbindliches Angebot.",
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
            },
            success: "Vielen Dank! Wir erstellen Ihr Angebot."
        },
        en: {
            title: "Project Calculator",
            subtitle: "Select your desired features and get a non-binding offer.",
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
            },
            success: "Thank you! We are preparing your offer."
        },
        hu: {
            title: "Projekt Kalkulátor",
            subtitle: "Válassza ki a kívánt funkciókat, és kérjen kötelezettségmentes ajánlatot.",
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
            },
            success: "Köszönjük! Hamarosan küldjük az ajánlatot."
        }
    }[lang];

    // IDs used for JS logic
    return `
    <section id="project-config" class="py-24 bg-black relative border-t border-white/5 overflow-hidden">
        <!-- Background Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16 reveal">
                <span class="text-accent font-bold tracking-widest uppercase text-sm">Pre-Check</span>
                <h2 class="text-3xl md:text-5xl font-bold mt-2 text-white">${t.title}</h2>
                <p class="text-gray-400 mt-4 max-w-2xl mx-auto">${t.subtitle}</p>
            </div>

            <!-- Wizard Container -->
            <div class="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                <!-- Progress Bar -->
                <div class="flex items-center justify-between mb-12 px-4 relative">
                    <div class="absolute top-1/2 left-0 w-full h-1 bg-white/5 -z-10 rounded-full"></div>
                    <div id="uic-progress-track" class="absolute top-1/2 left-0 h-1 bg-accent -z-10 rounded-full transition-all duration-500" style="width: 0%"></div>
                    
                    <div class="uic-step active flex flex-col items-center gap-2 cursor-pointer" onclick="goToStep(0)">
                        <div class="w-10 h-10 rounded-full bg-accent text-black font-bold flex items-center justify-center shadow-glow transition-all duration-300">1</div>
                        <span class="text-xs text-accent font-medium uppercase hidden md:block">${t.step1}</span>
                    </div>
                    <div class="uic-step flex flex-col items-center gap-2 cursor-pointer opacity-40" onclick="goToStep(1)">
                        <div class="w-10 h-10 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10 transition-all duration-300">2</div>
                        <span class="text-xs text-gray-400 font-medium uppercase hidden md:block">${t.step2}</span>
                    </div>
                    <div class="uic-step flex flex-col items-center gap-2 cursor-pointer opacity-40" onclick="goToStep(2)">
                        <div class="w-10 h-10 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10 transition-all duration-300">3</div>
                        <span class="text-xs text-gray-400 font-medium uppercase hidden md:block">${t.step3}</span>
                    </div>
                </div>

                <!-- Steps Content -->
                <div id="uic-content-area" class="min-h-[300px]">
                    <!-- Step 1: Types -->
                    <div id="uic-step-0" class="uic-view animate-fade-in block">
                        <h3 class="text-2xl font-bold text-white mb-8 text-center">${t.step1}</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${Object.entries(t.types).map(([key, label]) => `
                                <div onclick="toggleSelection('type', '${key}')" 
                                     class="uic-card-type p-6 rounded-xl border border-white/10 bg-white/5 hover:border-accent/50 cursor-pointer transition-all duration-300 flex items-center gap-4 hover:shadow-lg"
                                     data-value="${key}">
                                    <div class="w-6 h-6 rounded-full border-2 border-white/20 flex-shrink-0 flex items-center justify-center">
                                        <div class="w-3 h-3 rounded-full bg-accent opacity-0 transition-opacity"></div>
                                    </div>
                                    <span class="text-white font-medium text-lg">${label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 2: Features -->
                    <div id="uic-step-1" class="uic-view hidden">
                        <h3 class="text-2xl font-bold text-white mb-8 text-center">${t.step2}</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${Object.entries(t.features).map(([key, label]) => `
                                <div onclick="toggleSelection('feature', '${key}')" 
                                     class="uic-card-feat p-5 rounded-xl border border-white/10 bg-white/5 hover:border-accent/50 cursor-pointer transition-all duration-300 flex items-center gap-4 hover:bg-white/10"
                                     data-value="${key}">
                                    <div class="w-5 h-5 rounded border border-white/30 flex-shrink-0 flex items-center justify-center">
                                        <i class="fas fa-check text-xs text-black opacity-0 transition-opacity"></i>
                                    </div>
                                    <span class="text-gray-300 group-hover:text-white transition-colors">${label}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 3: Contact Form -->
                    <div id="uic-step-2" class="uic-view hidden">
                         <h3 class="text-2xl font-bold text-white mb-8 text-center">${t.step3}</h3>
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
                <div class="flex justify-between mt-12 pt-8 border-t border-white/10">
                    <button id="uic-btn-back" onclick="changeStep(-1)" class="px-6 py-3 rounded-lg text-gray-400 hover:text-white font-medium transition-colors hidden">${t.btn_back}</button>
                    <button id="uic-btn-next" onclick="changeStep(1)" class="ml-auto px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-lg transform hover:-translate-y-1">${t.btn_next}</button>
                    <button id="uic-btn-send" onclick="submitConfig()" class="ml-auto px-8 py-3 rounded-lg bg-accent text-white font-bold hover:bg-accent-hover transition-all shadow-glow hidden">${t.btn_send}</button>
                </div>

            </div>
        </div>

        <script>
            // Logic injected via main.js or here mostly for reference
        </script>
    </section>
    `;
};
