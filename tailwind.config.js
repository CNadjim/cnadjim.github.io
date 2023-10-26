const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            backgroundImage: {
                beams: "url('/src/assets/image/beams.jpeg')",
                grid: "url('/src/assets/svg/grid.svg')"
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'hero-color': '#2d2e32',
                'text-color': '#767676'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}