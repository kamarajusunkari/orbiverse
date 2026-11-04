import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DriftVsOrbit from "@/components/DriftVsOrbit";
import ServicesStackSection from "@/components/ServicesStackSection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  XCircle,
  Sparkles,
  Target,
  BarChart3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 relative">
        {/* IMMERSIVE HERO SECTION WITH PRELOADER (STICKY) */}
        <HeroSection />

        {/* CONTENT CURTAIN: SLIDES UP OVER STICKY HERO */}
        <div className="relative z-10 bg-[var(--bg-color)]">
          {/* ABOUT US SECTION (SECTION 2 - MATCHING REFERENCE IMAGE) */}
          <AboutSection />

          {/* SERVICES STACKING CARDS SECTION (MATCHING REFERENCE DESIGN & STACK ANIMATION) */}
          <ServicesStackSection />

          {/* PROVEN IMPACT & CASE STUDIES MARQUEE CAROUSEL */}
          <CaseStudiesSection />

          {/* DRIFT VS ORBIT SECTION */}
          <section id="drift-orbit" className="py-20 bg-[var(--bg-color)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DriftVsOrbit />
            </div>
          </section>

          {/* AGILE 5-PHASE EXECUTION METHODOLOGY */}
          <ProcessSection />

        {/* BOLD AGENCY BANNER */}
        <section className="py-16 bg-[#0b0826] text-white border-y border-[#261f5c] relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
            <Image
              src="/2d9b0edc-3651-4bae-b2e7-1d024722e466.webp"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#5b3bd1]/20 blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 reveal-fade-right">
              <div className="w-16 h-16 rounded-2xl bg-white/10 p-2 flex items-center justify-center flex-shrink-0 border border-white/20">
                <Image
                  src="/logo.png"
                  alt="Orbiverse"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter brightness-125"
                />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Most agencies report what they did.<br />
                <span className="text-[#a892ff]">We report what it brought back.</span>
              </p>
            </div>

            <Link
              href="/drift-audit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-[#0b0826] hover:bg-neutral-100 transition-colors flex-shrink-0 reveal-fade-left delay-100"
            >
              See our reporting framework
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* THE ORBIT METHOD (OUR APPROACH) */}
        <section id="approach" className="py-20 border-t border-[var(--border-color)] bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade-up">
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)]">
                The Orbit Method
              </h2>
              <p className="text-[var(--text-muted)] text-base mt-3">
                How we pull dispersed, drifting ad spend into a tight, profitable orbit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 relative reveal-fade-up delay-100">
                <span className="text-xs font-mono font-bold text-[var(--accent-light)] block mb-4">
                  (01)
                </span>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Fix the measurement
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  We don&apos;t spend a rupee of your budget until tracking is right. Otherwise everything after is a guess.
                </p>
              </div>

              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 relative reveal-fade-up delay-200">
                <span className="text-xs font-mono font-bold text-[var(--accent-light)] block mb-4">
                  (02)
                </span>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Agree the centre
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  One number we&apos;re both judged on, written down: cost per qualified lead, sales, or net revenue.
                </p>
              </div>

              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 relative reveal-fade-up delay-300">
                <span className="text-xs font-mono font-bold text-[var(--accent-light)] block mb-4">
                  (03)
                </span>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Give every channel a job
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Only the channels that can move that number get budget. The rest wait until they can earn their place.
                </p>
              </div>

              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 relative reveal-fade-up delay-400">
                <span className="text-xs font-mono font-bold text-[var(--accent-light)] block mb-4">
                  (04)
                </span>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                  Cut, keep or double
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Every month, every campaign gets one of three verdicts. No campaign survives on habit.
                </p>
              </div>
            </div>

            {/* Three Verdicts Sub-block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-5 rounded-lg border border-red-200 dark:border-red-900/40 bg-red-50/30 dark:bg-red-950/10 reveal-fade-right delay-200">
                <span className="text-sm font-bold text-red-600 dark:text-red-400 block mb-1">
                  Cut
                </span>
                <p className="text-xs text-[var(--text-muted)]">
                  Not paying back. Budget moves out the same month.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-amber-200 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10 reveal-fade-up delay-300">
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400 block mb-1">
                  Keep
                </span>
                <p className="text-xs text-[var(--text-muted)]">
                  Steady and profitable. We protect it and keep testing around it.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/10 reveal-fade-left delay-400">
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                  Double
                </span>
                <p className="text-xs text-[var(--text-muted)]">
                  Clearly winning. It gets more budget, fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FROM DRIFT TO ORBIT (CASE STUDIES) */}
        <section id="work" className="py-20 border-t border-[var(--border-color)] bg-[var(--bg-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
                PROVEN IMPACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)]">
                From drift to orbit
              </h2>
              <p className="text-[var(--text-muted)] text-base mt-3">
                Real accounts before and after establishing true central measurement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case 1 */}
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[var(--text-muted)] tracking-wider uppercase block mb-1">
                    D2C BRAND · META + GOOGLE
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">
                    Aura Naturals
                  </h3>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-[var(--surface-alt)] mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-red-500 block">DRIFT (Before)</span>
                      <span className="text-sm font-semibold text-[var(--text-main)]">₹840 CAC</span>
                      <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">3.2% cart completion</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-emerald-500 block">ORBIT (After)</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">₹320 CAC</span>
                      <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">8.9% cart completion</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)] italic">
                  Cut 3 vanity ad sets burning ₹4L/mo, consolidated spend into high-AOV creative funnels, scaling revenue 2.8x.
                </p>
              </div>

              {/* Case 2 */}
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[var(--text-muted)] tracking-wider uppercase block mb-1">
                    EDUCATION · LEAD GENERATION
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">
                    Zenith Global Ed
                  </h3>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-[var(--surface-alt)] mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-red-500 block">DRIFT (Before)</span>
                      <span className="text-sm font-semibold text-[var(--text-main)]">₹950 Junk Leads</span>
                      <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">Sales team frustrated</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-emerald-500 block">ORBIT (After)</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">₹390 Qualified</span>
                      <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">31% admissions rate</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)] italic">
                  Replaced broad form fills with 2-step qualifying landing page quiz. Disqualified junk before it entered the CRM.
                </p>
              </div>

              {/* Case 3 */}
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[var(--text-muted)] tracking-wider uppercase block mb-1">
                    B2B & SERVICES · HYBRID
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">
                    Vanguard Tech
                  </h3>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-[var(--surface-alt)] mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-red-500 block">DRIFT (Before)</span>
                      <span className="text-sm font-semibold text-[var(--text-main)]">Vanity clicks</span>
                      <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">No CRM attribution</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-emerald-500 block">ORBIT (After)</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">52 SQLs / mo</span>
                      <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">₹1.8Cr pipeline added</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)] italic">
                  Integrated HubSpot with Conversions API. Paid search now only bids on deals that reach qualification stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE ORBIT RULES & FIT / NOT A FIT */}
        <section className="py-20 border-t border-[var(--border-color)] bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
                WHAT YOU CAN HOLD US TO
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)]">
                The Orbit Rules
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                <ShieldCheck className="w-6 h-6 text-[var(--accent-light)] mb-3" />
                <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                  The senior people stay
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  The senior people who audit you stay on your account. No pitch team followed by a hand-off to juniors.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                <BarChart3 className="w-6 h-6 text-[var(--accent-light)] mb-3" />
                <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                  One number on page one
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Every report opens with what you spent, what came back, and what we&apos;re changing.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                <Target className="w-6 h-6 text-[var(--accent-light)] mb-3" />
                <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                  You own everything
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Ad accounts, pixels, analytics and data stay in your name, always.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                <TrendingUp className="w-6 h-6 text-[var(--accent-light)] mb-3" />
                <h3 className="text-base font-bold text-[var(--text-main)] mb-1">
                  We&apos;ll tell you to cut
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  If a channel isn&apos;t paying back, you&apos;ll hear it from us first, even if we run it.
                </p>
              </div>
            </div>

            {/* Fit vs Not a Fit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 sm:p-8 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/20 dark:bg-emerald-950/10">
                <h4 className="text-lg font-bold text-[var(--text-main)] flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  We&apos;re a fit if you…
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    already spend on marketing but can&apos;t tell what&apos;s working
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    want one partner accountable for the result, not five vendors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    care about leads and sales more than followers and impressions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    are ready to grow beyond your city, or your country
                  </li>
                </ul>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/20 dark:bg-red-950/10">
                <h4 className="text-lg font-bold text-[var(--text-main)] flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-red-500" />
                  We&apos;re not a fit if you…
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    want to grow followers as the main goal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    would rather not look at the actual numbers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    want us to launch campaigns before tracking is fixed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    need a vendor to follow a plan, not a partner to challenge it
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3-COLUMN VERTICAL SCROLLING TESTIMONIALS & CASE STUDIES WALL */}
        <TestimonialsSection />

        {/* FAQ ACCORDION */}
        <FAQAccordion />

        {/* BOTTOM CTA BANNER */}
        <section className="py-20 bg-gradient-to-br from-[#120a3b] via-[#09071a] to-[#07060f] text-white border-t border-[var(--border-color)] relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-3 block reveal-fade-up">
              FIND OUT WHERE YOUR BUDGET IS DRIFTING
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight reveal-fade-up delay-100">
              Book your free Drift Audit →
            </h2>
            <p className="text-sm sm:text-base text-indigo-200/80 max-w-xl mx-auto mb-8 reveal-fade-up delay-200">
              30 minutes. We inspect your Meta & Google ad accounts, tracking architecture and site speed before the call. No sales decks, just real numbers.
            </p>
            <div className="reveal-scale-up delay-300 inline-block">
              <Link
                href="/drift-audit"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white text-[#120a3b] hover:bg-neutral-100 transition-all shadow-xl hover:scale-105"
              >
                Claim your 30-min audit now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
