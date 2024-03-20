import { Dot } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Skills = () => {
  const skills = [
    { name: "React", level: "Muy bien" },
    { name: "Node.js", level: "Muy bien" },
    { name: "Express", level: "Muy bien" },
    { name: "C# (ASP.NET Core)", level: "Muy bien" },
    { name: "TypeScript", level: "Poco" },
    { name: "Next.js", level: "Regular" },
    { name: "Astro", level: "Regular" },
    { name: "Sql", level: "Muy bien" },
    { name: "NoSQL", level: "Regular" },
    { name: "Figma", level: "Regular" },
    { name: "Angular", level: "Poco" },
    { name: "Java", level: "Poco" },
    { name: "C++", level: "Poco" },
    { name: "Bootstrap", level: "Muy bien" },
    { name: "Tailwindcss", level: "Muy bien" },
    { name: "PHP", level: "Poco" },
    { name: "Postman", level: "Muy bien" },
    { name: "Css", level: "Regular" },
  ];

  // Filtra las habilidades por nivel
  const muyBienSkills = skills.filter((skill) => skill.level === "Muy bien");
  const regularSkills = skills.filter((skill) => skill.level === "Regular");
  const basicoSkills = skills.filter((skill) => skill.level === "Poco");

  return (
    <section className="containerr min-h-screen bg-neutral-950 text-slate-200 flex flex-col items-center">
      <header className="w-full h-32 max-w-4xl md:max-w-4xl  xl:max-w-6xl flex-col gap-y-4 md:mt-0 md:flex-row flex items-center justify-center md:justify-between bg-transparent z-50">
        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold ml-4">
          Yuliam Osorio
        </h1>
        <ul className="flex gap-8 mr-4 xl:text-lg 2xl:text-xl">
          <li>
            <Link
              to={"/"}
              className="cursor-pointer hover:border-b border-purple-800">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/skills"}
              className="cursor-pointer border-b border-purple-800">
              Habilidades y Experiencia
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer hover:border-b border-purple-800">
              Proyectos
            </Link>
          </li>
        </ul>
      </header>
      <div className="max-w-3xl mt-0 md:mt-20 h-full w-full space-y-20 py-16 px-2 md:pt-0 md:px-0 ">
        <div className="">
          <h2 className="text-5xl xl:text-6xl font-bold mb-14 text-white">
            Mis Habilidades
          </h2>
          <div>
            <h3 className="text-2xl xl:text-4xl font-semibold mt-6 text-slate-200">
              Avanzado
            </h3>
            <hr className="to-purple-600 border border-purple-500" />
            <ul className="text-lg xl:text-2xl text-neutral-300 pl-1 space-y-2 grid grid-cols-2 mt-5">
              {muyBienSkills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <Dot size={16} className="mr-2 mt-1" />
                  <div>
                    <p className="text-neutral-300 font-light">{skill.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl xl:text-4xl font-semibold mt-6 text-slate-200">
              Intermedio
            </h3>
            <hr className="to-purple-600 border border-purple-500" />
            <ul className="text-lg xl:text-2xl text-neutral-300 pl-1 space-y-2 grid grid-cols-2 mt-5">
              {regularSkills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <Dot size={16} className="mr-2 mt-1" />
                  <div>
                    <p className="text-neutral-300 font-light">{skill.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl xl:text-4xl font-semibold mt-6 text-slate-200">
              Básico
            </h3>
            <hr className="to-purple-600 border border-purple-500" />
            <ul className="text-lg xl:text-2xl text-neutral-300 pl-1 space-y-2 grid grid-cols-2 mt-5">
              {basicoSkills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <Dot size={16} className="mr-2 mt-1" />
                  <div>
                    <p className="text-neutral-300 font-light">{skill.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-5xl xl:text-6xl font-bold mb-12 text-white">
            Mi experiencia
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl xl:text-4xl font-semibold mt-6 text-slate-200">
                Soporte de Sistemas
              </h3>
              <hr className="to-purple-600 border border-purple-500" />

              <p className="text-lg xl:text-2xl text-neutral-300 mt-5">
                En Colautos Mazda, desempeñé un papel clave como técnico de
                soporte de TI, proporcionando asistencia técnica a los usuarios
                de la empresa y manteniendo el funcionamiento eficiente de los
                equipos y sistemas. Esto incluyó la resolución de problemas, la
                instalación de software y hardware, y la gestión de la
                infraestructura de red.
              </p>
            </div>
            <div>
              <h3 className="text-2xl xl:text-4xl font-semibold mt-6 text-slate-200">
                Desarrollo de Aplicaciones
              </h3>
              <hr className="to-purple-600 border border-purple-500" />

              <p className="text-lg xl:text-2xl text-neutral-300 mt-5">
                Además, tuve la oportunidad de liderar el desarrollo de dos
                aplicaciones internas para mejorar la eficiencia y productividad
                de los procesos empresariales. Utilizando tecnologías como
                React.js y Node.js, desarrollé soluciones personalizadas que
                cumplían con los requisitos específicos de la empresa y
                proporcionaban un valor agregado a las operaciones diarias.
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="flex items-center sm:justify-normal justify-center">
            <Link className="border text-center hover:font-semibold border-purple-500 px-5 py-2 rounded hover:bg-black transition-all duration-500">
              Ver proyectos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
