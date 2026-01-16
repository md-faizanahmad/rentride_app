import { Mail, Phone, Info, Shield } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-300 to-blue-100 backdrop-blur-md text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2" />
              About RentRide
            </h3>
            <p className="text-sm">
              RentRide connects vehicle owners with renters for a seamless,
              affordable experience.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </h3>
            <address className="text-sm not-italic">
              <p className="flex items-center mb-2">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:support@rentride.com">support@rentride.com</a>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Policies
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/terms" className="hover:underline" rel="nofollow">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline"
                  rel="nofollow"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social/Extra */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com" className="hover:text-blue-400">
                X
              </a>
              <a href="https://facebook.com" className="hover:text-blue-400">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} RentRide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
