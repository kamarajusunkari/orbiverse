import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-14 border-b border-[var(--border-color)]">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 dark:bg-white/5 rounded-xl p-1 border border-[var(--border-color)]">
                <Image
                  src="/logo.png"
                  alt="Orbiverse"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain filter dark:brightness-110"
                />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                ORBIVERSE
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
              Every channel, pulling toward revenue. We build your brand, drive demand and measure every rupee against the number that pays your bills.
            </p>
            <div className="pt-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              Based in Hyderabad · Working Worldwide
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Navigation
            </span>
            <Link href="/services" className="text-sm hover:text-[var(--accent-light)] transition-colors">
              Services (9 Channels)
            </Link>
            <Link href="/#approach" className="text-sm hover:text-[var(--accent-light)] transition-colors">
              The Orbit Method
            </Link>
            <Link href="/#work" className="text-sm hover:text-[var(--accent-light)] transition-colors">
              Case Studies
            </Link>
            <Link href="/about" className="text-sm hover:text-[var(--accent-light)] transition-colors">
              About Us
            </Link>
            <Link href="/drift-audit" className="text-sm font-semibold text-[var(--accent-light)] hover:underline">
              Book Drift Audit
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Direct Contact
            </span>
            <a
              href="mailto:hello@orbiverse.co"
              className="text-sm hover:text-[var(--accent-light)] transition-colors"
            >
              hello@orbiverse.co
            </a>
            <span className="text-sm text-[var(--text-muted)]">+91 98765 43210</span>
            <span className="text-sm text-[var(--text-muted)]">
              HITEC City, Hyderabad, Telangana, India
            </span>
          </div>

          {/* Socials & Pages */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Connect & Demos
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 hover:text-[var(--accent-light)] transition-colors"
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 hover:text-[var(--accent-light)] transition-colors"
            >
              Instagram <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-[var(--accent-light)] hover:underline"
            >
              Orbit Hero Page <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/services.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-[var(--accent-light)] hover:underline"
            >
              3D Artistry Page <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© 2026 Orbiverse Organization. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--text-main)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--text-main)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

