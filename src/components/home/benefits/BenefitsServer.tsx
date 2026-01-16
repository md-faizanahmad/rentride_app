import { ShieldCheck, Clock, IndianRupee, Ban, Phone } from "lucide-react";

const benefits = [
  {
    title: "For Renters",
    items: [
      { icon: IndianRupee, text: "Affordable rental prices" },
      { icon: ShieldCheck, text: "Verified vehicles and owners" },
      { icon: Clock, text: "Flexible booking times" },
    ],
  },
  {
    title: "For Owners",
    items: [
      { icon: IndianRupee, text: "Earn extra income" },
      { icon: ShieldCheck, text: "Secure payment system" },
      { icon: Clock, text: "Control your availability" },
    ],
  },
  {
    title: "Others",
    items: [
      { icon: Ban, text: "No Agent Fee" },
      { icon: ShieldCheck, text: "Secure Your Details" },
      { icon: Phone, text: "Direct Contact" },
    ],
  },
];

export default function BenefitsServer() {
  return (
    // bg-gradient-to-br from-blue-900 via-gray-410 to-blue-100 backdrop-blur-md
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-8">
          Why Choose RentRide?
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 backdrop-blur-md">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className=" cursor-pointer rounded-3xl  overflow-hidden  bg-white/5  p-6 mb-12 "
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <ul className="space-y-4">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <item.icon
                      className="w-6 h-6 text-white mr-2"
                      aria-hidden="true"
                    />
                    <span className="text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
