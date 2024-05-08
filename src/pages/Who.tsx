import Image from "next/image";
import React from "react";

const Who = () => {
  return (
    <section className="flex max-md:flex-col justify-center items-center gap-6 text-dark" id="who">
      <div className="text-center flex flex-col gap-4">
        <h1 className="font-bold text-3xl md:text-5xl">Quem somos ?</h1>
        <p className="w-[350px] md:w-[450px] pl-[22px] pr-[22px] text-justify text-[23px] md:text-[30px]">
          Somos uma startup de tecnologia com foco em aplicações web e softwares
          de alta qualidade e eficiência. Contamos com uma equipe de
          profissionais preparados para atender todos os requisitos de forma
          performática e assertiva.
        </p>
      </div>
      <Image
        src="/images/working.svg"
        width={200}
        height={200}
        alt=""
        className="w-[250px] h-[250px] md:w-[400px] max-md:h-[400px]"
      />
    </section>
  );
};

export default Who;
