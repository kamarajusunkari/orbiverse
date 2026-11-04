"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function ServicesOverview() {
  const [filter, setFilter] = useState<"all" | "brand" | "demand" | "measure">("all");

  const filtered = filter === "all" ? servicesData : servicesData.filter(s => s.category === filter);

  return (
    <section className="py-20 border-t border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
              Nine Services · One Number
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
              Nine services. Each with one job.
            </h2>
            <p className="mt-3 text-[var(--text-muted)] max-w-2xl text-base sm:text-lg">
              You won&apos;t need all nine. We start with the ones that can move your number fastest and add the rest only when they&apos;d earn their place.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent-light)] hover:underline flex-shrink-0"
          >
            All services in detail <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[var(--accent-light)] text-white shadow-sm"
                : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            All Nine Services (9)
          </button>
          <button
            onClick={() => setFilter("brand")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "brand"
                ? "bg-[var(--accent-light)] text-white shadow-sm"
                : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            Build the brand (3)
          </button>
          <button
            onClick={() => setFilter("demand")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "demand"
                ? "bg-[var(--accent-light)] text-white shadow-sm"
                : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            Drive demand (4)
          </button>
          <button
            onClick={() => setFilter("measure")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "measure"
                ? "bg-[var(--accent-light)] text-white shadow-sm"
                : "bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-main)]"
            }`}
          >
            Measure & improve (2)
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.id}
              className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--accent-light)] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[var(--accent-light)] font-mono">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[var(--surface-alt)] text-[var(--text-muted)]">
                    {service.category === "brand"
                      ? "Brand"
                      : service.category === "demand"
                      ? "Demand"
                      : "Measure"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent-light)] transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                  <strong className="text-[var(--text-main)] font-semibold">Job:</strong> {service.job}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]/60 text-xs">
                <div className="mb-2">
                  <span className="font-semibold text-[var(--text-main)] block text-[11px] uppercase tracking-wide">
                    Judged on:
                  </span>
                  <span className="text-[var(--text-muted)]">{service.judgedOn}</span>
                </div>
                <div className="text-[11px] text-red-500/90 dark:text-red-400/90 flex items-start gap-1">
                  <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>We won&apos;t {service.weWont}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

