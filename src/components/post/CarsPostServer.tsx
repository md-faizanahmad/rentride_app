// import { getServerSession } from "next-auth";
// import carsData from "@/data/cars.json";
// import CarsPostClient from "./CarsPostClient";
// import { authOptions } from "@/lib/auth";

// interface CarPostServerProps {
//   searchParams: { searchTerm?: string };
// }

// export default async function CarsPostServer({
//   searchParams,
// }: CarPostServerProps) {
//   const session = await getServerSession(authOptions);
//   const isLoggedIn = !!session;
//   const searchTerm = searchParams.searchTerm || "";

//   // Filter posts on the server for SEO
//   const filteredPosts = searchTerm
//     ? carsData.filter(
//         (post) =>
//           post.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           post.locations.some((location) =>
//             location.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//       )
//     : carsData;

//   return (
//     <CarsPostClient
//       initialPosts={filteredPosts}
//       isLoggedIn={isLoggedIn}
//       initialSearchTerm={searchTerm}
//       user={session?.user || null}
//     />
//   );
// }
import carsData from "@/data/cars.json";
import CarsPostClient from "./CarsPostClient";

interface CarPostServerProps {
  searchParams: { searchTerm?: string };
  isLoggedIn: boolean;
  user: {
    id?: string;
    email?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    role?: string;
    location?: string;
  } | null;
}

export default function CarsPostServer({
  searchParams,
  isLoggedIn,
  user,
}: CarPostServerProps) {
  const searchTerm = searchParams.searchTerm || "";
  const filteredPosts = searchTerm
    ? carsData.filter(
        (post) =>
          post.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.locations.some((location) =>
            location.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    : carsData;

  return (
    <CarsPostClient
      initialPosts={filteredPosts}
      isLoggedIn={isLoggedIn}
      initialSearchTerm={searchTerm}
      user={user}
    />
  );
}
