"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, ArrowRight } from "lucide-react";

export interface BenefitCard {
  number: string;
  title: string;
  desc: string;
  image: string;
  ctaHref: string;
}

// 1. EXACT BENEFIT CARDS FROM USER REFERENCE SCREENSHOT
const PARTNER_BENEFITS: BenefitCard[] = [
  {
    number: "01",
    title: "Hit sustainability targets",
    desc: "This is a complete, comprehensive service. We manage the whole process end-to-end to deliver a future-focused solution. From initial design to ongoing operation and customer service.",
    image: "/bdb38855-3775-42ba-8d23-f32c41f2e827.webp",
    ctaHref: "/drift-audit",
  },
  {
    number: "02",
    title: "Generate revenue",
    desc: "We understand this is a significant investment for you. Our expert team will go the extra mile to successfully monetise your parking infrastructure, giving visibility on how you achieve a return on your investment.",
    image: "/who we are.webp",
    ctaHref: "/drift-audit",
  },
  {
    number: "03",
    title: "Entice more customers",
    desc: "Our guidance around hardware choices ensures you only pay once for your investment. We will use all our experience to help you minimise your initial capital outlay. This includes working to secure government grant funding, bringing you closer to your long-term sustainable goals.",
    image: "/679b7310-0afd-42d1-953b-94209bbf2c6f.png",
    ctaHref: "/drift-audit",
  },
];

// 2. FLAGSHIP SERVICES CARDS (MATCHING SAME CLEAN SCREENSHOT LAYOUT)
const FLAGSHIP_SERVICES: BenefitCard[] = [
  {
    number: "01",
    title: "Performance Marketing & Paid Ads",
    desc: "We construct data-driven ad campaigns across Google Search, Meta (Instagram & Facebook), YouTube, and LinkedIn. Every dollar of ad spend is measured on one metric: net pipeline revenue.",
    image: "/bdb38855-3775-42ba-8d23-f32c41f2e827.webp",
    ctaHref: "/drift-audit",
  },
  {
    number: "02",
    title: "Conversion Rate Optimization (CRO)",
    desc: "We diagnose friction across your entire checkout and lead funnel. Through high-converting landing page engineering and multi-variant A/B copy tests, we turn more traffic into reliable revenue.",
    image: "/who we are.webp",
    ctaHref: "/drift-audit",
  },
  {
    number: "03",
    title: "Technical SEO & Organic Search Authority",
    desc: "Every customer who finds you on Google search is one you didn't pay a click for. Core Web Vitals audits, high-intent keyword capture, and authoritative backlink architectures for durable search dominance.",
    image: "/679b7310-0afd-42d1-953b-94209bbf2c6f.png",
    ctaHref: "/drift-audit",
  },
  {
    number: "04",
    title: "Brand Positioning & High-Velocity Creative Engine",
    desc: "Positioning, messaging, and viral short-form creative batches tested weekly. Deploy scroll-stopping hooks and high-converting copy that give customers an unmistakable reason to choose you.",
    image: "/158bb487-34c7-4e8d-a53f-b72845659451.webp",
    ctaHref: "/drift-audit",
  },
  {
    number: "05",
    title: "Autonomous AI & CRM Pipeline Velocity",
    desc: "Speed to lead is everything. We integrate autonomous AI lead-qualification workflows, instant WhatsApp/SMS notification triggers, and unified attribution dashboards for zero human lag.",
    image: "/case study (8).png",
    ctaHref: "/drift-audit",
  },
];

export default function ServicesStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<"benefits" | "services">("benefits");

  const activeCards = activeTab === "benefits" ? PARTNER_BENEFITS : FLAGSHIP_SERVICES;

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
              if (nextCardRect.top <= cardRect.top + 60) {
                const overlap = Math.max(0, Math.min(1, (cardRect.top + 60 - nextCardRect.top) / 260));
                const scale = 1 - overlap * 0.045;
                const brightness = 1 - overlap * 0.07;
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
  }, [activeTab]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-20 sm:py-28 bg-[var(--bg-color)] border-b border-[var(--border-color)] relative transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================================== */}
        {/* SECTION HEADER (EXACT 1:1 MATCH TO USER REFERENCE SCREENSHOT)        */}
        {/* ==================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="reveal-fade-right">
            <h2 className="font-heading font-black tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[46px] text-neutral-900 dark:text-white leading-[1.14]">
              Enjoy all these benefits<br className="hidden sm:inline" /> when you partner with us.
            </h2>

            {/* Subtle Tab Switcher: Partner Benefits (Reference) vs Flagship Services */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => setActiveTab("benefits")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === "benefits"
                    ? "bg-[#101b96] text-white shadow-xs"
                    : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Partner Benefits (3)
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === "services"
                    ? "bg-[#101b96] text-white shadow-xs"
                    : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Flagship Services (5)
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-end flex-shrink-0 reveal-fade-left delay-100">
            <Link
              href="/drift-audit"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-neutral-900 dark:text-white underline underline-offset-8 decoration-neutral-900 dark:decoration-white hover:text-[#101b96] dark:hover:text-[#7d8eff] hover:decoration-[#101b96] dark:hover:decoration-[#7d8eff] transition-all group"
            >
              <span>Ready to get started? Contact us</span>
            </Link>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* STACKING CARDS CONTAINER (MATCHING REFERENCE ROW LAYOUT & STACK DEPTH) */}
        {/* ==================================================================== */}
        <div className="relative flex flex-col gap-6 sm:gap-8 pb-12">
          {activeCards.map((item, idx) => {
            const topOffset = 100 + idx * 30;
            const delayClass = idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : idx === 2 ? "delay-300" : "delay-400";

            return (
              <div
                key={item.number + item.title}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                style={{
                  top: `calc(${topOffset}px)`,
                  zIndex: 10 + idx,
                }}
                className={`sticky rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c0a1d] border border-neutral-200/90 dark:border-neutral-800/90 p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-xl transition-all duration-300 group reveal-fade-up ${delayClass}`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 lg:gap-14">
                  
                  {/* Left: Thumbnail Image (Exact Reference Proportions & Radius) */}
                  <div className="relative w-full sm:w-48 md:w-56 lg:w-64 h-44 sm:h-36 md:h-40 rounded-2xl overflow-hidden shadow-xs border border-neutral-200/80 dark:border-white/10 flex-shrink-0 reveal-fade-right delay-150">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 260px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Middle: Step Number (Large, Clean Font) */}
                  <div className="flex-shrink-0 flex items-center md:px-2 reveal-scale-up delay-200">
                    <span className="font-mono font-bold text-3xl sm:text-4xl lg:text-[44px] text-neutral-900 dark:text-white tracking-tight">
                      {item.number}
                    </span>
                  </div>

                  {/* Right: Content (Clean Title & Description Matching Screenshot) */}
                  <div className="flex-1 flex flex-col justify-center reveal-fade-left delay-200">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-[28px] text-neutral-900 dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mt-2.5 max-w-2xl">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM LINK: VIEW COMPLETE 15 SERVICES ORGANIZED CATEGORY-WISE */}
        <div className="mt-8 text-center reveal-fade-up delay-200">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-2xs"
          >
            <span>Explore all 15 services organized by category</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
