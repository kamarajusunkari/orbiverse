import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — Orbiverse Media & Strategy LLP",
  description: "Terms of service and engagement guidelines for Orbiverse Media & Strategy LLP.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      <header className="w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/15 via-blue-500/10 to-transparent p-1.5 border border-blue-500/25 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
              <Image src="/0rbb.png" alt="Orbiverse" width={36} height={36} className="w-full h-full object-contain" priority />
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-slate-950">ORBIVERSE</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#101b96] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-[900px] mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Terms of Service
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight mt-3">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Last Updated: January 1, 2026 &middot; Orbiverse Media &amp; Strategy LLP
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website at orbiverse.co, requesting a Drift Audit, or engaging Orbiverse Media &amp; Strategy LLP for growth marketing, software development, or advertising advisory, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">2. Services and Diagnostics</h2>
            <p>
              Orbiverse provides performance marketing consulting, full-stack software development, Conversion Rate Optimization (CRO), and attribution diagnostics. Preliminary audits (including the &ldquo;Drift Audit&rdquo;) represent professional analysis based on data shared by the client and do not constitute an explicit commercial guarantee of future revenue or ad platform algorithm outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">3. Intellectual Property &amp; Account Ownership</h2>
            <p>
              Our client promise is absolute transparency: you retain 100% administrative ownership and control of your advertising accounts, Google Tag Manager containers, GA4 properties, and custom software repositories. Orbiverse retains intellectual property rights only over proprietary diagnostic frameworks and pre-existing code libraries.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">4. Client Responsibilities</h2>
            <p>
              Clients agree to provide accurate business information and grant legitimate partner-level access required to conduct requested audits. You warrant that all ad creatives, trademarks, and products advertised comply with applicable advertising laws and platform policies (including Meta and Google Ads advertising standards).
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Orbiverse Media &amp; Strategy LLP shall not be liable for indirect, incidental, or consequential damages resulting from platform downtime, ad network policy rejections, or external algorithm updates implemented by third-party advertising platforms.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction resting in the courts of Hyderabad, Telangana.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">7. Contact Information</h2>
            <p>
              For legal inquiries or notices regarding these terms:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 text-sm">
              <p className="font-semibold text-slate-900">Orbiverse Media &amp; Strategy LLP</p>
              <p className="text-slate-600">Email: <a href="mailto:hello@orbiverse.co" className="text-[#101b96] underline font-medium">hello@orbiverse.co</a></p>
              <p className="text-slate-600">Location: Hyderabad, Telangana, India</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-slate-200 bg-slate-50 py-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Orbiverse Media &amp; Strategy LLP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-900 font-medium">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-900 font-medium">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
