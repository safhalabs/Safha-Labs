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
    <section id="faq" className="bg-[#F5F6F8] py-24 px-6 section-lazy-render">
      <div className="max-w-[850px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#1f9485] mb-4">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl max-[640px]:text-2xl font-bold text-[#0A1628] m-0">
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
