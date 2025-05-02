"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

const HeroContent = () => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { isLoading } = useLoading();

  useEffect(() => {
    const startAnimation = async () => {
      if (!isLoading) {
        await animate(scope.current, { opacity: 1 });
        await animate(
          "span",
          { opacity: 1, y: 0 },
          { duration: 1.5, delay: (i) => i * 0.5 }
        );
      }
    };

    if (isInView && !isLoading) {
      startAnimation();
    } else {
      // 화면에서 벗어나거나 로딩 중일 때 초기 상태로 리셋
      animate(scope.current, { opacity: 0 });
      animate("span", { opacity: 0, y: 20 });
    }
  }, [isInView, animate, isLoading]);

  return (
    <div className="flex gap-4" ref={ref}>
      <motion.div
        ref={scope}
        initial={{ opacity: 0 }}
        className="flex flex-col gap-4"
      >
        <strong className="flex flex-col gap-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            className="text-white text-6xl"
          >
            I'm a Full-Stack Developer.
          </motion.span>
          <div className="flex justify-center gap-3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              className="text-white text-6xl"
            >
              Learning.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              className="text-white text-6xl"
            >
              Building.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
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
