import './style.css';

// Import Components
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { PremiumContent } from './components/PremiumContent.js';
import { AboutMe } from './components/AboutMe.js';
import { Portfolio } from './components/Portfolio.js';
import { Booking } from './components/Booking.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

// Render Components
document.getElementById('hero-container').innerHTML = Hero;
document.getElementById('services-container').innerHTML = Services;
document.getElementById('premium-content-container').innerHTML = PremiumContent;
document.getElementById('about-me-container').innerHTML = AboutMe;
document.getElementById('portfolio-container').innerHTML = Portfolio;
document.getElementById('booking-container').innerHTML = Booking;
document.getElementById('contact-container').innerHTML = Contact;
document.getElementById('footer-container').innerHTML = Footer;

// Initialize animations and Logic
const initLogic = () => {
    // --- Cal.com Modal Initialization ---
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "30min", { origin: "https://app.cal.com" });

    // Preload styles
    Cal.ns["30min"]("ui", {
        "styles": {
            "branding": {
                "brandColor": "#FF4500"
            }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": "dark"
    });

    // Trigger Logic
    const openBookingModalBtn = document.getElementById('openBookingModal');
    if (openBookingModalBtn) {
        openBookingModalBtn.addEventListener('click', () => {
            Cal.ns["30min"]("modal", {
                calLink: "tamas-horvat-rti5dl/30min",
                config: {
                    "layout": "month_view",
                    "theme": "dark"
                }
            });
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    if (revealElements.length > 0) {
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Trigger once on load
    }

    // Form Handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Wird gesendet...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success State
                    contactForm.reset();
                    submitBtn.style.display = 'none'; // Hide button to prevent resubmission

                    formStatus.innerText = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.';
                    formStatus.classList.remove('hidden', 'opacity-0');
                    formStatus.classList.add('text-accent', 'animate-fade-in');

                } else {
                    // Error State (Server Side)
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        throw new Error('Serverfehler');
                    }
                }
            } catch (error) {
                // Network Error
                formStatus.innerText = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
                formStatus.classList.remove('hidden', 'opacity-0');
                formStatus.classList.add('text-red-500'); // Use red for errors if possible, or accent if tied to theme
            } finally {
                if (!submitBtn.style.display || submitBtn.style.display !== 'none') {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }
            }
        });
    }

    // Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
};

// Global Event Delegation for Modals
document.addEventListener('click', (e) => {
    // Open Modal
    const openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
        const modalId = openBtn.getAttribute('data-modal-open');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close Modal (Button)
    if (e.target.closest('[data-modal-close]')) {
        const modal = e.target.closest('.modal-backdrop');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Close Modal (Outside Click)
    if (e.target.classList.contains('modal-backdrop')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close on ESC key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// Run Init Logic
initLogic();
