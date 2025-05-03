import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    description: "HTML, CSS 사용하여 개인 포트폴리오 웹사이트 구현했습니다",
    technologies: ["HTML", "CSS"],
    image: "/images/portfolio1.png",
    github: "https://github.com/KIMMINGYU99/portfolio",
    demo: "https://kimmingyu99.github.io/portfolio/",
  },
  {
    id: 2,
    title: "포켓몬스터 웹사이트",
    description:
      "HTML, CSS, JS를 사용하여 클론 코딩한 포켓몬스터 웹사이트입니다. 더보기 버튼, 카테고리별 분류 기능을 구현했습니다.",
    technologies: ["HTML", "CSS", "JS"],
    image: "/images/pokemon.png",
    github: "https://github.com/asom0160/pokemon_JS_TeamProject",
    demo: "https://asom0160.github.io/pokemon_JS_TeamProject/",
  },
  {
    id: 3,
    title: "투두 리스트 기능 구현",
    description:
      "TypeScript와 React를 사용하여 투두 리스트 기능을 구현했습니다. 로컬 스토리지를 활용하여 데이터를 저장합니다.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/todo.png",
    github: "https://github.com/KIMMINGYU99/todolist",
    demo: "https://kimmingyu99.github.io/todolist/",
  },
  {
    id: 4,
    title: "쇼핑몰 웹사이트(NONYMOUSAA)",
    description:
      "NEXT.JS, FIREBASE, ZUSTAND를 사용하여 만든 쇼핑몰 웹사이트입니다. 상품 분류, 장바구니 기능을 구현했습니다.",
    technologies: ["NEXT.JS", "FIREBASE", "ZUSTAND"],
    image: "/images/NONYMOUSAA.png",
    github: "https://github.com/jiheon0928/NONYMOUSA",
    demo: "https://nonymousa-96tm.vercel.app/main",
  },
];
