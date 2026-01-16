// import { motion, Variants } from "framer-motion";
// import { User, Mail, Phone } from "lucide-react";

// // Animation variants for input fields and button
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

// // Props for UserDetailsForm component
// interface UserDetailsFormProps {
//   name: string;
//   setName: (value: string) => void;
//   email: string;
//   setEmail: (value: string) => void;
//   phoneNumber: string;
//   setPhoneNumber: (value: string) => void;
//   isSending: boolean;
//   handleSendOtp: () => void;
// }

// // Component for name, email, and phone number inputs with Send OTP button
// export default function UserDetailsForm({
//   name,
//   setName,
//   email,
//   setEmail,
//   phoneNumber,
//   setPhoneNumber,
//   isSending,
//   handleSendOtp,
// }: UserDetailsFormProps) {
//   return (
//     <div className="space-y-6">
//       {/* Name input */}
//       <motion.div variants={childVariants} className="relative">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Full Name
//         </label>
//         <div className="flex items-center space-x-3">
//           <User className="w-5 h-5 text-gray-500" aria-hidden="true" />
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your full name"
//             className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
//             aria-label="Full name"
//             required
//           />
//         </div>
//       </motion.div>
//       {/* Email input */}
//       <motion.div variants={childVariants} className="relative">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Email Address
//         </label>
//         <div className="flex items-center space-x-3">
//           <Mail className="w-5 h-5 text-gray-500" aria-hidden="true" />
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
//             aria-label="Email address"
//             required
//           />
//         </div>
//       </motion.div>
//       {/* Phone number input */}
//       <motion.div variants={childVariants} className="relative">
//         <label
//           htmlFor="phone"
//           className="block text-sm font-medium text-gray-700 mb-1"
//         >
//           Phone Number
//         </label>
//         <div className="flex items-center space-x-3">
//           <Phone className="w-5 h-5 text-gray-500" aria-hidden="true" />
//           <input
//             id="phone"
//             type="tel"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="+91XXXXXXXXXX"
//             className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
//             aria-label="Phone number"
//             required
//           />
//         </div>
//       </motion.div>
//       {/* Send OTP button */}
//       <motion.button
//         variants={childVariants}
//         whileHover="hover"
//         whileTap="tap"
//         onClick={handleSendOtp}
//         disabled={isSending}
//         className={`w-full py-3 px-4 rounded-lg font-medium shadow-md transition-all duration-200 ${
//           isSending
//             ? "bg-gray-400 text-white cursor-not-allowed"
//             : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
//         }`}
//       >
//         {isSending ? "Sending OTP..." : "Send OTP"}
//       </motion.button>
//     </div>
//   );
// }
///////////////////////////////////////////
import { motion, Variants } from "framer-motion";
import { User, Mail, Phone } from "lucide-react";

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

interface UserDetailsFormProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  isSending: boolean;
  handleSendOtp: () => void;
}

export default function UserDetailsForm({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  isSending,
  handleSendOtp,
}: UserDetailsFormProps) {
  return (
    <div className="space-y-6">
      <motion.div variants={childVariants} className="relative">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-gray-500" aria-hidden="true" />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            aria-label="Full name"
            required
          />
        </div>
      </motion.div>
      <motion.div variants={childVariants} className="relative">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-500" aria-hidden="true" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            aria-label="Email address"
            required
          />
        </div>
      </motion.div>
      <motion.div variants={childVariants} className="relative">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-500" aria-hidden="true" />
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+91XXXXXXXXXX"
            className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            aria-label="Phone number"
            required
          />
        </div>
      </motion.div>
      <motion.button
        variants={childVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleSendOtp}
        disabled={isSending}
        className={`w-full py-3 px-4 rounded-lg font-medium shadow-md transition-all duration-200 ${
          isSending
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
        }`}
      >
        {isSending ? "Sending OTP..." : "Send OTP"}
      </motion.button>
    </div>
  );
}
