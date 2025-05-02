import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    description:
      "Next.js와 Tailwind CSS를 사용하여 만든 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 애니메이션 효과를 적용했습니다.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-url.com",
  },
  {
    id: 2,
    title: "쇼핑몰 웹사이트",
    description:
      "React와 Node.js를 사용하여 만든 쇼핑몰 웹사이트입니다. 사용자 인증, 상품 검색, 장바구니 기능을 구현했습니다.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/shopping.png",
    github: "https://github.com/yourusername/shopping-mall",
    demo: "https://your-shopping-mall-url.com",
  },
  {
    id: 3,
    title: "투두 리스트 앱",
    description:
      "TypeScript와 React를 사용하여 만든 투두 리스트 애플리케이션입니다. 로컬 스토리지를 활용하여 데이터를 저장합니다.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/todo.png",
    github: "https://github.com/yourusername/todo-app",
    demo: "https://your-todo-app-url.com",
  },
];
