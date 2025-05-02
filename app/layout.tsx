import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/header/Header";
import Footer from "@/component/layout/footer/Footer";
import ClientLayout from "@/component/layout/ClientLayout";
import LoadingScreen from "@/component/loading/LoadingScreen";
import { Suspense } from "react";
import { LoadingProvider } from "@/context/LoadingContext";
import MainContent from "@/component/layout/MainContent";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <title>김민규 | 포트폴리오</title>
        <meta property="og:title" content="김민규 | 포트폴리오" />
        <meta
          property="og:description"
          content="신입 프론트엔드 개발자 김민규의 포트폴리오입니다."
        />
        <meta property="og:image" content="/images/thumbnail.png" />
        <meta
          property="og:url"
          content="https://final-portfolio-ruddy-five.vercel.app"
        />
      </Head>
      <body className={inter.className}>
        <LoadingProvider>
          <Suspense fallback={null}>
            <LoadingScreen />
          </Suspense>
          <MainContent>{children}</MainContent>
        </LoadingProvider>
      </body>
    </html>
  );
}
