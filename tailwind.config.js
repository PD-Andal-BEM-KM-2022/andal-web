/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "var(--font-jakarta)",
      },
      fontSize: {
        ss: ".9rem",
      },
      colors: {
        "andal-light": "#EBEFF8",
        "andal-lightblue": "#CCDAE7",
        "andal-darkblue": "#040D21",
        "andal-lightgrey": "#94A0B8",
        "andal-lightgreyblue": "#94A0B8",
        "andal-darkgreyblue": "#4A5261",
        "andal-orange": "#C96E05",
        "andal-yellow": "#F1DC39",
        "andal-button-orange": "#F9B20B",
        "andal-yellow": "#F9B20B",
      },
    },
    plugins: [],
  },
};
