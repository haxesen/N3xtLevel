/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./components/**/*.js",
        "./*.html"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                black: '#000000',
                accent: '#FF4500', // Vibrant Orange Red
                'accent-hover': '#FF6a00',
                dark: '#050505',
                'card-bg': '#0f0f0f',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 25px rgba(255, 69, 0, 0.4)',
                'glow-sm': '0 0 15px rgba(255, 69, 0, 0.2)',
                'glow-intense': '0 0 40px rgba(255, 69, 0, 0.5)',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
