"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface CategoryData {
  id: string;
  label: string;
  items: FAQItem[];
}

const FAQ_DATA: CategoryData[] = [
  {
    id: "general",
    label: "General",
    items: [
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
        question: "How do I manage my account and communications?",
        answer:
          "Every client gets a dedicated Slack or Teams channel with direct access to senior growth architects, full-stack engineers, and weekly sprint dashboards. No junior account managers or endless back-and-forth email chains.",
      },
      {
        question: "Can I request a custom engagement or trial?",
        answer:
          "Yes. We offer modular 60-day sprint pilots focused on your single biggest bottleneck (e.g., Conversion Rate Optimization or Server-Side Tracking setup) before committing to a multi-channel growth retainer.",
      },
      {
        question: "How soon can we launch after onboarding?",
        answer:
          "Our standard onboarding takes 5 to 7 business days. During sprint zero, we audit tracking, configure server-side attribution, establish KPI baselines, and deliver initial campaign architecture.",
      },
      {
        question: "How do I contact customer support or schedule calls?",
        answer:
          "Reach us anytime via direct Slack ping, email at hello@orbiverse.co, or schedule a strategy review directly on your dedicated growth architect's calendar.",
      },
    ],
  },
  {
    id: "account-security",
    label: "Account & security",
    items: [
      {
        question: "Do I keep full ownership of my ad accounts and data?",
        answer:
          "Yes, 100%. All ad accounts, Google Tag Manager containers, GA4 properties, and creative assets remain strictly under your company's name. You maintain total administrative control at all times.",
      },
      {
        question: "Is my data and financial information safe?",
        answer:
          "Absolutely. We operate under strict mutual NDAs and follow enterprise security protocols. We only request least-privilege partner access to ad accounts and never store sensitive customer billing credentials.",
      },
      {
        question: "Why fix tracking before running or scaling ads?",
        answer:
          "Because otherwise every rupee spent after is pure guesswork. When tracking is broken or double-counted, ad algorithms optimize for the wrong conversion events. We establish server-side CAPI and GA4 tracking before scaling a single rupee.",
      },
      {
        question: "How do you handle multi-channel attribution security?",
        answer:
          "We configure cookieless first-party tracking and server-side event deduplication that complies with GDPR, CCPA, and Apple iOS 14.5+ privacy regulations without data leaks.",
      },
    ],
  },
  {
    id: "features-tools",
    label: "Features & tools",
    items: [
      {
        question: "Do I need all nine services?",
        answer:
          "No, almost nobody does. Most clients start with two or three channels that solve their most pressing revenue bottlenecks (e.g. Server-Side Tracking + Performance PPC + High-Converting Web Architecture). We add further channels only when numbers validate scale.",
      },
      {
        question: "What tech stack do your web engineers build with?",
        answer:
          "We specialize in modern, high-performance web frameworks including Next.js, React, Tailwind CSS, TypeScript, and Three.js for interactive 3D experiences, ensuring sub-second load times and 95+ Google Lighthouse scores.",
      },
      {
        question: "Can you integrate with our existing CRM and ERP?",
        answer:
          "Yes. We build custom API integrations, webhook pipelines, and automated lead routing with HubSpot, Salesforce, Zoho, ActiveCampaign, and custom PostgreSQL/Node.js backends.",
      },
      {
        question: "Do you offer autonomous AI and workflow automation?",
        answer:
          "Yes. We build automated CRM syncs, AI inbound lead qualification bots, dynamic ad creative pipelines, and executive revenue reporting dashboards.",
      },
    ],
  },
];

export default function FAQAccordion() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentCategory =
    FAQ_DATA.find((c) => c.id === activeCategoryId) || FAQ_DATA[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setOpenIndex(0); // Open first item by default on category switch
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-transparent transition-colors">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Pill Badge + Split Heading & Description (Matching Reference Image) */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-500/20">
              // FAQS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
              Frequently asked question
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md lg:text-right leading-relaxed font-normal">
              here&apos;s everything you need to know to get started, manage your account, and troubleshoot the most frequent issues.
            </p>
          </div>
        </div>

        {/* 2-Column Body: Left Category Tabs + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Category Pills */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {FAQ_DATA.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`text-left px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all whitespace-nowrap cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-[#eef5ff] text-[#101b96] border border-[#d0e3ff] shadow-sm dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30"
                      : "bg-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white border border-transparent"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {currentCategory.items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#f8fafd] dark:bg-white/[0.04] border border-blue-100/90 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(16,27,150,0.03)]"
                      : "border-b border-neutral-200/70 dark:border-white/10 py-5 px-2 hover:bg-neutral-50/50 dark:hover:bg-white/[0.02] rounded-xl"
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
