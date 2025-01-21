import React, { useEffect, useState } from "react";
import IconGlobal from "../global/IconGlobal.tsx";
import type { RootObject } from "../../interfaces/dbData.ts";

// Definir el tipo para cada contador
interface Counter {
  name: string;
  targetValue: any;
  currentValue: number;
  suffix: string; // Nuevo campo para el sufijo del contador
}

interface Props {
  data: RootObject;
}

const BlockOne: React.FC<Props> = ({ data }) => {
  // Estado para los valores del contador, con nombres, valores objetivo y sufijo
  const [counters, setCounters] = useState<Counter[]>([
    {
      name: "Year of Experience",
      targetValue: data.yearsExperience,
      currentValue: 0,
      suffix: "+", // Agregamos el signo +
    },
    {
      name: `Miles around ${data.dataGeneral.location[0].city}`,
      targetValue: data.milesCover,
      currentValue: 0,
      suffix: "+", // Agregamos el signo +
    },
    {
      name: "On Time",
      targetValue: 100,
      currentValue: 0,
      suffix: "%", // Este tiene un símbolo de porcentaje
    },
  ]);

  // Función para animar los contadores
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => {
          if (counter.currentValue < counter.targetValue) {
            return {
              ...counter,
              currentValue: Math.min(
                counter.currentValue + Math.ceil(counter.targetValue / 100),
                counter.targetValue
              ),
            };
          }
          return counter;
        })
      );
    }, 30);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-10 border-b-[10px] border-primary mb-16">
      <div className="flex md:flex-row flex-col md:w-[85%] w-full mx-auto">
        <div className="md:w-[40%] w-full flex flex-col self-center px-6 py-6">
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-black text-primary">
              {data.name}
            </span>
            <span className="text-[30px] gradient-text">
              <IconGlobal />
            </span>
          </div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl text-secondary gradient-text">
            {data.home[1].title}
          </h2>
          <p className="mb-6 text-base leading-7 text-gray-600">
            {data.home[1].text}
          </p>
        </div>
        <div className="md:w-[40%] w-full px-6 py-6 flex items-center">
          <img
            src={data.gallery[7]}
            alt="aboutimage"
            className="relative z-10 object-cover md:w-[450px] md:h-[450px] w-full h-[300px] rounded-3xl shadow-xl"
          />
        </div>
        <div className="md:w-[20%] px-6 py-6 w-full flex flex-col justify-start items-start">
          {/* Renderizar los contadores dinámicamente */}
          {counters.map((counter, index) => (
            <div
              key={index}
              className="bg-secondary w-full p-6 rounded-lg shadow-lg text-white text-center mt-4 transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-4xl font-bold mb-2">
                {counter.currentValue}
                {counter.suffix} {/* Mostrar el sufijo dinámicamente */}
              </h3>
              <p className="text-lg">{counter.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary w-[85%] mb-[-100px] px-3 mx-auto rounded-full flex justify-center py-6 mt-10">
        <span className="md:text-[40px] text-[20px] text-center font-bold text-white">
          {data.slogan[1]}
        </span>
      </div>
    </section>
  );
};

export default BlockOne;
