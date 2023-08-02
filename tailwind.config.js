/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#D49A3F",
        footer: "#2E3E5C",
      },
      backgroundImage: {
        lineas1: "url('/images/tecno1.jpg')",
        watsap: "url(/images/watsap.png)"

      },
      
    },
    
  },
  plugins: [require("flowbite/plugin")],
});
