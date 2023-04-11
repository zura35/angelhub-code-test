/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    minWidth: {
      'invt-op-cover': '260px',
      'invt-op-card-container': '768px',
    },
    maxWidth: {
      'invt-op-cover': '260px',
      'invt-op-card-container': '900px',
    },
    minHeight: {
      'invt-op-cover': '383px',
    },
    maxHeight: {
      'invt-op-cover': '383px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
}
