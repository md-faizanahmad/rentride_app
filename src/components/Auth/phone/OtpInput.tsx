// "use client";

// // Importing dependencies for state, refs, animations, and icons
// import { useState, useRef, useEffect } from "react";
// import { motion, Variants } from "framer-motion";
// import { Lock } from "lucide-react";

// // Animation variants for OTP input fields and button
// const childVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
//   hover: { scale: 1.02, transition: { duration: 0.2 } },
//   tap: { scale: 0.98 },
// };

// // Props for OtpInput component
// interface OtpInputProps {
//   setOtp: (value: string) => void;
//   isVerifying: boolean;
//   handleVerifyOtp: () => void;
// }

// // Component for 6-digit OTP input with split fields and Verify OTP button
// export default function OtpInput({
//   setOtp,
//   isVerifying,
//   handleVerifyOtp,
// }: OtpInputProps) {
//   // State for individual OTP digits
//   const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
//   // Ref to manage input focus, typed as an array of HTMLInputElement or null
//   const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

//   // Sync otpValues with parent component via setOtp
//   useEffect(() => {
//     setOtp(otpValues.join(""));
//   }, [otpValues, setOtp]);

//   // Handle input change for each digit
//   const handleChange = (index: number, value: string) => {
//     if (!/^\d?$/.test(value)) return; // Allow only single digits
//     const newOtpValues = [...otpValues];
//     newOtpValues[index] = value;
//     setOtpValues(newOtpValues);

//     // Auto-focus next input if a digit is entered and not at the last input
//     if (value && index < 5) {
//       inputsRef.current[index + 1]?.focus();
//     }
//   };

//   // Handle keydown events (Backspace, ArrowLeft, ArrowRight)
//   const handleKeyDown = (
//     index: number,
//     e: React.KeyboardEvent<HTMLInputElement>
//   ) => {
//     if (e.key === "Backspace" && !otpValues[index] && index > 0) {
//       inputsRef.current[index - 1]?.focus(); // Move to previous input on Backspace if empty
//     } else if (e.key === "ArrowLeft" && index > 0) {
//       inputsRef.current[index - 1]?.focus(); // Move to previous input
//     } else if (e.key === "ArrowRight" && index < 5) {
//       inputsRef.current[index + 1]?.focus(); // Move to next input
//     }
//   };

//   // Handle paste event for 6-digit OTP
//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
//     if (pastedData.length === 6) {
//       setOtpValues(pastedData.split("").slice(0, 6)); // Fill inputs with pasted digits
//       inputsRef.current[5]?.focus(); // Focus last input
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* OTP input fields */}
//       <motion.div variants={childVariants} className="relative">
//         <label
//           htmlFor="otp-0"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Enter 6-digit OTP
//         </label>
//         <div className="flex items-center space-x-2">
//           <Lock className="w-5 h-5 text-gray-500" aria-hidden="true" />
//           <div className="flex space-x-2">
//             {otpValues.map((value, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 type="text"
//                 value={value}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 onPaste={index === 0 ? handlePaste : undefined}
//                 maxLength={1}
//                 className="w-12 h-12 text-center text-lg font-medium bg-gray-50/50 border border-gray-200 rounded-lg px-2 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
//                 aria-label={`OTP digit ${index + 1}`}
//                 ref={(el) => {
//                   inputsRef.current[index] = el; // Assign input element to ref array
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </motion.div>
//       {/* Verify OTP button */}
//       <motion.button
//         variants={childVariants}
//         whileHover="hover"
//         whileTap="tap"
//         onClick={handleVerifyOtp}
//         disabled={isVerifying}
//         className={`w-full py-3 px-4 rounded-lg font-medium shadow-md transition-all duration-200 ${
//           isVerifying
//             ? "bg-gray-400 text-white cursor-not-allowed"
//             : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
//         }`}
//       >
//         {isVerifying ? "Verifying OTP..." : "Verify OTP"}
//       </motion.button>
//     </div>
//   );
// }
//////////////////////////////////////////////////////////////
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  focus: {
    scale: 1.1,
    boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.2 },
  },
  shake: {
    x: [-10, 10, -10, 10, 0],
    transition: { duration: 0.3 },
  },
};

interface OtpInputProps {
  setOtp: (value: string) => void;
  isVerifying: boolean;
  handleVerifyOtp: () => void;
}

export default function OtpInput({
  setOtp,
  isVerifying,
  handleVerifyOtp,
}: OtpInputProps) {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const otp = otpValues.join("");
    setOtp(otp);
    if (otp.length === 6 && !/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP");
    } else {
      setError(null);
    }
    inputsRef.current[0]?.focus();
  }, [otpValues, setOtp]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) {
      setError("Only numbers are allowed");
      return;
    }
    setError(null);
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1]?.focus();
    } else if (e.key === "Enter" && otpValues.join("").length === 6) {
      handleVerifyOtp();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pastedData.length === 6) {
      setOtpValues(pastedData.split("").slice(0, 6));
      inputsRef.current[5]?.focus();
    } else {
      setError("Pasted OTP must be 6 digits");
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants} className="relative">
        <label
          htmlFor="otp-0"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3"
        >
          Enter 6-digit OTP
        </label>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Lock
              className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
              aria-hidden="true"
            />
          </motion.div>
          <div className="flex space-x-2 sm:space-x-3">
            {otpValues.map((value, index) => (
              <motion.input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                maxLength={1}
                className={`w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-medium bg-white dark:bg-gray-700 border ${
                  error
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg px-2 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-200`}
                aria-label={`OTP digit ${index + 1}`}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                variants={inputVariants}
                animate={error ? "shake" : value ? "focus" : "visible"}
                whileFocus="focus"
              />
            ))}
          </div>
        </div>
        <AnimatePresence>
          {error && (
            <motion.p
              className="mt-2 text-sm text-red-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.button
        variants={childVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleVerifyOtp}
        disabled={isVerifying || otpValues.join("").length !== 6}
        className={`w-full mt-6 py-3 px-4 rounded-lg font-medium shadow-md transition-all duration-200 ${
          isVerifying || otpValues.join("").length !== 6
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700"
        }`}
      >
        {isVerifying ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Verifying OTP...
          </span>
        ) : (
          "Verify OTP"
        )}
      </motion.button>
    </motion.div>
  );
}
