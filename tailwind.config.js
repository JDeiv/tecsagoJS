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
        primary: "#2586E0",
        secondary: "#F1B62E",
        footer: "#2E3E5C",
      },
      backgroundImage: {
        lineas1: "url('/images/lineas1.png')",
        watsap: "url(/images/watsap.png)",
        logo: "url('/images/tecsago1.webp')",
        

      },
      
    },
    
  },
  plugins: [require("flowbite/plugin")],
});
