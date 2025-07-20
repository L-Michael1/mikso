import type { iSkillProps } from "./types";
import { TbBrandTypescript } from "react-icons/tb";
import {
  SiCplusplus,
  SiExpress,
  SiPrisma,
  SiTrpc,
  SiVitest,
  SiCircleci,
  SiGrafana,
  SiVercel,
  SiJira,
  SiExpo,
} from "react-icons/si";
import {
  BiLogoGoLang,
  BiLogoJava,
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiGitBranch,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoPython,
  BiLogoGraphql,
  BiLogoDocker,
} from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";

export const links = [
  { name: "About", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
];

export const languages: iSkillProps[] = [
  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={24} />,
  },
  {
    name: "Go",
    icon: <BiLogoGoLang size={24} />,
  },
  {
    name: "Python",
    icon: <BiLogoPython size={24} />,
  },
  {
    name: "C",
    icon: <SiCplusplus size={24} />,
  },
  {
    name: "Java",
    icon: <BiLogoJava size={24} />,
  },
  {
    name: "SQL",
    icon: <BsFiletypeSql size={24} />,
  },
  {
    name: "HTML",
    icon: <AiOutlineHtml5 size={24} />,
  },
  {
    name: "CSS",
    icon: <BiLogoCss3 size={24} />,
  },
];

export const frameworks: iSkillProps[] = [
  {
    name: "React/React Native",
    icon: <BiLogoReact size={24} />,
  },
  {
    name: "GraphQL",
    icon: <BiLogoGraphql size={24} />,
  },
  {
    name: "Expo",
    icon: <SiExpo size={24} />,
  },
  {
    name: "TailwindCSS",
    icon: <BiLogoTailwindCss size={24} />,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs size={24} />,
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs size={24} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={24} />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={24} />,
  },
  {
    name: "tRPC",
    icon: <SiTrpc size={24} />,
  },
  {
    name: "Vitest",
    icon: <SiVitest size={24} />,
  },
];

export const tools: iSkillProps[] = [
  {
    name: "Git",
    icon: <BiGitBranch size={24} />,
  },
  {
    name: "Docker",
    icon: <BiLogoDocker size={24} />,
  },
  {
    name: "Github Actions",
    icon: <BiLogoGithub size={24} />,
  },
  {
    name: "CircleCI",
    icon: <SiCircleci size={24} />,
  },
  {
    name: "Gitlab",
    icon: <BiLogoGitlab size={24} />,
  },
  {
    name: "Grafana",
    icon: <SiGrafana size={24} />,
  },
  {
    name: "Vercel",
    icon: <SiVercel size={24} />,
  },
  {
    name: "Jira",
    icon: <SiJira size={24} />,
  },
];

export const projects = [
  {
    title: "droprr",
    link: "https://github.com/L-Michael1/droprr",
    description:
      "Amazon product price tracker - notifies user's on price drops",
    logoSrc: "/droprr.png",
  },
  {
    title: "clinote",
    link: "https://github.com/L-Michael1/clinote",
    description: "TUI notes manager to read, edit, and add notes in style",
    logoSrc: "/clinote.png",
  },
  {
    title: "mikso",
    link: "https://github.com/L-Michael1/mikso",
    description: "Personal website",
    logoSrc: "/mikso.png",
  },
  {
    title: "CourseClub",
    link: "https://github.com/L-Michael1/CourseClub",
    description: "University of Guelph Course Scheduler",
    logoSrc: "/courseclub.png",
  },
  {
    title: "m-bot",
    link: "https://github.com/L-Michael1/m-bot",
    description: "A fun little Discord bot",
    logoSrc: "/mbot.png",
  },
  {
    title: "Dogedex",
    link: "https://github.com/L-Michael1/Dogedex",
    description: "Detect dog breeds by uploading an image",
    logoSrc: "/dogedex.png",
  },
];
