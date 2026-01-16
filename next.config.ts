// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// /** @type {import('next').NextConfig} */
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [],
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "3000",
//         pathname: "/banner/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["lh3.googleusercontent.com"], // Add Google profile image domain
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "3000",
//         pathname: "/banner/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "rentrideapp.vercel.app",
      "res.cloudinary.com",
    ], // ✅ Add Vercel domain for production
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "localhost",
      //   port: "3000",
      //   pathname: "/banner/**", // ✅ Your local images
      // },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",

        pathname: "/banner/**", // ✅ Your local images
      },
      {
        protocol: "https",
        hostname: "rentrideapp.vercel.app",
        pathname: "/banner/**", // ✅ Your hosted banner path
      },
    ],
  },
};

module.exports = nextConfig;
