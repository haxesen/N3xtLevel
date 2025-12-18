export const Booking = `
<!-- Booking Section -->
<section id="booking" class="py-32 bg-black relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col xl:flex-row gap-16 items-start">
            
            <!-- Left Content -->
            <div class="w-full xl:w-1/3 reveal">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Persönliches <br>
                    <span class="text-accent">Beratungsgespräch</span>
                </h2>
                <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                    Bereit für das nächste Level? Wählen Sie einen passenden Termin für Ihre kostenlose Erstberatung.
                </p>
                
                <div class="space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Location</h4>
                            <p class="text-gray-400">Stockerau, NÖ 2000</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Email</h4>
                            <p class="text-gray-400">office@n3xtlevel.at</p>
                        </div>
                    </div>
                    
                     <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                            <i class="fas fa-video"></i>
                        </div>
                        <div>
                            <h4 class="text-white font-bold">Online Meeting</h4>
                            <p class="text-gray-400">Google Meet / Zoom</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Content: Calendar UI -->
            <div class="w-full xl:w-2/3 reveal" style="transition-delay: 200ms;">
                <div class="bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative h-[600px]">
                    <!-- Cal inline embed code begins -->
                    <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-30min"></div>
                    <script type="text/javascript">
                    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                    Cal("init", "30min", {origin:"https://app.cal.com"});

                    Cal.ns["30min"]("inline", {
                        elementOrSelector:"#my-cal-inline-30min",
                        config: {"layout":"month_view", "theme":"dark"},
                        calLink: "tamas-horvat-rti5dl/30min",
                    });

                    Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view", "theme":"dark"});
                    </script>
                    <!-- Cal inline embed code ends -->
                </div>
            </div>
        </div>
    </div>
</section>
`;
