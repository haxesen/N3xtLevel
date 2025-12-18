export const PremiumContent = (lang = 'de') => {
    const content = {
        de: {
            badge: "Premium Content",
            h2: "Einzigartiger Content für einen einzigartigen Auftritt",
            p: "Ein modernes Webdesign wirkt erst durch erstklassige visuelle Inhalte. Wir überlassen nichts dem Zufall: Auf Wunsch erstellen wir exklusives Bild- und Videomaterial direkt für Ihre neue Webseite.",
            feat1_title: "Eigene Drohnen-Produktion",
            feat1_desc: "Spektakuläre 4K-Luftaufnahmen für den perfekten ersten Eindruck.",
            feat2_title: "Authentische Business-Fotos",
            feat2_desc: "Wir setzen Sie und Ihr Team professionell in Szene.",
            feat3_title: "Werbe- & Imagevideos",
            feat3_desc: "Dynamischer Content, der Ihre Besucher fesselt.",
            quote: "\"Alles aus einer Hand – für eine Webseite, die sich von der Masse abhebt.\""
        },
        en: {
            badge: "Premium Content",
            h2: "Unique Content for a Unique Presence",
            p: "Modern web design only truly shines with top-tier visual content. We leave nothing to chance: Upon request, we create exclusive image and video material directly for your new website.",
            feat1_title: "In-house Drone Production",
            feat1_desc: "Spectacular 4K aerial shots for the perfect first impression.",
            feat2_title: "Authentic Business Photography",
            feat2_desc: "We showcase you and your team professionally.",
            feat3_title: "Promotional & Brand Videos",
            feat3_desc: "Dynamic content that captivates your visitors.",
            quote: "\"All from a single source – for a website that stands out from the crowd.\""
        },
        hu: {
            badge: "Prémium Tartalom",
            h2: "Egyedi tartalom az egyedi megjelenésért",
            p: "A modern webdizájn csak első osztályú vizuális tartalommal érvényesül igazán. Nem bízunk semmit a véletlenre: Igény esetén exkluzív kép- és videóanyagot készítünk közvetlenül az új weboldalához.",
            feat1_title: "Saját Drón Produkció",
            feat1_desc: "Látványos 4K légi felvételek a tökéletes első benyomásért.",
            feat2_title: "Hiteles Üzleti Fotók",
            feat2_desc: "Professzionális módon mutatjuk be Önt és csapatát.",
            feat3_title: "Reklám- és Imázsvideók",
            feat3_desc: "Dinamikus tartalom, amely magával ragadja látogatóit.",
            quote: "\"Minden egy kézből – egy weboldalért, amely kiemelkedik a tömegből.\""
        }
    };

    const t = content[lang] || content.de;

    return `
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
                    <img src="/drone_shot.jpg" alt="Professional Drone Photography" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700">
                    <!-- Overlay Text -->
                     <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <p class="text-white text-sm font-bold uppercase tracking-wider">Cinematic Production</p>
                    </div>
                </div>
            </div>

            <!-- Text Side -->
            <div class="w-full md:w-1/2">
                <p class="text-accent font-semibold tracking-wider uppercase mb-2">${t.badge}</p>
                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">${t.h2}</h2>
                <p class="text-gray-400 text-lg leading-relaxed mb-8">
                    ${t.p}
                </p>

                <div class="space-y-6">
                    <!-- Feature 1 -->
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                            <i class="fas fa-paper-plane text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">${t.feat1_title}</h4>
                            <p class="text-gray-400 text-sm">${t.feat1_desc}</p>
                        </div>
                    </div>
                    <!-- Feature 2 -->
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                            <i class="fas fa-camera text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">${t.feat2_title}</h4>
                            <p class="text-gray-400 text-sm">${t.feat2_desc}</p>
                        </div>
                    </div>
                    <!-- Feature 3 -->
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                            <i class="fas fa-video text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">${t.feat3_title}</h4>
                            <p class="text-gray-400 text-sm">${t.feat3_desc}</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8 pt-8 border-t border-white/10">
                    <p class="text-white font-medium italic">${t.quote}</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;
};
