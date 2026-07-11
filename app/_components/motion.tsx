"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { ACCENT } from "./shared";

const MARQUEE_ITEMS = [
  "Document extraction",
  "IRCC form prep",
  "Missing doc detection",
  "Client file dashboard",
  "Express entry",
  "Work permits",
  "Study permits",
  "Permanent residence",
  "PIPEDA compliant",
  "AWS ca-central-1",
  "Built for RCICs",
  "CICC-aware workflows",
];

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  fade = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  fade?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      show();
      return;
    }

    if (isInViewport(el)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 8% 0px" },
    );

    observer.observe(el);

    const fallback = window.setTimeout(show, 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`visaarc-reveal ${fade ? "visaarc-reveal-fade" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

function MarqueeItem({ label }: { label: string }) {
  return (
    <span className="visaarc-marquee-item">
      <span className="visaarc-marquee-dot" aria-hidden="true" />
      <span>{label}</span>
      <span className="visaarc-marquee-sep" aria-hidden="true" />
    </span>
  );
}

export function InfiniteMarquee() {
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="visaarc-marquee-band" aria-hidden="true">
      <span className="visaarc-marquee-beam" />
      <span className="visaarc-marquee-beam visaarc-marquee-beam--bottom" />
      <div className="visaarc-marquee-viewport">
        <div className="visaarc-marquee-track">
          {track.map((item, i) => (
            <MarqueeItem key={`${item}-${i}`} label={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroGlow() {
  return (
    <div className="visaarc-hero-bg" aria-hidden="true">
      <div className="visaarc-hero-grid" />
      <div className="visaarc-hero-glow-a" />
      <div className="visaarc-hero-glow-b" />
    </div>
  );
}

export function PulsingBadgeDot() {
  return (
    <span className="visaarc-badge-dot" aria-hidden="true">
      <span className="visaarc-badge-dot-core" />
      <span className="visaarc-badge-dot-ring" />
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-label" style={{ color: ACCENT }}>
      {children}
    </p>
  );
}

export function AnimatedDivider() {
  return (
    <div className="animated-divider" aria-hidden="true">
      <div className="animated-divider-beam" style={{ background: ACCENT }} />
    </div>
  );
}

export function PageHero({
  label,
  title,
  subtitle,
  align = "center",
  children,
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <section
      className={`section-page-hero${align === "left" ? " section-page-hero--left" : ""}`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="visaarc-hero-bg" aria-hidden="true">
        <div className="visaarc-hero-glow-a" style={{ top: "40%", opacity: 0.6 }} />
        <div className="visaarc-hero-glow-b" style={{ top: "50%", left: "45%", opacity: 0.5 }} />
      </div>
      <div className="section-hero-content">
        <p
          className="visaarc-animate-in"
          style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 16 }}
        >
          {label}
        </p>
        <h1
          className="visaarc-animate-in visaarc-animate-in-delay-1"
          style={{
            fontSize: "clamp(28px,4.5vw,48px)",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
            color: "#f0f2f4",
            marginBottom: children || subtitle ? 16 : 0,
            maxWidth: align === "left" ? "100%" : undefined,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <h2
            className="visaarc-animate-in visaarc-animate-in-delay-1"
            style={{ fontSize: "clamp(16px,2.2vw,22px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.35, color: "#9ca3af", marginBottom: children ? 20 : 0 }}
          >
            {subtitle}
          </h2>
        )}
        {children && (
          <div className="visaarc-animate-in visaarc-animate-in-delay-2" style={{ width: "100%" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function AnimateIn({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  style?: CSSProperties;
}) {
  const delayClass = delay ? `visaarc-animate-in-delay-${delay}` : "";
  return (
    <div className={`visaarc-animate-in ${delayClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
