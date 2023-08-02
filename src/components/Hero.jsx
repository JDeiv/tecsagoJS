import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
("use client");
import { Carousel } from "flowbite-react";

import { DiTechcrunch } from "react-icons/di";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";
import Main from "./Main";
import { Link, Route, Routes } from "react-router-dom";

const Hero = () => {
  return (
    <section >
      <div className="min-h-[90vh] grid grid-cols-1 w-full lg:grid-cols-8 ">
        {/*Lado izquierdo. TEXTO ------------------------------------------------ */}
      <div className="md:col-span-4 flex items-center justify-center p-8 xl:p-8 ">
        {/*TITULO-----------------------------*/}
        <div className="flex flex-col gap-8 ">
          <h1 className="text-4xl xl:text-5xl font-bold xl:leading-[7.5rem] ">
            Brochure de Servicios. Soluciones {""}
            <span className="text-primary md:mt-1 py-2 px-6 border-8 border-primary relative inline-block">
              Tecnológicas
              <DiTechcrunch className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Damos respuesta con efectividad y oportunidad a cada una de las
            interrogantes que se plantea el desarrollo de sus proyectos.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to='contact'><button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contáctanos
            </button></Link>
          </div>
        </div>
      </div>
      {/*Lado derecho. MULTIMEDIA ------------------------------------------------ */}
      <div className="md:col-span-4 flex items-center justify-center">
        {/* <img
          src="images/tec1.JPG"
          alt=""
          className="rounded-lg w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
        /> */}
        <Carousel className="md:h-[400px] lg:h-[600px] h-[300px] ">
          <img
            alt="..."
            src="images/tec1.webp"
            className="w-[250px] h-[250px] lg:w-auto lg:h-[90%] md:w-[375px] md:h-[375px] object-contain  rounded-2xl shadow-lg shadow-primary"
          />
          <img
            alt="..."
            src="images/tec2.webp"
            className="w-[250px] h-[250px] lg:w-auto lg:h-[90%] md:w-[375px] md:h-[375px] object-contain  rounded-2xl shadow-lg shadow-primary"
          />
          <img
            alt="..."
            src="images/tec3.webp"
            className="w-[250px] h-[250px] lg:w-auto lg:h-[90%] md:w-[375px] md:h-[375px] object-contain  rounded-2xl shadow-lg shadow-primary"
          />
          <img
            alt="..."
            src="images/tec4.webp"
            className="w-[250px] h-[250px] lg:w-auto lg:h-[90%] md:w-[375px] md:h-[375px] object-contain  rounded-2xl shadow-lg shadow-primary"
          />
          <img
            alt="..."
            src="images/tec5.webp"
            className="w-[250px] h-[250px] lg:w-auto lg:h-[90%] md:w-[375px] md:h-[375px] object-contain  rounded-2xl shadow-lg shadow-primary"
          />
        </Carousel>
      </div>
      </div>

      <div>
        <Main />
      </div>
      
      
    </section>
    
  );
};

export default Hero;
