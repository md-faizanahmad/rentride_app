"use client";

import { motion, Variants } from "framer-motion";
import LoginServer from "./LoginServer";

export default function LoginClient() {
  const formVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="motion-wrapper"
    >
      <LoginServer />
    </motion.div>
  );
}
