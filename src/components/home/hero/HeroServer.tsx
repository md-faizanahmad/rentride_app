import { Search, MapPin, Sparkles } from "lucide-react";

export default function HeroServer() {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl text-left space-y-8">
          {/* Badge for Trust */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
              India&apos;s #1 Village Rental Network
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Rent Any Ride, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Anywhere in India.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
              From village tractors to city sedans. Connect directly with owners
              for the most affordable rates across your district.
            </p>
          </div>

          {/* Professional Search Bar */}
          <div className="max-w-xl">
            <form
              action="/post"
              method="GET"
              className="group relative flex items-center bg-white rounded-2xl shadow-2xl p-1.5 transition-all focus-within:ring-4 focus-within:ring-blue-500/20"
              aria-label="Search vehicles"
            >
              <div className="flex-1 flex items-center px-4 gap-3">
                <MapPin className="text-blue-600 w-5 h-5 flex-shrink-0" />
                <input
                  type="text"
                  name="search"
                  autoComplete="off"
                  placeholder="Try 'Gaya' or 'Mahindra Thar'..."
                  className="w-full bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none py-4 font-medium text-base md:text-lg"
                  aria-label="Vehicle search input"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all active:scale-95 flex items-center gap-2"
                aria-label="Search vehicles"
              >
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Find Rides</span>
              </button>
            </form>

            {/* Quick Suggestions Tags */}
            <div className="flex flex-wrap gap-3 mt-4 px-2">
              <span className="text-xs font-medium text-slate-400 uppercase">
                Popular:
              </span>
              {["Tractors", "Toyota", "Electric Bike"].map((tag) => (
                <button
                  key={tag}
                  className="text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
