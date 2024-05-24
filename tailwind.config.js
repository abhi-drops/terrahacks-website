/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          300: "#A4550A",
        },
      },
      backgroundImage: {
        "hero-section": "url('/assets/backgrounds/intro.png')",
        "hero-section-mobile": "url('/assets/backgrounds/intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
