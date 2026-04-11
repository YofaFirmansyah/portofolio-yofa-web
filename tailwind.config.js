/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutal-bg': '#F3F4F6',
        'brutal-blue': '#2563EB',
        'brutal-yellow': '#FACC15',
        'brutal-black': '#000000',
      },
      fontFamily: {
        'heading': ['"Space Grotesk"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal-hover': '4px 4px 0px 0px #000000',
        'brutal-blue': '8px 8px 0px 0px #2563EB',
        'brutal-yellow': '8px 8px 0px 0px #FACC15',
        'none': 'none',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      translate: {
        'brutal': '4px',
      },
    },
  },
  plugins: [],
}
