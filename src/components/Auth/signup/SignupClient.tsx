"use client";

import { motion, Variants } from "framer-motion";
import SignupServer from "./SignUpServer";

export default function SignupClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="motion-wrapper"
    >
      <SignupServer />
    </motion.div>
  );
}
