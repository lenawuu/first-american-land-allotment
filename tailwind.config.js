/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        lightCream: "#FFFCF0",
        cream: "#FBF5DD",
        sage: "#A6CDC6",
        teal: "#16404D",
        gold: "#DDA853",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#16404D",
          foreground: "#FBF5DD",
        },
        secondary: {
          DEFAULT: "#A6CDC6",
          foreground: "#16404D",
        },
        muted: {
          DEFAULT: "#FBF5DD",
          foreground: "#16404D",
        },
        accent: {
          DEFAULT: "#DDA853",
          foreground: "#16404D",
        },
        earth: {
          DEFAULT: "#5C4D3C",
          foreground: "#F9F3E5", // Cream
          50: "#ECEAE7",
          100: "#D9D5CF",
          200: "#B3ABA0",
          300: "#8D8170",
          400: "#675740",
          500: "#5C4D3C", // Base
          600: "#534536",
          700: "#493C30",
          800: "#403329",
          900: "#362A23",
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
