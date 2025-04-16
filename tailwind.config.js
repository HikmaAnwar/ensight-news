/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)", // #1a365d
        surface: "var(--color-surface)", // #20406a
        "surface-alt": "var(--color-surface-alt)", // #162f4d
        "surface-emphasis": "var(--color-surface-emphasis)", // #2a4b79
        "primary-accent": "var(--color-primary-accent)", // #d93a3a
        "text-primary": "var(--color-text-primary)", // #ffffff
        "text-secondary": "var(--color-text-secondary)", // #e0e0e0
        "text-muted": "var(--color-text-muted)", // #b0bec5
        "text-light": "var(--color-text-light)", // #ffffff
        border: "var(--color-border)", // rgba(255, 255, 255, 0.15)
        "input-bg": "var(--color-input-bg)", // rgba(255, 255, 255, 0.08)
        shadow: "var(--color-shadow)", // rgba(0, 0, 0, 0.25)
      },
      fontSize: {
        base: "var(--base-font-size, 16px)",
      },
      borderRadius: {
        DEFAULT: "var(--border-radius, 8px)",
      },
      boxShadow: {
        card: "0 3px 8px var(--color-shadow)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
