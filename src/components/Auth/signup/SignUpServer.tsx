"use client";
import Link from "next/link";
import { Phone, Lock } from "lucide-react";

const SignUpPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 via-white to-purple-100 p-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          Sign Up for RentRide
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Create an account to start renting or listing vehicles.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your full name"
              />
              <p className="mt-1 text-sm text-red-600 hidden">
                Full name is required
              </p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your email"
              />
              <p className="mt-1 text-sm text-red-600 hidden">
                Invalid email address
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your password"
              />
              <Lock
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                aria-hidden="true"
              />
            </div>
            <div className="mt-2">
              <div className="flex space-x-1">
                <div className="h-1.5 w-full bg-gray-200 rounded-full">
                  <div className="h-full w-1/2 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-xs text-gray-600">Medium</p>
              </div>
              <p className="mt-1 text-sm text-red-600 hidden">
                Password must be at least 6 characters
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm_password"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm your password"
              />
              <Lock
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                aria-hidden="true"
              />
            </div>
            <p className="mt-1 text-sm text-green-600 hidden">
              Passwords match
            </p>
            <p className="mt-1 text-sm text-red-600 hidden">
              Passwords do not match
            </p>
          </div>
          <div>
            <label
              htmlFor="phone_no"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone_no"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your phone number"
            />
            <p className="mt-1 text-sm text-red-600 hidden">
              Invalid phone number
            </p>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 space-y-4">
          <div
            id="google-signup-placeholder"
            className="h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm"
          >
            Google Sign Up (Placeholder)
          </div>
          <Link
            href="/auth/phone"
            className="w-full flex items-center justify-center bg-gray-900 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:bg-gray-800 hover:brightness-110 transition-all duration-200"
            aria-label="Sign up with phone number"
          >
            <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
            Sign up with Phone
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/accounts"
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
