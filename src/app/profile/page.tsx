// import ProfileServer from "@/components/profile/ProfileServer";
// import Header from "@/components/header/Header";

// export default function ProfilePage() {
//   return (
//     <>
//       <Header />
//       <ProfileServer />
//     </>
//   );
// }
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ProfilePage from "@/components/profile/Profile";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    console.log("No session found, redirecting to /auth");
    redirect("/auth/accounts");
  }

  const user = {
    name: session.user.name || "User",
    email: session.user.email || "N/A",
    role: session.user.role || "user",
    image: session.user.image || "/banner/placeholder.jpg",
    joinDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    location: session.user.location || "Not set",
  };

  console.log("Profile: User data", user);

  return <ProfilePage user={user} />;
}
