import { Github, Instagram, Linkedin, Clipboard, Mail } from "lucide-react";
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
              title="Home"
              className="cursor-pointer border-b border-purple-800"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/skills"}
              title="Skills"
              className="cursor-pointer hover:border-b border-purple-800"
            >
              Habilidades y Experiencia
            </Link>
          </li>
          <li>
            <Link
              to={"/proyects"}
              className="cursor-pointer hover:border-b border-purple-800"
            >
              Proyectos
            </Link>
          </li>
        </ul>
      </header>
      <div className="max-w-2xl mt-0 md:mt-20 h-full w-full space-y-20 pb-16 pt-5 px-2 md:pt-0 md:px-0 ">
        <div className="hover:cursor-pointer">
          <div className="hover:cursor-default w-36 h-36 2xl:w-44 2xl:h-44 rounded-full bg-white">
            <img
              src="/osorio.webp"
              alt="Yuliam Osorio"
              title="Foto"
              className="rounded-full w-36 h-36 2xl:w-44 2xl:h-44 object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">
            Yuliam Andrey Osorio Puerta
          </h2>
          <div className="flex flex-row text-md md:text-xl 2xl:text-2xl text-purple-300 pl-1">
            <span className="tech-badge">Full Stack Developer</span>{" "}
            <span className="mx-2">|</span>
            <span className="tech-badge">IT Solutions Architect</span>
            <span className="mx-2">|</span>
            <span className="tech-badge">Systems Engineer</span>
          </div>
          <div className="flex justify-between mr-5">
            <p className="text-base md:text-lg 2xl:text-xl ml-1 text-gray-400">
              yuliamandrey@hotmail.com
            </p>
            <button
              onClick={handleCopy}
              className="focus:outline-none relative"
            >
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
              to={"https://www.linkedin.com/in/yuliam-osorio-574b64264/"}
              title="Linkedin"
              target="_blank"
            >
              <Linkedin
                size={20}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
            <Link
              to={"https://github.com/Osorio3408"}
              title="GitHub"
              target="_blank"
            >
              <Github
                size={20}
                className="hover:scale-110 hover:text-purple-700"
              />
            </Link>
          </div>
          <div className="text-lg flex flex-col gap-4 my-5">
            <p>
              <strong>Desarrollador Full Stack</strong> con formación técnica y
              universitaria en ingeniería de sistemas, reconocido por excelencia
              académica y experiencia profesional en{" "}
              <strong>automatización de procesos</strong>y{" "}
              <strong>desarrollo de soluciones empresariales</strong>.
            </p>

            <p>
              Actualmente lidero el desarrollo de sistemas internos en
              <strong> Colautos Mazda</strong>, donde gestiono todo el ciclo de
              vida del software: desde el análisis de requerimientos hasta la
              implementación y capacitación de usuarios.
            </p>

            <p>
              Apasionado por crear soluciones técnicas que resuelven problemas
              reales, con especial interés en arquitecturas escalables y mejora
              continua de procesos.
            </p>
          </div>
          <div className="flex gap-10 items-center justify-center md:justify-normal text-lg 2xl:text-2xl">
            <div className="flex items-center sm:justify-normal justify-center">
              <Link
                to={"/Skills"}
                title="Skills"
                className="border text-center border-purple-800 px-5 py-2 rounded hover:bg-neutral-950 transition-all duration-75"
              >
                Ver más
              </Link>
            </div>
            <div className="flex items-center sm:justify-normal justify-center">
              <button
                onClick={handleDownloadCV}
                className="border text-center border-purple-800 px-5 py-2 rounded hover:bg-neutral-900 transition-all duration-75"
              >
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
