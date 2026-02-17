import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#A8C3A0",
                secondary: "#F5F1EA",
                accent: "#D8A48F",
                text: {
                    DEFAULT: "#2F2F2F",
                    light: "#5A5A5A",
                },
                border: "#E8E4DE",
                white: "#FFFFFF",
            },
            fontFamily: {
                heading: ["Playfair Display", "serif"],
                body: ["Inter", "sans-serif"],
            },
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
            },
            maxWidth: {
                "container": "1200px",
            },
        },
    },
    plugins: [],
};
export default config;
