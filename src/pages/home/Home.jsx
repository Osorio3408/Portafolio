import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/cv.pdf"; // Ruta al archivo PDF de tu CV
    downloadLink.download = "YuliamOsorio_CV.pdf"; // Nombre del archivo que se descargará
    downloadLink.click();
  };
  return (
    <section className="min-h-screen bg-neutral-950 text-slate-200 flex flex-col items-center">
      <header className="w-full h-40 max-w-4xl md:max-w-4xl xl:bg-transparent xl:max-w-6xl flex-col gap-y-4 pt-20 md:mt-0 md:flex-row flex items-center justify-between fixed top-0 bg-neutral-950 z-50 ">
        <h1 className="text-2xl font-semibold ml-4">Yuliam Osorio</h1>
        <ul className="flex gap-8 mr-4">
          <li>
            <Link
              to={"/"}
              className="cursor-pointer border-b border-purple-800">
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
            <Link className="cursor-pointer hover:border-b border-purple-800">
              Proyectos
            </Link>
          </li>
        </ul>
      </header>
      <div className="max-w-xl mt-64 h-full w-full space-y-20 py-16 px-2 md:pt-0 md:px-0 ">
        <div className="hover:cursor-pointer">
          <div className="w-36 h-36 rounded-full bg-white">
            <img
              src="/osorio.webp"
              alt=""
              className="rounded-full w-36 h-36 object-cover"
            />
          </div>
          <h2 className="text-5xl font-bold">Yuliam Osorio</h2>
          <div className="flex flex-row text-md text-purple-300 pl-1">
            <h3>Software Developer </h3> <span className="mx-2">|</span>
            <h3>IT Support Technician</h3>
          </div>
          <p className="text-base ml-1 text-gray-400">
            yuliamandrey@hotmail.com
          </p>
          <div className="pl-1 pt-3 flex gap-5 items-center">
            <Link
              to={"https://www.instagram.com/yosorio34"}
              title="Instagram"
              target="_blank">
              <Instagram
                size={18}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/yuliam-osorio-574b64264/"}
              title="Linkedin"
              target="_blank">
              <Linkedin
                size={18}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
            <Link
              to={"https://github.com/Osorio3408"}
              title="GitHub"
              target="_blank">
              <Github
                size={18}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
          </div>
          <div className="py-10">
            <p className=" text-xl font-light text-neutral-300">
              Hola, soy
              <span className="font-semibold">
                {" "}
                Yuliam Andrey Osorio Puerta
              </span>
              , un joven que le gusta y le apasiona la tecnologia y en
              especifico el desarrollo de software.
              <br />
              <br />
              Me especifico como desarollador de software tanto en el frontend
              como en el backend, ya que siento una pasión por el desarrollo en
              ambos sentidos.
              <br />
              <br />
              Me encanta estudiar nuevos temas y aprender algo nuevo cada vez
              que puedo, aun más cuando en el ambito de la tecnologia siempre
              hay cambios y actualizaciones.
              <br />
            </p>
          </div>
          <div className="flex gap-10 items-center justify-center md:justify-normal">
            <div className="flex items-center sm:justify-normal justify-center">
              <Link
                to={"/Skills"}
                className="border text-center hover:font-semibold border-purple-500 px-5 py-2 rounded hover:bg-black transition-all duration-500">
                Ver más
              </Link>
            </div>
            <div className="flex items-center sm:justify-normal justify-center">
              <button
                onClick={handleDownloadCV}
                className="border text-center hover:font-semibold border-purple-500 px-5 py-2 rounded hover:bg-black transition-all duration-500">
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
