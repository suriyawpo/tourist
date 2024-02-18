/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                prime: [
                    "Montserrat",
                    "sans-serif"
                ],
                second: [
                    "Permanent marker"
                ]
            },
            colors: {
                primary: "#01051e",
                "primary-light":
                    "#050a33",
                secondary: "#0174BE",
                third: "#ffA500"
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px"
            }
        }
    },
    plugins: []
};
