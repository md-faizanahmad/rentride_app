"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthErrorClientProps {
  error: string | null;
}

export default function AuthErrorClient({ error }: AuthErrorClientProps) {
  const router = useRouter();

  useEffect(() => {
    if (error === "Configuration") {
      console.error("Server configuration error. Check server logs.");
    }
  }, [error]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
      <h1 className="text-xl font-bold mb-4 text-red-600">
        Authentication Error
      </h1>
      <p className="text-gray-600 mb-4">
        {error === "Configuration"
          ? "There is a problem with the server configuration. Please try again later or contact support."
          : "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
      >
        Return to Homepage
      </button>
    </div>
  );
}
