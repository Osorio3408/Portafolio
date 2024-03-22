import React from "react";
import { Link } from "react-router-dom";
import { CardEnterprise } from "../../Components/CardEnterprise/CardEnterprise";

export const Proyects = () => {
  const proyecto1 = ["React", "Tailwind", "Supabase"];
  const proyecto2 = ["React", "NodeJS", "JWT", "Mysql", "Tailwind"];

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
              className="cursor-pointer hover:border-b border-purple-800">
              Habilidades y Experiencia
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer border-b border-purple-800">
              Proyectos
            </Link>
          </li>
        </ul>
      </header>
      <div className="max-w-6xl mt-0 md:mt-20 h-full w-full space-y-20 py-16 px-2 md:pt-0 md:px-0 grid place-content-center">
        <h2 className="text-4xl xl:text-6xl font-bold mb-12 text-white">
          Proyectos
        </h2>
        <CardEnterprise
          name={"Reportes de seguridad"}
          description={
            "El proyecto Reportes de Seguridad es una aplicación web desarrollada como una herramienta integral para el personal de Recursos Humanos (RH). Su principal objetivo es permitir que los usuarios de la empresa puedan reportar incidentes o riesgos que observen dentro de las instalaciones, facilitando así la comunicación y gestión eficiente de la seguridad en el lugar de trabajo."
          }
          herramientas={proyecto1}
          url={"proyecto1.webp"}
        />
        <CardEnterprise
          name={"Control de asistencia a eventos"}
          description={
            "El proyecto de Control de Asistencia a Eventos fue concebido con el objetivo de proporcionar a la empresa una herramienta eficiente para gestionar y llevar un registro detallado de la asistencia a cualquier evento interno o reunión corporativa. Esta aplicación permite recopilar información precisa sobre quiénes confirmaron su asistencia y quiénes finalmente participaron."
          }
          herramientas={proyecto2}
          url={"proyecto2.webp"}
        />
      </div>
    </section>
  );
};
