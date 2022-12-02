/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				slategray: '#777E90',
				ghostwhite: '#F5F6FA',
				alignwhite: '#F8F8F8',
				smoke: '#F1F3F8',
				darkblue: '#28336F',
				darkblack: '#2A2E43',
				action: '#1CC5DC',
				mercury: '#E6E8EC',
				lightgray: '#B1B5C3',
				yellow: '#F2B556',
				danger: '#FF114A',
				success: '#5DC80C',
				thingreen: '#EBFDF4',
				thinyellow: '#FBF5EB',
				info: '#245DF1',
				whitesmoke: '#F5F6F7',
			},
    },
  },
  plugins: [],
}