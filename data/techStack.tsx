import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { TechStackItem } from "@/types/tech";

export const frontendTechs: TechStackItem[] = [
  {
    icon: <FaHtml5 className="text-orange-500" />,
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <FaCss3Alt className="text-blue-500" />,
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500" />,
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    icon: <FaJs className="text-yellow-400" />,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <SiTypescript className="text-blue-600" />,
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: <FaReact className="text-blue-400" />,
    name: "React",
    url: "https://react.dev/",
  },
  {
    icon: <SiNextdotjs className="text-white" />,
    name: "Next.js",
    url: "https://nextjs.org/",
  },
];

export const backendTechs: TechStackItem[] = [
  {
    icon: <FaNodeJs className="text-green-600" />,
    name: "Node.js",
    url: "https://nodejs.org/",
  },
  {
    icon: <SiMysql className="text-blue-600" />,
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
  {
    icon: <SiExpress className="text-white" />,
    name: "Express",
    url: "https://expressjs.com/",
  },
  {
    icon: <SiNestjs className="text-red-500" />,
    name: "NestJS",
    url: "https://nestjs.com/",
  },
];
