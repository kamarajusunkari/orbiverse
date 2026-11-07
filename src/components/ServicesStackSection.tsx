"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";

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
    desc: "We construct data-driven ad campaigns across Google Search, Meta (Instagram & Facebook), YouTube, and LinkedIn. Every dollar of ad spend is measured on net pipeline revenue.",
    image: "/8d0b0df3-565f-498c-98b5-f5cd61d4d7f9.webp",
    ctaHref: "/drift-audit",
    categoryTag: "PAID MEDIA & PPC",
  },
  {
    number: "02",
    title: "Conversion Rate Optimization (CRO)",
    shortTitle: "Conversion Optimization",
    desc: "We diagnose friction across your entire checkout and lead funnel. Through high-converting landing page engineering and multi-variant A/B copy tests, we turn more traffic into reliable revenue.",
    image: "/who we are.webp",
    ctaHref: "/drift-audit",
    categoryTag: "CRO & FUNNELS",
  },
  {
    number: "03",
    title: "Technical SEO & Search Authority",
    shortTitle: "Technical SEO",
    desc: "Every customer who finds you on Google search is one you didn't pay a click for. Core Web Vitals audits, high-intent keyword capture, and authoritative backlink architectures for durable search dominance.",
    image: "/73ecc189-9bab-4cb0-831a-3a0a158d6333.webp",
    ctaHref: "/drift-audit",
    categoryTag: "ORGANIC SEARCH",
  },
  {
    number: "04",
    title: "Brand Positioning & Creative Engine",
    shortTitle: "Brand & Creative",
    desc: "Positioning, messaging, and viral short-form creative batches tested weekly. Deploy scroll-stopping hooks and high-converting copy that give customers an unmistakable reason to choose you.",
    image: "/wwe.webp",
    ctaHref: "/drift-audit",
    categoryTag: "CREATIVE & BRAND",
  },
  {
    number: "05",
    title: "Autonomous AI & CRM Pipeline Velocity",
    shortTitle: "Autonomous AI & CRM",
    desc: "Speed to lead is everything. We integrate autonomous AI lead-qualification workflows, instant WhatsApp/SMS notification triggers, and unified attribution dashboards for zero human lag.",
    image: "/2d9b0edc-3651-4bae-b2e7-1d024722e466.webp",
    ctaHref: "/drift-audit",
    categoryTag: "AI & AUTOMATION",
  },
];

// Alias for backwards compatibility
export const FLAGSHIP_SERVICES = GROWTH_SERVICES;

// 2. Group 2: Development & Design Services (06 - 10)
export const DEV_DESIGN_SERVICES: ServicePreviewItem[] = [
  {
    number: "06",
    title: "Full-Stack Web & Next.js Applications",
    shortTitle: "Web Development",
    desc: "High-velocity web platforms engineered with Next.js, React, and TypeScript. Sub-second load speeds, SEO-optimized SSR/SSG rendering, and modular component architectures built to scale.",
    image: "/h1_1.webp",
    ctaHref: "/drift-audit",
    categoryTag: "WEB ENGINEERING",
  },
  {
    number: "07",
    title: "UI/UX Product Design & Systems",
    shortTitle: "UI/UX Design",
    desc: "Pixel-perfect user interfaces, interactive Figma prototypes, and cohesive multi-brand design systems. We turn intricate user journeys into fluid, delightful digital interactions that maximize retention.",
    image: "/5f298328-cb31-43f6-b842-32ea97f0a39d.jpg",
    ctaHref: "/drift-audit",
    categoryTag: "UI/UX PRODUCT DESIGN",
  },
  {
    number: "08",
    title: "Mobile Applications (iOS & Android)",
    shortTitle: "Mobile App Development",
    desc: "Native and cross-platform mobile apps engineered with React Native and Flutter. 60 FPS fluid gesture animations, offline-first data sync, biometric security, and frictionless app store deployments.",
    image: "/73ecc189-9bab-4cb0-831a-3a0a158d6333.webp",
    ctaHref: "/drift-audit",
    categoryTag: "MOBILE APPS",
  },
  {
    number: "09",
    title: "E-Commerce & Digital Storefronts",
    shortTitle: "E-Commerce Architecture",
    desc: "Custom headless Shopify and Next.js commerce stores. Instant search indexing, 1-click frictionless checkout, automated inventory sync, and multi-currency global payment gateways.",
    image: "/8d0b0df3-565f-498c-98b5-f5cd61d4d7f9.webp",
    ctaHref: "/drift-audit",
    categoryTag: "HEADLESS COMMERCE",
  },
  {
    number: "10",
    title: "Enterprise Cloud, DevOps & Microservices",
    shortTitle: "Cloud & DevOps",
    desc: "Multi-region AWS and Google Cloud infrastructure, Docker container orchestration, automated GitHub Actions CI/CD pipelines, and hardened GraphQL/REST APIs ensuring 99.99% uptime.",
    image: "/2d9b0edc-3651-4bae-b2e7-1d024722e466.webp",
    ctaHref: "/drift-audit",
    categoryTag: "CLOUD & DEVOPS",
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

  // 1. STICKY SCROLL FADE-IN & SUNSET PARALLAX ANIMATION (HERO FADE-IN -> SUNSET FADE-OUT)
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

          // When section begins entering viewport: slow fade-in & scale up (like hero)
          const isMobile = winHeight < 800 || window.innerWidth < 768;
          const entryDistance = winHeight - rect.top;
          const entryProgress = Math.min(1, Math.max(0, entryDistance / (winHeight * 0.75)));
          const fadeIn = Math.min(1, Math.max(0, Math.pow(entryProgress, 1.35)));
          const scale = (isMobile ? 0.92 : 0.85) + entryProgress * (isMobile ? 0.12 : 0.18);

          // As user scrolls further down into content: slow sunset fade-out
          const scrollThrough = Math.max(0, -rect.top);
          const sunsetDivisor = isMobile ? (winHeight * 0.42) : (winHeight * 0.65);
          const sunsetProgress = Math.min(1, Math.max(0, scrollThrough / sunsetDivisor));
          const sunsetOpacity = 1 - Math.pow(sunsetProgress, 1.4);

          // Combined opacity: fades in like hero, then softly dissolves like sunset as content approaches
          const finalOpacity = Math.max(0, fadeIn * sunsetOpacity);
          const translateY = -sunsetProgress * (isMobile ? 35 : 65);

          orbScrollRef.current.style.opacity = `${finalOpacity}`;
          orbScrollRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. INTERACTIVE 3D PERSPECTIVE TILT
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current || !orbTiltRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotX = -y * 12;
    const rotY = x * 12;
    orbTiltRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!orbTiltRef.current) return;
    orbTiltRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 min-h-fit bg-white text-neutral-900 border-b border-neutral-200 overflow-visible transition-colors duration-300 dark:bg-[#070612] dark:text-white dark:border-white/10 pt-6 sm:pt-10 lg:pt-0"
    >
      {/* ==================================================================== */}
      {/* 1. STICKY SCREEN STAGE: FIRST IMAGE FADES IN & SUNSET FADES OUT     */}
      {/* Asset: /5f3930af-e5d2-4427-ac77-bc6c089cfa0c.png                    */}
      {/* ==================================================================== */}
      <div className="sticky top-0 z-10 w-full h-[52vh] min-h-[360px] sm:h-[64vh] sm:min-h-[440px] lg:h-[100dvh] flex flex-col items-center justify-center pt-4 sm:pt-6 lg:pt-0 pointer-events-none select-none overflow-visible">
        
        {/* Outer Scroll Container: Controls Slow Fade-in, Sunset Fade-out & Parallax Scaling */}
        <div
          ref={orbScrollRef}
          className="relative flex items-center justify-center will-change-[transform,opacity] transition-all duration-75 ease-out"
          style={{ opacity: 0, transform: "scale(0.85)" }}
        >
          {/* Luminous Pulsing Electric Blue Aura Behind Glowing Orbiverse Cube */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[620px] h-[340px] sm:h-[500px] md:h-[620px] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/25 to-indigo-500/15 blur-[70px] sm:blur-[120px] pointer-events-none animate-pulse duration-1000" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] rounded-full bg-cyan-400/20 blur-[45px] pointer-events-none" />

          {/* Inner 3D Tilt Container: Hand Softly Merges at Wrist into White Background */}
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
          
          {/* Section Main Header: Contact Now CTA replaces Explore All 15 Services */}
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
              <Link
                href="/drift-audit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-neutral-950 text-white hover:bg-neutral-800 active:scale-95 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 group"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ================================================================ */}
          {/* BLOCK 1: GROWTH SERVICES (01-05)                                 */}
          {/* Layout: Content / List on LEFT, Image Preview Card on RIGHT      */}
          {/* ================================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Numbered Service List (01-05) */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200 dark:divide-white/10 reveal-fade-right delay-100">
              {GROWTH_SERVICES.map((item, index) => {
                const isActive = activeGrowthIndex === index;
                return (
                  <div
                    key={item.number}
                    onMouseEnter={() => setActiveGrowthIndex(index)}
                    onClick={() => setActiveGrowthIndex(index)}
                    className={`group flex items-baseline gap-6 sm:gap-10 py-5 sm:py-6 cursor-pointer transition-all duration-300 select-none ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-75"
                    }`}
                  >
                    {/* Number 01..05 */}
                    <span
                      className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 w-10 sm:w-12 flex-shrink-0 ${
                        isActive
                          ? "text-[#101b96] dark:text-[#60a5fa]"
                          : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Title */}
                    <span
                      className={`text-2xl sm:text-3xl lg:text-[34px] tracking-tight transition-all duration-300 leading-snug ${
                        isActive
                          ? "text-neutral-950 font-extrabold translate-x-2 dark:text-white"
                          : "text-neutral-500 font-medium group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Active Preview Card */}
            <div className="lg:col-span-5 reveal-fade-left delay-200">
              <div className="lg:sticky lg:top-28 rounded-3xl bg-white dark:bg-[#0a0d1e]/85 backdrop-blur-xl border border-neutral-200 dark:border-white/15 p-5 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500">
                
                {/* Image Container with Rounded Corners & Expand Badge */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 group/img">
                  <Image
                    key={activeGrowth.image}
                    src={activeGrowth.image}
                    alt={activeGrowth.title}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out group-hover/img:scale-105"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Expand Action Badge */}
                  <Link
                    href={activeGrowth.ctaHref}
                    className="absolute bottom-3.5 right-3.5 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20 hover:scale-105 active:scale-95 transition-all group/badge"
                    title={`Explore ${activeGrowth.title}`}
                  >
                    <Maximize2 className="w-5 h-5 group-hover/badge:scale-110 transition-transform" />
                  </Link>
                </div>

                {/* Supporting Description Below Image */}
                <p className="mt-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal min-h-[4.5rem]">
                  {activeGrowth.desc}
                </p>

                {/* Action Pill Button Below Description */}
                <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between gap-4">
                  <Link
                    href={activeGrowth.ctaHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-sm dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 group/btn"
                  >
                    <span>Explore {activeGrowth.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-xs font-mono font-semibold text-[#101b96] dark:text-[#93c5fd] hidden sm:inline">
                    {activeGrowth.categoryTag}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* ================================================================ */}
          {/* CATEGORY DIVIDER & SUB-HEADER: DEVELOPMENT & PRODUCT DESIGN       */}
          {/* ================================================================ */}
          <div className="mt-20 sm:mt-28 mb-12 sm:mb-16 pt-12 sm:pt-16 border-t border-neutral-200 dark:border-white/10 reveal-fade-up">
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
          {/* Layout: Image Preview Card on LEFT, Content / List on RIGHT      */}
          {/* ================================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column on Desktop: Active Preview Card (IMAGE ON LEFT) */}
            <div className="lg:col-span-5 order-2 lg:order-1 reveal-fade-right delay-200">
              <div className="lg:sticky lg:top-28 rounded-3xl bg-white dark:bg-[#0a0d1e]/85 backdrop-blur-xl border border-neutral-200 dark:border-white/15 p-5 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500">
                
                {/* Image Container with Rounded Corners & Expand Badge */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 group/img">
                  <Image
                    key={activeDev.image}
                    src={activeDev.image}
                    alt={activeDev.title}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out group-hover/img:scale-105"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Expand Action Badge */}
                  <Link
                    href={activeDev.ctaHref}
                    className="absolute bottom-3.5 right-3.5 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20 hover:scale-105 active:scale-95 transition-all group/badge"
                    title={`Explore ${activeDev.title}`}
                  >
                    <Maximize2 className="w-5 h-5 group-hover/badge:scale-110 transition-transform" />
                  </Link>
                </div>

                {/* Supporting Description Below Image */}
                <p className="mt-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal min-h-[4.5rem]">
                  {activeDev.desc}
                </p>

                {/* Action Pill Button Below Description */}
                <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between gap-4">
                  <Link
                    href={activeDev.ctaHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800 active:scale-95 transition-all shadow-sm dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 group/btn"
                  >
                    <span>Explore {activeDev.shortTitle}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-xs font-mono font-semibold text-[#101b96] dark:text-[#93c5fd] hidden sm:inline">
                    {activeDev.categoryTag}
                  </span>
                </div>

              </div>
            </div>

            {/* Right Column on Desktop: Numbered Service List (CONTENT ON RIGHT) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col divide-y divide-neutral-200 dark:divide-white/10 reveal-fade-left delay-100">
              {DEV_DESIGN_SERVICES.map((item, index) => {
                const isActive = activeDevIndex === index;
                return (
                  <div
                    key={item.number}
                    onMouseEnter={() => setActiveDevIndex(index)}
                    onClick={() => setActiveDevIndex(index)}
                    className={`group flex items-baseline gap-6 sm:gap-10 py-5 sm:py-6 cursor-pointer transition-all duration-300 select-none ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-75"
                    }`}
                  >
                    {/* Number 06..10 */}
                    <span
                      className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 w-10 sm:w-12 flex-shrink-0 ${
                        isActive
                          ? "text-[#101b96] dark:text-[#60a5fa]"
                          : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Title */}
                    <span
                      className={`text-2xl sm:text-3xl lg:text-[34px] tracking-tight transition-all duration-300 leading-snug ${
                        isActive
                          ? "text-neutral-950 font-extrabold translate-x-2 dark:text-white"
                          : "text-neutral-500 font-medium group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-200"
                      }`}
                    >
                      {item.title}
                    </span>
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
