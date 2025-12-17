const PremiumContent = `
<!-- Premium Content Section -->
<section class="py-32 bg-black relative border-t border-white/5 overflow-hidden">
     <!-- Background Effect -->
    <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
    
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-16 reveal">
            <!-- Image Side -->
            <div class="w-full md:w-1/2">
                <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div class="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <img src="assets/drone_placeholder.svg" alt="Professional Drone Photography" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700">
                    <!-- Overlay Text -->
                     <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <p class="text-white text-sm font-bold uppercase tracking-wider">Cinematic Production</p>
                    </div>
                </div>
            </div>

            <!-- Text Side -->
            <div class="w-full md:w-1/2">
                <p class="text-accent font-semibold tracking-wider uppercase mb-2">Premium Content</p>
                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Einzigartiger Content für einen einzigartigen Auftritt</h2>
                <p class="text-gray-400 text-lg leading-relaxed mb-8">
                    Ein modernes Webdesign wirkt erst durch erstklassige visuelle Inhalte. Wir überlassen nichts dem Zufall: Auf Wunsch erstellen wir exklusives Bild- und Videomaterial direkt für Ihre neue Webseite.
                </p>

                <div class="space-y-6">
                    <!-- Feature 1 -->
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                            <i class="fas fa-paper-plane text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">Eigene Drohnen-Produktion</h4>
                            <p class="text-gray-400 text-sm">Spektakuläre 4K-Luftaufnahmen für den perfekten ersten Eindruck.</p>
                        </div>
                    </div>
                    <!-- Feature 2 -->
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                            <i class="fas fa-camera text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">Authentische Business-Fotos</h4>
                            <p class="text-gray-400 text-sm">Wir setzen Sie und Ihr Team professionell in Szene.</p>
                        </div>
                    </div>
                    <!-- Feature 3 -->
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                            <i class="fas fa-video text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">Werbe- & Imagevideos</h4>
                            <p class="text-gray-400 text-sm">Dynamischer Content, der Ihre Besucher fesselt.</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 pt-8 border-t border-white/10">
                    <p class="text-white font-medium italic">"Alles aus einer Hand – für eine Webseite, die sich von der Masse abhebt."</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;
