"use client";

import { motion } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";
import ParticleBackground from "@/components/common/animation/ParticleBackground";
import HeroContent from "./HeroContent";
import { memo } from "react";

const HeroSection = memo(() => {
  const { isLoading } = useLoading();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      role="banner"
    >
      <ParticleBackground isLoading={isLoading} />
      <HeroContent />
    </motion.section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
