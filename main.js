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
import { TechStack } from './components/TechStack.js';
import { ContactHub } from './components/ContactHub.js';
import { Pricing } from './components/Pricing.js';

import { LegalTexts } from './components/LegalTexts.js';
import { Chatbot, initChatbotLogic } from './components/Chatbot.js';
import { CookieBanner } from './components/CookieBanner.js';
import { initParticles } from './components/Particles.js';

// --- State Management ---
let currentLang = localStorage.getItem('n3xt_lang') || 'de';
// --- Helper Functions ---


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

// 2. Contact Form Logic (Legacy removed)
// Please use window.setupContactForm defined below.

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
            const iconContainer = el.querySelector('div.w-12');
            const checkCircle = el.querySelector('.uic-check-circle');

            if (el.dataset.value === value) {
                // Active State
                el.classList.add('border-accent', 'bg-white/10');
                if (checkCircle) checkCircle.classList.remove('opacity-0');

                if (iconContainer) {
                    iconContainer.classList.remove('bg-accent/10', 'text-accent');
                    iconContainer.classList.add('bg-accent', 'text-black');
                }
            } else {
                // Inactive State
                el.classList.remove('border-accent', 'bg-white/10');
                if (checkCircle) checkCircle.classList.add('opacity-0');

                if (iconContainer) {
                    iconContainer.classList.add('bg-accent/10', 'text-accent');
                    iconContainer.classList.remove('bg-accent', 'text-black');
                }
            }
        });
    } else if (category === 'feature') {
        const idx = window.calcState.features.indexOf(value);
        const isSelecting = idx === -1;

        if (idx > -1) window.calcState.features.splice(idx, 1);
        else window.calcState.features.push(value);

        // Dependency Logic (Maintenance <-> Automation)
        if (value === 'maintenance' && isSelecting) {
            // If Maintenance selected -> Ensure Automation is ON
            if (!window.calcState.features.includes('automation')) {
                // Trigger toggle for automation (which will add it)
                setTimeout(() => window.toggleSelection('feature', 'automation'), 50);
                const msg = currentLang === 'hu' ? 'A karbantartás mellé hozzáadtuk az Automatizálás csomagot (Szükséges).' :
                    (currentLang === 'de' ? 'Wartung erfordert Automatisierung. Hinzugefügt!' : 'Maintenance requires Automation. Added!');
                // alert(msg); // Optional: Less obtrusive without alert, but clear UX needed.
            }
        }

        if (value === 'automation' && !isSelecting) {
            // If Automation removed -> Remove Maintenance if active
            if (window.calcState.features.includes('maintenance')) {
                setTimeout(() => window.toggleSelection('feature', 'maintenance'), 50);
            }
        }

        const el = document.querySelector(`.uic-card-feat[data-value="${value}"]`);
        if (el) {
            const checkBadge = el.querySelector('.uic-feat-check');
            const mainIcon = el.querySelector('.text-3xl');

            if (idx === -1) {
                // Selected
                el.classList.add('border-accent', 'bg-white/10');
                if (checkBadge) checkBadge.classList.remove('opacity-0');
                if (mainIcon) {
                    mainIcon.classList.remove('text-gray-500');
                    mainIcon.classList.add('text-accent');
                }
            } else {
                // Deselected
                el.classList.remove('border-accent', 'bg-white/10');
                if (checkBadge) checkBadge.classList.add('opacity-0');
                if (mainIcon) {
                    mainIcon.classList.add('text-gray-500');
                    mainIcon.classList.remove('text-accent');
                }
            }
        }
    }
    window.updateSummary();
};

window.updateAvailableFeatures = () => {
    const type = window.calcState.type;
    const featureCards = document.querySelectorAll('.uic-card-feat');

    featureCards.forEach(card => {
        const featureKey = card.getAttribute('data-value');

        // Reset basic state
        card.classList.remove('opacity-20', 'pointer-events-none', 'grayscale');
        card.title = "";

        // Rule 1: Landing Page cannot have Blog
        // (One-Pager structure doesn't support complex blog modules)
        if (type === 'landing') {
            if (featureKey === 'blog') {
                card.classList.add('opacity-20', 'pointer-events-none', 'grayscale');
                card.title = "Blog ist für One-Pager nicht verfügbar / Blog not available for One-Pager";

                // Deselect if active
                if (window.calcState.features.includes(featureKey)) {
                    window.toggleSelection('feature', featureKey);
                }
            }
        }
    });
};

window.changeStep = (delta) => {
    let newStep = window.calcState.step + delta;
    if (newStep < 0 || newStep > 2) return;

    if (window.calcState.step === 0 && delta > 0 && !window.calcState.type) {
        alert("Bitte wählen Sie zuerst einen Typ aus! / Kérjük válasszon típust!");
        return;
    }

    // Special Logic: Skip Features (Step 1) if Type is 'content'
    // Standard Step Change


    window.goToStep(newStep);
};

window.goToStep = (step) => {
    // Validation: Cannot skip Step 1
    if (step > 0 && !window.calcState.type) {
        alert(currentLang === 'hu' ? 'Kérjük válasszon típust!' : (currentLang === 'en' ? 'Please select a type!' : 'Bitte wählen Sie zuerst einen Typ aus!'));
        return;
    }

    // Validation: Step 2 (Features) required for Step 3, BUT NOT for 'content'
    // Validation: Step 2 (Features) - Optional
    // if (step > 1 && window.calcState.features.length === 0) { ... }

    window.calcState.step = step;

    // Update Logical constraints
    if (step === 1) window.updateAvailableFeatures();

    document.querySelectorAll('.uic-view').forEach((el, idx) => {
        if (idx === step) { el.classList.remove('hidden'); el.classList.add('animate-fade-in'); }
        else { el.classList.add('hidden'); el.classList.remove('animate-fade-in'); }
    });
    const percent = (step / 2) * 100;
    const track = document.getElementById('uic-progress-track');
    if (track) track.style.width = `${percent}%`;

    document.querySelectorAll('.uic-step').forEach((el, idx) => {
        const circle = el.querySelector('div');
        // Logic: active if current step >= idx. 
        // For 'content', if we are at step 2, step 1 should also appear 'completed' or just passed.
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

    const tr = {
        de: { sel: "Ausgewählt:", none: "Keine", est: "Geschätzte Investition:", mo: "/Monat Wartung" },
        en: { sel: "Selected:", none: "None", est: "Est. Investment:", mo: "/mo Maintenance" },
        hu: { sel: "Kiválasztva:", none: "Nincs", est: "Becsült Beruházás:", mo: "/hó Karbantartás" }
    }[currentLang] || { sel: "Selected:", none: "None", est: "Est. Investment:", mo: "/mo" };

    const typeLabel = window.calcState.type ?
        (document.querySelector(`.uic-card-type[data-value="${window.calcState.type}"] h4`)?.innerText || window.calcState.type.toUpperCase())
        : '-';

    // Base Costs (Aligned with Fixed Packages)
    const baseCosts = {
        landing: { min: 990, max: 1390 },
        website: { min: 1790, max: 2690 },
        ecommerce: { min: 3990, max: 5990 }
    };

    // Feature add-ons (Avg cost added to range)
    const featCosts = {
        content_ai: 150,
        seo_pro: 250,
        chat_sales: 300,
        automation: 250,
        blog: 200,
        booking: 200,
        multilang: 300,
        design: 200,
        maintenance: 0
    };

    let minTotal = 0;
    let maxTotal = 0;

    if (window.calcState.type && baseCosts[window.calcState.type]) {
        minTotal += baseCosts[window.calcState.type].min;
        maxTotal += baseCosts[window.calcState.type].max;
    }

    // Translate feature keys to their titles if possible, or leave as is
    const feats = window.calcState.features.length > 0 ?
        window.calcState.features.map(f => {
            const el = document.querySelector(`.uic-card-feat[data-value="${f}"] span.font-bold`);

            // Add cost
            const cost = featCosts[f] || 0;
            minTotal += cost;
            maxTotal += (cost * 1.2); // 20% variance on features

            return el ? el.innerText : f;
        }).join(', ')
        : tr.none;

    // Maintenance Check
    const hasMaint = window.calcState.features.includes('maintenance');

    // Format Prices
    const formatPrice = (p) => "€" + Math.round(p).toLocaleString();

    // Disclaimer Translations
    const disclaimer = {
        de: "*Unverbindliche Schätzung. Der Endpreis wird nach persönlicher Absprache finalisiert.",
        en: "*Non-binding estimate. Final price confirmed after consultation.",
        hu: "*Nem kötelező érvényű becslés. A végleges árat személyes egyeztetés után pontosítjuk."
    }[currentLang] || "";

    txt.innerHTML = `
        <strong>${tr.sel}</strong> ${typeLabel} <br> 
        <span class="text-gray-400 text-xs text-pretty">${feats}</span>
        
        ${window.calcState.type ? `
        <div class="mt-4 pt-4 border-t border-white/10">
            <div class="text-xs text-indigo-300 uppercase tracking-wider mb-1 font-semibold">${tr.est}</div>
            <div class="text-3xl md:text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] inline-block mb-2 mt-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ${formatPrice(minTotal)} - ${formatPrice(maxTotal)}
            </div>
            ${hasMaint ? `<div class="text-xs text-gray-400 mb-2 border-t border-white/10 pt-1 inline-block">+ €99${tr.mo}</div>` : '<div class="mb-2"></div>'}
            
            <p class="text-[10px] text-gray-500 italic leading-tight max-w-xs transform scale-90 origin-left opacity-70">
                ${disclaimer}
            </p>
        </div>
        ` : ''}
    `;
};

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/ma2sksp64ucfz51s4imlu7qdkpc3un8i";

window.sendToMake = async (payload) => {
    try {
        const response = await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // Make.com often returns text "Accepted", treating as success even if not strictly JSON.
        if (response.ok) {
            return true;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error('Make Integration Error:', error);
        return false;
    }
};

window.submitConfig = async () => {
    const name = document.getElementById('uic-name').value;
    const email = document.getElementById('uic-email').value;
    // const phone = document.getElementById('uic-phone').value; // Optional

    if (!name || !email) {
        const msg = currentLang === 'hu' ? 'Kérjük töltse ki a Név és Email mezőt!' : (currentLang === 'de' ? 'Bitte Name & Email ausfüllen!' : 'Name & Email required!');
        alert(msg);
        return;
    }

    const btn = document.getElementById('uic-btn-send');
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    btn.disabled = true;

    const payload = {
        form_type: "Calculator",
        language: currentLang,
        project_type: window.calcState.type,
        features: window.calcState.features,
        client_name: name,
        client_email: email,
        client_phone: phone,
        timestamp: new Date().toLocaleString()
    };

    const success = await window.sendToMake(payload);

    btn.innerHTML = originalContent;
    btn.classList.remove('opacity-50', 'cursor-not-allowed');
    btn.disabled = false;

    if (success) {
        // Custom Success UI matching Contact Form
        const modalContent = document.getElementById('project-config-content');
        if (modalContent) {
            const successTitle = currentLang === 'hu' ? 'Köszönjük!' : (currentLang === 'de' ? 'Vielen Dank!' : 'Thank You!');
            const successText = currentLang === 'hu' ? 'Ajánlatkérését megkaptuk.<br>Hamarosan jelentkezünk!' : (currentLang === 'de' ? 'Anfrage erhalten.<br>Wir melden uns in Kürte!' : 'Request received.<br>We will contact you shortly!');

            modalContent.innerHTML = `
                <div class="flex flex-col items-center justify-center p-12 h-full min-h-[400px] animate-fade-in-up">
                    <div class="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8 text-accent animate-pulse shadow-[0_0_30px_rgba(255,69,0,0.2)]">
                        <i class="fas fa-check text-4xl"></i>
                    </div>
                    <h3 class="text-4xl font-bold text-white mb-6">${successTitle}</h3>
                    <p class="text-gray-300 text-xl text-center font-medium leading-relaxed max-w-lg">
                        ${successText}
                    </p>
                </div>
            `;

            // Auto Close Logic
            setTimeout(() => {
                window.closeCalculator();
                // Reset State after closing
                setTimeout(() => {
                    window.calcState = { step: 0, type: null, features: [] };
                    // Re-render Calculator by re-calling setup/init if needed, 
                    // but usually the next openCalculator() call resets UI.
                }, 500);
            }, 4000);
        } else {
            // Fallback
            window.closeCalculator();
            const successMsg = currentLang === 'hu' ? 'Köszönjük! Ajánlatkérését megkaptuk.' : (currentLang === 'de' ? 'Danke! Anfrage erhalten.' : 'Thanks! Request received.');
            alert(successMsg);
        }
    } else {
        alert("System Error. Please try again.");
    }
};

window.submitContactForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;

    // Get Data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Strict Validation: Required Fields (Name, Email, Message) - Phone is Optional
    const { name, email, message } = data;
    if ((name !== undefined && !name.trim()) ||
        (email !== undefined && !email.trim()) ||
        (message !== undefined && !message.trim())) {
        alert(currentLang === 'hu' ? 'Kérjük töltse ki a kötelező mezőket!' : (currentLang === 'de' ? 'Bitte Pflichtfelder ausfüllen!' : 'Please fill required fields!'));
        return;
    }

    // Check for Booking Data in LocalStorage
    const storedBooking = localStorage.getItem('n3xt_pending_booking');
    let bookingData = null;
    try {
        if (storedBooking) bookingData = JSON.parse(storedBooking);
    } catch (e) {
        console.error("Booking Parse Error", e);
    }

    const payload = {
        form_type: "Contact",
        language: currentLang,
        client_name: formData.get('name'),
        client_email: formData.get('email'),
        message: formData.get('message'),
        booking_date: bookingData ? bookingData.date : '',
        booking_time: bookingData ? bookingData.time : '',
        timestamp: new Date().toLocaleString()
    };

    // Append to message for clarity in simple emails
    if (bookingData) {
        payload.message = (payload.message || "") + `\n\n[Booking Request: ${bookingData.date} @ ${bookingData.time}]`;
    }

    // UI Loading
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    btn.disabled = true;

    // Send
    const success = await window.sendToMake(payload);

    // RESTORE UI
    btn.innerHTML = originalContent;
    btn.classList.remove('opacity-50', 'cursor-not-allowed');
    btn.disabled = false;

    if (success) {
        localStorage.removeItem('n3xt_pending_booking');
        const formContainer = document.getElementById('formContent');
        const successMsg = document.getElementById('successMessage');

        if (formContainer && successMsg) {
            formContainer.classList.add('hidden');
            successMsg.classList.remove('hidden');

            // Auto Close Logic
            setTimeout(() => {
                if (window.closeUnivModal) window.closeUnivModal();
            }, 4000);
        } else {
            const fallbackMsg = currentLang === 'hu' ? 'Köszönjük! Üzenetét megkaptuk.' : (currentLang === 'de' ? 'Danke! Nachricht erhalten.' : 'Success! Message received.');
            alert(fallbackMsg);
            form.reset();
        }
    } else {
        alert(currentLang === 'hu' ? 'Hiba történt a küldés során. Kérjük próbálja újra.' : 'System Error. Please try again.');
    }
};


window.openCalculator = () => {
    // Reset State
    window.calcState = { step: 0, type: null, features: [] };

    // Reset UI selections
    document.querySelectorAll('.uic-card-type').forEach(el => {
        el.classList.remove('border-accent', 'bg-white/10');
        const check = el.querySelector('.uic-check-circle');
        if (check) check.classList.add('opacity-0');
        const icon = el.querySelector('div.w-12');
        if (icon) {
            icon.classList.add('bg-accent/10', 'text-accent');
            icon.classList.remove('bg-accent', 'text-black');
        }
    });

    document.querySelectorAll('.uic-card-feat').forEach(el => {
        el.classList.remove('border-accent', 'bg-white/10');
        const badge = el.querySelector('.uic-feat-check');
        if (badge) badge.classList.add('opacity-0');
        const icon = el.querySelector('.text-3xl');
        if (icon) {
            icon.classList.add('text-gray-500');
            icon.classList.remove('text-accent');
        }
    });

    // Reset Form
    const nameInput = document.getElementById('uic-name');
    const emailInput = document.getElementById('uic-email');
    const phoneInput = document.getElementById('uic-phone');
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (phoneInput) phoneInput.value = '';

    window.goToStep(0);
    window.updateSummary();

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
            <div class="relative w-full h-full md:h-auto md:max-w-4xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-gradient-to-br from-[#0d0b14] to-[#020202] border border-accent/50 md:rounded-3xl shadow-[0_0_60px_rgba(255,69,0,0.1)] p-0 overflow-y-auto transform scale-95 transition-transform duration-300 flex flex-col max-h-screen" id="univ-content">
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

window.setupContactForm = () => {
    const form = document.getElementById('contactForm');
    console.log("🛠️ Setup Contact Form: Pre-fill check...", form ? "FOUND" : "NOT FOUND");

    if (form) {
        // Pre-fill Message Logic (Booking)
        const pendingBooking = localStorage.getItem('n3xt_pending_booking');
        const selectedPackage = localStorage.getItem('n3xt_selected_package');
        const msgArea = form.querySelector('textarea[name="message"]');

        if (msgArea && !msgArea.value) {
            if (pendingBooking) {
                try {
                    const pb = JSON.parse(pendingBooking);
                    msgArea.value = (currentLang === 'hu' ? `Időpontfoglalás kérés:\nDátum: ${pb.date}\nIdő: ${pb.time}` :
                        (currentLang === 'en' ? `Booking Request:\nDate: ${pb.date}\nTime: ${pb.time}` :
                            `Terminanfrage:\nDatum: ${pb.date}\nUhrzeit: ${pb.time}`)) + "\n\n";
                } catch (e) { console.error("Booking Parse Error", e); }
            } else if (selectedPackage) {
                // Package Pre-fill
                msgArea.value = (currentLang === 'hu' ? `Üdvözlöm! Érdeklődnék a ${selectedPackage} csomag iránt.` :
                    (currentLang === 'en' ? `Hello! I am interested in the ${selectedPackage} package.` :
                        `Hallo! Ich interessiere mich für das ${selectedPackage} Paket.`)) + "\n\n";

                // Clear it immediately so it doesn't persist if they close and reopen freely
                localStorage.removeItem('n3xt_selected_package');
            }
        }

        // Note: Event listener is handled by initGlobals delegation to prevent duplicates.
        // We do NOT attach it here anymore.
    }
};

window.setupStats = () => {
    // Placeholder for stats logic if assumed elsewhere
};

window.selectPackage = (pkgName) => {
    localStorage.setItem('n3xt_selected_package', pkgName);
    window.hubSelect('message');
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

    // Pass 'true' for isModal to get streamlined content
    if (type === 'calendar') {
        html = Booking(lang, true);
    } else if (type === 'message') {
        html = Contact(lang, true);
    }

    // Inject HTML directly
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
    renderComp('tech-stack-container', TechStack);
    renderComp('services-container', Services);
    renderComp('pricing-container', Pricing);
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
            <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-gradient-to-br from-[#0b0512] to-[#020202] border border-accent/60 rounded-3xl p-8 shadow-[0_0_50px_rgba(255,69,0,0.15)] transform scale-95 transition-all duration-300">
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

    // --- Meta Pixel Code (Facebook) ---
    // TODO: Replace 'YOUR_PIXEL_ID_HERE' with your actual Pixel ID from Events Manager
    const FB_PIXEL_ID = '753612737112417';

    if (FB_PIXEL_ID && FB_PIXEL_ID !== 'YOUR_PIXEL_ID_HERE') {
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', FB_PIXEL_ID);
        fbq('track', 'PageView');
        console.log("🟦 Meta Pixel Loaded:", FB_PIXEL_ID);
    }
};

const initGlobals = () => {
    // Global Form Submit Handler (Delegation) - Robust solution for dynamic forms
    document.addEventListener('submit', (e) => {
        if (e.target && e.target.id === 'contactForm') {

            window.submitContactForm(e);
        }
    });

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

    // Global ESC Key Handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (typeof window.closeUnivModal === 'function') window.closeUnivModal(); // Universal
            if (typeof window.closeServiceModal === 'function') window.closeServiceModal(); // Service
            if (typeof window.closeCalculator === 'function') window.closeCalculator(); // Calculator

            // Legal Modals
            document.querySelectorAll('.modal-backdrop.active').forEach(m => {
                m.classList.remove('active');
                document.body.style.overflow = '';
            });

            // Legacy Booking
            const bm = document.getElementById('bookingModal');
            if (bm && !bm.classList.contains('hidden')) {
                bm.classList.add('hidden');
                document.body.style.overflow = '';
            }
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
