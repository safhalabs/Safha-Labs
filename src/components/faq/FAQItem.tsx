import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white border border-[#D9DCE3] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
      <button
        type="button"
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer bg-transparent border-0 hover:bg-slate-50/50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg max-[640px]:text-base font-semibold text-[#0A1628]">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#6B7280] shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#2BB8A0]' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-[#6B7280] text-[15px] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
