"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Maximize2, ChevronDown } from "lucide-react";
import { openCtaModal } from "@/components/CtaModal";

export interface ServicePreviewItem {
  number: string;
  title: string;
  shortTitle: string;
  desc: string;
  image: string;
  ctaHref: string;
  categoryTag: string;
}

// 1. Group 1: Growth & Performance Marketing Services (01 - 05)
export const GROWTH_SERVICES: ServicePreviewItem[] = [
  {
    number: "01",
    title: "Performance Marketing & Paid Ads",
    shortTitle: "Performance Marketing",
    desc: "We construct data-driven ad campaigns across Google Search, Meta (Instagram & Facebook), YouTube, and LinkedIn. Every rupee of ad spend is measured on net pipeline revenue.",
    image: "/services/e5506b99-32d2-4538-bcf5-c1cec3ff9629.webp",
    ctaHref: "/drift-audit",
    categoryTag: "PAID MEDIA & PPC",
  },
  {
    number: "02",
    title: "Conversion Rate Optimization (CRO)",
    shortTitle: "Conversion Optimization",
    desc: "We diagnose friction across your entire checkout and lead funnel. Through high-converting landing page engineering and multi-variant A/B copy tests, we turn more traffic into reliable revenue.",
    image: "/services/cro converstion rate optimization.webp",
    ctaHref: "/drift-audit",
    categoryTag: "CRO & FUNNELS",
  },
  {
    number: "03",
    title: "Technical SEO & Search Authority",
    shortTitle: "Technical SEO",
    desc: "Every customer who finds you on Google search is one you didn't pay a click for. Core Web Vitals audits, high-intent keyword capture, and authoritative backlink architectures for durable search dominance.",
    image: "/services/seo.webp",
    ctaHref: "/drift-audit",
    categoryTag: "ORGANIC SEARCH",
  },
  {
    number: "04",
    title: "Brand Positioning & Creative Engine",
    shortTitle: "Brand & Creative",
    desc: "Positioning, messaging, and viral short-form creative batches tested weekly. Deploy scroll-stopping hooks and high-converting copy that give customers an unmistakable reason to choose you.",
    image: "/services/brand postitoning.webp",
    ctaHref: "/drift-audit",
    categoryTag: "CREATIVE & BRAND",
  },
  {
    number: "05",
    title: "Autonomous AI & CRM Pipeline Velocity",
    shortTitle: "Autonomous AI & CRM",
    desc: "Speed to lead is everything. We integrate autonomous AI lead-qualification workflows, instant WhatsApp/SMS notification triggers, and unified attribution dashboards for zero human lag.",
    image: "/services/autonomus ai and crm.webp",
    ctaHref: "/drift-audit",
    categoryTag: "AI & AUTOMATION",
  },
];

// Alias for backwards compatibility
export const FLAGSHIP_SERVICES = GROWTH_SERVICES;

// 2. Group 2: Development & Design Services (06 - 09)
export const DEV_DESIGN_SERVICES: ServicePreviewItem[] = [
  {
    number: "06",
    title: "Full-Stack Web & Next.js Applications",
    shortTitle: "Web Development",
    desc: "High-velocity web platforms engineered with Next.js, React, and TypeScript. Sub-second load speeds, SEO-optimized SSR/SSG rendering, and modular component architectures built to scale.",
    image: "/services/web developement.webp",
    ctaHref: "/drift-audit",
    categoryTag: "WEB ENGINEERING",
  },
  {
    number: "07",
    title: "UI/UX Product Design & Systems",
    shortTitle: "UI/UX Design",
    desc: "Pixel-perfect user interfaces, interactive Figma prototypes, and cohesive multi-brand design systems. We turn intricate user journeys into fluid, delightful digital interactions that maximize retention.",
    image: "/services/ui ux.webp",
    ctaHref: "/drift-audit",
    categoryTag: "UI/UX PRODUCT DESIGN",
  },
  {
    number: "08",
    title: "AEO & GEO – AI Search Visibility",
    shortTitle: "AEO & GEO Search",
    desc: "Dominate Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). We optimize entity schemas, brand knowledge graphs, and authoritative citations across OpenAI Search, Perplexity, and Google AI Overviews.",
    image: "/services/seo.webp",
    ctaHref: "/drift-audit",
    categoryTag: "AI SEARCH & GEO",
  },
  {
    number: "09",
    title: "E-Commerce & Digital Storefronts",
    shortTitle: "E-Commerce Architecture",
    desc: "Custom headless Shopify and Next.js commerce stores. Instant search indexing, 1-click frictionless checkout, automated inventory sync, and multi-currency global payment gateways.",
    image: "/services/ecommere.webp",
    ctaHref: "/drift-audit",
    categoryTag: "HEADLESS COMMERCE",
  },
];

export default function ServicesStackSection() {
  const [activeGrowthIndex, setActiveGrowthIndex] = useState(0);
  const [activeDevIndex, setActiveDevIndex] = useState(0);

  const activeGrowth = GROWTH_SERVICES[activeGrowthIndex];
  const activeDev = DEV_DESIGN_SERVICES[activeDevIndex];

  const sectionRef = useRef<HTMLElement>(null);
  const orbScrollRef = useRef<HTMLDivElement>(null);
  const orbTiltRef = useRef<HTMLDivElement>(null);

  // Sticky scroll fade-in & sunset parallax animation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !orbScrollRef.current) {
            ticking = false;
            return;
          }
          const rect = sectionRef.current.getBoundingClientRect();
          const winHeight = window.innerHeight;

          const isMobile = winHeight < 800 || window.innerWidth < 768;
          const entryDistance = winHeight - rect.top;
          const entryProgress = Math.min(1, Math.max(0, entryDistance / (winHeight * 0.75)));
          const fadeIn = Math.min(1, Math.max(0, Math.pow(entryProgress, 1.35)));
          const scale = (isMobile ? 0.92 : 0.85) + entryProgress * (isMobile ? 0.12 : 0.18);

          const exitTrigger = rect.bottom;
          const sunsetRange = winHeight * 0.9;
          const sunsetProgress = Math.min(1, Math.max(0, (winHeight - exitTrigger) / sunsetRange));
          const fadeOut = 1 - Math.min(1, Math.max(0, Math.pow(sunsetProgress, 1.4)));
          const finalOpacity = Math.max(0, Math.min(1, fadeIn * fadeOut));

          const parallaxDrift = -Math.round(entryProgress * (isMobile ? 24 : 45)) + Math.round(sunsetProgress * (isMobile ? 35 : 65));

          orbScrollRef.current.style.opacity = `${finalOpacity}`;
          orbScrollRef.current.style.transform = `translate3d(0, ${parallaxDrift}px, 0) scale(${Math.min(1.06, scale)})`;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D Gyroscope/Mouse subtle tilt for the celestial core
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbTiltRef.current || window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;
    orbTiltRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!orbTiltRef.current) return;
    orbTiltRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 w-full min-h-screen bg-transparent transition-colors duration-500 overflow-hidden"
    >
      {/* ==================================================================== */}
      {/* 1. STICKY CELESTIAL STAGE BACKGROUND                                  */}
      {/* ==================================================================== */}
      <div
        className="sticky top-0 left-0 right-0 z-0 h-[65vh] sm:h-[80vh] md:h-[90vh] lg:h-[95vh] w-full flex items-center justify-center overflow-hidden pointer-events-none select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated Parallax Scaling Wrapper */}
        <div
          ref={orbScrollRef}
          className="relative w-full h-full flex items-center justify-center pointer-events-auto will-change-transform"
          style={{ opacity: 0, transform: "scale(0.85)" }}
        >
          {/* Luminous Core Glow Aura */}
          <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] rounded-full bg-radial from-blue-500/20 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

          {/* Ambient Brand Orbit Rings */}
          <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] rounded-full border border-blue-500/15 pointer-events-none -rotate-6 animate-pulse" />
          <div className="absolute w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] md:w-[720px] md:h-[720px] rounded-full border border-indigo-400/10 pointer-events-none rotate-12" />

          {/* Giant Watermark Typography in Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
            <span className="font-heading font-black text-[13vw] sm:text-[14vw] tracking-[-0.05em] uppercase text-slate-900/[0.035] dark:text-white/[0.03] whitespace-nowrap">
              ORBIVERSE
            </span>
          </div>

          {/* Inner 3D Tilt Container */}
          <div
            ref={orbTiltRef}
            className="relative z-10 w-[330px] h-[330px] xs:w-[360px] xs:h-[360px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] lg:w-[620px] lg:h-[620px] max-w-[88vw] max-h-[88vw] will-change-transform transition-transform duration-150 ease-out animate-orb-float"
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.4) 76%, rgba(0,0,0,0.08) 84%, transparent 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.4) 76%, rgba(0,0,0,0.08) 84%, transparent 88%, transparent 100%)",
            }}
          >
            <Image
              src="/5f3930af-e5d2-4427-ac77-bc6c089cfa0c.png"
              alt="Orbiverse 3D Core"
              fill
              className="object-contain object-top drop-shadow-[0_25px_60px_rgba(37,99,235,0.25)] select-none"
              sizes="(max-width: 640px) 360px, (max-width: 1024px) 560px, 620px"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. SERVICES CONTENT CURTAIN                                          */}
      {/* ==================================================================== */}
      <div className="relative z-20 bg-transparent -mt-6 sm:-mt-10 lg:mt-0 pt-0 sm:pt-8 lg:pt-16 pb-24 sm:pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Main Header: Contact Now CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-16 pb-6 sm:pb-8 border-b border-neutral-200 dark:border-white/10">
            <div className="reveal-fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#101b96] border border-blue-200/60 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50 mb-3">
                GROWTH &amp; PERFORMANCE MARKETING
              </div>
              <h2 className="font-heading font-black tracking-[-0.03em] text-3xl sm:text-4xl lg:text-[46px] text-neutral-950 dark:text-white leading-[1.14]">
                High-Impact Services Built for Scale.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mt-2.5 leading-relaxed font-normal">
                Full-funnel growth architecture engineered to move your business from drift into high-velocity orbit.
              </p>
            </div>

            <div className="flex-shrink-0 reveal-fade-left delay-100">
              <button
                type="button"
                onClick={() => openCtaModal("ServicesHeader")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-neutral-950 text-white hover:bg-neutral-800 active:scale-95 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)] group cursor-pointer"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ================================================================ */}
          {/* BLOCK 1: GROWTH SERVICES (01-05)                                 */}
          {/* Mobile: Card immediately below active service name                */}
          {/* Desktop: List on Left, Sticky Card on Right                      */}
          {/* ================================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Service List: on Mobile, includes inline card immediately below name */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200 dark:divide-white/10 reveal-fade-right delay-100">
              {GROWTH_SERVICES.map((item, index) => {
                const isActive = activeGrowthIndex === index;
                return (
                  <div
                    key={item.number}
                    className="py-4 sm:py-6 transition-all duration-300"
                  >
                    {/* Header Row: Number + Title + Mobile Toggle Icon */}
                    <div
                      onMouseEnter={() => setActiveGrowthIndex(index)}
                      onClick={() => setActiveGrowthIndex(index)}
                      className={`group flex items-center justify-between gap-4 sm:gap-10 cursor-pointer select-none transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                      }`}
                    >
                      <div className="flex items-baseline gap-4 sm:gap-8">
                        {/* Number 01..05 */}
                        <span
                          className={`font-mono text-xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 w-8 sm:w-12 flex-shrink-0 ${
                            isActive
                              ? "text-[#101b96] dark:text-[#60a5fa]"
                              : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
                          }`}
                        >
                          {item.number}
                        </span>

                        {/* Title */}
                        <span
                          className={`text-xl sm:text-2xl lg:text-[32px] tracking-tight transition-all duration-300 leading-snug ${
                            isActive
                              ? "text-neutral-950 font-extrabold translate-x-1 sm:translate-x-2 dark:text-white"
                              : "text-neutral-600 font-medium group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Mobile Chevron Toggle Indicator */}
                      <span className="lg:hidden text-neutral-400 flex-shrink-0 transition-transform duration-300">
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-180 text-[#101b96]" : ""}`} />
                      </span>
                    </div>

                    {/* MOBILE INLINE CARD: Rendered IMMEDIATELY below service name when active */}
                    <div
                      className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "max-h-[650px] opacity-100 mt-4 pt-2"
                          : "max-h-0 opacity-0 mt-0 pointer-events-none"
                      }`}
                    >
                      <div className="rounded-2xl bg-white dark:bg-[#0a0d1e] border border-neutral-200 dark:border-white/15 p-4 shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
                        {/* Image: 3:2 High-Def Landscape */}
                        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-xs border border-neutral-200/80 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 400px"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                          {/* Corner Expand Action Badge */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openCtaModal(`Service_${item.shortTitle}`);
                            }}
                            className="absolute bottom-2.5 right-2.5 w-10 h-10 rounded-xl bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white shadow-md border border-white/20 active:scale-95 transition-all"
                            title={`Explore ${item.title}`}
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Description */}
                        <p className="mt-3.5 text-xs xs:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                          {item.desc}
                        </p>

                        {/* Button Row */}
                        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openCtaModal(`Service_${item.shortTitle}`);
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white font-semibold text-xs active:scale-95 transition-all shadow-sm"
                          >
                            <span>Explore {item.shortTitle}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <span className="text-[10px] font-mono font-bold text-[#101b96] dark:text-[#93c5fd]">
                            {item.categoryTag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Only: Sticky Side Preview Card (Hidden on Mobile so it doesn't appear at bottom) */}
            <div className="hidden lg:block lg:col-span-5 reveal-fade-left delay-200">
              <div className="sticky top-28 rounded-3xl bg-white dark:bg-[#0a0d1e]/85 backdrop-blur-xl border border-neutral-200 dark:border-white/15 p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500">
                
                {/* Image Container with Rounded Corners & Expand Badge */}
                <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 group/img">
                  <Image
                    key={activeGrowth.image}
                    src={activeGrowth.image}
                    alt={activeGrowth.title}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out group-hover/img:scale-105"
                    sizes="480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Expand Action Badge */}
                  <button
                    type="button"
                    onClick={() => openCtaModal(`Service_${activeGrowth.shortTitle}`)}
                    className="absolute bottom-3.5 right-3.5 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20 hover:scale-105 active:scale-95 transition-all group/badge cursor-pointer"
                    title={`Explore ${activeGrowth.title}`}
                  >
                    <Maximize2 className="w-5 h-5 group-hover/badge:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Supporting Description Below Image */}
                <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal min-h-[4.5rem]">
                  {activeGrowth.desc}
                </p>

                {/* Action Pill Button Below Description */}
                <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => openCtaModal(`Service_${activeGrowth.shortTitle}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-sm group/btn cursor-pointer"
                  >
                    <span>Explore {activeGrowth.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs font-mono font-semibold text-[#101b96] dark:text-[#93c5fd]">
                    {activeGrowth.categoryTag}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* ================================================================ */}
          {/* CATEGORY DIVIDER & SUB-HEADER: DEVELOPMENT & PRODUCT DESIGN       */}
          {/* ================================================================ */}
          <div className="mt-20 sm:mt-28 mb-10 sm:mb-16 pt-12 sm:pt-16 border-t border-neutral-200 dark:border-white/10 reveal-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#101b96] border border-blue-200/60 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50 mb-3">
              DEVELOPMENT &amp; PRODUCT DESIGN
            </div>
            <h3 className="font-heading font-black tracking-[-0.03em] text-2xl sm:text-3xl lg:text-[40px] text-neutral-950 dark:text-white leading-[1.18]">
              Engineered for Velocity. Designed for Scale.
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-2.5 leading-relaxed font-normal">
              Modern Next.js web platforms, native mobile applications, intuitive UI/UX design systems, and resilient cloud architectures built to accelerate your product roadmap.
            </p>
          </div>

          {/* ================================================================ */}
          {/* BLOCK 2: DEVELOPMENT & DESIGN SERVICES (06-10)                   */}
          {/* Mobile: Card immediately below active service name                */}
          {/* Desktop: Image Preview Card on LEFT, Content / List on RIGHT      */}
          {/* ================================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Desktop Only: Sticky Preview Card on LEFT (Hidden on Mobile) */}
            <div className="hidden lg:block lg:col-span-5 reveal-fade-right delay-200">
              <div className="sticky top-28 rounded-3xl bg-white dark:bg-[#0a0d1e]/85 backdrop-blur-xl border border-neutral-200 dark:border-white/15 p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500">
                
                {/* Image Container with Rounded Corners & Expand Badge */}
                <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 group/img">
                  <Image
                    key={activeDev.image}
                    src={activeDev.image}
                    alt={activeDev.title}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out group-hover/img:scale-105"
                    sizes="480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Expand Action Badge */}
                  <button
                    type="button"
                    onClick={() => openCtaModal(`Service_${activeDev.shortTitle}`)}
                    className="absolute bottom-3.5 right-3.5 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20 hover:scale-105 active:scale-95 transition-all group/badge cursor-pointer"
                    title={`Explore ${activeDev.title}`}
                  >
                    <Maximize2 className="w-5 h-5 group-hover/badge:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Supporting Description Below Image */}
                <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal min-h-[4.5rem]">
                  {activeDev.desc}
                </p>

                {/* Action Pill Button Below Description */}
                <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => openCtaModal(`Service_${activeDev.shortTitle}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-sm group/btn cursor-pointer"
                  >
                    <span>Explore {activeDev.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-xs font-mono font-semibold text-[#101b96] dark:text-[#93c5fd]">
                    {activeDev.categoryTag}
                  </span>
                </div>

              </div>
            </div>

            {/* Service List: on Mobile, includes inline card immediately below name */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200 dark:divide-white/10 reveal-fade-left delay-100">
              {DEV_DESIGN_SERVICES.map((item, index) => {
                const isActive = activeDevIndex === index;
                return (
                  <div
                    key={item.number}
                    className="py-4 sm:py-6 transition-all duration-300"
                  >
                    {/* Header Row: Number + Title + Mobile Toggle Icon */}
                    <div
                      onMouseEnter={() => setActiveDevIndex(index)}
                      onClick={() => setActiveDevIndex(index)}
                      className={`group flex items-center justify-between gap-4 sm:gap-10 cursor-pointer select-none transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                      }`}
                    >
                      <div className="flex items-baseline gap-4 sm:gap-8">
                        {/* Number 06..10 */}
                        <span
                          className={`font-mono text-xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 w-8 sm:w-12 flex-shrink-0 ${
                            isActive
                              ? "text-[#101b96] dark:text-[#60a5fa]"
                              : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
                          }`}
                        >
                          {item.number}
                        </span>

                        {/* Title */}
                        <span
                          className={`text-xl sm:text-2xl lg:text-[32px] tracking-tight transition-all duration-300 leading-snug ${
                            isActive
                              ? "text-neutral-950 font-extrabold translate-x-1 sm:translate-x-2 dark:text-white"
                              : "text-neutral-600 font-medium group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Mobile Chevron Toggle Indicator */}
                      <span className="lg:hidden text-neutral-400 flex-shrink-0 transition-transform duration-300">
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-180 text-[#101b96]" : ""}`} />
                      </span>
                    </div>

                    {/* MOBILE INLINE CARD: Rendered IMMEDIATELY below service name when active */}
                    <div
                      className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "max-h-[650px] opacity-100 mt-4 pt-2"
                          : "max-h-0 opacity-0 mt-0 pointer-events-none"
                      }`}
                    >
                      <div className="rounded-2xl bg-white dark:bg-[#0a0d1e] border border-neutral-200 dark:border-white/15 p-4 shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
                        {/* Image: 3:2 High-Def Landscape */}
                        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-xs border border-neutral-200/80 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 400px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                          {/* Corner Expand Action Badge */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openCtaModal(`Service_${item.shortTitle}`);
                            }}
                            className="absolute bottom-2.5 right-2.5 w-10 h-10 rounded-xl bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white shadow-md border border-white/20 active:scale-95 transition-all"
                            title={`Explore ${item.title}`}
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Description */}
                        <p className="mt-3.5 text-xs xs:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                          {item.desc}
                        </p>

                        {/* Button Row */}
                        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openCtaModal(`Service_${item.shortTitle}`);
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white font-semibold text-xs active:scale-95 transition-all shadow-sm"
                          >
                            <span>Explore {item.shortTitle}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <span className="text-[10px] font-mono font-bold text-[#101b96] dark:text-[#93c5fd]">
                            {item.categoryTag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
