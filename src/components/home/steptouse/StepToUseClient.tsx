"use client";

import { motion, Variants } from "framer-motion";
import StepsToUseServer from "./StepToUseServer";

export default function StepsToUseClient() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="motion-wrapper"
    >
      <StepsToUseServer />
    </motion.div>
  );
}
