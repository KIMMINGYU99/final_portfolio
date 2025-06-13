"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getProjects } from "@/utils/api";

// Swiper 스타일
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "@/style/swiper.css";

const ProjectSwiper = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("프로젝트 로딩 에러:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    );
  }

  const variants = {
    containerVariants: {},
    itemVariants: {},
    imageVariants: {},
    contentVariants: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 md:px-8 lg:px-16 relative z-0"
    >
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: false,
            type: "bullets",
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          className="w-full min-h-[400px] relative z-0"
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className="p-2">
                <ProjectCard
                  project={project}
                  index={index}
                  variants={variants}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !w-10 !h-10 !text-white after:!text-2xl after:!font-bold !z-[1]" />
          <div className="swiper-button-next !w-10 !h-10 !text-white after:!text-2xl after:!font-bold !z-[1]" />
          <div className="swiper-pagination !absolute !bottom-0 !left-0 !right-0 !w-full !py-4 !z-[1]" />
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ProjectSwiper;
