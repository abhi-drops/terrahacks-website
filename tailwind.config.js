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
        "3xl": "2560px",
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
        
        "about-section": "url('/assets/backgounds/about.png)",
        "about-section-mobile": "url('/assets/backgrounds/about.png')",

        "sponsor-section": "url('/assets/backgrounds/sponsors.png')",
        "sponsor-section-mobile": "url('/assets/backgrounds/sponsors.png')",
        
        "faq-section": "url('/assets/backgrounds/faq.png')",
        "faq-section-mobile": "url('/assets/backgrounds/faq.png')",

        "team-section": "url('/assets/backgrounds/team.png')",
        "team-section-mobile": "url('/assets/backgrounds/team.png')",

        "contact-section": "url('/assets/backgrounds/contact.png')",
        "contact-section-mobile": "url('/assets/backgrounds/contact.png')",
      },
    },
  },
  plugins: [],
};
