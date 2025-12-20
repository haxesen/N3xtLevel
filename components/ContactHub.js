export const ContactHub = (lang = 'de') => {
    const t = {
        de: {
            title: "Starten Sie Ihre Reise",
            subtitle: "Wählen Sie Ihren bevorzugten Weg zu uns.",

            card_calc: {
                title: "Projekt Kalkulator",
                desc: "Erhalten Sie sofort eine unverbindliche Kostenschätzung für Ihr Projekt.",
                btn: "Jetzt konfigurieren"
            },
            card_book: {
                title: "Termin buchen",
                desc: "Lassen Sie uns persönlich sprechen. Kostenloses 30-min Erstgespräch.",
                btn: "Termin wählen"
            },
            card_msg: {
                title: "Nachricht senden",
                desc: "Sie haben eine spezifische Frage? Schreiben Sie uns direkt.",
                btn: "E-Mail schreiben"
            }
        },
        en: {
            title: "Start Your Journey",
            subtitle: "Choose your preferred way to connect.",

            card_calc: {
                title: "Project Configurator",
                desc: "Get an instant non-binding cost estimate for your project.",
                btn: "Configure Now"
            },
            card_book: {
                title: "Book Consultation",
                desc: "Let's talk personally. Free 30-min strategy call.",
                btn: "Select Date"
            },
            card_msg: {
                title: "Send Message",
                desc: "Have a specific question? Write to us directly.",
                btn: "Write Email"
            }
        },
        hu: {
            title: "Kezdje el Velünk",
            subtitle: "Válassza ki az Önnek legmegfelelőbb kapcsolódási módot.",

            card_calc: {
                title: "Projekt Kalkulátor",
                desc: "Kérjen azonnali, kötelezettségmentes becslést projektjére.",
                btn: "Konfigurálás"
            },
            card_book: {
                title: "Időpontfoglalás",
                desc: "Beszéljünk személyesen. Ingyenes 30 perces konzultáció.",
                btn: "Időpont választása"
            },
            card_msg: {
                title: "Üzenet küldése",
                desc: "Konkrét kérdése van? Írjon nekünk közvetlenül.",
                btn: "Email írása"
            }
        }
    }[lang];

    return `
    <section id="contact-hub" class="py-24 bg-black relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center mb-16 reveal">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">${t.title}</h2>
                <p class="text-gray-400 text-lg">${t.subtitle}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                
                <!-- Card 1: Calculator -->
                <div class="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col items-center text-center">
                    <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-accent text-3xl shadow-glow group-hover:scale-110 transition-transform">
                        <i class="fas fa-calculator"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">${t.card_calc.title}</h3>
                    <p class="text-gray-400 mb-8 leading-relaxed">${t.card_calc.desc}</p>
                    <button onclick="openCalculator()" class="mt-auto px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors w-full">
                        ${t.card_calc.btn}
                    </button>
                </div>

                <!-- Card 2: Booking -->
                <div class="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col items-center text-center">
                    <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-cyan-400 text-3xl shadow-glow group-hover:scale-110 transition-transform">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">${t.card_book.title}</h3>
                    <p class="text-gray-400 mb-8 leading-relaxed">${t.card_book.desc}</p>
                    <button onclick="hubSelect('calendar', this)" class="mt-auto px-8 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors w-full shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        ${t.card_book.btn}
                    </button>
                </div>

                <!-- Card 3: Message -->
                <div class="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col items-center text-center">
                    <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 text-3xl shadow-glow group-hover:scale-110 transition-transform">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">${t.card_msg.title}</h3>
                    <p class="text-gray-400 mb-8 leading-relaxed">${t.card_msg.desc}</p>
                    <button onclick="hubSelect('message', this)" class="mt-auto px-8 py-3 bg-transparent border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-full">
                        ${t.card_msg.btn}
                    </button>
                </div>

            </div>

            <!-- DYNAMIC CONTENT AREA -->
            <div id="hub-content-area" class="max-w-5xl mx-auto mt-16 min-h-[0px] transition-all duration-500 overflow-hidden">
                <!-- Content injected here -->
            </div>

        </div>
    </section>
    `;
};
