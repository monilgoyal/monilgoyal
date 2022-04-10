module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                typeWriter: "typeWriter 3s steps(12) infinite,borderBlink .3s steps(24) infinite",
                changeText: "changeText 9s infinite"
            },
            keyframes: {
                typeWriter: {
                    "0%, 100%": { width: "0%" },
                    "25%,90%": { width: "50%" },
                    "50%, 70%": { width: "100%" }
                },
                borderBlink: {
                    to: { borderColor: "transparent" }
                },
                changeText: {
                    "0%,33%": { content: "attr(data-text-1)" },
                    "33.33%,66.33%": { content: "attr(data-text-2)" },
                    "66.66%, 99.99%": { content: "attr(data-text-3)" }
                }
            }
        },
    },
    plugins: [],
}