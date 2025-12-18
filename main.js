import './style.css';

// Import Components
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

// Render Components
document.getElementById('hero-container').innerHTML = Hero('de');
document.getElementById('services-container').innerHTML = Services;
document.getElementById('process-container').innerHTML = Process;
document.getElementById('premium-content-container').innerHTML = PremiumContent;
document.getElementById('stats-container').innerHTML = Stats;
document.getElementById('about-me-container').innerHTML = AboutMe;
document.getElementById('portfolio-container').innerHTML = Portfolio;
document.getElementById('booking-container').innerHTML = Booking;
document.getElementById('contact-container').innerHTML = Contact;
document.getElementById('footer-container').innerHTML = Footer;
document.getElementById('chatbot-place').innerHTML = Chatbot;
document.getElementById('cookie-banner-container').innerHTML = CookieBanner;

// Initialize animations and Logic
const initLogic = () => {
    // --- Email Obfuscation (Security) ---
    const protectEmails = () => {
        const mailElements = document.querySelectorAll('.protected-email');
        mailElements.forEach(el => {
            const user = el.getAttribute('data-u');
            const domain = el.getAttribute('data-d');
            if (user && domain) {
                const email = `${user}@${domain}`;
                el.innerHTML = `<a href="mailto:${email}" class="hover:text-accent transition-colors">${email}</a>`;
            }
        });
    };
    protectEmails();

    // --- Custom Internal Booking Logic ---
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const timeSelection = document.getElementById('timeSelection');
    const selectedDateText = document.getElementById('selectedDateText');
    const confirmBookingBtn = document.getElementById('confirmBookingBtn');

    // State
    let currentDate = new Date();
    let selectedDay = null;
    let selectedTime = null;

    const renderCalendar = () => {
        if (!calendarDays || !currentMonthYear) return;

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        // German Month Names
        const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        currentMonthYear.innerText = `${monthNames[month]} ${year}`;

        // Days
        const firstDay = new Date(year, month, 1).getDay();
        const firstDayIndex = firstDay === 0 ? 6 : firstDay - 1; // Mon=0
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarDays.innerHTML = '';

        // Empty slots
        for (let i = 0; i < firstDayIndex; i++) {
            calendarDays.appendChild(document.createElement('div'));
        }

        // Days
        for (let i = 1; i <= daysInMonth; i++) {
            const dayBtn = document.createElement('button');
            dayBtn.innerText = i;
            dayBtn.classList.add('w-10', 'h-10', 'rounded-full', 'mx-auto', 'flex', 'items-center', 'justify-center', 'text-gray-300', 'hover:bg-white/10', 'transition-all', 'text-sm', 'font-medium');

            // Today?
            const today = new Date();
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayBtn.classList.add('border', 'border-accent', 'text-accent');
            }

            // Click Handler
            dayBtn.addEventListener('click', () => {
                // Remove active class from others
                calendarDays.querySelectorAll('button').forEach(b => b.classList.remove('bg-accent', 'text-white'));

                // Add active
                dayBtn.classList.add('bg-accent', 'text-white');
                selectedDay = i;

                // Show times
                timeSelection.classList.remove('hidden');
                selectedDateText.innerText = `${i}. ${monthNames[month]} ${year}`;
            });

            calendarDays.appendChild(dayBtn);
        }
    };

    // Init Calendar
    if (calendarDays) {
        renderCalendar();

        prevMonthBtn?.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextMonthBtn?.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        // Time Slots
        const timeSlots = document.querySelectorAll('.time-slot');
        timeSlots.forEach(slot => {
            slot.addEventListener('click', () => {
                timeSlots.forEach(s => s.classList.remove('bg-accent', 'text-white', 'border-accent'));
                slot.classList.add('bg-accent', 'text-white', 'border-accent');
                selectedTime = slot.innerText;
            });
        });

        // Confirm Action -> Open Modal
        confirmBookingBtn?.addEventListener('click', () => {
            if (!selectedTime) {
                alert("Bitte wählen Sie eine Uhrzeit aus.");
                return;
            }

            // Generate Message with Date/Time
            const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
            const msg = `Ich möchte einen Beratungstermin anfragen.\n\nDatum: ${selectedDay}. ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}\nUhrzeit: ${selectedTime}\n\nMeine Nachricht:`;

            // Populate Modal Message
            const bookingModal = document.getElementById('bookingModal');
            const bookingMessage = document.getElementById('bookingMessage');

            if (bookingModal && bookingMessage) {
                bookingMessage.value = msg;
                bookingModal.classList.remove('hidden');
            }
        });
    }

    // --- Booking Modal Logic ---
    const bookingModal = document.getElementById('bookingModal');
    const closeBookingModalBtn = document.getElementById('closeBookingModal');
    const bookingModalBackdrop = document.getElementById('bookingModalBackdrop');
    const bookingForm = document.getElementById('bookingForm');
    const bookingFormStatus = document.getElementById('bookingFormStatus');

    const openBookingModal = (prefillMessage = "") => {
        const bookingMessage = document.getElementById('bookingMessage');
        if (bookingMessage && prefillMessage) {
            bookingMessage.value = prefillMessage + bookingMessage.value;
        }
        if (bookingModal) bookingModal.classList.remove('hidden');
    };

    const closeBookingModal = () => {
        if (bookingModal) bookingModal.classList.add('hidden');
    };

    if (closeBookingModalBtn) closeBookingModalBtn.addEventListener('click', closeBookingModal);
    if (bookingModalBackdrop) bookingModalBackdrop.addEventListener('click', closeBookingModal);

    // Form Handling (Booking Modal)
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;

            submitBtn.disabled = true;
            submitBtn.innerText = "Wird gesendet...";
            submitBtn.classList.add('opacity-70');

            const formData = new FormData(bookingForm);

            try {
                const response = await fetch(bookingForm.action, {
                    method: bookingForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    bookingFormStatus.innerHTML = '<span class="text-green-500 font-bold"><i class="fas fa-check-circle"></i> Anfrage erfolgreich gesendet!</span>';
                    bookingFormStatus.classList.remove('hidden');
                    bookingForm.reset();
                    setTimeout(() => {
                        closeBookingModal();
                        bookingFormStatus.classList.add('hidden');
                    }, 2000);
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        bookingFormStatus.innerHTML = `<span class="text-red-500">${data["errors"].map(error => error["message"]).join(", ")}</span>`;
                    } else {
                        bookingFormStatus.innerHTML = '<span class="text-red-500">Oops! Es ist ein Fehler aufgetreten.</span>';
                    }
                    bookingFormStatus.classList.remove('hidden');
                }
            } catch (error) {
                bookingFormStatus.innerHTML = '<span class="text-red-500">Netzwerkfehler. Bitte versuchen Sie es später erneut.</span>';
                bookingFormStatus.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
                submitBtn.classList.remove('opacity-70');
            }
        });
    }

    // --- Chatbot Logic ---
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatOptions = document.getElementById('chat-options');
    let isChatOpen = false;
    let hasGreeted = false;

    const toggleChat = () => {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            chatWindow.classList.remove('invisible', 'opacity-0', 'scale-90');
            chatWindow.classList.add('opacity-100', 'scale-100');
            // Remove notification dot
            const dots = chatToggle.querySelectorAll('span');
            dots.forEach(d => d.style.display = 'none');

            if (!hasGreeted) {
                setTimeout(() => botTyping(), 500);
                setTimeout(() => {
                    addMessage('bot', 'Hallo! 👋 Ich bin der N3xt Level AI Assistent.');
                }, 1500);
                setTimeout(() => botTyping(), 2000);
                setTimeout(() => {
                    addMessage('bot', 'Wie kann ich Ihnen heute helfen?');
                    showOptions([
                        { text: '🗓️ Termin buchen', action: 'booking' },
                        { text: '💰 Preise anfragen', action: 'pricing' },
                        { text: '🚀 Webdesign Infos', action: 'webdesign' }
                    ]);
                    hasGreeted = true;
                }, 3000);
            }
        } else {
            chatWindow.classList.add('invisible', 'opacity-0', 'scale-90');
            chatWindow.classList.remove('opacity-100', 'scale-100');
        }
    };

    if (chatToggle) chatToggle.addEventListener('click', toggleChat);
    if (closeChat) closeChat.addEventListener('click', toggleChat);

    const addMessage = (sender, text) => {
        // Remove typing indicator if exists
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) typingIndicator.remove();

        const msgDiv = document.createElement('div');
        msgDiv.className = `flex ${sender === 'bot' ? 'justify-start' : 'justify-end'} animate-fade-in`;

        const bubble = document.createElement('div');
        bubble.className = `max-w-[80%] rounded-2xl px-4 py-2 text-sm ${sender === 'bot'
            ? 'bg-white/10 text-gray-200 rounded-tl-none'
            : 'bg-accent text-white rounded-tr-none'
            }`;
        bubble.innerText = text;

        msgDiv.appendChild(bubble);
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const botTyping = () => {
        const msgDiv = document.createElement('div');
        msgDiv.id = 'typing-indicator';
        msgDiv.className = 'flex justify-start animate-fade-in';
        msgDiv.innerHTML = `
            <div class="bg-white/10 text-gray-200 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
            </div>
        `;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const showOptions = (options) => {
        chatOptions.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 text-xs text-white px-3 py-2 rounded-lg transition-all mb-1';
            btn.innerText = opt.text;
            btn.addEventListener('click', () => handleOptionClick(opt));
            chatOptions.appendChild(btn);
        });
    };

    const handleOptionClick = (opt) => {
        addMessage('user', opt.text);
        chatOptions.innerHTML = ''; // Clear options

        botTyping();

        setTimeout(() => {
            if (opt.action === 'booking') {
                addMessage('bot', 'Eine hervorragende Wahl! Ich öffne den Terminkalender für Sie...');
                setTimeout(() => {
                    toggleChat();
                    openBookingModal("Referenz: Chatbot Gespräch\n");
                }, 1500);
            } else if (opt.action === 'pricing') {
                addMessage('bot', 'Unsere Projekte starten ab €1.500 für professionelle Webseiten. Da jede Lösung maßgeschneidert ist, erstelle ich Ihnen gerne ein genaues Angebot.');
                showOptions([
                    { text: '🗓️ Beratungsgespräch buchen', action: 'booking' },
                    { text: '📧 Angebot per Mail', action: 'email_offer' }
                ]);
            } else if (opt.action === 'webdesign') {
                addMessage('bot', 'Wir nutzen modernste KI-gestützte Technologien für extrem schnelle Ladezeiten und Top-Rankings bei Google.');
                showOptions([
                    { text: '✨ Portfolio ansehen', action: 'portfolio' },
                    { text: '🗓️ Beratungstermin', action: 'booking' }
                ]);
            } else if (opt.action === 'email_offer') {
                addMessage('bot', 'Gerne! Bitte nutzen Sie unser Kontaktformular weiter unten, um uns Ihre Eckdaten zu senden.');
                setTimeout(() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    toggleChat();
                }, 2000);
            } else if (opt.action === 'portfolio') {
                addMessage('bot', 'Ich scrolle Sie zu unseren Referenzen...');
                setTimeout(() => {
                    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                    toggleChat();
                }, 1500);
            }
        }, 1000);
    };

    // --- Cookie Banner Logic & Google Analytics ---
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept');
    const cookieDeclineBtn = document.getElementById('cookie-decline');

    // WICHTIG: Hier später Ihre eigene ID einfügen!
    // IMPORTANT: Replace this placeholder with your real ID later!
    const GA_MEASUREMENT_ID = 'G-345GNE46LZ';

    const loadGoogleAnalytics = () => {
        if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
            console.log('Google Analytics: Placeholder ID detected. Script not loaded.');
            return;
        }

        // Prevent duplicate loading
        if (document.getElementById('ga-script')) return;

        console.log('Google Analytics: Loading...');

        // Inject Script
        const script = document.createElement('script');
        script.id = 'ga-script';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Init Config
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, { 'anonymize_ip': true });
    };

    // Check if previously accepted
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        loadGoogleAnalytics();
    } else if (cookieBanner && !localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieBanner.classList.remove('translate-y-full');
        }, 1000); // 1 second delay
    }

    const hideCookieBanner = () => {
        if (cookieBanner) cookieBanner.classList.add('translate-y-full');
    };

    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            hideCookieBanner();
            loadGoogleAnalytics(); // Start tracking immediately
        });
    }

    if (cookieDeclineBtn) {
        cookieDeclineBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            hideCookieBanner();
        });
    }

    // --- Stats Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    const statsSection = document.getElementById('stats');
    let hasAnimated = false;

    const animateStats = () => {
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000; // ms
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                // Format: if target is small float (like 0.4), show 1 decimal, else no decimal
                if (target % 1 !== 0) {
                    counter.innerText = current.toFixed(1);
                } else {
                    counter.innerText = Math.round(current);
                }
            }, stepTime);
        });
    };

    // --- Language Switcher Logic (DE -> EN -> HU) ---
    const langSwitchBtn = document.getElementById('lang-switch');
    const flagSpan = document.getElementById('current-lang-flag');
    const langTextSpan = document.getElementById('current-lang-text');

    let currentLang = localStorage.getItem('n3xt_lang') || 'de';

    const updateUI = () => {
        // Update Navbar Button
        if (currentLang === 'hu') {
            flagSpan.innerText = '🇭🇺';
            langTextSpan.innerText = 'HU';
        } else if (currentLang === 'en') {
            flagSpan.innerText = '🇬🇧';
            langTextSpan.innerText = 'EN';
        } else {
            flagSpan.innerText = '🇦🇹';
            langTextSpan.innerText = 'DE';
        }

        // Re-render Dynamic Components
        // Hero is now dynamic
        const heroContainer = document.getElementById('hero-container');
        if (heroContainer) {
            heroContainer.innerHTML = Hero(currentLang);

            // Re-attach scroll listeners or other logic if needed? 
            // Hero buttons use inline onclick, so that is fine.
            // Reveal animations need to be re-observed
            const newReveals = heroContainer.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });
            newReveals.forEach(el => observer.observe(el));
        }
    };

    // Initial Render UI update 
    updateUI();

    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            // Cycle: DE -> EN -> HU -> DE
            if (currentLang === 'de') currentLang = 'en';
            else if (currentLang === 'en') currentLang = 'hu';
            else currentLang = 'de';

            localStorage.setItem('n3xt_lang', currentLang);
            updateUI();
        });
    }

    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateStats();
                    hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
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
