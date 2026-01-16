"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Phone, IndianRupee } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import carsData from "@/data/cars.json";
import SkeletonLoader from "./SkeletonLoader";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

interface CarPostClientProps {
  initialPosts: typeof carsData;
  isLoggedIn: boolean;
  initialSearchTerm: string;
  user: {
    id?: string;
    email?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    role?: string;
    location?: string;
  } | null;
}

export default function CarsPostClient({
  initialPosts,
  isLoggedIn,
  initialSearchTerm,
}: //   user,
CarPostClientProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      const filtered = initialSearchTerm
        ? carsData.filter(
            (post) =>
              post.carName
                .toLowerCase()
                .includes(initialSearchTerm.toLowerCase()) ||
              post.locations.some((location) =>
                location.toLowerCase().includes(initialSearchTerm.toLowerCase())
              )
          )
        : carsData;
      setPosts(filtered);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [initialSearchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        {initialSearchTerm
          ? `Search Results for "${initialSearchTerm}"`
          : "Available Vehicles"}
      </h2>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No posts related to this search
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100/50"
            >
              <div className="relative h-48">
                <Image
                  width={300}
                  height={180}
                  src={post.carImage}
                  alt={post.carName}
                  className="w-full h-48 object-cover"
                />
                {post.available && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Available
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.carName}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{post.locations.join(", ")}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IndianRupee className="w-5 h-5 mr-2" />
                    <span>₹{post.price}/day</span>
                  </div>
                  {isLoggedIn && (
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>{post.contactNo}</span>
                    </div>
                  )}
                </div>
                <p className="mt-4 text-gray-600 text-sm">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
