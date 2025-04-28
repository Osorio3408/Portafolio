import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../../Components/CardProject/ProjectCard";

export const Proyects = () => {
  // Datos mejor estructurados con métricas de impacto
  const projects = [
    {
      id: 1,
      title: "Gestión de Asistencia a Eventos",
      tags: ["Full Stack", "Solución Empresarial"],
      tech: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
      image: "/proyecto0.webp",
      codeUrl: "https://github.com/Osorio3408/EventManagmentClient",
      liveUrl: "#",
      description: "Sistema integral para gestión corporativa de eventos con:",
      features: [
        "Reducción del 40% en tiempo de registro de asistentes",
        "Generación automática de reportes ejecutivos",
        "Autenticación JWT para acceso seguro",
      ],
      results:
        "Implementado en Colautos Mazda para eventos con 200+ participantes",
    },
    {
      id: 2,
      title: "Creador de Notas Avanzado",
      tags: ["Productividad", "Full Stack"],
      tech: ["Next.js", "Semantic UI", "MongoDB"],
      image: "/proyecto7.webp",
      codeUrl: "https://github.com/Osorio3408/Proyecto-de-creacion-de-notas",
      liveUrl: "https://proyecto-de-creacion-de-notas.vercel.app/",
      description: "Aplicación de productividad con:",
      features: [
        "Sincronización en tiempo real entre dispositivos",
        "Categorización inteligente de notas",
        "Búsqueda instantánea",
      ],
      results: "500+ descargas como PWA con rating de 4.8/5",
    },
    {
      id: 3,
      title: "Administrador Financiero",
      tags: ["Fintech", "Visualización"],
      tech: ["React", "Tailwind CSS", "React Victory"],
      image: "/proyecto3.webp",
      liveUrl: "https://expense-controller.netlify.app/",
      codeUrl: "https://github.com/Osorio3408/Expense_manager",
      description: "Sistema de gestión financiera que ofrece:",
      features: [
        "Dashboard interactivo con gráficos Victory",
        "Categorización automática de gastos",
        "Exportación a Excel",
      ],
      results: "Reduce tiempo de análisis financiero semanal en 65%",
    },
    {
      id: 4,
      title: "Galería de Imágenes API",
      tags: ["Frontend", "PWA"],
      tech: ["React", "Tailwind CSS", "PWA", "Unsplash API"],
      image: "/proyecto4.webp",
      codeUrl: "https://github.com/Osorio3408/Galeria-Imagenes/",
      liveUrl: "https://galeriaimagenesoneline.netlify.app/",
      description: "Plataforma de descubrimiento visual con:",
      features: [
        "Integración con API de Unsplash",
        "Funcionalidad offline como PWA",
        "Filtros avanzados por categorías",
      ],
      results: "95% de satisfacción en tests de usabilidad",
    },
    {
      id: 5,
      title: "Tenis Jes - E-commerce",
      tags: ["E-commerce", "Frontend"],
      tech: ["React", "Tailwind CSS"],
      image: "/proyecto8.webp",
      codeUrl: "https://github.com/Osorio3408/TenisJes/",
      liveUrl: "https://tenis-jes.netlify.app",
      description: "Catálogo interactivo para tienda de moda con:",
      features: [
        "Sistema de filtrado multicriterio",
        "Diseño responsive mobile-first",
        "Integración con redes sociales",
      ],
      results: "Aumentó conversiones en 30% para el negocio",
    },
  ];

  // Filtros avanzados
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filters = [
    "Todos",
    "Full Stack",
    "Frontend",
    "PWA",
    "Solución Empresarial",
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((proj) => proj.tags.includes(activeFilter));

  // Paginación mejorada
  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const paginatorRef = useRef(null);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <section className="containerr min-h-screen  text-slate-200 flex flex-col items-center">
      {/* Header consistente */}
      <header className="w-full h-32 max-w-4xl md:max-w-4xl  xl:max-w-6xl flex-col gap-y-4 md:mt-0 md:flex-row flex items-center justify-center md:justify-between bg-transparent z-50">
        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold ml-4">
          Yuliam Osorio
        </h1>
        <ul className="flex gap-8 mr-4 xl:text-lg 2xl:text-xl">
          <li>
            <Link
              to={"/"}
              className="cursor-pointer hover:border-b border-purple-800"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/skills"}
              className="cursor-pointer hover:border-b border-purple-800"
            >
              Habilidades y Experiencia
            </Link>
          </li>
          <li>
            <Link
              to={"/proyects"}
              className="cursor-pointer border-b border-purple-800"
            >
              Proyectos
            </Link>
          </li>
        </ul>
      </header>

      <main className="max-w-5xl mt-0 md:mt-20 h-full w-full space-y-10 pb-16 pt-5 px-2 md:pt-0 md:px-0 ">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Soluciones técnicas implementadas con arquitecturas escalables y
            mejores prácticas
          </p>
        </div>

        {/* Filtros interactivos */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeFilter === filter
                  ? "bg-purple-600 border-purple-600 text-white"
                  : "border-neutral-700 hover:border-purple-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Paginación mejorada */}
        {filteredProjects.length > projectsPerPage && (
          <div className="flex justify-center gap-2 mt-8" ref={paginatorRef}>
            {Array.from({
              length: Math.ceil(filteredProjects.length / projectsPerPage),
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => paginate(idx + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === idx + 1
                    ? "bg-purple-600 text-white"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </main>
    </section>
  );
};