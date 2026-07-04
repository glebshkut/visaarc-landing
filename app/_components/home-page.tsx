"use client";

import { useState } from "react";
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

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px 24px 80px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-58%)",
            width: 800,
            height: 800,
            background: `radial-gradient(ellipse at center,${ACCENT} 0%,transparent 60%)`,
            pointerEvents: "none",
            borderRadius: "50%",
            animation: "pulse-glow 7s ease-in-out infinite",
          }}
        />

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(91,141,246,0.22)",
            borderRadius: 100,
            padding: "5px 14px",
            marginBottom: 40,
            background: "rgba(91,141,246,0.05)",
            position: "relative",
          }}
        >
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase" }}>
            AI Automation for Regulated Canadian Immigration Consultants
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(30px,5vw,62px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.04,
            maxWidth: 760,
            color: FG,
            marginBottom: 24,
            position: "relative",
          }}
        >
          AI automation for RCICs that{" "}
          <span style={{ color: ACCENT }}>actually works</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(15px,1.8vw,18px)",
            color: MUTED,
            maxWidth: 620,
            lineHeight: 1.7,
            marginBottom: 44,
            position: "relative",
          }}
        >
          VisaArc is practice management software for Canadian immigration consultants — intelligent document extraction, IRCC form preparation, missing document detection, and client file management in one platform.
        </p>

        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <CtaButton size="lg" onClick={() => setModalOpen(true)}>
            Claim your spot →
          </CtaButton>
          <p style={{ fontSize: 11.5, color: MUTED, letterSpacing: "0.025em" }}>
            No commitment required
          </p>
        </div>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        {["AWS ca-central-1", "PIPEDA Compliant", "Built for RCICs", "CICC-Aware"].map((item, i, arr) => (
          <div
            key={item}
            style={{
              padding: "20px 24px",
              textAlign: "center",
              borderRight: i < arr.length - 1 ? `1px solid ${BORDER}` : "none",
            }}
          >
            <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", color: MUTED, textTransform: "uppercase" }}>
              {item}
            </span>
          </div>
        ))}
      </div>

      <section id="features" style={{ padding: "100px 24px", maxWidth: 1120, margin: "0 auto" }}>
        <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 14 }}>
          Immigration Consultant Automation
        </p>
        <h2 style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 16, maxWidth: 640, lineHeight: 1.1 }}>
          Everything your RCIC practice needs, automated.
        </h2>
        <p style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.7, marginBottom: 56, maxWidth: 680 }}>
          From express entry and work permit files to study permits and permanent residence applications, VisaArc automates the repetitive immigration paperwork that slows Canadian consulting practices down.
        </p>

        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: BORDER }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: BG, padding: "30px 26px" }}>
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
          <div style={{ borderTop: `1px solid ${BORDER}`, background: SURFACE, padding: "22px 32px", textAlign: "center" }}>
            <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, fontStyle: "italic" }}>
              Plus whatever else your practice needs - snap in the features you need, not a generic package.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 14 }}>
          How It Works
        </p>
        <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 32, lineHeight: 1.15 }}>
          Onboarding built for immigration consulting workflows
        </h2>

        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          {steps.map((s, i) => (
            <div key={s.n}>
              {i > 0 && <div style={{ height: 1, background: BORDER }} />}
              <div style={{ padding: "28px 32px", display: "flex", gap: 20, alignItems: "flex-start" }}>
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
      </section>

      <section id="faq" style={{ padding: "0 24px 80px", maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 14 }}>
          FAQ
        </p>
        <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 32, lineHeight: 1.15 }}>
          Questions from Canadian immigration consultants
        </h2>

        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          {FAQ_ITEMS.map((item, i) => (
            <article key={item.question}>
              {i > 0 && <div style={{ height: 1, background: BORDER }} />}
              <div style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 8 }}>
                  {item.question}
                </h3>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 24px 120px", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: "56px 48px",
            background: `linear-gradient(160deg, #0d0f12 0%, ${SURFACE} 100%)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 480,
              height: 240,
              background: "radial-gradient(ellipse at center,rgba(91,141,246,0.07) 0%,transparent 70%)",
              pointerEvents: "none",
              borderRadius: "50%",
            }}
          />

          <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 16 }}>
            Limited Spots
          </p>
          <h2 style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 14, lineHeight: 1.15 }}>
            Ready to automate your RCIC practice?
          </h2>
          <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 36, maxWidth: 420, margin: "0 auto 36px" }}>
            VisaArc is made for RCICs and Canadian immigration consultants who are serious about efficiency. Join the practices already on the platform.
          </p>
          <CtaButton size="lg" onClick={() => setModalOpen(true)}>
            Try it out →
          </CtaButton>
        </div>
      </section>

      <Footer onGetAccess={() => setModalOpen(true)} />
    </>
  );
}
