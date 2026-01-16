"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { User, UserCircle, LogOut, LogIn, UserPlus } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export default function UserMenu() {
  const { data: session, status } = useSession();
  const isLoggedIn = !!session;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition">
        {status === "loading" ? (
          <div className="h-6 w-6 bg-gray-600 rounded-full animate-pulse" />
        ) : isLoggedIn ? (
          <UserCircle className="h-6 w-6 text-orange-950" />
        ) : (
          <User className="h-6 w-6 text-black" />
        )}
      </button>
      {isMenuOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="absolute right-0   w-48 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg py-2 z-20 border border-gray-200"
        >
          {status === "loading" ? (
            <div className="px-4 py-2 text-gray-600">Loading...</div>
          ) : isLoggedIn ? (
            <>
              <Link
                href="/profile"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <UserCircle className="h-5 w-5 mr-2" />
                Profile
              </Link>
              <Link
                href="/auth/accounts"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Accounts
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/accounts"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Create Account
              </Link>
              <Link
                href="/auth/accounts"
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Link>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}
