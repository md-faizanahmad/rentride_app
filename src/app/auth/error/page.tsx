import Link from "next/link";
import { Suspense } from "react";

export default async function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Suspense
        fallback={
          <div className="text-center py-10 text-gray-600 text-lg">
            Loading...
          </div>
        }
      >
        <Link href="/">Home</Link>
      </Suspense>
    </div>
  );
}
