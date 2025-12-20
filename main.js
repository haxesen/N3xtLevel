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
import { Blog } from './components/Blog.js';
import { ProjectConfig } from './components/ProjectConfig.js';
import { ContactHub } from './components/ContactHub.js';
// import { Pricing } from './components/Pricing.js';

import { LegalTexts } from './components/LegalTexts.js';
import { Chatbot, initChatbotLogic } from './components/Chatbot.js';
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

            // Switch to Contact Form via Hub
            if (window.hubSelect) window.hubSelect('message');
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

    // Check for pending booking and pre-fill
    const pendingBooking = localStorage.getItem('n3xt_pending_booking');
    if (pendingBooking) {
        try {
            const pb = JSON.parse(pendingBooking);
            const msgArea = form.querySelector('textarea[name="message"]');
            if (msgArea && !msgArea.value) {
                msgArea.value = (currentLang === 'hu' ? `Időpontfoglalás kérés:\nDátum: ${pb.date}\nIdő: ${pb.time}` :
                    (currentLang === 'en' ? `Booking Request:\nDate: ${pb.date}\nTime: ${pb.time}` :
                        `Terminanfrage:\nDatum: ${pb.date}\nUhrzeit: ${pb.time}`)) + "\n\n";
            }
        } catch (e) { console.error(e); }
    }

    form.onsubmit = async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        btn.innerText = currentLang === 'hu' ? 'Küldés...' : (currentLang === 'en' ? 'Sending...' : 'Wird gesendet...');
        btn.disabled = true;

        const formData = new FormData(form);
        const storedBooking = localStorage.getItem('n3xt_pending_booking');
        let bookingDetails = null;

        // Enhance Formspree Data with Booking Info
        if (storedBooking) {
            try {
                bookingDetails = JSON.parse(storedBooking);
                formData.append('Booking Date', bookingDetails.date);
                formData.append('Booking Time', bookingDetails.time);
                formData.append('_subject', `📅 Booking Request: ${bookingDetails.date} @ ${bookingDetails.time}`);
            } catch (err) { console.warn(err); }
        }

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                // 1. Google Calendar Sync (Only if Formspree success)
                if (storedBooking && bookingDetails) {
                    const googlePayload = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        message: formData.get('message'),
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
                }

                // 2. UI Feedback
                form.reset();
                if (successOverlay && formContent) {
                    formContent.classList.add('hidden');
                    successOverlay.classList.remove('hidden');
                    successOverlay.classList.add('flex');

                    // Auto Access close after 4s
                    setTimeout(() => {
                        if (window.closeUnivModal) window.closeUnivModal();
                    }, 4000);
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

// --- Project Calculator Logic ---
window.calcState = { step: 0, type: null, features: [] };

window.toggleSelection = (category, value) => {
    if (category === 'type') {
        window.calcState.type = value;
        document.querySelectorAll('.uic-card-type').forEach(el => {
            if (el.dataset.value === value) {
                el.classList.add('border-accent', 'bg-white/10');
                el.querySelector('.w-3').classList.remove('opacity-0');
            } else {
                el.classList.remove('border-accent', 'bg-white/10');
                el.querySelector('.w-3').classList.add('opacity-0');
            }
        });
    } else if (category === 'feature') {
        const idx = window.calcState.features.indexOf(value);
        if (idx > -1) window.calcState.features.splice(idx, 1);
        else window.calcState.features.push(value);

        const el = document.querySelector(`.uic-card-feat[data-value="${value}"]`);
        if (el) {
            if (idx === -1) {
                el.classList.add('border-accent', 'bg-white/10');
                el.querySelector('.fa-check').classList.remove('opacity-0');
            } else {
                el.classList.remove('border-accent', 'bg-white/10');
                el.querySelector('.fa-check').classList.add('opacity-0');
            }
        }
    }
    window.updateSummary();
};

window.changeStep = (delta) => {
    const newStep = window.calcState.step + delta;
    if (newStep < 0 || newStep > 2) return;
    if (window.calcState.step === 0 && delta > 0 && !window.calcState.type) {
        alert("Bitte wählen Sie zuerst einen Typ aus! / Kérjük válasszon típust!");
        return;
    }
    window.goToStep(newStep);
};

window.goToStep = (step) => {
    // Validation: Cannot skip Step 1
    if (step > 0 && !window.calcState.type) {
        alert(currentLang === 'hu' ? 'Kérjük válasszon típust!' : (currentLang === 'en' ? 'Please select a type!' : 'Bitte wählen Sie zuerst einen Typ aus!'));
        return;
    }

    window.calcState.step = step;
    document.querySelectorAll('.uic-view').forEach((el, idx) => {
        if (idx === step) { el.classList.remove('hidden'); el.classList.add('animate-fade-in'); }
        else { el.classList.add('hidden'); el.classList.remove('animate-fade-in'); }
    });
    const percent = (step / 2) * 100;
    const track = document.getElementById('uic-progress-track');
    if (track) track.style.width = `${percent}%`;

    document.querySelectorAll('.uic-step').forEach((el, idx) => {
        const circle = el.querySelector('div');
        if (idx <= step) {
            el.classList.remove('opacity-40');
            circle.classList.add('bg-accent', 'text-black', 'shadow-glow');
            circle.classList.remove('bg-white/10', 'text-white', 'border-white/10');
        } else {
            el.classList.add('opacity-40');
            circle.classList.remove('bg-accent', 'text-black', 'shadow-glow');
            circle.classList.add('bg-white/10', 'text-white', 'border-white/10');
        }
    });

    const btnBack = document.getElementById('uic-btn-back');
    const btnNext = document.getElementById('uic-btn-next');
    const btnSend = document.getElementById('uic-btn-send');
    if (btnBack) {
        if (step === 0) btnBack.classList.add('hidden');
        else btnBack.classList.remove('hidden');
    }
    if (btnNext && btnSend) {
        if (step === 2) {
            btnNext.classList.add('hidden');
            btnSend.classList.remove('hidden');
            window.updateSummary();
        } else {
            btnNext.classList.remove('hidden');
            btnSend.classList.add('hidden');
        }
    }
};

window.updateSummary = () => {
    const txt = document.getElementById('uic-summary-text');
    if (!txt) return;
    const typeLabel = window.calcState.type ? window.calcState.type.toUpperCase() : '-';
    const feats = window.calcState.features.length > 0 ? window.calcState.features.join(', ') : 'None';
    txt.innerHTML = `<strong>Selected:</strong> ${typeLabel} <br> <span class="text-gray-400 text-xs">${feats}</span>`;
};

window.submitConfig = async () => {
    const name = document.getElementById('uic-name').value;
    const email = document.getElementById('uic-email').value;
    const phone = document.getElementById('uic-phone') ? document.getElementById('uic-phone').value : '';

    if (!name || !email) {
        alert("Name & Email required!");
        return;
    }

    const data = {
        _subject: "🚀 Neuer Projekt-Kalkulator Lead",
        type: window.calcState.type,
        features: window.calcState.features.join(', '),
        name: name,
        email: email,
        phone: phone
    };

    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);

    try {
        const response = await fetch("https://formspree.io/f/mvzppned", {
            method: "POST", body: formData, headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            alert("Danke! Wir melden uns in Kürze.");
            location.reload();
        } else {
            alert("Fehler beim Senden.");
        }
    } catch (error) {
        alert("Netzwerkfehler.");
    }
};


window.openCalculator = () => {
    const modal = document.getElementById('project-config-modal');
    const content = document.getElementById('project-config-content');
    if (modal && content) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
        }, 10);
    }
};

window.closeCalculator = () => {
    const modal = document.getElementById('project-config-modal');
    const content = document.getElementById('project-config-content');
    if (modal && content) {
        modal.classList.add('opacity-0');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
};

// --- Universal Modal Logic (Booking / Contact) ---
const initUniversalModal = () => {
    if (!document.getElementById('univ-modal')) {
        const div = document.createElement('div');
        div.id = 'univ-modal';
        div.className = 'fixed inset-0 z-[100] hidden opacity-0 transition-opacity duration-300';
        div.innerHTML = `
            <div class="absolute inset-0 bg-black/95 backdrop-blur-md" onclick="closeUnivModal()"></div>
            <div class="relative w-full h-full md:h-auto md:max-w-4xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-[#0a0a0a] border border-accent md:rounded-3xl shadow-glow p-0 overflow-y-auto transform scale-95 transition-transform duration-300 flex flex-col max-h-screen" id="univ-content">
                <button onclick="closeUnivModal()" class="absolute top-5 right-5 text-gray-400 hover:text-white transition-all z-50 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md shadow-lg group">
                    <i class="fas fa-times text-lg group-hover:rotate-90 transition-transform duration-300"></i>
                </button>
                <div id="univ-body" class="p-8 md:p-12 relative z-10"></div>
            </div>
        `;
        document.body.appendChild(div);
    }
};

window.closeUnivModal = () => {
    const modal = document.getElementById('univ-modal');
    const content = document.getElementById('univ-content');
    if (modal && content) {
        modal.classList.add('opacity-0');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
};

window.hubSelect = (type, btn) => {
    initUniversalModal(); // Ensure exists
    const modal = document.getElementById('univ-modal');
    const content = document.getElementById('univ-content');
    const body = document.getElementById('univ-body');

    if (!modal || !body) return;

    // Reset & Prepare Content
    body.innerHTML = '';
    const lang = localStorage.getItem('n3xt_lang') || 'de';
    let html = '';

    if (type === 'calendar') {
        html = Booking(lang);
    } else if (type === 'message') {
        html = Contact(lang);
    }

    // CRITICAL FIX: Remove 'reveal' class because intersection observer might not trigger inside modal
    html = html.replace(/reveal/g, '');

    // STYLE FIX: Strip large section padding and background to fit modal elegance
    html = html.replace(/py-32/g, 'py-0');
    html = html.replace(/py-24/g, 'py-0');
    html = html.replace(/py-20/g, 'py-0');

    // Remove Inner Card Styles (Box-in-Box removal)
    html = html.replace(/bg-black/g, '');
    html = html.replace(/bg-\[#0a0a0a\]/g, '');
    html = html.replace(/border-t/g, '');
    html = html.replace(/border border-white\/5/g, '');
    html = html.replace(/border-white\/5/g, '');
    html = html.replace(/shadow-2xl/g, '');
    html = html.replace(/box-shadow-2xl/g, '');
    html = html.replace(/rounded-3xl/g, '');
    html = html.replace(/max-w-[a-z0-9-]+/g, 'w-full'); // Remove inner max-width constraints

    // Remove Orange Glows (cleaner look)
    html = html.replace(/bg-accent\/5/g, 'hidden');
    html = html.replace(/bg-accent\/20/g, 'hidden');

    // Inject HTML directly (skipping regex to avoid mismatches)
    // We wrap it to handle styles if needed
    body.innerHTML = `<div class="w-full modal-inner-content">${html}</div>`;

    // Re-initialize logic
    if (type === 'calendar') setupCalendar();
    if (type === 'message') setupContactForm();

    // Show Modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }, 10);
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
    renderComp('blog-container', Blog);

    renderComp('premium-content-container', PremiumContent);
    renderComp('stats-container', Stats);
    renderComp('about-me-container', AboutMe);
    renderComp('portfolio-container', Portfolio);

    // Unified Contact Hub
    renderComp('contact-hub-container', ContactHub);
    renderComp('calculator-modal-container', ProjectConfig); // Hidden Modal

    renderComp('footer-container', Footer);

    // Update Legal Texts
    const legalTypes = ['impressum', 'datenschutz', 'agb'];
    legalTypes.forEach(type => {
        const contentEl = document.getElementById(`modal-content-${type}`);
        const titleEl = document.getElementById(`modal-title-${type}`);
        if (contentEl) contentEl.innerHTML = LegalTexts[type][currentLang];

        // Update Titles
        const titles = {
            impressum: { de: "Impressum", en: "Legal Disclosure", hu: "Impresszum" },
            datenschutz: { de: "Datenschutzerklärung", en: "Privacy Policy", hu: "Adatvédelmi Nyilatkozat" },
            agb: { de: "Allgemeine Geschäftsbedingungen", en: "Terms & Conditions", hu: "Általános Szerződési Feltételek" }
        };
        if (titleEl) titleEl.innerText = titles[type][currentLang];
    });

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
document.getElementById('cookie-banner-container').innerHTML = CookieBanner(currentLang);

updateUI();

document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[aria-label="Menu"]');
    if (btn) {
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.toggle('hidden');
    }
});

// --- Service Modal Logic ---
const initServiceModal = () => {
    // 1. Create Modal HTML if not exists
    if (!document.getElementById('service-modal')) {
        const modal = document.createElement('div');
        modal.id = 'service-modal';
        modal.className = 'fixed inset-0 z-[60] hidden transition-opacity duration-300 opacity-0 pointer-events-none'; // Start hidden
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onclick="closeServiceModal()"></div>
            <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#0a0a0a] border border-accent rounded-3xl p-8 shadow-glow transform scale-95 transition-all duration-300">
                <button class="absolute top-5 right-5 text-gray-400 hover:text-white transition-all z-50 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md shadow-lg group" onclick="closeServiceModal()">
                    <i class="fas fa-times text-lg group-hover:rotate-90 transition-transform duration-300"></i>
                </button>
                <div id="modal-icon" class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent mx-auto"></div>
                <h3 id="modal-title" class="text-2xl font-bold mb-6 text-white text-center"></h3>
                <ul id="modal-list" class="space-y-3 mb-8 text-gray-300"></ul>
                <button onclick="closeServiceModal(); navTo('contact')" class="w-full bg-accent hover:bg-accent/90 text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group">
                    <span id="modal-btn-text">Interesse?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 2. Data
    const data = {
        web: {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
            de: { title: "Modernes Webdesign", btn: "Jetzt anfragen", points: ["Verkaufspsychologisch optimiert", "Responsive (Handy & Tablet)", "Blitzschnelle Ladezeiten", "SEO-Grundoptimierung"] },
            en: { title: "Modern Web Design", btn: "Inquire Now", points: ["Optimized for conversion", "Fully Responsive (Mobile)", "Blazing fast loading", "Basic SEO included"] },
            hu: { title: "Modern Webdizájn", btn: "Ajánlatkérés", points: ["Eladásra optimalizált felépítés", "Mobil & Tablet barát", "Villámgyors betöltés", "Alap SEO beállítással"] }
        },
        seo: {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`,
            de: { title: "SEO & Ranking", btn: "Beratung buchen", points: ["Top Google-Platzierungen", "Keyword-Analyse", "Technische Optimierung", "Mehr organische Besucher"] },
            en: { title: "SEO & Ranking", btn: "Book Consultation", points: ["Top Google Rankings", "Keyword Analysis", "Technical Optimization", "More organic traffic"] },
            hu: { title: "SEO & Keresőoptimalizálás", btn: "Konzultáció", points: ["Top Google helyezések", "Kulcsszó elemzés", "Technikai optimalizálás", "Több organikus látogató"] }
        },
        ai: {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`,
            de: { title: "KI & Automation", btn: "Lösung finden", points: ["Intelligente Chatbots", "Prozessautomatisierung", "Datenanalyse & Insights", "24/7 Kundenbetreuung"] },
            en: { title: "AI & Automation", btn: "Find Solution", points: ["Intelligent Chatbots", "Process Automation", "Data Analysis & Insights", "24/7 Customer Support"] },
            hu: { title: "AI & Automatizáció", btn: "Megoldás keresése", points: ["Intelligens Chatbotok", "Folyamat automatizálás", "Adatelemzés & Insightok", "0-24 Ügyfélkiszolgálás"] }
        }
    };

    // 3. Global Functions
    window.openServiceModal = (type) => {
        const item = data[type];
        const content = item[currentLang] || item.de;

        document.getElementById('modal-icon').innerHTML = item.icon;
        document.getElementById('modal-title').innerText = content.title;
        document.getElementById('modal-btn-text').innerText = content.btn;

        const list = document.getElementById('modal-list');
        list.innerHTML = content.points.map(p => `
            <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm md:text-base leading-relaxed">${p}</span>
            </li>
        `).join('');

        const el = document.getElementById('service-modal');
        el.classList.remove('hidden', 'pointer-events-none');
        // Small timeout for transition
        setTimeout(() => {
            el.classList.remove('opacity-0');
            el.querySelector('div.transform').classList.remove('scale-95');
            el.querySelector('div.transform').classList.add('scale-100');
        }, 10);
    };

    window.closeServiceModal = () => {
        const el = document.getElementById('service-modal');
        el.classList.add('opacity-0');
        el.querySelector('div.transform').classList.add('scale-95');
        el.querySelector('div.transform').classList.remove('scale-100');
        setTimeout(() => {
            el.classList.add('hidden', 'pointer-events-none');
        }, 300);
    };
};

initChatbotLogic();
initServiceModal();

const GA_ID = 'G-345GNE46LZ';

const loadAnalytics = () => {
    if (document.getElementById('ga-script')) return;
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID, { 'anonymize_ip': true });
    console.log('GA Loaded');
};

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
    const hasConsent = localStorage.getItem('cookieConsent');

    if (banner && !hasConsent) {
        setTimeout(() => banner.classList.remove('translate-y-full'), 1000);
    } else if (hasConsent === 'accepted') {
        loadAnalytics();
    }

    const accept = document.getElementById('cookie-accept');
    if (accept) accept.onclick = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        if (banner) banner.classList.add('translate-y-full');
        loadAnalytics();
    };
    const decline = document.getElementById('cookie-decline');
    if (decline) decline.onclick = () => {
        localStorage.setItem('cookieConsent', 'declined');
        if (banner) banner.classList.add('translate-y-full');
    };
};
initGlobals();
