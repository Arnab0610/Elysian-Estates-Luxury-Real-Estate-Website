/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'], // HTML এবং JS ফাইলগুলো যাতে স্ক্যান হয়
  theme: {
    extend: {
      colors: {
        'ivory': '#fffeed',
        'charcoal': '#1A1A1A',
        'soft-gold': '#C0A067',
        'dark-gold': '#A78B58',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

