"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import { ParticleBackgroundProps } from "@/types/layout";
import { useMemo } from "react";

const PARTICLE_COUNT = 50;
const PARTICLE_SIZE = 1;

const ParticleBackground = ({
  isLoading,
  className = "",
}: ParticleBackgroundProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
      })),
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      {particles.map(({ id, initialX, initialY }) => (
        <motion.div
          key={id}
          initial={{
            x: `${initialX}vw`,
            y: `${initialY}vh`,
            opacity: 0,
          }}
          animate={
            !isLoading
              ? {
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  opacity: [0, 0.8, 0],
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
        />
      ))}
    </motion.div>
  );
};

export default ParticleBackground;
