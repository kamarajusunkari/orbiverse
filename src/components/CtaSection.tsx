"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { openCtaModal } from "@/components/CtaModal";

export default function CtaSection() {
  return (
    <section id="contact" className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-transparent transition-colors scroll-mt-24">
      <div 
        className="max-w-[1400px] mx-auto relative rounded-[32px] sm:rounded-[40px] md:rounded-[44px] overflow-hidden border border-blue-400/30 shadow-[0_24px_70px_-15px_rgba(16,27,150,0.45)] transition-all"
        style={{
          background: "linear-gradient(135deg, #060a28 0%, #0c1874 30%, #1024b8 65%, #2563eb 100%)",
        }}
      >
        
        {/* Ambient Radial Glows */}
        <div 
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none select-none opacity-70"
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full pointer-events-none select-none"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.65) 0%, rgba(6, 182, 212, 0.4) 45%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start text-white z-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/15 text-blue-100 border border-white/25 backdrop-blur-md mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              START YOUR GROWTH JOURNEY TODAY
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.12]">
              Start Your Growth Journey Today
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl font-normal">
              Still exploring? Get in touch for a free consultation or book a 30-minute Drift Audit with our senior growth architects — tailored just for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openCtaModal("BottomCta")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-white text-[#0c1874] hover:bg-neutral-100 shadow-xl shadow-black/25 hover:shadow-black/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Claim Free Drift Audit</span>
                <ArrowRight className="w-4 h-4 text-[#0c1874]" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: Visual Asset */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[440px] lg:h-full min-h-[380px] lg:min-h-[500px] flex items-end justify-center lg:justify-end overflow-hidden p-0 m-0 pointer-events-none select-none">
            <div 
              className="absolute bottom-0 right-0 w-80 sm:w-96 lg:w-[480px] h-80 sm:h-96 lg:h-[480px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, rgba(37, 99, 235, 0.4) 45%, transparent 70%)",
                filter: "blur(65px)",
              }}
            />

            <div className="relative z-10 w-full h-full flex items-end justify-center lg:justify-end">
              <Image
                src="/2cd0cf64-30e8-466f-ac8b-b1db9e82bf30.webp"
                alt="Orbiverse Asset"
                width={800}
                height={800}
                className="w-full lg:w-auto h-full max-h-[520px] object-contain object-bottom lg:object-right-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] scale-105 sm:scale-110 lg:scale-120 origin-bottom-right transition-transform duration-500 hover:scale-125"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
