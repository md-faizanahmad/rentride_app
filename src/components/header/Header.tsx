"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Menu,
  X,
  User,
  Search,
  PlusSquare,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 ${
          scrolled ? "bg-white shadow-md dark:bg-slate-900" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Car className="text-white w-5 h-5" />
            </div>
            <span
              className={`text-xl font-black tracking-tighter ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Rent<span className="text-blue-500">Ride</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/book"
              className={`text-sm font-bold ${
                scrolled ? "text-slate-600" : "text-white/90"
              }`}
            >
              Find Ride
            </Link>
            <Link
              href="/rent"
              className={`text-sm font-bold ${
                scrolled ? "text-slate-600" : "text-white/90"
              }`}
            >
              List Vehicle
            </Link>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden p-2 rounded-xl transition-all ${
              scrolled
                ? "bg-slate-100 text-slate-900"
                : "bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm md:hidden"
          >
            {/* Background click area to close */}
            <div
              className="absolute inset-0"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-950 rounded-t-[40px] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside Menu */}
              <div className="flex items-center justify-between px-8 pt-8 pb-4">
                <span className="text-sm font-black uppercase tracking-widest text-slate-400">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-900 dark:text-white active:scale-90 transition-transform"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Options */}
              <div className="p-8 pt-2 space-y-4">
                {[
                  { name: "Find a Ride", icon: Search, href: "/book" },
                  {
                    name: "List Your Vehicle",
                    icon: PlusSquare,
                    href: "/rent",
                  },
                  { name: "My Account", icon: User, href: "/profile" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl group active:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm group-active:text-blue-600 transition-colors">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </Link>
                ))}

                <div className="pt-4">
                  <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 hover:bg-blue-700 active:scale-95 transition-all">
                    Login / Sign Up
                  </button>
                </div>
              </div>

              {/* Decorative Handle */}
              <div className="w-16 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
