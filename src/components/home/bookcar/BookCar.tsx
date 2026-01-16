"use client";

import { motion } from "framer-motion";
// import Link from "next/link";

export function BookCar() {
  return (
    <section
      aria-labelledby="book-your-ride-heading"
      className="relative py-16 bg-gray-100"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/duvavjepw/image/upload/v1753820826/booknowbg_2_gj3dc2.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-blend-darken bg-opacity-10"></div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <motion.h2
          id="book-your-ride-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Book Your Perfect Ride or List Your Car
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Rent a car for your next adventure or earn money by listing your
          vehicle on our trusted platform.
        </motion.p>
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/post"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
            >
              Book a Car
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            aria-disabled
          >
            <Link
              href="/"
              className="inline-block  bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              List Your Car
            </Link>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
