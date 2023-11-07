import React from "react";
import Layout from "~/components/Layout";
import Skill from "~/components/Skill";
import Up from "~/motions/Up";
import { languages, frameworks, tools } from "~/global/constants";

const Skills = () => {
  return (
    <Layout description="skills">
      <div className="px-8 py-10 md:px-4">
        <Up delay={0.2}>
          <h1 className="text-4xl font-bold">Skills</h1>
          <h2 className="mt-2 text-zinc-600 dark:text-zinc-400">
            List of my current technological skills
          </h2>
        </Up>

        {/* Languages */}
        <Up delay={0.3}>
          <h3 className="my-4 text-lg">Languages</h3>
        </Up>
        <Up delay={0.4}>
          <div className="xs:grid-cols-2 grid grid-cols-1 flex-wrap justify-between gap-2 rounded-md bg-zinc-200 p-4 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 md:grid-cols-3">
            {languages.map((language, languageIdx) => (
              <Skill
                key={languageIdx}
                name={language.name}
                icon={language.icon}
              />
            ))}
          </div>
        </Up>

        {/* Frameworks */}
        <Up delay={0.5}>
          <h3 className="my-4 text-lg">Frameworks // Libraries</h3>
        </Up>
        <Up delay={0.6}>
          <div className="xs:grid-cols-2 grid grid-cols-1 flex-wrap justify-between gap-2 rounded-md bg-zinc-200 p-4 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 md:grid-cols-3">
            {frameworks.map((framework, frameworkIdx) => (
              <Skill
                key={frameworkIdx}
                name={framework.name}
                icon={framework.icon}
              />
            ))}
          </div>
        </Up>
        <Up delay={0.7}>
          <h3 className="my-4 text-lg">Tooling</h3>
        </Up>

        {/* Tooling */}
        <Up delay={0.8}>
          <div className="xs:grid-cols-2 grid grid-cols-1 flex-wrap justify-between gap-2 rounded-md bg-zinc-200 p-4 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 md:grid-cols-3">
            {tools.map((tool, toolIdx) => (
              <Skill key={toolIdx} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </Up>
      </div>
    </Layout>
  );
};

export default Skills;
