import React, { forwardRef, useRef } from "react";
import { BsLaptop } from "react-icons/bs";
import { TbPointFilled, TbPointerCheck } from "react-icons/tb";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const Products = () => {
  const ref = useRef(null);
  const refS = useRef(null);
  const refV = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clickServer = () => {
    refS.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clickCams = () => {
    refV.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[100%]">
      <div className="bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] lg:h-[60vh] h-[30vh]  bg-cover flex justify-center items-center">
        <h1 className="text-center font-bold text-8xl bold  "></h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 lg:gap-6 px-2 m-2 justify-center items-center">
        <Card className="m-6  w-72 flex items-center justify-center">
          <div className="bg-gradient-to-r from-pink-400 to-red-500  rounded-full w-[80px] h-[80px] relative">
            <BsLaptop className="text-8xl absolute -left-10 -bottom-8" />
          </div>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-2 text-base font-semibold"
            >
              CÓMPUTO
            </Typography>
            <Typography>
              Equipos que se adaptan a tus necesidades. Para tu Hogar y oficina,
              todo lo encuentras aquí.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleClick}>Ver mas</Button>
          </CardFooter>
        </Card>
        {/* --------------------------------------------------------------- */}
        <Card className="m-6  w-72 flex items-center justify-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[80px] h-[80px] relative">
            <AiOutlineCloudServer className="text-8xl absolute -left-10 -bottom-8" />
          </div>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-2 text-base font-semibold"
            >
              REDES Y TELECOMUNICACIONES
            </Typography>
            <Typography>Equipa adecuadamente tu organización</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={clickServer}>Ver mas</Button>
          </CardFooter>
        </Card>
        {/* --------------------------------------------------------------- */}
        <Card className="m-6  w-72 flex items-center justify-center">
          <div className="bg-gradient-to-r from-amber-200 to-yellow-500 rounded-full w-[80px] h-[80px] relative">
            <BiCctv className="text-8xl absolute -left-10 -bottom-8" />
          </div>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-2 text-base font-semibold"
            >
              VIDEO VIGILANCIA
            </Typography>
            <Typography>
              Mantén a tu organizacion en constante monitoreo
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={clickCams}>Ver mas</Button>
          </CardFooter>
        </Card>
      </div>
      {/* ---------------------------------------------------------------------------- */}
      <div
        ref={ref}
        className="grid lg:grid-cols-4 gap-4 mx-20 justify-center items-center"
      >
        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://www.hp.com/content/dam/sites/worldwide/homepage/images/Pavilion14-Trixie.png')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Laptops
            </Typography>
          </CardBody>
        </Card>

        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_91990112/fee_786_587_png')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Clones
            </Typography>
          </CardBody>
        </Card>

        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://plus.unsplash.com/premium_photo-1678564741870-d68a69925537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Componentes
            </Typography>
          </CardBody>
        </Card>
        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/377fb64a459ddb1d7a833089bf9e1d15/original.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Impresoras
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* ---------------------------------------------------------------------------- */}
      <div
        ref={refS}
        className="grid lg:grid-cols-3 gap-4 mx-20 justify-center items-center mt-16"
      >
        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://assets.ext.hpe.com/is/image/hpedam/s00010510?$zoom$#.png')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Servidores
            </Typography>
          </CardBody>
        </Card>

        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTMwMzJ8aW1hZ2UvanBlZ3xoNWIvaDc2LzExNjAwODAzNDYzMTk4LmpwZ3w0NmUzODdiZmM2MWEzNjcyYmY5ZTI2NWE4OGM3YzFlNmQwYzYwODI3ODIxNjA1ZDU0Zjk1MDNkYzdmZWZkMWNi/4C9F9C6A-4AE1-403E-811D-2F871A7426E9.jpg')] bg-contain bg-no-repeat bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Routers - Networking
            </Typography>
          </CardBody>
        </Card>

        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://www.hp.com/es-es/shop/Html/Merch/Images/c08145418_1750x1285.jpg')] bg-contain bg-no-repeat bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Workstations
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* ---------------------------------------------------------------------------- */}
      <div
        ref={refV}
        className="grid lg:grid-cols-3 gap-4 mx-20 justify-center items-center mt-16"
      >
        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000002/S000000003/S000000025/OFR007893/M000041091/SM000058343/images/%E5%8D%8A%E7%90%8356-%E5%9F%BA%E7%BA%BF-%E6%AD%A3%E9%9D%A2.png.thumb.1280.1280.png?f=webp')] bg-contain bg-no-repeat bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Cámaras de vigilancia
            </Typography>
          </CardBody>
        </Card>

        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://th.bing.com/th/id/R.2f4faae06970ee94d7356cca7bcf02bc?rik=Hbqo66G2E6%2fiOg&pid=ImgRaw&r=0')] bg-contain bg-no-repeat bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              HikCentral
            </Typography>
          </CardBody>
        </Card>

        <Card className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
          <CardHeader
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full  rounded-none bg-[url('https://th.bing.com/th/id/OIP.8M4zDHk2KiAXCyn15aDLfAHaDH?pid=ImgDet&rs=1')] bg-contain bg-no-repeat bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium  leading-[1.5]"
            >
              Cercado Eléctrico
            </Typography>
          </CardBody>
        </Card>

        
          <a
            href="https://wa.link/woekuf"
            target="_blank"
            className="hover:text-blue-500"
          >
            <Tooltip content="COTIZAR PRODUCTOS">
            <Avatar
              size="xl"
              variant="circular"
              className="cursor-pointer shadow fixed bottom-3 right-14"
              src="images/watsap.png"
            />
            </Tooltip>
          </a>
        
      </div>
    </div>
  );
};

export default forwardRef(Products);
