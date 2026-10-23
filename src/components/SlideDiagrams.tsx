import React from 'react';
import { SlideData } from '../data/slidesData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Database, 
  Lock, 
  FileText,
  UserCheck,
  Building2,
  Cpu
} from 'lucide-react';

interface SlideDiagramsProps {
  slide: SlideData;
}

export const SlideDiagrams: React.FC<SlideDiagramsProps> = ({ slide }) => {
  const workflow = slide.workflow;
  if (!workflow) return null;

  return (
    <div className="mt-3 bg-slate-900 text-white rounded-lg p-3.5 border border-slate-800 shadow-inner">
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-rose-500" />
          <span className="text-xs font-semibold tracking-wide text-slate-200 uppercase font-sans">
            {workflow.caption}
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono tracking-wider">
          AIA POS EXECUTIVE FRAMEWORK
        </span>
      </div>

      {/* 1. Step-by-Step Process Flow */}
      {workflow.type === 'process' && workflow.steps && (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {workflow.steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col justify-between bg-slate-800/80 rounded p-2.5 border border-slate-700/80 hover:border-rose-500/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-950/70 text-rose-400 font-bold border border-rose-800/60">
                    STEP {step.stepNumber}
                  </span>
                  {step.timing && (
                    <span className="text-[9px] text-slate-400 font-mono flex items-center gap-0.5">
                      <Clock className="w-2.5 h-2.5 text-slate-400" />
                      {step.timing}
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-semibold text-white leading-tight mb-1 font-sans">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
              {step.owner && (
                <div className="mt-2 pt-1.5 border-t border-slate-700/60 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">Owner</span>
                  <span className="text-rose-300 font-medium truncate">{step.owner}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 2. Architecture Diagram (e.g. IBM Microservices, eKYC rule engine, iChange) */}
      {workflow.type === 'architecture' && workflow.steps && (() => {
        const steps = workflow.steps;
        return (
          <div className="flex flex-col md:flex-row items-center gap-2">
            {steps.map((layer, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 w-full bg-slate-800/90 rounded p-2.5 border border-slate-700 hover:border-slate-500 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-rose-400 uppercase font-semibold">
                      {layer.stepNumber}
                    </span>
                    {idx === 0 && <Cpu className="w-3.5 h-3.5 text-rose-400" />}
                    {idx === 1 && <Zap className="w-3.5 h-3.5 text-amber-400" />}
                    {idx === 2 && <Layers className="w-3.5 h-3.5 text-blue-400" />}
                    {idx === 3 && <Database className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <h4 className="text-xs font-bold text-slate-100 font-sans mb-1">
                    {layer.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 font-body leading-relaxed mb-2">
                    {layer.description}
                  </p>
                  <div className="text-[10px] text-slate-400 border-t border-slate-700/70 pt-1 flex justify-between">
                    <span>Owner: {layer.owner}</span>
                    <span className="font-mono text-slate-300">{layer.timing}</span>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex text-slate-600">
                    <ArrowRight className="w-4 h-4 text-rose-500/70 shrink-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        );
      })()}

      {/* 3. Timeline Gantt Roadmap (CRS 2.0, 3-Year Horizon) */}
      {workflow.type === 'timeline' && workflow.timeline && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
          {workflow.timeline.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/80 rounded p-2.5 border border-slate-700 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono font-bold text-rose-400">
                  {item.date}
                </span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-medium ${
                  item.status === 'completed' 
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' 
                    : item.status === 'target' 
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-800'
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {item.status.toUpperCase()}
                </span>
              </div>
              <h4 className="text-xs font-semibold text-white mb-1 font-sans">
                {item.title}
              </h4>
              <p className="text-[11px] text-slate-300 font-body leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 4. Comparison Matrix (Before vs. Target State) */}
      {workflow.type === 'comparison' && workflow.comparisonRows && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 text-[10px] uppercase font-mono">
                <th className="py-1 px-2 w-1/4">Operational Dimension</th>
                <th className="py-1 px-2 w-1/3">Legacy Approach (Baseline)</th>
                <th className="py-1 px-2 w-1/3 text-emerald-300">Target Operating State</th>
                <th className="py-1 px-2 text-rose-300">Business Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-[11px]">
              {workflow.comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  <td className="py-1.5 px-2 font-medium text-slate-200">{row.dimension}</td>
                  <td className="py-1.5 px-2 text-slate-400">{row.before}</td>
                  <td className="py-1.5 px-2 text-slate-200 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{row.after}</span>
                  </td>
                  <td className="py-1.5 px-2 text-rose-300 font-mono text-[10px]">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
