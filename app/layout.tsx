import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import LoadingScreen from "@/components/loading/LoadingScreen";
import { Suspense } from "react";
import { LoadingProvider } from "@/context/LoadingContext";

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
          <div className="relative z-10">
            <Suspense fallback={null}>
              <LoadingScreen />
            </Suspense>
            <ClientLayout>
              <Header />
              <main className="pt-16 min-h-screen">{children}</main>
              <Footer />
            </ClientLayout>
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
