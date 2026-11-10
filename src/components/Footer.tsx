import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 sm:pt-24 pb-0 bg-gradient-to-b from-transparent via-blue-50/25 to-blue-100/40 dark:via-blue-950/10 dark:to-[#04060d] border-t border-neutral-200/80 dark:border-white/10 transition-colors overflow-hidden">
      {/* Subtle top ambient glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none select-none -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* 1400px Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16">
          
          {/* Brand Column (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-blue-500/10 to-transparent dark:bg-white/10 p-2 border border-blue-500/30 dark:border-white/20 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/0rbb.png"
                  alt="Orbiverse"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain filter dark:brightness-110"
                />
              </div>
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-neutral-900 dark:text-white">
                ORBIVERSE
              </span>
            </Link>
            
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed font-normal">
              Full-funnel growth architecture and software engineering moving ambitious businesses from drift into high-velocity orbit.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Based in Hyderabad · Working Worldwide
              </span>
            </div>
          </div>

          {/* Navigation Columns (Right) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Col 1: Quick link */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Quick link
              </span>
              <Link href="/" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About us
              </Link>
              <Link href="/services" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="/#approach" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                The Orbit Method
              </Link>
              <Link href="/drift-audit" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact us
              </Link>
            </div>

            {/* Col 2: Company */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Company
              </span>
              <Link href="/#case-studies" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Case Studies
              </Link>
              <Link href="/drift-audit" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Drift Audit
              </Link>
              <Link href="/services" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Client Results
              </Link>
              <a href="mailto:careers@orbiverse.co" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Careers
              </a>
              <Link href="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Our Philosophy
              </Link>
            </div>

            {/* Col 3: Services */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Services
              </span>
              <Link href="/services" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Paid Media & PPC
              </Link>
              <Link href="/services" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Full-Stack Apps
              </Link>
              <Link href="/services" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                UI/UX & 3D Design
              </Link>
              <Link href="/services" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                CRO & Funnels
              </Link>
              <Link href="/services" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Autonomous AI
              </Link>
            </div>

            {/* Col 4: Social */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Social
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 group/link"
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 group/link"
              >
                Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 group/link"
              >
                Twitter / X <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="mailto:hello@orbiverse.co"
                className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
              >
                hello@orbiverse.co
              </a>
            </div>

          </div>
        </div>

        {/* Divider & Metadata Bar */}
        <div className="border-t border-neutral-200/80 dark:border-white/10 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© 2026 Orbiverse Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="hidden md:inline text-neutral-300 dark:text-neutral-700">·</span>
            <span className="hidden md:inline">Architected for High-Velocity Scale</span>
          </div>
        </div>

        {/* Massive Signature Company Name - Placed at the very last with zero bottom whitespace & occupying full width */}
        <div className="relative w-full flex items-end justify-center select-none pointer-events-none pt-4 sm:pt-8 pb-0 mb-0 leading-none overflow-hidden">
          {/* Subtle Ambient Radial Highlight behind the text */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-[120px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(37, 99, 235, 0.25) 0%, rgba(56, 189, 248, 0.12) 40%, transparent 75%)",
              filter: "blur(40px)",
            }}
          />

          <span 
            className="font-heading font-black uppercase text-center leading-[0.78] w-full block text-transparent bg-clip-text transition-all translate-y-[2%] whitespace-nowrap bg-gradient-to-b from-[#101b96] via-[#2563eb] to-[#60a5fa] dark:from-[#93c5fd] dark:via-[#3b82f6] dark:to-[#1d4ed8]"
            style={{
              fontSize: "clamp(46px, 16.2vw, 244px)",
              letterSpacing: "-0.035em",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 15px 30px rgba(16, 27, 150, 0.12))",
            }}
          >
            ORBIVERSE
          </span>
        </div>

      </div>
    </footer>
  );
}
