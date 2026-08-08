import React from 'react';
import { ServiceItem } from '@/constants/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const isTeal = service.accentColor === 'teal';

  return (
    <div className="bg-white border border-slate-200 rounded-[32px] p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-slate-300 group relative overflow-hidden">
      {/* Background glow on hover */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 -translate-y-1/2 translate-x-1/2 ${
        isTeal ? 'bg-teal-500/10' : 'bg-amber-500/10'
      }`}></div>
      
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 border shadow-sm ${
          isTeal
            ? 'bg-teal-50/80 text-teal-600 border-teal-100/50'
            : 'bg-amber-50/80 text-amber-600 border-amber-100/50'
        }`}
      >
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-[22px] font-bold text-[#09090B] mb-3 tracking-tight">{service.title}</h3>
      {service.subtitle && (
        <p className="text-[15px] font-medium text-slate-500 mb-5">{service.subtitle}</p>
      )}
      <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>
      
      <div className="flex flex-wrap gap-2.5">
        {service.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#FAFAFC] text-slate-600 font-mono text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border border-slate-200 transition-colors group-hover:border-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
