import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"]
      },
      colors: {
        sand: {
          50: "#fdfaf6",
          100: "#f7f1e7",
          200: "#e9decc",
          300: "#d6c3a6",
          400: "#c6a77f",
          500: "#b48a58",
          600: "#946e3f",
          700: "#71522f",
          800: "#4b3821",
          900: "#2a2215"
        },
        clay: {
          50: "#f7f4f2",
          100: "#ebe1db",
          200: "#d9c8be",
          300: "#c4aa9b",
          400: "#ae8b74",
          500: "#996f52",
          600: "#7d573d",
          700: "#62422e",
          800: "#412b1d",
          900: "#24160f"
        }
      }
    }
  },
  plugins: []
};

export default config;

