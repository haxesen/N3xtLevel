export const CookieBanner = `
<!-- Cookie Consent Banner -->
<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 flex justify-center transform translate-y-full transition-transform duration-500">
    <div class="bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl max-w-4xl w-full p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md bg-opacity-95">
        
        <!-- Text Content -->
        <div class="flex-1 space-y-2">
            <h3 class="text-white font-bold text-lg flex items-center gap-2">
                <i class="fas fa-cookie-bite text-accent"></i> 
                Cookie-Einstellungen
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">
                Wir nutzen Cookies und ähnliche Technologien, um Ihnen ein optimales Web-Erlebnis zu bieten. Einige sind für den Betrieb der Seite notwendig, andere helfen uns, die Nutzung zu verstehen und zu verbessern.
                <a href="#" data-modal-open="datenschutzModal" class="text-accent hover:underline">Mehr erfahren</a>.
            </p>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button id="cookie-decline" class="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all text-sm font-medium whitespace-nowrap">
                Nur Notwendige
            </button>
            <button id="cookie-accept" class="px-8 py-3 rounded-lg bg-accent text-white font-bold shadow-glow hover:shadow-glow-intense hover:-translate-y-0.5 transition-all text-sm whitespace-nowrap">
                Alles akzeptieren
            </button>
        </div>
    </div>
</div>
`;
