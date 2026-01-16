"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Book a Car", href: "/book" },
  { name: "Rent a Car", href: "/rent" },
];

const dropdownVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-400 backdrop-blur-md shadow-lg"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white flex items-center"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            RentRide
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-100 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Button
              variant="ghost"
              className="flex items-center cursor-pointer text-base font-medium text-gray-100 "
              aria-label={isLoggedIn ? "User profile menu" : "Account menu"}
              aria-expanded={isDropdownOpen}
            >
              <User className="w-5 h-5 mr-1" />
              {isLoggedIn ? "Profile" : "Account"}
            </Button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute right-0 mt-2 w-33 bg-white/80 backdrop-blur-md  shadow-xl border border-gray-100/50 p-0"
                >
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50/50 hover:text-blue-600 rounded-lg"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/api/auth/signout"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50/50 hover:text-blue-600 rounded-lg"
                      >
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/auth/accounts"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50/50 hover:text-blue-600 rounded-lg"
                      >
                        Login
                      </Link>
                      <Link
                        href="/auth/signup"
                        className="block px-4 py-2 text-gray-800  hover:text-blue-600 rounded-lg"
                      >
                        Signup
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-gray-100 "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white/80 backdrop-blur-md shadow-lg"
          >
            <div
              className="flex flex-col items-center px-4 py-4 space-y-2"
              role="menu"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-800 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {link.name}
                </Link>
              ))}
              {isLoggedIn ? (
                <>
                  <Link
                    href="/profile"
                    className="text-base font-medium text-gray-800 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/api/auth/signout"
                    className="text-base font-medium text-gray-800 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/accounts"
                    className="text-base font-medium text-gray-800 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="text-base font-medium text-gray-800 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
