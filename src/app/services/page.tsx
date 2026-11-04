"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";
import { ArrowRight, Check, XCircle, Sparkles, ExternalLink } from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "brand" | "demand" | "measure">("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[var(--bg-color)]">
        {/* HERO */}
        <section className="py-16 sm:py-24 border-b border-[var(--border-color)] bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-3 block">
                SERVICES · NINE SERVICES, ONE NUMBER
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.1] mb-6">
                Every service earns its place.<br />
                <span className="text-[var(--accent-light)]">Or it goes.</span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                For each service: the job it does, the number it&apos;s judged on, and what we refuse to do. Most clients start with two or three and add more as the numbers justify it.
              </p>

              {/* Quick link to 3D Artistry experience */}
              <div className="inline-flex items-center gap-3 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xs">
                <Sparkles className="w-5 h-5 text-[var(--accent-light)] flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[var(--text-main)] block">
                    Looking for the 3D Motion & Visual Services Page?
                  </span>
                  <span className="text-[var(--text-muted)]">
                    Explore the full scroll-driven 3D Three.js experience with Orbit theme.
                  </span>
                </div>
                <a
                  href="/services.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--accent-light)] text-white hover:opacity-90 transition-opacity inline-flex items-center gap-1 flex-shrink-0"
                >
                  Open 3D Demo <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <section className="sticky top-20 z-40 bg-[var(--bg-color)]/95 backdrop-blur-md border-b border-[var(--border-color)] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[var(--accent-light)] text-white shadow-xs"
                  : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              All Services (9)
            </button>
            <button
              onClick={() => setActiveCategory("brand")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === "brand"
                  ? "bg-[var(--accent-light)] text-white shadow-xs"
                  : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              Build the brand (3)
            </button>
            <button
              onClick={() => setActiveCategory("demand")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === "demand"
                  ? "bg-[var(--accent-light)] text-white shadow-xs"
                  : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              Drive demand (4)
            </button>
            <button
              onClick={() => setActiveCategory("measure")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === "measure"
                  ? "bg-[var(--accent-light)] text-white shadow-xs"
                  : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              Measure & improve (2)
            </button>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-2xl p-6 sm:p-10 shadow-xs hover:border-[var(--accent-light)]/50 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[var(--border-color)]/70">
                  {/* Left: Number, Title, Job */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono font-bold text-[var(--accent-light)]">
                        {service.number}
                      </span>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                        {service.categoryLabel} · {service.categorySubtitle}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mb-3">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      <strong className="text-[var(--text-main)] font-semibold">Job:</strong> {service.job}
                    </p>
                  </div>

                  {/* Middle: Judged On & We Won't */}
                  <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[var(--surface)] p-6 rounded-xl border border-[var(--border-color)]">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                        JUDGED ON
                      </span>
                      <p className="text-sm font-semibold text-[var(--text-main)]">
                        {service.judgedOn}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block mb-1 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" />
                        WE WON&apos;T
                      </span>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {service.weWont}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-4">
                    What this includes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-main)]">
                        <Check className="w-4 h-4 text-[var(--accent-light)] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM AUDIT CTA */}
        <section className="py-20 bg-[var(--surface-alt)] border-t border-[var(--border-color)] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3 block">
              NOT SURE WHICH SERVICES YOU NEED?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] mb-6">
              The Drift Audit will tell you
            </h2>
            <p className="text-base text-[var(--text-muted)] max-w-xl mx-auto mb-8">
              We diagnose where revenue is leaking first. You get a prioritized action plan with exactly which 2–3 services will move the needle.
            </p>
            <Link
              href="/drift-audit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#110d3f] text-white hover:bg-[#201861] dark:bg-[#7252f2] dark:hover:bg-[#8567ff] transition-all shadow-md hover:scale-105"
            >
              Book your free Drift Audit →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

