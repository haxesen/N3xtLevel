import './style.css';

// Import Components
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { PremiumContent } from './components/PremiumContent.js';
import { AboutMe } from './components/AboutMe.js';
import { Portfolio } from './components/Portfolio.js';
import { Process } from './components/Process.js';
import { Stats } from './components/Stats.js';
import { Booking } from './components/Booking.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Chatbot } from './components/Chatbot.js';
import { CookieBanner } from './components/CookieBanner.js';
import { initParticles } from './components/Particles.js';

// --- State Management ---
let currentLang = localStorage.getItem('n3xt_lang') || 'de';
// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxoqZlg_LU9S3A36C-Cub7JTJomOkN1YN4KbRMjsCRt2H4wdSmsdgLf7Q_pyofxNM_-/exec";
// Formspree ID
const FORMSPREE_URL = "https://formspree.io/f/mvzppned";


// --- Helper Functions ---

// 1. Calendar / Booking Logic
const setupCalendar = () => {
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const timeSelection = document.getElementById('timeSelection');
    const selectedDateText = document.getElementById('selectedDateText');
    const confirmBookingBtn = document.getElementById('confirmBookingBtn');

    if (!calendarDays) return;

    let currentDate = new Date();
    let selectedDay = null;
    let selectedTime = null;

    // Time Slots Logic
    const slots = document.querySelectorAll('.time-slot');
    slots.forEach(slot => {
        slot.onclick = () => {
            // Visual feedback
            slots.forEach(s => s.classList.remove('bg-accent', 'text-white', 'border-accent'));
            slot.classList.add('bg-accent', 'text-white', 'border-accent');
            selectedTime = slot.innerText;
        };
    });

    const render = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const monthNames = {
            de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            hu: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
        };
        const currentMonthNames = monthNames[currentLang] || monthNames.de;

        if (currentMonthYear) currentMonthYear.innerText = `${currentMonthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const padding = firstDay;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarDays.innerHTML = '';

        for (let i = 0; i < padding; i++) {
            calendarDays.appendChild(document.createElement('div'));
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 1; i <= daysInMonth; i++) {
            const btn = document.createElement('button');
            btn.innerText = i;

            const checkDate = new Date(year, month, i);

            if (checkDate < today) {
                btn.className = 'w-10 h-10 rounded-full mx-auto flex items-center justify-center text-gray-700 cursor-default opacity-30';
            } else {
                btn.className = 'w-10 h-10 rounded-full mx-auto flex items-center justify-center text-gray-300 hover:bg-white/10 transition-all text-sm font-medium';

                const realToday = new Date();
                if (i === realToday.getDate() && month === realToday.getMonth() && year === realToday.getFullYear()) {
                    btn.classList.add('border', 'border-accent', 'text-accent');
                }

                btn.onclick = () => {
                    calendarDays.querySelectorAll('button').forEach(b => {
                        if (!b.classList.contains('cursor-default')) {
                            b.classList.remove('bg-accent', 'text-white');
                        }
                    });

                    btn.classList.add('bg-accent', 'text-white');
                    selectedDay = i;

                    // Reset selected time when day changes
                    selectedTime = null;
                    slots.forEach(s => s.classList.remove('bg-accent', 'text-white', 'border-accent'));

                    selectedDateText.innerText = `${i}. ${currentMonthNames[month]} ${year}`;
                    timeSelection.classList.remove('hidden');
                    timeSelection.classList.add('block');
                    setTimeout(() => timeSelection.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
                };
            }
            calendarDays.appendChild(btn);
        }
    };

    render();

    if (prevMonthBtn) prevMonthBtn.onclick = () => { currentDate.setMonth(currentDate.getMonth() - 1); render(); };
    if (nextMonthBtn) nextMonthBtn.onclick = () => { currentDate.setMonth(currentDate.getMonth() + 1); render(); };

    if (confirmBookingBtn) {
        confirmBookingBtn.onclick = () => {
            if (!selectedTime) {
                alert(currentLang === 'hu' ? 'Kérjük válasszon időpontot!' : (currentLang === 'en' ? 'Please select a time!' : 'Bitte wählen Sie eine Uhrzeit!'));
                return;
            }

            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const isoDate = `${year}-${month.toString().padStart(2, '0')}-${selectedDay.toString().padStart(2, '0')}`;

            const bookingData = {
                date: isoDate,
                time: selectedTime
            };
            localStorage.setItem('n3xt_pending_booking', JSON.stringify(bookingData));

            const contactSec = document.getElementById('contact');
            const msgArea = document.querySelector('textarea[name="message"]');
            if (contactSec && msgArea) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
                msgArea.value = (currentLang === 'hu' ? `Időpontfoglalás: ${selectedDateText.innerText}, ${selectedTime}` :
                    (currentLang === 'en' ? `Booking Request: ${selectedDateText.innerText}, ${selectedTime}` :
                        `Terminanfrage: ${selectedDateText.innerText}, ${selectedTime}`)) + "\n\n";
                msgArea.focus();
            }
        };
    }
};

// 2. Contact Form Logic
const setupContactForm = () => {
    const form = document.getElementById('contactForm');
    const successOverlay = document.getElementById('successMessage');
    const formContent = document.getElementById('formContent');
    const statusMsg = document.getElementById('formStatus');

    if (!form) return;

    form.onsubmit = async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        btn.innerText = currentLang === 'hu' ? 'Küldés...' : (currentLang === 'en' ? 'Sending...' : 'Wird gesendet...');
        btn.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const storedBooking = localStorage.getItem('n3xt_pending_booking');

        if (storedBooking) {
            try {
                const bookingDetails = JSON.parse(storedBooking);
                const googlePayload = {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    date: bookingDetails.date,
                    time: bookingDetails.time
                };

                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(googlePayload)
                }).then(() => console.log('Google Sync initiated'))
                    .catch(err => console.warn('Google Sync failed:', err));

                localStorage.removeItem('n3xt_pending_booking');
            } catch (err) {
                console.warn('Calendar sync logic error:', err);
            }
        }

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                form.reset();
                if (successOverlay && formContent) {
                    formContent.classList.add('hidden');
                    successOverlay.classList.remove('hidden');
                    successOverlay.classList.add('flex');
                } else if (statusMsg) {
                    statusMsg.innerText = "Success!";
                    statusMsg.classList.remove('hidden');
                }
            } else {
                const errorData = await res.json().catch(() => ({}));
                console.error('Formspree Error Details:', errorData);
                alert(`Error sending message: ${errorData.errors ? errorData.errors.map(e => e.message).join(', ') : 'Check console for details.'}`);
            }
        } catch (err) {
            console.error('Network Error Details:', err);
            alert('Network error. Please try again.');
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
        }
    };
};

// 3. Stats Animation
const setupStats = () => {
    const section = document.getElementById('stats');
    if (!section) return;

    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    const animate = () => {
        counters.forEach(c => {
            const target = +c.getAttribute('data-target');
            const duration = 1500;
            const inc = target / (duration / 16);
            let val = 0;
            const timer = setInterval(() => {
                val += inc;
                if (val >= target) { val = target; clearInterval(timer); }
                c.innerText = target % 1 !== 0 ? val.toFixed(1) : Math.round(val);
            }, 16);
        });
    };

    new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting && !hasAnimated) {
                animate();
                hasAnimated = true;
            }
        });
    }).observe(section);
};

// 4. Reveal Animation
const setupReveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
};

// 5. Update UI (Main Re-render function)
const updateUI = () => {
    // 0. Update Meta Data (SEO)
    const metaData = {
        de: {
            title: "N3XT LEVEL | KI-Web-Lösungen",
            desc: "KI-optimierte Web-Lösungen für den Unternehmenserfolg. Modernes Webdesign, SEO & Automation aus Österreich."
        },
        en: {
            title: "N3XT LEVEL | AI Web Solutions",
            desc: "AI-optimized web solutions for business success. Modern web design, SEO & Automation from Austria."
        },
        hu: {
            title: "N3XT LEVEL | AI Weboldal Megoldások",
            desc: "MI-optimalizált webes megoldások az üzleti sikerért. Modern webdizájn, SEO és automatizálás Ausztriából."
        }
    };
    const currentMeta = metaData[currentLang] || metaData.de;

    document.title = currentMeta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', currentMeta.desc);
    document.documentElement.lang = currentLang;

    const renderComp = (id, fn) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = fn ? fn(currentLang) : '';
    };

    renderComp('navbar-container', Navbar);
    renderComp('hero-container', Hero);
    renderComp('services-container', Services);
    renderComp('process-container', Process);
    renderComp('premium-content-container', PremiumContent);
    renderComp('stats-container', Stats);
    renderComp('about-me-container', AboutMe);
    renderComp('portfolio-container', Portfolio);
    renderComp('booking-container', Booking);
    renderComp('contact-container', Contact);
    renderComp('footer-container', Footer);

    // Initialize Particles (Canvas)
    requestAnimationFrame(() => initParticles('neural-canvas'));

    // 1. Language Switcher Logic
    const flags = document.querySelectorAll('.current-lang-flag');
    const texts = document.querySelectorAll('.current-lang-text');
    const btns = document.querySelectorAll('.lang-switch-btn');

    let flag = '🇦🇹'; let txt = 'DE';
    if (currentLang === 'hu') { flag = '🇭🇺'; txt = 'HU'; }
    else if (currentLang === 'en') { flag = '🇬🇧'; txt = 'EN'; }

    flags.forEach(el => el.innerText = flag);
    texts.forEach(el => el.innerText = txt);

    btns.forEach(btn => {
        btn.onclick = () => {
            if (currentLang === 'de') currentLang = 'en';
            else if (currentLang === 'en') currentLang = 'hu';
            else currentLang = 'de';

            localStorage.setItem('n3xt_lang', currentLang);
            updateUI();
        };
    });

    setupCalendar();
    setupContactForm();
    setupStats();
    setupReveal();

    // Update Chatbot Placeholder
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        const ph = {
            de: "Schreiben Sie eine Nachricht...",
            en: "Type a message...",
            hu: "Írj egy üzenetet..."
        };
        chatInput.placeholder = ph[currentLang] || ph.de;
    }

    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    document.querySelectorAll('.protected-email').forEach(el => {
        const u = el.dataset.u;
        const d = el.dataset.d;
        if (u && d) el.innerHTML = `<a href="mailto:${u}@${d}" class="hover:text-accent transition-colors">${u}@${d}</a>`;
    });
};

// --- Initial Setup ---

document.getElementById('chatbot-place').innerHTML = Chatbot;
document.getElementById('cookie-banner-container').innerHTML = CookieBanner;

updateUI();

document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[aria-label="Menu"]');
    if (btn) {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('hidden');
    }
});

const initChatbot = () => {
    const toggle = document.getElementById('chat-toggle');
    const windowEl = document.getElementById('chat-window');
    const close = document.getElementById('close-chat');
    const msgs = document.getElementById('chat-messages');
    const opts = document.getElementById('chat-options');

    if (!toggle || !windowEl) return;

    let isOpen = false;
    let hasGreeted = false;

    // --- Helpers ---
    const showTyping = () => {
        const id = 'typing-indicator';
        if (document.getElementById(id)) return;
        const div = document.createElement('div');
        div.id = id;
        div.className = 'flex justify-start animate-fade-in my-2';
        div.innerHTML = `<div class="bg-white/10 text-gray-200 rounded-2xl rounded-tl-none px-4 py-2 text-sm flex gap-1 items-center">
            <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
            <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
            <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
        </div>`;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    };

    const hideTyping = () => {
        const el = document.getElementById('typing-indicator');
        if (el) el.remove();
    };

    const addMsg = (sender, text) => {
        hideTyping();
        const div = document.createElement('div');
        div.className = `flex ${sender === 'bot' ? 'justify-start' : 'justify-end'} animate-fade-in my-2`;
        div.innerHTML = `<div class="max-w-[85%] rounded-2xl px-4 py-2 text-sm ${sender === 'bot' ? 'bg-white/10 text-gray-200 rounded-tl-none' : 'bg-accent text-white rounded-tr-none'} shadow-sm">${text}</div>`;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    };

    const navTo = (id) => {
        toggleFunc(); // Close chat
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    };

    const showOpts = (options) => {
        opts.innerHTML = '';
        options.forEach(o => {
            const b = document.createElement('button');
            b.className = 'bg-white/5 border border-white/10 hover:border-accent text-xs text-white px-3 py-2 rounded-lg mb-1 mr-1 transition-colors animate-fade-in';
            // Support both old 'text' and new 'label.{lang}' formats
            const txt = o.label ? (o.label[currentLang] || o.label.de) : o.text;
            b.innerHTML = txt;
            b.onclick = () => {
                addMsg('user', b.innerText);
                opts.innerHTML = ''; // Clear triggers
                handleAction(o.val || o.action);
            };
            opts.appendChild(b);
        });
    };

    // --- Decision Engine ---
    const handleAction = (action) => {
        showTyping();

        setTimeout(() => {
            let resp = "";
            let nextOpts = [];

            // 1. Booking
            if (action === 'booking') {
                const t = { de: "Ich öffne den Kalender für Sie.", en: "Opening the calendar for you.", hu: "Megnyitom a naptárat." };
                addMsg('bot', t[currentLang] || t.de);
                setTimeout(() => navTo('booking'), 1000);
                return;
            }

            // 2. Pricing
            else if (action === 'pricing') {
                const t = {
                    de: "Das hängt vom Projekt ab. Was interessiert Sie?",
                    en: "That depends on the project. What are you interested in?",
                    hu: "Ez a projekttől függ. Mi érdekli?"
                };
                resp = t[currentLang] || t.de;
                nextOpts = [
                    { val: 'price_web', label: { de: 'Webseite', en: 'Website', hu: 'Weboldal' } },
                    { val: 'price_seo', label: { de: 'SEO & Ranking', en: 'SEO & Ranking', hu: 'SEO & Rangsor' } },
                    { val: 'price_ai', label: { de: 'AI & Automation', en: 'AI & Automation', hu: 'AI & Automatizálás' } }
                ];
            }
            // Sub-Pricing
            else if (action === 'price_web') {
                const t = { de: "Eine professionelle Webseite startet bei uns ab **€1.490**.", en: "A professional website starts at **€1,490**.", hu: "Egy profi weboldal nálunk **€1.490**-tól indul." };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'booking', label: { de: 'Termin buchen', en: 'Book Meeting', hu: 'Időpontfoglalás' } }];
            }
            else if (action === 'price_seo') {
                const t = { de: "SEO-Pakete starten ab **€490 / Monat**.", en: "SEO packages start at **€490 / month**.", hu: "SEO csomagok **€490 / hó**-tól indulnak." };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'booking', label: { de: 'Analyse anfordern', en: 'Request Audit', hu: 'Elemzés kérése' } }];
            }
            else if (action === 'price_ai') {
                const t = { de: "AI-Lösungen sind sehr individuell. Lassen Sie uns darüber sprechen.", en: "AI solutions are custom. Let's talk about it.", hu: "Az AI megoldások egyediek. Beszéljünk róla!" };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'booking', label: { de: 'Beratung buchen', en: 'Book Consult', hu: 'Konzultáció' } }];
            }

            // 3. Services
            else if (action === 'services') {
                const t = { de: "Wir bieten Webdesign, SEO und AI-Automatisierung. Wohin soll es gehen?", en: "We offer Web Design, SEO, and AI Automation. Where to?", hu: "Webdizájnt, SEO-t és AI automatizációt kínálunk. Hová lépjünk?" };
                resp = t[currentLang] || t.de;
                nextOpts = [
                    { val: 'nav_portfolio', label: { de: 'Zum Portfolio', en: 'Go to Portfolio', hu: 'Portfólió' } },
                    { val: 'nav_services', label: { de: 'Zu den Leistungen', en: 'Go to Services', hu: 'Szolgáltatások' } }
                ];
            }

            // 3.5 Duration / Time
            else if (action === 'duration') {
                const t = {
                    de: "Das ist individuell, da wir für jeden Kunden maßgeschneiderte Lösungen erstellen. Eine stilvolle Basis-Webseite ist jedoch meist in **1 Woche** fertig.",
                    en: "This varies, as we create custom solutions for every client. However, a stylish basic website is usually ready in **1 week**.",
                    hu: "Ez egyéni, mivel minden ügyfelünknek testreszabott weboldalt készítünk. Egy stílusos, letisztult alap weblap átlagosan **1 hét** alatt készül el."
                };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'booking', label: { de: 'Projekt starten', en: 'Start Project', hu: 'Projekt indítása' } }];
            }

            // 3.6 Location
            else if (action === 'location') {
                const t = {
                    de: "Unser Sitz ist in Stockerau, aber wir arbeiten weltweit online. Persönliche Treffen sind im Raum Wien möglich.",
                    en: "We are based in Stockerau, but work online globally. Personal meetings are possible in the Vienna area.",
                    hu: "Székhelyünk Stockerauban van, de online bárhol elérhetőek vagyunk. Személyes találkozóra is van lehetőség Bécs környékén."
                };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'booking', label: { de: 'Termin vereinbaren', en: 'Schedule Meeting', hu: 'Találkozó egyeztetése' } }];
            }

            // 3.7 Support
            else if (action === 'support') {
                const t = {
                    de: "Ja! Wir bieten Wartungspakete an, damit Ihre Webseite immer sicher und aktuell bleibt.",
                    en: "Yes! We offer maintenance packages to keep your website safe and up-to-date.",
                    hu: "Igen! Karbantartási csomagjainkkal biztosítjuk, hogy weboldala mindig biztonságos és naprakész legyen."
                };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'pricing', label: { de: 'Preise ansehen', en: 'See Pricing', hu: 'Árak megtekintése' } }];
            }

            // 3.8 Guarantee
            else if (action === 'guarantee') {
                const t = {
                    de: "Wir bieten volle Gewährleistung auf unsere technische Arbeit. Fehler werden kostenlos behoben.",
                    en: "We offer a full warranty on our technical work. Bugs are fixed for free.",
                    hu: "Minden munkánkra garanciát vállalunk. Ha technikai hiba lépne fel, azt ingyenesen javítjuk."
                };
                resp = t[currentLang] || t.de;
            }

            // 4. Navigation
            else if (action.startsWith('nav_')) {
                const target = action.split('_')[1]; // e.g. 'portfolio'
                const t = { de: "Gern! Ich bringe Sie hin.", en: "Sure! Taking you there.", hu: "Máris odaviszem." };
                addMsg('bot', t[currentLang] || t.de);
                setTimeout(() => navTo(target), 1000);
                return;
            }

            // Unknown
            else {
                resp = "...";
            }

            addMsg('bot', resp);
            if (nextOpts.length > 0) showOpts(nextOpts);

        }, 800); // 800ms Typing delay
    };

    // --- Input Processing (Keyword Matching) ---
    const processInput = (text) => {
        const lower = text.toLowerCase();

        // 1. Specific Questions (High Priority)
        // Duration
        if (lower.includes('dauer') || lower.includes('lange') || lower.includes('long') || lower.includes('time') || lower.includes('idő') || lower.includes('mikor') || lower.includes('fertig')) {
            handleAction('duration');
            return;
        }
        // Location
        if (lower.includes('wo') || lower.includes('where') || lower.includes('hol') || lower.includes('cím') || lower.includes('address') || lower.includes('adresse') || lower.includes('ort') || lower.includes('hely') || lower.includes('meet') || lower.includes('talál') || lower.includes('treffen')) {
            handleAction('location');
            return;
        }
        // Support
        if (lower.includes('wartung') || lower.includes('support') || lower.includes('karbantart') || lower.includes('update') || lower.includes('frissít') || lower.includes('maintain') || lower.includes('pfleg')) {
            handleAction('support');
            return;
        }
        // Guarantee
        if (lower.includes('garantie') || lower.includes('guarantee') || lower.includes('garancia') || lower.includes('gewähr') || lower.includes('biztos')) {
            handleAction('guarantee');
            return;
        }

        // 2. Action Intents
        // Booking
        if (lower.includes('termin') || lower.includes('book') || lower.includes('időpont') || lower.includes('naptár')) {
            handleAction('booking');
            return;
        }
        // Pricing (General)
        if (lower.includes('preis') || lower.includes('cost') || lower.includes('ár') || lower.includes('budget') || lower.includes('euro') || lower.includes('kerül')) {
            handleAction('pricing');
            return;
        }

        // 3. Category / Service Intents (Lower Priority than specific Qs)
        if (lower.includes('web') || lower.includes('design') || lower.includes('site')) {
            handleAction('price_web');
            return;
        }
        if (lower.includes('seo') || lower.includes('search') || lower.includes('google') || lower.includes('rank')) {
            handleAction('price_seo');
            return;
        }
        if (lower.includes('ai') || lower.includes('automat') || lower.includes('intel')) {
            handleAction('price_ai');
            return;
        }

        // 4. Navigation / Info
        if (lower.includes('ref') || lower.includes('beispiel') || lower.includes('example') || lower.includes('példa') || lower.includes('work') || lower.includes('arb') || lower.includes('munka') || lower.includes('portfolio') || lower.includes('case')) {
            handleAction('nav_portfolio');
            return;
        }
        if (lower.includes('email') || lower.includes('kontakt') || lower.includes('mail') || lower.includes('contact')) {
            addMsg('bot', 'info@n3xt-level.eu');
            return;
        }

        // 5. Greetings
        if (lower.includes('hallo') || lower.includes('hi') || lower.includes('szia') || lower.includes('hello')) {
            const t = { de: "Hallo! Wie kann ich helfen?", en: "Hello! How can I help?", hu: "Szia! Miben segíthetek?" };
            addMsg('bot', t[currentLang] || t.de);
            return;
        }

        // 3. Fallback
        showTyping();
        setTimeout(() => {
            const t = {
                de: "Entschuldigung, ich bin ein einfacher Bot. Bitte wählen Sie eine Option:",
                en: "Sorry, I am a simple bot. Please choose an option:",
                hu: "Bocsánat, én csak egy egyszerű robot vagyok. Kérlek válassz:"
            };
            addMsg('bot', t[currentLang] || t.de);
            showOpts([
                { val: 'booking', label: { de: '🗓️ Termin', en: '🗓️ Booking', hu: '🗓️ Időpont' } },
                { val: 'pricing', label: { de: '💰 Preise', en: '💰 Pricing', hu: '💰 Árak' } },
                { val: 'services', label: { de: '🚀 Leistungen', en: '🚀 Services', hu: '🚀 Szolgáltatások' } }
            ]);
        }, 1000);
    };

    const form = document.getElementById('chat-input-form');
    const input = document.getElementById('chat-input');
    if (form && input) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const val = input.value.trim();
            if (!val) return;
            addMsg('user', val);
            input.value = '';
            processInput(val);
        };
    }

    // --- Main Toggle ---
    const toggleFunc = () => {
        isOpen = !isOpen;
        if (isOpen) {
            windowEl.classList.remove('invisible', 'opacity-0', 'scale-90');
            windowEl.classList.add('opacity-100', 'scale-100');
            toggle.querySelectorAll('span').forEach(s => s.style.display = 'none');

            if (!hasGreeted) {
                showTyping();
                setTimeout(() => {
                    const t = { de: "Hallo! 👋 Wie kann ich helfen?", en: "Hello! 👋 How can I help?", hu: "Szia! 👋 Miben segíthetek?" };
                    addMsg('bot', t[currentLang] || t.de);
                    showOpts([
                        { val: 'booking', label: { de: '🗓️ Termin', en: '🗓️ Booking', hu: '🗓️ Időpont' } },
                        { val: 'pricing', label: { de: '💰 Preise', en: '💰 Pricing', hu: '💰 Árak' } },
                        { val: 'services', label: { de: '🚀 Leistungen', en: '🚀 Services', hu: '🚀 Szolgáltatások' } }
                    ]);
                    hasGreeted = true;
                }, 1000);
            }
        } else {
            windowEl.classList.add('invisible', 'opacity-0', 'scale-90');
            windowEl.classList.remove('opacity-100', 'scale-100');
        }
    };

    toggle.onclick = toggleFunc;
    if (close) close.onclick = toggleFunc;
};
initChatbot();

const initGlobals = () => {
    document.addEventListener('click', e => {
        const open = e.target.closest('[data-modal-open]');
        if (open) {
            const m = document.getElementById(open.dataset.modalOpen);
            if (m) { m.classList.add('active'); document.body.style.overflow = 'hidden'; }
        }
        if (e.target.closest('[data-modal-close]') || e.target.classList.contains('modal-backdrop')) {
            document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = '';
        }
    });

    const banner = document.getElementById('cookie-banner');
    if (banner && !localStorage.getItem('cookieConsent')) {
        setTimeout(() => banner.classList.remove('translate-y-full'), 1000);
    }
    const accept = document.getElementById('cookie-accept');
    if (accept) accept.onclick = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        if (banner) banner.classList.add('translate-y-full');
    };
    const decline = document.getElementById('cookie-decline');
    if (decline) decline.onclick = () => {
        localStorage.setItem('cookieConsent', 'declined');
        if (banner) banner.classList.add('translate-y-full');
    };
};
initGlobals();
