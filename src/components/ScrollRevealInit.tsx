"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const selector =
      ".reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale-up, .reveal-fade-in, .reveal-roadmap-card";

    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll<HTMLElement>(selector)
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observedSet = new WeakSet<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeNewElements = () => {
      const elements = document.querySelectorAll<HTMLElement>(selector);
      elements.forEach((el) => {
        if (!observedSet.has(el)) {
          observedSet.add(el);
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("is-visible");
          } else {
            observer.observe(el);
          }
        }
      });
    };

    observeNewElements();

    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

