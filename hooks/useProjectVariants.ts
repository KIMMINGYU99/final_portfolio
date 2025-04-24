import { Variants } from "framer-motion";

export const useProjectVariants = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 100,
      x: index % 2 === 0 ? -100 : 100,
      scale: 0.8,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  return {
    containerVariants,
    itemVariants,
    imageVariants,
    contentVariants,
  };
};
