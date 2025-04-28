import { Dot } from "lucide-react";
import { Link } from "react-router-dom";

export const Skills = () => {
  // Agrupación estratégica de habilidades
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Astro"],
      description: "Especialización en frameworks modernos y diseño responsive",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "ASP.NET Core", "C++", "PHP"],
      description: "Desarrollo de APIs robustas y arquitectura de servidores",
    },
    {
      title: "Bases de Datos",
      skills: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB"],
      description:
        "Modelado y optimización de bases de datos relacionales y NoSQL",
    },
    {
      title: "DevOps & Herramientas",
      skills: ["Git", "GitHub", "Postman", "Figma", "Supabase", "Firebase"],
      description: "Control de versiones, testing y diseño de interfaces",
    },
  ];

  const experiences = [
    {
      role: "Auxiliar de Sistemas | Colautos Mazda",
      period: "Abril 2024 - Presente",
      achievements: [
        "Lideré el desarrollo de 2 aplicaciones internas que mejoraron los procesos operativos en un 30%",
        "Administré landing pages internas con Javascript y React, mejorando el rendimiento en un 40%",
        "Coordine reuniones técnicas y capacitaciones para equipos multidisciplinarios",
      ],
      stack: ["React", "Node.js", "MySQL", "TailwindCSS"],
    },
    {
      role: "Pasantías en Desarrollo | Colautos Mazda",
      period: "Sept 2023 - Feb 2024",
      achievements: [
        "Implementé soluciones de automatización para reportes mensuales",
        "Optimicé consultas SQL reduciendo tiempos de respuesta en un 25%",
      ],
      stack: ["PHP", "JavaScript", "SQL Server"],
    },
  ];

  return (
    <section className="containerr min-h-screen  text-slate-200 flex flex-col items-center">
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
              className="cursor-pointer border-b border-purple-800"
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
      <div className="max-w-5xl mt-0 md:mt-20 h-full w-full space-y-10 pb-16 pt-5 px-2 md:pt-0 md:px-0 ">
        <div className="mb-0">
          <h1 className="text-4xl font-bold text-white mb-4">
            Habilidades Técnicas <span className="text-purple-500">&</span>{" "}
            Experiencia
          </h1>
          <p className="text-base text-neutral-400 max-w-xl">
            Combinación de conocimiento técnico especializado y experiencia
            práctica en entornos empresariales
          </p>
        </div>

        {/* Sección de habilidades con visualización mejorada */}
        <section className="mb-0">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-purple-500 pb-2">
            Stack Tecnológico
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-purple-500 transition-all"
              >
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                  {category.title}
                </h3>
                <p className="text-neutral-400 mb-4">{category.description}</p>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-800 rounded-full text-sm flex items-center"
                    >
                      <Dot className="text-purple-500 mr-1" size={16} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experiencia profesional detallada */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-purple-500 pb-2">
            Trayectoria Profesional
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-purple-500/50"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400">{exp.period}</p>
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <Dot
                        className="text-purple-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="ml-2 text-neutral-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-neutral-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA estratégico */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/proyects"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors flex items-center"
          >
            Ver Proyectos Destacados
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
