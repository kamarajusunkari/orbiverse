"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a Drift Audit?",
    answer:
      "A free 30-minute deep analysis. We inspect your ad accounts (Meta & Google), tracking architecture, and website funnels before the call. You get a live drift map showing where budget is leaking away from revenue, plus your top 3 fixes ranked by impact. Yours to keep, whether or not we work together.",
  },
  {
    question: "Why fix tracking before running ads?",
    answer:
      "Because otherwise every rupee spent after is pure guesswork. When tracking is broken or double-counted, ad algorithms optimize for the wrong events and you end up scaling campaigns that lose money in the bank. We don't spend a single rupee of client ad budget until tracking is verified.",
  },
  {
    question: "Do I need all nine services?",
    answer:
      "No, almost nobody does. Most clients start with two or three channels that solve their most pressing revenue bottlenecks (e.g., Tracking fix + Performance marketing + Landing page conversion). We add other services only when the numbers prove they will earn their place.",
  },
  {
    question: "Do I keep my ad accounts and data?",
    answer:
      "Yes, 100%. All ad accounts, pixels, Google Tag Manager containers, GA4 properties, and creative assets stay strictly in your company's name. You own everything, always.",
  },
  {
    question: "Do you work outside India?",
    answer:
      "Yes. While headquartered in Hyderabad, we actively manage performance growth and media buying for brands across India, the United Kingdom, the United States, the UAE, and Australia.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 border-t border-[var(--border-color)] bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-[var(--border-color)] border-y border-[var(--border-color)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left font-semibold text-base sm:text-lg text-[var(--text-main)] hover:text-[var(--accent-light)] transition-colors cursor-pointer gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[var(--accent-light)]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pr-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

