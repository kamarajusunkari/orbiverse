"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { openCtaModal } from "@/components/CtaModal";

export interface TimelineMilestone {
  id: string;
  quarter: string;
  title: string;
  desc: string;
  calloutHeadline: string;
  calloutSub: string;
}

const MILESTONES: TimelineMilestone[] = [
  {
    id: "q1",
    quarter: "Q1",
    title: "Audit & Align",
    desc: "Review brand, website, ads and tracking to identify gaps.",
    calloutHeadline: "Phase 01",
    calloutSub: "Auditing brand, technical tracking & digital infrastructure.",
  },
  {
    id: "q2",
    quarter: "Q2",
    title: "Plan & Strategize",
    desc: "Define the primary growth goal and build a focused strategy.",
    calloutHeadline: "Phase 02",
    calloutSub: "Defining single primary KPI and engineering conversion pathways.",
  },
  {
    id: "q3",
    quarter: "Q3",
    title: "Execute in Orbit",
    desc: "Align SEO, paid ads, social media, content and website towards one goal.",
    calloutHeadline: "We are Here",
    calloutSub: "Where strategy, execution and data come together to drive real results.",
  },
  {
    id: "q4",
    quarter: "Q4",
    title: "Optimize & Scale",
    desc: "Measure performance, cut wasted spend and scale winning campaigns.",
    calloutHeadline: "Phase 04",
    calloutSub: "Cutting wasted spend, compounding winners and scaling enterprise ROAS.",
  },
];

export default function ProcessSection() {
  const [activeQuarterIndex, setActiveQuarterIndex] = useState<number>(2);

  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-[#f8faff] text-neutral-900 border-b border-blue-200/80 relative overflow-hidden transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==================================================================== */}
        {/* SECTION HEADER                                                       */}
        {/* ==================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-blue-200 dark:border-white/10">
          <div className="reveal-fade-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-white/10 text-[#101b96] dark:text-blue-300 border border-blue-200 dark:border-white/15 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#101b96] dark:text-blue-400" />
              <span>ORBIVERSE · EXECUTION TIMELINE</span>
            </div>
            <h2 className="font-heading font-black tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white leading-[1.12]">
              How It Works – <span className="text-[#101b96] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300">The Orbit Method</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-2 max-w-xl">
              From audit to exponential scale: a minimalist roadmap built on data, precision, and verified returns.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end justify-end flex-shrink-0 reveal-fade-left delay-100">
            <button
              type="button"
              onClick={() => openCtaModal("ProcessSection")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#101b96] text-white hover:bg-[#0c1575] transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Book Your Drift Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 4-BOX GRID ROADMAP (FLUSH SHARP EDGES, HANGING LINE & MIDDLE AXIS)  */}
        {/* ==================================================================== */}
        <div className="relative w-full border border-blue-200/90 dark:border-white/15 shadow-xl overflow-hidden reveal-fade-up rounded-none">
          
          {/* Continuous Middle Horizontal Line across all 4 boxes from left to right */}
          <div className="hidden lg:block absolute left-0 right-0 top-[220px] h-[2px] bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 dark:from-white/20 dark:via-blue-400/40 dark:to-white/20 z-10 pointer-events-none" />

          {/* 4 Columns Grid (Sharp Corners / No Border Radius) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-blue-200/90 dark:divide-white/15">
            {MILESTONES.map((milestone, idx) => {
              const isHighlighted = activeQuarterIndex === idx;

              return (
                <div
                  key={milestone.id}
                  onClick={() => setActiveQuarterIndex(idx)}
                  className={`group cursor-pointer relative flex flex-col justify-between transition-all duration-300 rounded-none ${
                    isHighlighted
                      ? "text-white shadow-2xl z-20"
                      : "text-neutral-900 dark:text-neutral-100 hover:brightness-95 dark:hover:brightness-110 z-10"
                  }`}
                  style={
                    isHighlighted
                      ? {
                          // Blue for the active one (Logo Dark Blue Gradient)
                          background:
                            "linear-gradient(180deg, #101b96 0%, #12197a 45%, #090d3d 100%)",
                        }
                      : {
                          // White and blue gradient for normal ones
                          background:
                            "linear-gradient(180deg, #ffffff 0%, #f0f6ff 50%, #dbeafe 100%)",
                        }
                  }
                >
                  {/* TOP HALF: Vertical Line Hanging Down from the Very Top to the Middle Node */}
                  <div className="relative h-[220px] flex flex-col items-center justify-end px-7 pt-6">
                    {/* Active one has callout text at top */}
                    {isHighlighted ? (
                      <div className="w-full text-left mb-auto">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-200 block mb-1 font-semibold">
                          Future Roadmap
                        </span>
                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                          {milestone.calloutHeadline}
                        </h3>
                        <p className="text-xs text-blue-100 leading-relaxed font-normal mt-1 max-w-[240px]">
                          {milestone.calloutSub}
                        </p>
                      </div>
                    ) : null}

                    {/* Hanging Vertical Line: Drops from the Top and stops at the Middle Ball */}
                    <div
                      className={`w-[2px] transition-all duration-300 ${
                        isHighlighted
                          ? "h-16 bg-white/60 mb-0"
                          : "h-full bg-[#60a5fa] group-hover:bg-[#2563eb]"
                      }`}
                    />

                    {/* Centered Node / Ball on the Middle Horizontal Line (Exact Match to User Image) */}
                    <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      {isHighlighted ? (
                        <div className="w-7 h-7 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-[0_0_18px_rgba(255,255,255,0.95)] ring-4 ring-blue-400/40">
                          <span className="w-3 h-3 rounded-full bg-[#101b96]" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-white border-2 border-[#2563eb] flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.25)] group-hover:scale-110 group-hover:border-[#101b96] transition-transform">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#101b96]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BOTTOM HALF: Content Placed Below the Horizontal Line */}
                  <div className="flex-1 flex flex-col justify-start pt-12 pb-8 px-7 sm:px-8">
                    {/* Quarter Label */}
                    <div className="mb-2">
                      <span
                        className={`font-heading font-black text-3xl sm:text-4xl tracking-tight block ${
                          isHighlighted
                            ? "text-white"
                            : "text-[#101b96]"
                        }`}
                      >
                        {milestone.quarter}
                      </span>
                    </div>

                    {/* Title */}
                    <h4
                      className={`font-heading font-bold text-lg sm:text-xl tracking-tight leading-snug mb-2 ${
                        isHighlighted
                          ? "text-white"
                          : "text-neutral-900 dark:text-white"
                      }`}
                    >
                      {milestone.title}
                    </h4>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed font-normal ${
                        isHighlighted
                          ? "text-blue-100"
                          : "text-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {milestone.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
