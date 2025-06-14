import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { Project } from "@/types/project";
import { ProjectWithSkills } from "@/types/supabase";
import { Database } from "@/types/supabase";
import { TReviewMessage } from "@/types/review";

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

export const getProjectById = async (id: string): Promise<Project | null> => {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      project_skills (skills (name))
    `
    )
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }
  if (!data) return null;

  const project = data as ProjectWithSkills;
  return {
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
  };
};

type AddProjectInput = Omit<Project, "id"> & {
  technologies: string[];
};

export const addProject = async (project: AddProjectInput) => {
  const { data: projectData, error: projectError } = await supabase
    .from("projects")
    .insert([
      {
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
      },
    ])
    .select()
    .single();

  if (projectError) throw projectError;
  if (!projectData) throw new Error("프로젝트 생성 실패");

  // 기술 스택 추가
  const projectSkillsPromises = project.technologies.map(async (tech) => {
    // 1. 기술이 이미 존재하는지 확인
    const { data: existingSkill } = await supabase
      .from("skills")
      .select("id")
      .eq("name", tech)
      .single();

    let skillId;

    if (existingSkill) {
      skillId = existingSkill.id;
    } else {
      // 2. 기술이 없으면 새로 생성
      const { data: newSkill, error: skillError } = await supabase
        .from("skills")
        .insert([{ name: tech }])
        .select()
        .single();

      if (skillError) throw skillError;
      if (!newSkill) throw new Error("기술 생성 실패");

      skillId = newSkill.id;
    }

    // 3. project_skills 연결 테이블에 추가
    const { error: linkError } = await supabase.from("project_skills").insert([
      {
        project_id: projectData.id,
        skill_id: skillId,
      },
    ]);

    if (linkError) throw linkError;
  });

  await Promise.all(projectSkillsPromises);

  return projectData;
};
// 이미지 업로드 API
export const uploadProjectImage = async (file: File) => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `project-thumbnails/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("images")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error("이미지 업로드 에러:", error);
    throw error;
  }
};

// 기술 스택 관련 API
export const getSkills = async () => {
  try {
    console.log("Fetching skills...");
    const { data, error } = await supabase.from("skills").select(`
      *,
      skills_Type(name)
    `);

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    console.log("Skills data:", data);
    return data;
  } catch (error) {
    console.error("getSkills error:", error);
    throw error;
  }
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
      author: normalizeSkillName(skill.name),
    })) || []
  );
};
export const getModalReview = async () => {
  const { data, error } = await supabase
    .from("review_messages")
    .select("*")
    .order("date", { ascending: false })
    .range(0, 4);

  if (error) throw error;
  return data as TReviewMessage[];
};
export const getReview = async (page: number = 0) => {
  const from = page * 9;
  const to = from + 8;

  const { data, error } = await supabase
    .from("review_messages")
    .select("*")
    .order("date", { ascending: false })
    .range(from, to);

  if (error) throw error;
  return {
    data: data as TReviewMessage[],
    hasMore: data?.length === 9,
  };
};

export const addReview = async ({
  author,
  message,
}: {
  author: string;
  message: string;
}) => {
  const { data, error } = await supabase.from("review_messages").insert([
    {
      id: uuidv4(),
      author,
      message,
      date: new Date().toISOString(),
      likes: 0,
    },
  ]);
  if (error) throw error;
  return data;
};

export const deleteReview = async (id: string) => {
  const { data, error } = await supabase
    .from("review_messages")
    .delete()
    .eq("id", id);
  if (error) throw error;
  return data;
};

export const likeReview = async (id: string) => {
  const { data, error } = await supabase.rpc("increment_likes", { row_id: id });
  if (error) throw error;
  return data;
};
