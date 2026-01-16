import { LogIn, Mail } from "lucide-react";

export default function LoginServer() {
  return (
    <form className="space-y-6" aria-label="Log in form">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <div className="flex items-center bg-white rounded-xl p-2 shadow-sm">
          <Mail className="w-5 h-5 text-gray-500 mr-2" aria-hidden="true" />
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
            aria-label="Email address"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <div className="flex items-center bg-white/50 rounded-xl p-2 shadow-sm">
          <LogIn className="w-5 h-5 text-gray-500 mr-2" aria-hidden="true" />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
            aria-label="Password"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-200"
        aria-label="Log in with email and password"
      >
        Log In
      </button>
    </form>
  );
}
