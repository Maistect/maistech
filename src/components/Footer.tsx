import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark h-[60vh] font-mono flex flex-col justify-end">
      <Image src="/images/+tech.png" width={200} height={200} alt="" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"/>
      <h1 className="text-white text-3xl max-md:w-[250px] font-bold p-2 md:text-4xl">
        +Tech um novo capítulo para o seu negócio
      </h1>
      <p className="text-white p-2 md:text-2xl">Todos os direitos reservados ©</p>
    </footer>
  );
};

export default Footer;
