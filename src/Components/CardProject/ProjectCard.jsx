export const ProjectCard = ({ project }) => {
  return (
    <article className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-purple-500 transition-all h-full flex flex-col">
      <img
        src={`${project.image}`}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-neutral-800 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-neutral-400 mb-4">{project.description}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-purple-400 mr-2">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-neutral-800 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.results && (
          <p className="text-xs text-purple-400 mt-auto italic">
            {project.results}
          </p>
        )}

        <div className="flex gap-3 mt-4 pt-4 border-t border-neutral-800">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm flex-1 text-center"
            >
              Ver Demo
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-purple-600 hover:bg-purple-600/10 rounded text-sm flex-1 text-center"
          >
            Código
          </a>
        </div>
      </div>
    </article>
  );
};
