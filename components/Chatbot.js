export const Chatbot = `
<!-- Chatbot Widget -->
<div id="chatbot-container" class="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
    
    <!-- Chat Window (Originally Hidden) -->
    <div id="chat-window" class="pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl mb-4 origin-bottom-right transform scale-90 opacity-0 transition-all duration-300 invisible flex flex-col overflow-hidden">
        
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] p-4 flex justify-between items-center border-b border-white/5">
            <div class="flex items-center gap-3">
                <div class="relative">
                    <div class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
                        <i class="fas fa-robot text-accent"></i>
                    </div>
                    <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a0a]"></div>
                </div>
                <div>
                    <h3 class="text-white font-bold text-sm">N3xt AI Assistant</h3>
                    <p class="text-xs text-green-500 flex items-center gap-1">
                        <span class="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span> Online
                    </p>
                </div>
            </div>
            <button id="close-chat" class="text-gray-400 hover:text-white transition-colors">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- Messages Area -->
        <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/40">
            <!-- Bot Greeting (Will be injected via JS) -->
        </div>

        <!-- Input Area -->
        <div class="p-4 bg-[#0a0a0a] border-t border-white/5">
            <div id="chat-options" class="flex flex-wrap gap-2 mb-3">
                <!-- Quick Replies (Injected via JS) -->
            </div>
            <form id="chat-input-form" class="relative">
                <input type="text" id="chat-input" placeholder="Schreiben Sie eine Nachricht... (beta)" 
                    class="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-accent transition-all">
                <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent/20 text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                    <i class="fas fa-paper-plane text-xs"></i>
                </button>
            </form>
        </div>
    </div>

    <!-- Toggle Button -->
    <button id="chat-toggle" class="pointer-events-auto w-14 h-14 bg-accent rounded-full shadow-glow hover:shadow-glow-intense transform hover:scale-110 transition-all duration-300 flex items-center justify-center text-white relative group">
        <!-- Icon changing logic will be in JS -->
        <i class="fas fa-comment-dots text-2xl transition-transform duration-300 group-hover:rotate-12"></i>
        
        <!-- Notification Dot -->
        <span class="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0a0a0a] animate-ping"></span>
        <span class="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0a0a0a]"></span>
    </button>
</div>
// --- Logic ---
export const initChatbotLogic = () => {
    const toggle = document.getElementById('chat-toggle');
    const windowEl = document.getElementById('chat-window');
    const close = document.getElementById('close-chat');
    const msgs = document.getElementById('chat-messages');
    const opts = document.getElementById('chat-options');

    if (!toggle || !windowEl) return;

    let isOpen = false;
    let hasGreeted = false;
    
    // Get current Lang dynamically
    const getLang = () => localStorage.getItem('n3xt_lang') || 'de';

    const showTyping = () => {
        const id = 'typing-indicator';
        if (document.getElementById(id)) return;
        const div = document.createElement('div');
        div.id = id;
        div.className = 'flex justify-start animate-fade-in my-2';
        div.innerHTML = `< div class="bg-white/10 text-gray-200 rounded-2xl rounded-tl-none px-4 py-2 text-sm flex gap-1 items-center" >
            <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
            <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
            <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
        </div > `;
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
        div.className = `flex ${ sender === 'bot' ? 'justify-start' : 'justify-end' } animate - fade -in my - 2`;
        div.innerHTML = `< div class="max-w-[85%] rounded-2xl px-4 py-2 text-sm ${sender === 'bot' ? 'bg-white/10 text-gray-200 rounded-tl-none' : 'bg-accent text-white rounded-tr-none'} shadow-sm" > ${ text }</div > `;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    };

    const navTo = (id) => {
        toggleFunc(); // Close chat
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    };
    window.navTo = navTo;

    const showOpts = (options) => {
        opts.innerHTML = '';
        const currentLang = getLang();
        options.forEach(o => {
            const b = document.createElement('button');
            b.className = 'bg-white/5 border border-white/10 hover:border-accent text-xs text-white px-3 py-2 rounded-lg mb-1 mr-1 transition-colors animate-fade-in';
            const txt = o.label ? (o.label[currentLang] || o.label.de) : o.text;
            b.innerHTML = txt;
            b.onclick = () => {
                addMsg('user', b.innerText);
                opts.innerHTML = '';
                handleAction(o.val || o.action);
            };
            opts.appendChild(b);
        });
    };

    const handleAction = (action) => {
        showTyping();
        const currentLang = getLang();

        setTimeout(() => {
            let resp = "";
            let nextOpts = [];

            if (action === 'booking') {
                const t = { de: "Ich öffne den Kalender für Sie.", en: "Opening the calendar for you.", hu: "Megnyitom a naptárat." };
                addMsg('bot', t[currentLang] || t.de);
                setTimeout(() => navTo('booking'), 1000);
                return;
            }
            else if (action === 'pricing' || action.startsWith('price_')) {
                const t = {
                   de: "Das hängt stark vom Projekt ab. Am besten besprechen wir das persönlich! Buchen Sie einen Termin oder schreiben Sie uns.",
                   en: "That depends on the project. Let's discuss personally! Book a meeting or email us.",
                   hu: "Ez nagyban függ a projekttől. Beszéljük át személyesen! Foglaljon időpontot vagy írjon nekünk."
               };
               resp = t[currentLang] || t.de;
               nextOpts = [
                   { val: 'booking', label: { de: '📅 Termin buchen', en: '📅 Book Meeting', hu: '📅 Időpontfoglalás' } },
                   { val: 'show_email', label: { de: '✉️ Email schreiben', en: '✉️ Send Email', hu: '✉️ Email írása' } }
               ];
            }
            else if (action === 'show_email') {
                addMsg('bot', 'info@n3xt-level.eu');
                return;
            }
            else if (action === 'industry') {
                const t = { 
                    de: "Wir haben spezielle Erfahrung in dieser Branche! Sehen Sie sich unsere Fallstudien an.", 
                    en: "We have specialized experience in this industry! Check out our Case Studies.", 
                    hu: "Különleges tapasztalatunk van ebben az iparágban! Nézze meg esettanulmányainkat." 
                };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'nav_blog', label: { de: 'Zu den Cases', en: 'See Cases', hu: 'Esettanulmányok' } }];
            }
            else if (action === 'services') {
                const t = { de: "Wir bieten Webdesign, SEO und AI-Automatisierung. Wohin soll es gehen?", en: "We offer Web Design, SEO, and AI Automation. Where to?", hu: "Webdizájnt, SEO-t és AI automatizációt kínálunk. Hová lépjünk?" };
                resp = t[currentLang] || t.de;
                nextOpts = [
                    { val: 'nav_portfolio', label: { de: 'Zum Portfolio', en: 'Go to Portfolio', hu: 'Portfólió' } },
                    { val: 'nav_services', label: { de: 'Zu den Leistungen', en: 'Go to Services', hu: 'Szolgáltatások' } }
                ];
            }
            else if (action === 'duration') {
                const t = { de: "Eine Basis-Webseite ist meist in **1 Woche** fertig.", en: "A basic website is usually ready in **1 week**.", hu: "Egy alap weboldal általában **1 hét** alatt kész." };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'booking', label: { de: 'Starten', en: 'Start', hu: 'Kezdés' } }];
            }
            else if (action === 'location') {
                const t = { de: "Sitz: Stockerau. Wir arbeiten weltweit online.", en: "Based in Stockerau. We work global online.", hu: "Székhely: Stockerau. Online dolgozunk." };
                resp = t[currentLang] || t.de;
                nextOpts = [{ val: 'booking', label: { de: 'Termin', en: 'Meeting', hu: 'Időpont' } }];
            }
            else if (action === 'support' || action === 'guarantee') {
               const t = { de: "Ja! Wir bieten Wartung & Garantie.", en: "Yes! We offer maintenance & warranty.", hu: "Igen! Kínálunk karbantartást és garanciát." };
               resp = t[currentLang] || t.de;
            }
            else if (action.startsWith('nav_')) {
                const target = action.split('_')[1];
                navTo(target);
                return;
            }
            else {
                resp = "...";
            }

            addMsg('bot', resp);
            if (nextOpts.length > 0) showOpts(nextOpts);

        }, 800);
    };

    const processInput = (text) => {
        const lower = text.toLowerCase();

        // 1. Specific
        if (lower.includes('dauer') || lower.includes('lange') || lower.includes('time') || lower.includes('idő')) { handleAction('duration'); return; }
        if (lower.includes('wo') || lower.includes('ort') || lower.includes('hol') || lower.includes('cím')) { handleAction('location'); return; }
        if (lower.includes('support') || lower.includes('wartung') || lower.includes('karbantart')) { handleAction('support'); return; }
        
        // 2. Action
        if (lower.includes('termin') || lower.includes('book') || lower.includes('időpont')) { handleAction('booking'); return; }
        if (lower.includes('preis') || lower.includes('cost') || lower.includes('ár')) { handleAction('pricing'); return; }

        // 3. Media / Industry
        if (lower.includes('foto') || lower.includes('fotó') || lower.includes('video') || lower.includes('videó') || lower.includes('drohne') || lower.includes('drone') || lower.includes('reklám')) { handleAction('pricing'); return; }
        if (lower.includes('praxis') || lower.includes('arzt') || lower.includes('fog') || lower.includes('beauty') || lower.includes('salon') || lower.includes('épít')) { handleAction('industry'); return; }

        // 4. Fallback
        showTyping();
        setTimeout(() => {
            const currentLang = getLang();
            const t = { de: "Wie kann ich helfen?", en: "How can I help?", hu: "Miben segíthetek?" };
            addMsg('bot', t[currentLang] || t.de);
            showOpts([
                { val: 'booking', label: { de: '🗓️ Termin', en: '🗓️ Booking', hu: '🗓️ Időpont' } },
                { val: 'pricing', label: { de: '💰 Preise', en: '💰 Pricing', hu: '💰 Árak' } },
            ]);
        }, 800);
    };

    // Listeners
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

    const toggleFunc = () => {
        isOpen = !isOpen;
        const currentLang = getLang();
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
