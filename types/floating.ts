import { ReactNode } from "react";

export type BaseFloatingButtonProps = {
  className?: string;
  onClick?: () => void;
};

export type FloatingButtonProps = BaseFloatingButtonProps & {
  icon: ReactNode;
};

export type ThemeToggleProps = BaseFloatingButtonProps;

export type ScrollToTopProps = BaseFloatingButtonProps;
