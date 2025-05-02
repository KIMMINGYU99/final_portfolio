"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";

export default function LoadingScreen() {
  const { isLoading, setIsLoading } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isLoading, setIsLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8">Portfolio</h1>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-white to-gray-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-white text-sm">{progress}%</p>
    </div>
  );
}
