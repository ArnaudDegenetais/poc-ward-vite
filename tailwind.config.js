/** @type {import('tailwindcss').Config} */
export default {
    relative: true,
    content: [
        './index.html',
        './pages/**/*.{html,vue,js,ts,jsx,tsx}',
        './components/**/*.{html,vue,js,ts,jsx,tsx}',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                'blue-emn-dark': '#00004d',
                'blue-emn-light': '#1244c0',
                'blue-emn': '#06166b',
                'red-emn-mate': '#a90927',
                'red-emn-logo': '#ea0022',
            },
            boxShadow: {
                'emn-global': '4px 4px 3px 3px rgb(0 0 0 / 0.4)',
                element: '2px 2px 3px 1px rgb(0 0 0 / 0.4)',
            },
        },
    },
    plugins: [],
}

