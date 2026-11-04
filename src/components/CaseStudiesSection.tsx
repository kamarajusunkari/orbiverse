"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  cardBg: string;
  textColor: string;
  subtextColor: string;
  arrowColor: string;
  image: string;
  impact: string[];
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "ageaon",
    title: "Ageaon",
    category: "ENTERPRISE IT & CLOUD",
    desc: "Engineered scalable cloud infrastructure & automated CI/CD pipeline for high-concurrency enterprise workloads.",
    fullDesc:
      "We designed high-availability cloud architecture, zero-downtime deployment pipelines, and proactive microservice monitoring for Ageaon, cutting server expenditures while multiplying throughput.",
    cardBg: "#f3e8ff",
    textColor: "#0f172a",
    subtextColor: "#475569",
    arrowColor: "#0f172a",
    image: "/case study.png",
    impact: ["99.99% Cloud Uptime", "45% Infra Cost Savings", "Sub-100ms API Latency"],
  },
  {
    id: "choicezz",
    title: "Choicezz",
    category: "E-COMMERCE & MARKETPLACE",
    desc: "Built next-gen multi-vendor e-commerce platform with AI recommendation engine and instant checkout.",
    fullDesc:
      "Custom high-converting e-commerce web & mobile application featuring dynamic personalized product recommendations, automated abandoned cart recovery, and one-click checkout.",
    cardBg: "#0f172a",
    textColor: "#ffffff",
    subtextColor: "#94a3b8",
    arrowColor: "#ffffff",
    image: "/case study (2).png",
    impact: ["3.8X Conversion Surge", "250,000+ Monthly Buyers", "12K Peak Concurrent Users"],
  },
  {
    id: "vasishta-events",
    title: "Vasishta Events",
    category: "EVENT MANAGEMENT & BOOKINGS",
    desc: "Designed interactive event booking portal with automated lead distribution & 3D decor preview tools.",
    fullDesc:
      "Omnichannel digital marketing engine paired with an interactive decor visualizer that quadrupled high-value wedding and corporate event bookings across major metropolitan regions.",
    cardBg: "#ede9fe",
    textColor: "#0f172a",
    subtextColor: "#475569",
    arrowColor: "#0f172a",
    image: "/case study (3).png",
    impact: ["4X Qualified Leads", "2,500+ Bookings Automated", "4.9 Star Rating"],
  },
  {
    id: "corebridge-hr",
    title: "Corebridge HR",
    category: "SAAS & HRTECH",
    desc: "Architected intelligent HR management SaaS automating payroll, attendance tracking, and onboarding.",
    fullDesc:
      "Comprehensive cloud SaaS platform streamlining employee lifecycle management, automated tax deductions, real-time biometric sync, and visual analytics dashboards.",
    cardBg: "#0f172a",
    textColor: "#ffffff",
    subtextColor: "#94a3b8",
    arrowColor: "#ffffff",
    image: "/case study (4).png",
    impact: ["50,000+ Active Employees", "70% Faster Onboarding", "Zero Payroll Errors"],
  },
  {
    id: "pragathi-mahavidyalaya",
    title: "Pragathi Mahavidyalaya",
    category: "EDTECH & INSTITUTIONS",
    desc: "Deployed comprehensive campus management system, digital admissions portal, and student app.",
    fullDesc:
      "Integrated institutional portal automating online fee collection, student gradebook generation, real-time schedule dispatch, and automated parent WhatsApp notifications.",
    cardBg: "#f3e8ff",
    textColor: "#0f172a",
    subtextColor: "#475569",
    arrowColor: "#0f172a",
    image: "/case study (5).png",
    impact: ["15,000+ Enrolled Students", "90% Online Fee Collection", "Instant Academic Analytics"],
  },
  {
    id: "medsurgy",
    title: "Medsurgy",
    category: "HEALTHCARE & MEDICAL",
    desc: "Integrated hospital operations portal with live ICU bed tracking and emergency doctor booking.",
    fullDesc:
      "HIPAA-compliant hospital portal facilitating instant doctor appointments, electronic health record access, and automated SMS lab report notifications.",
    cardBg: "#0f172a",
    textColor: "#ffffff",
    subtextColor: "#94a3b8",
    arrowColor: "#ffffff",
    image: "/case study (6).png",
    impact: ["85% Reduced Wait Times", "100% Digital Health Records", "24/7 Emergency Dispatch"],
  },
  {
    id: "raj-ki-bandi",
    title: "Raj Ki Bandi",
    category: "FOOD TECH & RETAIL",
    desc: "Scaled iconic food brand with custom mobile ordering app & kitchen fulfillment network.",
    fullDesc:
      "Engineered a high-velocity online ordering & multi-location delivery platform with automated kitchen dispatch, live GPS tracking, and instant settlement.",
    cardBg: "#fef3c7",
    textColor: "#0f172a",
    subtextColor: "#475569",
    arrowColor: "#0f172a",
    image: "/case study (7).png",
    impact: ["10,000+ Daily Orders", "300% Growth in 6 Months", "18 Outlets Connected"],
  },
  {
    id: "elite-gastro",
    title: "Elite Gastro Clinic",
    category: "CLINICAL CARE",
    desc: "Designed patient diagnostic portal, video consultation suite, and automated appointment reminders.",
    fullDesc:
      "Specialty medical practice management software with integrated telemedicine video consultations and electronic prescription management.",
    cardBg: "#0f172a",
    textColor: "#ffffff",
    subtextColor: "#94a3b8",
    arrowColor: "#ffffff",
    image: "/case study (8).png",
    impact: ["4.8X Online Bookings", "Zero Missed Appointments", "HIPAA Secure Patient Portal"],
  },
  {
    id: "surgipartner",
    title: "Surgipartner",
    category: "MEDTECH & SURGICAL SUPPLY",
    desc: "Architected surgical equipment distribution platform with real-time inventory & hospital sync.",
    fullDesc:
      "B2B medical device marketplace facilitating direct orders between surgical manufacturers and hospital surgical teams.",
    cardBg: "#ede9fe",
    textColor: "#0f172a",
    subtextColor: "#475569",
    arrowColor: "#0f172a",
    image: "/case study (9).png",
    impact: ["500+ Hospitals Onboarded", "Real-Time Stock Sync", "35% Operational Savings"],
  },
  {
    id: "coldmart",
    title: "Coldmart",
    category: "COLD CHAIN & LOGISTICS",
    desc: "Developed IoT-enabled temperature monitoring & cold chain supply logistics management platform.",
    fullDesc:
      "Smart cold storage and fleet tracking software with automated temperature anomaly alerts and route optimization.",
    cardBg: "#0f172a",
    textColor: "#ffffff",
    subtextColor: "#94a3b8",
    arrowColor: "#ffffff",
    image: "/case study (10).png",
    impact: ["100% Temperature Tracking", "Zero Cargo Spoilage", "50+ Transport Fleets"],
  },
  {
    id: "rdftm-trust",
    title: "RDFTM Trust",
    category: "NON-PROFIT & COMMUNITY",
    desc: "Built transparent donation portal & community welfare tracking system for global outreach.",
    fullDesc:
      "Digital fundraising platform with real-time impact dashboards, instant tax receipt generation, and donor campaign tracking.",
    cardBg: "#f3e8ff",
    textColor: "#0f172a",
    subtextColor: "#475569",
    arrowColor: "#0f172a",
    image: "/case study (11).png",
    impact: ["1M+ Beneficiaries Reached", "Instant Tax Receipting", "100% Audit Transparency"],
  },
];

export default function CaseStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyItem | null>(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const marqueeCards = [...CASE_STUDIES, ...CASE_STUDIES];

  const handleMobileScroll = (direction: "prev" | "next") => {
    const nextIdx =
      direction === "prev"
        ? Math.max(0, mobileIdx - 1)
        : Math.min(CASE_STUDIES.length - 1, mobileIdx + 1);

    setMobileIdx(nextIdx);
    if (mobileTrackRef.current) {
      const cardWidth = mobileTrackRef.current.clientWidth * 0.85;
      mobileTrackRef.current.scrollTo({
        left: nextIdx * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="case-studies"
      className="py-20 sm:py-28 bg-[var(--bg-color)] border-b border-[var(--border-color)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3eeff] dark:bg-[#231b44] text-[#6d28d9] dark:text-[#c4b5fd] text-xs font-semibold mb-4 border border-[#e9d5ff]/60 dark:border-[#4c1d95]/40 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
          <span>PROVEN IMPACT &amp; CASE STUDIES</span>
        </div>

        <h2 className="font-heading font-black tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] leading-tight">
          Recent Client Work That{" "}
          <span className="text-[#101b96] dark:text-[#7d8eff] underline decoration-[#84cc16] decoration-wavy decoration-2 underline-offset-8">
            Delivers Results
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mt-4">
          Click any card to inspect full architecture blueprints, conversion strategies, and verified enterprise metrics.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* DESKTOP INFINITE CONTINUOUS MARQUEE CAROUSEL                         */}
      {/* ==================================================================== */}
      <div className="hidden md:flex w-full overflow-hidden relative items-center py-4">
        {/* Left & Right Edge Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex items-stretch gap-6 w-max animate-portfolio-marquee hover:[animation-play-state:paused] px-4">
          {marqueeCards.map((study, idx) => {
            const isBlue = idx % 2 === 1;

            return (
              <div
                key={`${study.id}-${idx}`}
                onClick={() => setSelectedStudy(study)}
                className={`w-[360px] lg:w-[390px] rounded-3xl p-6 flex flex-col justify-between flex-shrink-0 border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer group ${
                  isBlue
                    ? "bg-[#101b96] dark:bg-[#142366] border-[#253dca] text-white"
                    : "bg-white dark:bg-[#110e24] border-neutral-200/90 dark:border-neutral-800 text-neutral-900 dark:text-white"
                }`}
              >
                {/* Top Text Content */}
                <div className="mb-5">
                  <div className="flex justify-between items-start gap-3 mb-2.5">
                    <div>
                      <span
                        className={`text-[11px] font-extrabold tracking-wider uppercase ${
                          isBlue ? "text-[#93c5fd]" : "text-[#2563eb] dark:text-[#60a5fa]"
                        }`}
                      >
                        {study.category}
                      </span>
                      <h3
                        className={`text-2xl font-black tracking-tight leading-tight mt-1 ${
                          isBlue ? "text-white" : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {study.title}
                      </h3>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                        isBlue
                          ? "bg-white/20 text-white group-hover:bg-white group-hover:text-[#101b96]"
                          : "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white group-hover:bg-[#101b96] group-hover:text-white dark:group-hover:bg-[#7d8eff] dark:group-hover:text-black"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p
                    className={`text-xs sm:text-[13px] leading-relaxed line-clamp-3 font-medium ${
                      isBlue ? "text-blue-100/90" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {study.desc}
                  </p>
                </div>

                {/* Bottom Image Container (Clean finish, no extra content underneath) */}
                <div
                  className={`relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden shadow-sm border ${
                    isBlue ? "border-white/15" : "border-neutral-200/80 dark:border-neutral-800"
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover object-top group-hover:scale-106 transition-transform duration-500"
                    sizes="390px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* MOBILE TOUCH-SWIPE CAROUSEL (ALTERNATING WHITE & BLUE)              */}
      {/* ==================================================================== */}
      <div className="block md:hidden px-4">
        <div
          ref={mobileTrackRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-2 scrollbar-none"
        >
          {CASE_STUDIES.map((study, idx) => {
            const isBlue = idx % 2 === 1;

            return (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className={`w-[85vw] flex-shrink-0 snap-center rounded-3xl p-6 border shadow-md flex flex-col justify-between ${
                  isBlue
                    ? "bg-[#101b96] dark:bg-[#142366] border-[#253dca] text-white"
                    : "bg-white dark:bg-[#110e24] border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-3 mb-2.5">
                    <div>
                      <span
                        className={`text-[11px] font-extrabold tracking-wider uppercase ${
                          isBlue ? "text-[#93c5fd]" : "text-[#2563eb] dark:text-[#60a5fa]"
                        }`}
                      >
                        {study.category}
                      </span>
                      <h3
                        className={`text-xl font-black tracking-tight leading-tight mt-1 ${
                          isBlue ? "text-white" : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {study.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isBlue ? "bg-white/20 text-white" : "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isBlue ? "text-blue-100/90" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {study.desc}
                  </p>
                </div>

                <div
                  className={`relative w-full h-44 rounded-xl overflow-hidden shadow-sm border ${
                    isBlue ? "border-white/15" : "border-neutral-200 dark:border-neutral-800"
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={() => handleMobileScroll("prev")}
            disabled={mobileIdx === 0}
            className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center disabled:opacity-40"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono font-bold text-[var(--text-muted)]">
            {mobileIdx + 1} / {CASE_STUDIES.length}
          </span>
          <button
            type="button"
            onClick={() => handleMobileScroll("next")}
            disabled={mobileIdx === CASE_STUDIES.length - 1}
            className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center disabled:opacity-40"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* INTERACTIVE CASE STUDY DETAIL MODAL                                  */}
      {/* ==================================================================== */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="relative bg-white dark:bg-[#100d23] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-[var(--text-main)] shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-800 dark:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold tracking-widest text-[#2563eb] dark:text-[#60a5fa] uppercase block mb-1">
              {selectedStudy.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              {selectedStudy.title}
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6">
              {selectedStudy.fullDesc}
            </p>

            {/* Modal Image */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner mb-6 border border-neutral-200 dark:border-neutral-800">
              <Image
                src={selectedStudy.image}
                alt={selectedStudy.title}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Impact Metrics Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Verified Outcomes &amp; Performance Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedStudy.impact.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 flex items-center gap-2.5 text-xs font-bold text-[var(--text-main)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--border-color)]">
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-white/10 text-[var(--text-main)] hover:bg-neutral-200 transition-colors"
              >
                Close
              </button>
              <a
                href="/drift-audit"
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#101b96] hover:bg-[#0c1575] text-white transition-all shadow-sm"
              >
                Get Similar Results →
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes portfolioMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-portfolio-marquee {
          animation: portfolioMarquee 55s linear infinite;
        }
      `}</style>
    </section>
  );
}

