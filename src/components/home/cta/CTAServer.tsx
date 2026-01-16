import Link from "next/link";
import { Car } from "lucide-react";

export default function CTAServer() {
  return (
    // bg-gradient-to-br from-blue-100 via-gray-410 to-blue-100 backdrop-blur-md
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Ready to Ride?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join RentRide today and start your journey!
        </p>
        <Link
          href="/auth/signup"
          className="inline-flex items-center bg-blue-600 text-white py-3 px-6 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-200"
          aria-label="Get started with RentRide"
        >
          <Car className="w-5 h-5 mr-2" aria-hidden="true" />
          Get Started
        </Link>
      </div>
    </section>
  );
}
