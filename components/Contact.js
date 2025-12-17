const Contact = `
<!-- Contact Section -->
<section id="contact" class="py-32 bg-black relative overflow-hidden">
    <!-- Glow effects -->
    <div
        class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4">
    </div>

    <div class="max-w-3xl mx-auto px-6 relative z-10">
        <div
            class="bg-[#0a0a0a] p-8 md:p-16 rounded-3xl border border-white/5 box-shadow-2xl reveal relative overflow-hidden">
            <div id="formContent">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-5xl font-bold mb-4">Projekt <span
                            class="text-accent">starten</span>
                    </h2>
                    <p class="text-gray-400">Lassen Sie uns gemeinsam etwas Großartiges erschaffen.</p>
                </div>

                <form id="contactForm" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="group">
                            <label
                                class="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors">Name</label>
                            <input type="text" required
                                class="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600"
                                placeholder="Max Mustermann">
                        </div>
                        <div class="group">
                            <label
                                class="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors">E-Mail</label>
                            <input type="email" required
                                class="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600"
                                placeholder="max@unternehmen.de">
                        </div>
                    </div>
                    <div class="group">
                        <label
                            class="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors">Nachricht</label>
                        <textarea rows="4" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600 resize-none"
                            placeholder="Erzählen Sie uns von Ihrem Vorhaben..."></textarea>
                    </div>

                    <button type="submit"
                        class="w-full bg-accent text-white font-bold text-lg py-5 rounded-lg hover:bg-accent-hover transition-all duration-300 shadow-glow hover:shadow-glow-intense hover:-translate-y-1">
                        Anfrage absenden
                    </button>
                    <p class="text-xs text-center text-gray-600 mt-4">Mit dem Absenden stimmen Sie unserer
                        Datenschutzerklärung zu.</p>
                </form>
            </div>

            <!-- Success Message -->
            <div id="successMessage"
                class="hidden absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#0a0a0a] z-20">
                <div
                    class="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 class="text-3xl font-bold text-white mb-4">Vielen Dank!</h3>
                <p class="text-accent text-xl text-center font-medium leading-relaxed">
                    Wir bringen Ihr Business bald auf das N3xt Level.<br>Ich melde mich in Kürze bei Ihnen!
                </p>
            </div>
        </div>
    </div>
</section>
`;
