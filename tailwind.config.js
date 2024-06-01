/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        brown: {
          300: "#A4550A",
        },
      },
      backgroundImage: {
        "full-image": "url('/assets/backgrounds/full-bg.png')",
        "laptop-image": "url('/assets/backgrounds/laptop-bg.png')",
        "phone-image": "url('/assets/backgrounds/intro-mobile.png')",

        "hero-section": "url('/assets/backgrounds/intro.png')",
        "hero-section-mobile": "url('/assets/backgrounds/intro-mobile.png')",
      },
    },
  },
  plugins: [],
};
