import React from 'react';

export default function HeroDashboardCard() {
  return (
    <div className="min-[901px]:absolute top-[10%] right-[5%] w-full min-[901px]:w-[85%] min-[901px]:h-[80%] bg-[#0A1628] rounded-[24px] p-6 shadow-2xl flex flex-col animate-[float_6s_ease-in-out_infinite] z-10 border border-white/10 relative">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex gap-[0.375rem]">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
        </div>
        <div className="text-gray-400 text-sm font-medium">Performance Overview</div>
      </div>
      <div className="flex justify-between items-end mb-8">
        <div className="text-[#2DD4BF] font-mono text-[2.5rem] max-[640px]:text-[1.75rem] font-bold">
          +42% Efisiensi
        </div>
        <svg className="w-[120px] h-[40px] overflow-visible" viewBox="0 0 100 20">
          <path
            d="M0,15 L20,10 L40,12 L60,5 L80,8 L100,2"
            fill="none"
            stroke="#0d9488"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-end gap-4 flex-1 pt-4 border-t border-white/5">
        <div
          className="flex-1 rounded-t bg-gradient-to-t from-teal-600/20 to-[#0D9488] transition-all duration-1000"
          style={{ height: '40%' }}
        ></div>
        <div
          className="flex-1 rounded-t bg-gradient-to-t from-amber-500/20 to-[#F59E0B] transition-all duration-1000"
          style={{ height: '70%' }}
        ></div>
        <div
          className="flex-1 rounded-t bg-gradient-to-t from-teal-600/20 to-[#0D9488] transition-all duration-1000"
          style={{ height: '50%' }}
        ></div>
        <div
          className="flex-1 rounded-t bg-gradient-to-t from-amber-500/20 to-[#F59E0B] transition-all duration-1000"
          style={{ height: '90%' }}
        ></div>
        <div
          className="flex-1 rounded-t bg-gradient-to-t from-teal-600/20 to-[#0D9488] transition-all duration-1000"
          style={{ height: '60%' }}
        ></div>
        <div
          className="flex-1 rounded-t bg-gradient-to-t from-amber-500/20 to-[#F59E0B] transition-all duration-1000"
          style={{ height: '80%' }}
        ></div>
      </div>
    </div>
  );
}
