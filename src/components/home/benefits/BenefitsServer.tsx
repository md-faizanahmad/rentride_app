import { ShieldCheck, Clock, IndianRupee, Ban, Phone } from "lucide-react";

const benefits = [
  {
    title: "For Renters",
    description: "Get moving without the high costs.",
    color: "from-blue-500 to-cyan-400",
    items: [
      { icon: IndianRupee, text: "Affordable village prices" },
      { icon: ShieldCheck, text: "Verified local owners" },
      { icon: Clock, text: "Flexible hourly booking" },
    ],
  },
  {
    title: "For Owners",
    description: "Turn your vehicle into an asset.",
    color: "from-indigo-500 to-purple-400",
    items: [
      { icon: IndianRupee, text: "Earn extra monthly income" },
      { icon: ShieldCheck, text: "Secure payment network" },
      { icon: Clock, text: "Rent on your own schedule" },
    ],
  },
  {
    title: "Direct Connect",
    description: "The RentRide Promise.",
    color: "from-emerald-500 to-teal-400",
    items: [
      { icon: Ban, text: "Strictly No Agent Fees" },
      { icon: ShieldCheck, text: "Privacy Protected Data" },
      { icon: Phone, text: "Instant Direct Contact" },
    ],
  },
];

export default function BenefitsServer() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Why Choose <span className="text-blue-500">RentRide?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg font-medium">
            Building trust in every journey across rural and urban India.
          </p>
        </div>

        {/* Swipeable Container for Mobile / Grid for Desktop */}
        <div
          className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 no-scrollbar 
          md:grid md:grid-cols-3 md:overflow-visible md:pb-0
        "
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                min-w-[85%] md:min-w-full snap-center /* Mobile: 85% width so next card peeks */
                relative group rounded-[32px] border border-white/5 bg-white/[0.03] p-8 
                hover:bg-white/[0.06] transition-all duration-500
              "
            >
              {/* Decorative Gradient Glow */}
              <div
                className={`absolute -inset-px bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-[32px] transition-opacity duration-500`}
              />

              <h3 className="text-2xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-500 mb-8 font-medium">
                {benefit.description}
              </p>

              <ul className="space-y-6 relative z-10">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group/item">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-blue-400 group-hover/item:scale-110 group-hover/item:text-white group-hover/item:bg-blue-600 transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-300 font-semibold text-sm group-hover/item:text-white transition-colors">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </section>
  );
}
