/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        wider: "0.05em",
      },
      screens: {
        vvs: "250px",
        md: "1000px",
        emd: "1010px",
        lg: "1200px",
      },
      colors: {
        bg__color: "#121724",
        primary__color: "#3662E3",
        secondary__color: "#5D2DBC",

        text: "#D8DFEC",
        para: "#9DA7B8",
        border_grey: "#DBD8D4",
        // bg__color: "#5C626B",
        // primary__color: "#590DE1",
        // secondary__color: "#5D2DBC",
        // text: "#333333",
        // para: "#94A2BC",
        // border_grey: "#DBD8D4",
      },
    },
  },
  plugins: [],
};
