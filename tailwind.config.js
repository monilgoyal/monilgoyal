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
                changeText: "changeText 9s infinite",
                aosRtoL: "aosRtoL 1s forwards ease-out",
                aosLtoR: "aosLtoR 1s forwards ease-out",
                loading: "dash 2s infinite",
                check: "dashCheck 1.5s 0.35s ease-in-out infinite"
            },
            keyframes: {
                dash: {
                    "0%": {
                        strokeDashoffset: 1000
                    },
                    "100%": {
                        strokeDashoffset: 0
                    }
                },
                dashCheck: {
                    "0%": {
                        strokeDashoffset: -100
                    },
                    "100%": {
                        strokeDashoffset: 400
                    }
                },
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
                },
                aosRtoL: {
                    "0%": {
                        transform: "translateX(-100%)",
                        opacity: 0

                    },
                    "100%": {
                        transform: "translateX(0%)",
                        opacity: 1
                    }
                },
                aosLtoR: {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: 0


                    },
                    "100%": {
                        transform: "translateX(0%)",
                        opacity: 1

                    }
                }
            }
        },
    },
    variants: {
        animation: ["motion-safe"]
    },
    plugins: [],
}