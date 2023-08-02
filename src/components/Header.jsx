import React, { useState } from "react";

//Icons 
import { 
    RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine, 
} from "react-icons/ri";
import { Link } from "react-router-dom";


const Header = ()=>{
    const [showMenu, setShowMenu] = useState(false);
return (
    <header className="flex items-center justify-between xl:justify-start w-full p-4 z-50 h-[10vh]">
        <div className="xl:w-1/6 text-center -mt-4">
        <Link to='/' className="text-2xl font-bold relative p-1 bg-white">
          Tecsago<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </Link>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <Link to="/" className="hover:text-amber-500 hover:border-b-2 rounded-md border-blue-400">
          Home
        </Link>
        <Link to="about" className="hover:text-amber-500 hover:border-b-2 rounded-md border-blue-400">
          About Us
        </Link>
        <Link to="services" className="hover:text-amber-500 hover:border-b-2 rounded-md border-blue-400">
          Services
        </Link>
        <Link to="products" className="hover:text-amber-500 hover:border-b-2 rounded-md border-blue-400">
          Products
        </Link>
        <Link to="contact" className="hover:text-amber-500 hover:border-b-2 rounded-md border-blue-400">
          Contactos
        </Link>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
    
)
}

export default Header;