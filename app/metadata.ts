import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "김민규 | 포트폴리오",
  description:
    "신입 프론트엔드 개발자 김민규의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 경험을 보여드립니다.",
  keywords: [
    "프론트엔드",
    "포트폴리오",
    "React",
    "Next.js",
    "TypeScript",
    "개발자",
    "김민규",
  ],
  authors: [{ name: "김민규" }],
  creator: "김민규",
  publisher: "김민규",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "김민규 | 포트폴리오",
    description:
      "신입 프론트엔드 개발자 김민규의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 경험을 보여드립니다.",
    url: "https://final-portfolio-ruddy-five.vercel.app",
    siteName: "김민규 포트폴리오",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "김민규 포트폴리오 미리보기 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};
