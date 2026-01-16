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
  Home,
  LogIn,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Find Ride", icon: Search, href: "/book" },
    { name: "List Car", icon: PlusSquare, href: "/rent" },
    { name: "Profile", icon: User, href: "/profile" },
  ];

  return (
    <>
      {/* TOP HEADER (Desktop & Mobile Logo Only) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-blue-500/20 shadow-lg">
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

          {/* Desktop Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold transition-colors hover:text-blue-500 ${
                  scrolled ? "text-slate-600" : "text-white/90"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              Sign In
            </button>
          </nav>

          {/* Mobile More Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-white bg-blue-600 rounded-full shadow-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION BAR (Instagram Style) */}
      <nav className="md:hidden fixed bottom-1 left-1/2 -translate-x-1/2 z-50 w-[100%] max-w-[500px]">
        <div className="bg-white backdrop-blur-xl border border-sky-100  p-2 flex items-center justify-around shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center gap-1 p-2 group"
            >
              <item.icon className="w-6 h-6 text-black group-hover:text-blue-500 transition-colors" />
              <span className="text-[10px] font-medium text-black group-hover:text-blue-400 uppercase tracking-tighter">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* MOBILE FULL MENU OVERLAY (When "Menu" clicked) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-white/5 rounded-full text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-8 mt-12">
              <h2 className="text-white text-3xl font-black italic">
                Settings & Support
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <Link
                  href="/help"
                  className="text-xl text-slate-400 font-bold border-b border-white/5 pb-4"
                >
                  Help Center
                </Link>
                <Link
                  href="/safety"
                  className="text-xl text-slate-400 font-bold border-b border-white/5 pb-4"
                >
                  Safety Information
                </Link>
                <Link
                  href="/terms"
                  className="text-xl text-slate-400 font-bold border-b border-white/5 pb-4"
                >
                  Terms of Service
                </Link>
                <button className="flex items-center gap-3 text-blue-500 text-2xl font-black mt-4">
                  <LogIn /> Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
