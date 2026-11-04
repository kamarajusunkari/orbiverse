"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData, CATEGORIES_LIST, ServiceCategoryKey } from "@/data/services";
import { ArrowRight, Check, XCircle, Sparkles, ExternalLink, ArrowUpRight, Layers } from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | ServiceCategoryKey>("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.categoryKey === activeCategory);

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[var(--bg-color)]">
        {/* HERO */}
        <section className="py-16 sm:py-24 border-b border-[var(--border-color)] bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-[#101b96] dark:text-[#93c5fd] border border-blue-200/60 dark:border-blue-800/60 mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>ORBIVERSE CAPABILITIES · {servicesData.length} SERVICES ACROSS 5 DISCIPLINES</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.1] mb-6">
                Every service earns its place.<br />
                <span className="text-[#101b96] dark:text-[#7d8eff]">Or it goes.</span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                Organized category-wise across paid media, software engineering, search dominance, creative production, and autonomous AI pipelines. For each service: the job it does, the single metric it&apos;s judged on, and what we refuse to do.
              </p>

              {/* Quick link to 3D Artistry experience */}
              <div className="inline-flex items-center gap-3 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xs">
                <Sparkles className="w-5 h-5 text-[#101b96] dark:text-[#7d8eff] flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-[var(--text-main)] block">
                    Looking for the 3D Motion & Visual Services Page?
                  </span>
                  <span className="text-[var(--text-muted)]">
                    Explore the full scroll-driven Three.js experience with Orbit theme.
                  </span>
                </div>
                <a
                  href="/services.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#101b96] text-white hover:bg-[#1a25a8] dark:bg-[#7d8eff] dark:text-black transition-colors inline-flex items-center gap-1 flex-shrink-0"
                >
                  Open 3D Demo <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER BAR (STICKY) */}
        <section className="sticky top-20 z-40 bg-[var(--bg-color)]/95 backdrop-blur-md border-b border-[var(--border-color)] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#101b96] text-white shadow-xs dark:bg-[#7d8eff] dark:text-black"
                  : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              All Services ({servicesData.length})
            </button>

            {CATEGORIES_LIST.map((cat) => {
              const count = servicesData.filter((s) => s.categoryKey === cat.key).length;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#101b96] text-white shadow-xs dark:bg-[#7d8eff] dark:text-black"
                      : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white dark:text-black dark:bg-black/20" : "bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* SERVICES LIST (CATEGORY-WISE) */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* When viewing All or a specific category, render category headers */}
            {CATEGORIES_LIST.filter(cat => activeCategory === "all" || activeCategory === cat.key).map((category) => {
              const categoryServices = servicesData.filter((s) => s.categoryKey === category.key);
              if (categoryServices.length === 0) return null;

              return (
                <div key={category.key} className="space-y-8">
                  {/* Category Section Header */}
                  <div className="pb-4 border-b border-[var(--border-color)] flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#101b96] dark:text-[#7d8eff] block mb-1">
                        {category.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)]">
                        {category.label}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                      {category.tagline} ({categoryServices.length} {categoryServices.length === 1 ? 'service' : 'services'})
                    </p>
                  </div>

                  {/* Category Services Cards */}
                  <div className="space-y-8">
                    {categoryServices.map((service) => (
                      <div
                        key={service.id}
                        id={service.id}
                        className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#101b96]/40 dark:hover:border-[#7d8eff]/40 transition-all group"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-[var(--border-color)]/70 items-start">
                          
                          {/* Visual Thumbnail */}
                          <div className="lg:col-span-3.5 relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-[var(--border-color)] flex-shrink-0">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Left: Number, Title, Subtitle, Job */}
                          <div className="lg:col-span-4.5">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-mono font-black text-[#101b96] dark:text-[#7d8eff]">
                                {service.number}
                              </span>
                              <span className="text-[11px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-[var(--surface-alt)] text-[var(--text-muted)]">
                                {service.categoryLabel}
                              </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mb-1">
                              {service.title}
                            </h3>

                            <p className="text-xs sm:text-sm font-semibold text-[#2563eb] dark:text-[#60a5fa] mb-3">
                              {service.subtitle}
                            </p>

                            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                              <strong className="text-[var(--text-main)] font-semibold">Job:</strong> {service.job}
                            </p>
                          </div>

                          {/* Right: Judged On & We Won't */}
                          <div className="lg:col-span-4 grid grid-cols-1 gap-4 bg-[var(--surface)] p-5 rounded-2xl border border-[var(--border-color)]">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                                JUDGED ON
                              </span>
                              <p className="text-sm font-bold text-[var(--text-main)]">
                                {service.judgedOn}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-[var(--border-color)]/60">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block mb-1 flex items-center gap-1">
                                <XCircle className="w-3.5 h-3.5" />
                                WE WON&apos;T
                              </span>
                              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                                {service.weWont}
                              </p>
                            </div>
                          </div>

                        </div>

                        {/* Deliverables Checklist & Action CTA */}
                        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                          <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-3">
                              Included Deliverables
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                              {service.deliverables.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-main)] font-medium">
                                  <Check className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex-shrink-0">
                            <Link
                              href={service.ctaHref}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#101b96] text-white hover:bg-[#1a25a8] dark:bg-[#7d8eff] dark:text-black dark:hover:bg-[#93a2ff] transition-all shadow-xs hover:scale-105"
                            >
                              <span>{service.ctaLabel}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* BOTTOM AUDIT CTA */}
        <section className="py-20 bg-[var(--surface-alt)] border-t border-[var(--border-color)] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#101b96] dark:text-[#7d8eff] mb-3 block">
              NOT SURE WHICH SERVICES YOU NEED?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] mb-6">
              The Drift Audit will tell you
            </h2>
            <p className="text-base text-[var(--text-muted)] max-w-xl mx-auto mb-8">
              We diagnose where revenue is leaking first across paid media, software systems, and funnel speed. You get a prioritized action plan with exactly which 2–3 services will move the needle.
            </p>
            <Link
              href="/drift-audit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-[#101b96] text-white hover:bg-[#1a25a8] dark:bg-[#7d8eff] dark:text-black dark:hover:bg-[#93a2ff] transition-all shadow-md hover:scale-105"
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
