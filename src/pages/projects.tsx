import React from "react";
import Layout from "~/components/Layout";
import ProjectCard from "~/components/ProjectCard";
import { projects } from "~/global/constants";
import Up from "~/motions/Up";

const Projects = () => {
  return (
    <Layout description="projects">
      <Up className="mb-12">
        <h1 className="text-center text-3xl font-bold">Projects</h1>
      </Up>

      <Up delay={0.1} className="mb-12">
        <h4 className="mb-2 text-center font-bold text-zinc-600 dark:text-zinc-400">
          Current Focus - WIP
        </h4>

        <div className="flex justify-center">
          <ProjectCard
            link="https://github.com/L-Michael1/Matcha"
            title="Matcha"
            description="Productivity website focused on habit tracking and goal management"
            logoSrc="/plant.png"
          />
        </div>
      </Up>

      <Up delay={0.2}>
        <h4 className="mb-2 text-center font-bold text-zinc-600 dark:text-zinc-400">
          More Projects
        </h4>
        <div className="grid grid-cols-1 flex-wrap gap-3 rounded-md p-4 md:grid-cols-2">
          {projects.map((project, projectIdx) => {
            return (
              <ProjectCard
                key={projectIdx}
                title={project.title}
                link={project.link}
                description={project.description}
                logoSrc={project?.logoSrc}
              />
            );
          })}
        </div>
      </Up>
    </Layout>
  );
};

export default Projects;
