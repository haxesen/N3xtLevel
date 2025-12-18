import './style.css';

// Import Components
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { Process } from './components/Process.js';
import { PremiumContent } from './components/PremiumContent.js';
import { Stats } from './components/Stats.js';
import { AboutMe } from './components/AboutMe.js';
import { Portfolio } from './components/Portfolio.js';
import { Booking } from './components/Booking.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Chatbot } from './components/Chatbot.js';
import { CookieBanner } from './components/CookieBanner.js';

// --- State Management ---
let currentLang = localStorage.getItem('n3xt_lang') || 'de';
// Store booking details temporarily until form submission
let pendingBooking = null;
// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxoqZlg_LU9S3A36C-Cub7JTJomOkN1YN4KbRMjsCRt2H4wdSmsdgLf7Q_pyofxNM_-/exec";


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

    if (!calendarDays) return; // Exit if booking section not present

    let currentDate = new Date();
    let selectedDay = null;
    let selectedTime = null;

    const render = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // Month Names localized
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

        // Padding
        for (let i = 0; i < padding; i++) {
            calendarDays.appendChild(document.createElement('div'));
        }

        // Days
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 1; i <= daysInMonth; i++) {
            const btn = document.createElement('button');
            btn.innerText = i;

            const checkDate = new Date(year, month, i);

            // Check if past date
            if (checkDate < today) {
                // Disabled State
                btn.className = 'w-10 h-10 rounded-full mx-auto flex items-center justify-center text-gray-700 cursor-default opacity-30';
            } else {
                // Active State
                btn.className = 'w-10 h-10 rounded-full mx-auto flex items-center justify-center text-gray-300 hover:bg-white/10 transition-all text-sm font-medium';

                // Highlight today
                const realToday = new Date();
                if (i === realToday.getDate() && month === realToday.getMonth() && year === realToday.getFullYear()) {
                    btn.classList.add('border', 'border-accent', 'text-accent');
                }

                btn.onclick = () => {
                    // Deselect others
                    calendarDays.querySelectorAll('button').forEach(b => {
                        if (!b.classList.contains('cursor-default')) {
                            b.classList.remove('bg-accent', 'text-white');
                        }
                    });

                    btn.classList.add('bg-accent', 'text-white');
                    selectedDay = i;

                    selectedDateText.innerText = `${i}. ${currentMonthNames[month]} ${year}`;
                    timeSelection.classList.remove('hidden');
                    timeSelection.classList.add('block');
                    timeSelection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                };
            }
            calendarDays.appendChild(btn);
        }
    };

    render();

    if (prevMonthBtn) prevMonthBtn.onclick = () => { currentDate.setMonth(currentDate.getMonth() - 1); render(); };
    if (nextMonthBtn) nextMonthBtn.onclick = () => { currentDate.setMonth(currentDate.getMonth() + 1); render(); };

    // Time Slots
    const slots = document.querySelectorAll('.time-slot');
    slots.forEach(slot => {
        slot.onclick = () => {
            slots.forEach(s => s.classList.remove('bg-accent', 'text-white', 'border-accent'));
            slot.classList.add('bg-accent', 'text-white', 'border-accent');
            selectedTime = slot.innerText;
        };
    });

    // Confirm Logic
    if (confirmBookingBtn) {
        confirmBookingBtn.onclick = () => {
            if (!selectedTime) {
                alert(currentLang === 'hu' ? 'Kérjük válasszon időpontot!' : (currentLang === 'en' ? 'Please select a time!' : 'Bitte wählen Sie eine Uhrzeit!'));
                return;
            }

            // Save Pending Booking Data
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // 1-based
            // Format YYYY-MM-DD for Google Script
            const isoDate = `${year}-${month.toString().padStart(2, '0')}-${selectedDay.toString().padStart(2, '0')}`;

            pendingBooking = {
                date: isoDate,
                time: selectedTime
            };

            // Scroll to Contact Form and prefill
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

        // --- Google Calendar Sync ---
        if (pendingBooking) {
            try {
                const googlePayload = {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    date: pendingBooking.date,
                    time: pendingBooking.time
                };

                // Send to Google Script
                // mode: 'no-cors' is needed because we can't read the response from Google Scripts easily due to CORS policies on redirect,
                // but the request actually goes through!
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(googlePayload)
                });

                // Reset pending booking
                pendingBooking = null;
            } catch (err) {
                console.warn('Calendar sync error (non-fatal):', err);
            }
        }
        // ---------------------------

        try {
            // Send to Formspree (Email)
            const res = await fetch(form.action, {
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
                alert('Error sending message.');
            }
        } catch (err) {
            alert('Network error.');
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
    // 2. Re-render Components
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

    // 1. Language Switcher Logic
    const flagSpan = document.getElementById('current-lang-flag');
    const langTextSpan = document.getElementById('current-lang-text');
    const langBtn = document.getElementById('lang-switch');

    if (flagSpan && langTextSpan) {
        if (currentLang === 'hu') { flagSpan.innerText = '🇭🇺'; langTextSpan.innerText = 'HU'; }
        else if (currentLang === 'en') { flagSpan.innerText = '🇬🇧'; langTextSpan.innerText = 'EN'; }
        else { flagSpan.innerText = '🇦🇹'; langTextSpan.innerText = 'DE'; }
    }

    if (langBtn) {
        langBtn.onclick = () => {
            if (currentLang === 'de') currentLang = 'en';
            else if (currentLang === 'en') currentLang = 'hu';
            else currentLang = 'de';

            localStorage.setItem('n3xt_lang', currentLang);
            updateUI();
        };
    }

    // 3. Re-initialize Logic that depends on DOM
    setupCalendar();
    setupContactForm();
    setupStats();
    setupReveal();

    // Dynamic Year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Email Protection
    document.querySelectorAll('.protected-email').forEach(el => {
        const u = el.dataset.u;
        const d = el.dataset.d;
        if (u && d) el.innerHTML = `<a href="mailto:${u}@${d}" class="hover:text-accent transition-colors">${u}@${d}</a>`;
    });
};

// --- Initial Setup ---

// Render Static Components once
document.getElementById('chatbot-place').innerHTML = Chatbot;
document.getElementById('cookie-banner-container').innerHTML = CookieBanner;

// Initial UI Render
updateUI();

// Mobile Menu Toggle Logic
document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[aria-label="Menu"]');
    if (btn) {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('hidden');
    }
});

// --- Chatbot Logic ---
const initChatbot = () => {
    const toggle = document.getElementById('chat-toggle');
    const windowEl = document.getElementById('chat-window');
    const close = document.getElementById('close-chat');
    const msgs = document.getElementById('chat-messages');
    const opts = document.getElementById('chat-options');

    if (!toggle || !windowEl) return;

    let isOpen = false;
    let hasGreeted = false;

    const toggleFunc = () => {
        isOpen = !isOpen;
        if (isOpen) {
            windowEl.classList.remove('invisible', 'opacity-0', 'scale-90');
            windowEl.classList.add('opacity-100', 'scale-100');
            toggle.querySelectorAll('span').forEach(s => s.style.display = 'none');

            if (!hasGreeted) {
                setTimeout(() => addMsg('bot', currentLang === 'hu' ? 'Szia! 👋 Miben segíthetek?' : 'Hallo! 👋 Wie kann ich helfen?'), 500);
                setTimeout(() => showOpts([
                    { text: currentLang === 'hu' ? '🗓️ Időpont' : (currentLang === 'en' ? '🗓️ Booking' : '🗓️ Termin'), action: 'booking' },
                    { text: currentLang === 'hu' ? '💰 Árak' : (currentLang === 'en' ? '💰 Pricing' : '💰 Preise'), action: 'pricing' }
                ]), 1500);
                hasGreeted = true;
            }
        } else {
            windowEl.classList.add('invisible', 'opacity-0', 'scale-90');
            windowEl.classList.remove('opacity-100', 'scale-100');
        }
    };

    toggle.onclick = toggleFunc;
    if (close) close.onclick = toggleFunc;

    const addMsg = (sender, text) => {
        const div = document.createElement('div');
        div.className = `flex ${sender === 'bot' ? 'justify-start' : 'justify-end'} animate-fade-in my-2`;
        div.innerHTML = `<div class="max-w-[80%] rounded-2xl px-4 py-2 text-sm ${sender === 'bot' ? 'bg-white/10 text-gray-200 rounded-tl-none' : 'bg-accent text-white rounded-tr-none'}">${text}</div>`;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    };

    const showOpts = (options) => {
        opts.innerHTML = '';
        options.forEach(o => {
            const b = document.createElement('button');
            b.className = 'bg-white/5 border border-white/10 hover:border-accent text-xs text-white px-3 py-2 rounded-lg mb-1 mr-1 transition-colors';
            b.innerText = o.text;
            b.onclick = () => {
                addMsg('user', o.text);
                opts.innerHTML = '';
                setTimeout(() => handleAction(o.action), 500);
            };
            opts.appendChild(b);
        });
    };

    const handleAction = (action) => {
        const responses = {
            booking: { de: "Ich öffne den Kalender.", en: "Opening calendar.", hu: "Megnyitom a naptárat." },
            pricing: { de: "Ab €1.500.", en: "Starting at €1,500.", hu: "€1.500-tól kezdődően." }
        };
        const txt = responses[action][currentLang] || responses[action].de;
        addMsg('bot', txt);

        if (action === 'booking') {
            setTimeout(() => {
                toggleFunc();
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }
    };
};
initChatbot();

// --- Cookie Banner & Modal Global Logic ---
const initGlobals = () => {
    // Modal Delegation
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

    // Cookie Values
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
