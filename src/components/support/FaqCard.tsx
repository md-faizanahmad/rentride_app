"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SupportCardProps {
  question: string;
  answer: string;
}

export default function FAQCard({ question, answer }: SupportCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center text-black text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-black text-sm sm:text-base">{answer}</div>
      )}
    </div>
  );
}
