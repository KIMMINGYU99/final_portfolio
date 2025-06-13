"use client";

import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function MainContent({ children }: { children: ReactNode }) {
  return (
    <ClientLayout>
      <Header />
      <main className="pt-16 min-h-screen relative">{children}</main>
      <Footer />
    </ClientLayout>
  );
}
