import { supabase } from "@/utils/supabase/client";

// 스킬 이름 정규화 함수
export const normalizeSkillName = (name: string): string => {
  const nameMap: Record<string, string> = {
    nodejs: "Node.js",
    "node.js": "Node.js",
    nextjs: "Next.js",
    "next.js": "Next.js",
    javascript: "JavaScript",
    typescript: "TypeScript",
    tailwindcss: "Tailwind CSS",
    tailwind: "Tailwind CSS",
    react: "React",
    html: "HTML",
    css: "CSS",
    mysql: "MySQL",
    express: "Express",
    nestjs: "NestJS",
    "nest.js": "NestJS",
    firebase: "Firebase",
    supabase: "Supabase",
    zustand: "Zustand",
    expo: "Expo",
    axios: "Axios",
  };

  const normalized = name.toLowerCase().replace(/[\s.-]/g, "");
  return nameMap[normalized] || name;
};

// 전체 스킬 조회 (type 포함)
export const getSkills = async () => {
  const { data, error } = await supabase
    .from("skills")
    .select(`*, skills_Type(name)`);
  if (error) throw error;
  return data;
};

// 프론트엔드 / 백엔드 타입별 스킬 목록
export const getSkillTypes = async (type: "frontend" | "backend") => {
  const typeId = type === "frontend" ? 1 : 2;
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .eq("type", typeId);

  if (error) throw error;
  return (
    data?.map((skill) => ({
      ...skill,
      author: normalizeSkillName(skill.name),
    })) || []
  );
};
