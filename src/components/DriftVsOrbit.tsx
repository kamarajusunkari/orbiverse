"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export interface ComparisonRow {
  id: string;
  badge: string;
  drift: string;
  orbit: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: "focus",
    badge: "CORE FOCUS",
    drift: "Fragmented channel vanity metrics (clicks, impressions, unmapped keyword ranks).",
    orbit: "One North Star: Net bottom-line revenue and verifiable contribution margin.",
  },
  {
    id: "execution",
    badge: "EXECUTION",
    drift: "Disconnected agencies and vendors pulling in separate silos with zero feedback.",
    orbit: "One dedicated full-funnel growth squad aligning creative, media, and tech.",
  },
  {
    id: "attribution",
    badge: "ATTRIBUTION",
    drift: "Blind guesswork — every platform claims credit for the exact same transaction.",
    orbit: "Deterministic server-side Conversions API & CRM pipeline revenue sync.",
  },
  {
    id: "budget",
    badge: "BUDGET EFFICIENCY",
    drift: "Leaking ad capital across bloated ad sets, junk leads, and unoptimized funnels.",
    orbit: "Dynamic reallocation into high-AOV creative funnels & qualified buyer journeys.",
  },
  {
    id: "outcome",
    badge: "FINAL OUTCOME",
    drift: "Stagnant revenue, rising blended CAC, and endless agency finger-pointing.",
    orbit: "Compounding scale, declining acquisition costs, and predictable enterprise ROI.",
  },
];

export default function DriftVsOrbit() {
  const [mobileTab, setMobileTab] = useState<"both" | "drift" | "orbit">("both");

  return (
    <div className="w-full relative">
      {/* ==================================================================== */}
      {/* SECTION HEADER (CENTERED)                                            */}
      {/* ==================================================================== */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4 reveal-fade-up">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3eeff] dark:bg-[#231b44] text-[#6d28d9] dark:text-[#c4b5fd] text-xs font-semibold mb-4 border border-[#e9d5ff]/60 dark:border-[#4c1d95]/40 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
          <span>THE FUNDAMENTAL SHIFT</span>
        </div>

        <h2 className="font-heading font-black tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-main)] leading-[1.18]">
          Same budget. Same channels.
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#101b96] via-[#4338ca] to-[#7c3aed] dark:from-[#7d8eff] dark:via-[#93c5fd] dark:to-[#c4b5fd]">
            Very different results.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-muted)] mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
          The problem isn&apos;t your marketing channels. It&apos;s having no center of gravity.
        </p>

        {/* Mobile View Switcher */}
        <div className="flex lg:hidden justify-center items-center gap-1.5 mt-6 p-1 bg-neutral-100 dark:bg-white/5 rounded-full w-max mx-auto border border-neutral-200 dark:border-white/10">
          <button
            type="button"
            onClick={() => setMobileTab("both")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              mobileTab === "both"
                ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Compare Both
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("drift")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              mobileTab === "drift"
                ? "bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white shadow-xs"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Drift
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("orbit")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              mobileTab === "orbit"
                ? "bg-gradient-to-r from-[#101b96] to-[#7c3aed] text-white shadow-xs"
                : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
            }`}
          >
            Orbit
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 100% FULL-WIDTH INFOGRAPHIC: PERFECTLY CENTERED POINTS & DIVIDERS    */}
      {/* ==================================================================== */}
      <div className="hidden lg:flex w-full relative min-h-[560px] items-center justify-center overflow-hidden my-4 py-6">
        
        {/* 1. SOFT MERGED SHADES (Radiating from Left & Right, Softly Dissolving into White) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[550px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 75% at 0% 50%, rgba(249, 115, 22, 0.22) 0%, rgba(251, 146, 60, 0.12) 35%, rgba(254, 215, 170, 0.04) 65%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-[550px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 75% at 100% 50%, rgba(124, 58, 237, 0.24) 0%, rgba(99, 102, 241, 0.12) 35%, rgba(199, 210, 254, 0.04) 65%, transparent 100%)",
          }}
        />

        {/* 2. LEFT HALF-CUT ORBIT: Rising directly from the left border */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center">
          
          {/* Concentric Orbit Arcs */}
          <div className="absolute -left-[140px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-orange-500/15 dark:border-orange-500/25 pointer-events-none" />
          <div className="absolute -left-[180px] top-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-dashed border-amber-400/20 dark:border-amber-400/20 pointer-events-none" />
          
          {/* Glowing planetary satellite nodes */}
          <div className="absolute left-[225px] top-[95px] w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.9)] border-2 border-white pointer-events-none" />
          <div className="absolute left-[270px] bottom-[115px] w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)] border-2 border-white pointer-events-none" />

          {/* Semicircular Half-Cut Orbit Core */}
          <div className="w-[205px] h-[410px] rounded-r-full bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#fbbf24] shadow-[0_20px_60px_rgba(234,88,12,0.4)] border-y border-r border-white/40 flex flex-col items-start justify-center pl-8 pr-4 text-white relative overflow-hidden group">
            {/* Shimmer & depth lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30 pointer-events-none" />
            <div className="absolute -left-[150px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/25 pointer-events-none" />
            <div className="absolute -left-[180px] top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-dashed border-white/20 pointer-events-none" />

            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-amber-100 mb-2 px-2.5 py-0.5 rounded-full bg-black/20 backdrop-blur-xs">
              TRADITIONAL
            </span>

            <h3 className="font-heading font-black text-2xl lg:text-[28px] leading-[1.08] tracking-tight uppercase text-white drop-shadow-sm">
              PROJECT
              <span className="block text-amber-100 font-extrabold text-[26px]">
                DRIFT
              </span>
            </h3>

            <p className="text-[11px] font-medium text-amber-100/90 mt-3 leading-tight max-w-[110px]">
              Fragmented silos &amp; leaking capital
            </p>
          </div>

          {/* Symmetrical Fluid Ribbon SVG Connector to pills */}
          <div className="w-16 h-[360px] relative pointer-events-none -ml-1 flex items-center">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 64 360"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="driftRibbonGradFull" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <path d="M 0,180 C 35,180 35,36 64,36 L 64,56 C 35,56 35,180 0,180 Z" fill="url(#driftRibbonGradFull)" />
              <path d="M 0,180 C 35,180 35,108 64,108 L 64,128 C 35,128 35,180 0,180 Z" fill="url(#driftRibbonGradFull)" />
              <path d="M 0,180 C 35,180 35,180 64,170 L 64,190 C 35,190 35,180 0,180 Z" fill="url(#driftRibbonGradFull)" />
              <path d="M 0,180 C 35,180 35,252 64,232 L 64,252 C 35,252 35,180 0,180 Z" fill="url(#driftRibbonGradFull)" />
              <path d="M 0,180 C 35,180 35,324 64,304 L 64,324 C 35,324 35,180 0,180 Z" fill="url(#driftRibbonGradFull)" />
            </svg>
          </div>
        </div>

        {/* 3. CENTER COMPARISON PILL ROWS: MATHEMATICALLY CENTERED GRID */}
        <div className="relative z-10 w-full max-w-[1020px] mx-auto flex flex-col gap-3.5 px-4 my-auto">
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.id}
              className="group relative rounded-full bg-white dark:bg-[#100e26] border border-neutral-200/90 dark:border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_6px_30px_rgba(0,0,0,0.4)] grid grid-cols-[145px_1fr_24px_1fr_145px] items-center p-2 min-h-[58px] hover:border-[#101b96]/40 dark:hover:border-white/25 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Col 1: Left Badge (Fixed 145px width for perfect symmetry) */}
              <div className="w-[145px] px-3.5 py-2 rounded-full bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#f59e0b] text-white text-[11px] font-black tracking-wider uppercase text-center shadow-xs flex items-center justify-center">
                {row.badge}
              </div>

              {/* Col 2: Left Value (Drift) - Equal 1fr space */}
              <div className="px-5 text-center flex items-center justify-center">
                <p className="text-[12.5px] leading-snug font-medium text-neutral-600 dark:text-neutral-300">
                  {row.drift}
                </p>
              </div>

              {/* Col 3: Dead-Center Point (Exact 50.0% Axis) */}
              <div className="w-[24px] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600 shadow-2xs group-hover:scale-125 transition-transform" />
              </div>

              {/* Col 4: Right Value (Orbit) - Equal 1fr space */}
              <div className="px-5 text-center flex items-center justify-center">
                <p className="text-[12.5px] leading-snug font-bold text-neutral-900 dark:text-white">
                  {row.orbit}
                </p>
              </div>

              {/* Col 5: Right Badge (Fixed 145px width for perfect symmetry) */}
              <div className="w-[145px] px-3.5 py-2 rounded-full bg-gradient-to-r from-[#101b96] via-[#4338ca] to-[#7c3aed] text-white text-[11px] font-black tracking-wider uppercase text-center shadow-xs flex items-center justify-center">
                {row.badge}
              </div>
            </div>
          ))}
        </div>

        {/* 4. RIGHT HALF-CUT ORBIT: Rising directly from the right border */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center">
          
          {/* Symmetrical Fluid Ribbon SVG Connector to pills */}
          <div className="w-16 h-[360px] relative pointer-events-none -mr-1 flex items-center">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 64 360"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="orbitRibbonGradFull" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <path d="M 64,180 C 29,180 29,36 0,36 L 0,56 C 29,56 29,180 64,180 Z" fill="url(#orbitRibbonGradFull)" />
              <path d="M 64,180 C 29,180 29,108 0,108 L 0,128 C 29,128 29,180 64,180 Z" fill="url(#orbitRibbonGradFull)" />
              <path d="M 64,180 C 29,180 29,180 0,170 L 0,190 C 29,190 29,180 64,180 Z" fill="url(#orbitRibbonGradFull)" />
              <path d="M 64,180 C 29,180 29,252 0,232 L 0,252 C 29,252 29,180 64,180 Z" fill="url(#orbitRibbonGradFull)" />
              <path d="M 64,180 C 29,180 29,324 0,304 L 0,324 C 29,324 29,180 64,180 Z" fill="url(#orbitRibbonGradFull)" />
            </svg>
          </div>

          {/* Concentric Orbit Arcs */}
          <div className="absolute -right-[140px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-purple-500/15 dark:border-purple-500/25 pointer-events-none" />
          <div className="absolute -right-[180px] top-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-dashed border-indigo-400/20 dark:border-indigo-400/20 pointer-events-none" />

          {/* Glowing planetary satellite nodes */}
          <div className="absolute right-[225px] top-[95px] w-3.5 h-3.5 rounded-full bg-indigo-400 shadow-[0_0_14px_rgba(129,140,248,0.9)] border-2 border-white pointer-events-none" />
          <div className="absolute right-[270px] bottom-[115px] w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)] border-2 border-white pointer-events-none" />

          {/* Semicircular Half-Cut Orbit Core */}
          <div className="w-[205px] h-[410px] rounded-l-full bg-gradient-to-bl from-[#7c3aed] via-[#4338ca] to-[#101b96] shadow-[0_20px_60px_rgba(67,56,202,0.4)] border-y border-l border-white/30 flex flex-col items-end justify-center pr-8 pl-4 text-white text-right relative overflow-hidden group">
            {/* Shimmer & depth lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/25 pointer-events-none" />
            <div className="absolute -right-[150px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/25 pointer-events-none" />
            <div className="absolute -right-[180px] top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-dashed border-white/20 pointer-events-none" />

            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-indigo-100 mb-2 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs">
              ORBIVERSE
            </span>

            <h3 className="font-heading font-black text-2xl lg:text-[28px] leading-[1.08] tracking-tight uppercase text-white drop-shadow-sm">
              PROJECT
              <span className="block text-indigo-200 font-extrabold text-[26px]">
                ORBIT
              </span>
            </h3>

            <p className="text-[11px] font-medium text-indigo-100/90 mt-3 leading-tight max-w-[110px]">
              One center of gravity &amp; net revenue
            </p>
          </div>
        </div>

      </div>

      {/* ==================================================================== */}
      {/* MOBILE / TABLET VIEW CARDS (< 1024px)                                */}
      {/* ==================================================================== */}
      <div className="block lg:hidden max-w-xl mx-auto space-y-4 px-4 my-6">
        {COMPARISON_ROWS.map((row) => (
          <div
            key={row.id}
            className="rounded-3xl p-5 bg-white dark:bg-[#110e24] border border-neutral-200/90 dark:border-white/10 shadow-sm space-y-3.5"
          >
            {/* Top Category Badge */}
            <div className="flex items-center justify-between pb-2.5 border-b border-neutral-100 dark:border-white/5">
              <span className="text-xs font-black tracking-wider uppercase text-neutral-800 dark:text-neutral-200">
                {row.badge}
              </span>
              <span className="text-[10px] font-mono font-bold text-neutral-400">
                DIMENSION
              </span>
            </div>

            {/* Drift Box (Orange) */}
            {(mobileTab === "both" || mobileTab === "drift") && (
              <div className="rounded-2xl p-3.5 bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200/80 dark:border-orange-900/40">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ea580c] to-[#f97316] text-[10px] font-black uppercase text-white">
                    Drift
                  </span>
                  <span className="text-[11px] font-bold text-orange-800 dark:text-orange-300">
                    Conventional Silos
                  </span>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                  {row.drift}
                </p>
              </div>
            )}

            {/* Orbit Box (Purple/Blue) */}
            {(mobileTab === "both" || mobileTab === "orbit") && (
              <div className="rounded-2xl p-3.5 bg-indigo-50/60 dark:bg-indigo-950/25 border border-indigo-200/80 dark:border-indigo-900/40">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#101b96] to-[#7c3aed] text-[10px] font-black uppercase text-white">
                    Orbit
                  </span>
                  <span className="text-[11px] font-bold text-indigo-900 dark:text-indigo-300">
                    The Orbiverse Way
                  </span>
                </div>
                <p className="text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed font-semibold">
                  {row.orbit}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ==================================================================== */}
      {/* BOTTOM ACTION STRIP                                                  */}
      {/* ==================================================================== */}
      <div className="mt-12 sm:mt-16 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-900/5 via-indigo-900/5 to-purple-900/5 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 border border-neutral-200/90 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs px-6">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#101b96] dark:text-[#7d8eff] block mb-1">
            Ready to break out of drift?
          </span>
          <h4 className="font-heading font-black text-lg sm:text-xl text-[var(--text-main)]">
            Inspect your funnel leaks with a 30-minute Drift Audit.
          </h4>
        </div>
        <a
          href="/drift-audit"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#101b96] hover:bg-[#0c1575] text-white transition-all shadow-md hover:scale-[1.02] flex-shrink-0"
        >
          <span>Book Free Drift Audit</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
