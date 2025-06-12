"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

const HeroContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { isLoading } = useLoading();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex gap-4" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView && !isLoading ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <strong className="flex flex-col gap-10 text-center">
          <motion.span
            variants={textVariants}
            initial="hidden"
            animate={isInView && !isLoading ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-6xl"
          >
            I'm a Full-Stack Developer.
          </motion.span>
          <div className="flex justify-center gap-3">
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate={isInView && !isLoading ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white text-6xl"
            >
              Learning.
            </motion.span>
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate={isInView && !isLoading ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white text-6xl"
            >
              Building.
            </motion.span>
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate={isInView && !isLoading ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-white text-6xl"
            >
              Growing.
            </motion.span>
          </div>
        </strong>
      </motion.div>
    </div>
  );
};

export default HeroContent;
