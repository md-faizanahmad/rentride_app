import { Search, CalendarCheck, Key } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find a Ride",
    description:
      "Enter your village or city to see available cars, bikes, or tractors nearby.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: CalendarCheck,
    title: "Instant Booking",
    description:
      "Choose your duration and chat directly with the owner to confirm.",
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Key,
    title: "Pickup & Drive",
    description:
      "Meet the owner, grab the keys, and start your journey with ease.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function StepsToUseServer() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            3 Steps to <span className="text-blue-500">Get Moving</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* The Connection Line (Desktop Only) */}
        {/* <div className="hidden md:block absolute top-[60%] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-800 z-0" /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Step Number Circle */}
              <div className="mb-6 relative">
                <div
                  className={`w-20 h-20 rounded-3xl ${step.bg} border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-xl shadow-black/50`}
                >
                  <step.icon className={`w-10 h-10 ${step.accent}`} />
                </div>

                {/* Floating Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-slate-950 rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                  0{index + 1}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[250px] mx-auto font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
