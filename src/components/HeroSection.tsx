"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [preloadPct, setPreloadPct] = useState(0);
  const [isPreloadComplete, setIsPreloadComplete] = useState(false);
  const [isPreloadLeaving, setIsPreloadLeaving] = useState(false);
  const [showCounter, setShowCounter] = useState(true);
  const [isLogoDocked, setIsLogoDocked] = useState(false);
  const [isLogoSettled, setIsLogoSettled] = useState(false);
  const [isIntroReady, setIsIntroReady] = useState(false);
  const [dockCoords, setDockCoords] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);
  const hasFinishedRef = useRef(false);

  const textContainerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect: sticky hero text shrinks/scales and drifts with depth as next section moves up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxRange = window.innerHeight || 800;
          const p = Math.min(1, Math.max(0, scrollY / maxRange));

          // Text reduces in size and drifts with 3D depth as next section moves up
          if (textContainerRef.current) {
            const scale = Math.max(0.68, 1 - p * 0.32);
            const translateY = scrollY * 0.22;
            const opacity = Math.max(0.08, 1 - p * 0.88);
            textContainerRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            textContainerRef.current.style.opacity = `${opacity}`;
          }

          // Celestial background moves with subtle parallax depth
          if (bgImageRef.current) {
            const bgTranslateY = scrollY * 0.16;
            const bgScale = 1 + p * 0.08;
            bgImageRef.current.style.transform = `translate3d(0, ${bgTranslateY}px, 0) scale(${bgScale})`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Smooth ticker from 0% to 100% over ~2600ms
    const startTime = performance.now();
    const duration = 2600;
    let animFrame: number;

    const finish = () => {
      if (hasFinishedRef.current) return;
      hasFinishedRef.current = true;
      setPreloadPct(100);

      // Measure exact header logo dock location dynamically
      const dockEl = document.getElementById("header-logo-dock");
      if (dockEl) {
        const rect = dockEl.getBoundingClientRect();
        setDockCoords({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      } else {
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth < 768;
        const size = isMobile ? 44 : isTablet ? 48 : 56;
        const top = isMobile ? 22 : isTablet ? 28 : 32;
        const left = Math.max(isMobile ? 28 : 52, (window.innerWidth - 1400) / 2 + 52);
        setDockCoords({ top, left, width: size, height: size });
      }

      setIsPreloadLeaving(true);
      setIsLogoDocked(true);

      // Notify Navbar and page that preloader finished and experience enters
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("orbiverse:intro-ready"));
        document.body.classList.add("intro-ready");
        document.body.classList.add("preload-complete");
      }
      setIsIntroReady(true);

      // Counter fades out with blur (600ms)
      setTimeout(() => {
        setShowCounter(false);
      }, 600);

      // Logo glides to navbar position over 1250ms, then settles
      setTimeout(() => {
        setIsLogoSettled(true);
        setIsPreloadComplete(true);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("orbiverse:logo-settled"));
        }
      }, 1300);
    };

    const tick = (now: number) => {
      if (hasFinishedRef.current) return;
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Easing for a smooth, natural count
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const val = Math.min(99, Math.floor(eased * 100));
      setPreloadPct(val);

      if (progress < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    animFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* ==================================================================== */}
      {/* 1. INTRO PRELOADER (WHITE BG) WITH LOGO & 0-100% COUNTER + BAR      */}
      {/* ==================================================================== */}
      {!isPreloadComplete && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isPreloadLeaving ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label="Loading Orbiverse"
        >
          {/* Subtle celestial soft-blue ambient glow */}
          <div className="absolute w-[520px] h-[520px] rounded-full bg-[#101b96]/8 blur-[140px] pointer-events-none" />

          {/* Counter and Glowing Progress Bar (positioned directly below the large centered logo) */}
          {showCounter && (
            <div
              className={`relative z-10 flex flex-col items-center mt-48 sm:mt-56 transition-all duration-500 ${
                isLogoDocked ? "animate-preload-count-out" : ""
              }`}
              aria-live="polite"
            >
              {/* Percentage Counter (0% -> 100%) in crisp dark text */}
              <div className="flex items-baseline font-mono text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
                <span>{preloadPct}</span>
                <span className="text-xl sm:text-2xl text-neutral-400 ml-1">%</span>
              </div>

              {/* Glowing Neon Progress Bar */}
              <div className="w-60 sm:w-72 h-2 bg-neutral-200/90 rounded-full overflow-hidden mt-3.5 border border-neutral-300/80 p-[1px] shadow-xs">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#101b96] via-[#2563eb] to-[#3b82f6] transition-all duration-75 ease-out shadow-[0_0_12px_rgba(37,99,235,0.7)]"
                  style={{ width: `${preloadPct}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* FLYING/GLIDING LOGO: Stays visible (opacity-100) and lands in the EXACT SAME PLACE as header logo */}
      {!isLogoSettled && (
        <div
          id="gliding-logo"
          style={
            isLogoDocked && dockCoords
              ? {
                  position: "fixed",
                  top: `${dockCoords.top}px`,
                  left: `${dockCoords.left}px`,
                  width: `${dockCoords.width}px`,
                  height: `${dockCoords.height}px`,
                  transform: "translate(0, 0)",
                  transition: "all 1.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  zIndex: 70,
                  pointerEvents: "none",
                  opacity: 1,
                }
              : {
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  width: "clamp(120px, 18vw, 160px)",
                  height: "clamp(120px, 18vw, 160px)",
                  transform: "translate(-50%, -50%)",
                  transition: "all 1.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  zIndex: 70,
                  pointerEvents: "none",
                  opacity: 1,
                }
          }
        >
          <div className="relative w-full h-full">
            <Image
              src="/logo.png"
              alt="Orbiverse"
              fill
              priority
              className="object-contain filter brightness-105 drop-shadow-md"
            />
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2. STICKY HERO SECTION WITH CELESTIAL BACKGROUND & PARALLAX          */}
      {/* ==================================================================== */}
      <section
        id="hero"
        className={`sticky top-0 z-0 w-full h-[100dvh] min-h-[640px] flex items-center justify-center bg-[var(--bg-color)] overflow-hidden transition-opacity duration-700 ${
          isIntroReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* CELESTIAL BACKGROUND BANNER (2d9b0edc-3651-4bae-b2e7-1d024722e466.webp) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <div ref={bgImageRef} className="relative w-full h-full animate-celestial-drift origin-bottom will-change-transform">
            <Image
              src="/2d9b0edc-3651-4bae-b2e7-1d024722e466.webp"
              alt="Orbiverse Celestial Orbit Banner"
              fill
              priority
              quality={95}
              className="object-cover object-bottom md:object-[center_bottom] filter brightness-[1.02] contrast-[1.02]"
            />
          </div>

          {/* Theme & Contrast Layering */}
          {/* 1. Luminous radial atmosphere in upper center for crisp headline legibility */}
          <div className="absolute inset-0 bg-radial-[circle_at_50%_35%] from-white/75 via-white/40 to-transparent dark:from-[#07060f]/80 dark:via-[#07060f]/40 dark:to-transparent pointer-events-none transition-colors duration-500" />

          {/* 2. Top fade for navbar integration */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--bg-color)]/80 via-[var(--bg-color)]/40 to-transparent" />

          {/* 3. Bottom Seamless Blend */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/60 to-transparent" />
        </div>

        {/* HERO CONTENT (CENTERED WITH SCROLL PARALLAX SHRINK EFFECT) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex flex-col items-center justify-center">
          <div
            ref={textContainerRef}
            className="w-full max-w-4xl lg:max-w-5xl flex flex-col items-center text-center mx-auto will-change-transform transition-[transform,opacity] duration-75 ease-out"
          >
            {/* BADGE: ● Performance-led growth agency */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-white/[0.04] text-[13px] sm:text-[13.5px] font-medium text-neutral-600 dark:text-neutral-300 mb-6 sm:mb-8 animate-fade-in-up backdrop-blur-xs shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#101b96] dark:bg-[#7d8eff]" />
              <span>Performance-led growth agency</span>
            </div>

            {/* HEADLINE: STRICTLY TWO LINES, CENTERED */}
            <h1 className="font-heading font-black tracking-[-0.035em] leading-[1.04] text-[clamp(1.4rem,4.8vw,5.1rem)] mb-6 sm:mb-8 animate-title-rise w-full text-center">
              <span className="block whitespace-nowrap text-[#090812] dark:text-white">
                Your marketing is drifting.
              </span>
              <span className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-2.5 text-[#101b96] dark:text-[#7d8eff] mt-1 sm:mt-2 text-center">
                <span>We bring it into</span>
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">orbit.</span>
                  {/* REAL CELESTIAL ORBIT ANIMATION */}
                  <svg
                    viewBox="0 0 260 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-4 -bottom-4 -left-5 -right-5 w-[calc(100%+40px)] h-[calc(100%+32px)] pointer-events-none -rotate-2 overflow-visible"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="orbitTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7d8eff" stopOpacity="0.85" />
                        <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.35" />
                        <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.5" />
                      </linearGradient>

                      <filter id="satelliteGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* 1. Base Elliptical Orbit Track */}
                    <path
                      d="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      stroke="url(#orbitTrackGrad)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-75 dark:opacity-90"
                    />

                    {/* 2. Fast Celestial Energy Beam flowing along track */}
                    <path
                      d="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      stroke="#60a5fa"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeDasharray="50 440"
                      className="animate-orbit-beam"
                    />

                    {/* 3. Trailing Particle 2 (subtle comet dust) */}
                    <g>
                      <animateMotion
                        dur="3.8s"
                        begin="-0.22s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      />
                      <circle r="1.8" fill="#93c5fd" opacity="0.4" />
                    </g>

                    {/* 4. Trailing Particle 1 (closer trail) */}
                    <g>
                      <animateMotion
                        dur="3.8s"
                        begin="-0.1s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      />
                      <circle r="2.8" fill="#60a5fa" opacity="0.65" />
                    </g>

                    {/* 5. Main Orbiting Satellite / Planet with radiant glow */}
                    <g>
                      <animateMotion
                        dur="3.8s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      />
                      {/* Ambient Halo */}
                      <circle r="10" fill="#93c5fd" opacity="0.3" filter="url(#satelliteGlow)" />
                      {/* Body */}
                      <circle r="4.6" fill="#2563eb" className="dark:fill-[#60a5fa]" />
                      {/* Specular Core */}
                      <circle r="2.2" fill="#ffffff" />
                    </g>
                  </svg>
                </span>
              </span>
            </h1>

            {/* BODY TEXT, CENTERED */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 text-center">
              Your ads, SEO and social each report a win, but sales stay flat.
              <br className="hidden sm:inline" />{" "}
              We run every channel as one team, measured on one number:{" "}
              <strong className="font-bold text-neutral-900 dark:text-white">
                your revenue.
              </strong>
            </p>

            {/* CTAS, CENTERED */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 mx-auto">
              <Link
                href="/drift-audit"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-lg sm:rounded-xl bg-[#101b96] hover:bg-[#0c1575] text-white font-medium text-[15px] sm:text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99]"
              >
                Get your free Drift Audit
              </Link>

              <a
                href="#drift-orbit"
                className="inline-flex items-center gap-1.5 text-neutral-900 dark:text-white font-medium text-[15px] sm:text-base hover:text-[#101b96] dark:hover:text-[#7d8eff] transition-colors group cursor-pointer"
              >
                <span>See how it works</span>
                <span className="group-hover:translate-y-0.5 transition-transform text-lg">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

