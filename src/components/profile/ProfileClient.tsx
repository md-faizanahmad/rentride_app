"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, MapPin, Calendar, Edit2, Save } from "lucide-react";

interface User {
  name: string;
  email: string;
  role: string;
  image: string;
  joinDate: string;
  location: string;
}

interface ProfileClientProps {
  user: User;
}

export default function ProfileClient({ user }: ProfileClientProps) {
  const router = useRouter();
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"user" | "owner" | null>(
    null
  );
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [locationInput, setLocationInput] = useState(user.location);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [roleError, setRoleError] = useState<string | null>(null);

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

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const popupVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const handleUpgrade = async () => {
    if (selectedRole !== "owner") {
      setRoleError("Please select 'Owner' to upgrade");
      return;
    }
    try {
      const response = await fetch("/api/user/role", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "owner" }),
      });
      if (!response.ok) {
        const text = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(text);
        } catch {
          errorData = {
            error: `Server returned non-JSON response (Status: ${response.status})`,
          };
        }
        console.error("Role update failed:", {
          status: response.status,
          errorData,
          responseText: text,
        });
        setRoleError(
          errorData.error || `Role update failed (Status: ${response.status})`
        );
        return;
      }
      const data = await response.json();
      console.log("Role update success:", data);
      setShowUpgradePopup(false);
      setRoleError(null);
      router.refresh();
    } catch (error) {
      console.error("Role update error:", error);
      setRoleError(
        error instanceof Error && error.message.includes("Unexpected token")
          ? "Server error: Invalid response from API"
          : error instanceof Error
          ? error.message
          : "An unexpected error occurred"
      );
    }
  };

  const handleSaveLocation = async () => {
    if (locationInput.trim() === "") {
      setLocationError("Location cannot be empty");
      return;
    }
    try {
      const response = await fetch("/api/user/location", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location: locationInput }),
      });
      if (!response.ok) {
        const text = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(text);
        } catch {
          errorData = {
            error: `Server returned non-JSON response (Status: ${response.status})`,
          };
        }
        console.error("Location update failed:", {
          status: response.status,
          errorData,
          responseText: text,
        });
        setLocationError(
          errorData.error ||
            `Location update failed (Status: ${response.status})`
        );
        return;
      }
      const data = await response.json();
      console.log("Location update success:", data);
      setIsEditingLocation(false);
      setLocationError(null);
      router.refresh();
    } catch (error) {
      console.error("Location update error:", error);
      setLocationError(
        error instanceof Error && error.message.includes("Unexpected token")
          ? "Server error: Invalid response from API"
          : error instanceof Error
          ? error.message
          : "An unexpected error occurred"
      );
    }
  };

  const buttonText = user.role === "user" ? "Browse a Car" : "Post a Car";
  const buttonLink = user.role === "user" ? "/vehicles" : "/post-car";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-lg bg-white/90 backdrop-blur-sm p-6 sm:p-8 border border-gray-200"
    >
      <motion.div
        variants={childVariants}
        className="flex flex-col items-center"
      >
        <Image
          src={user.image}
          alt={`${user.name}'s profile picture`}
          width={100}
          height={100}
          className="rounded-full border-2 border-gray-300 mb-6 shadow-sm"
        />
        <motion.h1
          variants={childVariants}
          className="text-2xl sm:text-3xl font-bold text-black"
        >
          {user.name}
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="text-gray-600 text-sm sm:text-base mb-4"
        >
          {user.email}
        </motion.p>
        <motion.div
          variants={childVariants}
          className="flex items-center space-x-2 text-gray-700 mb-4"
        >
          <User className="w-5 h-5" aria-hidden="true" />
          <span>
            Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </span>
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex items-center space-x-2 text-gray-700 mb-4 w-full justify-center"
        >
          <MapPin className="w-5 h-5" aria-hidden="true" />
          {isEditingLocation ? (
            <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
              <div className="flex items-center space-x-2 w-full">
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => {
                    setLocationInput(e.target.value);
                    setLocationError(null);
                  }}
                  placeholder="Enter your location"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-1 text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <motion.button
                  variants={childVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleSaveLocation}
                  className="p-1 text-gray-700 hover:text-black"
                  aria-label="Save location"
                >
                  <Save className="w-5 h-5" />
                </motion.button>
              </div>
              {locationError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm"
                >
                  {locationError}
                </motion.p>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>Location: {user.location}</span>
              <motion.button
                variants={childVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setIsEditingLocation(true)}
                className="p-1 text-gray-700 hover:text-black"
                aria-label="Edit location"
              >
                <Edit2 className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </motion.div>
        <motion.div
          variants={childVariants}
          className="flex items-center space-x-2 text-gray-700 mb-6"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
          <span>Joined: {user.joinDate}</span>
        </motion.div>
        <motion.div variants={childVariants} className="w-full space-y-4">
          <Link
            href={buttonLink}
            className="w-full flex items-center justify-center bg-gray-800 text-white py-3 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-200"
          >
            <motion.span
              variants={childVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {buttonText}
            </motion.span>
          </Link>
          {user.role === "user" && (
            <motion.button
              variants={childVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setShowUpgradePopup(true)}
              className="w-full flex items-center justify-center bg-transparent border border-gray-400 text-gray-800 py-3 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              Upgrade to Car Rental
            </motion.button>
          )}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showUpgradePopup && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="upgrade-popup-title"
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 max-w-sm w-full mx-4">
              <h3
                id="upgrade-popup-title"
                className="text-lg font-semibold text-black mb-4"
              >
                Upgrade Your Account
              </h3>
              <p className="text-gray-600 mb-6">
                Select your account type to proceed.
              </p>
              {roleError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mb-4"
                >
                  {roleError}
                </motion.p>
              )}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={selectedRole === "user"}
                    onChange={() => setSelectedRole("user")}
                    className="text-gray-800 focus:ring-gray-400"
                  />
                  <span>User (Browse and rent cars)</span>
                </label>
                <label className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="radio"
                    name="role"
                    value="owner"
                    checked={selectedRole === "owner"}
                    onChange={() => setSelectedRole("owner")}
                    className="text-gray-800 focus:ring-gray-400"
                  />
                  <span>Owner (Post cars for rent)</span>
                </label>
              </div>
              <div className="flex gap-4 mt-6">
                <motion.button
                  variants={childVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleUpgrade}
                  disabled={!selectedRole}
                  className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                </motion.button>
                <motion.button
                  variants={childVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    setShowUpgradePopup(false);
                    setRoleError(null);
                  }}
                  className="flex-1 bg-transparent border border-gray-400 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200"
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
