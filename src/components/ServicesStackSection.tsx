"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Layers } from "lucide-react";
import { servicesData, CATEGORIES_LIST, ServiceItem } from "@/data/services";

export default function ServicesStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth scroll depth: dynamically adjusts scale and brightness of pinned cards
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;

          cardRefs.current.forEach((card, idx) => {
            if (!card) return;
            const nextCard = cardRefs.current[idx + 1];
            if (nextCard) {
              const nextCardRect = nextCard.getBoundingClientRect();
              const cardRect = card.getBoundingClientRect();

              // When the next card stacks over this card, scale it down slightly
              if (nextCardRect.top <= cardRect.top + 70) {
                const overlap = Math.max(0, Math.min(1, (cardRect.top + 70 - nextCardRect.top) / 300));
                const scale = 1 - overlap * 0.045;
                const brightness = 1 - overlap * 0.08;
                card.style.transform = `scale(${scale})`;
                card.style.filter = `brightness(${brightness})`;
              } else {
                card.style.transform = "scale(1)";
                card.style.filter = "brightness(1)";
              }
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-20 sm:py-28 bg-[var(--bg-color)] border-b border-[var(--border-color)] relative transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================================== */}
        {/* MAIN SECTION HEADER (MATCHING USER REFERENCE DESIGN)                 */}
        {/* ==================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-[#101b96] dark:text-[#93c5fd] border border-blue-200/60 dark:border-blue-800/60 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities · 5 Core Disciplines</span>
            </div>
            <h2 className="font-heading font-black tracking-[-0.035em] text-3xl sm:text-4xl lg:text-[46px] text-neutral-900 dark:text-white leading-[1.12]">
              Enjoy all these benefits<br className="hidden sm:inline" /> when you partner with us.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end justify-end flex-shrink-0">
            <Link
              href="/drift-audit"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-neutral-900 dark:text-white border-b-2 border-neutral-900 dark:border-white pb-0.5 hover:text-[#101b96] dark:hover:text-[#7d8eff] hover:border-[#101b96] dark:hover:border-[#7d8eff] transition-all group"
            >
              <span>Ready to get started? Contact us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* CATEGORY-WISE SECTIONS: CATEGORY HEADING -> CARDS -> NEXT CATEGORY   */}
        {/* ==================================================================== */}
        <div className="space-y-24 sm:space-y-32">
          {CATEGORIES_LIST.map((category, catIndex) => {
            const categoryServices = servicesData.filter((s) => s.categoryKey === category.key);
            if (categoryServices.length === 0) return null;

            return (
              <div
                key={category.key}
                id={`cat-${category.key}`}
                className="scroll-mt-28"
              >
                {/* 1. Category-Wise Heading Banner */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 sm:mb-12 border-b-2 border-neutral-200 dark:border-neutral-800">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="font-mono font-black text-xs sm:text-sm text-[#101b96] dark:text-[#7d8eff] tracking-wider">
                        ( 0{catIndex + 1} )
                      </span>
                      <span className="inline-block px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/80 text-[#101b96] dark:text-[#93c5fd] border border-blue-200/60 dark:border-blue-800/60">
                        {category.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white tracking-tight">
                      {category.label}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
                    {category.tagline}
                  </p>
                </div>

                {/* 2. Stacking Cards for this Category */}
                <div className="relative flex flex-col gap-8 sm:gap-10">
                  {categoryServices.map((service, cardIdx) => {
                    // Global index for ref tracking
                    const globalIdx = servicesData.findIndex((s) => s.id === service.id);
                    // Sticky top offset relative to header
                    const topOffset = 100 + cardIdx * 28;

                    return (
                      <div
                        key={service.id}
                        ref={(el) => {
                          cardRefs.current[globalIdx] = el;
                        }}
                        style={{
                          top: `calc(${topOffset}px)`,
                          zIndex: 10 + cardIdx,
                        }}
                        className="sticky rounded-3xl sm:rounded-[36px] bg-white dark:bg-[#0c0a1d] border border-neutral-200/90 dark:border-neutral-800/90 p-6 sm:p-8 lg:p-10 shadow-[0_-12px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.65)] hover:shadow-2xl transition-all duration-300 group"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
                          
                          {/* Left: Thumbnail Image */}
                          <div className="md:col-span-4 lg:col-span-3.5 relative w-full h-48 sm:h-56 lg:h-60 rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 dark:border-white/10 flex-shrink-0">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                              sizes="(max-width: 768px) 100vw, 360px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Middle: Step Number */}
                          <div className="md:col-span-1.5 flex items-center md:justify-center">
                            <span className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white tracking-tight">
                              {service.number}
                            </span>
                          </div>

                          {/* Right: Content & Action */}
                          <div className="md:col-span-6.5 lg:col-span-7 flex flex-col justify-between">
                            <div>
                              {/* Category Badge */}
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#101b96] dark:text-[#93c5fd]">
                                  {service.categoryLabel}
                                </span>
                              </div>

                              <div className="flex items-center justify-between gap-4">
                                <h4 className="font-heading font-black text-2xl sm:text-3xl text-neutral-900 dark:text-white tracking-tight leading-snug">
                                  {service.title}
                                </h4>
                                
                                <Link
                                  href={service.ctaHref}
                                  className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-[#101b96] hover:text-white dark:hover:bg-[#7d8eff] dark:hover:text-black flex items-center justify-center flex-shrink-0 text-neutral-700 dark:text-neutral-200 transition-all duration-300 group/btn"
                                  aria-label={`Learn more about ${service.title}`}
                                >
                                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </Link>
                              </div>

                              <p className="text-xs sm:text-sm font-semibold text-[#2563eb] dark:text-[#60a5fa] mt-1.5">
                                {service.subtitle}
                              </p>

                              <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mt-3 max-w-2xl">
                                {service.desc}
                              </p>
                            </div>

                            {/* Deliverable Tags Row */}
                            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-neutral-100 dark:border-white/5">
                              {service.deliverables.map((item, i) => (
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

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
