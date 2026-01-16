// import PhoneSignup from "@/components/Auth/phone/PhoneSignup";

// function SignUpWithPhone() {
//   return <PhoneSignup />;
// }

// export default SignUpWithPhone;
import { Suspense } from "react";
import PhoneSignup from "@/components/Auth/phone/PhoneSignup";
import SkeletonLoader from "@/components/post/SkeletonLoader";

export default async function PhoneAuthPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const phone = typeof params.phone === "string" ? params.phone : "";

  return (
    <Suspense fallback={<SkeletonLoader />}>
      <PhoneSignup initialPhone={phone} />
    </Suspense>
  );
}
