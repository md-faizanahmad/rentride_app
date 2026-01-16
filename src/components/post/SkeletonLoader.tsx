"use client";

import { motion } from "framer-motion";

export default function SkeletonLoader() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100/50"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <div className="h-48 bg-gray-200" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
      </div>
    </motion.div>
  );
}
