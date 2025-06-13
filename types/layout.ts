import { ReactNode } from "react";

export type ParticleBackgroundProps = {
  className?: string;
};

export type HeaderProps = {
  isScrolled: boolean;
  className?: string;
};

export type FooterProps = {
  className?: string;
};

export type MainLayoutProps = {
  children: ReactNode;
  className?: string;
};

export type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export type ContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
};
