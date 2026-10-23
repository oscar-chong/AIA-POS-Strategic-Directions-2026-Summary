import React from 'react';
import { SlideData } from '../data/slidesData';
import { MessageSquareText, ShieldAlert, X, ChevronUp, ChevronDown, BookOpen } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  slide: SlideData;
  isOpen: boolean;
  onToggle: () => void;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  slide,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-t border-slate-300 bg-white transition-all duration-200 shadow-lg">
      <div 
        onClick={onToggle}
        className="flex items-center justify-between px-6 py-2.5 bg-slate-100 hover:bg-slate-200/80 cursor-pointer select-none transition-colors border-b border-slate-200"
      >
        <div className="flex items-center gap-2 text-slate-800">
          <MessageSquareText className="w-4 h-4 text-rose-600" />
          <span className="text-xs font-bold uppercase tracking-wider font-sans">
            Executive Speaker Notes &amp; Regulatory Context
          </span>
          <span className="text-[11px] text-slate-500 font-mono">
            (Slide {String(slide.id).padStart(2, '0')}: {slide.title})
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <span className="text-[11px] font-medium">{isOpen ? 'Collapse Notes' : 'Expand Notes'}</span>
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </div>

      {isOpen && (
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5 max-h-60 overflow-y-auto bg-slate-50 text-slate-800">
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 uppercase tracking-wide">
              <BookOpen className="w-3.5 h-3.5 text-rose-600" />
              <span>Operational Commentary &amp; Talking Points</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 font-body bg-white p-3 rounded border border-slate-200">
              {slide.speakerNotes}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                Key Strategic Takeaways
              </span>
              <ul className="mt-1 list-disc list-inside text-xs text-slate-700 space-y-1">
                {slide.keyTakeaways.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Governance &amp; Risk Guardrails</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {slide.regulatoryNotice || 
                  'All process enhancements maintain full segregation of duties, internal audit compliance, and strict adherence to HKMA and Insurance Authority regulatory guidelines.'}
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>AIA HK POS Governance</span>
              <span>2026–2028 Strategy</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
