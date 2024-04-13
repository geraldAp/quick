import { UserProjects } from "@/types";
import React from "react";
import ProjectCard from "./projectCard";
type Props = {
  projects: UserProjects[];
};

const ProjectSection: React.FC<Props> = ({ projects }) => {
  return <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {projects.map(project =>(
      <ProjectCard key={project.id} {...project}/>
    ))}
  </div>;
};

export default ProjectSection;
