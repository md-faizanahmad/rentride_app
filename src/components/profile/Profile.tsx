"use client";

import { motion, Variants } from "framer-motion";
import ProfileHeader from "./profileheader/ProfileHeader";
import DashboardSection from "./DashboardSection/DashboardSection";
import RecentActivitySection from "./RecentActivity/RecentActivity";
import QuickLinksSection from "./QuickLInks/QuickLinks";
import { signOut } from "next-auth/react";
import Header from "../header/Header";

interface User {
  name: string;
  email: string;
  role: string;
  image: string;
  joinDate: string;
  location: string;
}

interface ProfilePageProps {
  user: User;
}

export default function ProfilePage({ user }: ProfilePageProps) {
  const buttonText = user.role === "user" ? "Browse Cars" : "Post a Car";
  const buttonLink = user.role === "user" ? "/post" : "/post-car";

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/auth/accounts" });
  };

  return (
    <div>
      <Header />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8"
        aria-label="User profile dashboard"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <ProfileHeader
            user={user}
            buttonText={buttonText}
            buttonLink={buttonLink}
            onLogout={handleLogout}
          />
          <DashboardSection role={user.role} />
          <RecentActivitySection role={user.role} />
          <QuickLinksSection buttonText={buttonText} buttonLink={buttonLink} />
        </div>
      </motion.section>
    </div>
  );
}
