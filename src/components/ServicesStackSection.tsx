"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export interface ServiceStackItem {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  deliverables: string[];
  ctaLabel: string;
  ctaHref: string;
  accentColor: string;
}

const SERVICES_STACK_DATA: ServiceStackItem[] = [
  {
    number: "01",
    title: "Performance Marketing & Paid Ads",
    subtitle: "Turn cold traffic into high-intent buyers with verified ROAS",
    desc: "We construct data-driven ad campaigns across Google Search, Meta (Instagram & Facebook), YouTube, and LinkedIn. Every rupee or dollar of ad spend is measured on one metric: net pipeline revenue. No vanity clicks, no zombie campaigns.",
    image: "/bdb38855-3775-42ba-8d23-f32c41f2e827.webp",
    deliverables: ["Google Search & Shopping Ads", "Meta & Instagram Scaling", "Precision Retargeting", "ROAS Optimization"],
    ctaLabel: "Audit your ad accounts",
    ctaHref: "/drift-audit",
    accentColor: "#101b96",
  },
  {
    number: "02",
    title: "Conversion Rate Optimization (CRO)",
    subtitle: "A faster page with a clearer offer improves every channel at once",
    desc: "We diagnose friction across your entire checkout and lead funnel. Through high-converting landing page engineering, multi-variant A/B copy tests, and behavioral heatmaps, we turn more of your existing traffic into loyal paying customers.",
    image: "/who we are.webp",
    deliverables: ["High-Converting Landing Pages", "A/B Multi-variant Testing", "Checkout Funnel Audits", "Frictionless UI/UX"],
    ctaLabel: "Explore conversion systems",
    ctaHref: "/drift-audit",
    accentColor: "#2563eb",
  },
  {
    number: "03",
    title: "Technical SEO & Organic Authority",
    subtitle: "Capture commercial search intent and lower blended CAC",
    desc: "Every customer who finds you on Google search is one you didn't pay a click for. We combine technical Core Web Vitals audits, high-intent keyword capture, and authoritative backlink architectures to secure durable search dominance.",
    image: "/679b7310-0afd-42d1-953b-94209bbf2c6f.png",
    deliverables: ["Core Web Vitals Fixes", "Commercial Keyword Capture", "Programmatic SEO", "Authority Backlink Scaling"],
    ctaLabel: "Claim SEO ranking audit",
    ctaHref: "/drift-audit",
    accentColor: "#7c3aed",
  },
  {
    number: "04",
    title: "Brand Positioning & Content Engine",
    subtitle: "Give people an unmistakable reason to choose you",
    desc: "Positioning, messaging, and high-velocity creative batches tested every single month. We deploy viral short-form video reels, conversion copywriting, and static hooks designed to stop the scroll and build lasting brand authority.",
    image: "/158bb487-34c7-4e8d-a53f-b72845659451.webp",
    deliverables: ["Brand Messaging Guide", "Weekly Video Reels & Hooks", "Ad Copywriting", "Creative Winners Scaling"],
    ctaLabel: "Build your brand identity",
    ctaHref: "/drift-audit",
    accentColor: "#059669",
  },
  {
    number: "05",
    title: "Autonomous AI & CRM Tracking",
    subtitle: "Eliminate manual lead follow-up and close deals faster",
    desc: "Speed to lead is everything. We integrate autonomous AI lead-qualification bots, instant WhatsApp/SMS notification workflows, and unified attribution dashboards so your sales pipeline moves at lightning speed without human lag.",
    image: "/case study (8).png",
    deliverables: ["Autonomous AI Qualifiers", "Instant WhatsApp/SMS Loops", "Unified CRM Pipelines", "Revenue Attribution Dashboards"],
    ctaLabel: "Automate your sales pipeline",
    ctaHref: "/drift-audit",
    accentColor: "#d97706",
  },
];

export default function ServicesStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCards, setActiveCards] = useState<number[]>([]);

  // Smooth scroll depth: dynamically adjusts scale and brightness of pinned cards
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const containerTop = containerRef.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

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
        {/* SECTION HEADER (MATCHING USER REFERENCE DESIGN EXACTLY)              */}
        {/* ==================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
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
        {/* STACKING CARDS CONTAINER (PHYSICAL CARDS STACKING AS USER SCROLLS)   */}
        {/* ==================================================================== */}
        <div className="relative flex flex-col gap-8 sm:gap-10 pb-16">
          {SERVICES_STACK_DATA.map((service, index) => {
            // Precise sticky top offset for indexed stacking effect
            const topOffset = 100 + index * 26; // Desktop top offset
            const mobileTopOffset = 80 + index * 18; // Mobile top offset

            return (
              <div
                key={service.number}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{
                  top: `calc(${topOffset}px)`,
                  zIndex: 10 + index,
                }}
                className="sticky rounded-3xl sm:rounded-[36px] bg-white dark:bg-[#0c0a1d] border border-neutral-200/90 dark:border-neutral-800/90 p-6 sm:p-8 lg:p-10 shadow-[0_-12px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.65)] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
                  
                  {/* 1. LEFT: Visual Image Thumbnail (Matching Reference Image) */}
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

                  {/* 2. MIDDLE: Large Crisp Step Number (01, 02, 03...) */}
                  <div className="md:col-span-1.5 flex items-center md:justify-center">
                    <span className="font-mono font-black text-3xl sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white tracking-tight">
                      {service.number}
                    </span>
                  </div>

                  {/* 3. RIGHT: Title, Detailed Copy & Action Badges */}
                  <div className="md:col-span-6.5 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-neutral-900 dark:text-white tracking-tight leading-snug">
                          {service.title}
                        </h3>
                        
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
    </section>
  );
}

