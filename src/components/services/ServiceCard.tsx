import React from 'react';
import { ServiceItem } from '@/constants/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const isTeal = service.accentColor === 'teal';

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-9 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-shadow duration-300 ${
          isTeal
            ? 'bg-teal-600/10 text-teal-600 group-hover:shadow-[0_0_15px_rgba(13,148,136,0.3)]'
            : 'bg-amber-500/10 text-amber-600 group-hover:shadow-[0_0_15px_rgba(217,119,6,0.3)]'
        }`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
      {service.subtitle && (
        <p className="text-sm font-medium text-slate-500 mb-4">{service.subtitle}</p>
      )}
      <p className="text-slate-600 text-[15px] leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-slate-100 text-slate-600 font-mono text-[11px] font-semibold px-3 py-1.5 rounded-full border border-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
