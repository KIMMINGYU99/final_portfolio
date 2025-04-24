"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import Loading from "./loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="relative z-10">
          <Loading />
          <ClientLayout>
            <Header />
            <main className="pt-16 min-h-screen">{children}</main>
            <Footer />
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}
