import React from 'react';
import { SlideData } from '../data/slidesData';
import { SlideDiagrams } from './SlideDiagrams';
import { 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  Info
} from 'lucide-react';

interface SlideViewProps {
  slide: SlideData;
}

export const SlideView: React.FC<SlideViewProps> = ({ slide }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-md overflow-hidden flex flex-col justify-between p-5 lg:p-7 min-h-[640px] relative">
      {/* AIA Crimson Top Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-rose-700 to-rose-900" />

      {/* Slide Header Zone */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-2 font-mono text-[11px] font-semibold text-rose-700 uppercase tracking-wider">
            <span>SECTION {slide.categoryNumber}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{slide.category}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
            <span>AIA HONG KONG POLICY OWNER SERVICES</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="font-bold text-slate-900">SLIDE {String(slide.id).padStart(2, '0')}/18</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mt-2.5">
          <h1 className="text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
            {slide.title}
          </h1>
          <p className="text-xs lg:text-sm text-slate-600 font-medium mt-1 font-body leading-normal">
            {slide.subtitle}
          </p>
        </div>

        {/* Executive Metric Strip (High-Density Tabular Numerals) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-3.5">
          {slide.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/90 border border-slate-200/90 rounded-lg p-2.5 flex flex-col justify-between hover:bg-slate-100/80 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-lg lg:text-xl font-bold font-mono tabular-nums text-slate-900 tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[10px] text-rose-600 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 inline" />
                </span>
              </div>
              <div className="mt-0.5">
                <div className="text-[11px] font-semibold text-slate-800 leading-tight">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5 truncate">
                    {metric.subtext}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dense Strategic Pillars (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3.5">
          {slide.pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
            >
              <div>
                {pillar.kicker && (
                  <div className="text-[10px] font-bold text-rose-700 uppercase tracking-wider mb-0.5 font-mono">
                    {pillar.kicker}
                  </div>
                )}
                <h3 className="text-xs lg:text-sm font-bold text-slate-900 font-sans leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[11px] text-slate-600 font-body leading-relaxed mt-1 mb-2">
                  {pillar.description}
                </p>

                {/* Bullet Points with dense specifications */}
                <ul className="space-y-1.5 text-[11px] text-slate-700 font-body">
                  {pillar.bulletPoints.map((point, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags without pill badges */}
              {pillar.tags && (
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-500 font-mono flex-wrap">
                  {pillar.tags.map((tag, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span>{tag}</span>
                      {tIdx < pillar.tags!.length - 1 && <span className="text-slate-300">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Business Framework / Architecture / Process Flow */}
        <SlideDiagrams slide={slide} />
      </div>

      {/* Slide Footer: Executive Summary & Governance Assurance */}
      <div className="mt-3 pt-2.5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-slate-600">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span className="font-semibold text-slate-800">Operational Value:</span>
          <span className="truncate max-w-xl text-slate-600">{slide.keyTakeaways.join(' · ')}</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500 font-mono shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>AIA Governance &amp; Controls Preserved</span>
        </div>
      </div>
    </div>
  );
};
