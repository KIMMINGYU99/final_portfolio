"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";

const LoadingScreen = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 20);

    // 100% 도달 후 0.5초 더 표시
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center w-full max-w-md px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white">Portfolio</h1>
        </motion.div>

        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <motion.div
            className="bg-white h-2.5 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="text-white font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {progress}%
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
