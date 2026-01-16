"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { User, MapPin, Calendar } from "lucide-react";
import LocationEditor from "../profilelocation/LocationEditor";

interface User {
  name: string;
  email: string;
  role: string;
  image: string;
  joinDate: string;
  location: string;
}

interface ProfileHeaderProps {
  user: User;
  buttonText: string;
  buttonLink: string;
  onLogout: () => void;
}

export default function ProfileHeader({
  user,
  buttonText,
  buttonLink,
  onLogout,
}: ProfileHeaderProps) {
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };
  const userInitial = user.name.charAt(0).toUpperCase();

  return (
    <motion.div
      variants={childVariants}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200"
    >
      <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex items-center justify-center w-[120px] h-[120px] rounded-full border-2 border-gray-300 shadow-sm bg-gray-100 text-4xl font-bold text-gray-800">
          {userInitial}
        </div>
        <div className="text-center sm:text-left">
          <motion.h1
            variants={childVariants}
            className="text-2xl sm:text-3xl font-bold text-black"
          >
            {user.name}
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="text-gray-600 text-sm sm:text-base"
          >
            {user.email}
          </motion.p>
          <motion.div
            variants={childVariants}
            className="flex items-center space-x-2 text-gray-700 mt-2"
          >
            <User className="w-5 h-5" aria-hidden="true" />
            <span>
              Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </span>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="flex items-center space-x-2 text-gray-700 mt-2"
          >
            <MapPin className="w-5 h-5" aria-hidden="true" />
            <LocationEditor location={user.location} />
          </motion.div>
          <motion.div
            variants={childVariants}
            className="flex items-center space-x-2 text-gray-700 mt-2"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <span>Joined: {user.joinDate}</span>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={childVariants}
        className="mt-6 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href={buttonLink}
          className="flex-1 bg-gray-800 text-white py-3 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-200 text-center"
        >
          <motion.span
            variants={childVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {buttonText}
          </motion.span>
        </Link>
        <motion.button
          variants={childVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={onLogout}
          className="flex-1 bg-transparent border border-gray-400 text-gray-800 py-3 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="flex items-center justify-center space-x-2">
            <span>Log Out</span>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
