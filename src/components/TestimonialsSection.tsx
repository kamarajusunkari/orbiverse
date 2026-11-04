"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, Play, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export interface QuoteCardData {
  type: "quote";
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export interface CaseStudyCardData {
  type: "casestudy";
  image: string;
  logo: string;
  title: string;
}

export type TestimonialCard = QuoteCardData | CaseStudyCardData;

const COLUMN_1: TestimonialCard[] = [
  {
    type: "casestudy",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    logo: "Orbiverse Case Study",
    title: "How Puno Automated 80% of Lead Handling",
  },
  {
    type: "quote",
    name: "Daniel Kim",
    role: "Founder",
    company: "ScaleLabs Education",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    text: "Our enrollment process used to require manual follow-ups and spreadsheet tracking. Now, Orbiverse handles lead qualification, scheduling, reminders, and CRM updates automatically. We have increased enrollment conversion by 35% in just one quarter.",
  },
  {
    type: "quote",
    name: "Alex Johnson",
    role: "Head of Operations",
    company: "Finovate Consulting",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    text: "Security and compliance were major concerns for us. They designed an automation and tracking architecture that was not only hyper-efficient but enterprise-grade secure.",
  },
];

const COLUMN_2: TestimonialCard[] = [
  {
    type: "quote",
    name: "David Lee",
    role: "Founder",
    company: "Aradio Studio",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    text: "We were spending hours on repetitive tasks. Orbiverse's growth architecture saved us 30+ hours per week and dramatically improved our multi-channel sales performance.",
  },
  {
    type: "quote",
    name: "Sarah Mitchell",
    role: "COO",
    company: "BrightPath SaaS",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
    text: "We struggled with inconsistent lead follow-ups and slow response times. Orbiverse's growth blueprint gave us clarity first, then execution. Now, our CRM runs intelligently, leads are scored automatically, and demo bookings rose by 40%.",
  },
  {
    type: "quote",
    name: "Jonathan Reed",
    role: "Managing Director",
    company: "Nexora Digital Agency",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
    text: "We were scaling fast but drowning in fragmented ad channels. Orbiverse connected our paid media, CRM, and attribution reporting into one intelligent flow. Result? 30+ hours saved and complete visibility.",
  },
];

const COLUMN_3: TestimonialCard[] = [
  {
    type: "casestudy",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    logo: "Orbiverse Case Study",
    title: "Scaled Customer Acquisition by 4.2x in 90 Days",
  },
  {
    type: "quote",
    name: "Elena Rostova",
    role: "VP of Growth",
    company: "Vanguard Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
    text: "Working with Orbiverse was seamless. Their data-driven Google & Meta campaigns reduced our CAC by 28% while doubling qualified enterprise contracts within 60 days.",
  },
  {
    type: "quote",
    name: "Vikramaditya Rao",
    role: "CEO",
    company: "Horizon Commerce",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    text: "The first monthly report that showed which channel was actually driving revenue. In 60 days, our cost per acquisition dropped 42% while scaling spend efficiently.",
  },
];

const ALL_TESTIMONIALS = [...COLUMN_1, ...COLUMN_2, ...COLUMN_3];

function RenderCard({ item }: { item: TestimonialCard }) {
  if (item.type === "casestudy") {
    return (
      <div className="relative rounded-3xl overflow-hidden min-h-[300px] border border-neutral-200 dark:border-neutral-800 shadow-md group cursor-pointer flex flex-col justify-end p-6">
        <Image
          src={item.image}
          alt={item.title}
          fill
          unoptimized
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
          sizes="400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase mb-3">
            <Play className="w-3 h-3 fill-current text-[#84cc16]" />
            <span>{item.logo}</span>
          </div>
          <h3 className="text-xl font-black leading-snug tracking-tight">
            {item.title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#110e24] border border-neutral-200/90 dark:border-neutral-800/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-xl bg-[#f3eeff] dark:bg-[#231b44] flex items-center justify-center text-[#6d28d9] dark:text-[#c4b5fd]">
            <Quote className="w-4 h-4 fill-current" />
          </div>
          <div className="flex items-center gap-1 text-[#f59e0b] text-xs">
            {"★".repeat(5)}
          </div>
        </div>

        <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-600 dark:text-neutral-300 font-normal">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-neutral-100 dark:border-white/5">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-neutral-200 dark:border-white/10">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            unoptimized
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <div className="text-sm font-bold text-neutral-900 dark:text-white">
            {item.name}
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            {item.role}, <span className="font-semibold text-neutral-700 dark:text-neutral-200">{item.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [mobIdx, setMobIdx] = useState(0);
  const mobTrackRef = useRef<HTMLDivElement>(null);

  const handleMobScroll = (dir: "prev" | "next") => {
    const nextIdx =
      dir === "prev" ? Math.max(0, mobIdx - 1) : Math.min(ALL_TESTIMONIALS.length - 1, mobIdx + 1);
    setMobIdx(nextIdx);
    if (mobTrackRef.current) {
      const cardWidth = mobTrackRef.current.clientWidth * 0.85;
      mobTrackRef.current.scrollTo({ left: nextIdx * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[var(--surface)] border-b border-[var(--border-color)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Light Dot Grid Overlay */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3eeff] dark:bg-[#231b44] text-[#6d28d9] dark:text-[#c4b5fd] text-xs font-semibold mb-4 border border-[#e9d5ff]/60 dark:border-[#4c1d95]/40 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            <span>CLIENT REVIEWS &amp; VERIFIED IMPACT</span>
          </div>

          <h2 className="font-heading font-black tracking-[-0.035em] text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] leading-tight">
            What They&apos;re Saying
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mt-4 reveal-fade-up delay-100">
            Hear from founders, COOs, and growth leaders who turned marketing drift into predictable revenue orbit.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* DESKTOP 3 VERTICAL SCROLLING COLUMNS                                 */}
        {/* ==================================================================== */}
        <div className="hidden lg:grid grid-cols-3 gap-6 h-[720px] overflow-hidden relative">
          {/* Top & Bottom Gradient Edge Fades */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[var(--surface)] to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--surface)] to-transparent z-20 pointer-events-none" />

          {/* COLUMN 1 */}
          <div className="overflow-hidden relative h-full group/col reveal-fade-right delay-100">
            <div className="flex flex-col gap-6 animate-v-scroll-1 group-hover/col:[animation-play-state:paused]">
              {[...COLUMN_1, ...COLUMN_1].map((item, idx) => (
                <RenderCard item={item} key={`c1-${idx}`} />
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="overflow-hidden relative h-full group/col reveal-fade-up delay-200">
            <div className="flex flex-col gap-6 animate-v-scroll-2 group-hover/col:[animation-play-state:paused]">
              {[...COLUMN_2, ...COLUMN_2].map((item, idx) => (
                <RenderCard item={item} key={`c2-${idx}`} />
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="overflow-hidden relative h-full group/col reveal-fade-left delay-300">
            <div className="flex flex-col gap-6 animate-v-scroll-3 group-hover/col:[animation-play-state:paused]">
              {[...COLUMN_3, ...COLUMN_3].map((item, idx) => (
                <RenderCard item={item} key={`c3-${idx}`} />
              ))}
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MOBILE TOUCH-SWIPE CAROUSEL                                          */}
        {/* ==================================================================== */}
        <div className="block lg:hidden">
          <div
            ref={mobTrackRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 py-2 scrollbar-none"
          >
            {ALL_TESTIMONIALS.map((item, idx) => (
              <div
                key={`mob-${idx}`}
                className="w-[85vw] flex-shrink-0 snap-center"
              >
                <RenderCard item={item} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => handleMobScroll("prev")}
              disabled={mobIdx === 0}
              className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center disabled:opacity-40"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-bold text-[var(--text-muted)]">
              {mobIdx + 1} / {ALL_TESTIMONIALS.length}
            </span>
            <button
              type="button"
              onClick={() => handleMobScroll("next")}
              disabled={mobIdx === ALL_TESTIMONIALS.length - 1}
              className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center disabled:opacity-40"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes vScrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-v-scroll-1 {
          animation: vScrollUp 28s linear infinite;
        }
        .animate-v-scroll-2 {
          animation: vScrollUp 38s linear infinite;
        }
        .animate-v-scroll-3 {
          animation: vScrollUp 32s linear infinite;
        }
      `}</style>
    </section>
  );
}

