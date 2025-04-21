import { CiLink } from "react-icons/ci";

function Project({ title, description, technologies, link, github, image }) {
  return (
    <div className="bg-zinc-100 dark:bg-transparent p-6 md:rounded-xl transition-all duration-300 transform hover:scale-[1.05] shadow-2xl hover:shadow-2lg shadow-zinc-400 hover:shadow-zinc-950 dark:shadow-zinc-700/20 dark:hover:shadow-zinc-700/40">
      
      {/* =========== PROJECT IMAGE =========== */}
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      {/* =========== TECHNOLOGIES USED =========== */}
      <div className="flex gap-2 overflow-x-scroll py-2">
        {technologies.split(",").map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* =========== PROJECT TITLE =========== */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
        {title}
      </h3>

      {/* =========== PROJECT DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Project</span>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>
      </div>
    </div>
  );
}

export default Project;
