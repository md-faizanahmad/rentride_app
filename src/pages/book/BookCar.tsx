"use client";
import { Search, MapPin, Clock, Car } from "lucide-react";
import bookingImage from "@/assets/booking/image_1.jpeg";

const carTypes = [
  {
    id: "economy",
    name: "Economy",
    price: "$15",
    description: "Compact cars for short trips",
  },
  {
    id: "comfort",
    name: "Comfort",
    price: "$25",
    description: "Mid-size cars for more space",
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "$40",
    description: "Premium cars for special rides",
  },
];

const BookCar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r mt-15 ">
      {/* Header (from Header.tsx) */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow flex items-center">
        <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden">
          {/* Image on Left (Desktop) */}
          <div
            className="hidden lg:block lg:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${bookingImage.src})` }}
            role="img"
            aria-label="Car booking illustration"
          ></div>

          {/* Form on Right (Desktop) or Full (Mobile) */}
          <div className="w-full lg:w-1/2 p-4 sm:p-5 lg:p-6 bg-[url(${bookingImage.src})] bg-cover bg-center lg:bg-none">
            {/* Overlay for Mobile Background */}
            <div className="lg:bg-transparent bg-black/0  p-0 lg:p-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-2 sm:mb-3">
                Book a Car
              </h1>
              <p className="text-center text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm lg:text-base">
                Go anywhere with RentRide
              </p>

              <form className="space-y-4 sm:space-y-0">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4">
                  {/* Pickup and Dropoff Locations */}
                  <div className="sm:col-span-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
                    <div>
                      <label
                        htmlFor="pickup"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Pickup Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                        <input
                          id="pickup"
                          type="text"
                          placeholder="Where are you?"
                          className="pl-9 sm:pl-10 w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="dropoff"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Dropoff Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                        <input
                          id="dropoff"
                          type="text"
                          placeholder="Where to?"
                          className="pl-9 sm:pl-10 w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="datetime"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      When
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                      <input
                        id="datetime"
                        type="datetime-local"
                        className="pl-9 sm:pl-10 w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Car Type */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="car_type"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Car Type
                    </label>
                    <div className="relative">
                      <Car className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                      <select
                        id="car_type"
                        className="pl-9 sm:pl-10 w-full px-2.5 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm appearance-none bg-white"
                      >
                        {carTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name} ({type.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Find Cars Button */}
                <button
                  type="submit"
                  className="w-full mt-10 sm:w-auto sm:px-6 lg:px-8 flex justify-center items-center py-2 sm:py-2.5 border border-transparent rounded-md shadow-sm text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Find Cars
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookCar;
