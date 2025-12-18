export const Booking = `
<!-- Booking Section -->
<section id="booking" class="py-32 bg-black relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col xl:flex-row gap-16 items-start">
            
            <!-- Left Content -->
            <div class="w-full xl:w-1/3 reveal">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Persönliches <br>
                    <span class="text-accent">Beratungsgespräch</span>
                </h2>
                <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                    Bereit für das nächste Level? Wählen Sie einen passenden Termin für Ihre kostenlose Erstberatung.
                </p>
                
                <div class="space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Location</h4>
                            <p class="text-gray-400">Stockerau, NÖ 2000</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Email</h4>
                            <p class="text-gray-400">info@n3xt-level.eu</p>
                        </div>
                    </div>
                    
                     <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <i class="fas fa-video"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Online Meeting</h4>
                            <p class="text-gray-400">Google Meet / Zoom</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Content: Calendar UI -->
            <div class="w-full xl:w-2/3 reveal" style="transition-delay: 200ms;">
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
                        <div class="text-gray-500 text-sm font-medium py-2">So</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Mo</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Di</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Mi</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Do</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Fr</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Sa</div>
                    </div>
                    
                    <div id="calendarDays" class="grid grid-cols-7 gap-4 text-center">
                        <!-- JS will inject days here -->
                    </div>

                    <!-- Time Selection (Hidden by default) -->
                    <div id="timeSelection" class="hidden mt-8 pt-6 border-t border-white/10 animate-fade-in">
                        <h4 class="text-white font-bold mb-4">Verfügbare Zeiten für <span id="selectedDateText" class="text-accent"></span></h4>
                        <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">09:00</button>
                            <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">10:00</button>
                            <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">11:00</button>
                            <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">14:00</button>
                            <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">15:30</button>
                            <button class="time-slot py-2 px-3 rounded-lg border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-all text-sm">17:00</button>
                        </div>
                        
                        <button id="confirmBookingBtn" class="w-full mt-6 bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent-hover transition-all shadow-glow">
                            Termin anfragen
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
`;
