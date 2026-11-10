"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { openCtaModal } from "@/components/CtaModal";

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

          // Parallax scroll effect: on desktop, text shrinks/scales and drifts; on mobile, keep same size (don't decrease)
          if (textContainerRef.current) {
            const isMobile = window.innerWidth < 768;
            const scale = isMobile ? 1 : Math.max(0.72, 1 - p * 0.28);
            const translateY = isMobile ? 0 : scrollY * 0.22;
            const opacity = Math.max(0.08, 1 - p * 0.92);
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
        const size = isMobile ? 48 : isTablet ? 56 : 68;
        const top = isMobile ? 18 : isTablet ? 24 : 28;
        const left = 24;
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
      const eased =
        progress < 0.5
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

          {/* Counter and Glowing Progress Bar */}
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

      {/* FLYING/GLIDING LOGO */}
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
              src="/0rbb.png"
              alt="Orbiverse"
              fill
              priority
              className="object-contain filter brightness-105 drop-shadow-md"
            />
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2. STICKY HERO SECTION (LIGHT THEME ONLY, 100% CENTERED ON MOBILE)   */}
      {/* ==================================================================== */}
      <section
        id="hero"
        className={`sticky top-0 z-0 w-full h-[100dvh] min-h-[640px] flex items-center justify-center bg-white overflow-hidden transition-opacity duration-700 ${
          isIntroReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* CELESTIAL BACKGROUND BANNER */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          <div
            ref={bgImageRef}
            className="relative w-full h-full animate-celestial-drift origin-bottom will-change-transform"
          >
            <Image
              src="/2d9b0edc-3651-4bae-b2e7-1d024722e466.webp"
              alt="Orbiverse Celestial Orbit Banner"
              fill
              priority
              quality={95}
              className="object-cover object-bottom md:object-[center_bottom] filter brightness-[1.03] contrast-[1.01]"
            />
          </div>

          {/* Luminous light atmosphere in upper center for crisp headline & description legibility */}
          <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-white/95 via-white/70 to-transparent pointer-events-none" />

          {/* Top fade for navbar integration */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/90 via-white/50 to-transparent" />

          {/* Bottom Seamless Blend */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>

        {/* HERO CONTENT (PERFECTLY CENTERED ON MOBILE & DESKTOP) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex flex-col items-center justify-center text-center">
          <div
            ref={textContainerRef}
            className="w-full max-w-4xl lg:max-w-5xl flex flex-col items-center justify-center text-center mx-auto will-change-transform transition-[transform,opacity] duration-75 ease-out"
          >
            {/* BADGE: ● Performance-led growth agency */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 bg-white/80 text-[13px] sm:text-[13.5px] font-semibold text-slate-700 mb-5 sm:mb-7 animate-fade-in-up backdrop-blur-md shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#101b96]" />
              <span>Performance-led growth agency</span>
            </div>

            {/* HEADLINE: INCREASED PROMINENT SIZE, STRICTLY 2 LINES, 100% DEAD CENTERED */}
            <h1 className="font-heading font-black tracking-[-0.035em] leading-[1.1] sm:leading-[1.04] text-[clamp(1.62rem,6.4vw,4.8rem)] mb-6 sm:mb-8 animate-title-rise w-full text-center flex flex-col items-center justify-center">
              <span className="block text-center text-slate-950 whitespace-nowrap mx-auto">
                Your marketing is drifting.
              </span>
              <span className="inline-flex items-center justify-center gap-x-2 sm:gap-x-2.5 text-[#101b96] mt-1.5 sm:mt-2.5 text-center whitespace-nowrap mx-auto">
                <span>We bring it into</span>
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">orbit.</span>
                  
                  {/* REAL CELESTIAL ORBIT ANIMATION */}
                  <svg
                    viewBox="0 0 260 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-3.5 -bottom-3.5 -left-3 -right-3 sm:-top-4 sm:-bottom-4 sm:-left-4 sm:-right-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+28px)] sm:h-[calc(100%+32px)] pointer-events-none -rotate-2 overflow-visible"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="orbitTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#101b96" stopOpacity="0.85" />
                        <stop offset="35%" stopColor="#2563eb" stopOpacity="0.45" />
                        <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.6" />
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
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80"
                    />

                    {/* 2. Fast Celestial Energy Beam flowing along track */}
                    <path
                      d="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      stroke="#2563eb"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="50 440"
                      className="animate-orbit-beam"
                    />

                    {/* 3. Trailing Particle 2 */}
                    <g>
                      <animateMotion
                        dur="3.8s"
                        begin="-0.22s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      />
                      <circle r="1.8" fill="#60a5fa" opacity="0.45" />
                    </g>

                    {/* 4. Trailing Particle 1 */}
                    <g>
                      <animateMotion
                        dur="3.8s"
                        begin="-0.1s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      />
                      <circle r="2.8" fill="#2563eb" opacity="0.75" />
                    </g>

                    {/* 5. Main Orbiting Satellite / Planet with radiant glow */}
                    <g>
                      <animateMotion
                        dur="3.8s"
                        repeatCount="indefinite"
                        rotate="auto"
                        path="M 236 50 C 236 74 186 92 125 92 C 60 92 14 74 14 50 C 14 26 62 8 125 8 C 188 8 234 26 235 48"
                      />
                      <circle r="10" fill="#93c5fd" opacity="0.35" filter="url(#satelliteGlow)" />
                      <circle r="4.6" fill="#101b96" />
                      <circle r="2.2" fill="#ffffff" />
                    </g>
                  </svg>
                </span>
              </span>
            </h1>

            {/* BODY TEXT, CENTERED (HIGH-CONTRAST & PROPERLY VISIBLE) */}
            <p className="text-base sm:text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 text-center drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              Your ads, SEO and social each report a win, but sales stay flat.{" "}
              <br className="hidden sm:inline" />
              We run every channel as one team, measured on one number:{" "}
              <strong className="font-extrabold text-slate-950 underline decoration-[#101b96]/40 decoration-2 underline-offset-4">
                your revenue.
              </strong>
            </p>

            {/* CTAS: OPENS POPUP FOR AUDIT */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mx-auto">
              <button
                type="button"
                onClick={() => openCtaModal("Hero")}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#101b96] hover:bg-[#0c1575] text-white font-bold text-[15.5px] sm:text-base shadow-[0_4px_16px_rgba(16,27,150,0.25)] hover:shadow-[0_6px_22px_rgba(16,27,150,0.35)] transition-all duration-200 active:scale-[0.99] cursor-pointer"
              >
                Get your free Drift Audit
              </button>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 text-slate-800 font-semibold text-[15.5px] sm:text-base hover:text-[#101b96] transition-colors group cursor-pointer px-3 py-2"
              >
                <span>See how it works</span>
                <span className="group-hover:translate-y-0.5 transition-transform text-lg">
                  &darr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
