import { Github, Instagram, Linkedin, Clipboard } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/cv.pdf"; // Ruta relativa al archivo PDF en la carpeta `public`
    downloadLink.download = "YuliamOsorio_CV.pdf"; // Nombre del archivo que se descargará
    downloadLink.click();
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("yuliamandrey@hotmail.com");
    setCopied(true);

    // Después de 3 segundos, restablece el estado para ocultar el mensaje de copia
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <section className="containerr min-h-screen  text-slate-200 flex flex-col items-center">
      <header className="w-full h-32 max-w-4xl md:max-w-4xl xl:bg-transparent xl:max-w-6xl flex-col gap-y-4 md:mt-0 md:flex-row flex items-center justify-center md:justify-between  bg-transparent z-50 ">
        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold ml-4">
          Yuliam Osorio
        </h1>
        <ul className="flex gap-8 mr-4 xl:text-lg 2xl:text-xl">
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
      <div className="max-w-2xl mt-0 md:mt-32 h-full w-full space-y-20 pb-16 pt-5 px-2 md:pt-0 md:px-0 ">
        <div className="hover:cursor-pointer">
          <div className="hover:cursor-default w-36 h-36 2xl:w-44 2xl:h-44 rounded-full bg-white">
            <img
              src="/osorio.webp"
              alt=""
              className="rounded-full w-36 h-36 2xl:w-44 2xl:h-44 object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">
            Yuliam Andrey Osorio Puerta
          </h2>
          <div className="flex flex-row text-md md:text-xl 2xl:text-2xl text-purple-300 pl-1">
            <h3>Software Developer </h3> <span className="mx-2">|</span>
            <h3>IT Support Technician</h3>
          </div>
          <div className="flex justify-between mr-5">
            <p className="text-base md:text-lg 2xl:text-xl ml-1 text-gray-400">
              yuliamandrey@hotmail.com
            </p>
            <button
              onClick={handleCopy}
              className="focus:outline-none relative">
              <Clipboard
                size={18}
                className="hover:scale-110 hover:text-purple-700 cursor-pointer"
              />
              {copied && (
                <p className="absolute top-2 -left-4 mt-[-25px] text-purple-500 text-xs font-bold">
                  Copiado!
                </p>
              )}
            </button>
          </div>
          <div className="pl-1 pt-3 flex gap-5 items-center">
            <Link
              to={"https://www.instagram.com/yosorio34"}
              title="Instagram"
              target="_blank">
              <Instagram
                size={20}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/yuliam-osorio-574b64264/"}
              title="Linkedin"
              target="_blank">
              <Linkedin
                size={20}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
            <Link
              to={"https://github.com/Osorio3408"}
              title="GitHub"
              target="_blank">
              <Github
                size={20}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
          </div>
          <div className="py-10">
            <p className=" text-xl 2xl:text-2xl font-light text-neutral-300">
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
          <div className="flex gap-10 items-center justify-center md:justify-normal text-lg 2xl:text-2xl">
            <div className="flex items-center sm:justify-normal justify-center">
              <Link
                to={"/Skills"}
                className="border text-center border-purple-800 px-5 py-2 rounded hover:border-2 transition-all duration-75">
                Ver más
              </Link>
            </div>
            <div className="flex items-center sm:justify-normal justify-center">
              <button
                onClick={handleDownloadCV}
                className="border text-center border-purple-800 px-5 py-2 rounded hover:border-2 transition-all duration-75">
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
