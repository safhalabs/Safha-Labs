import React from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/constants/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const isCrm = item.type === 'crm';

  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 min-[960px]:p-10 flex flex-col gap-8 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="flex flex-col gap-4 relative z-10">
        <span className="self-start text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-teal-400 bg-teal-400/10 px-3 py-1.5 rounded-full border border-teal-400/20 backdrop-blur-sm">
          {item.tag}
        </span>
        <h3 className="text-white text-[24px] min-[960px]:text-[28px] font-bold tracking-tight leading-snug">{item.title}</h3>
        <p className="text-white/70 text-[15.5px] leading-relaxed m-0">{item.description}</p>
        <div className="flex flex-wrap gap-2.5 mt-2">
          {item.techPills.map((pill, idx) => (
            <span key={idx} className="text-[12px] font-medium text-white/80 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/5 transition-colors group-hover:border-white/15">
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative bg-black/20 rounded-[20px] overflow-hidden min-h-[260px] border border-white/5 transition-transform duration-700 group-hover:-translate-y-1 shadow-inner relative z-10">
        {item.image ? (
          <div className="relative w-full h-[260px] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ) : isCrm ? (
          <div className="p-6 h-full flex items-stretch min-h-[260px]">
            <div className="flex w-full gap-4">
              <div className="w-[25%] bg-white/5 rounded-xl border border-white/5"></div>
              <div className="w-[75%] flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex-1 h-12 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="flex-1 h-12 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="flex-1 h-12 bg-white/5 rounded-xl border border-white/5"></div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-end justify-around p-5 border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal-500/5 blur-[20px] rounded-full pointer-events-none group-hover:bg-teal-500/10 transition-colors duration-500"></div>
                  <div
                    className="w-[12%] bg-teal-500 rounded-t opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-y-105 origin-bottom relative z-10"
                    style={{ height: '40%' }}
                  ></div>
                  <div
                    className="w-[12%] bg-teal-500 rounded-t opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-y-105 origin-bottom relative z-10"
                    style={{ height: '70%' }}
                  ></div>
                  <div
                    className="w-[12%] bg-teal-500 rounded-t opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-y-105 origin-bottom relative z-10"
                    style={{ height: '50%' }}
                  ></div>
                  <div
                    className="w-[12%] bg-teal-500 rounded-t opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-y-105 origin-bottom relative z-10"
                    style={{ height: '90%' }}
                  ></div>
                  <div
                    className="w-[12%] bg-teal-500 rounded-t opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-y-105 origin-bottom relative z-10"
                    style={{ height: '60%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 h-full flex flex-col gap-5 min-h-[260px]">
            <div className="h-8 w-[60%] bg-white/5 rounded-lg border border-white/5"></div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden flex flex-col">
                <div className="h-[70px] bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="h-2.5 w-[60%] bg-white/10 m-4 rounded-full"></div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden flex flex-col">
                <div className="h-[70px] bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="h-2.5 w-[60%] bg-white/10 m-4 rounded-full"></div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden flex flex-col">
                <div className="h-[70px] bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="h-2.5 w-[60%] bg-white/10 m-4 rounded-full"></div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden flex flex-col">
                <div className="h-[70px] bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="h-2.5 w-[60%] bg-white/10 m-4 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
