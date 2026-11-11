"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Clock,
  LineChart,
  Target,
  Zap,
} from "lucide-react";

export default function DriftAuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    monthlySpend: "₹1,00,000 - ₹5,00,000 / month",
    bottleneck: "High CAC / Ad Spend Not Converting",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/drift-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "drift-audit-page" }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please email hello@orbiverse.co directly.";
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40 text-slate-900 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header Navigation */}
      <header className="w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/15 via-blue-500/10 to-transparent p-1.5 border border-blue-500/25 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/0rbb.png"
                alt="Orbiverse"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-slate-950">
              ORBIVERSE
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#101b96] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Value Proposition & What You Receive */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#101b96] text-xs font-bold mb-4 shadow-2xs w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Funnel Growth Diagnostic · 100% Free</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 leading-[1.12] mb-4">
              Stop budget waste. Put marketing back into <span className="text-[#101b96]">orbit.</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed font-normal mb-8">
              We inspect your Google &amp; Meta ad accounts, first-party tracking architecture, and checkout funnel before our call. You walk away with a prioritized blueprint to compound revenue.
            </p>

            {/* Deliverables List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <LineChart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Live Drift Map</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Visual audit of where ad spend and traffic leak before converting into net revenue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Tracking &amp; CAPI Signal Check</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Verify server-side attribution, Meta Conversions API (CAPI), and GA4 event deduplication.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Top 3 Prioritized ROI Fixes</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Actionable quick-wins you can implement right away — yours to keep whether we partner or not.
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict NDA &middot; 100% confidential partner access</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Delivered within 24–48 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Audit Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#101b96] via-[#2563eb] to-[#38bdf8]" />

              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-950 tracking-tight">
                      Claim Your Free Drift Audit
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Fill in your details below. A senior growth architect will review your properties.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#101b96] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#101b96] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#101b96] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Website / Store URL *
                        </label>
                        <input
                          type="url"
                          required
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://yourbrand.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#101b96] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Monthly Ad Spend
                        </label>
                        <select
                          name="monthlySpend"
                          value={formData.monthlySpend}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#101b96] focus:bg-white transition-all"
                        >
                          <option value="Under ₹50,000 / month">Under ₹50,000 / month</option>
                          <option value="₹50,000 - ₹2,00,000 / month">₹50,000 - ₹2,00,000 / month</option>
                          <option value="₹2,00,000 - ₹5,00,000 / month">₹2,00,000 - ₹5,00,000 / month</option>
                          <option value="₹5,00,000 - ₹15,00,000 / month">₹5,00,000 - ₹15,00,000 / month</option>
                          <option value="₹15,00,000+ / month">₹15,00,000+ / month</option>
                          <option value="Not running ads yet">Not running ads yet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Primary Bottleneck
                        </label>
                        <select
                          name="bottleneck"
                          value={formData.bottleneck}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#101b96] focus:bg-white transition-all"
                        >
                          <option value="High CAC / Ad Spend Not Converting">High CAC / Ad Spend Not Converting</option>
                          <option value="Tracking & GA4 Attribution Broken">Tracking &amp; GA4 Attribution Broken</option>
                          <option value="Storefront / Landing Page Drop-offs">Storefront / Landing Page Drop-offs</option>
                          <option value="Scaling Past Current Plateau">Scaling Past Current Plateau</option>
                          <option value="Looking for Full-Funnel Growth Partner">Looking for Full-Funnel Partner</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Specific Challenges / Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us about your target CPA, recent scaling hurdles, or active channels..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#101b96] focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full font-semibold text-white bg-[#101b96] hover:bg-[#0c1575] disabled:opacity-60 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer text-base mt-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Audit Request...</span>
                      ) : (
                        <>
                          <span>Claim Your Free Drift Audit</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-500 pt-1">
                      No spam. No high-pressure pitches. Sent directly to{" "}
                      <span className="font-semibold text-slate-700">hello@orbiverse.co</span>.
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="py-12 px-4 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-950 mb-2">
                    Drift Audit Request Confirmed!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. A copy has been dispatched to{" "}
                    <span className="font-semibold text-slate-900">hello@orbiverse.co</span>. A senior growth strategist is already reviewing your properties.
                  </p>
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/80 text-xs text-blue-900 max-w-md text-left mb-6">
                    <p className="font-semibold mb-1">What happens next?</p>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700">
                      <li>We audit your site speed, tracking parameters, and ad pixels.</li>
                      <li>We map your leakage points and prepare a custom Drift Map.</li>
                      <li>We will email you at <span className="font-bold">{formData.email}</span> within 24 hours.</li>
                    </ul>
                  </div>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                  >
                    <span>Return to Homepage</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Orbiverse Media &amp; Strategy LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
