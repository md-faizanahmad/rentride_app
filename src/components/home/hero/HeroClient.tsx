"use client";

import { motion } from "framer-motion";
import HeroServer from "./HeroServer";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-slate-950">
      {/* --- Video Background Container --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105" // scale-105 prevents white edges
          poster="https://res.cloudinary.com/duvavjepw/image/upload/v1753818526/banner1_n3bvc2.pn" // Show image while video loads
        >
          <source src="RentRide_Ola_Hero_Cars_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* --- High-End Overlays --- */}
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient for Header (Top-Down) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />

        {/* Gradient for Content (Left-to-Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        {/* Bottom Blend (To blend video into the next section) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* --- Content Layer --- */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* HeroServer contains our Title, Subtext, and Search Bar */}
          <HeroServer />
        </motion.div>
      </div>

      {/* --- Scroll Indicator (Mobile First) --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
