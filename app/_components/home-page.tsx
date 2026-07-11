"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/site";
import {
  Nav,
  Footer,
  AccessModal,
  CtaButton,
  BORDER,
  MUTED,
  ACCENT,
  FG,
  BG,
  SURFACE,
} from "./shared";
import {
  Reveal,
  InfiniteMarquee,
  HeroGlow,
  PulsingBadgeDot,
  SectionLabel,
  AnimatedDivider,
} from "./motion";

const features = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2.5" y="1.5" width="11" height="13" rx="1.5" stroke={ACCENT} strokeWidth="1.3" />
        <path d="M5 5.5h6M5 8.5h4" stroke={ACCENT} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "Intelligent document extraction",
    desc: "Pulls names, dates, and passport numbers from uploaded client documents automatically.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" stroke={ACCENT} strokeWidth="1.3" />
        <path d="M4.5 8h7M4.5 5h3.5M4.5 11h5" stroke={ACCENT} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "IRCC form auto-population",
    desc: "Prepares IMM forms with client data pre-filled, reviewed against IRCC field requirements.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke={ACCENT} strokeWidth="1.3" />
        <path d="M8 4.5v4" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11" r="0.75" fill={ACCENT} />
      </svg>
    ),
    title: "Missing document detection",
    desc: "Flags file gaps before submission, catching issues before they become refusals.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" stroke={ACCENT} strokeWidth="1.3" />
        <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" stroke={ACCENT} strokeWidth="1.3" />
        <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" stroke={ACCENT} strokeWidth="1.3" />
        <rect x="9" y="9" width="5.5" height="5.5" rx="1" stroke={ACCENT} strokeWidth="1.3" />
      </svg>
    ),
    title: "Client file dashboard",
    desc: "Every active application, status, and outstanding task across the practice in one view.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z" stroke={ACCENT} strokeWidth="1.3" />
        <path d="M5.5 8l2 2 3-3" stroke={ACCENT} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Secure Canadian data residency",
    desc: "All data on AWS ca-central-1, PIPEDA-compliant by design.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5.5" r="2.5" stroke={ACCENT} strokeWidth="1.3" />
        <path d="M2.5 13.5c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke={ACCENT} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "White-glove onboarding",
    desc: "Dedicated setup session, configured to match the consultant's existing workflow.",
  },
];

const steps = [
  {
    n: "1",
    title: "Create your account",
    desc: "Enter your name, email, and phone to claim your spot.",
  },
  {
    n: "2",
    title: "Workflow audit",
    desc: "We look into how your practice actually runs - file by file, task by task. What's manual, what's repetitive, what's already working. From there, we scope the specific features your practice needs, not a generic package.",
  },
  {
    n: "3",
    title: "Dedicated setup",
    desc: "Configured and onboarded to your practice. Data stays in Canada. Workflow stays yours.",
  },
  {
    n: "4",
    title: "Your practice runs faster",
    desc: "VisaArc handles the repetitive work. You do what only a regulated consultant can do.",
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <AccessModal onClose={() => setModalOpen(false)} />}

      <Nav onGetAccess={() => setModalOpen(true)} />

      <section className="section-hero">
        <HeroGlow />

        <div className="section-hero-content">
        <div
          className="visaarc-animate-in"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(91,141,246,0.22)",
            borderRadius: 100,
            padding: "5px 14px",
            marginBottom: 40,
            background: "rgba(91,141,246,0.05)",
          }}
        >
          <PulsingBadgeDot />
          <span style={{ fontSize: "clamp(9px, 2.5vw, 10px)", fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase" }}>
            AI Automation for Regulated Canadian Immigration Consultants
          </span>
        </div>

        <h1
          className="visaarc-animate-in visaarc-animate-in-delay-1"
          style={{
            fontSize: "clamp(30px,5vw,62px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.04,
            maxWidth: 760,
            color: FG,
            marginBottom: 24,
          }}
        >
          AI automation for RCICs that{" "}
          <span className="hero-accent-text">actually works</span>
        </h1>

        <p
          className="visaarc-animate-in visaarc-animate-in-delay-2"
          style={{
            fontSize: "clamp(15px,1.8vw,18px)",
            color: MUTED,
            maxWidth: 620,
            lineHeight: 1.7,
            marginBottom: 44,
          }}
        >
          VisaArc is practice management software for Canadian immigration consultants - intelligent document extraction, IRCC form preparation, missing document detection, and client file management in one platform.
        </p>

        <div className="visaarc-animate-in visaarc-animate-in-delay-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <CtaButton size="lg" onClick={() => setModalOpen(true)}>
            Claim your spot →
          </CtaButton>
          <p style={{ fontSize: 11.5, color: MUTED, letterSpacing: "0.025em" }}>
            No commitment required
          </p>
        </div>
        </div>
      </section>

      <InfiniteMarquee />

      <AnimatedDivider />

      <section id="features" className="section-content">
        <Reveal>
          <SectionLabel>Immigration Consultant Automation</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 16, maxWidth: 640, lineHeight: 1.1 }}>
            Everything your RCIC practice needs, automated.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.7, marginBottom: 56, maxWidth: 680 }}>
            From{" "}
            <Link href="/solutions/express-entry-automation" style={{ color: ACCENT, textDecoration: "none" }}>express entry</Link>
            {" "}and{" "}
            <Link href="/solutions/work-permit-automation" style={{ color: ACCENT, textDecoration: "none" }}>work permit</Link>
            {" "}files to{" "}
            <Link href="/solutions/study-permit-automation" style={{ color: ACCENT, textDecoration: "none" }}>study permits</Link>
            {" "}and{" "}
            <Link href="/solutions/permanent-residence-automation" style={{ color: ACCENT, textDecoration: "none" }}>permanent residence</Link>
            {" "}applications, VisaArc automates the repetitive immigration paperwork that slows Canadian consulting practices down. Read the{" "}
            <Link href="/guide/rcic-practice-automation" style={{ color: ACCENT, textDecoration: "none" }}>RCIC practice automation guide</Link>.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          <div className="grid-features">
            {features.map((f) => (
              <div key={f.title} className="visaarc-feature-card card-padding" style={{ background: BG }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "rgba(91,141,246,0.08)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 13.5, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}`, background: SURFACE, padding: "18px 20px", textAlign: "center" }}>
            <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, fontStyle: "italic" }}>
              Plus whatever else your practice needs - snap in the features you need, not a generic package.
            </p>
          </div>
        </div>
        </Reveal>
      </section>

      <section className="section-narrow">
        <Reveal>
          <SectionLabel>How It Works</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 32, lineHeight: 1.15 }}>
            Onboarding built for immigration consulting workflows
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          {steps.map((s, i) => (
            <div key={s.n}>
              {i > 0 && <div style={{ height: 1, background: BORDER }} />}
              <div className="card-padding visaarc-step-card" style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <span style={{ fontSize: 11, color: MUTED, fontWeight: 600 }}>{s.n}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </section>

      <section id="faq" className="section-narrow">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 32, lineHeight: 1.15 }}>
            Questions from Canadian immigration consultants
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          {FAQ_ITEMS.map((item, i) => (
            <article key={item.question}>
              {i > 0 && <div style={{ height: 1, background: BORDER }} />}
              <div className="card-padding visaarc-step-card">
                <h3 style={{ fontSize: 14, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 8 }}>
                  {item.question}
                </h3>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </section>

      <section className="section-narrow" style={{ paddingBottom: 96, textAlign: "center" }}>
        <Reveal>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              background: `linear-gradient(160deg, #0d0f12 0%, ${SURFACE} 100%)`,
              position: "relative",
              overflow: "hidden",
            }}
            className="cta-card"
          >
            <div
              className="visaarc-cta-glow"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 480,
                height: 240,
                background: "radial-gradient(ellipse at center,rgba(122,18,32,0.08) 0%,transparent 70%)",
                pointerEvents: "none",
                borderRadius: "50%",
              }}
            />

            <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 16, position: "relative" }}>
              Limited Spots
            </p>
            <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 14, lineHeight: 1.15, position: "relative" }}>
              Ready to automate your RCIC practice?
            </h2>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 36, maxWidth: 420, margin: "0 auto 36px", position: "relative" }}>
              VisaArc is made for RCICs and Canadian immigration consultants who are serious about efficiency. Join the practices already on the platform.
            </p>
            <div style={{ position: "relative" }}>
              <CtaButton size="lg" onClick={() => setModalOpen(true)}>
                Try it out →
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer onGetAccess={() => setModalOpen(true)} />
    </>
  );
}
