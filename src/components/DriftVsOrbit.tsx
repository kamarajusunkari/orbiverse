"use client";

import React, { useState } from "react";
import { ArrowRight, HelpCircle, Target, TrendingUp, Sparkles } from "lucide-react";

export default function DriftVsOrbit() {
  const [activeTab, setActiveTab] = useState<"both" | "drift" | "orbit">("both");

  return (
    <div className="w-full py-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 inline-block">
          The Fundamental Shift
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-main)] mb-4">
          Same budget. Same channels.<br />
          <span className="text-[var(--accent-light)]">Very different results.</span>
        </h2>
        <p className="text-[var(--text-muted)] text-base sm:text-lg">
          The problem isn&apos;t marketing channels. It&apos;s having no center of gravity.
        </p>

        {/* View switcher on mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab("drift")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
              activeTab === "drift" ? "bg-red-500 text-white" : "bg-[var(--surface-alt)] text-[var(--text-muted)]"
            }`}
          >
            Drift
          </button>
          <button
            onClick={() => setActiveTab("orbit")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
              activeTab === "orbit" ? "bg-[#5b3bd1] text-white" : "bg-[var(--surface-alt)] text-[var(--text-muted)]"
            }`}
          >
            Orbit
          </button>
          <button
            onClick={() => setActiveTab("both")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
              activeTab === "both" ? "bg-[var(--text-main)] text-[var(--bg-color)]" : "bg-[var(--surface-alt)] text-[var(--text-muted)]"
            }`}
          >
            Compare Both
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* DRIFT CARD */}
        {(activeTab === "both" || activeTab === "drift") && (
          <div className="border border-red-200 dark:border-red-950/60 bg-red-50/20 dark:bg-red-950/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-[11px] font-bold tracking-wider uppercase">
              How most brands run it
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block animate-pulse" />
                Drift
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-8">
                Silos, vanity metrics & leaking capital
              </p>

              {/* Diagram */}
              <div className="relative h-64 border border-dashed border-red-200 dark:border-red-900/40 rounded-xl p-4 flex flex-col justify-between bg-white/40 dark:bg-black/20">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 shadow-xs border border-red-100 dark:border-red-900/30">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">Meta Ads</span>
                    <span className="text-[11px] text-red-500 flex items-center gap-1">→ clicks only</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 shadow-xs border border-red-100 dark:border-red-900/30">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">SEO</span>
                    <span className="text-[11px] text-red-500 flex items-center gap-1">→ keyword ranks</span>
                  </div>
                </div>

                {/* Question mark center */}
                <div className="flex items-center justify-center my-3">
                  <div className="px-5 py-2.5 rounded-full border border-red-300 dark:border-red-800 bg-red-100/60 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-bold flex items-center gap-2 shadow-xs">
                    <HelpCircle className="w-4 h-4" />
                    Revenue? No one knows which rupee worked
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 shadow-xs border border-red-100 dark:border-red-900/30">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">Social Media</span>
                    <span className="text-[11px] text-red-500 flex items-center gap-1">→ likes & views</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 shadow-xs border border-red-100 dark:border-red-900/30">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">Website</span>
                    <span className="text-[11px] text-red-500 flex items-center gap-1">→ unmapped traffic</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-6 border-t border-red-200/50 dark:border-red-900/30 pt-4 leading-relaxed">
              Each channel reports its own win. Your sales don&apos;t move, and nobody can say which rupee worked.
            </p>
          </div>
        )}

        {/* ORBIT CARD */}
        {(activeTab === "both" || activeTab === "orbit") && (
          <div className="border-2 border-[var(--accent-light)] bg-[var(--surface)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg transition-all">
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[var(--accent-light)] text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              How Orbiverse runs it
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-[var(--accent-light)] inline-block animate-ping" />
                Orbit
              </h3>
              <p className="text-xs text-[var(--accent-light)] font-medium mb-8">
                One number at the centre. Every channel aligned.
              </p>

              {/* Orbit Visual Diagram */}
              <div className="relative h-64 border border-[var(--border-color)] rounded-xl p-4 flex items-center justify-center bg-white/70 dark:bg-black/40 overflow-hidden">
                {/* Concentric rings */}
                <div className="absolute w-56 h-56 rounded-full border border-dashed border-[var(--accent-light)]/25 animate-spin-slow pointer-events-none" />
                <div className="absolute w-40 h-40 rounded-full border border-dashed border-[var(--accent-light)]/40 animate-spin-reverse pointer-events-none" />

                {/* Central Revenue Core */}
                <div className="z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-[#190a6e] to-[#5b3bd1] text-white flex flex-col items-center justify-center shadow-md p-2 text-center">
                  <Target className="w-5 h-5 mb-0.5 text-amber-300" />
                  <span className="text-xs font-black tracking-tight uppercase">Revenue</span>
                  <span className="text-[9px] text-indigo-200">The Centre</span>
                </div>

                {/* Orbiting nodes */}
                <div className="absolute top-3 left-4 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900 border border-[var(--border-color)] text-[11px] font-semibold text-[var(--text-main)] shadow-xs">
                  Ads capture demand
                </div>
                <div className="absolute top-3 right-4 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900 border border-[var(--border-color)] text-[11px] font-semibold text-[var(--text-main)] shadow-xs">
                  SEO lowers cost
                </div>
                <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900 border border-[var(--border-color)] text-[11px] font-semibold text-[var(--text-main)] shadow-xs">
                  Social builds trust
                </div>
                <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900 border border-[var(--border-color)] text-[11px] font-semibold text-[var(--text-main)] shadow-xs">
                  Website converts
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-main)] font-medium mt-6 border-t border-[var(--border-color)] pt-4 leading-relaxed">
              Every channel has one job, and every job is measured against the same number. That&apos;s what we mean by orbit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

