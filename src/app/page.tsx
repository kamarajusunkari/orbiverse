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
import ToolsUsedSection from "@/components/ToolsUsedSection";
import ServicesStackSection from "@/components/ServicesStackSection";
import FAQAccordion from "@/components/FAQAccordion";
import CtaSection from "@/components/CtaSection";
import WorkWithUsToggleSection from "@/components/WorkWithUsToggleSection";
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

          {/* TOOLS WE USE / INTEGRATIONS CATALOG (CLAY GLASSMORPHISM STYLE) */}
          <ToolsUsedSection />

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
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 reveal-fade-right">
              <div className="w-16 h-16 rounded-2xl bg-white/10 p-2 flex items-center justify-center flex-shrink-0 border border-white/20">
                <Image
                  src="/0rbb.png"
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

        {/* WHEN PEOPLE DO / DON'T WORK WITH US (INTERACTIVE TOGGLE SECTION) */}
        <WorkWithUsToggleSection />

        {/* 3-COLUMN VERTICAL SCROLLING TESTIMONIALS & CASE STUDIES WALL */}
        <TestimonialsSection />

        {/* FAQ ACCORDION */}
        <FAQAccordion />

        {/* WHITE & BLUE SHADE GRADIENT CTA BANNER (ABOVE FOOTER) */}
        <CtaSection />
        </div>
      </main>

      <Footer />
    </>
  );
}
