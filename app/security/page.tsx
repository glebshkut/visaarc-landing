"use client";

import { useState } from "react";
import { Nav, Footer, AccessModal, BORDER, MUTED, ACCENT, FG, BG, CtaButton } from "../_components/shared";
import { PageHero, Reveal, AnimateIn } from "../_components/motion";

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

      <PageHero
        label="Security"
        title="Client data is the most sensitive thing in your practice. We treat it that way."
      >
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
          Every practice on VisaArc runs on Canadian infrastructure, under Canadian privacy law, with access controls scoped to your team only. Built for RCICs who need PIPEDA-compliant immigration software hosted in Canada.
        </p>
      </PageHero>

      <section className="section-narrow" style={{ maxWidth: 1000 }}>
        <Reveal>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
            <div className="grid-security">
              {secItems.map((item) => (
                <div key={item.title} className="card-padding visaarc-step-card" style={{ background: BG }}>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 10 }}>{item.title}</p>
                  <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-narrow" style={{ maxWidth: 720 }}>
        <Reveal>
          <h2 style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 600, letterSpacing: "-0.03em", color: FG, marginBottom: 16, lineHeight: 1.2 }}>
            CICC-compliant software for regulated practices
          </h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 16 }}>
            Regulated Canadian Immigration Consultants operate under College of Immigration and Citizenship Consultants (CICC) rules for confidentiality, recordkeeping, and professional conduct. VisaArc is configured with those obligations in mind - scoped team access, auditable file handling, and Canadian data residency - so your software stack supports how you already practice, rather than fighting it.
          </p>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75 }}>
            Automation never replaces a consultant&apos;s judgment. VisaArc prepares documents and forms for your review; you remain the regulated professional responsible for advice and submission decisions.
          </p>
        </Reveal>
      </section>

      <section className="section-narrow" style={{ paddingBottom: 96, maxWidth: 640, textAlign: "center" }}>
        <Reveal>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 32 }}>
            Have a specific security or compliance question before requesting access? We&apos;re glad to walk through our architecture on a call.
          </p>
        </Reveal>
        <AnimateIn delay={1}>
          <CtaButton size="lg" onClick={() => setModalOpen(true)}>
            Try it out →
          </CtaButton>
        </AnimateIn>
      </section>

      <Footer onGetAccess={() => setModalOpen(true)} />
    </>
  );
}
