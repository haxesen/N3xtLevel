export const Booking = (lang = 'de') => {
    const content = {
        de: {
            title_prefix: "Persönliches",
            title_highlight: "Beratungsgespräch",
            desc: "Bereit für das nächste Level? Wählen Sie einen passenden Termin für Ihre kostenlose Erstberatung.",
            loc_label: "Standort",
            days: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            avail_times: "Verfügbare Zeiten für",
            btn_book: "Termin anfragen"
        },
        en: {
            title_prefix: "Personal",
            title_highlight: "Consultation",
            desc: "Ready for the next level? Choose a suitable time for your free consultation.",
            loc_label: "Location",
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            avail_times: "Available times for",
            btn_book: "Request Appointment"
        },
        hu: {
            title_prefix: "Személyes",
            title_highlight: "Konzultáció",
            desc: "Készen áll a következő szintre? Válasszon időpontot az ingyenes konzultációhoz.",
            loc_label: "Helyszín",
            days: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
            avail_times: "Elérhető időpontok erre:",
            btn_book: "Időpont Kérése"
        }
    };

    const t = content[lang] || content.de;

    // Helper to generate day headers
    const dayHeaders = t.days.map(d => `<div class="text-gray-500 text-sm font-medium py-2">${d}</div>`).join('');

    return `
<!-- Booking Section -->
<section id="booking" class="py-32 bg-black relative border-t border-white/5">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="flex flex-col gap-10 items-center lg:items-start">

                        <!-- Left Content -->
                        <div class="w-full reveal">
                            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight break-words hyphens-auto">
                                ${t.title_prefix} <br>
                                    <span class="text-accent">${t.title_highlight}</span>
                            </h2>
                            <p class="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
                                ${t.desc}
                            </p>

                            <div class="space-y-6 hidden md:block">
                                <!-- Contact Info (Hidden on mobile to save space/focus) -->
                                <div class="flex items-start gap-4">
                                    <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-white font-bold">${t.loc_label}</h4>
                                        <p class="text-gray-400">Stockerau, NÖ 2000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Content: Calendar UI -->
                        <div class="w-full reveal" style="transition-delay: 200ms;">
                            <div class="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                <!-- Glow Effect inside card -->
                                <div class="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

                                <!-- Calendar Header -->
                                <div class="flex justify-between items-center mb-8">
                                    <h3 id="currentMonthYear" class="text-2xl font-bold text-white">December 2025</h3>
                                    <div class="flex gap-2">
                                        <button id="prevMonth" class="w-10 h-10 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors flex items-center justify-center">
                                            <i class="fas fa-chevron-left"></i>
                                        </button>
                                        <button id="nextMonth" class="w-10 h-10 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors flex items-center justify-center">
                                            <i class="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>

                                <!-- Calendar Grid -->
                                <div class="grid grid-cols-7 gap-4 mb-4 text-center">
                                    ${dayHeaders}
                                </div>

                                <div id="calendarDays" class="grid grid-cols-7 gap-4 text-center">
                                    <!-- JS will inject days here -->
                                </div>

                                <!-- Time Selection (Hidden by default) -->
                                <div id="timeSelection" class="hidden mt-8 pt-6 border-t border-white/10 animate-fade-in">
                                    <h4 class="text-white font-bold mb-4">${t.avail_times} <span id="selectedDateText" class="text-accent"></span></h4>
                                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">09:00</button>
                                        <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">10:00</button>
                                        <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">11:00</button>
                                        <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">14:00</button>
                                        <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">15:30</button>
                                        <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">17:00</button>
                                    </div>

                                    <button id="confirmBookingBtn" class="w-full mt-6 bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent-hover transition-all shadow-glow">
                                        ${t.btn_book}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `;
};
