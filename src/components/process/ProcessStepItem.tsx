import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ProcessStepItemProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isVisible: boolean;
  isOdd: boolean;
  isLast: boolean;
  dataIndex: number;
}

export default function ProcessStepItem({
  stepNumber,
  title,
  description,
  icon: Icon,
  isVisible,
  isOdd,
  isLast,
  dataIndex,
}: ProcessStepItemProps) {
  return (
    <div
      className={`flex gap-8 max-[640px]:gap-5 relative z-10 py-6 transition-all duration-600 ease-out group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
      }`}
      data-index={dataIndex}
    >
      {/* Number Badge overlay on top of vertical timeline */}
      <div className="shrink-0">
        <div
          className={`w-[44px] h-[44px] rounded-full flex items-center justify-center font-mono text-[15px] font-bold text-white shadow-[0_0_0_6px_#FAFAFC] transition-all duration-500 group-hover:scale-110 ${
            isOdd
              ? 'bg-amber-500 group-hover:shadow-[0_0_0_6px_#FAFAFC,0_0_15px_rgba(245,158,11,0.5)]'
              : 'bg-teal-500 group-hover:shadow-[0_0_0_6px_#FAFAFC,0_0_15px_rgba(20,184,166,0.5)]'
          }`}
        >
          {stepNumber}
        </div>
      </div>

      {/* Content wrapper with bottom border separated from timeline */}
      <div
        className={`flex gap-5 max-[640px]:flex-col max-[640px]:gap-3 items-start pt-1.5 pb-6 flex-1 transition-transform duration-500 group-hover:translate-x-2 ${
          !isLast ? 'border-b border-slate-200/80' : ''
        }`}
      >
        <div className="shrink-0 text-slate-400 group-hover:text-slate-800 transition-colors duration-500 flex items-center justify-center pt-0.5">
          <Icon className="w-[22px] h-[22px]" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <h3 className="text-[19px] font-semibold text-[#070D18] mb-2 m-0 tracking-tight group-hover:text-teal-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[15px] leading-relaxed text-slate-600 m-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
