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
                            <p class="text-gray-400">office@n3xtlevel.at</p>
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

            <!-- Right Content: Calendar UI (Visual Trigger) -->
            <div class="w-full xl:w-2/3 reveal" style="transition-delay: 200ms;">
                <div class="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-accent/50 transition-colors duration-500">
                    <!-- Glow Effect inside card -->
                    <div class="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

                    <!-- Calendar Header -->
                    <div class="flex justify-between items-center mb-8 opacity-50 pointer-events-none">
                        <h3 class="text-2xl font-bold text-white">December 2025</h3>
                        <div class="flex gap-2">
                            <div class="w-10 h-10 rounded-full border border-white/10 text-white flex items-center justify-center">
                                <i class="fas fa-chevron-left"></i>
                            </div>
                            <div class="w-10 h-10 rounded-full border border-white/10 text-white flex items-center justify-center">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Calendar Grid (Visual Only) -->
                    <div class="grid grid-cols-7 gap-4 mb-8 text-center opacity-50 pointer-events-none">
                        <div class="text-gray-500 text-sm font-medium py-2">So</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Mo</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Di</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Mi</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Do</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Fr</div>
                        <div class="text-gray-500 text-sm font-medium py-2">Sa</div>
                        
                        <!-- Sample Days -->
                        <div class="aspect-square flex items-center justify-center text-gray-600">30</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">1</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">2</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">3</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">4</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">5</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">6</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">7</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">8</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300 bg-white/5 rounded-full">9</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">10</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">11</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">12</div>
                        <div class="aspect-square flex items-center justify-center text-gray-300">13</div>
                    </div>
                    
                    <!-- Call To Action Overlay -->
                    <div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-10 transition-all duration-300">
                        <button id="openBookingModal" class="bg-accent text-white font-bold text-xl py-4 px-10 rounded-full shadow-glow hover:shadow-glow-intense hover:scale-105 transition-all transform flex items-center gap-3">
                            <i class="fas fa-calendar-alt"></i>
                            Termin jetzt buchen
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
`;
