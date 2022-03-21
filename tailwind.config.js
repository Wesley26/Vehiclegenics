/**
 * TailwindCSS config file
 */

module.exports = {
  content: [
    './src/**/**/**/**/*.{js,jsx,ts,tsx}', 
    './App.tsx' 
  ],
  theme: {
    extend: {
      borderWidth: {
        '3pix': '3px',
      },
      fontSize: {
        '42pix': '42px',
      },
      spacing: {
        '2pix': '2px',
        '10pix': '10px',
        '15pix': '15px',
        '20pix': '20px',
        '55pix': '55px',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
