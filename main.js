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
