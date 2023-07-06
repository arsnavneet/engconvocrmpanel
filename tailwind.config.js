const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    mode: 'jit',
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                'primary': '#660708',
                'action': '#7B3F00',
                'blue': '#3c37ff',
                'darkbg': '#002336',
                'lightbg': '#eaeef0',
            },
            backgroundColor: {
                'primary': '#660708',
                'action': '#7B3F00',
                'blue': '#3c37ff',
                'darkbg': '#002336',
                'lightbg': '#eaeef0',
            },
            backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
            maxHeight:{
                '300': '300px',
            },
            maxWidth:{
                '600': '600px',
                '100': '100px',
                '200': '200px',
                '300': '300px',
                '20' : '20px'
            },
            minWidth:{
                '100': '100px',
                '200': '200px',
                '250': '250px',
                '20' : '20px'
            },
            minHeight:{
                '150': '150px',
                '300': '300px',
                '450': '450px',
            },
            width:{
                '100': '100px',
                '150': '150px',
                '200': '200px',
                '500': '500px',
            },
            boxShadow: {
                amit: '-8px -8px 15px rgba(255, 255, 255, 1)',
            },
            order: {
               none: '0',
                '1': '1',
                '2': '2'
            }
        },
        container: {
            center: true,
            padding: '1rem',
            width: '95%',
            maxWidth: '95%',
            admin:{
                width: '100%'
            }
        },

    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
