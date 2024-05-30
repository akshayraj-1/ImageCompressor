/** @type {import('tailwindcss').Config} */
import ImageData from "./values/images-data.json";

module.exports = {
    content: [
        "./public/**/*.{html,css}",
        "./views/*.ejs",
        "./views/**/*.ejs"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#fff",
                secondary: "#fefefe",
                textPrimary: "#2d3737",
                textSecondary: "#9b9fa9",
                accent: "#407BFF",
                accentLight: "#60a7f9",
                grad1: "#f3f7ff",
                grad2: "#F8F8FF"
            },
            backgroundImage: {
                mainBg: `url("${ImageData.mainBg}")`,
            },
            boxShadow: {
                navBar: "0px 10px 25px -5px rgba(33, 35, 38, 0.05)",
                mainCard: "0px 25px 123px 0px rgba(33, 35, 38, 0.1)",
                primaryButton: "0px 20px 80px 0px rgba(74, 144, 226, 0.2)"
            },
            fontFamily: {
                poppins: "Poppins, sans-serif"
            }
        },
    },
    plugins: [],
}