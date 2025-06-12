"use client";

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPaw } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

export const techIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <FaReact className="text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MySQL: <SiMysql className="text-blue-500" />,
  Express: <SiExpress className="text-white" />,
  NestJS: <SiNestjs className="text-red-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Supabase: <SiSupabase className="text-green-500" />,
  Zustand: <FaPaw className="text-amber-700" />,
};
