import { Inter } from "next/font/google";
import "./globals.css";
import MainContent from "@/components/server/layout/MainContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "김민규 | 포트폴리오",
  description: "신입 개발자 김민규의 포트폴리오입니다.",
  openGraph: {
    title: "김민규 | 포트폴리오",
    description: "신입 개발자 김민규의 포트폴리오입니다.",
    url: "https://final-portfolio-ruddy-five.vercel.app",
    images: [
      {
        url: "https://final-portfolio-ruddy-five.vercel.app/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "김민규 포트폴리오 미리보기 이미지",
      },
    ],
    type: "website",
    locale: "ko_KR",
    siteName: "김민규 포트폴리오",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
