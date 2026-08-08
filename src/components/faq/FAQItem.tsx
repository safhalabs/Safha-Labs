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
    <div className="bg-white border border-slate-200 rounded-[20px] overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
      <button
        type="button"
        className="w-full px-7 py-6 flex items-center justify-between gap-4 text-left cursor-pointer bg-transparent border-0 hover:bg-slate-50/50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`text-[17px] min-[960px]:text-[19px] font-semibold transition-colors duration-300 ${isOpen ? 'text-teal-700' : 'text-[#09090B]'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-teal-50 text-teal-600' : 'bg-slate-100 text-slate-500'}`}>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-500 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-7 pb-7 pt-1 border-t border-slate-100 text-slate-600 text-[16px] leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
