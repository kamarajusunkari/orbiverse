"use client";

import React, { useState } from "react";
import { openCtaModal } from "@/components/CtaModal";
import {
  ShieldCheck,
  LineChart,
  Cpu,
  Key,
  TrendingUp,
  Code2,
  UserX,
  EyeOff,
  Unplug,
  Lock,
  TrendingDown,
  Split,
  Check,
  X,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface PillarItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tag: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const DO_PILLARS: PillarItem[] = [
  {
    id: "do-1",
    num: "01",
    title: "The Senior People Stay",
    description:
      "The senior growth architects who audit your systems stay on your account day-to-day. No pitch teams followed by junior hand-offs.",
    tag: "Zero Junior Handoff",
    bullets: [
      "Founders & Architects directly manage your media & code",
      "0% delegation to inexperienced junior coordinators",
    ],
    icon: ShieldCheck,
  },
  {
    id: "do-2",
    num: "02",
    title: "One Number on Page One",
    description:
      "Every weekly sprint report opens with net capital spent, verifiable revenue returned, and exact pipeline changes.",
    tag: "Verifiable Revenue",
    bullets: [
      "Net Contribution Margin & Bottom-Line Cash first",
      "Zero vanity impressions or unmapped keyword rankings",
    ],
    icon: LineChart,
  },
  {
    id: "do-3",
    num: "03",
    title: "Deterministic Signal Stack",
    description:
      "Recover 100% of signals lost to iOS 14 with Server-Side CAPI, custom first-party data pipelines, and zero blind spots.",
    tag: "Server-Side CAPI",
    bullets: [
      "Meta Conversions API & GA4 first-party event tracking",
      "Real-time CRM deals feed deterministic ad bidding",
    ],
    icon: Cpu,
  },
  {
    id: "do-4",
    num: "04",
    title: "You Own 100% of Everything",
    description:
      "All ad accounts, pixel datasets, custom Next.js storefront code, and creative IP remain in your organization's name forever.",
    tag: "Zero Vendor Lock-In",
    bullets: [
      "Full root admin access to pixels, ad accounts & analytics",
      "100% IP ownership with immediate, clean transition",
    ],
    icon: Key,
  },
  {
    id: "do-5",
    num: "05",
    title: "Dynamic Capital Allocation",
    description:
      "We aggressively reallocate budget into high-AOV creative funnels and qualified leads — and tell you to cut what doesn't compound.",
    tag: "High-AOV Scale",
    bullets: [
      "Spend shifted weekly into winning creative angles",
      "Immediate cut recommendations for non-performing sets",
    ],
    icon: TrendingUp,
  },
  {
    id: "do-6",
    num: "06",
    title: "Unified Revenue Squad",
    description:
      "Creative directors, full-stack engineers, and media buyers acting as one synchronized revenue machine with shared targets.",
    tag: "One Center of Gravity",
    bullets: [
      "CRO engineers, copywriters & buyers in one room",
      "Single weekly sprint aligned to your net revenue KPIs",
    ],
    icon: Code2,
  },
];

const DONT_PILLARS: PillarItem[] = [
  {
    id: "dont-1",
    num: "01",
    title: "Junior Account Handoffs",
    description:
      "Pitched by seasoned agency founders, then quietly delegated to interns juggling 15 different accounts at once.",
    tag: "Intern Tiers",
    bullets: [
      "Pitched by agency leadership, executed by beginners",
      "High agency staff turnover with repeated retraining",
    ],
    icon: UserX,
  },
  {
    id: "dont-2",
    num: "02",
    title: "Vanity Metric Smoke Screens",
    description:
      "Monthly slide decks celebrating impressions and clicks while blended CAC rises and cash-flow contribution margin stagnates.",
    tag: "Hollow Metrics",
    bullets: [
      "25-page PDF decks masking declining net profit",
      "Reporting channel ROAS that doesn't match your bank account",
    ],
    icon: EyeOff,
  },
  {
    id: "dont-3",
    num: "03",
    title: "Blind Signal Guesswork",
    description:
      "Relying on deprecated browser pixels where Meta and Google double-count the same transactions without verification.",
    tag: "50%+ Blind Attribution",
    bullets: [
      "Ad networks claiming credit for the exact same order",
      "Complete data blindness across Safari and mobile blockers",
    ],
    icon: Unplug,
  },
  {
    id: "dont-4",
    num: "04",
    title: "Hostage Accounts & Portals",
    description:
      "Agencies holding your ad accounts, pixel data, and landing pages hostage in proprietary tools you cannot export.",
    tag: "Data Hostage",
    bullets: [
      "Agency retains primary owner rights to ad data",
      "Proprietary landing pages that disappear if you leave",
    ],
    icon: Lock,
  },
  {
    id: "dont-5",
    num: "05",
    title: "Bloated Burn on Junk Leads",
    description:
      "Burning ad spend on broad form fills, low-intent bots, and unqualified leads that overwhelm and frustrate your sales team.",
    tag: "Wasted Capital",
    bullets: [
      "Spam form submissions celebrated as high-volume conversions",
      "Sales reps wasting 70% of time filtering junk inquiries",
    ],
    icon: TrendingDown,
  },
  {
    id: "dont-6",
    num: "06",
    title: "Fragmented Agency Silos",
    description:
      "SEO agency blames web dev, web dev blames media buyer, media buyer blames creative — zero central accountability.",
    tag: "Finger Pointing",
    bullets: [
      "Separate vendors operating with zero communication",
      "Endless blaming and zero shared bottom-line accountability",
    ],
    icon: Split,
  },
];

export default function WorkWithUsToggleSection() {
  const [isWorkingWithUs, setIsWorkingWithUs] = useState(true);
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const pillars = isWorkingWithUs ? DO_PILLARS : DONT_PILLARS;

  return (
    <section
      id="orbit-rules"
      className="py-20 sm:py-28 bg-[#fafafc] dark:bg-[#070913] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden border-t border-[var(--border-color)]"
    >
      {/* Background Soft Accent Glows for Glassmorphism Refraction */}
      <div
        className={`absolute top-1/4 right-1/4 w-[500px] h-[320px] rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-40 ${
          isWorkingWithUs
            ? "bg-gradient-to-tr from-blue-400/30 via-indigo-400/25 to-sky-300/20"
            : "bg-gradient-to-tr from-rose-400/30 via-red-400/25 to-pink-300/20"
        }`}
      />
      <div
        className={`absolute bottom-10 left-1/4 w-[420px] h-[300px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-30 ${
          isWorkingWithUs
            ? "bg-gradient-to-br from-blue-600/25 via-indigo-500/20 to-sky-400/15"
            : "bg-gradient-to-br from-rose-600/25 via-red-500/20 to-orange-400/15"
        }`}
      />

      {/* 1400PX MAX-WIDTH CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================
            TOP EYEBROW: "● WHAT YOU CAN HOLD US TO · THE DIFFERENCE"
            ================================================================ */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5 reveal-fade-up">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              isWorkingWithUs
                ? "bg-[#0066ff] shadow-[0_0_10px_rgba(0,102,255,0.7)]"
                : "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.7)]"
            }`}
          />
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
            WHAT YOU CAN HOLD US TO · THE DIFFERENCE
          </span>
        </div>

        {/* ================================================================
            HEADER ROW: STRICTLY 2-LINE HEADLINE + INTEGRATED COMPACT TOGGLE
            ================================================================ */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-slate-200/80 dark:border-white/10 reveal-fade-up delay-100">
          
          {/* Left: Strictly 2-Line Headline */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-black tracking-tight text-slate-950 dark:text-white leading-[1.2]">
              {/* Line 1 */}
              <span className="block">When people</span>
              
              {/* Line 2 with inline switch and tight nowrap */}
              <span className="inline-flex items-center flex-nowrap gap-2.5 sm:gap-3.5 mt-1 sm:mt-1.5 whitespace-nowrap">
                {/* Active Dynamic Word */}
                <span
                  onClick={() => setIsWorkingWithUs(!isWorkingWithUs)}
                  className={`transition-colors duration-300 font-black cursor-pointer select-none ${
                    isWorkingWithUs
                      ? "text-[#0066ff] dark:text-[#38bdf8]"
                      : "text-rose-500 dark:text-rose-400"
                  }`}
                >
                  {isWorkingWithUs ? "do" : "don't"}
                </span>

                {/* Sleek iOS-Style Compact Toggle Pill */}
                <button
                  type="button"
                  role="switch"
                  aria-checked={isWorkingWithUs}
                  aria-label="Toggle comparison"
                  onClick={() => setIsWorkingWithUs(!isWorkingWithUs)}
                  className={`relative inline-flex items-center h-8 sm:h-8.5 w-16 sm:w-17 shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] shadow-inner ${
                    isWorkingWithUs
                      ? "bg-[#0066ff] shadow-[0_0_14px_rgba(0,102,255,0.4)]"
                      : "bg-slate-300 dark:bg-slate-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-flex items-center justify-center h-6 sm:h-6.5 w-6 sm:w-6.5 rounded-full bg-white shadow-md transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
                      isWorkingWithUs
                        ? "translate-x-8 sm:translate-x-8.5"
                        : "translate-x-0"
                    }`}
                  >
                    {isWorkingWithUs ? (
                      <Check className="w-3.5 h-3.5 text-[#0066ff] stroke-[3]" />
                    ) : (
                      <X className="w-3.5 h-3.5 text-slate-500 stroke-[3]" />
                    )}
                  </span>
                </button>

                {/* Remainder of line 2 */}
                <span>work with us.</span>
              </span>
            </h2>
          </div>

          {/* Right: Subtext Description & Pill CTA Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-6">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm transition-all duration-300">
              {isWorkingWithUs
                ? "Expect deterministic solutions, clear reporting, and compounding revenue tailored to your business."
                : "Expect fragmented reports, hidden agency markups, junior handoffs, and stagnant blended ROAS."}
            </p>

            <button
              type="button"
              onClick={() => openCtaModal("WorkWithUsToggle")}
              className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white transition-all duration-300 shadow-md hover:shadow-lg shrink-0 group cursor-pointer ${
                isWorkingWithUs
                  ? "bg-[#0066ff] hover:bg-[#0052cc] shadow-blue-500/20"
                  : "bg-rose-500 hover:bg-rose-600 shadow-rose-500/20"
              }`}
            >
              <span>{isWorkingWithUs ? "Work with us" : "Stop the drift"}</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>

        </div>

        {/* ================================================================
            6-PILLAR ACCORDION WITH FULL GLASSMORPHISM (1400PX DESKTOP)
            Active pillar expands to ~30-32% width with frosted glass & specular highlights.
            Remaining 5 pillars feature clean translucent glass & vertical typography.
            ================================================================ */}
        <div className="hidden md:flex flex-row gap-3.5 lg:gap-4.5 h-[480px] lg:h-[515px] w-full items-stretch pt-10 sm:pt-12 reveal-fade-up delay-200">
          {pillars.map((pillar, idx) => {
            const isActive = activePillarIndex === idx;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActivePillarIndex(idx)}
                style={{
                  flex: isActive ? "2.4 1 0%" : "1 1 0%",
                }}
                className={`relative rounded-2xl lg:rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none flex flex-col justify-between ${
                  isActive
                    ? isWorkingWithUs
                      ? "p-7 lg:p-8 backdrop-blur-2xl bg-gradient-to-br from-white/95 via-white/85 to-blue-50/75 dark:from-slate-900/90 dark:via-[#0e1933]/85 dark:to-slate-950/90 border-2 border-[#0066ff]/60 dark:border-blue-400/50 shadow-[inset_0_1px_3px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,102,255,0.08),0_24px_55px_-12px_rgba(0,102,255,0.22)] translate-y-[-4px]"
                      : "p-7 lg:p-8 backdrop-blur-2xl bg-gradient-to-br from-white/95 via-white/85 to-rose-50/75 dark:from-slate-900/90 dark:via-[#2b0c16]/85 dark:to-slate-950/90 border-2 border-rose-500/60 dark:border-rose-400/50 shadow-[inset_0_1px_3px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(244,63,94,0.08),0_24px_55px_-12px_rgba(244,63,94,0.22)] translate-y-[-4px]"
                    : isWorkingWithUs
                    ? "p-4.5 lg:p-5 backdrop-blur-xl bg-white/65 dark:bg-slate-900/40 border border-white/90 dark:border-white/10 hover:border-[#0066ff]/60 dark:hover:border-blue-400/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_8px_24px_-6px_rgba(16,27,150,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(0,102,255,0.18)] hover:bg-white/90 dark:hover:bg-slate-900/70"
                    : "p-4.5 lg:p-5 backdrop-blur-xl bg-white/65 dark:bg-slate-900/40 border border-white/90 dark:border-white/10 hover:border-rose-400/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_8px_24px_-6px_rgba(244,63,94,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(244,63,94,0.18)] hover:bg-white/90 dark:hover:bg-slate-900/70"
                }`}
              >
                {/* ---------------- ACTIVE EXPANDED PILLAR (~32% WIDTH) ---------------- */}
                {isActive ? (
                  <div className="flex flex-col justify-between h-full w-full">
                    
                    {/* Top: Clean Status Indicator Pill + Number Count (No Generic AI Icon) */}
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border shadow-xs ${
                          isWorkingWithUs
                            ? "bg-blue-500/10 dark:bg-blue-500/20 text-[#0066ff] dark:text-[#38bdf8] border-blue-400/30"
                            : "bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-400/30"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isWorkingWithUs
                              ? "bg-[#0066ff] shadow-[0_0_8px_#0066ff]"
                              : "bg-rose-500 shadow-[0_0_8px_#f43f5e]"
                          }`}
                        />
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase">
                          TENET {pillar.num}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-black px-3.5 py-1.5 rounded-full backdrop-blur-md border shadow-xs ${
                            isWorkingWithUs
                              ? "bg-[#0066ff] text-white border-blue-600 shadow-blue-500/20"
                              : "bg-rose-500 text-white border-rose-600 shadow-rose-500/20"
                          }`}
                        >
                          {pillar.num} / 06
                        </span>
                      </div>
                    </div>

                    {/* Middle: Prominent Bold Title, Description & Bullet Proofs */}
                    <div className="my-auto py-2">
                      <h3 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px] font-black text-slate-950 dark:text-white tracking-[-0.03em] leading-[1.12] mb-3">
                        {pillar.title}
                      </h3>
                      
                      <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-4">
                        {pillar.description}
                      </p>

                      {/* 2 Bullet Proof Chips (Glassmorphism Cards) */}
                      <div className="space-y-2 pt-2 border-t border-blue-100/70 dark:border-white/10">
                        {pillar.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 p-2 sm:p-2.5 rounded-xl backdrop-blur-md bg-white/60 dark:bg-white/5 border border-white/80 dark:border-white/10 shadow-xs"
                          >
                            {isWorkingWithUs ? (
                              <CheckCircle2 className="w-4 h-4 text-[#0066ff] dark:text-[#38bdf8] shrink-0 mt-0.5" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                            )}
                            <span className="text-[12px] lg:text-[12.5px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Highlight Tag */}
                    <div className="pt-2">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold backdrop-blur-md border shadow-xs ${
                          isWorkingWithUs
                            ? "bg-[#0066ff]/12 text-[#0066ff] dark:bg-blue-500/25 dark:text-blue-200 border-[#0066ff]/25"
                            : "bg-rose-500/12 text-rose-600 dark:bg-rose-500/25 dark:text-rose-200 border-rose-500/25"
                        }`}
                      >
                        {isWorkingWithUs ? (
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        ) : (
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        )}
                        <span>{pillar.tag}</span>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* ---------------- COLLAPSED PILLAR (CLEAN TYPOGRAPHY & NO AI SQUIRCLE) ---------------- */
                  <div className="flex flex-col items-center justify-between h-full w-full py-2">
                    
                    {/* Top: Clean Number Badge Pill */}
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`text-xs font-mono font-black px-2.5 py-1 rounded-full backdrop-blur-md border transition-all shadow-xs ${
                          isWorkingWithUs
                            ? "bg-white/80 dark:bg-white/10 text-[#0066ff] dark:text-[#38bdf8] border-blue-200/80 dark:border-blue-800/50 group-hover:bg-[#0066ff] group-hover:text-white group-hover:border-[#0066ff]"
                            : "bg-white/80 dark:bg-white/10 text-rose-600 dark:text-rose-400 border-rose-200/80 dark:border-rose-800/50 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500"
                        }`}
                      >
                        {pillar.num}
                      </span>
                    </div>

                    {/* Center: Vertical Rotated Title */}
                    <div className="my-auto flex items-center justify-center py-6">
                      <span
                        className="text-[13px] lg:text-[14px] font-extrabold text-slate-800 dark:text-slate-200 tracking-wider whitespace-nowrap select-none group-hover:text-[#0066ff] dark:group-hover:text-blue-300 transition-colors"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {pillar.title}
                      </span>
                    </div>

                    {/* Bottom: Accent Blue Indicator Bar with Smooth Growth on Hover */}
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div
                        className={`w-1.5 h-7 rounded-full transition-all duration-300 ${
                          isWorkingWithUs
                            ? "bg-blue-300/80 dark:bg-blue-700/60 group-hover:bg-[#0066ff] group-hover:h-9"
                            : "bg-rose-300/80 dark:bg-rose-700/60 group-hover:bg-rose-500 group-hover:h-9"
                        }`}
                      />
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================================================================
            MOBILE VERTICAL EXPANDING ACCORDION (< 768px)
            ================================================================ */}
        <div className="flex md:hidden flex-col gap-3 pt-8 reveal-fade-up delay-100">
          {pillars.map((pillar, idx) => {
            const isActive = activePillarIndex === idx;

            return (
              <div
                key={`mobile-${pillar.id}`}
                onClick={() => setActivePillarIndex(idx)}
                className={`rounded-2xl p-5 transition-all duration-300 cursor-pointer backdrop-blur-xl border ${
                  isActive
                    ? isWorkingWithUs
                      ? "bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80 dark:from-[#0d162a]/95 dark:to-[#172554]/95 border-[#0066ff]/60 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_12px_28px_rgba(0,102,255,0.18)]"
                      : "bg-gradient-to-br from-white/95 via-white/90 to-rose-50/80 dark:from-[#240c14]/95 dark:to-[#4c0519]/95 border-rose-500/60 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_12px_28px_rgba(244,63,94,0.18)]"
                    : isWorkingWithUs
                    ? "bg-white/75 dark:bg-[#0c1024]/70 border-white/80 dark:border-blue-900/30 shadow-xs"
                    : "bg-white/75 dark:bg-[#120a10]/70 border-white/80 dark:border-rose-900/30 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-black px-2.5 py-1 rounded-full border shadow-xs ${
                        isActive
                          ? isWorkingWithUs
                            ? "bg-[#0066ff] text-white border-blue-600"
                            : "bg-rose-500 text-white border-rose-600"
                          : "bg-white/80 dark:bg-white/10 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-white/10"
                      }`}
                    >
                      {pillar.num}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md ${
                      isActive
                        ? isWorkingWithUs
                          ? "bg-[#0066ff]/15 text-[#0066ff] border border-blue-500/30"
                          : "bg-rose-500/15 text-rose-500 border border-rose-500/30"
                        : "text-slate-400 border border-slate-200/60 dark:border-white/10"
                    }`}
                  >
                    {isActive ? "Active" : "Tap"}
                  </span>
                </div>

                {isActive && (
                  <div className="mt-3.5 pt-3 border-t border-black/5 dark:border-white/5 animate-fadeIn">
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-3">
                      {pillar.description}
                    </p>
                    
                    <div className="space-y-1.5 mb-3">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/60 dark:bg-white/5 border border-white/80 dark:border-white/10"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066ff] shrink-0" />
                          <span className="text-[11.5px] font-medium text-slate-700 dark:text-slate-300">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/80 dark:bg-black/30 text-slate-800 dark:text-slate-200 border border-blue-200/50">
                      ✦ {pillar.tag}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
