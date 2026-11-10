"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Plus } from "lucide-react";

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
      "In this ever-evolving digital era, staying ahead requires deterministic data, not guesswork. Orbiverse transformed our marketing infrastructure, decoding complex attribution algorithms and turning fragmented ad sets into a unified, predictable revenue machine.",
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
      "Our enrollment process used to require endless manual follow-ups and spreadsheet tracking. Now, Orbiverse handles lead qualification, CRM updates, and ad bidding deterministically. We increased enrollment conversion by 35% in just one quarter.",
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
      "Working with Orbiverse was seamless. Their data-driven Google and Meta paid funnels eliminated signal blindness, reduced our blended CAC by 28%, and doubled qualified enterprise pipeline contracts within our first 60 days.",
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
      "We were scaling fast but drowning in disconnected agency silos. Orbiverse connected our paid media, CRM, and server-side tracking into one intelligent flow. Demo bookings rose by 40% while saving our team 30+ hours weekly.",
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

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-play interval (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 6500);
    return () => clearInterval(interval);
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
          SUBTLE TECH GRID & GEOMETRIC ACCENTS (WHITE BACKGROUND)
          Matches the reference image's background styling with clean white theme
          ==================================================================== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(226, 232, 240, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(226, 232, 240, 0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle Floating Diamond Accents */}
      <div className="absolute top-20 left-12 w-3.5 h-3.5 rotate-45 bg-indigo-500/20 pointer-events-none" />
      <div className="absolute top-36 right-16 w-3 h-3 rotate-45 bg-blue-500/20 pointer-events-none" />
      <div className="absolute bottom-28 left-1/4 w-3 h-3 rotate-45 bg-purple-500/20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rotate-45 bg-indigo-500/15 pointer-events-none" />

      {/* 1400PX MAX-WIDTH CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ====================================================================
            HEADER: PILL BADGE + "Customer Say About Our Services"
            Matches the reference layout and typography hierarchy
            ==================================================================== */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 dark:from-indigo-950/60 dark:to-blue-950/60 text-[#6366f1] dark:text-[#818cf8] text-xs sm:text-sm font-bold border border-indigo-200/80 dark:border-indigo-800/40 mb-4 shadow-xs">
            <span>Our Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            Customer Say About Our Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto mt-3">
            Real feedback from visionary founders and growth leaders building deterministic scale with Orbiverse.
          </p>
        </div>

        {/* ====================================================================
            SHOWCASE CARD LAYOUT (1400PX MAX-WIDTH CONTAINER):
            Left Side (30% Width): Client Portrait & "Trusted Clients" Pill
            Right Side (70% Width): Large Royal Indigo/Blue Testimonial Card
            ==================================================================== */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-stretch">
          
          {/* ------------------------------------------------------------------
              LEFT COLUMN (EXACTLY 30% WIDTH ON DESKTOP):
              Portrait photo /4a1702e3-235e-4183-a8d5-a2a47274dc14.webp
              with floating "Trusted Clients" pill across bottom
              ------------------------------------------------------------------ */}
          <div className="lg:col-span-3 relative flex flex-col justify-center">
            
            {/* Concentric Dot Halo behind photo (as seen in reference) */}
            <div
              className="absolute -top-10 -left-10 w-64 h-64 rounded-full pointer-events-none opacity-30 dark:opacity-20 hidden sm:block"
              style={{
                backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.4) 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />

            {/* Photo Card (Fills 30% column, stretches to match right card, full image fit) */}
            <div
              className="relative w-full h-[440px] sm:h-[480px] lg:h-full min-h-[460px] lg:min-h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden border-2 border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group flex flex-col justify-end"
              style={{
                background:
                  "radial-gradient(circle at 50% 25%, #fef3c7 0%, #e0e7ff 45%, #f1f5f9 100%)",
              }}
            >
              {/* Studio ambient glow matching reference photo */}
              <div className="absolute top-1/4 left-1/4 w-44 h-44 bg-amber-400/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Full Image Fit with object-contain & bottom padding so zero pixels are cut */}
              <div className="relative w-full h-full pb-18 sm:pb-20 pt-4 px-2 flex items-end justify-center">
                <Image
                  src="/4a1702e3-235e-4183-a8d5-a2a47274dc14.webp"
                  alt="Orbiverse Happy Client"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>

              {/* Subtle vignette shadow gradient at bottom to frame the badge */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/30 via-slate-900/10 to-transparent pointer-events-none z-10" />

              {/* Floating "Trusted Clients" Pill at the bottom of the photo */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-20">
                <div className="bg-white/95 dark:bg-[#0c1228]/95 backdrop-blur-md rounded-2xl sm:rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] border border-white/60 dark:border-white/10 flex items-center justify-between gap-2.5 sm:gap-3">
                  <span className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white whitespace-nowrap">
                    Trusted Clients
                  </span>

                  {/* Overlapping Client Avatars + Plus Button */}
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
                    {/* Plus Icon Button */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#6366f1] text-white flex items-center justify-center border-2 border-white dark:border-[#0c1228] shadow-xs">
                      <Plus className="w-3 h-3 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------------
              RIGHT COLUMN (EXACTLY 70% WIDTH ON DESKTOP):
              Vibrant royal indigo/blue gradient testimonial showcase card,
              quotes & stars, author details & verified results
              ------------------------------------------------------------------ */}
          <div
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl sm:rounded-[32px] p-7 sm:p-10 lg:p-14 text-white relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)] transition-all duration-500 min-h-[440px] lg:min-h-[480px]"
            style={{
              background:
                "linear-gradient(135deg, #6366f1 0%, #4f46e5 45%, #2563eb 100%)",
            }}
          >
            {/* Ambient Card Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Top Row: Double Quotes & 5 Stars */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                {/* Double Quote Marks Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-inner">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none" />
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
              <p className="text-base sm:text-lg lg:text-[21px] xl:text-[22px] font-medium leading-relaxed sm:leading-[1.7] text-white/95 select-none transition-opacity duration-300">
                &ldquo;{active.quote}&rdquo;
              </p>
            </div>

            {/* Bottom Row: Author Avatar, Name & Title */}
            <div className="mt-8 sm:mt-12 pt-6 border-t border-white/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/50 shadow-md shrink-0">
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
                  <div className="text-xs sm:text-sm text-white/80 font-medium">
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
            CAROUSEL CONTROLS & PAGINATION PILLS (MATCHING REFERENCE)
            Pills with active wider indicator + prev/next arrows
            ==================================================================== */}
        <div className="flex items-center justify-center gap-6 mt-10 sm:mt-12">
          
          {/* Prev Arrow */}
          <button
            type="button"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#121835] hover:bg-indigo-50 dark:hover:bg-[#1a254a] text-slate-700 dark:text-white hover:text-[#6366f1] dark:hover:text-[#818cf8] border border-slate-200/80 dark:border-blue-900/40 transition-all flex items-center justify-center shadow-xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-8 bg-[#6366f1] dark:bg-[#818cf8] shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                    : "w-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#121835] hover:bg-indigo-50 dark:hover:bg-[#1a254a] text-slate-700 dark:text-white hover:text-[#6366f1] dark:hover:text-[#818cf8] border border-slate-200/80 dark:border-blue-900/40 transition-all flex items-center justify-center shadow-xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
