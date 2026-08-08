'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/constants/faq';
import FAQItem from './FAQItem';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#FAFAFC] py-24 px-6 section-lazy-render">
      <div className="max-w-[850px] mx-auto">
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-700 block mb-3">
            Pusat Informasi
          </span>
          <h2 className="text-[2.25rem] min-[960px]:text-[2.75rem] font-bold text-[#09090B] m-0 tracking-tight leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
