import React from 'react';
import { WhyUsItem } from '@/constants/whyUs';

interface WhyUsCardProps {
  item: WhyUsItem;
  isVisible: boolean;
  delayIndex: number;
}

export default function WhyUsCard({ item, isVisible, delayIndex }: WhyUsCardProps) {
  const Icon = item.icon;

  const topBorderClass =
    item.variant === 'card1'
      ? 'before:bg-amber-500'
      : item.variant === 'card2'
      ? 'before:bg-teal-500'
      : 'before:bg-gradient-to-r before:from-amber-500 before:to-teal-500';

  const iconBgClass =
    item.variant === 'card1'
      ? 'bg-amber-500/15'
      : item.variant === 'card2'
      ? 'bg-teal-500/15'
      : 'bg-gradient-to-br from-amber-500/15 to-teal-500/15';

  const iconColorClass = item.variant === 'card1' ? 'text-amber-700' : 'text-teal-600';

  const delayClass =
    delayIndex === 1 ? 'delay-100' : delayIndex === 2 ? 'delay-200' : '';

  return (
    <div
      className={`bg-white border border-slate-200 rounded-2xl p-9 relative overflow-hidden transition-all duration-800 ease-out hover:-translate-y-1.5 hover:shadow-2xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] ${topBorderClass} ${delayClass} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${iconBgClass}`}>
        <Icon className={`w-6 h-6 ${iconColorClass}`} />
      </div>
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
        {item.tag}
      </span>
      <h3 className="text-xl font-bold text-slate-900 mb-3 m-0">{item.title}</h3>
      <p className="text-[15px] text-slate-600 leading-relaxed m-0">{item.description}</p>
    </div>
  );
}
