/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{jsx,js}'],
	fishpool: "url('/src/assets2/fish-in-pool.jpg')",
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
		},
	},
	plugins: [],
	screens: {},
};
