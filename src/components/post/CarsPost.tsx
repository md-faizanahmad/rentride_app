// "use client";

// // Importing dependencies for animations, icons, and data
// import { motion, Variants } from "framer-motion";
// import { MapPin, Phone, IndianRupee } from "lucide-react";
// import carsData from "@/data/cars.json";
// import Image from "next/image";
// import Link from "next/link";

// // Define animation variants for car post cards
// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
//   hover: { scale: 1.03, transition: { duration: 0.2 } },
// };

// // Props for CarPostPage component
// interface CarPostPageProps {
//   isLoggedIn: boolean;
//   searchTerm: string; // Added searchTerm to fix TypeScript error
// }

// // Component to display filtered car posts based on search term
// export default function CarPostPage({
//   isLoggedIn,
//   searchTerm,
// }: CarPostPageProps) {
//   // Filter posts based on car name or location
//   const filteredPosts = searchTerm
//     ? carsData.filter((post) => {
//         console.log("Search Term:", searchTerm);
//         const matchesCarName = post.carName.toLowerCase().includes(searchTerm);
//         const matchesLocation = post.locations.some((location) =>
//           location.toLowerCase().includes(searchTerm)
//         );
//         return matchesCarName || matchesLocation;
//       })
//     : carsData;

//   console.log("Filtered Posts:", filteredPosts);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Display search title or default title */}
//       <h2 className="text-3xl font-semibold text-gray-100 mb-8 text-center">
//         {searchTerm
//           ? `Search Results for "${searchTerm}"`
//           : "Available Vehicles"}
//       </h2>
//       <Link href="/">Home</Link>
//       {/* Show message if no posts match the search */}
//       {filteredPosts.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">
//           No posts related to this search
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredPosts.map((post) => (
//             <motion.div
//               key={post.id}
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100/50"
//             >
//               <div className="relative h-48">
//                 <Image
//                   width={300}
//                   height={180}
//                   src={post.carImage}
//                   alt={post.carName}
//                   className="w-full h-48 object-cover"
//                 />
//                 {post.available && (
//                   <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                     Available
//                   </span>
//                 )}
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {post.carName}
//                 </h3>
//                 <div className="space-y-2">
//                   <div className="flex items-center text-gray-600">
//                     <MapPin className="w-5 h-5 mr-2" />
//                     <span>{post.locations.join(", ")}</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <IndianRupee className="w-5 h-5 mr-2" />
//                     <span>${post.price}/day</span>
//                   </div>
//                   {isLoggedIn && (
//                     <div className="flex items-center text-gray-600">
//                       <Phone className="w-5 h-5 mr-2" />
//                       <span>{post.contactNo}</span>
//                     </div>
//                   )}
//                 </div>
//                 <p className="mt-4 text-gray-600 text-sm">{post.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
