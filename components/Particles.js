
export const initParticles = (canvasId) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Config
    const particleCount = window.innerWidth < 768 ? 30 : 60; // Fewer on mobile
    const connectionDistance = 150;
    const moveSpeed = 0.5;

    // Resize
    const resizeLogger = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight; // Hero is usually full height or large
    };
    resizeLogger();
    window.addEventListener('resize', resizeLogger);

    // Mouse Tracking
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * moveSpeed;
            this.vy = (Math.random() - 0.5) * moveSpeed;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Mouse Interaction (Repulsion)
            if (mouse.x != null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                }
            }
        }

        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Init Logic
    const init = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };

    // Animation Loop
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update & Draw Particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connections
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / connectionDistance})`; // Electric Blue Fade
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    // Cleanup hook (if needed strictly, but here we just overwrite)
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resizeLogger);
    };
};
