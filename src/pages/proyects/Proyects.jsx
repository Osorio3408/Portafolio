import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CardEnterprise } from "../../Components/CardEnterprise/CardEnterprise";
import { CardPersonal } from "../../Components/CardPersonal/CardPersonal";

export const Proyects = () => {
  const proyecto1 = ["React", "Tailwind", "Supabase"];
  const proyecto2 = ["React", "NodeJS", "JWT", "Mysql", "Tailwind"];
  const proyecto3 = ["React", "Tailwind"];
  const proyecto4 = ["React", "Tailwind", "PWA"];
  const proyecto6 = ["React", "Bootstrap", "PWA"];
  const proyecto7 = ["NextJs", "Semantic-ui", "MongoDb"];

  // Lista de proyectos
  const proyectos = [
    // {
    //   nombre: "Reportes de seguridad",
    //   herramientas: proyecto1,
    //   url: "proyecto1.webp",
    //   type: 1,
    //   description:
    //     "El proyecto Reportes de Seguridad es una aplicación web desarrollada como una herramienta integral para el personal de Recursos Humanos (RH). Su principal objetivo es permitir que los usuarios de la empresa puedan reportar incidentes o riesgos que observen dentro de las instalaciones, facilitando así la comunicación y gestión eficiente de la seguridad en el lugar de trabajo.",
    // },
    // {
    //   nombre: "Control de asistencia a eventos",
    //   herramientas: proyecto2,
    //   url: "proyecto2.webp",
    //   type: 1,
    //   description:
    //     "El proyecto de Control de Asistencia a Eventos fue concebido con el objetivo de proporcionar a la empresa una herramienta eficiente para gestionar y llevar un registro detallado de la asistencia a cualquier evento interno o reunión corporativa. Esta aplicación permite recopilar información precisa sobre quiénes confirmaron su asistencia y quiénes finalmente participaron.",
    // },
    {
      nombre: "Gestión de asistencia a eventos",
      herramientas: proyecto2,
      url: "proyecto0.webp",
      code: "https://github.com/Osorio3408/EventManagmentClient",
      page: "#",
      description:
        "El proyecto de Gestión de asistencia a eventos fue creado para facilitar la organización y gestión de eventos corporativos. Desarrollado con React, Node.js, Express y MySQL, esta aplicación permite a los usuarios crear eventos, gestionar la asistencia de los participantes y generar informes detallados sobre la asistencia a eventos. Con una interfaz intuitiva y funcionalidades avanzadas, esta aplicación ofrece una solución eficiente para la gestión de eventos corporativos.",
    },
    {
      nombre: "Creador de notas",
      herramientas: proyecto7,
      url: "proyecto7.webp",
      code: "https://github.com/Osorio3408/Proyecto-de-creacion-de-notas",
      page: "https://proyecto-de-creacion-de-notas.vercel.app/",
      description:
        "El Creador de notas es una aplicación desarrollada con Next.js, Semantic UI y MongoDB, que permite a los usuarios crear, editar y eliminar notas tipo recordatorios. Conectada a una base de datos NoSQL como MongoDB, esta aplicación ofrece una experiencia fluida para gestionar notas de manera eficiente, facilitando la organización y el seguimiento de tareas importantes.",
    },
    {
      nombre: "Administrador de gastos",
      herramientas: proyecto3,
      url: "proyecto3.webp",
      page: "https://expense-controller.netlify.app/",
      code: "https://github.com/Osorio3408/Expense_manager",
      description:
        "El Administrador de Gastos es una aplicación desarrollada utilizando las tecnologías React, Tailwind CSS y React Victory. Está diseñado para proporcionar una solución eficiente para llevar un registro detallado de los gastos y facilitar la contabilidad personal o empresarial.",
    },
    {
      nombre: "Galeria de imágines",
      herramientas: proyecto4,
      url: "proyecto4.webp",
      code: "https://github.com/Osorio3408/Galeria-Imagenes/",
      page: "https://galeriaimagenesoneline.netlify.app/",
      description:
        "La Galería de Imágenes es una aplicación web desarrollada utilizando React y Tailwind CSS, con la capacidad adicional de funcionar como una Progressive Web App (PWA). Integrando la API de Unsplash, permite a los usuarios buscar y visualizar imágenes según sus preferencias. La combinación de tecnologías modernas y la integración de una API externa ofrece una experiencia fluida y personalizada, permitiendo a los usuarios explorar y disfrutar de una amplia variedad de imágenes de manera intuitiva y eficiente.",
    },
    {
      nombre: "Agenda de contáctos",
      herramientas: proyecto6,
      url: "proyecto6.webp",
      code: "https://github.com/Osorio3408/Agenda_Contactos",
      page: "https://agenda-yaop.netlify.app/",
      description:
        "La Agenda de Contactos es una aplicación desarrollada en React y Bootstrap, implementando el hook useReducer y el almacenamiento local (localStorage). Además, cuenta con la capacidad de funcionar como una Progressive Web App (PWA). Permite a los usuarios almacenar y gestionar contactos mediante el registro de nombres, apellidos y números telefónicos, proporcionando una solución eficiente y accesible para organizar la información de contacto de manera digital.",
    },

    {
      nombre: "Tenis Jes",
      herramientas: proyecto3,
      url: "proyecto8.webp",
      code: "https://github.com/Osorio3408/TenisJes/",
      page: "https://tenis-jes.netlify.app",
      description:
        "Tenis Jes un catálogo interactivo que ofrece una amplia gama de productos de moda. Desarrollado con React y Tailwind CSS, esta plataforma permite a los usuarios explorar productos de la tienda de ropa, acceder a información de contacto como redes sociales y ubicación del local, así como filtrar productos por precios y marcas. Con una interfaz intuitiva y funcionalidades de filtrado avanzadas.",
    },
  ];

  // Paginación
  const proyectosPorPagina = 3;
  const [paginaActual, setPaginaActual] = useState(1);
  const indiceUltimoProyecto = paginaActual * proyectosPorPagina;
  const indicePrimerProyecto = indiceUltimoProyecto - proyectosPorPagina;
  const proyectosActuales = proyectos.slice(
    indicePrimerProyecto,
    indiceUltimoProyecto
  );

  // Referencia al contenedor del paginador
  const paginadorRef = useRef(null);

  const paginar = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    // Hacer scroll al principio del contenedor del paginador
    paginadorRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <section className="containerr min-h-screen bg-neutral-950 text-slate-200 flex flex-col items-center">
      <header className="w-full h-32 max-w-4xl md:max-w-4xl xl:max-w-6xl flex-col gap-y-4 md:mt-0 md:flex-row flex items-center justify-center md:justify-between bg-transparent z-50">
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
      <div className="max-w-6xl mt-0 md:mt-20 h-full w-full space-y-16 py-16 px-2 md:pt-0 md:px-0 grid place-content-center">
        <h2 className="text-4xl xl:text-6xl font-bold mb-0 text-white">
          Proyectos
        </h2>
        {proyectosActuales.map((proyecto, index) => (
          <div key={index}>
            {proyecto.type === 1 ? (
              <CardEnterprise
                name={proyecto.nombre}
                description={proyecto.description}
                herramientas={proyecto.herramientas}
                url={proyecto.url}
              />
            ) : (
              <CardPersonal
                name={proyecto.nombre}
                description={proyecto.description}
                herramientas={proyecto.herramientas}
                url={proyecto.url}
                page={proyecto.page}
                code={proyecto.code}
              />
            )}
          </div>
        ))}
      </div>
      {/* Paginador */}
      <ul className="flex gap-2 mb-20" ref={paginadorRef}>
        {Array.from({
          length: Math.ceil(proyectos.length / proyectosPorPagina),
        }).map((_, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 rounded-md border border-purple-600 text-white focus:outline-none ${
                paginaActual === index + 1
                  ? "bg-opacity-70 bg-purple-600"
                  : "hover:bg-opacity-50 hover:bg-purple-600"
              }`}
              onClick={() => paginar(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
