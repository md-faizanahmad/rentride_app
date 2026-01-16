"use client";

import { motion } from "framer-motion";
import StepsToUseServer from "./StepToUseServer";

export default function StepsToUseClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each step appears one by one
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <StepsToUseServer />
    </motion.div>
  );
}
