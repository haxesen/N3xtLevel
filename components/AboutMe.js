export const AboutMe = (lang = 'de') => {
    const content = {
        de: {
            badge: "Der Kopf hinter N3XT LEVEL",
            name: "Tamas Horvat",
            role: "Founder & Lead Developer",
            desc: "\"Mein Ziel ist es, österreichische Unternehmen durch den Einsatz modernster KI-Technologien auf das nächste Level zu heben. Ich kombiniere technisches Know-how mit lokaler Verlässlichkeit.\"",
            signature_font: "'Mr De Haviland', cursive"
        },
        en: {
            badge: "The Mind Behind N3XT LEVEL",
            name: "Tamas Horvat",
            role: "Founder & Lead Developer",
            desc: "\"My goal is to take Austrian businesses to the next level using cutting-edge AI technologies. I combine technical expertise with local reliability.\"",
            signature_font: "'Mr De Haviland', cursive"
        },
        hu: {
            badge: "A N3XT LEVEL motorja",
            name: "Horvat Tamás",
            role: "Alapító & Vezető Fejlesztő",
            desc: "\"Célom, hogy a legmodernebb AI technológiák segítségével emeljem a vállalkozásokat a következő szintre. A technikai tudást a megbízhatósággal ötvözöm.\"",
            signature_font: "'Mr De Haviland', cursive"
        }
    };

    const t = content[lang] || content.de;

    return `
<!-- The Mind Behind Section -->
<section class="py-32 bg-black relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-16 reveal">
            <!-- Image Side -->
            <div class="w-full md:w-1/2 flex justify-center md:justify-end">
                <div class="relative w-64 h-64 md:w-80 md:h-80">
                    <div
                        class="absolute inset-0 border-2 border-accent rounded-full animate-pulse-slow blur-sm">
                    </div>
                    <img src="/profile.jpg" alt="${t.name}"
                        class="relative z-10 w-full h-full object-cover rounded-full border-2 border-accent shadow-glow">
                    <!-- Decorative Elements -->
                    <div
                        class="absolute -bottom-4 -right-4 bg-card-bg px-6 py-3 rounded-xl border border-white/10 shadow-xl z-20">
                        <span class="text-accent font-bold">Founder</span>
                    </div>
                </div>
            </div>

            <!-- Text Side -->
            <div class="w-full md:w-1/2 text-center md:text-left">
                <p class="text-accent font-semibold tracking-wider uppercase mb-2">${t.badge}</p>
                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">${t.name}</h2>
                <h3 class="text-xl text-gray-300 font-medium mb-6">${t.role}</h3>
                <p class="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                    ${t.desc}
                </p>
                <div class="mt-10">
                    <p class="text-8xl text-white transform -rotate-6 origin-left tracking-wide opacity-90" style="font-family: ${t.signature_font};">${t.name}</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;
};
