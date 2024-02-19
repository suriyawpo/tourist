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
                primary: "#201e1e",
                secondary: "#0174BE",
                third: "green",
                thirdh: "#ffA500"
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "50px"
            }
        }
    },
    plugins: []
};
