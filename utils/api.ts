import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vb21uYWhtbXRnbXBuaWFkZ252Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTcxMDEyMiwiZXhwIjoyMDY1Mjg2MTIyfQ.rTQVb6i2c4E9bQCCLf1ZZXapOgRu4TUp3RWkLwlhEGQ",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// 프로젝트 관련 API
export const getProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      project_skills!inner (skill_id),
      skills!project_skills(name)
    `
    )
    .order("start_date", { ascending: false });

  if (error) throw error;
  return data;
};

// 기술 스택 관련 API
export const getSkills = async () => {
  const { data, error } = await supabase.from("skills").select(`
      *,
      skills_Type(name)
    `);

  if (error) throw error;
  return data;
};

// 스킬 이름 정규화 함수
export const normalizeSkillName = (name: string): string => {
  const nameMap: { [key: string]: string } = {
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
  };

  const normalized = name.toLowerCase().replace(/[\s.-]/g, "");
  return nameMap[normalized] || name;
};

// 기술 타입 관련 API
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
      name: normalizeSkillName(skill.name),
    })) || []
  );
};
