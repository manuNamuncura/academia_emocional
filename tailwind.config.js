/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FFF8F0",
          200: "#FFF0DE",
          300: "#FFE4C7",
          400: "#FFD4A8",
        },
        beige: {
          50: "#FAF6F1",
          100: "#F5EDE3",
          200: "#E8D9C8",
          300: "#D4C0A5",
          400: "#BFA482",
          500: "#8B6F5E",
        },
        peach: {
          100: "#FFF0E8",
          200: "#FFDCC8",
          300: "#F5C5A3",
          400: "#E8A87C",
          500: "#D4895A",
        },
        sage: {
          50: "#F4F8F6",
          100: "#E0EDE8",
          200: "#C0DBCF",
          300: "#A8C8D8",
          400: "#7BAAB5",
          500: "#5E8E9A",
        },
        warm: {
          400: "#A89580",
          500: "#8B7560",
          600: "#6B5848",
          700: "#5C4A3E",
          800: "#3D3029",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "fade-up": "loaderFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-up-delayed":
          "loaderFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        "hero-subtitle":
          "loaderFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards",
        "hero-title":
          "loaderFadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards",
        "hero-description":
          "loaderFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s forwards",
        "hero-buttons":
          "loaderFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 1s forwards",
        "hero-scroll":
          "loaderFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 1.4s forwards",
      },
      keyframes: {
        loaderFadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        scrollDown: {
          "0%": { top: "-100%" },
          "100%": { top: "100%" },
        },
      },
    },
  },
  plugins: [],
};
