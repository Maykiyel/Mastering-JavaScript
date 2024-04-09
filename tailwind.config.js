/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.js",
    "./Apps/**/*.html",
    "./Apps/src/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fade: "fade 0.5s",
      },
      container: {
        center: true,
      },
      screens: {
        xs: "457px",
      },
      boxShadow: {
        "2xl":
          "0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(0, 0, 0, 0.5), 0 0 100px -10px",
        "3xl":
          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22), 0 0 120px -10px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
