"use client";
import {
  Mail,
  Phone,
  Shield,
  Instagram,
  Twitter,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white tracking-tighter">
                Rent<span className="text-blue-500">Ride</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              India&apos;s fastest growing peer-to-peer vehicle sharing network.
              Connecting owners and riders across every village and city.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-blue-500 transition-colors group"
              >
                <Twitter className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-blue-500 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-blue-500 transition-colors group"
              >
                <Facebook className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/book"
                  className="hover:text-white flex items-center gap-1 group"
                >
                  Find a Vehicle{" "}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/rent"
                  className="hover:text-white flex items-center gap-1 group"
                >
                  List your Vehicle{" "}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link href="/cities" className="hover:text-white">
                  Our Presence
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="hover:text-white flex items-center gap-2"
                >
                  <Shield className="w-3 h-3 text-blue-500" /> Safety Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold mb-6">Contact Support</h3>
            <div className="space-y-4">
              <a
                href="mailto:support@rentride.com"
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">support@rentride.com</span>
              </a>
              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-600">
          <p>© {currentYear} RENTRIDE TECHNOLOGIES PVT LTD.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Service Status: Normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
