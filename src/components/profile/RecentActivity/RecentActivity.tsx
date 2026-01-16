"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";

interface Activity {
  id: string;
  action: string;
  date: string;
}

interface RecentActivitySectionProps {
  role: string;
}

export default function RecentActivitySection({
  role,
}: RecentActivitySectionProps) {
  const demoActivity: Activity[] =
    role === "owner"
      ? [
          { id: "1", action: "Posted Toyota Camry 2023", date: "July 1, 2025" },
          {
            id: "2",
            action: "Updated pricing for Honda Civic 2022",
            date: "July 2, 2025",
          },
        ]
      : [
          { id: "1", action: "Booked BMW X5 2023", date: "June 15, 2025" },
          { id: "2", action: "Reviewed Audi Q7 2022", date: "June 21, 2025" },
        ];

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={childVariants}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        <AnimatePresence>
          {demoActivity.map((activity) => (
            <motion.div
              key={activity.id}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-between text-gray-700"
            >
              <span>{activity.action}</span>
              <span className="text-sm text-gray-500">{activity.date}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
