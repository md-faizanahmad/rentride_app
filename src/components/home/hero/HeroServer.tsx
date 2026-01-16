// import Link from "next/link";

// export default function HeroServer() {
//   return (
//     <section className="relative min-h-[60vh]  bg-gradient-to-r  flex items-center justify-center">
//       <div className="absolute inset-0 bg-black/20" />
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center z-10">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
//           Rent Your Dream Ride
//         </h1>
//         <p className="text-lg sm:text-xl text-white mb-8">
//           Discover and rent vehicles effortlessly with RentRide.
//         </p>
//         <form className="max-w-md mx-auto" aria-label="Search vehicles">
//           <div className="flex items-center bg-white/80 backdrop-blur-md rounded-xl shadow-md p-2 ">
//             <input
//               type="text"
//               placeholder="Search for vehicles..."
//               className="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none px-4 py-2"
//               aria-label="Vehicle search input"
//             />
//             <Link
//               href="/post"
//               className="bg-gradient-to-br from-blue-300 via-gray-410 to-blue-400 backdrop-blur-md text-white py-2 px-4 rounded-lg  transition-colors duration-200"
//               aria-label="Search vehicles"
//             >
//               Search
//             </Link>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

export default function HeroServer() {
  return (
    <section className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Rent Your Dream Ride
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8">
          Discover and rent vehicles effortlessly with RentRide.
        </p>
        <form
          action="/post?search=<term>"
          method="GET"
          className="max-w-md mx-auto"
          aria-label="Search vehicles"
        >
          <div className="flex items-center bg-white/80 backdrop-blur-md rounded-xl shadow-md p-2">
            <input
              type="text"
              name="search"
              placeholder="Search by car or city (e.g., Gaya, Toyota Camry)"
              className="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none px-4 py-2"
              aria-label="Vehicle search input"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              aria-label="Search vehicles"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
