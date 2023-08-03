import React from "react";

import { Button } from "@material-tailwind/react";

// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="">
          <a
            href="#"
            className="text-2xl font-bold flex items-center  p-1 bg-footer text-white"
          >
            <h2 className="uppercase font-semibold">tecsago</h2><span className="text-secondary text-5xl">.</span>
          </a>
        </div>
        
        {/* Social media */}
        <nav className="flex items-center gap-4 justify-center">
          {/*<a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
    </a>*/}
    <Link to="about" className="text-white  hover:border-b-2 rounded-md border-blue-400">
          Nosotros
        </Link>
        <Link to="products" className="text-white  hover:border-b-2 rounded-md border-blue-400">
          Productos
        </Link>
        <Link to="services" className="text-white  hover:border-b-2 rounded-md border-blue-400">
          Servicios
        </Link>
          <a href="https://www.facebook.com/TECSAGO?mibextid=ZbWKwL" target="_blank" className="block text-white text-xl p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          {/*<a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiGithubLine />{" "}
</a>*/}


        </nav>
      </div>
      <div className="mt-6">
        <p className="text-gray-300 text-center">
          © jdeiv 2023 - All Rights Reserved
        </p>
      </div>
      {/* <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Contáctanos
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center justify-start text-justify">
          <a
            href="https://wa.link/woekuf" target="_black"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            <Button variant="outlined" className="text-white">+593 992651613</Button>
          </a>
          
          </div>
          
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            
          </a>
          <Link to="about" className="text-white  hover:border-b-2 rounded-md border-blue-400">
          Nosotros
        </Link>
        <Link to="products" className="text-white  hover:border-b-2 rounded-md border-blue-400">
          Productos
        </Link>
        <Link to="services" className="text-white  hover:border-b-2 rounded-md border-blue-400">
          Servicios
        </Link>
          {/* <Link to='contact'><button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contáctanos
            </button></Link> 
        </nav>
      </div> */}
      
    </footer>
  );
};

export default Footer;
