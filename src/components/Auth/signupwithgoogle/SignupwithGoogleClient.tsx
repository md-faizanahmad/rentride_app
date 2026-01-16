"use client";

import { motion, Variants } from "framer-motion";
import { signIn } from "next-auth/react";
import GoogleSignupServer from "./SignupwithGoogleServer";

export default function GoogleSignupClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-12 w-full flex items-center justify-center bg-gradient-to-r  p-4"
    >
      <GoogleSignupServer />
      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        className="w-4000 flex items-center justify-center  text-black py-3 px-4 rounded-xl shadow-md cursor-pointer transition-colors duration-200 max-w-md"
        aria-label="Sign up with Google"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12.0003 4.75C13.7703 4.75 15.3553 5.36 16.6053 6.55L20.0303 3.125C17.9503 1.19 15.2353 0 12.0003 0C7.31028 0 3.25528 2.69 1.28028 6.61L5.27028 9.705C6.21528 6.86 8.87028 4.75 12.0003 4.75Z"
            fill="#EA4335"
          />
          <path
            d="M23.49 12.275C23.49 11.49 23.4153 10.735 23.2803 10H12.0003V14.69H18.6153C18.2803 16.695 17.2553 18.44 15.7553 19.655L19.7253 22.75C22.1003 20.5 23.49 16.87 23.49 12.275Z"
            fill="#4285F4"
          />
          <path
            d="M5.26499 14.295C4.92999 13.08 4.92999 11.945 5.26499 10.73L1.27999 7.635C0.464987 9.265 0.00498701 10.995 0.00498701 12.815C0.00498701 14.635 0.464987 16.365 1.27999 17.995L5.26499 14.295Z"
            fill="#FBBC05"
          />
          <path
            d="M12.0003 24C15.2403 24 17.9653 22.935 19.7253 22.75L15.7553 19.655C14.6053 20.445 13.2253 20.94 12.0003 20.94C8.87028 20.94 6.21528 18.83 5.26528 15.985L1.28028 19.08C3.25528 23 7.31028 25.69 12.0003 24Z"
            fill="#34A853"
          />
        </svg>
        Sign up with Google
      </motion.button>
    </motion.div>
  );
}
