const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
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
                'shapes': '#DCE2E5',
                'textColor': '#617480',
                'textComplement': '#A0ACB2',
                'orange': '#F25D27',
                'green': '#51B853',
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
