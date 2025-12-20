export const Contact = (lang = 'de') => {
    const content = {
        de: {
            title_prefix: "Senden Sie uns eine",
            title_highlight: "Nachricht",
            subtitle: "Lassen Sie uns gemeinsam etwas Großartiges erschaffen.",
            name_label: "Name",
            name_placeholder: "Max Mustermann",
            email_label: "E-Mail",
            email_placeholder: "max@unternehmen.de",
            msg_label: "Nachricht",
            msg_placeholder: "Erzählen Sie uns von Ihrem Vorhaben...",
            btn: "Anfrage absenden",
            legal_consent: "Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.",
            success_title: "Vielen Dank!",
            success_msg: "Wir bringen Ihr Business bald auf das N3XT LEVEL.<br>Ich melde mich in Kürze bei Ihnen!"
        },
        en: {
            title_prefix: "Send us a",
            title_highlight: "Message",
            subtitle: "Let's create something amazing together.",
            name_label: "Name",
            name_placeholder: "John Doe",
            email_label: "Email",
            email_placeholder: "john@company.com",
            msg_label: "Message",
            msg_placeholder: "Tell us about your project...",
            btn: "Send Request",
            legal_consent: "By sending this, you agree to our Privacy Policy.",
            success_title: "Thank You!",
            success_msg: "We will take your business to the N3XT LEVEL soon.<br>I will contact you shortly!"
        },
        hu: {
            title_prefix: "Kérjük, írjon",
            title_highlight: "Üzenetet",
            subtitle: "Alkossunk együtt valami nagyszerűt.",
            name_label: "Név",
            name_placeholder: "Minta János",
            email_label: "E-mail",
            email_placeholder: "janos@ceg.hu",
            msg_label: "Üzenet",
            msg_placeholder: "Meséljen a terveiről...",
            btn: "Küldés",
            legal_consent: "Az elküldéssel elfogadja az Adatvédelmi Nyilatkozatunkat.",
            success_title: "Köszönjük!",
            success_msg: "Hamarosan N3XT LEVEL-re emeljük vállalkozását.<br>Nemsokára jelentkezem!"
        }
    };

    const t = content[lang] || content.de;

    return `
<!-- Contact Section -->
<section id="contact" class="py-32 bg-black relative overflow-hidden">
    <!-- Glow effects -->
    <!-- Mobile Glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[90px] pointer-events-none md:hidden"></div>
    
    <!-- Desktop Glow -->
    <div
        class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 hidden md:block">
    </div>

    <div class="max-w-3xl mx-auto px-6 relative z-10">
        <div
            class="bg-[#0a0a0a] p-8 md:p-16 rounded-3xl border border-white/5 box-shadow-2xl reveal relative overflow-hidden">
            <div id="formContent">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-5xl font-bold mb-4">${t.title_prefix} <span
                            class="text-accent">${t.title_highlight}</span>
                    </h2>
                    <p class="text-gray-400">${t.subtitle}</p>
                </div>

                <form id="contactForm" action="https://formspree.io/f/mvzppned" method="POST" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="group">
                            <label
                                class="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors">${t.name_label}</label>
                            <input type="text" name="name" required
                                class="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600"
                                placeholder="${t.name_placeholder}">
                        </div>
                        <div class="group">
                            <label
                                class="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors">${t.email_label}</label>
                            <input type="email" name="email" required
                                class="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600"
                                placeholder="${t.email_placeholder}">
                        </div>
                    </div>
                    <div class="group">
                        <label
                            class="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-accent transition-colors">${t.msg_label}</label>
                        <textarea name="message" rows="4" required
                            class="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600 resize-none"
                            placeholder="${t.msg_placeholder}"></textarea>
                    </div>

                    <button type="submit"
                        class="w-full bg-gradient-to-r from-accent to-[#FF8C00] text-white font-bold text-lg py-5 rounded-lg hover:from-accent-hover hover:to-[#FF4500] transition-all duration-300 shadow-glow hover:shadow-glow-intense hover:-translate-y-1 transform">
                        ${t.btn}
                    </button>
                    <p id="formStatus" class="text-center text-accent font-semibold hidden opacity-0 transition-opacity duration-300 mt-4"></p>
                    <p class="text-xs text-center text-gray-600 mt-4">${t.legal_consent}</p>
                </form>
            </div>

            <!-- Success Message -->
            <div id="successMessage"
                class="hidden absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#0a0a0a] z-20">
                <div
                    class="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 class="text-3xl font-bold text-white mb-4">${t.success_title}</h3>
                <p class="text-accent text-xl text-center font-medium leading-relaxed">
                    ${t.success_msg}
                </p>
            </div>
        </div>
    </div>
</section>
`;
};
