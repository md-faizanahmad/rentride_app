"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Vehicle } from "./FeaturedCarsSever";
import Link from "next/link";
interface FeaturedCarsClientProps {
  vehicles: Vehicle[];
}

export default function FeaturedCarsClient({
  vehicles,
}: FeaturedCarsClientProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  // const [showLoginPopup, setShowLoginPopup] = useState(false);
  const isLoggedIn = !!session;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle pause on hover
  const pauseAutoplay = useCallback(() => {
    if (emblaApi) emblaApi.plugins().autoplay?.stop();
  }, [emblaApi]);

  const resumeAutoplay = useCallback(() => {
    if (emblaApi) emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  // Handle button clicks
  const handleBookNow = (vehicleId: number) => {
    if (session) {
      router.push(`/booking?vehicleId=${vehicleId}`);
      // router.push(`/booking?vehicleId=${vehicleId}`);
    } else {
    }
  };

  const handleContact = () => {
    if (session) {
      router.push("/");
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  if (!mounted) return null;

  return (
    <div
      className="w-full max-w-7xl mx-auto overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      aria-label="Featured Vehicles Carousel"
    >
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex ">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="embla__slide flex-[0_0_33.33%] min-w-0 px-2 "
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="cursor-pointer overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl h-full relative group">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} rental car`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                    placeholder="blur"
                    blurDataURL="/banner/placeholder.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3">
                  <h3
                    className="text-lg font-semibold text-white"
                    itemProp="name"
                  >
                    {vehicle.name}
                  </h3>
                  <p
                    className="text-black font-medium"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <span itemProp="price">{vehicle.price}</span>
                  </p>
                  <p
                    className="text-gray-200 text-sm mt-1 line-clamp-2"
                    itemProp="description"
                  >
                    {vehicle.description}
                  </p>
                  {isLoggedIn === true ? (
                    <div className="flex gap-2 mt-3">
                      <motion.button
                        disabled={isLoggedIn ? false : true}
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleBookNow(vehicle.id)}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-3 rounded-xl text-sm font-medium shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                        aria-label={`Book ${vehicle.name}`}
                      >
                        Book Now
                      </motion.button>
                      <motion.button
                        disabled={isLoggedIn ? false : true}
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContact}
                        className="flex-1 bg-transparent border border-black text-black py-2 px-3 rounded-xl text-sm font-medium hover:bg-transparent cursor-pointer transition-all duration-200"
                        aria-label="Contact for more information"
                      >
                        Contact
                      </motion.button>
                    </div>
                  ) : (
                    <div className="">
                      <button className="bg-blue-600 p-1 w-30 ms-5 mt-4 rounded">
                        <Link href="/auth/accounts">Login</Link>
                      </button>
                      <span className="ms-6 text-orange-950">
                        For Contact Login
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
