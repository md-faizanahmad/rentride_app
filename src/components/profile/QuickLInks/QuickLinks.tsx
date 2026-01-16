"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface QuickLinksSectionProps {
  buttonText: string;
  buttonLink: string;
}

export default function QuickLinksSection({
  buttonText,
  buttonLink,
}: QuickLinksSectionProps) {
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={childVariants}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4">
        Quick Links
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href={buttonLink}
          className="bg-gray-100 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center"
        >
          <motion.span
            variants={childVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {buttonText}
          </motion.span>
        </Link>
        <Link
          href="/settings"
          className="bg-gray-100 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center"
        >
          <motion.span
            variants={childVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Account Settings
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}
