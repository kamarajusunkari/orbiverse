"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function OrbitHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    const playVideo = () => {
      if (v.paused) {
        v.play().catch(() => {});
      }
    };

    playVideo();
    v.addEventListener("canplay", playVideo);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) playVideo();
    });

    const onFirstInteraction = () => {
      playVideo();
      ["pointerdown", "touchstart", "scroll"].forEach((evt) => {
        window.removeEventListener(evt, onFirstInteraction);
      });
    };

    ["pointerdown", "touchstart", "scroll"].forEach((evt) => {
      window.addEventListener(evt, onFirstInteraction, { passive: true });
    });

    return () => {
      v.removeEventListener("canplay", playVideo);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black isolation-isolate pt-28 pb-20 select-none">
      {/* 1. BACKGROUND VIDEO & POSTER ARTWORK */}
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/0bf7409c-9fa2-4bef-a49d-34903dcc91ad.png"
        src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4b73c700-3112-4c07-bd48-0af2893dff7c.mp4"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full min-h-[100%] object-cover object-top z-0 pointer-events-none"
      />

      {/* 2. THEME-AWARE VEIL / GRADIENT OVERLAYS */}
      {/* Dark mode subtle veil */}
      <div className="absolute inset-0 bg-black/15 z-[1] pointer-events-none dark:block hidden" />

      {/* Light mode luminous celestial veil to make text legible and beautiful in white theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/70 to-white/95 backdrop-blur-[0.5px] z-[1] pointer-events-none block dark:hidden transition-opacity duration-500" />

      {/* 3. HERO CONTENT CONTAINER (Centered rigidly like Orbit spec) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* EYEBROW PILL */}
        <Link
          href="#tools"
          className="group inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/12 backdrop-blur-md shadow-xs hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-200 mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10.5px] font-bold tracking-tight bg-[#0b1a99] dark:bg-white text-white dark:text-black">
            New
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-neutral-800 dark:text-white/90 tracking-tight">
            Go beyond the ordinary
          </span>
          <svg
            viewBox="0 0 9.5 8"
            fill="none"
            className="w-2.5 h-2 text-neutral-700 dark:text-white/90 ml-0.5 group-hover:translate-x-0.5 transition-transform"
          >
            <path
              d="M0.7 4H8.8M5.6 0.75 8.85 4 5.6 7.25"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight leading-[1.04] text-neutral-900 dark:text-white mb-6">
          <span className="block overflow-hidden pb-1 -mb-1">
            <span className="block animate-fade-in-up">See beyond now</span>
          </span>
          <span className="block overflow-hidden pb-1 -mb-1">
            <span className="block animate-fade-in-up">Explore the stars</span>
          </span>
        </h1>

        {/* SUB-HEADLINE */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-normal leading-relaxed text-neutral-600 dark:text-white/60 mb-8 sm:mb-10 px-4">
          Everything you need to discover, understand, and explore what is out there. Brand, demand and data, run by one team that answers to one number.
        </p>

        {/* CTA BUTTONS ROW */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          {/* Ghost button */}
          <Link
            href="/drift-audit"
            className="inline-flex items-center justify-center min-w-[120px] sm:min-w-[130px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-[14px] font-medium tracking-tight border border-neutral-900 dark:border-white/95 text-neutral-900 dark:text-white bg-transparent hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
          >
            Try for free
          </Link>

          {/* Solid button */}
          <a
            href="#tools"
            className="inline-flex items-center justify-center min-w-[110px] sm:min-w-[120px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-[14px] font-semibold tracking-tight bg-[#0b1a99] dark:bg-white text-white dark:text-black hover:bg-[#1224bf] dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
}

