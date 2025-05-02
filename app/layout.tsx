import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/component/loading/LoadingScreen";
import { Suspense } from "react";
import { LoadingProvider } from "@/context/LoadingContext";
import MainContent from "@/component/layout/MainContent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
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
