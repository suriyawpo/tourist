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
                second: ["Sriracha"],
                third: [
                    "Permanent Marker"
                ]
            },
            colors: {
                primary: "#201e1e",
                secondary: "#0174BE",
                third: "green",
                thirdh: "green",
                four: "                #646efc"
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
