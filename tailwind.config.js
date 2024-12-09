/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this matches your folder structure
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#3b372f',
        'rose-white': '#fffafa',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Include the plugin for hiding scrollbars
  ],
};
