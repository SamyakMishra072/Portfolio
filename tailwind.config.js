/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Hacker theme colors
        neon: {
          green: '#00ff00',
          blue: '#0ef',
          red: '#ff0033',
        },
        cyber: {
          black: '#0a0a0a',
          darker: '#000000',
          dark: '#1a1a1a',
          red: '#ff0033',
          'red-dark': '#cc0033',
          green: '#00ff00',
          'green-dark': '#00cc00',
          blue: '#0ef',
          'blue-dark': '#0cc',
        },
        matrix: {
          green: '#003B00',
          'green-bright': '#00FF41',
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)',
        'matrix-rain': 'linear-gradient(180deg, rgba(0, 255, 65, 0.15) 0%, rgba(0, 255, 65, 0) 100%)',
        'cyber-glow': 'radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0) 50%)',
      },
      boxShadow: {
        'neon-green': '0 0 5px theme(colors.neon.green), 0 0 20px theme(colors.neon.green)',
        'neon-red': '0 0 5px theme(colors.neon.red), 0 0 20px theme(colors.neon.red)',
        'neon-blue': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
      },
      animation: {
        'matrix-flow': 'matrixFlow 20s linear infinite',
        'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
        'text-glitch': 'textGlitch 3s infinite',
        'border-flow': 'borderFlow 2s linear infinite',
      },
      keyframes: {
        matrixFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        cyberPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        textGlitch: {
          '0%, 100%': { textShadow: '2px 2px theme(colors.neon.green)' },
          '50%': { textShadow: '-2px -2px theme(colors.neon.red)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
};