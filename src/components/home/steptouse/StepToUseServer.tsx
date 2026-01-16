import { Search, Book, Car } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Browse a wide range of vehicles in your area.",
  },
  {
    icon: Book,
    title: "Book",
    description: "Reserve your vehicle with a few clicks.",
  },
  {
    icon: Car,
    title: "Ride",
    description: "Enjoy your ride with confidence and ease.",
  },
];

export default function StepsToUseServer() {
  return (
    // bg-gradient-to-br from-blue-100 via-gray-410 to-blue-900 backdrop-blur-md
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex bg-gradient-to-br from-blue-100 via-gray-410 to-blue-900 flex-col cursor-pointer items-center text-center rounded-2xl shadow-md bg-white/10 backdrop-blur-lg p-8 mb-12 border border-white/20"
            >
              <step.icon
                className="w-12  h-12 text-white mb-4"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
