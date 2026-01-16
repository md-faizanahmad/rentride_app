import { Suspense } from "react";
import { getServerSession } from "next-auth";
import SearchWrapper from "./SearchWrapper";
import { authOptions } from "@/lib/auth";
import CarsPostHeader from "@/components/post/CarsPostHeader";

export const metadata = {
  title: "Car Rentals - Find Your Perfect Vehicle",
  description:
    "Browse and rent cars from a wide selection of vehicles across various locations.",
  openGraph: {
    title: "Car Rentals",
    description: "Find and rent cars with ease.",
    url: "https://your-site.com/cars",
  },
};

// Define the props type for the server component
type CarsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session;
  const params = await searchParams; // Resolve the Promise
  const searchTerm = typeof params.search === "string" ? params.search : "";

  return (
    <div className="min-h-screen bg-gray-100">
      <CarsPostHeader />
      <Suspense
        fallback={
          <div className="text-center py-10 text-gray-600 text-lg">
            Loading...
          </div>
        }
      >
        <SearchWrapper
          isLoggedIn={isLoggedIn}
          user={session?.user || null}
          initialSearchTerm={searchTerm} // Pass searchTerm to SearchWrapper
        />
      </Suspense>
    </div>
  );
}
