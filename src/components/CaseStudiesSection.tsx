"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, ArrowRight, CheckCircle2, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  website: string;
  image: string;
  impact: string[];
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "anthlete-nutrition",
    number: "01",
    title: "Anthlete Nutrition",
    category: "Sports Nutrition & E-commerce",
    desc: "A sports nutrition e-commerce platform showcasing performance supplements, protein bars, hydration products and athlete-focused nutrition solutions, with a seamless shopping experience.",
    fullDesc:
      "A sports nutrition e-commerce platform showcasing performance supplements, protein bars, hydration products and athlete-focused nutrition solutions, engineered with a seamless shopping experience and high-converting checkout flows.",
    website: "https://anthletenutritions.com/",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    impact: ["High-Velocity Checkout", "Mobile-Optimized Store", "Sub-1s Page Load"],
  },
  {
    id: "cattorini",
    number: "02",
    title: "Cattorini",
    category: "Luxury Italian Footwear & Fashion",
    desc: "A premium e-commerce experience for an Italian footwear brand, showcasing handcrafted men's, women's and kids' collections inspired by heritage, craftsmanship and timeless design.",
    fullDesc:
      "A premium e-commerce experience for an Italian footwear brand, showcasing handcrafted men's, women's and kids' collections inspired by heritage, craftsmanship and timeless design with elevated editorial styling.",
    website: "https://cattoriniofficial.com/",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    impact: ["Luxury Editorial UX", "Global Multi-Currency", "Seamless Collection Filter"],
  },
  {
    id: "ayuronix",
    number: "03",
    title: "Ayuronix",
    category: "Ayurvedic Wellness & E-commerce",
    desc: "An online shopping platform for Himalayan Shilajit and Ayurvedic wellness products, bringing traditional ingredients and modern product presentation together.",
    fullDesc:
      "An online shopping platform for Himalayan Shilajit and Ayurvedic wellness products, bringing traditional ingredients and modern product presentation together with verified ingredient transparency and trust badges.",
    website: "https://ayuronix.com/",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    impact: ["Trust-Centered Funnels", "High-Converting Landers", "Automated Retention"],
  },
  {
    id: "naturalth-cosmetics",
    number: "04",
    title: "Naturalth Cosmetics",
    category: "Beauty, Skincare & E-commerce",
    desc: "A skincare e-commerce experience featuring nature-derived, peptide-powered skincare and innovative face ice therapy products, with a focus on product discovery and customer experience.",
    fullDesc:
      "A skincare e-commerce experience featuring nature-derived, peptide-powered skincare and innovative face ice therapy products, with a focus on intuitive product discovery and seamless customer experience.",
    website: "https://naturalthcosmetics.com/",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    impact: ["Interactive Routine Quiz", "Visual Discovery Flow", "Recurring Subscription"],
  },
  {
    id: "forestique",
    number: "05",
    title: "Forestique",
    category: "Skincare & Beauty E-commerce",
    desc: "A modern skincare storefront combining Ayurvedic ingredients with contemporary skincare science, featuring moisturizers, serums, sunscreens, cleansers and curated skincare kits.",
    fullDesc:
      "A modern skincare storefront combining Ayurvedic ingredients with contemporary skincare science, featuring moisturizers, serums, sunscreens, cleansers and curated skincare kits with frictionless mobile checkout.",
    website: "https://forestique.co.in/",
    image: "https://images.unsplash.com/photo-1608248597359-59754f9a0a4c?auto=format&fit=crop&w=800&q=80",
    impact: ["Custom Bundle Builder", "Blazing Fast Speed", "Social Proof Integration"],
  },
  {
    id: "prestige",
    number: "06",
    title: "Prestige",
    category: "Luxury Fashion & Lifestyle E-commerce",
    desc: "A premium fashion e-commerce platform showcasing footwear, clothing, jackets, caps and leather accessories across men's, women's and kids' collections.",
    fullDesc:
      "A premium fashion e-commerce platform showcasing footwear, clothing, jackets, caps and leather accessories across men's, women's and kids' collections with dynamic catalog filtering and VIP membership perks.",
    website: "https://prestige.co.ae/",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    impact: ["Middle East Regional Hub", "Omnichannel Inventory", "High Average Order Value"],
  },
  {
    id: "consciento",
    number: "07",
    title: "Consciento",
    category: "Organizational Psychology & Analytics",
    desc: "A professional digital platform presenting science-based organizational psychology, psychological diagnostics, employee wellbeing solutions and data-driven workplace analytics.",
    fullDesc:
      "A professional digital platform presenting science-based organizational psychology, psychological diagnostics, employee wellbeing solutions and data-driven workplace analytics with enterprise security.",
    website: "https://consciento.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    impact: ["Enterprise Lead Gen", "Interactive Diagnostic", "Data-First UX Architecture"],
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
      className="py-20 sm:py-28 bg-[#f8fafd] dark:bg-[#070914] border-y border-neutral-200/90 dark:border-white/10 relative overflow-hidden transition-colors duration-300"
    >
      {/* 1. Technical Grid Pattern Background with Vignette Mask */}
      <div
        className="case-studies-grid-pattern absolute inset-0 pointer-events-none select-none"
        style={{
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 100%)",
        }}
      />

      {/* 2. Ambient Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/8 to-cyan-400/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[450px] h-[300px] bg-indigo-500/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header (Matching Exact Copy Provided by User) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center reveal-fade-up">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3eeff] dark:bg-[#231b44] text-[#6d28d9] dark:text-[#c4b5fd] text-xs font-semibold mb-4 border border-[#e9d5ff]/60 dark:border-[#4c1d95]/40 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
          <span>OUR WORK · SELECTED PROJECTS</span>
        </div>

        <h2 className="font-heading font-black tracking-[-0.035em] text-3xl sm:text-4xl lg:text-[52px] text-[var(--text-main)] leading-[1.18] max-w-4xl mx-auto">
          Digital experiences built for{" "}
          <span className="relative inline-block text-[#101b96] dark:text-[#7d8eff]">
            ambitious brands
            <svg
              className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3 text-[#84cc16] pointer-events-none overflow-visible"
              viewBox="0 0 250 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 7C22 2 42 12 62 7C82 2 102 12 122 7C142 2 162 12 182 7C202 2 222 12 248 7"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          .
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl mx-auto mt-4 reveal-fade-up delay-100 leading-relaxed font-normal">
          From high-performance e-commerce stores to specialized business platforms, we design and develop digital experiences that help brands establish their presence, showcase their products and connect with their customers.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* DESKTOP INFINITE CONTINUOUS MARQUEE CAROUSEL                         */}
      {/* ==================================================================== */}
      <div className="hidden md:flex w-full overflow-hidden relative items-center py-4 reveal-fade-in delay-200">
        {/* Left & Right Edge Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#f8fafd] dark:from-[#070914] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#f8fafd] dark:from-[#070914] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex items-stretch gap-6 w-max animate-portfolio-marquee hover:[animation-play-state:paused] px-4">
          {marqueeCards.map((study, idx) => {
            const isBlue = idx % 2 === 1;

            return (
              <div
                key={`${study.id}-${idx}`}
                onClick={() => setSelectedStudy(study)}
                className={`w-[380px] lg:w-[410px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between flex-shrink-0 border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer group ${
                  isBlue
                    ? "bg-[#101b96] dark:bg-[#142366] border-[#253dca] text-white"
                    : "bg-white dark:bg-[#110e24] border-neutral-200/90 dark:border-neutral-800 text-neutral-900 dark:text-white"
                }`}
              >
                {/* Top Text Content */}
                <div className="mb-5">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold ${
                            isBlue ? "text-[#93c5fd]" : "text-[#2563eb] dark:text-[#60a5fa]"
                          }`}
                        >
                          {study.number}.
                        </span>
                        <span
                          className={`text-[11px] font-extrabold tracking-wider uppercase ${
                            isBlue ? "text-[#93c5fd]" : "text-[#2563eb] dark:text-[#60a5fa]"
                          }`}
                        >
                          {study.category}
                        </span>
                      </div>
                      <h3
                        className={`text-2xl font-black tracking-tight leading-tight mt-1.5 ${
                          isBlue ? "text-white" : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {study.title}
                      </h3>
                    </div>

                    <a
                      href={study.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Visit Website"
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                        isBlue
                          ? "bg-white/20 text-white hover:bg-white hover:text-[#101b96]"
                          : "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white hover:bg-[#101b96] hover:text-white dark:hover:bg-[#7d8eff] dark:hover:text-black"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <p
                    className={`text-xs sm:text-[13px] leading-relaxed line-clamp-3 font-normal mb-3 ${
                      isBlue ? "text-blue-100/90" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {study.desc}
                  </p>

                  <a
                    href={study.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold hover:underline ${
                      isBlue ? "text-[#93c5fd]" : "text-[#101b96] dark:text-[#7d8eff]"
                    }`}
                  >
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Bottom Image Container */}
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
                    sizes="410px"
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
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-xs font-mono font-bold ${
                            isBlue ? "text-[#93c5fd]" : "text-[#2563eb] dark:text-[#60a5fa]"
                          }`}
                        >
                          {study.number}.
                        </span>
                        <span
                          className={`text-[11px] font-extrabold tracking-wider uppercase ${
                            isBlue ? "text-[#93c5fd]" : "text-[#2563eb] dark:text-[#60a5fa]"
                          }`}
                        >
                          {study.category}
                        </span>
                      </div>
                      <h3
                        className={`text-xl font-black tracking-tight leading-tight mt-1 ${
                          isBlue ? "text-white" : "text-neutral-900 dark:text-white"
                        }`}
                      >
                        {study.title}
                      </h3>
                    </div>

                    <a
                      href={study.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isBlue ? "bg-white/20 text-white" : "bg-neutral-100 dark:bg-white/10 text-neutral-900 dark:text-white"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-3 ${
                      isBlue ? "text-blue-100/90" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {study.desc}
                  </p>

                  <a
                    href={study.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1 text-xs font-bold mb-3 ${
                      isBlue ? "text-[#93c5fd]" : "text-[#101b96] dark:text-[#7d8eff]"
                    }`}
                  >
                    Visit Website ↗
                  </a>
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
            aria-label="Previous project"
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
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* BOTTOM ACTION STRIP: "HAVE A PROJECT IN MIND?"                       */}
      {/* ==================================================================== */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white dark:bg-[#110e24] border border-neutral-200/90 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
              Have a project in mind?
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[var(--text-main)]">
              Let&apos;s turn your next big idea into a digital experience that makes an impact.
            </h3>
          </div>
          <a
            href="/drift-audit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-[#101b96] hover:bg-[#1a25a8] text-white shadow-lg shadow-blue-900/25 hover:scale-105 active:scale-95 transition-all flex-shrink-0"
          >
            Let&apos;s Build Something Great
            <ArrowRight className="w-4 h-4" />
          </a>
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
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-800 dark:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#2563eb] dark:text-[#60a5fa]">
                {selectedStudy.number}.
              </span>
              <span className="text-xs font-bold tracking-widest text-[#2563eb] dark:text-[#60a5fa] uppercase">
                {selectedStudy.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              {selectedStudy.title}
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6 font-normal">
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
                Key Deliverables &amp; Focus Areas
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

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--border-color)]">
              <a
                href={selectedStudy.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Visit Live Website <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedStudy(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-white/10 text-[var(--text-main)] hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="/drift-audit"
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#101b96] hover:bg-[#0c1575] text-white transition-all shadow-sm"
                >
                  Build Similar →
                </a>
              </div>
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
          animation: portfolioMarquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
}
