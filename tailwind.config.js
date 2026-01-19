
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bef264",           // Lime-green accent
        midnight: "#18181b",          // Dark background/headings
        "background-light": "#f8fafc", // Light background
        "background-dark": "#0c0a09",  // Dark background
        "apres-ski": "#6C6D74",        // Text/borders
        arctic: "#D3D1CE",             // Light background
        slopes: "#B3B7BA",             // Cards/surfaces
        mountainside: "#262E36",       // Footer
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        DEFAULT: "1rem",
        'xl': "1.5rem",
        '2xl': "2.5rem",
      },
    },
  },
  plugins: [],
}
