"use client";

import { ClientLayoutProps } from "@/types/base";
import FloatingButtons from "../floating-buttons/FloatingButtons";

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
      {children}
      <FloatingButtons />
    </>
  );
};

export default ClientLayout;
