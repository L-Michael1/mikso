import Image from "next/image";
import Link from "next/link";
import React from "react";

interface iProjectCardProps {
  title: string;
  link: string;
  description: string;
  logoSrc?: string;
}

const ProjectCard = ({
  title,
  link,
  description,
  logoSrc = "/transparent_logo.png",
}: iProjectCardProps) => {
  return (
    <Link
      href={link}
      target={title !== "typia" ? "_blank" : ""}
      className="mx-auto flex w-[300px] items-center rounded-md border border-zinc-200 px-3 py-2 transition-colors hover:bg-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
    >
      <div className="flex items-center">
        <Image
          src={logoSrc}
          alt={title}
          width={100}
          height={100}
          className="ml-1 mr-3 h-[3rem] w-[3rem] opacity-75 saturate-200"
        />
        <div>
          <h1 className="text-lg text-zinc-600 dark:text-zinc-300">{title}</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
