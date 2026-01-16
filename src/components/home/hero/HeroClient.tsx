"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import HeroServer from "./HeroServer";

const banners = [
  "https://res.cloudinary.com/duvavjepw/image/upload/v1753818526/banner1_n3bvc2.png",
  "https://res.cloudinary.com/duvavjepw/image/upload/v1753818519/banner2_sig7no.png",
  "https://res.cloudinary.com/duvavjepw/image/upload/v1753818480/banner3_jbcbha.png",
  "https://res.cloudinary.com/duvavjepw/image/upload/v1753818511/banner4_ydmdxl.png",
  "https://res.cloudinary.com/duvavjepw/image/upload/v1753818529/banner5_pu50hf.png",
];

export default function HeroClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const slideVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="relative lg:h-[60vh]  bg-gradient-to-r from-blue-300 to-indigo-300 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={banners[currentSlide]}
              alt={`Hero banner ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}

      {/* Server-rendered content */}
      <HeroServer />
    </div>
  );
}
