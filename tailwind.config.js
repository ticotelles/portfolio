/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sora: ["Sora", "sans-serif"],
        "Sora-bold": ['Sora-Bold', 'sans-serif'],
        "Sora-light": ['Sora-Light', 'sans-serif'],
        "Sora-medium": ['Sora-Medium', 'sans-serif'],
        "Londrina": ['Londrina', 'sans-serif']
      },
      backgroundImage:{
        'bg-hero': "url('/background.png')"
      },
      transformOrigin:{
        'transform': "origin-center rotate-6"
      }
     
    },
  },
  plugins: [],
}