"use client";
import { motion } from "framer-motion";
import SupportCard from "./FaqCard";

interface SupportData {
  faqs: { question: string; answer: string }[];
}

export default function FAQClient({
  supportData,
}: {
  supportData: SupportData;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // replaces react-intersection-observer
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Frequently Asked Questions
        </h2>
        {supportData.faqs.map((faq, index) => (
          <SupportCard
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
