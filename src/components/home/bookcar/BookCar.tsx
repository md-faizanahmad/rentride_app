"use client";

import { motion } from "framer-motion";
import { Car, Key, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BookCar() {
  return (
    <section
      aria-labelledby="book-your-ride-heading"
      className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center"
    >
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/duvavjepw/image/upload/v1753820826/booknowbg_2_gj3dc2.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax effect for desktop
        }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/90 z-10" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md mb-8"
        >
          <span className="text-blue-400 text-xs font-black uppercase tracking-[0.2em]">
            Start Your Journey
          </span>
        </motion.div>

        <motion.h2
          id="book-your-ride-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight"
        >
          Ready to hit the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Road?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium"
        >
          Whether you need a reliable ride for your family or want to turn your
          vehicle into an income stream, RentRide is your local partner.
        </motion.p>

        {/* Responsive Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/post"
              className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-[20px] font-black text-lg shadow-2xl shadow-blue-600/40 hover:bg-blue-700 transition-all"
            >
              <Car className="w-6 h-6" />
              Book a Ride
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/rent"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-[20px] font-black text-lg hover:bg-white/20 transition-all"
            >
              <Key className="w-6 h-6 text-blue-400" />
              List Your Car
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
