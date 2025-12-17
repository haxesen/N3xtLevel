import './style.css';

// Import Components
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { PremiumContent } from './components/PremiumContent.js';
import { AboutMe } from './components/AboutMe.js';
import { Portfolio } from './components/Portfolio.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

// Render Components
document.getElementById('hero-container').innerHTML = Hero;
document.getElementById('services-container').innerHTML = Services;
document.getElementById('premium-content-container').innerHTML = PremiumContent;
document.getElementById('about-me-container').innerHTML = AboutMe;
document.getElementById('portfolio-container').innerHTML = Portfolio;
document.getElementById('contact-container').innerHTML = Contact;
document.getElementById('footer-container').innerHTML = Footer;

// Re-initialize scripts that were in the HTML body or depended on components being loaded
// Important: Since we are using innerHTML, the <script> tags inside the components (if any) won't execute automatically.
// However, the original component files only contained HTML strings, not scripts.
// The main interactivity scripts were in index.html at the bottom.
// We need to keep the index.html scripts but ensure they run AFTER this rendering.
// Since main.js is type="module", it defers execution. We should listen for DOMContentLoaded or just run.

// Initialize animations and Logic from original index.html
const initLogic = () => {
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

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Form Handling
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const formContent = document.getElementById('formContent');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Animate out
            formContent.style.opacity = '0';
            formContent.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                formContent.classList.add('hidden');
                successMessage.classList.remove('hidden');
                successMessage.classList.add('animate-fade-in');
            }, 500);
        });
    }

    // Dynamic Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
};

// Modals are global functions in index.html. Modules don't expose to global window by default.
// We need to expose them manually if we want the ONCLICK attributes in HTML to work.
window.openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close on outside click
window.addEventListener('click', (e) => {
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
