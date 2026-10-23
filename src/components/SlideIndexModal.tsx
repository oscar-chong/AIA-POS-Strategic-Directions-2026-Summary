import React from 'react';
import { SLIDES_DATA, SlideData } from '../data/slidesData';
import { X, Layers, Check, ArrowRight } from 'lucide-react';

interface SlideIndexModalProps {
  currentSlideId: number;
  isOpen: boolean;
  onSelectSlide: (id: number) => void;
  onClose: () => void;
}

export const SlideIndexModal: React.FC<SlideIndexModalProps> = ({
  currentSlideId,
  isOpen,
  onSelectSlide,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-300 max-w-5xl w-full max-h-[88vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-rose-600 rounded flex items-center justify-center font-bold text-white text-xs">
              AIA
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight uppercase font-sans">
                AIA HK Policy Owner Services Master Slide Directory
              </h2>
              <p className="text-xs text-slate-400">
                18 Exhaustive Presentation Slides across 3 Operational Themes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 bg-slate-100">
          {SLIDES_DATA.map((slide) => {
            const isSelected = slide.id === currentSlideId;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`text-left p-3.5 rounded-lg border transition-all flex flex-col justify-between h-36 relative group ${
                  isSelected
                    ? 'bg-rose-50 border-rose-500 shadow-md ring-2 ring-rose-400/30'
                    : 'bg-white border-slate-200 hover:border-slate-400 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-rose-600">
                      SLIDE {String(slide.id).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-mono uppercase text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {slide.category}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug font-sans group-hover:text-rose-700 transition-colors">
                    {slide.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-normal font-body">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">
                    {slide.pillars.length} pillars · {slide.metrics.length} metrics
                  </span>
                  {isSelected ? (
                    <span className="text-rose-600 font-bold flex items-center gap-1 font-mono">
                      <Check className="w-3 h-3" /> CURRENT
                    </span>
                  ) : (
                    <span className="text-slate-400 group-hover:text-slate-700 flex items-center gap-0.5 font-medium">
                      Jump <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>Tip: Use keyboard arrow keys or Spacebar to navigate between slides</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 text-white rounded text-xs font-medium hover:bg-slate-800 transition-colors"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};
