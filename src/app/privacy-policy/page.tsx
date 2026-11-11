import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Orbiverse Media & Strategy LLP",
  description: "Privacy Policy and data protection terms for Orbiverse Media & Strategy LLP.",
};

export default function PrivacyPolicyPage() {
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
            Legal &amp; Compliance
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-slate-950 tracking-tight mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Last Updated: January 1, 2026 &middot; Orbiverse Media &amp; Strategy LLP
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">1. Introduction</h2>
            <p>
              Orbiverse Media &amp; Strategy LLP (&ldquo;Orbiverse&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal data of visitors and clients who interact with our website, services, and digital marketing diagnostics.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>We may collect information you voluntarily provide to us when you request an audit or contact us:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Name, work email address, phone/WhatsApp number, and company name.</li>
              <li><strong>Business Information:</strong> Website URL, monthly advertising spend tier, core growth bottlenecks, and campaign notes.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, referral URLs, operating system, and anonymous interaction metrics collected through cookies and first-party analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Conduct requested marketing audits, diagnostic reports, and performance strategy sessions.</li>
              <li>Communicate directly regarding your requested Drift Audit deliverables via email or phone.</li>
              <li>Comply with applicable legal obligations and enforce our service agreements.</li>
            </ul>
            <p className="mt-2 font-medium text-slate-900">
              We do not sell, rent, or trade your personal or business data to third-party data brokers or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">4. Advertising and Attribution Pixels</h2>
            <p>
              In accordance with Google Ads, Meta Ads, and LinkedIn Advertising policies, we may use first-party cookies and conversion tags (e.g. Meta Conversions API, Google Analytics 4) to evaluate ad campaign performance and optimize lead generation flows. You can manage or disable cookies via your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">5. Data Retention &amp; Security</h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, loss, or alteration. Audit data is retained only for as long as necessary to deliver diagnostics and fulfill business and tax obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">6. Contact Us</h2>
            <p>
              If you have any questions or wish to request data deletion, contact us at:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 text-sm">
              <p className="font-semibold text-slate-900">Orbiverse Media &amp; Strategy LLP</p>
              <p className="text-slate-600">Email: <a href="mailto:hello@orbiverse.co" className="text-[#101b96] underline font-medium">hello@orbiverse.co</a></p>
              <p className="text-slate-600">Headquarters: Hyderabad, Telangana, India</p>
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
