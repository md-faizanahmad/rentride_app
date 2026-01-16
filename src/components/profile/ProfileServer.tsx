import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ProfileClient from "./ProfileClient";
import { redirect } from "next/navigation";

export default async function ProfileServer() {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log("No session found, redirecting to /auth");
    redirect("/auth");
  }

  const user = {
    name: session.user?.name || "User",
    email: session.user?.email || "N/A",
    role: session.user?.role || "user",
    image: session.user?.image || "/banner/placeholder.jpg",
    joinDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }), // Mock join date
    location: session.user?.location || "Not set", // Mock or DB-stored location
  };

  console.log("ProfileServer: User data", user);

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-white p-4 sm:p-6 lg:p-8"
      aria-label="User profile page"
    >
      <ProfileClient user={user} />
    </section>
  );
}
