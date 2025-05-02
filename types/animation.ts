import { Variants } from "framer-motion";

export type AnimationVariants = {
  containerVariants: Variants;
  itemVariants: Variants;
  imageVariants: Variants;
  contentVariants: Variants;
};

export type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  threshold?: number;
  delay?: number;
};

export type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
};

export type ScaleProps = {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
};
