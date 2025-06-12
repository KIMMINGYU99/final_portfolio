import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";
import { Project } from "@/types/project";
import { ProjectWithSkills } from "@/types/supabase";

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

export const getProjects = async (): Promise<Project[]> => {
  const { data: projectsWithSkills, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      project_skills (skills (name))
    `
    )
    .order("id", { ascending: true });

  if (error) throw error;

  // 기술 스택 정보를 프로젝트 객체에 통합
  const projects =
    (projectsWithSkills as ProjectWithSkills[] | null)?.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      thumbnail: project.thumbnail,
      github: project.github,
      demo: project.demo,
      start_date: project.start_date,
      end_date: project.end_date,
      role: project.role,
      status: project.status,
      created_at: project.created_at,
      technologies:
        project.project_skills
          ?.map((ps) => ps?.skills?.name)
          .filter(
            (name): name is string => name !== null && name !== undefined
          ) || [],
    })) || [];

  return projects;
};

export const getProjectById = async (id: string) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id);

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
