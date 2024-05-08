import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card } from "@/components/ui/card";
const Team = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 text-dark" id="team">
      <h1 className="font-bold text-3xl md:text-5xl">Time +Tech</h1>
      <p className="font-bold md:text-2xl">Arraste para o lado &rarr;</p>
      <Carousel className="w-[300px] md:w-[500px] md:text-3xl">
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col justify-center m-auto text-center">
              <Image
                src="/images/vinicius.jpeg"
                height={300}
                width={300}
                alt=""
                className="rounded-lg m-auto "
              />
              <h1 className="text-center text-4xl md:text-5xl font-bold">Vinicius</h1>
              <p>Programador JS, PHP e Flutter</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col justify-center m-auto text-center">
              <Image
                src="/images/victor.jpeg"
                height={300}
                width={300}
                alt=""
                className="rounded-lg m-auto w-[300px] h-[300px] object-cover"
              />
              <h1 className="text-center text-4xl md:text-5xl font-bold">Victor</h1>
              <p>Programador JS, Java e Go</p>
            </div>
          </CarouselItem>
          
          <CarouselItem>
            <div className="flex flex-col justify-center m-auto text-center ">
              <Image
                src="/images/miguel.webp"
                height={300}
                width={300}
                alt=""
                className="rounded-lg m-auto w-[300px] h-[300px] object-cover"
              />
              <h1 className="text-center text-4xl md:text-5xl font-bold">Miguel</h1>
              <p className="text-center">Designer Gráfico, UI/UX, <br /> Modelador 3D, Ilustrador e Tradutor</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col justify-center m-auto text-center">
              <Image
                src="/images/luiz.jpeg"
                height={300}
                width={300}
                alt=""
                className="rounded-lg m-auto "
              />
              <h1 className="text-center text-4xl md:text-5xl font-bold">Luiz</h1>
              <p>Gerente e Administrador</p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Team;
