import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

export type TagProps = {
  children: ReactNode;
  className?: string;
};

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
};

export type TextAreaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  rows?: number;
};
