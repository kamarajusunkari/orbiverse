"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Plus } from "lucide-react";

export interface ShowcaseTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  stars: number;
  highlightStat?: string;
}

const TESTIMONIALS: ShowcaseTestimonial[] = [
  {
    id: "matthew",
    name: "Matthew Lansberry",
    role: "CEO & Founder",
    company: "OmniGrowth Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    quote:
      "In this ever-evolving digital era, understand the significance of staying ahead. Through our blog invite explore the dynamic world of IT with us decoding the algorithms to unraveling complex performance marketing into predictable, deterministic revenue streams.",
    stars: 5,
    highlightStat: "62% Lower Blended CAC",
  },
  {
    id: "daniel",
    name: "Daniel Kim",
    role: "Founder & CEO",
    company: "ScaleLabs Education",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
    quote:
      "Our enrollment pipeline used to rely on chaotic ad sets and manual spreadsheets. Orbiverse re-architected our entire acquisition machine. Within 90 days, our conversion velocity surged by 35% while slashing our lead acquisition costs in half.",
    stars: 5,
    highlightStat: "+35% Enrollment Conv.",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "VP of Acquisition",
    company: "Vanguard Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
    quote:
      "Working with Orbiverse has been nothing short of transformative. Their data-driven Google and Meta funnels resolved critical attribution blindspots, delivering high-intent enterprise pipeline with absolute precision.",
    stars: 5,
    highlightStat: "2.8x Pipeline Velocity",
  },
  {
    id: "sarah",
    name: "Sarah Mitchell",
    role: "Chief Operating Officer",
    company: "BrightPath SaaS",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    quote:
      "We were scaling quickly but leaking conversions between paid clicks and product activation. Orbiverse unified our analytics, paid channels, and CRM into one fluid ecosystem that boosted enterprise demo bookings by 40%.",
    stars: 5,
    highlightStat: "+40% Demo Bookings",
  },
];

const TRUSTED_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const switchTestimonial = useCallback((nextIdx: number) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(nextIdx);
      setIsFading(false);
    }, 220);
  }, []);

  const nextTestimonial = useCallback(() => {
    switchTestimonial((activeIndex + 1) % TESTIMONIALS.length);
  }, [activeIndex, switchTestimonial]);

  const prevTestimonial = useCallback(() => {
    switchTestimonial((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [activeIndex, switchTestimonial]);

  // Auto-rotation every 7 seconds (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextTestimonial, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextTestimonial]);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-white dark:bg-[#070913] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden border-t border-[var(--border-color)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ====================================================================
          BACKGROUND GRID & DIAMOND ACCENTS (WHITE BG LIGHT / DARK MOCKUP BG)
          ==================================================================== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45 dark:opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(203, 213, 225, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Subtle diamond accents matching mockup */}
      <div className="absolute top-24 left-10 w-3 h-3 rotate-45 bg-[#7042f8]/20 pointer-events-none" />
      <div className="absolute top-36 right-12 w-2.5 h-2.5 rotate-45 bg-indigo-500/20 pointer-events-none" />
      <div className="absolute bottom-28 left-1/3 w-3 h-3 rotate-45 bg-purple-500/15 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-3.5 h-3.5 rotate-45 bg-[#7042f8]/15 pointer-events-none" />

      {/* 1400PX MAX-WIDTH CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ====================================================================
            HEADER: "Our Testimonials" SOLID PURPLE PILL & HEADLINE
            Matches Image 2 exactly
            ==================================================================== */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#7042f8] text-white text-xs sm:text-[13px] font-bold tracking-wide shadow-[0_4px_16px_rgba(112,66,248,0.35)] mb-4">
            <span>Our Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            Customer Say About Our Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto mt-3">
            Real feedback from visionary founders building predictable, deterministic growth with Orbiverse.
          </p>
        </div>

        {/* ====================================================================
            SPLIT CARD SHOWCASE (1400PX CONTAINER):
            Left Column: 30% Width (Client Portrait & "Trusted Clients" Pill)
            Right Column: 70% Width (Vibrant Purple/Violet Testimonial Card)
            ==================================================================== */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-stretch">
          
          {/* ------------------------------------------------------------------
              LEFT COLUMN (30% WIDTH ON DESKTOP):
              Full-fit image without clipping + radiating dot halo + Trusted Clients
              ------------------------------------------------------------------ */}
          <div className="lg:col-span-3 relative flex flex-col justify-center">
            
            {/* Dotted Radial Halo behind portrait (as seen in Image 2) */}
            <div
              className="absolute -top-12 -left-12 w-72 h-72 rounded-full pointer-events-none opacity-40 dark:opacity-25 hidden sm:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(112, 66, 248, 0.45) 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
                maskImage: "radial-gradient(circle, black 45%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(circle, black 45%, transparent 75%)",
              }}
            />

            {/* Photo Card Container */}
            <div
              className="relative w-full h-[460px] sm:h-[490px] lg:h-full min-h-[460px] lg:min-h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group flex flex-col justify-end"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, #fef3c7 0%, #ede9fe 48%, #f8fafc 100%)",
              }}
            >
              {/* Studio Warm Ambient Backlight */}
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-400/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#7042f8]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Portrait Image (Preserves 100% of subject, no clipping, bottom clearance) */}
              <div className="relative w-full h-full pb-20 sm:pb-22 pt-4 px-2 flex items-end justify-center">
                <Image
                  src="/4a1702e3-235e-4183-a8d5-a2a47274dc14.webp"
                  alt="Orbiverse Happy Client"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>

              {/* Bottom gradient framing */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/35 via-slate-900/10 to-transparent pointer-events-none z-10" />

              {/* Floating "Trusted Clients" Pill Badge (Matching Image 2) */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-20">
                <div className="bg-white/95 dark:bg-[#0c1228]/95 backdrop-blur-md rounded-2xl sm:rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.16)] border border-white/80 dark:border-white/10 flex items-center justify-between gap-2.5 sm:gap-3">
                  <span className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white whitespace-nowrap">
                    Trusted Clients
                  </span>

                  {/* Overlapping Client Avatars */}
                  <div className="flex items-center -space-x-2">
                    {TRUSTED_AVATARS.map((url, i) => (
                      <div
                        key={i}
                        className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-white dark:border-[#0c1228] shadow-xs"
                      >
                        <Image
                          src={url}
                          alt="Client"
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="28px"
                        />
                      </div>
                    ))}
                    {/* Purple Plus Icon */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#7042f8] text-white flex items-center justify-center border-2 border-white dark:border-[#0c1228] shadow-xs">
                      <Plus className="w-3 h-3 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------------
              RIGHT COLUMN (70% WIDTH ON DESKTOP):
              Vibrant Purple/Violet Testimonial Card with Outline Quotes & 5 Stars
              ------------------------------------------------------------------ */}
          <div
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl sm:rounded-[32px] p-7 sm:p-10 lg:p-14 text-white relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(112,66,248,0.4)] transition-all duration-500 min-h-[460px] lg:min-h-[500px]"
            style={{
              background:
                "linear-gradient(135deg, #7444ff 0%, #6835f0 45%, #5925dc 100%)",
            }}
          >
            {/* Atmospheric Card Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-900/30 rounded-full blur-2xl pointer-events-none" />

            <div className={`transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}>
              {/* Top Row: Outline Double Quote Glyph & 5 White Stars */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                {/* Clean Double Outline Quote Glyph (Matching Image 2) */}
                <div className="text-white flex items-center">
                  <svg
                    width="44"
                    height="34"
                    viewBox="0 0 48 38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-xs"
                  >
                    <path d="M19 14C19 7.4 14.8 3 8.5 3C4 3 0.5 6.5 0.5 11C0.5 14.5 2.6 17.5 5.8 18.6C4.6 22.5 2.2 26 0.2 28.5L3.2 31.5C8.8 27.5 19 20.5 19 14Z" />
                    <path d="M47.5 14C47.5 7.4 43.3 3 37 3C32.5 3 29 6.5 29 11C29 14.5 31.1 17.5 34.3 18.6C33.1 22.5 30.7 26 28.7 28.5L31.7 31.5C37.3 27.5 47.5 20.5 47.5 14Z" />
                  </svg>
                </div>

                {/* 5 White Stars */}
                <div className="flex items-center gap-1.5 text-white">
                  {[...Array(active.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-white stroke-none drop-shadow-xs"
                    />
                  ))}
                </div>
              </div>

              {/* Main Testimonial Quote Text */}
              <p className="text-base sm:text-lg lg:text-[21px] xl:text-[22px] font-medium leading-relaxed sm:leading-[1.7] text-white/95 select-none">
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>

            {/* Bottom Row: Author Avatar, Name & Title */}
            <div className={`mt-8 sm:mt-12 pt-6 border-t border-white/20 flex items-center justify-between gap-4 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}>
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/60 shadow-md shrink-0">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {active.name}
                  </div>
                  <div className="text-xs sm:text-sm text-white/85 font-medium">
                    {active.role} &middot; <span className="font-semibold text-white">{active.company}</span>
                  </div>
                </div>
              </div>

              {/* Key Verified Result Pill */}
              {active.highlightStat && (
                <div className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-bold text-white shadow-xs">
                  {active.highlightStat}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* ====================================================================
            CAROUSEL CONTROLS & PAGINATION DASHES (MATCHING IMAGE 2)
            Active expanded purple capsule pill + inactive muted capsules
            ==================================================================== */}
        <div className="flex items-center justify-center gap-5 mt-10 sm:mt-14">
          
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#121835] hover:bg-[#7042f8]/10 dark:hover:bg-[#1a254a] text-slate-700 dark:text-white hover:text-[#7042f8] dark:hover:text-[#a78bfa] border border-slate-200/80 dark:border-indigo-900/40 transition-all flex items-center justify-center shadow-xs cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Pill Dashes (Exact match to Image 2 bottom indicators) */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => switchTestimonial(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-8 bg-[#7042f8] shadow-[0_2px_8px_rgba(112,66,248,0.5)]"
                    : "w-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#121835] hover:bg-[#7042f8]/10 dark:hover:bg-[#1a254a] text-slate-700 dark:text-white hover:text-[#7042f8] dark:hover:text-[#a78bfa] border border-slate-200/80 dark:border-indigo-900/40 transition-all flex items-center justify-center shadow-xs cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
