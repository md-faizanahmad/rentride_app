"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Car, IndianRupee } from "lucide-react";

interface Post {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface Booking {
  id: string;
  carTitle: string;
  bookingDate: string;
  pricePaid: number;
}

interface DashboardSectionProps {
  role: string;
}

export default function DashboardSection({ role }: DashboardSectionProps) {
  const demoPosts: Post[] = [
    {
      id: "1",
      title: "Toyota Camry 2023",
      image: "/banner/car1.png",
      price: 50,
    },
    {
      id: "2",
      title: "Honda Civic 2022",
      image: "/banner/car2.png",
      price: 45,
    },
    { id: "3", title: "Tesla Model 3", image: "/banner/car3.png", price: 70 },
  ];

  const demoBookings: Booking[] = [
    {
      id: "1",
      carTitle: "BMW X5 2023",
      bookingDate: "June 15, 2025",
      pricePaid: 120,
    },
    {
      id: "2",
      carTitle: "Audi Q7 2022",
      bookingDate: "June 20, 2025",
      pricePaid: 100,
    },
  ];

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={childVariants}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4">
        Dashboard
      </h2>
      {role === "owner" ? (
        <div className="space-y-6">
          <motion.div
            variants={childVariants}
            className="flex items-center space-x-2 text-gray-700"
          >
            <Car className="w-6 h-6" aria-hidden="true" />
            <span>Total Posts: {demoPosts.length}</span>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {demoPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={120}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-semibold text-black">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">₹{post.price}/day</p>
                  <Link
                    href={`/post/${post.id}`}
                    className="mt-2 inline-block text-gray-800 hover:text-gray-900 font-medium"
                  >
                    View Post
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              variants={childVariants}
              className="flex items-center space-x-2 text-gray-700"
            >
              <Car className="w-6 h-6" aria-hidden="true" />
              <span>Total Bookings: {demoBookings.length}</span>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="flex items-center space-x-2 text-gray-700"
            >
              <IndianRupee className="w-6 h-6" aria-hidden="true" />
              <span>
                Total Paid: ₹
                {demoBookings.reduce(
                  (total, booking) => total + booking.pricePaid,
                  0
                )}
              </span>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence>
              {demoBookings.map((booking) => (
                <motion.div
                  key={booking.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-black">
                    {booking.carTitle}
                  </h3>
                  <p className="text-gray-600">
                    Booked on: {booking.bookingDate}
                  </p>
                  <p className="text-gray-600">
                    Price Paid: ₹{booking.pricePaid}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </motion.div>
  );
}
