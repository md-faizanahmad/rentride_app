import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardServer() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  // Redirect to profile page (dashboard and profile are similar)
  redirect("/profile");
}
