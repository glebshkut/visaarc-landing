"use client";

import { useState } from "react";
import { Nav, Footer, AccessModal, BORDER, MUTED, ACCENT, FG, BG } from "../_components/shared";

const secItems = [
  {
    title: "Canadian data residency",
    desc: "All client files and application data are stored and processed on AWS ca-central-1. Nothing crosses the border by default.",
  },
  {
    title: "PIPEDA-compliant by design",
    desc: "Data handling, retention, and consent practices are built around Canadian federal privacy law from the ground up.",
  },
  {
    title: "Encrypted in transit and at rest",
    desc: "Client documents and personal information are encrypted end to end, both moving through the platform and sitting in storage.",
  },
  {
    title: "Scoped access controls",
    desc: "Only your practice's authorized team can access your files. No cross-practice visibility, ever.",
  },
  {
    title: "Built with CICC obligations in mind",
    desc: "Configured around the recordkeeping and confidentiality expectations regulated consultants already operate under.",
  },
  {
    title: "A direct line to the team",
    desc: "Security questions go straight to the people who configured your setup - not a support ticket queue.",
  },
];

export default function Security() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <AccessModal onClose={() => setModalOpen(false)} />}

      <Nav onGetAccess={() => setModalOpen(true)} activePage="security" />

      <section style={{ padding: "150px 24px 80px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 16 }}>
          Security
        </p>
        <h1 style={{ fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1, color: FG, marginBottom: 24 }}>
          Client data is the most sensitive thing in your practice. We treat it that way.
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
          Every practice on VisaArc runs on Canadian infrastructure, under Canadian privacy law, with access controls scoped to your team only.
        </p>
      </section>

      <section style={{ padding: "0 24px 100px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: BORDER }}>
            {secItems.map(item => (
              <div key={item.title} style={{ background: BG, padding: "32px 28px" }}>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 10 }}>{item.title}</p>
                <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 120px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 32 }}>
          Have a specific security or compliance question before requesting access? We&apos;re glad to walk through our architecture on a call.
        </p>
        <a
          href="https://cal.com/team/thelvon/strategy-call"
          target="_blank"
          rel="noopener"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, #6b9fff 0%, #5b8df6 40%, #4a7ae8 100%)",
            color: "#fff", fontSize: 15, fontWeight: 600,
            padding: "14px 32px", borderRadius: 9, textDecoration: "none",
            letterSpacing: "-0.01em",
            boxShadow: "0 0 0 1px rgba(91,141,246,0.35), 0 4px 16px rgba(91,141,246,0.28), 0 1px 3px rgba(0,0,0,0.5)",
            transition: "transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(-1px)";
            el.style.filter = "brightness(1.08)";
            el.style.boxShadow = "0 0 0 1px rgba(91,141,246,0.5), 0 8px 28px rgba(91,141,246,0.38), 0 2px 6px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "";
            el.style.filter = "";
            el.style.boxShadow = "0 0 0 1px rgba(91,141,246,0.35), 0 4px 16px rgba(91,141,246,0.28), 0 1px 3px rgba(0,0,0,0.5)";
          }}
        >
          Book a strategy call →
        </a>
      </section>

      <Footer onGetAccess={() => setModalOpen(true)} />
    </>
  );
}
