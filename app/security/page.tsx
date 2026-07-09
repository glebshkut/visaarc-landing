"use client";

import { useState } from "react";
import { Nav, Footer, AccessModal, BORDER, MUTED, ACCENT, FG, BG, CtaButton } from "../_components/shared";

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

      <section className="section-page-hero">
        <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 16 }}>
          Security
        </p>
        <h1 style={{ fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1, color: FG, marginBottom: 24 }}>
          Client data is the most sensitive thing in your practice. We treat it that way.
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
          Every practice on VisaArc runs on Canadian infrastructure, under Canadian privacy law, with access controls scoped to your team only. Built for RCICs who need PIPEDA-compliant immigration software hosted in Canada.
        </p>
      </section>

      <section className="section-narrow" style={{ maxWidth: 1000 }}>
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          <div className="grid-security">
            {secItems.map(item => (
              <div key={item.title} className="card-padding" style={{ background: BG }}>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 10 }}>{item.title}</p>
                <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-narrow" style={{ paddingBottom: 96, maxWidth: 640, textAlign: "center" }}>
        <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 32 }}>
          Have a specific security or compliance question before requesting access? We&apos;re glad to walk through our architecture on a call.
        </p>
        <CtaButton size="lg" onClick={() => setModalOpen(true)}>
            Try it out →
        </CtaButton>
      </section>

      <Footer onGetAccess={() => setModalOpen(true)} />
    </>
  );
}
