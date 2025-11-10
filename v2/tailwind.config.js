/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f8f7fc',
                    100: '#efedf5',
                    200: '#e7e6eb',
                    300: '#d5d1e6',
                    400: '#c9c3e1',
                    500: '#491E76',
                    600: '#4B2279',
                    700: '#4A2176',
                    800: '#451B73',
                    900: '#3a165e',
                },
                accent: {
                    50: '#e6f7fe',
                    100: '#b3e9fc',
                    200: '#22B6FC',
                    300: '#25B7FD',
                    400: '#28B7FD',
                    500: '#20B6FD',
                    600: '#1a92ca',
                    700: '#146d97',
                },
                purple: {
                    50: '#f8f7fc',
                    100: '#efedf5',
                    200: '#e7e6eb',
                    300: '#d5d1e6',
                    400: '#c9c3e1',
                    500: '#491E76',
                    600: '#4B2279',
                    700: '#4A2176',
                    800: '#451B73',
                    900: '#3a165e',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}