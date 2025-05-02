"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionProps } from "@/types/base";

const Section = ({ children, id, className = "", title }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section id={id} className={`py-20 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {title}
            </h2>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
