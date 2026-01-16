"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Edit2, Save } from "lucide-react";
import { useRouter } from "next/navigation";

interface LocationEditorProps {
  location: string;
}

export default function LocationEditor({ location }: LocationEditorProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [locationInput, setLocationInput] = useState(location);
  const [locationError, setLocationError] = useState<string | null>(null);

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
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
      setIsEditing(false);
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

  return isEditing ? (
    <div className="flex flex-col items-center sm:items-start space-y-2">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={locationInput}
          onChange={(e) => {
            setLocationInput(e.target.value);
            setLocationError(null);
          }}
          placeholder="Enter your location"
          className="border border-gray-300 rounded-lg px-3 py-1 text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
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
      <span>Location: {location}</span>
      <motion.button
        variants={childVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setIsEditing(true)}
        className="p-1 text-gray-700 hover:text-black"
        aria-label="Edit location"
      >
        <Edit2 className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
