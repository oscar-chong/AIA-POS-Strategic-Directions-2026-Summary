import React, { useState, useEffect } from 'react';
import { 
  exportToGoogleSlides, 
  ExportProgress 
} from '../services/slidesExporter';
import { 
  googleSignIn, 
  getAccessToken, 
  logout, 
  initAuth 
} from '../services/firebaseAuth';
import { downloadPptxInBrowser } from '../services/clientPptxExporter';
import { User } from 'firebase/auth';
import { 
  X, 
  ExternalLink, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  FileSpreadsheet, 
  Sparkles,
  LogOut,
  FolderOpen
} from 'lucide-react';

interface GoogleSlidesExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrintDeck: () => void;
}

export const GoogleSlidesExportModal: React.FC<GoogleSlidesExportModalProps> = ({
  isOpen,
  onClose,
  onPrintDeck,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [progress, setProgress] = useState<ExportProgress | null>(null);
  const [exportResult, setExportResult] = useState<{ presentationId: string; presentationUrl: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDownloadingPptx, setIsDownloadingPptx] = useState<boolean>(false);

  const handleDownloadPptx = async () => {
    setIsDownloadingPptx(true);
    try {
      await downloadPptxInBrowser();
    } catch (err) {
      console.error('Client PPTX generation fallback:', err);
      const link = document.createElement('a');
      link.href = '/AIA_HK_POS_Operations_Strategy_and_Innovation_Deck.pptx';
      link.setAttribute('download', 'AIA_HK_POS_Operations_Strategy_and_Innovation_Deck.pptx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setIsDownloadingPptx(false);
    }
  };

  useEffect(() => {
    const unsubscribe = initAuth(
      (user) => {
        setCurrentUser(user);
        setHasToken(true);
      },
      () => {
        setCurrentUser(null);
        setHasToken(false);
      }
    );
    return () => unsubscribe();
  }, []);

  if (!isOpen) return null;

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setErrorMessage(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setCurrentUser(res.user);
        setHasToken(true);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Google Sign-In was cancelled or failed.');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setCurrentUser(null);
    setHasToken(false);
    setExportResult(null);
  };

  const handleStartExport = async () => {
    setIsExporting(true);
    setErrorMessage(null);
    setExportResult(null);

    try {
      const result = await exportToGoogleSlides((p) => {
        setProgress(p);
      });
      setExportResult(result);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Export to Google Slides encountered an error.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-300 max-w-xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 font-bold shadow-xs">
              <FileSpreadsheet className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight uppercase font-sans">
                Export to Google Slides
              </h2>
              <p className="text-xs text-slate-400">
                1-Click generation of the 18-slide AIA POS presentation in Google Drive
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isExporting}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Status Alert if error */}
          {errorMessage && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg flex items-start gap-2.5 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-bold">Error encountered: </span>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          {/* Authentication Step */}
          {!currentUser || !hasToken ? (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center space-y-3">
              <div className="mx-auto w-10 h-10 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-700">
                <FolderOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-sans">
                  Connect your Google Account
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mt-1 leading-relaxed">
                  Sign in with Google to allow the app to generate and save your complete 18-slide AIA POS executive deck directly into your Google Drive, with permission from your account.
                </p>
              </div>

              {/* Official Google Sign-in Button Style */}
              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleSignIn}
                  disabled={isSigningIn}
                  className="flex items-center gap-3 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-md shadow-xs text-xs font-medium text-slate-700 transition-all hover:shadow cursor-pointer disabled:opacity-50"
                >
                  {isSigningIn ? (
                    <Loader2 className="w-4 h-4 animate-spin text-slate-600" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 48 48">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                  )}
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Account summary banner */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center">
                    {currentUser.displayName ? currentUser.displayName[0] : 'U'}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {currentUser.displayName || 'Authorized User'}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      {currentUser.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Switch</span>
                </button>
              </div>

              {/* Progress bar during export */}
              {isExporting && progress && (
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-900">
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" />
                      {progress.stepDescription}
                    </span>
                    <span className="font-mono text-amber-700">
                      Slide {progress.currentSlide} of {progress.totalSlides}
                    </span>
                  </div>
                  <div className="w-full bg-amber-200/60 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(progress.currentSlide / progress.totalSlides) * 100}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-amber-800 font-mono">
                    Sending batchUpdate requests to Google Slides API...
                  </p>
                </div>
              )}

              {/* Success Banner */}
              {exportResult && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Presentation successfully exported to your Google Drive!</span>
                  </div>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    All 18 slides with executive KPI strips, process diagrams, comparison tables, and speaker notes are ready.
                  </p>
                  <a
                    href={exportResult.presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md font-semibold text-xs transition-colors shadow-xs"
                  >
                    <span>Open in Google Slides</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Action Trigger */}
              {!exportResult && !isExporting && (
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 space-y-1">
                    <div className="font-semibold text-slate-900">What will be generated:</div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-slate-600">
                      <li>Complete 18-slide deck formatted in 16:9 widescreen layout</li>
                      <li>AIA Corporate Signature styling with crimson branding</li>
                      <li>Detailed process flowcharts, timelines, and comparison matrices</li>
                      <li>Embedded Speaker Notes with operational talking points on every slide</li>
                    </ul>
                  </div>

                  <button
                    onClick={handleStartExport}
                    className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-md shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Create Presentation in Google Slides</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Alternative Offline / Direct File Options */}
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-[11px] text-slate-500">Direct Download &amp; Offline:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadPptx}
                disabled={isDownloadingPptx}
                className="inline-flex items-center gap-1.5 text-xs text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 font-semibold px-2.5 py-1 rounded transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isDownloadingPptx ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-600" />
                ) : (
                  <FileSpreadsheet className="w-3.5 h-3.5 text-rose-600" />
                )}
                <span>{isDownloadingPptx ? 'Generating...' : 'Download .PPTX File'}</span>
              </button>
              <button
                onClick={() => {
                  onClose();
                  onPrintDeck();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 font-medium px-2.5 py-1 rounded hover:bg-slate-100 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Print PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
