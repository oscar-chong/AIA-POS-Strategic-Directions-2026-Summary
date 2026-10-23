import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA, SlideData } from './data/slidesData';
import { Header } from './components/Header';
import { SlideView } from './components/SlideView';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { SlideIndexModal } from './components/SlideIndexModal';
import { GoogleSlidesExportModal } from './components/GoogleSlidesExportModal';
import { 
  ChevronLeft, 
  ChevronRight, 
  ListFilter, 
  Maximize2, 
  Sparkles,
  Layers,
  Printer
} from 'lucide-react';

export default function App() {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isIndexOpen, setIsIndexOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  // Filter slides by category number ('01', '02', '03') or 'all'
  const filteredSlides = SLIDES_DATA.filter((slide) => {
    if (categoryFilter === 'all') return true;
    return slide.categoryNumber === categoryFilter;
  });

  const currentSlide = SLIDES_DATA.find((s) => s.id === currentSlideId) || SLIDES_DATA[0];

  const handlePrevSlide = useCallback(() => {
    setCurrentSlideId((prev) => {
      const currentIdx = filteredSlides.findIndex((s) => s.id === prev);
      if (currentIdx > 0) return filteredSlides[currentIdx - 1].id;
      return prev;
    });
  }, [filteredSlides]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlideId((prev) => {
      const currentIdx = filteredSlides.findIndex((s) => s.id === prev);
      if (currentIdx < filteredSlides.length - 1) return filteredSlides[currentIdx + 1].id;
      return prev;
    });
  }, [filteredSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isIndexOpen || isExportModalOpen) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, isFullscreen, isIndexOpen, isExportModalOpen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const handlePrint = () => {
    setIsPrintMode(true);
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
    }, 300);
  };

  // If in print mode, render all 18 slides sequentially for browser print / PDF export
  if (isPrintMode) {
    return (
      <div className="bg-white p-4 space-y-6">
        {SLIDES_DATA.map((slide) => (
          <div key={slide.id} className="print-slide mb-8">
            <SlideView slide={slide} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-body antialiased">
      {/* Top Header */}
      <Header
        currentSlideId={currentSlide.id}
        totalSlides={SLIDES_DATA.length}
        categoryFilter={categoryFilter}
        isFullscreen={isFullscreen}
        onSelectCategory={(cat) => {
          setCategoryFilter(cat);
          const firstInCat = SLIDES_DATA.find((s) => cat === 'all' || s.categoryNumber === cat);
          if (firstInCat) setCurrentSlideId(firstInCat.id);
        }}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onToggleFullscreen={toggleFullscreen}
        onOpenIndex={() => setIsIndexOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onPrintDeck={handlePrint}
      />

      {/* Main Presentation Viewport */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto p-3 sm:p-5 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* Left Mini Sidebar Navigator (Quick Jump) */}
          <aside className="hidden xl:flex flex-col w-64 bg-white rounded-xl border border-slate-300 shadow-xs p-3 shrink-0 self-stretch overflow-y-auto max-h-[82vh]">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 font-sans flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-rose-600" />
                <span>Presentation Index</span>
              </span>
              <button
                onClick={() => setIsIndexOpen(true)}
                className="text-[10px] text-rose-600 hover:text-rose-800 font-semibold"
              >
                Expand
              </button>
            </div>

            <div className="space-y-1.5 overflow-y-auto pr-1">
              {filteredSlides.map((slide) => {
                const isActive = slide.id === currentSlide.id;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideId(slide.id)}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-start gap-2 ${
                      isActive
                        ? 'bg-rose-50 text-slate-900 border border-rose-300 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-rose-700 font-bold shrink-0 mt-0.5">
                      {String(slide.id).padStart(2, '0')}
                    </span>
                    <span className="line-clamp-2 leading-tight">
                      {slide.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Center Main Slide View */}
          <div className="flex-1 w-full space-y-3">
            <SlideView slide={currentSlide} />

            {/* Quick Bottom Control Bar */}
            <div className="flex items-center justify-between px-2 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevSlide}
                  disabled={currentSlide.id === 1}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNextSlide}
                  disabled={currentSlide.id === SLIDES_DATA.length}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-2xs"
                >
                  <span>Next Slide</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 font-mono text-[11px]">
                <span className="text-slate-400">Keyboard:</span>
                <span className="bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-700">← Prev</span>
                <span className="bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-700">→ Next</span>
                <span className="bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-700">F Fullscreen</span>
              </div>

              <button
                onClick={() => setIsNotesOpen(!isNotesOpen)}
                className={`px-3 py-1.5 rounded-md border text-xs font-semibold transition-all ${
                  isNotesOpen 
                    ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-2xs' 
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {isNotesOpen ? 'Hide Notes' : 'Speaker Notes'}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Expandable Speaker Notes Drawer */}
      <SpeakerNotesDrawer
        slide={currentSlide}
        isOpen={isNotesOpen}
        onToggle={() => setIsNotesOpen(!isNotesOpen)}
      />

      {/* Slide Index Modal */}
      <SlideIndexModal
        currentSlideId={currentSlide.id}
        isOpen={isIndexOpen}
        onSelectSlide={(id) => setCurrentSlideId(id)}
        onClose={() => setIsIndexOpen(false)}
      />

      {/* Google Slides Export Modal */}
      <GoogleSlidesExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onPrintDeck={handlePrint}
      />
    </div>
  );
}
