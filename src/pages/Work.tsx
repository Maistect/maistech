import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <section className="flex max-md:flex-col justify-center items-center md:gap-12 gap-2 text-dark " id="work">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="font-bold text-3xl md:text-5xl">Trabalhamos com:</h1>
        <p className="md:w-[450px] w-[350px] pl-[22px] pr-[22px] text-justify text-[22px] md:text-[30px]">
          Sites, apps, logotipos, designs, videos, modelagem 3d, e traduções.
          Nossa equipe sempre estará disposta a ajudá-lo
        </p>
      </div>
      <Image
        src="/images/users.svg"
        width={200}
        height={200}
        alt=""
        className=" w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
      />
    </section>
  );
};

export default Work;
