import { create } from "zustand";
import { Skill } from "@/types/project";

type TProjectForm = {
  title: string;
  description: string;
  thumbnail: string;
  github: string;
  demo: string;
  start_date: string;
  end_date: string;
  role: string;
  status: "in_progress" | "completed";
  technologies: string[];
};

type ProjectStore = {
  formData: TProjectForm;
  availableSkills: Skill[];
  isLoading: boolean;
  isAuthenticated: boolean;
  setFormData: (data: Partial<TProjectForm>) => void;
  setAvailableSkills: (skills: Skill[]) => void;
  setIsLoading: (loading: boolean) => void;
  setIsAuthenticated: (authenticated: boolean) => void;
  resetForm: () => void;
  handleTechChange: (techName: string) => void;
  checkPassword: (password: string) => boolean;
};

const initialFormData: TProjectForm = {
  title: "",
  description: "",
  thumbnail: "",
  github: "",
  demo: "",
  start_date: "",
  end_date: "",
  role: "",
  status: "in_progress",
  technologies: [],
};

if (!process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
  throw new Error("Missing env.NEXT_PUBLIC_ADMIN_PASSWORD");
} // 관리자 비밀번호 설정

export const useProjectStore = create<ProjectStore>((set, get) => ({
  formData: initialFormData,
  availableSkills: [],
  isLoading: true,
  isAuthenticated: false,
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  setAvailableSkills: (skills) => set({ availableSkills: skills }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsAuthenticated: (authenticated) =>
    set({ isAuthenticated: authenticated }),
  resetForm: () => set({ formData: initialFormData }),
  handleTechChange: (techName) =>
    set((state) => ({
      formData: {
        ...state.formData,
        technologies: state.formData.technologies.includes(techName)
          ? state.formData.technologies.filter((tech) => tech !== techName)
          : [...state.formData.technologies, techName],
      },
    })),
  checkPassword: (password) => {
    const isValid = password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    if (isValid) {
      set({ isAuthenticated: true });
    }
    return isValid;
  },
}));
