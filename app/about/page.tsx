"use client";

import { useState } from "react";
import { Nav, Footer, AccessModal, CtaButton, BORDER, MUTED, ACCENT, FG, BG } from "../_components/shared";

const values = [
  {
    title: "Practice-first, not platform-first",
    desc: "We don't sell a fixed tool and ask you to adapt. We map the workflow first, then snap in the features that remove real friction.",
  },
  {
    title: "Canadian, by design",
    desc: "Headquartered in Edmonton. Client data stays on Canadian infrastructure, handled under Canadian privacy law.",
  },
  {
    title: "A relationship, not a login",
    desc: "Every practice we work with has a direct line to the team configuring their setup - no ticket queue.",
  },
];

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <AccessModal onClose={() => setModalOpen(false)} />}

      <Nav onGetAccess={() => setModalOpen(true)} activePage="about" />

      <section style={{ padding: "150px 24px 90px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", marginBottom: 16 }}>
          About
        </p>
        <h1 style={{ fontSize: "clamp(28px,4.5vw,48px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.1, color: FG, marginBottom: 24 }}>
          Built by consultants who got tired of doing it the hard way.
        </h1>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
          Before writing a line of code, the{" "}
          <a href="https://thelvon.com" target="_blank" rel="noopener" style={{ color: ACCENT, textDecoration: "none" }}>
            Thelvon
          </a>
          {" "}team ran an immigration consulting practice out of Edmonton. Every week meant manually pulling data from passports and supporting documents, re-entering it into IMM forms field by field, then chasing down whatever was still missing. The work was precise and repetitive - and it consumed hours that should have gone to clients. VisaArc is the tool we couldn&apos;t find.
        </p>
      </section>

      <section style={{ padding: "0 24px 100px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: BORDER }}>
            {values.map(v => (
              <div key={v.title} style={{ background: BG, padding: "32px 28px" }}>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 10 }}>{v.title}</p>
                <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 120px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 32 }}>
          Regulated consultants spend too much of their week on work that has nothing to do with the judgment they&apos;re licensed to provide. That&apos;s the problem VisaArc exists to solve.
        </p>
        <CtaButton size="lg" onClick={() => setModalOpen(true)}>
          Try it out →
        </CtaButton>
      </section>

      <Footer onGetAccess={() => setModalOpen(true)} />
    </>
  );
}
