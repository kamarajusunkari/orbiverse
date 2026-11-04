import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Users, Shield, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[var(--bg-color)]">
        {/* HERO */}
        <section className="py-20 border-b border-[var(--border-color)] bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-3 block">
                ABOUT ORBIVERSE · HYDERABAD, INDIA
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.1] mb-6">
                Built by people who ran the accounts.
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                Orbiverse isn&apos;t a sales team with a delivery team hidden behind it. We&apos;re practitioners who have spent years inside ad accounts, analytics dashboards and growth teams, across brands, budgets and markets. We started Orbiverse because we were tired of watching good budgets drift.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-10 border-t border-[var(--border-color)] text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] font-mono">
                  8+ yrs
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  Combined team experience
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] font-mono">
                  ₹25Cr+
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  Ad spend managed
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] font-mono">
                  45+
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  Brands and campaigns scaled
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] font-mono">
                  1.8 lakh+
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  High-intent leads delivered
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ORBIVERSE */}
        <section className="py-20 border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
                  ORIGIN STORY
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
                  Why &ldquo;Orbiverse&rdquo;
                </h2>
              </div>

              <div className="md:col-span-2 space-y-6 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                <p>
                  Across years of scaling brands in India and abroad, our team kept seeing the same pattern. Ads, SEO, social and the website were each run by different people, each chasing their own metric. Every report looked good. The business didn&apos;t grow.
                </p>
                <p className="text-[var(--text-main)] font-semibold">
                  We call that drift. The fix is gravity: one number at the centre, and every channel pulled into orbit around it. That&apos;s the whole company, in one word.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE TEAM STRUCTURE */}
        <section className="py-20 border-b border-[var(--border-color)] bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
                THE TEAM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mb-3">
                A senior core team. Specialists when you need them.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)]">
                You don&apos;t pay for a big office or a bench of juniors. You get experienced people on strategy and spend, plus hand-picked specialists for each project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CORE TEAM */}
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-2xl p-6 sm:p-8">
                <span className="text-xs font-mono font-bold text-[var(--accent-light)] uppercase tracking-wider block mb-2">
                  CORE TEAM
                </span>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">
                  On your account every week
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-main)]">
                      Growth strategy & paid media
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Planning, budgets, Meta and Google Ads
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-main)]">
                      SEO & content
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Search, AI visibility and content strategy
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-main)]">
                      Brand & creative direction
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Positioning, identity and ad concepts
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-main)]">
                      Analytics & tracking
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Measurement, attribution and reporting
                    </p>
                  </div>
                </div>
              </div>

              {/* SPECIALIST NETWORK */}
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[var(--accent-light)] uppercase tracking-wider block mb-2">
                    SPECIALIST NETWORK
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-6">
                    Brought in project by project
                  </h3>

                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {[
                      "Graphic designers",
                      "Video editors & motion",
                      "Web developers",
                      "Copywriters",
                      "Photographers & shoot crews",
                      "Influencer managers",
                      "Regional-language writers",
                    ].map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--surface-alt)] text-xs font-medium text-[var(--text-main)]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                  Every specialist works to the core team&apos;s brief and is reviewed against the same number as everyone else.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE WE'VE DONE THE WORK */}
        <section className="py-20 border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
              INDUSTRY EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mb-12">
              Where we&apos;ve done the work
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "D2C & e-commerce",
                  desc: "Lowering cost per purchase and raising order value for online brands, from the first sale to scale, on Shopify and marketplaces.",
                },
                {
                  title: "Education & franchising",
                  desc: "Admissions campaigns and franchise-partner acquisition, where one good enquiry is worth more than a hundred cheap ones.",
                },
                {
                  title: "Real estate & local business",
                  desc: "Site visits, walk-ins, calls and bookings for developers, clinics and multi-location businesses, driven by search, maps and local ads.",
                },
                {
                  title: "Lead generation",
                  desc: "High-volume lead programmes for service businesses, with quality tracked all the way to closed sales, not just form fills.",
                },
                {
                  title: "Political campaigns",
                  desc: "Voter registration drives, outreach and social media for candidates and public figures, run within Meta and Google political-ad rules.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] gap-4"
                >
                  <h3 className="text-lg font-bold text-[var(--text-main)] sm:w-1/3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] sm:w-2/3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUR THINGS WE BELIEVE */}
        <section className="py-20 border-b border-[var(--border-color)] bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
              WHAT YEARS IN THE ACCOUNTS TAUGHT US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mb-12">
              Four things we believe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  text: "The channel with the best-looking report is rarely the one growing the business.",
                },
                {
                  num: "02",
                  text: "Wasted budget hides in the campaigns nobody looked at this month.",
                },
                {
                  num: "03",
                  text: "A strong brand and a better landing page often beat a bigger ad budget.",
                },
                {
                  num: "04",
                  text: "Clients who see the real numbers make braver, better decisions.",
                },
              ].map((belief) => (
                <div
                  key={belief.num}
                  className="p-8 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] flex items-start gap-5"
                >
                  <span className="text-2xl font-mono font-black text-[var(--accent-light)]">
                    {belief.num}
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-[var(--text-main)] leading-snug">
                    {belief.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION STRIP */}
        <section className="py-16 bg-[#0b0826] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-indigo-300 block mb-1">
                BASED IN HYDERABAD. WORKING WITH BRANDS IN:
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                India · UK · US · UAE · Australia
              </div>
            </div>

            <Link
              href="/drift-audit"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-white text-[#0b0826] hover:bg-neutral-100 transition-colors shadow-md"
            >
              Book a Drift Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

