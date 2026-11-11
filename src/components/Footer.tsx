"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { openCtaModal } from "@/components/CtaModal";

export default function Footer() {
  return (
    <footer className="relative w-full pt-16 sm:pt-24 pb-0 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/40 border-t border-slate-200/80 transition-colors overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 reveal-fade-up">
          
          {/* Brand Column (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-3 w-fit group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600/15 via-blue-500/10 to-transparent p-2 border border-blue-500/25 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/0rbb.png"
                  alt="Orbiverse"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-slate-950">
                ORBIVERSE
              </span>
            </a>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-sm leading-relaxed font-normal">
              Full-funnel growth architecture and software engineering moving ambitious businesses from drift into high-velocity orbit.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Based in Hyderabad &middot; Working Worldwide
              </span>
            </div>
          </div>

          {/* Navigation Columns (Right) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Col 1: Quick link */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Quick Links
              </span>
              <a href="#" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                About Us
              </a>
              <a href="#services" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Services
              </a>
              <a href="#process" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                The Orbit Method
              </a>
              <button
                type="button"
                onClick={() => openCtaModal("FooterLink")}
                className="text-left text-sm text-slate-600 hover:text-[#101b96] transition-colors cursor-pointer"
              >
                Claim Audit
              </button>
            </div>

            {/* Col 2: Company */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Explore
              </span>
              <a href="#case-studies" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Case Studies
              </a>
              <button
                type="button"
                onClick={() => openCtaModal("FooterExplore")}
                className="text-left text-sm text-slate-600 hover:text-[#101b96] transition-colors cursor-pointer"
              >
                Free Drift Audit
              </button>
              <a href="#testimonials" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Client Reviews
              </a>
              <a href="#faq" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                FAQ
              </a>
              <a href="mailto:careers@orbiverse.co" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Careers
              </a>
            </div>

            {/* Col 3: Services */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Capabilities
              </span>
              <a href="#services" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Paid Media &amp; PPC
              </a>
              <a href="#services" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Full-Stack Apps
              </a>
              <a href="#services" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                UI/UX &amp; 3D Design
              </a>
              <a href="#services" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                CRO &amp; Funnels
              </a>
              <a href="#services" className="text-sm text-slate-600 hover:text-[#101b96] transition-colors">
                Deterministic Attribution
              </a>
            </div>

            {/* Col 4: Social */}
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Connect
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-[#101b96] transition-colors inline-flex items-center gap-1 group/link"
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-[#101b96] transition-colors inline-flex items-center gap-1 group/link"
              >
                Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-[#101b96] transition-colors inline-flex items-center gap-1 group/link"
              >
                Twitter / X <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </a>
              <a
                href="mailto:hello@orbiverse.co"
                className="text-sm text-[#101b96] font-semibold hover:underline inline-flex items-center gap-1"
              >
                hello@orbiverse.co
              </a>
            </div>

          </div>
        </div>

        {/* Divider & Metadata Bar */}
        <div className="border-t border-slate-200/80 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Orbiverse Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hidden md:inline text-slate-300">&middot;</span>
            <span className="hidden md:inline font-medium">Architected for High-Velocity Scale</span>
          </div>
        </div>

        {/* Massive Signature Company Name */}
        <div className="relative w-full flex items-end justify-center select-none pointer-events-none pt-4 sm:pt-8 pb-0 mb-0 leading-none overflow-hidden">
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] h-[120px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(37, 99, 235, 0.18) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 75%)",
              filter: "blur(40px)",
            }}
          />

          <span 
            className="font-heading font-black uppercase text-center leading-[0.78] w-full block text-transparent bg-clip-text transition-all translate-y-[2%] whitespace-nowrap bg-gradient-to-b from-[#101b96] via-[#2563eb] to-[#60a5fa]"
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
