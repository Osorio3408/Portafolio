import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-slate-200 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-4xl xl:bg-transparent xl:max-w-6xl flex-col gap-y-4 md:flex-row flex items-center justify-between absolute top-10">
        <h1 className="text-2xl font-semibold">Yuliam Osorio</h1>
        <ul className="flex gap-8">
          <li className="">
            <Link to={"/"} className="cursor-pointer border-b ">
              Inicio
            </Link>
          </li>
          <li className="">
            <Link className="cursor-pointer hover:border-b ">Habilidades</Link>
          </li>
          <li className="">
            <Link className="cursor-pointer hover:border-b ">Proyectos</Link>
          </li>
          <li className="">
            <Link className="cursor-pointer hover:border-b ">Contáctame</Link>
          </li>
        </ul>
      </div>
      <div className="max-w-xl h-full w-full space-y-20 pt-20 px-2 md:pt-0 md:px-0 ">
        <div>
          <h2 className="text-5xl font-bold">Yuliam Osorio</h2>
          <p className="text-md text-neutral-400 pl-1 space-y-6">
            Desarrollador de Sofware | Frontend | Backend
          </p>
          <div className="pl-1 pt-3 flex gap-5 items-center">
            <Link
              to={"https://www.instagram.com/yosorio34"}
              title="Instagram"
              target="_blank">
              <Instagram size={18} className="hover:scale-110" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/yuliam-osorio-574b64264/"}
              title="Linkedin"
              target="_blank">
              <Linkedin size={18} className="hover:scale-110" />
            </Link>
            <Link
              to={"https://github.com/Osorio3408"}
              title="GitHub"
              target="_blank">
              <Github size={18} className="hover:scale-110" />
            </Link>
          </div>
          <div className="py-10">
            <p className=" text-xl font-light text-neutral-300">
              Hola, soy
              <span className="font-semibold">
                {" "}
                Yuliam Andrey Osorio Puerta
              </span>
              , un joven que le gusta la tecnologia y en especifico el
              desarrollo de software.
              <br />
              <br />
              Me especifico como desarollador de software tanto en el frontend
              como en el backend, ya que siento una pasión por el desarrollo en
              ambos pero aun no soy experto para definirme como full stack.
              <br />
              <br />
              Me encanta estudiar nuevos temas y aprender algo nuevo cada vez
              que puedo, aun más cuando en el ambito de la tecnologia siempre
              hay cambios y actualizaciones.
              <br />
              <br />
              Fuera de la programación, me gusta el deporte, en especifico el
              baloncesto y la natación. También me encanta los animales y
              actualmente tengo 3 gatos.
            </p>
          </div>
          <Link className="flex items-center sm:justify-normal justify-center">
            <button className="border text-center  border-white px-5 py-2 rounded hover:bg-neutral-950 transition-all duration-500">
              Contáctame
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
