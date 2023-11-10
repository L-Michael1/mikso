import React from "react";
import type { iSkillProps } from "~/global/types";

const Skill = ({ name, icon }: iSkillProps) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-zinc-300 p-2 text-zinc-700 transition-transform duration-200 hover:-translate-y-1 dark:bg-zinc-700 dark:text-zinc-300">
      {name}
      <span>{icon}</span>
    </div>
  );
};

export default Skill;
