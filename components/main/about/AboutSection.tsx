"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Me
          </h2>
          <div className="space-y-6 text-gray-300">
            <p>
              안녕하세요! 저는 프론트엔드 개발자입니다. 사용자 경험을
              중요시하며, 깔끔하고 직관적인 인터페이스를 만드는 것을 좋아합니다.
            </p>
            <p>
              React, Next.js, TypeScript 등의 기술을 사용하여 웹 애플리케이션을
              개발하고 있습니다. 지속적인 학습과 성장을 통해 더 나은 개발자가
              되기 위해 노력하고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
