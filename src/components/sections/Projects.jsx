import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import { FaFolderOpen } from "react-icons/fa6";

function Projects() {
  return (
    <>
    <h1 className="dark:text-white text-black px-6 lg:px-24 pb-5 text-3xl font-bold flex gap-1"><FaFolderOpen className="text-red-500"/>Projects</h1>
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
    >
      {user_info.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        );
      })}
    </section>
    </>
  );
}

export default Projects;
