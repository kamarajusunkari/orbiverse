"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function DriftAuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    email: "",
    phone: "",
    driftLocation: "",
    goals: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-[var(--bg-color)] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Context & Takeaways */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-light)] mb-2 block">
                  FREE 30-MINUTE DIAGNOSTIC
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.08] mb-4">
                  Find your<br />drift.
                </h1>
                <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                  A free 30-minute Drift Audit. We look at your ads, website and tracking before the call, so you get answers, not a sales pitch.
                </p>
              </div>

              {/* What you'll walk away with */}
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-2xl p-6 sm:p-8 space-y-6">
                <span className="text-xs font-bold tracking-wider uppercase text-[var(--text-muted)] block">
                  YOU&apos;LL WALK AWAY WITH
                </span>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-mono font-bold text-[var(--accent-light)] flex-shrink-0">
                      01
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">
                        Your drift map
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        Where budget is leaking away from revenue, channel by channel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-lg font-mono font-bold text-[var(--accent-light)] flex-shrink-0">
                      02
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">
                        A tracking check
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        Whether you can trust the numbers you&apos;re seeing today in Ads Manager & GA4.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-lg font-mono font-bold text-[var(--accent-light)] flex-shrink-0">
                      03
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-main)] mb-1">
                        Your top 3 fixes
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        Ranked by impact. Yours to keep, whether or not we work together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[var(--accent-light)]" />
                  <a href="mailto:hello@orbiverse.co" className="hover:underline">
                    hello@orbiverse.co
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[var(--accent-light)]" />
                  <span>+91 98765 43210 (call or WhatsApp)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent-light)]" />
                  <span>HITEC City, Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="border border-[var(--border-color)] bg-[var(--card-bg)] rounded-2xl p-6 sm:p-10 shadow-sm">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-main)]">
                      Audit Request Received
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[var(--text-main)]">{formData.name}</strong>. Our senior growth team is already analyzing your website (<strong className="text-[var(--text-main)]">{formData.website}</strong>). We will email you at <strong className="text-[var(--text-main)]">{formData.email}</strong> within 1 working day with calendar slots.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold border border-[var(--border-color)] hover:bg-[var(--surface-alt)]"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-[var(--text-main)] pb-2 border-b border-[var(--border-color)]">
                      Book your Drift Audit
                    </h2>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Rao"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--accent-light)] transition-colors"
                      />
                    </div>

                    {/* Company Website */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                        Company Website *
                      </label>
                      <span className="text-[11px] text-[var(--text-muted)] block mb-2">
                        So we can study your funnels, speed and tracking before the call
                      </span>
                      <input
                        type="url"
                        required
                        placeholder="https://yourbrand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--accent-light)] transition-colors"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vikram@yourbrand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--accent-light)] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--accent-light)] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Where do you think drift is? */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        Where do you think the drift is?
                      </label>
                      <select
                        value={formData.driftLocation}
                        onChange={(e) => setFormData({ ...formData, driftLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--accent-light)] transition-colors cursor-pointer"
                      >
                        <option value="">Choose one</option>
                        <option value="meta-google">Meta / Google Ads burning budget without booked revenue</option>
                        <option value="tracking">Broken or untrusted analytics & attribution</option>
                        <option value="conversion">High traffic, low conversion on website / landing pages</option>
                        <option value="agency">Agency reporting clicks and impressions, not sales</option>
                        <option value="creative">Creative fatigue and skyrocketing CAC</option>
                        <option value="all">Not sure — need an objective, end-to-end diagnosis</option>
                      </select>
                    </div>

                    {/* What would a great 6 months look like? */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                        What would a great 6 months look like?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="e.g. Scaling from ₹40L/mo to ₹1.2Cr/mo while keeping blended CAC under ₹450, or getting 50+ qualified admissions enquiries per month..."
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] text-sm focus:outline-none focus:border-[var(--accent-light)] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-base font-semibold bg-[#110d3f] hover:bg-[#201861] text-white dark:bg-[#7252f2] dark:hover:bg-[#8567ff] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Analyzing and submitting...</span>
                      ) : (
                        <>
                          <span>Book my free Drift Audit →</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-[var(--text-muted)]">
                      We reply within one working day. Your details are only used to arrange your audit. No sales decks, no pitches.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

