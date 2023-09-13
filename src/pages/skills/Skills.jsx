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
    { name: "SqlServer", level: "Muy bien" },
    { name: "NoSQL", level: "Regular" },
    { name: "Figma", level: "Regular" },
    { name: "Angular", level: "Poco" },
    { name: "Java", level: "Poco" },
    { name: "C++", level: "Poco" },
    { name: "Bootstrap", level: "Muy bien" },
    { name: "Tailwindcss", level: "Muy bien" },
    { name: "PHP", level: "Poco" },
  ];

  // Filtra las habilidades por nivel
  const muyBienSkills = skills.filter((skill) => skill.level === "Muy bien");
  const regularSkills = skills.filter((skill) => skill.level === "Regular");
  const basicoSkills = skills.filter((skill) => skill.level === "Poco");

  return (
    <section className="min-h-screen bg-neutral-950 text-slate-200 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-4xl xl:bg-transparent xl:max-w-6xl flex-col gap-y-4 md:flex-row flex items-center justify-between md:fixed top-10">
        <h1 className="text-2xl font-semibold">Yuliam Osorio</h1>
        <ul className="flex gap-8">
          <li className="">
            <Link to={"/"} className="cursor-pointer hover:border-b">
              Inicio
            </Link>
          </li>
          <li className="">
            <Link to={"/skills"} className="cursor-pointer border-b">
              Habilidades
            </Link>
          </li>
          <li className="">
            <Link className="cursor-pointer hover:border-b">Proyectos</Link>
          </li>
        </ul>
      </div>
      <div className="max-w-xl h-full w-full space-y-16 py-16 px-2 md:pt-0 md:px-0 ">
        <div className="">
          <h2 className="text-5xl font-bold mb-12 text-white">
            Mis Habilidades
          </h2>
          <div>
            <h3 className="text-2xl font-semibold mt-6 text-slate-200">
              Avanzado
            </h3>
            <hr />
            <ul className="text-lg text-neutral-300 pl-1 space-y-2 grid grid-cols-2 mt-5">
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
            <h3 className="text-2xl font-semibold mt-6 text-slate-200">
              Intermedio
            </h3>
            <hr />
            <ul className="text-lg text-neutral-300 pl-1 space-y-2 grid grid-cols-2 mt-5">
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
            <h3 className="text-2xl font-semibold mt-6 text-slate-200">
              Básico
            </h3>
            <hr />
            <ul className="text-lg text-neutral-300 pl-1 space-y-2 grid grid-cols-2 mt-5">
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
      </div>
    </section>
  );
};
