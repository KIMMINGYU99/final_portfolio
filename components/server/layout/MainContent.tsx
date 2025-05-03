"use client";

import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useLoading } from "@/context/LoadingContext";

export default function MainContent({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return null;
  }

  return (
    <ClientLayout>
      <Header />
      <main className="pt-16 min-h-screen">{children}</main>
      <Footer />
    </ClientLayout>
  );
}
