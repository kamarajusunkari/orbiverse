"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, Sparkles, X } from "lucide-react";
import { openCtaModal } from "@/components/CtaModal";

// Reusable smooth count-up ticker animation
function AnimatedCounter({
  target,
  suffix = "+",
  duration = 1800,
  start = false,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animFrame: number;

    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const update = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min(1, (now - startTime) / duration);
      const easedProgress = easeOutExpo(progress);
      const current = Math.floor(easedProgress * target);

      setCount(current);

      if (progress < 1) {
        animFrame = requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    animFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animFrame);
  }, [start, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Individual box entrance states (ensures each box on mobile fades up smoothly as user scrolls)
  const [card1Entered, setCard1Entered] = useState(false);
  const [card2Entered, setCard2Entered] = useState(false);
  const [card3Entered, setCard3Entered] = useState(false);
  const [card4Entered, setCard4Entered] = useState(false);
  const [card5Entered, setCard5Entered] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    const mobileMode = window.innerWidth < 1024;

    // Header & Section Observer
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          // On desktop where all cards are side-by-side, trigger all cards
          if (!mobileMode) {
            setCard1Entered(true);
            setCard2Entered(true);
            setCard3Entered(true);
            setCard4Entered(true);
            setCard5Entered(true);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Individual Box Observer: enables mobile fade-up entrance for every single box as it scrolls into view
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === card1Ref.current) setCard1Entered(true);
            if (entry.target === card2Ref.current) setCard2Entered(true);
            if (entry.target === card3Ref.current) setCard3Entered(true);
            if (entry.target === card4Ref.current) setCard4Entered(true);
            if (entry.target === card5Ref.current) setCard5Entered(true);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    if (card1Ref.current) cardObserver.observe(card1Ref.current);
    if (card2Ref.current) cardObserver.observe(card2Ref.current);
    if (card3Ref.current) cardObserver.observe(card3Ref.current);
    if (card4Ref.current) cardObserver.observe(card4Ref.current);
    if (card5Ref.current) cardObserver.observe(card5Ref.current);

    // Safety fallback: ensure elements reveal after 2.4s even if scroll observer is slow
    const timer = setTimeout(() => {
      setHasEntered(true);
      setCard1Entered(true);
      setCard2Entered(true);
      setCard3Entered(true);
      setCard4Entered(true);
      setCard5Entered(true);
    }, 2400);

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 py-20 sm:py-28 bg-white border-t border-b border-slate-200 rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] overflow-hidden transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================================== */}
        {/* 1. SECTION HEADER (PARALLEL TOP ALIGNMENT, MATCHING HEIGHTS)         */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch mb-14 sm:mb-18">
          
          {/* Left Column: Badge at Top, Headline with Reveal Mask at Bottom */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start h-full">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3eeff] dark:bg-[#231b44] text-[#6d28d9] dark:text-[#c4b5fd] text-xs font-semibold mb-5 border border-[#e9d5ff]/60 dark:border-[#4c1d95]/40 shadow-2xs transition-all duration-700 ease-out ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
              <span>About Us</span>
            </div>

            {/* Headline with Apple/Stripe-Style Line Mask Text Reveal Animation */}
            <h2 className="font-heading font-black tracking-[-0.035em] text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#090812] dark:text-white mt-4 lg:mt-auto">
              <span className="block overflow-hidden pb-1">
                <span
                  className={`block transition-transform duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    hasEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[115%] opacity-0"
                  }`}
                >
                  Digital Expertise You
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span
                  className={`block transition-transform duration-900 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    hasEntered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[115%] opacity-0"
                  }`}
                >
                  Can Count On
                </span>
              </span>
            </h2>
          </div>

          {/* Right Column: Paragraph at Top (Parallel to Left), CTAs at Bottom */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start h-full">
            <p
              className={`text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hasEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              We empower ambitious businesses, healthcare clinics, e-commerce brands,
              and financial institutions with ROI-focused digital marketing campaigns,
              high-converting Google &amp; Meta ads, search engine optimization (SEO),
              and performance marketing strategies engineered for rapid revenue growth.
            </p>

            {/* Dual CTA Buttons (Aligned Parallel with Left Column Bottom) */}
            <div
              className={`flex items-center gap-4 mt-8 lg:mt-auto pt-2 transition-all duration-800 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hasEntered
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
            >
              <button
                type="button"
                onClick={() => openCtaModal("AboutLearnMore")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0a0f29] hover:bg-[#131c4b] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] group cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 text-[#84cc16] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-115 transition-all duration-300" />
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="relative w-12 h-12 rounded-full bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center text-neutral-800 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/15 hover:scale-110 active:scale-95 transition-all shadow-xs cursor-pointer group"
                  aria-label="Watch video"
                  title="Watch overview"
                >
                  {/* Subtle pulsating radar wave on hover */}
                  <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Play className="w-4 h-4 fill-current ml-0.5 text-neutral-800 dark:text-white group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa] group-hover:scale-110 transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 2. FIVE METRIC & SHOWCASE CARDS (MOBILE FADE-UP & COUNTER ANIMATION) */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          
          {/* CARD 1: Graphic Illustration (about us.webp) */}
          <div
            ref={card1Ref}
            className={`relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 bg-[#f4f4f6] dark:bg-neutral-900 min-h-[280px] sm:min-h-[300px] shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer ${
              card1Entered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-[0.96]"
            }`}
            style={{ transitionDelay: !isMobile && hasEntered ? "150ms" : "0ms" }}
          >
            <Image
              src="/about us.webp"
              alt="About Orbiverse team"
              fill
              className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              priority
            />
            {/* Ambient light sheen sweep on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          </div>

          {/* CARD 2: 10+ Years Experience (Pastel Ice-Blue with Count-Up Counter) */}
          <div
            ref={card2Ref}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] bg-[#f0f6ff] dark:bg-[#0c1829] border border-[#dbeafe] dark:border-[#1e3a5f] shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer ${
              card2Entered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-[0.96]"
            }`}
            style={{ transitionDelay: !isMobile && hasEntered ? "260ms" : "0ms" }}
          >
            <div>
              <div className="text-4xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105 inline-block origin-left transition-all duration-300">
                <AnimatedCounter target={10} start={card2Entered} />
              </div>
              <div className="text-sm sm:text-[15px] font-bold text-[#2563eb] dark:text-[#60a5fa] mt-1.5 group-hover:tracking-wide transition-all duration-300">
                Years Experience
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed mt-6">
              Delivering high-performance IT solutions and scaling enterprise operations across global markets.
            </p>
          </div>

          {/* CARD 3: 150+ Happy Clients (Crisp White Card with Count-Up Counter) */}
          <div
            ref={card3Ref}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] bg-white dark:bg-[#121124] border border-neutral-200/90 dark:border-neutral-800 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer ${
              card3Entered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-[0.96]"
            }`}
            style={{ transitionDelay: !isMobile && hasEntered ? "370ms" : "0ms" }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-[#fef08a] dark:bg-[#ca8a04]/40 flex items-center justify-center text-xl shadow-xs group-hover:rotate-12 group-hover:scale-115 group-hover:shadow-md transition-all duration-300">
                🙂
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#2563eb] dark:text-[#60a5fa] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-[#1d4ed8] dark:group-hover:text-blue-400 transition-all duration-300" />
            </div>

            <div className="mt-6">
              <div className="text-xs sm:text-[13px] font-bold text-[#2563eb] dark:text-[#60a5fa] group-hover:tracking-wide transition-all duration-300">
                Happy Clients
              </div>
              <div className="text-4xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mt-1 group-hover:scale-105 inline-block origin-left transition-transform duration-300">
                <AnimatedCounter target={150} start={card3Entered} />
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                Trusted growth partners &amp; leading brands.
              </p>
            </div>
          </div>

          {/* CARD 4: 50+ Orbiverse Team (Pastel Warm Yellow with Count-Up Counter) */}
          <div
            ref={card4Ref}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] bg-[#fefce8] dark:bg-[#232011] border border-[#fef08a]/70 dark:border-[#713f12]/50 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-amber-300 dark:hover:border-amber-600 hover:bg-[#fef9c3] dark:hover:bg-[#2b2413] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-pointer ${
              card4Entered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-[0.96]"
            }`}
            style={{ transitionDelay: !isMobile && hasEntered ? "480ms" : "0ms" }}
          >
            <div>
              <div className="text-4xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:scale-105 inline-block origin-left transition-all duration-300">
                <AnimatedCounter target={50} start={card4Entered} />
              </div>
              <div className="text-sm sm:text-[15px] font-bold text-[#2563eb] dark:text-[#60a5fa] mt-1.5 group-hover:tracking-wide transition-all duration-300">
                Orbiverse Team
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed mt-6">
              A dedicated squad of software architects, AI engineers, and performance marketers.
            </p>
          </div>

          {/* CARD 5: Get Started With Us (Rich Royal Blue Card with profiles.webp) */}
          <button
            ref={card5Ref}
            type="button"
            onClick={() => openCtaModal("AboutCard5")}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-left min-h-[280px] sm:min-h-[300px] bg-[#1e40af] border border-[#1d4ed8] shadow-sm hover:shadow-[0_20px_45px_rgba(30,64,175,0.45)] hover:-translate-y-2 hover:border-blue-400 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] text-white group cursor-pointer ${
              card5Entered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-[0.96]"
            }`}
            style={{ transitionDelay: !isMobile && hasEntered ? "590ms" : "0ms" }}
          >
            {/* Team Profiles Cluster (profiles.webp) */}
            <div className="relative h-12 w-36 group-hover:scale-105 origin-left transition-transform duration-300">
              <Image
                src="/profiles.webp"
                alt="Orbiverse team profiles"
                fill
                className="object-contain object-left filter drop-shadow-md"
              />
            </div>

            <div className="mt-6">
              <div className="text-xl sm:text-2xl font-black text-[#facc15] group-hover:text-yellow-300 leading-tight tracking-tight flex items-center gap-1.5 transition-colors duration-300">
                <span>Get Started With Us</span>
                <ArrowUpRight className="w-5 h-5 text-yellow-300 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <p className="text-xs sm:text-[13px] text-blue-100/90 leading-relaxed mt-2.5">
                Launch your digital transformation sprint with direct executive guidance.
              </p>
            </div>
          </button>

        </div>

      </div>

      {/* Optional Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center mx-auto mb-4 text-blue-400">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Orbiverse Agency Showreel
              </h3>
              <p className="text-sm text-neutral-400 max-w-md mx-auto">
                Discover how our unified brand, demand, and data squads drive exponential ARR for global ventures.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
