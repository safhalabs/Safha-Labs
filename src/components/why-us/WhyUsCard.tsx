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
      ? 'from-amber-400 to-amber-600'
      : item.variant === 'card2'
      ? 'from-teal-400 to-teal-600'
      : 'from-amber-500 to-teal-500';

  const iconBgClass =
    item.variant === 'card1'
      ? 'bg-amber-50'
      : item.variant === 'card2'
      ? 'bg-teal-50'
      : 'bg-gradient-to-br from-amber-50 to-teal-50';

  const iconColorClass = item.variant === 'card1' ? 'text-amber-600' : 'text-teal-600';

  const delayClass =
    delayIndex === 1 ? 'delay-100' : delayIndex === 2 ? 'delay-200' : '';

  return (
    <div
      className={`bg-white rounded-[24px] p-8 min-[960px]:p-10 relative overflow-hidden transition-all duration-700 ease-out hover:-translate-y-1.5 shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 group ${delayClass} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${topBorderClass} opacity-80 transition-opacity duration-300 group-hover:opacity-100`}></div>
      <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${topBorderClass} opacity-[0.03] pointer-events-none`}></div>
      
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-105 ${iconBgClass}`}>
        <Icon className={`w-6 h-6 ${iconColorClass}`} />
      </div>
      
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 block mb-3">
        {item.tag}
      </span>
      <h3 className="text-xl min-[960px]:text-[22px] font-bold text-[#070D18] mb-4 m-0 tracking-tight leading-snug">{item.title}</h3>
      <p className="text-[15px] text-slate-600 leading-relaxed m-0">{item.description}</p>
    </div>
  );
}
