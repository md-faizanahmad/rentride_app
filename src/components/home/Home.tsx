import { Metadata } from "next";
// import Header from "@/components/header/Header";
import { BookCar } from "@/components/home/bookcar/BookCar";
import HeroClient from "./hero/HeroClient";
import StepsToUseClient from "./steptouse/StepToUseClient";
import BenefitsClient from "./benefits/BenefitsClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "RentRide - Rent Your Dream Car",
  description:
    "Explore our featured vehicles and rent your dream car today with RentRide.",
  openGraph: {
    title: "RentRide - Rent Your Dream Car",
    description:
      "Explore our featured vehicles and rent your dream car today with RentRide.",
    url: "https://www.rentride.com",
    siteName: "RentRide",
    type: "website",
    images: [
      {
        url: "/banner/car1.png",
        width: 800,
        height: 600,
        alt: "Featured vehicle on RentRide",
      },
    ],
  },
  keywords: [
    "car rental",
    "RentRide",
    "featured vehicles",
    "Toyota Camry",
    "Honda SUV",
    "Tesla Model 3",
  ],
};

export default async function Home() {
  return (
    <>
      {/* <Header /> */}
      <div>
        <HeroClient />
      </div>
      <BenefitsClient />
      <StepsToUseClient />
      <BookCar />
    </>
  );
}
