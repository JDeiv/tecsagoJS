import React from "react";

const Main = () => {
  return (
    <section>
      <div className=" bg-gray-50 p-8">
        <div className="border bg-secondary w-2/5 md:w-1/6 lg:w-2/12 p-1 rounded-tr-full">
          <h3 className="uppercase text-base lg:text-xl text-white lg:mx-1  font-bold">Tecsago</h3>
        </div>
        <div className="px-4  mt-4">
          <p className="text-md lg:text-lg text-justify">
            TECSAGO Soluciones Informáticas & Tecnología somos una empresa
            dedicada al servicio profesional y comercialización en el campo
            tecnológico ofreciendo una solución de calidad basada en principios
            de buenas prácticas para el apoyo empresarial e institucional.
          </p>
        </div>
      </div>

      <div className=" bg-gray-50 p-8">
        <div className="border bg-secondary w-2/5 md:w-1/6 lg:w-2/12 p-1 rounded-tr-full">
          <h3 className="uppercase text-base lg:text-xl text-white lg:mx-1 font-bold">Servicios</h3>
        </div>
        <div className="px-4 mt-4">
          <p className="text-md lg:text-lg text-justify">
            Contamos con una vasta experiencia en servicios de soporte, los que
            incluyen la solución de problemas de hardware y software.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-lg lg:text-2xl font-medium text-gray-800 text-center">
        Con la Confianza de grandes Companías
      </h1>
      <div className="flex flex-col md:flex-row items-center md:justify-center flex-wrap gap-20">
        <img src="images/bancop.webp" className="w-40 rounded-lg shadow-md" />
        <img src="images/arcac.webp" className="w-40 rounded-lg shadow-md" />
        <img src="images/tonicorp.webp" className="w-40 rounded-lg shadow-md" />
        <img src="images/udla.webp" className="w-40 rounded-lg shadow-md" />
        <img src="images/highs.webp" className="w-40 rounded-lg shadow-md" />
      </div>
    </div>
    </section>
  );
};

export default Main;
