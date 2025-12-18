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
                <input type="text" id="chat-input" placeholder="Schreiben Sie eine Nachricht..." disabled
                    class="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-accent transition-all cursor-not-allowed opacity-50">
                <button type="submit" disabled class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent/20 text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all disabled:opacity-0">
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
`;
