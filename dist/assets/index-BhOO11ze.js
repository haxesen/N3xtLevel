(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c=`
<!-- Hero Section -->
<section class="min-h-screen flex items-center justify-center relative pt-20">
    <!-- Background Glows -->
    <div
        class="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none">
    </div>
    <div
        class="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none">
    </div>

    <div class="max-w-7xl mx-auto px-6 text-center z-10">
        <h1
            class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-fade-in-up">
            Bringen Sie Ihr Business<br>
            auf das <span class="text-accent drop-shadow-[0_0_15px_rgba(255,69,0,0.3)]">N<span
                    class="text-[#ff0000]">3</span>XT LEVEL.</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.2s;">
            KI-optimierte Web-Lösungen für maximalen <span class="text-white font-medium">Unternehmenserfolg</span>.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up"
            style="animation-delay: 0.4s;">
            <a href="#contact"
                class="group relative px-10 py-5 bg-accent text-white text-lg font-bold rounded overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-intense">
                <span class="relative z-10">Jetzt anfragen</span>
                <div
                    class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                </div>
            </a>
            <a href="#portfolio"
                class="px-10 py-5 border border-white/20 text-white text-lg font-medium rounded hover:bg-white/5 hover:border-white transition-all duration-300">
                Portfolio ansehen
            </a>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-slow opacity-50">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div class="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
    </div>
</section>
`,d=`
<!-- Services Section -->
<section id="services" class="py-32 bg-black relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-24 reveal">
            <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Unsere <span
                    class="text-accent">Leistungen</span></h2>
            <div class="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div
                class="group reveal p-10 rounded-3xl bg-card-bg border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow relative overflow-hidden">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-white">Modernes Webdesign</h3>
                <p class="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                    High-End Interfaces, die Ihre Marke perfekt in Szene setzen. Ästhetisch, intuitiv und
                    conversion-optimiert.
                </p>
            </div>

            <!-- Card 2 -->
            <div class="group reveal p-10 rounded-3xl bg-card-bg border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow relative overflow-hidden"
                style="transition-delay: 100ms;">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-white">SEO & Google-Ranking</h3>
                <p class="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                    Wir bringen Sie nach oben. Durch datengetriebene Strategien erhöhen wir Ihre Sichtbarkeit
                    und
                    Reichweite nachhaltig.
                </p>
            </div>

            <!-- Card 3 -->
            <div class="group reveal p-10 rounded-3xl bg-card-bg border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow relative overflow-hidden"
                style="transition-delay: 200ms;">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-white">KI-Automatisierung</h3>
                <p class="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                    Verschaffen Sie sich einen Wettbewerbsvorteil durch intelligente Prozessautomatisierung und
                    KI-Integrationen.
                </p>
            </div>
        </div>
    </div>
</section>
`,u=`
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
`,h=`
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
                    <img src="assets/profile.jpg" alt="Tamas Horvat"
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
                <p class="text-accent font-semibold tracking-wider uppercase mb-2">Der Kopf hinter N3XT LEVEL
                </p>
                <h2 class="text-3xl md:text-5xl font-bold mb-6 text-white">Tamas Horvat</h2>
                <h3 class="text-xl text-gray-300 font-medium mb-6">Founder & Lead Developer</h3>
                <p class="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                    "Mein Ziel ist es, österreichische Unternehmen durch den Einsatz modernster KI-Technologien
                    auf
                    das nächste Level zu heben. Ich kombiniere technisches Know-how mit lokaler
                    Verlässlichkeit."
                </p>
                <div class="mt-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                        alt="Signature" class="h-12 w-auto opacity-70 invert mx-auto md:mx-0">
                </div>
            </div>
        </div>
    </div>
</section>
`,m=`
<!-- Portfolio Section -->
<section id="portfolio" class="py-32 bg-dark border-t border-white/5 relative">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div>
                <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Ausgewählte <span
                        class="text-accent">Projekte</span></h2>
                <p class="text-gray-400">Innovation trifft auf Design.</p>
            </div>
            <a href="#"
                class="hidden md:inline-block text-accent font-semibold hover:text-white transition-colors mt-6 md:mt-0">Alle
                Projekte ansehen →</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                    alt="Dashboard"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">FinTech</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Alpha Analytics</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        KI-gestütztes Dashboard für Finanzanalysen.</p>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]"
                style="transition-delay: 100ms;">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000"
                    alt="E-Commerce"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">E-Commerce</p>
                    <h3 class="text-2xl font-bold text-white mb-2">Lumina Shop</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Performance-optimierter Online Store.</p>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="group reveal rounded-2xl overflow-hidden relative cursor-pointer aspect-[4/3]"
                style="transition-delay: 200ms;">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                    alt="Corporate"
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                <div
                    class="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p class="text-accent text-sm font-bold mb-2 uppercase tracking-wider">Corporate</p>
                    <h3 class="text-2xl font-bold text-white mb-2">BauWesen AG</h3>
                    <p
                        class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Moderne Unternehmenswebseite.</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-8 md:hidden">
            <a href="#" class="text-accent font-semibold hover:text-white transition-colors">Alle Projekte
                ansehen
                →</a>
        </div>
    </div>
</section>
`,x=`
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
`,p=`
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
`;document.getElementById("hero-container").innerHTML=c;document.getElementById("services-container").innerHTML=d;document.getElementById("premium-content-container").innerHTML=u;document.getElementById("about-me-container").innerHTML=h;document.getElementById("portfolio-container").innerHTML=m;document.getElementById("contact-container").innerHTML=x;document.getElementById("footer-container").innerHTML=p;const v=()=>{const s=document.querySelectorAll(".reveal"),t=()=>{const a=window.innerHeight,l=100;s.forEach(n=>{n.getBoundingClientRect().top<a-l&&n.classList.add("active")})};window.addEventListener("scroll",t),t();const i=document.getElementById("contactForm"),r=document.getElementById("successMessage"),e=document.getElementById("formContent");i&&i.addEventListener("submit",a=>{a.preventDefault(),e.style.opacity="0",e.style.transition="opacity 0.5s ease",setTimeout(()=>{e.classList.add("hidden"),r.classList.remove("hidden"),r.classList.add("animate-fade-in")},500)});const o=document.getElementById("year");o&&(o.textContent=new Date().getFullYear())};window.openModal=s=>{const t=document.getElementById(s);t&&(t.classList.add("active"),document.body.style.overflow="hidden")};window.closeModal=s=>{const t=document.getElementById(s);t&&(t.classList.remove("active"),document.body.style.overflow="")};window.addEventListener("click",s=>{s.target.classList.contains("modal-backdrop")&&(s.target.classList.remove("active"),document.body.style.overflow="")});window.addEventListener("keydown",s=>{s.key==="Escape"&&(document.querySelectorAll(".modal-backdrop").forEach(t=>{t.classList.remove("active")}),document.body.style.overflow="")});v();
