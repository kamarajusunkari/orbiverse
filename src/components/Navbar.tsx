"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { openCtaModal } from "@/components/CtaModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const [logoSettled, setLogoSettled] = useState(false);

  useEffect(() => {
    // Enforce light theme
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("orbiverse-theme", "light");

    const onIntroReady = () => setIntroReady(true);
    const onLogoSettled = () => setLogoSettled(true);

    window.addEventListener("orbiverse:intro-ready", onIntroReady);
    window.addEventListener("orbiverse:logo-settled", onLogoSettled);

    const fallback = setTimeout(() => {
      setIntroReady(true);
      setLogoSettled(true);
    }, 3800);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("orbiverse:intro-ready", onIntroReady);
      window.removeEventListener("orbiverse:logo-settled", onLogoSettled);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallback);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        !introReady ? "opacity-0" : "opacity-100"
      } pt-3 sm:pt-4 md:pt-5 pb-2 px-3 sm:px-6`}
    >
      <div
        className={`max-w-[1400px] mx-auto pointer-events-auto rounded-2xl sm:rounded-full px-4 sm:px-6 py-1.5 sm:py-2 relative flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl border border-slate-200/90 shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]"
            : "bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-xs"
        }`}
      >
        {/* ================= LEFT: LOGO (INCREASED SIZE) ================= */}
        <div className="flex items-center z-10">
          <a href="#" className="flex items-center gap-3 sm:gap-3.5 group">
            <div
              id="header-logo-dock"
              className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] flex-shrink-0 transition-opacity duration-200 group-hover:scale-105 ${
                !logoSettled ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/0rbb.png"
                alt="Orbiverse Logo"
                width={68}
                height={68}
                className="w-full h-full object-contain filter brightness-105 drop-shadow-sm"
                priority
              />
            </div>
            <span className="font-heading font-black text-2xl sm:text-3xl md:text-[30px] tracking-tight text-slate-950 transition-colors">
              Orbiverse
            </span>
          </a>
        </div>

        {/* ================= MIDDLE: MENU (INCREASED FONT SIZE) ================= */}
        <nav
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
          aria-label="Main Navigation"
        >
          <div
            className={`flex items-center rounded-full px-2 py-1 transition-all duration-300 ${
              isScrolled
                ? "border-0 bg-transparent"
                : "border border-slate-200/70 bg-slate-50/70 backdrop-blur-md shadow-2xs"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 xl:px-4 py-1.5 text-[15.5px] xl:text-[16.5px] font-semibold tracking-tight rounded-full transition-all duration-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>

        {/* ================= RIGHT: CTA BUTTON (OPENS POPUP) ================= */}
        <div className="flex items-center gap-2.5 sm:gap-3 z-10">
          {/* CTA Button matching the reference pill capsule */}
          <button
            type="button"
            onClick={() => openCtaModal("Navbar")}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-[14.5px] sm:text-[15px] font-semibold transition-all hover:scale-[1.02] cursor-pointer shadow-2xs border border-slate-300 bg-white hover:bg-[#101b96] text-slate-900 hover:text-white"
          >
            <span>Free Drift Audit</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-all border border-slate-200 bg-white/80 text-slate-900 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      {isMenuOpen && (
        <div className="max-w-[1400px] mx-auto pointer-events-auto mt-2 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-2xl px-5 pt-3 pb-6 flex flex-col gap-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold py-2.5 px-4 rounded-xl text-slate-800 hover:text-[#101b96] hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                openCtaModal("MobileNav");
              }}
              className="w-full text-center py-3 rounded-full text-sm font-bold bg-[#101b96] text-white flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <span>Free Drift Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
