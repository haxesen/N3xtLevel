export const Process = `
<!-- Process / Timeline Section -->
<section id="process" class="py-24 bg-black relative overflow-hidden">
    <!-- Background Glow -->
    <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center mb-20 reveal">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Der Weg zum <span class="text-accent">Erfolg</span></h2>
            <p class="text-gray-400 max-w-2xl mx-auto text-lg">In vier einfachen Schritten zu Ihrer neuen, hochperformanten Webseite. Transparent, effizient und ohne Kopfzerbrechen.</p>
        </div>

        <!-- Timeline Container -->
        <div class="relative">
            <!-- Vertical Line (Desktop: Center, Mobile: Left) -->
            <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/50 to-transparent md:-translate-x-1/2"></div>

            <div class="space-y-16 md:space-y-24">
                
                <!-- Step 1 -->
                <div class="relative flex flex-col md:flex-row items-center reveal group">
                    <!-- Space for alignment -->
                    <div class="md:w-1/2 md:pr-16 md:text-right pl-20 md:pl-0">
                        <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Analyse & Strategie</h3>
                        <p class="text-gray-400 leading-relaxed">Wir trinken einen (virtuellen) Kaffee und besprechen Ihre Ziele. Wir analysieren Ihre Konkurrenz und definieren, wie wir Sie an die Spitze bringen.</p>
                    </div>
                    
                    <!-- Icon Bubble -->
                    <div class="absolute left-0 md:left-1/2 w-16 h-16 bg-[#0a0a0a] border-2 border-accent rounded-full flex items-center justify-center text-accent shadow-glow md:-translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-coffee text-2xl"></i>
                    </div>

                    <div class="md:w-1/2 md:pl-16 hidden md:block"></div>
                </div>

                <!-- Step 2 -->
                <div class="relative flex flex-col md:flex-row items-center reveal group">
                    <div class="md:w-1/2 md:pr-16 hidden md:block"></div>

                    <!-- Icon Bubble -->
                    <div class="absolute left-0 md:left-1/2 w-16 h-16 bg-[#0a0a0a] border-2 border-gray-700 group-hover:border-accent rounded-full flex items-center justify-center text-gray-400 group-hover:text-accent shadow-xl md:-translate-x-1/2 z-10 group-hover:scale-110 transition-all duration-300">
                        <i class="fas fa-paint-brush text-2xl"></i>
                    </div>

                    <div class="md:w-1/2 md:pl-16 pl-20 md:text-left">
                        <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Design & Konzept</h3>
                        <p class="text-gray-400 leading-relaxed">Keine "Templates von der Stange". Wir erstellen ein modernes, auf Ihre Marke zugeschnittenes Design, das Vertrauen weckt und Besucher zu Kunden macht.</p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="relative flex flex-col md:flex-row items-center reveal group">
                    <div class="md:w-1/2 md:pr-16 md:text-right pl-20 md:pl-0">
                        <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Entwicklung & AI</h3>
                        <p class="text-gray-400 leading-relaxed">Jetzt geschieht die Magie. Wir programmieren Ihre Seite mit sauberem Code und integrieren KI-Tools (z.B. Chatbots), die Ihnen Arbeit abnehmen.</p>
                    </div>
                    
                    <!-- Icon Bubble -->
                    <div class="absolute left-0 md:left-1/2 w-16 h-16 bg-[#0a0a0a] border-2 border-gray-700 group-hover:border-accent rounded-full flex items-center justify-center text-gray-400 group-hover:text-accent shadow-xl md:-translate-x-1/2 z-10 group-hover:scale-110 transition-all duration-300">
                        <i class="fas fa-code text-2xl"></i>
                    </div>

                    <div class="md:w-1/2 md:pl-16 hidden md:block"></div>
                </div>

                <!-- Step 4 -->
                <div class="relative flex flex-col md:flex-row items-center reveal group">
                    <div class="md:w-1/2 md:pr-16 hidden md:block"></div>

                    <!-- Icon Bubble -->
                    <div class="absolute left-0 md:left-1/2 w-16 h-16 bg-[#0a0a0a] border-2 border-accent rounded-full flex items-center justify-center text-accent shadow-glow md:-translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-rocket text-2xl"></i>
                    </div>

                    <div class="md:w-1/2 md:pl-16 pl-20 md:text-left">
                        <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">Launch & Erfolg</h3>
                        <p class="text-gray-400 leading-relaxed">Ready for Takeoff! Wir schalten Ihre Seite live, optimieren Sie für Google (SEO) und sorgen dafür, dass Sie ab Tag 1 professionell sichtbar sind.</p>
                    </div>
                </div>

            </div>
        </div>
        
        <!-- CTA -->
        <div class="text-center mt-20 reveal">
            <a href="#" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'}); return false;" class="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 hover:border-accent transition-all group">
                Erstgespräch buchen
                <i class="fas fa-arrow-right text-accent group-hover:translate-x-1 transition-transform"></i>
            </a>
        </div>

    </div>
</section>
`;
