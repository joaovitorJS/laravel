const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                heebo: ['Heebo', ...defaultTheme.fontFamily.sans],
                barlow: ['Barlow', ...defaultTheme.fontFamily.sans],

            },
            colors:  {
                'background': '#F5F8FA',
                'blueDark': '#123952',
                'blueButton': '#115D8C',
                'shapes': '#DCE2E5',
                'textColor': '#617480',
                'textComplement': '#A0ACB2',
                'textTitle': '#123952',
                'orange': '#F25D27',
                'orangeLow': '#FFA585',
                'green': '#51B853',
                'greenLow': '#DCF5DD',
            },
            backgroundImage: {
                'gradient-green': 'linear-gradient(90deg, rgba(245,255,245,1) 0%, rgba(220,245,221,0) 100%)',
                'gradient-blue': 'linear-gradient(90deg, rgba(255,248,245,1) 0%, rgba(245,248,250,1) 100%)',
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
