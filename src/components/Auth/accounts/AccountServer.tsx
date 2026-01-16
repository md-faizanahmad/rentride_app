import Link from "next/link";
import { Phone } from "lucide-react";
import LoginClient from "@/components/Auth/login/LoginClient";
import GoogleSignupClient from "@/components/Auth/signupwithgoogle/SignupwithGoogleClient";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";

export default function AccountServer() {
  // const session = await getServerSession(authOptions);

  // if (session && session.user) {
  //   console.log("AccountServer: Session exists, redirecting to /profile");
  //   redirect("/profile");
  // }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-gray-100/50">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Log In to RentRide
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Access your account to rent or list vehicles.
        </p>

        {/* Login Form */}
        <div className="mb-6">
          <LoginClient />
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="w-full border-gray-200" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="w-full border-gray-200" />
        </div>

        {/* Google Sign-In Button */}
        <div className="mb-4">
          <GoogleSignupClient />
        </div>

        {/* Phone Sign-Up Button */}
        <Link
          href="/auth/phone"
          className="w-full flex items-center justify-center bg-gray-900 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:bg-gray-800 hover:brightness-110 transition-all duration-200"
          aria-label="Sign up with phone number"
        >
          <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
          Sign up with Phone
        </Link>

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/phone"
            className="text-gray-900 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
