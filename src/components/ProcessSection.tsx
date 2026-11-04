"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface StepItem {
  stepNum: string;
  title: string;
  subtitle: string;
  desc: string;
  deliverables: string[];
  cardBg: string;
  borderColor: string;
  numBg: string;
}

const STEPS_DATA: StepItem[] = [
  {
    stepNum: "01",
    title: "Subscribe & Discovery Audit",
    subtitle: "Aligning Business Vision, Audience & Market Dynamics",
    desc: "We analyze your current digital landscape, identify operational friction, profile target customer personas, and set clear ROI targets.",
    deliverables: ["Digital Architecture Audit", "User Persona Mapping", "Competitor Benchmark"],
    cardBg: "#f7fee7",
    borderColor: "rgba(132, 204, 22, 0.4)",
    numBg: "#84cc16",
  },
  {
    stepNum: "02",
    title: "Let's Discuss & Architecture Plan",
    subtitle: "Designing Scalable Tech & Conversion Systems",
    desc: "We map out custom software architecture, interactive Figma UI/UX wireframes, database schemas, and multi-channel funnel blueprints.",
    deliverables: ["Interactive Figma Wireframes", "Cloud Architecture Blueprint", "Funnel Architecture"],
    cardBg: "#f0f9ff",
    borderColor: "rgba(56, 189, 248, 0.4)",
    numBg: "#0ea5e9",
  },
  {
    stepNum: "03",
    title: "Agile Sprint Engineering & AI Integration",
    subtitle: "High-Velocity Code, Responsive UI & Autonomous AI",
    desc: "Our engineering squad builds your custom web platform, mobile app, CRM/ERP integration, or AI automation engine using modern frameworks.",
    deliverables: ["React & Mobile Codebase", "Autonomous AI Chatbots", "ERP & Payment Sync"],
    cardBg: "#faf5ff",
    borderColor: "rgba(192, 132, 252, 0.4)",
    numBg: "#a855f7",
  },
  {
    stepNum: "04",
    title: "Zero-Downtime Go-Live Launch",
    subtitle: "Cloud Infrastructure & High-Availability Go-Live",
    desc: "We execute zero-downtime cloud deployments on AWS/Azure, conduct stress tests, verify security protocols, and launch your platform.",
    deliverables: ["AWS / Azure Deployment", "Core Web Vitals Optimization", "24/7 Security Setup"],
    cardBg: "#fffbeb",
    borderColor: "rgba(251, 191, 36, 0.4)",
    numBg: "#eab308",
  },
  {
    stepNum: "05",
    title: "And Booom! Project is Ready & Scaling!",
    subtitle: "Maximizing Conversions, Performance & Growth",
    desc: "Post-launch, we continuously monitor user analytics, optimize ad campaigns, refine conversion funnels, and scale infrastructure as demand grows.",
    deliverables: ["A/B Conversion Testing", "Paid Performance Scaling", "Monthly Executive Reports"],
    cardBg: "#ecfdf5",
    borderColor: "rgba(16, 185, 129, 0.4)",
    numBg: "#10b981",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-[var(--surface-alt)] border-b border-[var(--border-color)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Process Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 reveal-fade-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3eeff] dark:bg-[#231b44] text-[#6d28d9] dark:text-[#c4b5fd] text-xs font-semibold mb-4 border border-[#e9d5ff]/60 dark:border-[#4c1d95]/40 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
              <span>THE ORBIVERSE METHODOLOGY</span>
            </div>

            <h2 className="font-heading font-black tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] leading-tight mb-5">
              How We Turn Ideas Into{" "}
              <span className="text-[#101b96] dark:text-[#7d8eff]">
                High-Converting Realities
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8">
              A transparent, battle-tested 5-phase delivery sprint engineered to eliminate guesswork, accelerate go-to-market, and compound enterprise revenue.
            </p>

            <Link
              href="/drift-audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#101b96] hover:bg-[#0c1575] text-white text-sm font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: 5 Process Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {STEPS_DATA.map((step, idx) => {
              const delayClass = idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : idx === 2 ? "delay-300" : idx === 3 ? "delay-400" : "delay-500";
              return (
                <div
                  key={step.stepNum}
                  className={`rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#110e24] border border-neutral-200/90 dark:border-neutral-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-fade-left ${delayClass}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb] dark:text-[#60a5fa]">
                      Phase {step.stepNum}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight mt-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-semibold text-neutral-500 dark:text-neutral-400 mt-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-mono font-black text-lg flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: step.numBg }}
                  >
                    {step.stepNum}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                  {step.desc}
                </p>

                {/* Deliverables Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-white/5">
                  {step.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>{item}</span>
                    </span>
                  ))}
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

