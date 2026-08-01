import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ProcessStepItemProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isVisible: boolean;
  isOdd: boolean;
  dataIndex: number;
}

export default function ProcessStepItem({
  stepNumber,
  title,
  description,
  icon: Icon,
  isVisible,
  isOdd,
  dataIndex,
}: ProcessStepItemProps) {
  return (
    <div
      className={`flex gap-8 max-[640px]:gap-5 relative z-10 py-7 border-b border-slate-100 last:border-b-0 transition-all duration-600 ease-out group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
      }`}
      data-index={dataIndex}
    >
      <div className="shrink-0">
        <div
          className={`w-[44px] h-[44px] rounded-full flex items-center justify-center font-mono text-base font-bold text-white shadow-[0_0_0_6px_#ffffff] transition-all duration-300 group-hover:scale-110 ${
            isOdd
              ? 'bg-amber-600 group-hover:shadow-[0_0_0_6px_#ffffff,0_0_15px_rgba(217,119,6,0.4)]'
              : 'bg-teal-600 group-hover:shadow-[0_0_0_6px_#ffffff,0_0_15px_rgba(13,148,136,0.4)]'
          }`}
        >
          {stepNumber}
        </div>
      </div>
      <div className="flex gap-5 max-[640px]:flex-col max-[640px]:gap-3 items-start pt-1.5 flex-1">
        <div className="shrink-0 text-slate-500 flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 mb-2 m-0">{title}</h3>
          <p className="text-[15px] leading-relaxed text-slate-600 m-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
