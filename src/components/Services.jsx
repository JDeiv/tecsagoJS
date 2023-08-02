import React from "react";

("use client");

import { Button, Card } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { TbPointFilled, TbPointerCheck } from "react-icons/tb";
import { GiElectric } from "react-icons/gi";
import { PiTreeStructureFill } from "react-icons/pi";

const Services = () => {
  return (
    // <div className="bg-[url('/images/tecno1.jpg')]  bg-cover w-full h-[90vh] p-4 bg-clip-content flex justify-between items-center">

    // </div>
    <div className="lg:grid lg:grid-cols-8  flex flex-col items-center justify-center gap-6">
      <div className="col-span-4 px-4 py-2 lg:py-6 lg:mx-1 text-justify flex items-center justify-center ">
        <Card className="w-sm lg:w-[600px] bg-blue-50">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Servicios
          </h2>
          <div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Contamos con una vasta experiencia en servicios de soporte, los
                que incluyen la solución de problemas de hardware y software.
              </p>
            </p>
          </div>
          <div>
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="font-bold text-primary hover:underline">
                  Diseño e implementación de proyectos tecnológicos
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-700 dark:text-gray-400">
                    Consultoría, diseño, integración e implantación de
                    soluciones avanzadas de voz y datos para empresas. El
                    proceso se inicia con la captura y el análisis de los
                    requerimientos del cliente para proponer las soluciones más
                    adecuadas a sus necesidades y a su presupuesto. Una vez
                    escogida la solución se procede a la integración,
                    implantación y entrega del proyecto llave en mano
                  </p>
                </Accordion.Content>
              </Accordion.Panel>

              {/* -------------------------------------------------------------------- */}

              <Accordion.Panel>
                <Accordion.Title className="font-bold text-secondary hover:underline">Infraestructura de TI</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-700 dark:text-gray-400">
                    Consultoría, diseño, configuración e instalación de toda la
                    arquitectura de red necesaria. Incluye la integración de
                    equipos activos y pasivos (switches, ruteadores, servidores,
                    etc), sistemas de alimentación ininterrumpida (UPS),
                    ingenieria electrica y acondicionamiento de local (bancadas,
                    equipos de refrigeración y pequeñas obras de adecuación)
                  </p>

                  <div className="text-gray-700 leading-8">
                    <PiTreeStructureFill className="inline " />
                    Cableado estructurado
                  </div>
                  <div className="text-gray-700 leading-8">
                    <PiTreeStructureFill className="inline " />
                    Instalaciones eléctricas
                  </div>
                  <div className="text-gray-700 leading-8">
                    <PiTreeStructureFill className="inline " />
                    Diseño de centro de datos
                  </div>
                  <div className="text-gray-700 leading-8">
                    <PiTreeStructureFill className="inline " />
                    Diseño y configuración de intranet
                  </div>
                  <div className="text-gray-700 leading-8">
                    <PiTreeStructureFill className="inline " />
                    Telefonía IP con software libre o propietario
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              {/* -------------------------------------------------------------------- */}
              <Accordion.Panel>
                <Accordion.Title className="font-bold text-primary hover:underline">Cómputo</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-700 dark:text-gray-400">
                    Nuestra asesoría en informática y computación va soportada
                    con el suministro de equipo de computación de alta calidad,
                    certificado por las mejores marcas, líderes en cada área de
                    mercado.
                  </p>
                  <p className="mb-2 text-gray-700 dark:text-gray-400">
                    Nuestro enfoque siempre está orientado a la satisfacción
                    plena de las necesidades y deseos de los clientes. Por lo
                    tanto, más que vender equipo, asesoramos en la construcción,
                    mantenimiento y expansión de la infraestructura tecnológica.
                  </p>

                  <div className="text-gray-700 leading-8 ">
                    <TbPointerCheck className="inline text-black text-xl" />
                    Mantenimiento preventivo y correctivo de equipos
                  </div>
                  <div className="text-gray-700 leading-8">
                    <TbPointerCheck className="inline text-black text-xl" />
                    Ingenieria en redes.
                  </div>
                  <div className="text-gray-700 leading-8">
                    <TbPointerCheck className="inline text-black text-xl" />
                    Soluciones con el sistema operativo. Windows, Linux, IOS
                  </div>
                  <div className="text-gray-700 leading-8">
                    <TbPointerCheck className="inline text-black text-xl" />
                    Outsourcing
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

              {/* -------------------------------------------------------------------- */}
              <Accordion.Panel>
                <Accordion.Title className="font-bold text-secondary hover:underline">Seguridad Electrónica</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-700 dark:text-gray-400">
                    Consultoría, diseño e implantación de soluciones de video
                    vigilancia y control de accesos combinando diferentes
                    tecnologías (análogo e IP) para una solución óptima en costo
                    y calidad
                  </p>
                  

                  <div className="text-gray-700  leading-8">
                    <GiElectric className="inline text-black text-xl" />
                    Circuito cerrado de televisión (CCTV)
                  </div>
                  <div className="text-gray-700  leading-8">
                    <GiElectric className="inline text-black text-xl" />
                    Mantenimiento de sistemas CCTV
                  </div>
                  <div className="text-gray-700  leading-8">
                    <GiElectric className="inline text-black text-xl" />
                    Sistema de alarma de intrusión e incendio, residencia, comercial e industrial
                  </div>
                  <div className="text-gray-700  leading-8">
                    <GiElectric className="inline text-black text-xl" />
                    Sistema de control de accesos
                  </div>
                  <div className="text-gray-700  leading-8">
                    <GiElectric className="inline text-black text-xl" />
                    Cercas eléctricas
                  </div>
                  <div className="text-gray-700  leading-8">
                    <GiElectric className="inline text-black text-xl" />
                    Capacitación y apoyo en el desarrollo de proyectos
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

              
            </Accordion>
          </div>
        </Card>
      </div>
      <div className="col-span-4 p-2 lg:w-auto lg:h-auto md:w-[350px] w-[300px]">
        <img
          src="images/tec1.JPG"
          alt="tecnico"
          className="object-contain lg:ml-6 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Services;
