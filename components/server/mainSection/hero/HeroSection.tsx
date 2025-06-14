"use client";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/server/common/animation/ParticleBackground"),
  { ssr: false }
);
import HeroContent from "./HeroContent";
import { memo } from "react";

const HeroSection = memo(() => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      role="banner"
    >
      <ParticleBackground />
      <HeroContent />
    </motion.section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
