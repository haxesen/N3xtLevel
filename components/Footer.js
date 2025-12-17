export const Footer = `
<!-- Footer -->
<footer class="py-12 border-t border-white/5 bg-black">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-gray-500 text-sm">
            &copy; <span id="year"></span> N<span class="text-[#ff0000]">3</span>XT LEVEL. Excellence in Code.
        </div>

        <!-- Social Icons (Footer) -->
        <div class="flex space-x-6 items-center">
            <a href="#" class="social-btn text-xl"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-btn text-xl"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-btn text-xl"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-btn text-lg"><i class="fab fa-x-twitter"></i></a>
        </div>

        <div class="flex space-x-8 text-sm text-gray-400">
            <button onclick="openModal('impressumModal')"
                class="hover:text-accent transition-colors">Impressum</button>
            <button onclick="openModal('datenschutzModal')"
                class="hover:text-accent transition-colors">Datenschutz</button>
            <button onclick="openModal('agbModal')" class="hover:text-accent transition-colors">AGB</button>
        </div>
    </div>
</footer>
`;
