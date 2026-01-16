// // "use client";

// // // Importing dependencies for search params and component rendering
// // import { useSearchParams } from "next/navigation";
// // import CarPostPage from "@/components/post/CarsPost";

// // // Props for SearchWrapper component
// // interface SearchWrapperProps {
// //   isLoggedIn: boolean;
// // }

// // // Client Component to handle search params and render CarPostPage
// // export default function SearchWrapper({ isLoggedIn }: SearchWrapperProps) {
// //   // Get search term from URL query parameters
// //   const searchParams = useSearchParams();
// //   const searchTerm = searchParams.get("search")?.toLowerCase().trim() || "";

// //   // Render CarPostPage with search term and login status
// //   return <CarPostPage isLoggedIn={isLoggedIn} searchTerm={searchTerm} />;
// // }
// "use client";

// import { useSearchParams } from "next/navigation";
// import CarsPostServer from "@/components/post/CarsPostServer";

// interface SearchWrapperProps {
//   isLoggedIn: boolean;
//   user: {
//     id?: string;
//     email?: string | null;
//     name?: string | null;
//     phoneNumber?: string | null;
//     role?: string;
//     location?: string;
//   } | null;
// }

// export default function SearchWrapper({
//   isLoggedIn,
//   user,
// }: SearchWrapperProps) {
//   const searchParams = useSearchParams();
//   const searchTerm = searchParams.get("search")?.toLowerCase().trim() || "";

//   return (
//     <CarsPostServer
//       searchParams={{ searchTerm }}
//       isLoggedIn={isLoggedIn}
//       user={user}
//     />
//   );
// }
"use client";

import { useSearchParams } from "next/navigation";
import CarsPostServer from "@/components/post/CarsPostServer";

interface SearchWrapperProps {
  isLoggedIn: boolean;
  user: {
    id?: string;
    email?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    role?: string;
    location?: string;
  } | null;
  initialSearchTerm: string; // Add initialSearchTerm prop
}

export default function SearchWrapper({
  isLoggedIn,
  user,
  initialSearchTerm,
}: SearchWrapperProps) {
  const searchParams = useSearchParams();
  const searchTerm =
    searchParams.get("search")?.toLowerCase().trim() || initialSearchTerm;

  return (
    <CarsPostServer
      searchParams={{ searchTerm }}
      isLoggedIn={isLoggedIn}
      user={user}
    />
  );
}
