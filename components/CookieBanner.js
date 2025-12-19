export const CookieBanner = (lang = 'de') => {
    const t = {
        de: {
            title: "Cookie-Einstellungen",
            text: "Wir nutzen Cookies und ähnliche Technologien, um Ihnen ein optimales Web-Erlebnis zu bieten. Einige sind für den Betrieb der Seite notwendig, andere helfen uns, die Nutzung zu verstehen und zu verbessern.",
            link: "Mehr erfahren",
            min: "Nur Notwendige",
            all: "Alles akzeptieren"
        },
        en: {
            title: "Cookie Settings",
            text: "We use cookies and similar technologies to provide you with an optimal web experience. Some are necessary for the operation of the site, others help us understand and improve usage.",
            link: "Learn more",
            min: "Essential Only",
            all: "Accept All"
        },
        hu: {
            title: "Süti beállítások",
            text: "Sütiket és hasonló technológiákat használunk az optimális webes élmény érdekében. Néhány a működéshez szükséges, mások segítenek a használat megértésében és javításában.",
            link: "Tudjon meg többet",
            min: "Csak a szükséges",
            all: "Összes elfogadása"
        }
    };

    const content = t[lang] || t.de;

    return `
<!-- Cookie Consent Banner -->
<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 flex justify-center transform translate-y-full transition-transform duration-500">
    <div class="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl max-w-4xl w-full p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md bg-opacity-95">
        
        <!-- Text Content -->
        <div class="flex-1 space-y-2">
            <h3 class="text-white font-bold text-lg flex items-center gap-2">
                <i class="fas fa-cookie-bite text-accent"></i> 
                ${content.title}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">
                ${content.text}
                <a href="#" data-modal-open="datenschutzModal" class="text-accent hover:underline">${content.link}</a>.
            </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button id="cookie-decline" class="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all text-sm font-medium whitespace-nowrap">
                ${content.min}
            </button>
            <button id="cookie-accept" class="px-8 py-3 rounded-lg bg-accent text-white font-bold shadow-glow hover:shadow-glow-intense hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap">
                ${content.all}
            </button>
        </div>
    </div>
</div>
`;
};
