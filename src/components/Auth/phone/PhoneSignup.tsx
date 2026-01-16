// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { motion, Variants } from "framer-motion";
// import { User, Mail, Phone, Lock } from "lucide-react";
// import {
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
//   ConfirmationResult,
// } from "firebase/auth";
// import { signIn } from "next-auth/react";
// import { auth } from "@/lib/firebase";
// import Header from "@/components/header/Header";

// export default function PhoneSignup() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] =
//     useState<ConfirmationResult | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isSending, setIsSending] = useState(false);
//   const [isVerifying, setIsVerifying] = useState(false);

//   // Initialize reCAPTCHA
//   useEffect(() => {
//     const recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: () => {},
//       }
//     );
//     return () => recaptchaVerifier.clear();
//   }, []);

//   const handleSendOtp = async () => {
//     if (!name.trim()) {
//       setError("Please enter your name");
//       return;
//     }
//     if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
//       setError("Please enter a valid email");
//       return;
//     }
//     if (!phoneNumber.match(/^\+\d{10,12}$/)) {
//       setError("Please enter a valid phone number (e.g., +91XXXXXXXXXX)");
//       return;
//     }
//     setIsSending(true);
//     setError(null);
//     try {
//       const recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: () => {},
//         }
//       );
//       const result = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         recaptchaVerifier
//       );
//       setConfirmationResult(result);
//       console.log("OTP sent to", phoneNumber);
//     } catch (error: unknown) {
//       console.error("Send OTP error:", error);
//       if (error instanceof Error) {
//         setError(error.message || "Failed to send OTP. Please try again.");
//       } else {
//         setError("Failed to send OTP. Please try again.");
//       }
//     } finally {
//       setIsSending(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (!otp || otp.length !== 6) {
//       setError("Please enter a valid 6-digit OTP");
//       return;
//     }
//     if (!confirmationResult) {
//       setError("No OTP request found. Please send OTP first.");
//       return;
//     }
//     setIsVerifying(true);
//     setError(null);
//     try {
//       const result = await confirmationResult.confirm(otp);
//       console.log("OTP verified, user:", result.user);
//       const userProfile = {
//         uid: result.user.uid,
//         name,
//         email,
//         phoneNumber,
//         role: "user",
//         location: "Not set",
//         createdAt: new Date().toISOString(),
//       };
//       localStorage.setItem("userProfile", JSON.stringify(userProfile));
//       const signInResult = await signIn("credentials", {
//         redirect: false,
//         phoneNumber,
//         uid: result.user.uid,
//         name,
//         email,
//       });
//       if (signInResult?.error) {
//         console.error("NextAuth sign-in error:", signInResult.error);
//         setError("Authentication failed. Please try again.");
//         return;
//       }
//       console.log("NextAuth sign-in successful:", signInResult);
//       router.push("/profile");
//     } catch (error: unknown) {
//       console.error("Verify OTP error:", error);
//       if (error instanceof Error) {
//         setError(error.message || "Invalid OTP. Please try again.");
//       } else {
//         setError("Invalid OTP. Please try again.");
//       }
//     } finally {
//       setIsVerifying(false);
//     }
//   };

//   const containerVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const childVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//     hover: { scale: 1.02, transition: { duration: 0.2 } },
//     tap: { scale: 0.98 },
//   };

//   return (
//     <div>
//       <Header />
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-sm mt-15 mb-15 sm:max-w-md lg:max-w-lg mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100/50"
//         aria-label="Phone signup form"
//       >
//         <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
//           Join RentRide
//         </h2>
//         <div id="recaptcha-container" className="w-0 h-0 overflow-hidden" />
//         <div className="space-y-6">
//           {!confirmationResult ? (
//             <>
//               <motion.div variants={childVariants} className="relative">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Full Name
//                 </label>
//                 <div className="flex items-center space-x-3">
//                   <User className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                   <input
//                     id="name"
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter your full name"
//                     className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
//                     aria-label="Full name"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div variants={childVariants} className="relative">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email Address
//                 </label>
//                 <div className="flex items-center space-x-3">
//                   <Mail className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
//                     aria-label="Email address"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div variants={childVariants} className="relative">
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Phone Number
//                 </label>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                   <input
//                     id="phone"
//                     type="tel"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     placeholder="+91XXXXXXXXXX"
//                     className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
//                     aria-label="Phone number"
//                   />
//                 </div>
//               </motion.div>
//               {error && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-600 text-sm text-center"
//                 >
//                   {error}
//                 </motion.p>
//               )}
//               <motion.button
//                 variants={childVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 onClick={handleSendOtp}
//                 disabled={isSending}
//                 className={`w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium shadow-md transition-all duration-200 ${
//                   isSending
//                     ? "opacity-60 cursor-not-allowed"
//                     : "hover:bg-gray-800 hover:brightness-110"
//                 }`}
//               >
//                 {isSending ? "Sending OTP..." : "Send OTP"}
//               </motion.button>
//             </>
//           ) : (
//             <>
//               <motion.div variants={childVariants} className="relative">
//                 <label
//                   htmlFor="otp"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   OTP
//                 </label>
//                 <div className="flex items-center space-x-3">
//                   <Lock className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                   <input
//                     id="otp"
//                     type="text"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     placeholder="Enter 6-digit OTP"
//                     className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
//                     aria-label="OTP"
//                   />
//                 </div>
//               </motion.div>
//               {error && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-600 text-sm text-center"
//                 >
//                   {error}
//                 </motion.p>
//               )}
//               <motion.button
//                 variants={childVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 onClick={handleVerifyOtp}
//                 disabled={isVerifying}
//                 className={`w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium shadow-md transition-all duration-200 ${
//                   isVerifying
//                     ? "opacity-60 cursor-not-allowed"
//                     : "hover:bg-gray-800 hover:brightness-110"
//                 }`}
//               >
//                 {isVerifying ? "Verifying OTP..." : "Verify OTP"}
//               </motion.button>
//             </>
//           )}
//           <motion.p
//             variants={childVariants}
//             className="text-sm text-gray-600 text-center"
//           >
//             This is a test environment. Use phone number +91 9876543210 and OTP
//             123456 for testing.
//           </motion.p>
//           <motion.p
//             variants={childVariants}
//             className="text-center text-xs text-gray-500"
//           >
//             Protected by reCAPTCHA
//           </motion.p>
//           <motion.p
//             variants={childVariants}
//             className="text-center text-sm text-gray-600"
//           >
//             Already have an account?{" "}
//             <a
//               href="/auth/accounts"
//               className="text-gray-900 hover:underline font-medium"
//             >
//               Sign in
//             </a>
//           </motion.p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// // Importing dependencies for state management, navigation, animations, and authentication
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { motion, Variants } from "framer-motion";
// import {
//   signInWithPhoneNumber,
//   RecaptchaVerifier,
//   ConfirmationResult,
// } from "firebase/auth";
// import { signIn } from "next-auth/react";
// import { auth } from "@/lib/firebase";
// import Header from "@/components/header/Header";
// import UserDetailsForm from "./UserDetailsForm";
// import OtpInput from "./OtpInput";

// // Define the main PhoneSignup component
// export default function PhoneSignup() {
//   // Router for navigation
//   const router = useRouter();

//   // State for form inputs and authentication process
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] =
//     useState<ConfirmationResult | null>(null);
//   const [isSending, setIsSending] = useState(false);
//   const [isVerifying, setIsVerifying] = useState(false);

//   // Initialize Firebase reCAPTCHA verifier on component mount
//   useEffect(() => {
//     const recaptchaVerifier = new RecaptchaVerifier(
//       auth,
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: () => {
//           console.log("reCAPTCHA verified");
//         },
//       }
//     );
//     // Cleanup reCAPTCHA on component unmount
//     return () => recaptchaVerifier.clear();
//   }, []);

//   // Handle sending OTP to the user's phone number
//   const handleSendOtp = async () => {
//     // Validate inputs
//     if (!name.trim()) {
//       console.error("Validation error: Name is empty");
//       alert("Try again");
//       return;
//     }
//     if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
//       console.error("Validation error: Invalid email format");
//       alert("Try again");
//       return;
//     }
//     if (!phoneNumber.match(/^\+\d{10,12}$/)) {
//       console.error("Validation error: Invalid phone number format");
//       alert("Try again");
//       return;
//     }
//     setIsSending(true);
//     try {
//       // Initialize reCAPTCHA verifier
//       const recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "recaptcha-container",
//         {
//           size: "invisible",
//           callback: () => {},
//         }
//       );
//       // Send OTP using Firebase
//       const result = await signInWithPhoneNumber(
//         auth,
//         phoneNumber,
//         recaptchaVerifier
//       );
//       setConfirmationResult(result);
//       console.log("OTP sent to", phoneNumber);
//     } catch (error: unknown) {
//       console.error("Send OTP error:", error);
//       alert("Check your internet");
//       router.push("/");
//     } finally {
//       setIsSending(false);
//     }
//   };

//   // Handle OTP verification and NextAuth sign-in
//   const handleVerifyOtp = async () => {
//     // Validate OTP
//     if (!otp || otp.length !== 6) {
//       console.error("Validation error: Invalid OTP format");
//       alert("Try again");
//       return;
//     }
//     if (!confirmationResult) {
//       console.error("Validation error: No OTP request found");
//       alert("Try again");
//       return;
//     }
//     setIsVerifying(true);
//     try {
//       // Verify OTP with Firebase
//       const result = await confirmationResult.confirm(otp);
//       console.log("OTP verified, user:", result.user);
//       // Store user profile in localStorage
//       const userProfile = {
//         uid: result.user.uid,
//         name,
//         email,
//         phoneNumber,
//         role: "user",
//         location: "Not set",
//         createdAt: new Date().toISOString(),
//       };
//       localStorage.setItem("userProfile", JSON.stringify(userProfile));
//       // Sign in with NextAuth
//       const signInResult = await signIn("credentials", {
//         redirect: false,
//         phoneNumber,
//         uid: result.user.uid,
//         name,
//         email,
//       });
//       if (signInResult?.error) {
//         console.error("NextAuth sign-in error:", signInResult.error);
//         alert("Try again");
//         return;
//       }
//       console.log("NextAuth sign-in successful:", signInResult);
//       router.push("/");
//     } catch (error: unknown) {
//       console.error("Verify OTP error:", error);
//       alert("Try again");
//     } finally {
//       setIsVerifying(false);
//     }
//   };

//   // Animation variants for the form container
//   const containerVariants: Variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <div>
//       {/* Render the header component */}
//       <Header />
//       {/* Main form container with animation */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100/50 my-10"
//         aria-label="Phone signup form"
//       >
//         <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
//           Join RentRide
//         </h2>
//         {/* Invisible reCAPTCHA container */}
//         <div id="recaptcha-container" className="w-0 h-0 overflow-hidden" />
//         <div className="space-y-6">
//           {/* Show user details form or OTP input based on confirmationResult */}
//           {!confirmationResult ? (
//             <UserDetailsForm
//               name={name}
//               setName={setName}
//               email={email}
//               setEmail={setEmail}
//               phoneNumber={phoneNumber}
//               setPhoneNumber={setPhoneNumber}
//               isSending={isSending}
//               handleSendOtp={handleSendOtp}
//             />
//           ) : (
//             <OtpInput
//               setOtp={setOtp}
//               isVerifying={isVerifying}
//               handleVerifyOtp={handleVerifyOtp}
//             />
//           )}
//           {/* Test environment notice */}
//           <motion.p className="text-sm text-gray-600 text-center">
//             This is a test environment. Use phone number +91 9876543210 and OTP
//             123456 for testing.
//           </motion.p>
//           {/* reCAPTCHA notice */}
//           <motion.p className="text-center text-xs text-gray-500">
//             Protected by reCAPTCHA
//           </motion.p>
//           {/* Sign-in link */}
//           <motion.p className="text-center text-sm text-gray-600">
//             Already have an account?{" "}
//             <a
//               href="/auth/accounts"
//               className="text-gray-900 hover:underline font-medium"
//             >
//               Sign in
//             </a>
//           </motion.p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
} from "firebase/auth";
import { signIn } from "next-auth/react";
import { auth } from "@/lib/firebase";
import Header from "@/components/header/Header";
import UserDetailsForm from "./UserDetailsForm";
import OtpInput from "./OtpInput";

interface PhoneSignupProps {
  initialPhone?: string;
}

// Custom interface for Firebase AuthError-like objects
interface FirebaseAuthError {
  code: string;
  message: string;
}

// Custom type guard for FirebaseAuthError
function isFirebaseAuthError(error: unknown): error is FirebaseAuthError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    "message" in error &&
    typeof error.code === "string" &&
    typeof error.message === "string"
  );
}

export default function PhoneSignup({ initialPhone = "" }: PhoneSignupProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(initialPhone);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOtp = async () => {
    if (!auth) {
      setError("Authentication service unavailable. Please try again later.");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your full name");
      return;
    }
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!phoneNumber.match(/^\+\d{10,15}$/)) {
      setError("Please enter a valid phone number (e.g., +91XXXXXXXXXX)");
      return;
    }

    setIsSending(true);
    setError(null);
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => console.log("reCAPTCHA verified"),
          "expired-callback": () => {
            setError("reCAPTCHA expired. Please try again.");
            setIsSending(false);
          },
        }
      );

      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      setConfirmationResult(result);
      console.log("OTP sent to", phoneNumber);
    } catch (error: unknown) {
      console.error("Send OTP error:", error);
      setError(getFirebaseErrorMessage(error));
    } finally {
      setIsSending(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    if (!confirmationResult) {
      setError("No OTP request found. Please send OTP again.");
      return;
    }

    setIsVerifying(true);
    setError(null);
    try {
      const result = await confirmationResult.confirm(otp);
      console.log("OTP verified, user:", result.user);

      const signInResult = await signIn("credentials", {
        redirect: false,
        phoneNumber,
        uid: result.user.uid,
        name,
        email,
      });

      if (signInResult?.error) {
        console.error("NextAuth sign-in error:", signInResult.error);
        setError("Authentication failed. Please try again.");
        return;
      }

      console.log("NextAuth sign-in successful:", signInResult);
      router.push("/");
    } catch (error: unknown) {
      console.error("Verify OTP error:", error);
      setError(getFirebaseErrorMessage(error));
    } finally {
      setIsVerifying(false);
    }
  };

  const getFirebaseErrorMessage = (error: unknown): string => {
    if (isFirebaseAuthError(error)) {
      switch (error.code) {
        case "auth/invalid-phone-number":
          return "Invalid phone number format. Use E.164 format (e.g., +91XXXXXXXXXX).";
        case "auth/too-many-requests":
          return "Too many attempts. Please try again later.";
        case "auth/invalid-verification-code":
          return "Invalid OTP. Please try again.";
        case "auth/network-request-failed":
          return "Network error. Please check your internet connection.";
        case "auth/invalid-api-key":
          return "Firebase configuration error. Please contact support.";
        default:
          return error.message || "An error occurred. Please try again.";
      }
    }
    return "An unexpected error occurred. Please try again.";
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <Header />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto bg-white/55 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100/50 my-10"
        aria-label="Phone signup form"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Join RentRide
        </h2>
        <div id="recaptcha-container" className="w-0 h-0 overflow-hidden" />
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-center mb-4"
          >
            {error}
          </motion.p>
        )}
        <div className="space-y-6">
          {!confirmationResult ? (
            <UserDetailsForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              isSending={isSending}
              handleSendOtp={handleSendOtp}
            />
          ) : (
            <OtpInput
              setOtp={setOtp}
              isVerifying={isVerifying}
              handleVerifyOtp={handleVerifyOtp}
            />
          )}
          <motion.p className="text-sm text-gray-600 text-center">
            This is a test environment. Use phone number +91 9876543210 and OTP
            123456 for testing.
          </motion.p>
          <motion.p className="text-center text-xs text-gray-500">
            Protected by reCAPTCHA
          </motion.p>
          <motion.p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/auth/accounts"
              className="text-gray-900 hover:underline font-medium"
            >
              Sign in
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
