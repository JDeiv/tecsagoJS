import Header from "./Header";
import Footer from "./Footer";

import { Button, Card } from "flowbite-react";

const About = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 flex flex-col items-center justify-center gap-4">
        <div className="col-span-4  lg:w-auto lg:h-auto md:w-[350px] w-[300px] mx-4">
          <img
            src="images/tec2.webp"
            alt="tecnico"
            className="object-cover lg:ml-6 rounded-lg w-full"
          />
        </div>

        <div className="col-span-4 px-4 py-2   lg:py-6 lg:mx-1 text-justify">
          <Card className="m-4 bg-blue-50">
            <div className=" bg-primary  md:w-1/2 lg:w-1/2 p-1 rounded-tr-full lg:mx-1 mx-4">
              <h1 className="text-2xl font-bold ">Quienes Somos?</h1>
            </div>
            <p className="my-4 lg:mx-1 mx-4">
              <span className="font-bold">TECASGO</span> Es una empresa dedicada
              a la comercialización y distribución de productos y equipos
              informáticos, electrónicos y telecomunicaciones, así como a la
              prestación de servicios de outsourcing de manera profesional y de
              alta calidad ofreciendo a nuestros clientes soluciones y
              herramientas para optimizar sus recursos y mejorar su entorno
              empresarial.
            </p>
          </Card>

          <Card className="m-4 bg-yellow-50">
            <div className=" bg-secondary  md:w-1/2 lg:w-1/2 p-1 rounded-tr-full lg:mx-1 mx-4">
              <h1 className="text-2xl font-bold">Nuestra Gente</h1>
            </div>
            <p className="my-4 lg:mx-1 mx-4">
              Nuestro equipo de colaboradores está integrado por personas con
              una amplia experiencia en el mercado de tecnología de la
              información, con una importante preparación académica y una
              mentalidad innovadora.Talento, colaboración, trabajo y compromiso,
              son solo algunas de las características que reúne la gente que
              integra nuestra organización; siempre estaremos dispuestos a
              servirle con oportunidad, honestidad y calidad.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
