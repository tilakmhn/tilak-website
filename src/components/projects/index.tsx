import React from "react";
import ProjectCard from "./project-card";
import { projectItems } from "@/constants/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col gap-6 mobile:gap-8 tablet:gap-10"
    >
      <h2 className="heading-2 font-semibold">Recent AI Project Showcase</h2>
      <div className="grid grid-cols-1 mobile:grid-cols-2 gap-4 tablet:gap-6">
        {projectItems.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
