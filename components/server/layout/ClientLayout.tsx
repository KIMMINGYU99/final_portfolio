"use client";

import { ClientLayoutProps } from "@/types/base";
import FloatingButtons from "@/components/client/floating-buttons/FloatingButtons";

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <FloatingButtons />
    </div>
  );
};

export default ClientLayout;
