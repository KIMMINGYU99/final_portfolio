import { motion } from "framer-motion";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { ParticleBackgroundProps } from "@/types/layout";

const ParticleBackground = ({ isLoading }: ParticleBackgroundProps) => {
  const dimensions = useWindowDimensions();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={!isLoading ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0"
    >
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0,
          }}
          animate={
            !isLoading
              ? {
                  x: Math.random() * dimensions.width,
                  y: Math.random() * dimensions.height,
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
