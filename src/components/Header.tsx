import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Grid, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2,
  Printer,
  Loader2
} from 'lucide-react';
import { downloadPptxInBrowser } from '../services/clientPptxExporter';

interface HeaderProps {
  currentSlideId: number;
  totalSlides: number;
  categoryFilter: string;
  isFullscreen: boolean;
  onSelectCategory: (cat: string) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onToggleFullscreen: () => void;
  onOpenIndex: () => void;
  onOpenExportModal: () => void;
  onPrintDeck: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlideId,
  totalSlides,
  categoryFilter,
  isFullscreen,
  onSelectCategory,
  onPrevSlide,
  onNextSlide,
  onToggleFullscreen,
  onOpenIndex,
  onOpenExportModal,
  onPrintDeck,
}) => {
  const categories = [
    { id: 'all', label: 'All Slides (18)' },
    { id: '01', label: '1. Strategy' },
    { id: '02', label: '2. Priorities' },
    { id: '03', label: '3. Innovations' },
  ];

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadPptxInBrowser();
    } catch (err) {
      console.error('Client PPTX generation error:', err);
      // Fallback to static direct file download link
      window.location.href = '/AIA_HK_POS_Operations_Strategy_and_Innovation_Deck.pptx';
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-4 lg:px-6 py-2.5 flex items-center justify-between gap-6 shadow-xs select-none">
      {/* Zone 1: Brand Wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-7 h-7 bg-rose-600 rounded flex items-center justify-center font-bold text-white text-xs shadow-xs tracking-tight">
          AIA
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold text-slate-900 tracking-tight whitespace-nowrap font-sans">
            Policy Owner Services
          </span>
          <span className="hidden sm:inline text-xs text-slate-500 font-medium whitespace-nowrap">
            · Operations Strategy &amp; Innovation
          </span>
        </div>
      </div>

      {/* Zone 2: Navigation & Category Filters */}
      <div className="hidden md:flex items-center gap-4 shrink-0">
        {/* Category Filter Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                categoryFilter === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slide Counter & Pager */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideId === 1}
            className="p-1 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenIndex}
            className="px-2 py-0.5 rounded text-xs font-mono font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1"
            title="View All Slides Directory"
          >
            <span>{String(currentSlideId).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
            <Grid className="w-3 h-3 text-slate-500" />
          </button>
          <button
            onClick={onNextSlide}
            disabled={currentSlideId === totalSlides}
            className="p-1 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Next Slide (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onPrintDeck}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
          title="Print or Save PDF"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600" />
          <span>Print Deck</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          className="hidden sm:flex p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enter Fullscreen (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg shadow-2xs transition-colors whitespace-nowrap shrink-0 disabled:opacity-50 cursor-pointer"
          title="Download full 18-slide PowerPoint deck (.pptx)"
        >
          {isDownloading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-600" />
          ) : (
            <FileSpreadsheet className="w-3.5 h-3.5 text-rose-600" />
          )}
          <span>{isDownloading ? 'Generating...' : 'Download .PPTX'}</span>
        </button>

        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs transition-all hover:shadow whitespace-nowrap shrink-0 cursor-pointer"
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Google Slides Export</span>
        </button>
      </div>
    </header>
  );
};
