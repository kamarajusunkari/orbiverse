"use client";

import React from "react";
import Image from "next/image";

const CLIENT_FRAMES = [
  { id: "f49", src: "/Frame 49.png", alt: "Trusted Client Brands 1" },
  { id: "f50", src: "/Frame 50.png", alt: "Trusted Client Brands 2" },
  { id: "f51", src: "/Frame 51.png", alt: "Trusted Client Brands 3" },
  { id: "f52", src: "/Frame 52.png", alt: "Trusted Client Brands 4" },
];

export default function ClientsSection() {
  const marqueeItems = [...CLIENT_FRAMES, ...CLIENT_FRAMES, ...CLIENT_FRAMES];

  return (
    <section
      id="clients"
      className="py-14 sm:py-18 bg-[var(--surface)] border-b border-[var(--border-color)] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#2563eb] dark:text-[#60a5fa] uppercase inline-block mb-2">
          MEET OUR TRUSTED CLIENTS
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
          Trusted by 150+ Ambitious Brands &amp; Enterprises
        </h2>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="w-full overflow-hidden relative flex items-center">
        {/* Left Edge Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[var(--surface)] to-transparent z-10 pointer-events-none" />

        {/* Right Edge Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[var(--surface)] to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-8 sm:gap-12 w-max animate-clients-marquee py-2 hover:[animation-play-state:paused]">
          {marqueeItems.map((frame, idx) => (
            <div
              key={`${frame.id}-${idx}`}
              className="relative h-14 sm:h-20 w-56 sm:w-72 flex-shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:brightness-125 cursor-pointer"
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes clientsMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-clients-marquee {
          animation: clientsMarquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

