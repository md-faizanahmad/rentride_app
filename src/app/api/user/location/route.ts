import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("PATCH /api/user/location: Session", session);

    if (!session || !session.user) {
      console.log(
        "PATCH /api/user/location: Unauthorized - No session or user"
      );
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { location } = await request.json();
    console.log("PATCH /api/user/location: Request body", { location });

    if (typeof location !== "string" || location.trim() === "") {
      console.log("PATCH /api/user/location: Invalid location");
      return NextResponse.json({ error: "Invalid location" }, { status: 400 });
    }

    // Mock database update (replace with actual database logic, e.g., Prisma)
    // e.g., await prisma.user.update({ where: { id: session.user.id }, data: { location } });
    // Update session to reflect new location (mock)
    session.user.location = location;
    console.log("PATCH /api/user/location: Location updated successfully", {
      location,
    });

    return NextResponse.json({ message: "Location updated" }, { status: 200 });
  } catch (error: unknown) {
    console.error("PATCH /api/user/location: Error", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
