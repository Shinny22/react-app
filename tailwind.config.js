/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('asset/Path.png')",
      },
      colors: {
        'text-blue':'#505F98',
    }
  },
  plugins: [],
}
}