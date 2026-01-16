"use client";
import { useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
  Navigation,
} from "lucide-react";
import Image from "next/image";
import bookingImage from "@/assets/booking/image_1.jpeg";

const carTypes = [
  {
    id: "economy",
    name: "Economy",
    price: "₹499",
    icon: "🚗",
    desc: "Budget friendly",
  },
  {
    id: "comfort",
    name: "Comfort",
    price: "₹899",
    icon: "🚙",
    desc: "Spacious SUVs",
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "₹1499",
    icon: "🏎️",
    desc: "Premium Sedans",
  },
];

const BookCar = () => {
  const [selectedType, setSelectedType] = useState("economy");

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 overflow-hidden">
      <main className="container mx-auto px-4 lg:px-8">
        {/* Main Card Container */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-slate-900/50 backdrop-blur-2xl rounded-[40px] border border-white/10 shadow-2xl overflow-hidden min-h-[700px]">
          {/* LEFT: Visual & Status (Desktop) */}
          <div className="hidden lg:flex lg:w-5/12 relative p-12 flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src={bookingImage}
                alt="Booking"
                fill
                className="object-cover opacity-40 grayscale-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">
                  Village Direct
                </span>
              </div>
              <h1 className="text-5xl font-black text-white leading-tight">
                Your Next <br />{" "}
                <span className="text-blue-500">Adventure</span> Starts Here.
              </h1>
            </div>

            <div className="relative z-10 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <p className="text-slate-400 text-sm font-medium italic">
                &quot;Connecting local vehicle owners with riders across every
                district in India.&quot;
              </p>
            </div>
          </div>

          {/* RIGHT: The Smart Form */}
          <div className="w-full lg:w-7/12 p-8 md:p-12 space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white tracking-tight">
                Set Your Route
              </h2>
              <p className="text-slate-400 font-medium">
                Enter your details for an instant estimate.
              </p>
            </div>

            <form className="space-y-8">
              {/* Location Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 group">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">
                    Pickup
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                    <input
                      type="text"
                      placeholder="Current village/City"
                      className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">
                    Dropoff
                  </label>
                  <div className="relative">
                    <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 rotate-45" />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Ride Type Selection (Next-Gen Radio Cards) */}
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">
                  Select Ride Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {carTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`cursor-pointer p-4 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                        selectedType === type.id
                          ? "bg-blue-600 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                          : "bg-slate-800/50 border-transparent grayscale opacity-70 hover:opacity-100"
                      }`}
                    >
                      <span className="text-3xl">{type.icon}</span>
                      <span className="text-sm font-bold text-white">
                        {type.name}
                      </span>
                      <span
                        className={`text-xs font-black ${
                          selectedType === type.id
                            ? "text-blue-100"
                            : "text-blue-400"
                        }`}
                      >
                        {type.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Time & Action */}
              <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
                <div className="w-full md:w-1/2 relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="datetime-local"
                    className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <button className="w-full md:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                  <Search className="w-5 h-5" />
                  Find Available Cars
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookCar;
