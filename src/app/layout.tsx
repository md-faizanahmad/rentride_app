// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "MyRentCar",
//   description:
//     "Rent 3 or 4-wheelers easily with MyRentCar. affordable, verified vehicles near you.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
// import ClientSessionProvider from "@/provider/ClientSessionProvider";
// import { ReactNode } from "react";
// import "./globals.css";

// export const metadata = {
//   title: "RentRide",
//   description: "Rent vehicles easily with RentRide",
// };

// interface RootLayoutProps {
//   children: ReactNode;
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en">
//       <body>
//         <ClientSessionProvider>{children}</ClientSessionProvider>
//       </body>
//     </html>
//   );
// }
import Footer from "@/components/footer/Footer";
import "./globals.css";
import Script from "next/script";
import AuthProvider from "@/components/AuthProviders/AuthProviders";
import { Analytics } from "@vercel/analytics/next";
import "@/utils/suppressLogs";
import Header from "@/components/header/Header";

export const metadata = {
  title: "RentRide - Rent Cars ",
  description:
    "Free platform to list and rent vehicles directly. No middleman, keep all your earnings!",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
        <Footer />
        <Analytics />
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then(registration => console.log('Service Worker registered'))
                  .catch(error => console.error('Service Worker registration failed:', error));
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
