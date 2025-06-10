/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                dark: '#1f1f1f',
                'dark-alt': '#2b2b2b',
                sand: '#f1e8e6',
                gold: '#facc15',
            },
            height: {
                input: '3rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

