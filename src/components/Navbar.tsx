"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const [logoSettled, setLogoSettled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setIntroReady(true);
      setLogoSettled(true);
      return;
    }

    const onIntroReady = () => setIntroReady(true);
    const onLogoSettled = () => setLogoSettled(true);

    window.addEventListener("orbiverse:intro-ready", onIntroReady);
    window.addEventListener("orbiverse:logo-settled", onLogoSettled);

    const fallback = setTimeout(() => {
      setIntroReady(true);
      setLogoSettled(true);
    }, 3800);

    return () => {
      window.removeEventListener("orbiverse:intro-ready", onIntroReady);
      window.removeEventListener("orbiverse:logo-settled", onLogoSettled);
      clearTimeout(fallback);
    };
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("orbiverse-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("orbiverse-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("orbiverse-theme", "light");
    }
  };

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/#case-studies" },
    { name: "About", href: "/about" },
    { name: "Approach", href: "/#approach" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        pathname === "/" && !introReady ? "opacity-0" : "opacity-100"
      } pt-3 sm:pt-4 md:pt-5 pb-2 px-3 sm:px-6`}
    >
      <div
        className={`max-w-[1400px] mx-auto pointer-events-auto rounded-2xl sm:rounded-full px-4 sm:px-6 py-1.5 sm:py-2 relative flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-color)]/75 dark:bg-[#080614]/75 backdrop-blur-2xl border border-[var(--border-color)] shadow-[0_16px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.15)]"
            : !isScrolled && pathname === "/"
            ? "bg-transparent border border-transparent shadow-none backdrop-blur-none"
            : "bg-[var(--bg-color)]/80 dark:bg-[#080614]/80 backdrop-blur-2xl border border-[var(--border-color)] shadow-sm"
        }`}
      >
        {/* ================= LEFT: LOGO (INCREASED SIZE) ================= */}
        <div className="flex items-center z-10">
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group">
            <div
              id="header-logo-dock"
              className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] flex-shrink-0 transition-opacity duration-200 group-hover:scale-105 ${
                pathname === "/" && !logoSettled ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/0rbb.png"
                alt="Orbiverse Logo"
                width={68}
                height={68}
                className="w-full h-full object-contain filter brightness-110 drop-shadow-md"
                priority
              />
            </div>
            <span className="font-heading font-black text-2xl sm:text-3xl md:text-[30px] tracking-tight text-[var(--text-main)] transition-colors">
              Orbiverse
            </span>
          </Link>
        </div>

        {/* ================= MIDDLE: MENU (INCREASED FONT SIZE) ================= */}
        <nav
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
          aria-label="Main Navigation"
        >
          <div
            className={`flex items-center rounded-full px-2 py-1 transition-all duration-300 ${
              isScrolled
                ? "border-0 border-transparent bg-transparent backdrop-blur-none shadow-none"
                : "border border-black/10 dark:border-white/20 bg-black/[0.04] dark:bg-white/[0.08] backdrop-blur-md shadow-sm"
            }`}
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 sm:px-5 py-1.5 text-[16px] sm:text-[17px] font-semibold tracking-tight rounded-full transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? "text-[var(--text-main)] font-bold"
                        : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                      : isActive
                        ? "text-[var(--text-main)] font-bold bg-black/5 dark:bg-white/20 shadow-2xs"
                        : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/[0.04] dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* ================= RIGHT: CTA BUTTON ================= */}
        <div className="flex items-center gap-2.5 sm:gap-3 z-10">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all cursor-pointer shadow-2xs border border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/[0.08] text-[var(--text-main)] hover:bg-white dark:hover:bg-white/15 backdrop-blur-md"
              aria-label="Toggle light/dark theme"
              title={isDark ? "Switch to Light Theme" : "Switch to Orbit Dark Theme"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
          )}

          {/* CTA Button matching the reference pill capsule */}
          <Link
            href="/drift-audit"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-[14.5px] sm:text-[15px] font-semibold transition-all hover:scale-[1.02] cursor-pointer shadow-2xs border border-black/15 dark:border-white/25 bg-white/80 dark:bg-white/[0.08] hover:bg-[#101b96] dark:hover:bg-white text-neutral-900 dark:text-white hover:text-white dark:hover:text-black backdrop-blur-md"
          >
            <span>Free Drift Audit</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full transition-all border border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/[0.08] text-[var(--text-main)]"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      {isMenuOpen && (
        <div className="max-w-[1400px] mx-auto pointer-events-auto mt-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-color)]/95 dark:bg-[#0c0a1f]/95 backdrop-blur-2xl px-5 pt-3 pb-6 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium py-2.5 px-4 rounded-xl text-[var(--text-main)] hover:bg-[var(--surface-alt)] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-[var(--border-color)]">
            <Link
              href="/drift-audit"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-sm font-semibold border border-black/15 dark:border-white/25 bg-white/80 dark:bg-white/10 text-[var(--text-main)] flex items-center justify-center gap-1.5"
            >
              <span>Free Drift Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
