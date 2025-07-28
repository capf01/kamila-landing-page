/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    
    // Adicione estes caminhos se estiver usando outros arquivos
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
    "./src/layouts/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#6B21A8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}