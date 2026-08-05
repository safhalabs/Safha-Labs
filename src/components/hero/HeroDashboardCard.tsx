'use client';

import React, { useState } from 'react';
import { Zap, Layers, Code2, CheckCircle2, Cpu, Globe, ShieldCheck } from 'lucide-react';

export default function HeroDashboardCard() {
  const [activeTab, setActiveTab] = useState<'performance' | 'architecture' | 'code'>('performance');

  return (
    <div className="w-full bg-white/85 backdrop-blur-xl rounded-[28px] p-6 min-[960px]:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] flex flex-col z-10 border border-slate-200/80 relative overflow-hidden">
      {/* Glossy top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

      {/* macOS Style Window Header & Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/60 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
          <span className="text-[12px] font-mono text-slate-500 ml-2 hidden sm:inline-block">safha-engine/v2</span>
        </div>

        {/* Muted Tab Buttons */}
        <div className="flex bg-slate-100/80 p-1 rounded-xl border border-slate-200/70">
          <button
            type="button"
            onClick={() => setActiveTab('performance')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[12.5px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'performance'
              ? 'bg-amber-500 text-white shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
          >
            <Zap size={14} />
            Performance
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[12.5px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'architecture'
              ? 'bg-amber-500 text-white shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
          >
            <Layers size={14} />
            Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[12.5px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${activeTab === 'code'
              ? 'bg-amber-500 text-white shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
          >
            <Code2 size={14} />
            Clean Code
          </button>
        </div>
      </div>

      {/* Tab Content 1: Performance Audit */}
      {activeTab === 'performance' && (
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-medium">
                Verified Audit Standard
              </span>
              <h4 className="text-slate-900 text-lg font-bold mt-2.5 mb-0 tracking-tight">Performa Web Ultra Cepat</h4>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-500 block font-mono">Load Speed</span>
              <span className="text-amber-600 font-mono font-bold text-lg">0.3s</span>
            </div>
          </div>

          {/* 4 Lighthouse Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Performance', score: '98', detail: '0.3s Speed' },
              { label: 'Accessibility', score: '95', detail: 'WCAG AA' },
              { label: 'Best Practices', score: '100', detail: 'Secured' },
              { label: 'SEO Rank', score: '100', detail: 'Indexed' },
            ].map((metric, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-2xs transition-all hover:border-emerald-500/40">
                <div className="w-11 h-11 rounded-full border-2 border-emerald-500 bg-emerald-50 text-emerald-600 font-mono font-bold text-sm flex items-center justify-center mb-1.5 shadow-2xs">
                  {metric.score}
                </div>
                <span className="text-[12px] font-semibold text-slate-800">{metric.label}</span>
                <span className="text-[10.5px] font-mono text-slate-400 mt-0.5">{metric.detail}</span>
              </div>
            ))}
          </div>

          {/* Web Vitals Strip */}
          <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 flex items-center justify-around text-center text-xs font-mono text-slate-600">
            <div>Kecepatan <span className="text-emerald-600 font-semibold">0.3s</span></div>
            <div className="w-[1px] h-4 bg-slate-200"></div>
            <div>Tampil Sempurna <span className="text-emerald-600 font-semibold">0.6s</span></div>
            <div className="w-[1px] h-4 bg-slate-200"></div>
            <div>Tampilan Stabil <span className="text-emerald-600 font-semibold">0.00</span></div>
            <div className="w-[1px] h-4 bg-slate-200"></div>
            <div>Respon Server <span className="text-emerald-600 font-semibold">42ms</span></div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Architecture Diagram */}
      {activeTab === 'architecture' && (
        <div className="flex flex-col gap-6 relative z-10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-medium">
              Enterprise Stack
            </span>
            <h4 className="text-slate-900 text-lg font-bold mt-2.5 mb-0 tracking-tight">Arsitektur Terintegrasi &amp; Scalable</h4>
          </div>

          {/* Flow Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
            <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col items-center text-center shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-2">
                <Globe size={20} />
              </div>
              <span className="text-[13px] font-semibold text-slate-900">Client / Visitor</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Instant UI Load</span>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/30 p-4 rounded-2xl flex flex-col items-center text-center shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center mb-2">
                <Cpu size={20} />
              </div>
              <span className="text-[13px] font-semibold text-slate-900">Next.js 16 Edge</span>
              <span className="text-[11px] text-amber-700 mt-0.5 font-medium">RSC &amp; Caching</span>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col items-center text-center shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-2">
                <Layers size={20} />
              </div>
              <span className="text-[13px] font-semibold text-slate-900">WhatsApp CRM &amp; DB</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Real-time Lead Sync</span>
            </div>
          </div>

          {/* Architecture Features */}
          <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700">
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-2xs">
              <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
              <span>100% Hak Milik Source Code</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-2xs">
              <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
              <span>Tanpa Terikat Sewa Vendor</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-2xs">
              <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
              <span>Integrasi API WhatsApp Gateway</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-2xs">
              <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
              <span>Garansi Bug-Free 14 Hari</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: Clean Code */}
      {activeTab === 'code' && (
        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-amber-700 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 font-medium">
              Clean TypeScript
            </span>
            <span className="text-xs font-mono text-slate-500">api/crm/route.ts</span>
          </div>

          {/* Dark Code Terminal Window */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 font-mono text-[12.5px] leading-relaxed text-slate-200 overflow-x-auto shadow-inner">
            <div className="text-slate-500">// Safha Labs WhatsApp CRM Lead Engine</div>
            <div><span className="text-amber-400">import</span> &#123; createCrmEngine &#125; <span className="text-amber-400">from</span> <span className="text-slate-300">&apos;@safha/crm-core&apos;</span>;</div>
            <br />
            <div><span className="text-amber-400">export async function</span> <span className="text-white font-semibold">POST</span>(req: Request) &#123;</div>
            <div className="pl-4"><span className="text-amber-400">const</span> lead = <span className="text-amber-400">await</span> req.json();</div>
            <div className="pl-4"><span className="text-amber-400">const</span> crm = <span className="text-amber-400">await</span> createCrmEngine();</div>
            <br />
            <div className="pl-4 text-slate-500">// Real-time auto-dispatch lead to WhatsApp</div>
            <div className="pl-4"><span className="text-amber-400">await</span> crm.whatsapp.<span className="text-amber-300">sendAutoReply</span>(&#123;</div>
            <div className="pl-8">to: lead.phone,</div>
            <div className="pl-8">message: <span className="text-slate-300">&apos;Halo! Tim Safha Labs siap membantu.&apos;</span></div>
            <div className="pl-4">&#125;);</div>
            <div className="pl-4"><span className="text-amber-400">return</span> Response.<span className="text-amber-300">json</span>(&#123; success: <span className="text-amber-400">true</span> &#125;);</div>
            <div>&#125;</div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-600 pt-1">
            <span className="flex items-center gap-1.5 text-amber-600 font-medium">
              <ShieldCheck size={14} /> Type-Safe &amp; Zero Bloatware
            </span>
            <span>Latency: &lt;12ms</span>
          </div>
        </div>
      )}
    </div>
  );
}
