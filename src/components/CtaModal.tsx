"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Clock } from "lucide-react";

export function openCtaModal(source = "general") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("orbiverse:open-cta-modal", { detail: { source } })
    );
  }
}

export default function CtaModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    spend: "₹1,00,000 - ₹5,00,000 / mo",
    bottleneck: "High CAC / Blended ROAS Dropping",
  });

  const handleOpen = useCallback((e: Event) => {
    const customEvent = e as CustomEvent;
    if (customEvent.detail?.source) {
      setSource(customEvent.detail.source);
    }
    setIsOpen(true);
    setIsSubmitted(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener("orbiverse:open-cta-modal", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("orbiverse:open-cta-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleOpen, handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/drift-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          monthlySpend: formData.spend,
          source: `modal-${source}`,
        }),
      });
    } catch (err) {
      console.error("[CtaModal] Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cta-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Frosted Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white text-slate-900 rounded-3xl shadow-[0_25px_70px_rgba(16,27,150,0.28)] border border-slate-200 overflow-hidden z-10 transition-all duration-300 transform scale-100 my-auto">
        {/* Top Gradient Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#101b96] via-[#2563eb] to-[#7042f8]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center sm:text-left mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#101b96] text-xs font-bold mb-3 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#101b96] animate-pulse" />
                  <span>Limited March Audit Spots (Only 3 Left)</span>
                </div>

                <h3
                  id="cta-modal-title"
                  className="font-heading text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight"
                >
                  Get Your Free Drift Audit
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-medium mt-1.5 leading-relaxed">
                  We diagnose your tracking blind spots, ad spend wastage, and conversion leaks in 48 hours. 100% free, zero sales pitch.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#101b96] focus:ring-2 focus:ring-[#101b96]/15 outline-none text-sm text-slate-900 bg-white placeholder:text-slate-400 font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#101b96] focus:ring-2 focus:ring-[#101b96]/15 outline-none text-sm text-slate-900 bg-white placeholder:text-slate-400 font-medium transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#101b96] focus:ring-2 focus:ring-[#101b96]/15 outline-none text-sm text-slate-900 bg-white placeholder:text-slate-400 font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Website or Store URL *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#101b96] focus:ring-2 focus:ring-[#101b96]/15 outline-none text-sm text-slate-900 bg-white placeholder:text-slate-400 font-medium transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Monthly Ad Spend
                    </label>
                    <select
                      value={formData.spend}
                      onChange={(e) =>
                        setFormData({ ...formData, spend: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#101b96] focus:ring-2 focus:ring-[#101b96]/15 outline-none text-sm text-slate-900 bg-white font-medium transition-all cursor-pointer"
                    >
                      <option value="Under ₹50,000 / mo">Under ₹50,000 / mo</option>
                      <option value="₹50,000 - ₹2,00,000 / mo">₹50,000 - ₹2,00,000 / mo</option>
                      <option value="₹2,00,000 - ₹5,00,000 / mo">₹2,00,000 - ₹5,00,000 / mo</option>
                      <option value="₹5,00,000 - ₹15,00,000 / mo">₹5,00,000 - ₹15,00,000 / mo</option>
                      <option value="₹15,00,000+ / mo">₹15,00,000+ / mo</option>
                      <option value="Not running ads yet">Not running ads yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Core Challenge
                    </label>
                    <select
                      value={formData.bottleneck}
                      onChange={(e) =>
                        setFormData({ ...formData, bottleneck: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#101b96] focus:ring-2 focus:ring-[#101b96]/15 outline-none text-sm text-slate-900 bg-white font-medium transition-all cursor-pointer"
                    >
                      <option value="High CAC / Blended ROAS Dropping">High CAC / Falling ROAS</option>
                      <option value="Broken Attribution / Missing Tracking">Broken Attribution</option>
                      <option value="Scaling Plateau / Ad Fatigue">Scaling Plateau</option>
                      <option value="Lead Quality / Conversion Rate">Low Conversion Rate</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#101b96] hover:bg-[#0c1575] text-white font-bold text-base shadow-[0_6px_20px_rgba(16,27,150,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating Your Audit Request...
                      </span>
                    ) : (
                      <>
                        <span>Claim Free Audit Spot</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 pt-2 text-[12px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Confidential
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    48-Hr Turnaround
                  </span>
                  <span>&bull;</span>
                  <span>No Sales Pitch</span>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-950">
                Audit Request Confirmed!
              </h3>
              <p className="text-slate-600 font-medium text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.name || "Founder"}</span>. A senior growth strategist at Orbiverse is already queued to review <span className="font-semibold text-slate-900">{formData.website || "your company"}</span>. Expect your audit report within 48 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors cursor-pointer"
                >
                  Back to Overview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

