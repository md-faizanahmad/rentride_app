import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("PATCH /api/user/role: Session", session);

    if (!session || !session.user) {
      console.log("PATCH /api/user/role: Unauthorized - No session or user");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { role } = await request.json();
    console.log("PATCH /api/user/role: Request body", { role });

    if (role !== "owner") {
      console.log("PATCH /api/user/role: Invalid role");
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Mock database update (replace with actual database logic, e.g., Prisma)
    // e.g., await prisma.user.update({ where: { id: session.user.id }, data: { role } });
    // Update session to reflect new role (mock)
    session.user.role = role;
    console.log("PATCH /api/user/role: Role updated successfully", { role });

    return NextResponse.json({ message: "Role updated" }, { status: 200 });
  } catch (error: unknown) {
    console.error("PATCH /api/user/role: Error", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
