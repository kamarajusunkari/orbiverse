"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, HelpCircle } from "lucide-react";
import { openCtaModal } from "@/components/CtaModal";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: "What is a Drift Audit?",
    answer:
      "A comprehensive 30-minute diagnostic session. We inspect your Meta & Google ad accounts, tracking architecture, and site conversion funnels before the call. You receive a live Drift Map showing where revenue is leaking, plus your top 3 prioritized fixes ranked by ROI. Yours to keep, whether or not we partner together.",
  },
  {
    question: "What makes Orbiverse different from standard agencies?",
    answer:
      "Most agencies report what they did — impressions, clicks, vanity metrics. We report what it brought back: qualified pipeline, verified ROAS, and bottom-line revenue. We integrate full-stack software engineering with growth marketing so your website, attribution, and ads pull toward one single revenue target.",
  },
  {
    question: "Do I keep full ownership of my ad accounts and data?",
    answer:
      "Yes, 100%. All ad accounts, Google Tag Manager containers, GA4 properties, and creative assets remain strictly under your company's name. You maintain total administrative control at all times.",
  },
  {
    question: "Why fix tracking before running or scaling ads?",
    answer:
      "Because otherwise every rupee spent after is pure guesswork. When tracking is broken or double-counted, ad algorithms optimize for the wrong conversion events. We establish server-side CAPI and GA4 tracking before scaling a single rupee.",
  },
  {
    question: "Can I request a custom engagement or sprint pilot?",
    answer:
      "Yes. We offer modular 60-day sprint pilots focused on your single biggest bottleneck (e.g., Conversion Rate Optimization or Server-Side Tracking setup) before committing to a multi-channel growth retainer.",
  },
  {
    question: "How soon can we launch after onboarding?",
    answer:
      "Our standard onboarding takes 5 to 7 business days. During sprint zero, we audit tracking, configure server-side attribution, establish KPI baselines, and deliver initial campaign architecture.",
  },
  {
    question: "Do I need all nine services?",
    answer:
      "No, almost nobody does. Most clients start with two or three channels that solve their most pressing revenue bottlenecks (e.g. Server-Side Tracking + Performance PPC + High-Converting Web Architecture). We add further channels only when numbers validate scale.",
  },
  {
    question: "Can you integrate with our existing CRM and ERP?",
    answer:
      "Yes. We build custom API integrations, webhook pipelines, and automated lead routing with HubSpot, Salesforce, Zoho, ActiveCampaign, and custom PostgreSQL/Node.js backends.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 bg-transparent transition-colors scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Pill Badge + Heading */}
        <div className="mb-12 sm:mb-16 reveal-fade-up">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-500/20">
              // FAQS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md lg:text-right leading-relaxed font-normal">
              Clear answers regarding our Drift Audit, tracking architecture, and growth partnership methodology.
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Left Sticky CTA Card (Desktop only) + Right Clean Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Drift Audit Support Card (Normal flow on mobile, sticky on desktop) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-blue-50/70 to-slate-50 border border-blue-100/80 shadow-xs reveal-fade-right relative lg:sticky lg:top-28">
            <div className="w-12 h-12 rounded-2xl bg-[#101b96] text-white flex items-center justify-center mb-5 shadow-sm">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-950 tracking-tight leading-snug mb-2">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Book a 30-minute diagnostic session with our senior growth architects. We will inspect your accounts and answer any questions live.
            </p>

            <button
              type="button"
              onClick={() => openCtaModal("FAQCard")}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#101b96] text-white hover:bg-[#0c1575] transition-all shadow-md cursor-pointer hover:scale-[1.02]"
            >
              <span>Book Your Drift Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-4 text-center">
              <a
                href="mailto:hello@orbiverse.co"
                className="text-xs text-slate-500 hover:text-[#101b96] transition-colors"
              >
                Or email us directly at <span className="font-semibold text-slate-700 underline">hello@orbiverse.co</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-8 flex flex-col gap-3.5 reveal-fade-left">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#f8fafd] dark:bg-white/[0.04] border border-blue-100/90 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(16,27,150,0.03)]"
                      : "border-b border-neutral-200/70 dark:border-white/10 py-5 px-3 hover:bg-neutral-50/50 dark:hover:bg-white/[0.02] rounded-xl"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span
                      className={`font-heading transition-colors ${
                        isOpen
                          ? "font-bold text-lg sm:text-xl text-neutral-900 dark:text-white"
                          : "font-semibold text-base sm:text-lg text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "text-neutral-600 dark:text-neutral-300 bg-neutral-200/50 dark:bg-white/10"
                          : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-800 dark:group-hover:text-white"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 sm:pt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl pr-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
