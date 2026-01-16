"use client";

import { motion } from "framer-motion";
import BenefitsServer from "./BenefitsServer";

export default function BenefitsClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      {/* We apply the item animation to the children (the cards) 
          by targeting the grid container inside BenefitsServer */}
      <BenefitsServer />
    </motion.div>
  );
}
