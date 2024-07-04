/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)',
        'custom-gradient2' : ' radial-gradient(648.07% 142.88% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%)'
      },
    },
  },
  plugins: [],
}

