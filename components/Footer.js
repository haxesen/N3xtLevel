export const Footer = (lang = 'de') => {
    const content = {
        de: {
            impressum: "Impressum",
            datenschutz: "Datenschutz",
            agb: "AGB"
        },
        en: {
            impressum: "Imprint",
            datenschutz: "Privacy Policy",
            agb: "Terms"
        },
        hu: {
            impressum: "Impresszum",
            datenschutz: "Adatvédelem",
            agb: "ÁSZF"
        }
    };

    const t = content[lang] || content.de;

    return `
<!-- Footer -->
<footer class="py-12 border-t border-white/5 bg-black">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-gray-500 text-sm">
            &copy; <span id="year"></span> N<span class="text-[#ff0000]">3</span>XT LEVEL. Excellence in Code.
        </div>

        <!-- Email -->
        <a href="mailto:info@n3xt-level.eu" class="text-gray-500 hover:text-accent transition-colors font-medium">info@n3xt-level.eu</a>

        <!-- Social Icons (Footer) -->
        <div class="flex space-x-6 items-center">
            <a href="#" class="social-btn text-xl"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-btn text-xl"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-btn text-xl"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-btn text-lg"><i class="fab fa-x-twitter"></i></a>
        </div>

        <div class="flex space-x-8 text-sm text-gray-400">
            <button data-modal-open="impressumModal"
                class="hover:text-accent transition-colors">${t.impressum}</button>
            <button data-modal-open="datenschutzModal"
                class="hover:text-accent transition-colors">${t.datenschutz}</button>
            <button data-modal-open="agbModal" class="hover:text-accent transition-colors">${t.agb}</button>
        </div>
    </div>
</footer>
`;
};
