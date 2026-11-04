"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface StateFact {
  label: string;
  value: string;
}

interface DestinationState {
  name: string;
  displayTitle: string;
  next: string;
  number: string;
  portal?: string;
  image?: string;
  background: string;
  activeServiceIndex: number;
  facts: StateFact[];
}

export default function PlanetPortalHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portalCanvasRef = useRef<HTMLCanvasElement>(null);
  const sceneCanvasRef = useRef<HTMLCanvasElement>(null);
  const portalBtnRef = useRef<HTMLButtonElement>(null);
  const portalVideoRef = useRef<HTMLVideoElement>(null);
  const portalImageRef = useRef<HTMLImageElement>(null);
  const transitionVideoRef = useRef<HTMLVideoElement>(null);

  const [currentPlanet, setCurrentPlanet] = useState<"mars" | "earth" | "venus">("mars");
  const [preloadPct, setPreloadPct] = useState(0);
  const [isPreloadComplete, setIsPreloadComplete] = useState(false);
  const [isPreloadLeaving, setIsPreloadLeaving] = useState(false);
  const [showCounter, setShowCounter] = useState(true);
  const [isLogoDocked, setIsLogoDocked] = useState(false);
  const [isLogoSettled, setIsLogoSettled] = useState(false);
  const [isIntroReady, setIsIntroReady] = useState(false);
  const [isMaskRevealing, setIsMaskRevealing] = useState(false);
  const [isContentRevealing, setIsContentRevealing] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoadingTransition, setIsLoadingTransition] = useState(false);
  const [isCommitting, setIsCommitting] = useState(false);

  // Custom cursor states
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [orbitPos, setOrbitPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isCursorEnter, setIsCursorEnter] = useState(false);

  // Services list instead of planets
  const services = [
    "Brand Strategy",
    "Websites & Landers",
    "Creative & Content",
    "Performance Marketing",
    "SEO Strategy",
    "Social Media",
    "Influencer Ads",
    "Tracking & Analytics",
    "Growth Audits",
  ];

  const statesData: Record<"mars" | "earth" | "venus", DestinationState> = {
    mars: {
      name: "Brand Strategy",
      displayTitle: "BRAND",
      next: "Performance",
      number: "[04]",
      portal: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc3ded42-e845-41f3-a830-5cab512d79cd.mp4",
      background: "mars-background",
      activeServiceIndex: 0,
      facts: [
        { label: "Job:", value: "Give people a reason to choose you before the ad click." },
        { label: "Judged on:", value: "Recall, preference and true conversion lift." },
        { label: "We won't:", value: "Hand over a logo without positioning that sells." },
        { label: "Impact:", value: "Every subsequent rupee of ad spend works 2.8x harder." },
      ],
    },
    earth: {
      name: "Performance",
      displayTitle: "DEMAND",
      next: "Analytics",
      number: "[08]",
      portal: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/b30f64d9-1637-477a-83df-d0fc6461a422.mp4",
      background: "earth-background",
      activeServiceIndex: 3,
      facts: [
        { label: "Job:", value: "Capture high-intent buyers on Meta, Google and YouTube." },
        { label: "Judged on:", value: "Cost per qualified lead (CPA) or ROAS, never clicks." },
        { label: "We won't:", value: "Keep dead campaigns alive hoping they 'pick up'." },
        { label: "Track Record:", value: "₹25Cr+ ad spend managed with positive payback." },
      ],
    },
    venus: {
      name: "Analytics",
      displayTitle: "ORBIT",
      next: "Growth Audit",
      number: "[09]",
      image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/d6fb8b6b-c15e-4aaa-9cf7-45bbb5e33372.jpg",
      background: "venus-background",
      activeServiceIndex: 7,
      facts: [
        { label: "Job:", value: "The foundation. Tracing every single rupee directly to revenue." },
        { label: "Judged on:", value: "Every lead traced to its authenticated source." },
        { label: "We won't:", value: "Launch on broken or double-counted tracking." },
        { label: "Verdict:", value: "Monthly Cut, Keep or Double rules for every channel." },
      ],
    },
  };

  // Canvas animation refs
  const animationState = useRef({
    busy: false,
    transitionActive: false,
    expansion: 0,
    maskScale: 1,
    canvasOpacity: 1,
    rotX: 0,
    rotY: 0,
    targetX: 0,
    targetY: 0,
    hasFrozenScene: false,
  });

  const currentState = statesData[currentPlanet];

  // Helper easing
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateValue = (setter: (v: number) => void, duration: number) => {
    return new Promise<void>((resolve) => {
      const start = performance.now();
      function frame(now: number) {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        setter(easeInOutCubic(progress));
        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  };

  // Draw cover helper
  const drawCover = (ctx: CanvasRenderingContext2D, media: HTMLVideoElement | HTMLImageElement) => {
    const mw = (media as HTMLVideoElement).videoWidth || (media as HTMLImageElement).naturalWidth || media.width || 1920;
    const mh = (media as HTMLVideoElement).videoHeight || (media as HTMLImageElement).naturalHeight || media.height || 1080;
    const scale = Math.max(window.innerWidth / mw, window.innerHeight / mh);
    const w = mw * scale;
    const h = mh * scale;
    const x = (window.innerWidth - w) / 2;
    const y = (window.innerHeight - h) / 2;
    ctx.drawImage(media, x, y, w, h);
  };

  const drawShade = (ctx: CanvasRenderingContext2D) => {
    const h = window.innerHeight;
    const grad = ctx.createLinearGradient(0, h * 0.52, 0, h);
    grad.addColorStop(0, "rgba(0,0,0,0)");
    grad.addColorStop(1, "rgba(0,0,0,0.88)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, h * 0.52, window.innerWidth, h * 0.48);
  };

  // Rounded points generator
  const getRoundedPoints = (w: number, h: number, r: number) => {
    const clampedR = Math.max(0, Math.min(r, w / 2, h / 2));
    const pts: { x: number; y: number }[] = [];
    const corners = [
      { cx: w / 2 - clampedR, cy: -h / 2 + clampedR, a1: -Math.PI / 2, a2: 0 },
      { cx: w / 2 - clampedR, cy: h / 2 - clampedR, a1: 0, a2: Math.PI / 2 },
      { cx: -w / 2 + clampedR, cy: h / 2 - clampedR, a1: Math.PI / 2, a2: Math.PI },
      { cx: -w / 2 + clampedR, cy: -h / 2 + clampedR, a1: Math.PI, a2: Math.PI * 1.5 },
    ];
    corners.forEach((c) => {
      for (let i = 0; i <= 10; i++) {
        const a = c.a1 + (c.a2 - c.a1) * (i / 10);
        pts.push({
          x: c.cx + Math.cos(a) * clampedR,
          y: c.cy + Math.sin(a) * clampedR,
        });
      }
    });
    return pts;
  };

  // Main canvas loop & resize
  useEffect(() => {
    const pCanvas = portalCanvasRef.current;
    const sCanvas = sceneCanvasRef.current;
    if (!pCanvas || !sCanvas) return;

    const pCtx = pCanvas.getContext("2d");
    const sCtx = sCanvas.getContext("2d");
    if (!pCtx || !sCtx) return;

    const resize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      pCanvas.width = window.innerWidth * d;
      pCanvas.height = window.innerHeight * d;
      pCanvas.style.width = window.innerWidth + "px";
      pCanvas.style.height = window.innerHeight + "px";
      pCtx.setTransform(d, 0, 0, d, 0, 0);

      if (!animationState.current.hasFrozenScene) {
        sCanvas.width = window.innerWidth * d;
        sCanvas.height = window.innerHeight * d;
        sCanvas.style.width = window.innerWidth + "px";
        sCanvas.style.height = window.innerHeight + "px";
        sCtx.setTransform(d, 0, 0, d, 0, 0);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    let lastTime = performance.now();
    let animId: number;

    const drawFrame = (now: number) => {
      animId = requestAnimationFrame(drawFrame);
      const dt = Math.min(now - lastTime, 40);
      lastTime = now;

      const st = animationState.current;
      st.rotX += (st.targetX - st.rotX) * Math.min(1, dt * 0.009);
      st.rotY += (st.targetY - st.rotY) * Math.min(1, dt * 0.009);

      pCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (st.hasFrozenScene) {
        pCtx.drawImage(sCanvas, 0, 0, window.innerWidth, window.innerHeight);
        drawShade(pCtx);
      }

      const pBtn = portalBtnRef.current;
      if (!pBtn) return;

      const rect = pBtn.getBoundingClientRect();
      const rectCx = rect.left + rect.width / 2;
      const rectCy = rect.top + rect.height / 2;

      const e = st.expansion;
      const cx = rectCx + (window.innerWidth / 2 - rectCx) * e;
      const cy = rectCy + (window.innerHeight / 2 - rectCy) * e;

      const baseW = rect.width + (window.innerWidth - rect.width) * e;
      const baseH = rect.height + (window.innerHeight - rect.height) * e;
      const scale = e ? 1 : st.maskScale;
      const w = baseW * scale;
      const h = baseH * scale;

      const r = 90 * (1 - e) * scale;
      const rx = st.rotX * (1 - e);
      const ry = st.rotY * (1 - e);

      if (w > 1 && h > 1) {
        const pts = getRoundedPoints(w, h, r);
        const ax = (rx * Math.PI) / 180;
        const ay = (ry * Math.PI) / 180;

        pCtx.save();
        pCtx.globalAlpha = st.canvasOpacity;

        pCtx.beginPath();
        pts.forEach((pt, idx) => {
          const xx = pt.x * Math.cos(ay);
          const yy = pt.y * Math.cos(ax);
          const z = pt.x * Math.sin(ay) - pt.y * Math.sin(ax);
          const p = 850 / (850 + z);
          const sx = cx + xx * p;
          const sy = cy + yy * p;
          if (idx === 0) pCtx.moveTo(sx, sy);
          else pCtx.lineTo(sx, sy);
        });
        pCtx.closePath();
        pCtx.clip();

        pCtx.fillStyle = "#030303";
        pCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        const media = st.transitionActive
          ? transitionVideoRef.current
          : currentState.image
          ? portalImageRef.current
          : portalVideoRef.current;

        if (media) {
          try {
            drawCover(pCtx, media);
          } catch (_) {}
        }

        if (st.transitionActive) {
          drawShade(pCtx);
        }

        pCtx.restore();
      }
    };

    animId = requestAnimationFrame(drawFrame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [currentPlanet]);

  // Pointer tracking for tilt & cursor
  useEffect(() => {
    let animId: number;
    let targetOrbitX = -100;
    let targetOrbitY = -100;

    const handlePointerMove = (e: PointerEvent) => {
      setCursorVisible(true);
      setCursorPos({ x: e.clientX, y: e.clientY });
      targetOrbitX = e.clientX;
      targetOrbitY = e.clientY;

      if (!animationState.current.busy) {
        animationState.current.targetY = (e.clientX / window.innerWidth - 0.5) * 37.4;
        animationState.current.targetX = (e.clientY / window.innerHeight - 0.5) * -33;
      }
    };

    const handlePointerLeave = () => {
      setCursorVisible(false);
      animationState.current.targetX = 0;
      animationState.current.targetY = 0;
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    const cursorLoop = () => {
      animId = requestAnimationFrame(cursorLoop);
      setOrbitPos((prev) => ({
        x: prev.x + (targetOrbitX - prev.x) * 0.2,
        y: prev.y + (targetOrbitY - prev.y) * 0.2,
      }));
    };
    animId = requestAnimationFrame(cursorLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  // Preloader sequence
  useEffect(() => {
    // Ensure all background videos are muted for browser autoplay policies
    document.querySelectorAll<HTMLVideoElement>(".backgrounds .background").forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
    });

    const video = document.getElementById("preloader-video") as HTMLVideoElement;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let preloaderFinished = false;

    const finish = () => {
      if (preloaderFinished) return;
      preloaderFinished = true;
      setPreloadPct(100);
      setIsPreloadLeaving(true);
      setIsLogoDocked(true);

      // Explicitly trigger active background video playback
      const bgVideo = document.getElementById("mars-background") as HTMLVideoElement;
      if (bgVideo) {
        bgVideo.muted = true;
        bgVideo.playsInline = true;
        bgVideo.play().catch(() => {});
      }

      // Notify Navbar that preloader reached 100% and experience is entering
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("orbiverse:intro-ready"));
        document.body.classList.add("intro-ready");
        document.body.classList.add("preload-complete");
      }

      revealMaskAnim();
      setIsIntroReady(true);

      // Remove counter element after blur-out animation (750ms)
      setTimeout(() => {
        setShowCounter(false);
        setIsPreloadComplete(true);
      }, 750);

      // Reveal title and facts after 850ms
      setTimeout(() => {
        setIsContentRevealing(true);
      }, 850);

      // Settle logo after 2000ms glide
      setTimeout(() => {
        setIsLogoSettled(true);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("orbiverse:logo-settled"));
        }
      }, 2000);
    };

    const tryPlay = () => {
      if (video.duration) {
        video.playbackRate = Math.max(0.25, video.duration / 3);
      }
      video.play().catch(() => {});
    };

    if (video.readyState >= 1) {
      tryPlay();
    } else {
      video.addEventListener("loadedmetadata", tryPlay, { once: true });
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    // High-precision smooth ticker from 0% to 100% over 3000ms
    const startTime = performance.now();
    const duration = 3000;
    let animFrame: number;

    const tick = (now: number) => {
      if (preloaderFinished) return;
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const val = Math.min(99, Math.floor(progress * 100));
      setPreloadPct(val);

      if (progress < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    animFrame = requestAnimationFrame(tick);
    video.addEventListener("ended", finish, { once: true });

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const revealMaskAnim = () => {
    setIsMaskRevealing(false);
    setTimeout(() => {
      setIsMaskRevealing(true);
      animationState.current.maskScale = 0;
      animateValue((v) => {
        animationState.current.maskScale = v;
      }, 1050);
    }, 20);
  };

  // Travel action
  const handleTravel = async () => {
    const st = animationState.current;
    if (st.busy || currentPlanet === "venus") return;
    st.busy = true;
    st.targetX = 0;
    st.targetY = 0;

    const next = currentPlanet === "mars" ? "earth" : "venus";
    const tVideo = transitionVideoRef.current;
    if (!tVideo) return;

    const portalUrl = statesData[currentPlanet].portal;
    if (!portalUrl) return;

    tVideo.src = portalUrl;
    tVideo.load();
    setIsLoadingTransition(true);

    await new Promise<void>((res) => {
      let done = false;
      const complete = () => {
        if (!done) {
          done = true;
          tVideo.removeEventListener("canplaythrough", complete);
          tVideo.removeEventListener("error", complete);
          res();
        }
      };
      tVideo.addEventListener("canplaythrough", complete);
      tVideo.addEventListener("error", complete);
      setTimeout(complete, 1600);
    });

    setIsLoadingTransition(false);
    setIsTransitioning(true);
    setIsContentRevealing(false);
    setIsMaskRevealing(false);

    tVideo.currentTime = 0;
    tVideo.playbackRate = 1.3;
    st.canvasOpacity = 1;
    st.transitionActive = true;

    try {
      await tVideo.play();
    } catch (_) {}

    await animateValue((v) => {
      st.expansion = v;
    }, 1100);

    await new Promise<void>((res) => {
      if (tVideo.ended) res();
      else {
        tVideo.addEventListener("ended", () => res(), { once: true });
        setTimeout(res, 3500);
      }
    });

    // Freeze into scene canvas
    const sCanvas = sceneCanvasRef.current;
    if (sCanvas) {
      const sCtx = sCanvas.getContext("2d");
      if (sCtx) {
        try {
          sCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          drawCover(sCtx, tVideo);
          st.hasFrozenScene = true;
        } catch (_) {}
      }
    }

    setCurrentPlanet(next);
    setIsCommitting(true);

    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    st.transitionActive = false;
    st.expansion = 0;
    st.maskScale = 0;
    st.canvasOpacity = 1;
    setIsTransitioning(false);
    setIsCommitting(false);

    revealMaskAnim();
    setTimeout(() => {
      setIsContentRevealing(true);
    }, 100);

    setTimeout(() => {
      tVideo.removeAttribute("src");
      tVideo.load();
      st.busy = false;
      st.hasFrozenScene = false;
    }, 450);
  };

  return (
    <div
      ref={containerRef}
      className={`experience relative w-full h-screen min-h-[540px] overflow-hidden bg-[#0a0908] text-white select-none ${
        isTransitioning ? "is-transitioning" : ""
      } ${isLoadingTransition ? "is-loading" : ""} ${isCommitting ? "is-committing" : ""} ${
        isMaskRevealing ? "mask-revealing" : ""
      } ${isContentRevealing ? "content-revealing" : ""}`}
      data-planet={currentPlanet}
    >
      {/* BACKGROUND VIDEOS */}
      <div className="backgrounds absolute inset-0 w-full h-full" aria-hidden="true">
        <video
          id="mars-background"
          className={`background absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${
            currentPlanet === "mars" ? "is-visible opacity-100" : "opacity-0"
          }`}
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/3c83091e-4046-4fd6-adbb-2edb728be79a.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <video
          id="earth-background"
          className={`background absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${
            currentPlanet === "earth" ? "is-visible opacity-100" : "opacity-0"
          }`}
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/fc3ded42-e845-41f3-a830-5cab512d79cd.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <video
          id="venus-background"
          className={`background absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${
            currentPlanet === "venus" ? "is-visible opacity-100" : "opacity-0"
          }`}
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/b30f64d9-1637-477a-83df-d0fc6461a422.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* PRELOADER */}
      {!isPreloadComplete && (
        <div
          className={`preloader fixed inset-0 z-[25] bg-black overflow-hidden transition-opacity duration-700 ${
            isPreloadLeaving ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          id="preloader"
        >
          <video
            id="preloader-video"
            src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5fc5651c-3b5d-4171-b507-87f7e635d1b4.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
          />
          <div className="preloader-shade absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-b from-transparent to-black" />
        </div>
      )}

      {/* FLOATING LOGO (Starts dead-center with preloader, glides to top-left slot over 2s at 100%) */}
      {!isLogoSettled && (
        <div
          className={`floating-logo fixed z-[30] pointer-events-none transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isLogoDocked
              ? "left-[max(calc((100vw-1400px)/2+clamp(20px,2vw,36px)),clamp(24px,3vw,44px))] top-[clamp(24px,3.2vh,36px)] w-[36px] h-[36px] p-0 rounded-lg translate-x-0 translate-y-0 bg-transparent border-transparent shadow-none"
              : "left-1/2 top-1/2 w-[76px] h-[76px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.08] border border-white/25 rounded-2xl p-2.5 backdrop-blur-md shadow-[0_0_35px_rgba(91,59,209,0.45),inset_0_0_15px_rgba(255,255,255,0.15)] filter drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] brightness-110"
          }`}
        >
          <img
            src="/logo.png"
            alt="Orbiverse"
            className="w-full h-full object-contain filter brightness-120"
          />
        </div>
      )}

      {/* PRELOADER PERCENT COUNTER (Dead-center below logo) */}
      {showCounter && (
        <div
          className={`preloader-count fixed z-[28] left-1/2 bottom-[clamp(26px,4vh,44px)] flex items-end gap-1 -translate-x-1/2 font-sans leading-none pointer-events-none select-none ${
            isPreloadLeaving ? "animate-preload-count-out" : ""
          }`}
        >
          <span className="text-6xl sm:text-7xl font-thin tracking-tight text-white font-sans">
            {preloadPct}
          </span>
          <span className="text-2xl sm:text-3xl pb-1.5 font-light text-white/80">%</span>
        </div>
      )}

      <canvas ref={sceneCanvasRef} id="scene-canvas" className="hidden" aria-hidden="true" />
      <div className="shade absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none" />

      {/* SIDEBAR: SERVICES LIST INSTEAD OF PLANETS */}
      <aside
        className={`planet-list chrome absolute left-[clamp(18px,1.95vw,28px)] top-1/2 -translate-y-[43%] flex flex-col gap-1.5 text-[15px] z-[4] transition-all duration-450 ${
          isIntroReady ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Services List"
      >
        {services.map((svc, idx) => {
          const isActive = idx === currentState.activeServiceIndex;
          return (
            <div
              key={idx}
              onClick={() => {
                if (idx <= 2) setCurrentPlanet("mars");
                else if (idx <= 6) setCurrentPlanet("earth");
                else setCurrentPlanet("venus");
                revealMaskAnim();
                setIsContentRevealing(false);
                setTimeout(() => setIsContentRevealing(true), 100);
              }}
              className={`planet-item flex items-center min-h-[22px] cursor-pointer transition-all duration-200 ${
                isActive ? "text-[17px] font-bold text-white gap-2" : "text-white/60 hover:text-white"
              }`}
            >
              {isActive && <span className="w-3.5 h-3.5 rounded-full bg-white flex-shrink-0 animate-scale" />}
              <span>{svc}</span>
            </div>
          );
        })}
      </aside>

      {/* 3D PORTAL CANVAS */}
      <canvas
        ref={portalCanvasRef}
        id="portal-canvas"
        className="portal-canvas fixed inset-0 z-[3] w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* PORTAL INTERACTION WRAP */}
      <section
        className="portal-wrap chrome absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%] w-[min(320px,31vw)] z-[4]"
        aria-label="Next destination"
      >
        <div
          className={`portal-heading flex justify-between items-center mb-3 text-base text-white/90 transition-opacity duration-850 ${
            isMaskRevealing ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>Next:</span>
          <span>
            <span>{currentState.number}</span> <strong className="ml-2 font-bold">{currentState.next}</strong>
          </span>
        </div>

        <button
          ref={portalBtnRef}
          id="portal"
          type="button"
          onClick={handleTravel}
          onMouseEnter={() => setIsCursorEnter(true)}
          onMouseLeave={() => setIsCursorEnter(false)}
          className="portal relative block w-full aspect-[320/350] p-0 overflow-visible border-0 rounded-[90px] bg-transparent cursor-pointer"
          aria-label={`Travel to ${currentState.next}`}
        >
          {currentState.portal ? (
            <video
              ref={portalVideoRef}
              id="portal-video"
              src={currentState.portal}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="invisible absolute w-px h-px pointer-events-none"
            />
          ) : null}
          {currentState.image ? (
            <img
              ref={portalImageRef}
              id="portal-image"
              src={currentState.image}
              alt="Destination"
              className="invisible absolute w-px h-px pointer-events-none"
            />
          ) : null}
        </button>
      </section>

      {/* BOTTOM CONTENT: TITLE & FACTS */}
      <section className="planet-content chrome absolute left-[clamp(28px,4vw,58px)] right-[clamp(28px,3vw,44px)] bottom-[clamp(24px,3vh,30px)] flex justify-between items-end gap-10 z-[4]">
        <h1
          id="planet-title"
          className={`font-['Aalto','Arial_Narrow',sans-serif] text-[clamp(118px,19.5vw,290px)] font-normal leading-[0.72] -mb-[0.04em] tracking-normal transition-all duration-1000 ${
            isContentRevealing ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          {currentState.displayTitle}
        </h1>

        <dl className="w-[min(447px,34vw)] m-0 text-base">
          {currentState.facts.map((fact, idx) => (
            <div
              key={idx}
              className={`fact grid grid-cols-[138px_1fr] gap-4 py-2 border-b border-white/45 text-sm transition-all duration-700 ${
                isContentRevealing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${0.5 + idx * 0.16}s` }}
            >
              <dt className="font-bold text-white">{fact.label}</dt>
              <dd className="m-0 text-white/90">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* HIDDEN TRANSITION VIDEO */}
      <div className="transition-layer hidden">
        <video ref={transitionVideoRef} id="transition-video" muted playsInline preload="auto" />
      </div>

      {/* LOADING INDICATOR */}
      <div
        className={`loading absolute z-[12] left-1/2 bottom-[30px] -translate-x-1/2 text-xs tracking-[0.14em] uppercase text-white/80 transition-opacity duration-200 ${
          isLoadingTransition ? "opacity-80" : "opacity-0 pointer-events-none"
        }`}
      >
        Preparing orbit…
      </div>

      {/* CUSTOM CURSOR */}
      <div
        className={`custom-cursor fixed left-0 top-0 z-[100] w-px h-px pointer-events-none transition-opacity duration-200 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        } ${isCursorEnter ? "is-enter" : ""}`}
        style={{ transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)` }}
      >
        <span
          className={`cursor-orbit absolute left-0 top-0 w-9 h-9 rounded-full border border-white bg-white/40 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isCursorEnter ? "scale-[1.16]" : ""
          }`}
          style={{
            transform: `translate3d(${orbitPos.x - cursorPos.x}px, ${orbitPos.y - cursorPos.y}px, 0) translate(-50%, -50%)`,
          }}
        />
        <span className="cursor-dot absolute left-0 top-0 w-3 h-3 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
        <span
          className={`cursor-label absolute top-[26px] left-0 -translate-x-1/2 text-sm font-medium text-white whitespace-nowrap transition-all duration-300 ${
            isCursorEnter ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          Enter
        </span>
      </div>
    </div>
  );
}

