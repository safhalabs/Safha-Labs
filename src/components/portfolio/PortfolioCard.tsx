import React from 'react';
import { PortfolioItem } from '@/constants/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const isCrm = item.type === 'crm';

  return (
    <div className="bg-white/4 border border-white/8 rounded-2xl p-9 flex flex-col gap-8 overflow-hidden transition-all duration-300 hover:border-white/15 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_0_20px_rgba(255,255,255,0.02)] group">
      <div className="flex flex-col gap-4">
        <span className="self-start text-[11px] font-semibold tracking-wider text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
          {item.tag}
        </span>
        <h3 className="text-white text-2xl font-normal leading-snug">{item.title}</h3>
        <p className="text-white/65 text-[15px] leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {item.techPills.map((pill, idx) => (
            <span key={idx} className="text-[12.5px] text-white bg-white/8 px-3 py-1 rounded-full">
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white/3 rounded-xl min-h-[240px] p-6 flex items-stretch border border-white/3 transition-transform duration-500 group-hover:-translate-y-1">
        {isCrm ? (
          <div className="flex w-full gap-4">
            <div className="w-[25%] bg-white/4 rounded-lg"></div>
            <div className="w-[75%] flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex-1 h-10 bg-white/5 rounded-md"></div>
                <div className="flex-1 h-10 bg-white/5 rounded-md"></div>
                <div className="flex-1 h-10 bg-white/5 rounded-md"></div>
              </div>
              <div className="flex-1 bg-white/2 rounded-md flex items-end justify-around p-4">
                <div
                  className="w-[12%] bg-amber-500 rounded-t opacity-60 transition-all duration-300 group-hover:opacity-90"
                  style={{ height: '40%' }}
                ></div>
                <div
                  className="w-[12%] bg-amber-500 rounded-t opacity-60 transition-all duration-300 group-hover:opacity-90"
                  style={{ height: '70%' }}
                ></div>
                <div
                  className="w-[12%] bg-amber-500 rounded-t opacity-60 transition-all duration-300 group-hover:opacity-90"
                  style={{ height: '50%' }}
                ></div>
                <div
                  className="w-[12%] bg-amber-500 rounded-t opacity-60 transition-all duration-300 group-hover:opacity-90"
                  style={{ height: '90%' }}
                ></div>
                <div
                  className="w-[12%] bg-amber-500 rounded-t opacity-60 transition-all duration-300 group-hover:opacity-90"
                  style={{ height: '60%' }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-4">
            <div className="h-6 w-[60%] bg-white/5 rounded"></div>
            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="bg-white/4 rounded-lg overflow-hidden flex flex-col">
                <div className="h-[60px] bg-white/8"></div>
                <div className="h-2 w-[60%] bg-white/4 m-3 rounded"></div>
              </div>
              <div className="bg-white/4 rounded-lg overflow-hidden flex flex-col">
                <div className="h-[60px] bg-white/8"></div>
                <div className="h-2 w-[60%] bg-white/4 m-3 rounded"></div>
              </div>
              <div className="bg-white/4 rounded-lg overflow-hidden flex flex-col">
                <div className="h-[60px] bg-white/8"></div>
                <div className="h-2 w-[60%] bg-white/4 m-3 rounded"></div>
              </div>
              <div className="bg-white/4 rounded-lg overflow-hidden flex flex-col">
                <div className="h-[60px] bg-white/8"></div>
                <div className="h-2 w-[60%] bg-white/4 m-3 rounded"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
