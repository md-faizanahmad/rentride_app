"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Home, Phone } from "lucide-react";
import UserMenu from "@/common/UserMenu";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/post?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const navLinks = [
    { href: "/", icon: <Home className="h-9 w-6 mr-2" /> },
    {
      href: "/contact",
      icon: <Phone className="h-9 w-6" />,
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-gray-100/10 backdrop-blur-md text-white p-4 sticky top-0 z-10 shadow-lg border-b border-gray-200/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-extrabold text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            RentRide
          </Link>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex w-full sm:w-96 items-center relative"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cars or locations..."
            className="w-full p-2 pr-10 rounded-full shadow-lg text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
          <button
            type="submit"
            className="absolute right-2 p-1 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200"
          >
            <Search className="h-5 w-5 text-white" />
          </button>
        </form>

        {/* Navigation Links and User Menu */}
        <div className="flex items-center gap-6">
          <nav className=" sm:flex flex  items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex  items-center text-gray-800 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.icon}
              </Link>
            ))}
          </nav>
          <UserMenu />
        </div>

        {/* Mobile Navigation (shown on small screens) */}
        {/* <nav className="sm:hidden flex justify-center gap-4 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center text-gray-900 hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav> */}
      </div>
    </motion.header>
  );
}
