import vehiclesData from "@/data/featuredcars.json";
import FeaturedCarsClient from "./FeaturedCarsClient";

// Define car type
export interface Vehicle {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function FeaturedCarsServer({
  vehicles = vehiclesData,
}: {
  vehicles?: Vehicle[];
}) {
  // For production: Fetch from database, e.g., Prisma
  // const vehicles = await prisma.vehicle.findMany();

  return (
    // bg-gradient-to-br from-blue-100 via-gray-410 to-blue-400 backdrop-blur-md
    <section
      className="py-12 "
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-8">
          Featured Vehicles
        </h2>
        <FeaturedCarsClient vehicles={vehicles} />
      </div>
    </section>
  );
}
