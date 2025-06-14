import React from "react";
import { techIcons } from "@/components/client/TechIcons";

type TechInfo = {
  icon: React.ReactNode;
  url: string;
};

type TechStackMap = {
  [key: string]: TechInfo;
};

export const techStackMap: TechStackMap = {
  HTML: {
    icon: techIcons.HTML,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  CSS: {
    icon: techIcons.CSS,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  "Tailwind CSS": {
    icon: techIcons["Tailwind CSS"],
    url: "https://tailwindcss.com/",
  },
  JavaScript: {
    icon: techIcons.JavaScript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  TypeScript: {
    icon: techIcons.TypeScript,
    url: "https://www.typescriptlang.org/",
  },
  React: {
    icon: techIcons.React,
    url: "https://react.dev/",
  },
  "Next.js": {
    icon: techIcons["Next.js"],
    url: "https://nextjs.org/",
  },
  "Node.js": {
    icon: techIcons["Node.js"],
    url: "https://nodejs.org/",
  },
  MySQL: {
    icon: techIcons.MySQL,
    url: "https://www.mysql.com/",
  },
  Express: {
    icon: techIcons.Express,
    url: "https://expressjs.com/",
  },
  NestJS: {
    icon: techIcons.NestJS,
    url: "https://nestjs.com/",
  },
  Firebase: {
    icon: techIcons.Firebase,
    url: "https://firebase.google.com/",
  },
  Supabase: {
    icon: techIcons.Supabase,
    url: "https://supabase.com/",
  },
  Zustand: {
    icon: techIcons.Zustand,
    url: "https://zustand-demo.pmnd.rs/",
  },
  Expo: {
    icon: techIcons.Expo,
    url: "https://docs.expo.dev/",
  },
  Axios: {
    icon: techIcons.Axios,
    url: "https://axios-http.com/",
  },
};
