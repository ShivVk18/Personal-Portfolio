/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '755px',
      'md': '758px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'darkTheme': '#000000'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "79%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        glowing: {
          '0%, 100%': { boxShadow: '0 0 2px #00ff00' },
          '50%': { boxShadow: '0 0 8px #00ff00, 0 0 12px #00ff00' },
        },
        softBlueGlow: {
          '0%, 100%': { boxShadow: '0 0 2px rgba(100, 149, 237, 0.3)' },
          '50%': { boxShadow: '0 0 8px rgba(100, 149, 237, 0.5), 0 0 12px rgba(100, 149, 237, 0.3)' },
        },
        softGoldenGlow: {
          '0%, 100%': { boxShadow: '0 0 2px rgba(218, 165, 32, 0.3)' },
          '50%': { boxShadow: '0 0 8px rgba(218, 165, 32, 0.5), 0 0 12px rgba(218, 165, 32, 0.3)' },
        }
      },
      animation: {
        typing: "typing 2s steps(25) infinite alternate, blink 0.5s infinite",
        'glow': 'glowing 2s infinite',
        'soft-blue-glow': 'softBlueGlow 3s infinite',
        'soft-golden-glow': 'softGoldenGlow 3s infinite'
      },
      boxShadow: {
        'glow-sm': '0 0 2px #00ff00',
        'glow-md': '0 0 8px #00ff00, 0 0 12px #00ff00',
        'soft-blue-glow': '0 0 2px rgba(100, 149, 237, 0.3)',
        'soft-golden-glow': '0 0 2px rgba(218, 165, 32, 0.3)',
      },
      backgroundColor: {
        'skills-bg': 'rgba(255, 255, 255, 0.8)',
      }
    },
  },
  plugins: [],
}