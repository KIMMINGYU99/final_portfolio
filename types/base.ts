import { ReactNode } from "react";

export type ColumnBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export type RowBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export type ClientLayoutProps = {
  children: React.ReactNode;
};
export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};
export type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
};
export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export type TagProps = {
  children: React.ReactNode;
  className?: string;
};
