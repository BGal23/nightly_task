/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0f0f1a",
        "secondary-color": "#2b344d",
        "input-color": "#040407",
        "token-color": "#171C2F",
        "symbol-color": "#3E4864",
        "font-color": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
