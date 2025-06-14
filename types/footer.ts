import { ReactNode } from "react";

export type TContactItemProps = {
  icon: ReactNode;
  content: string;
  href?: string;
  isLink?: boolean;
};
