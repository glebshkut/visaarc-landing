"use client";

import { useState } from "react";
import { Nav, Footer, AccessModal, CtaButton, BORDER, MUTED, ACCENT, FG, BG } from "../_components/shared";
import { PageHero, Reveal, AnimateIn } from "../_components/motion";

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

      <PageHero
        label="About"
        title="I did all of this manually. It was bad."
        subtitle="AI automation built for Canadian immigration consultants"
      >
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75 }}>
          VisaArc is AI automation software for RCICs and Canadian immigration consultants - built after a year of doing immigration paperwork manually.
        </p>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, marginTop: 20 }}>
          I (Gleb - founder of VisaArc and{" "}
          <a href="https://thelvon.com" target="_blank" rel="noopener" style={{ color: ACCENT, textDecoration: "none" }}>
            Thelvon
          </a>
          ){" "}spent a year in China. I was enjoying Asia, running my <a href="http://youtube.com/@kochevnik_gleb" target="_blank" rel="noopener" style={{ color: ACCENT, textDecoration: "none" }}>YouTube channel</a>, and helping students apply to universities (since that's what I did myself after living in Canada for 4 years, to try out that amazing Asian country).
        </p>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, marginTop: 20 }}>
          Every application meant pulling info from documents, typing it into forms field by field, and chasing down whatever was still missing. All manual. It sucked. Genuinely bad.
        </p>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, marginTop: 20 }}>
          Later, when I came back to Canada, I got the chance to talk with immigration consultant here and realized they have the exact same problem. Just different forms. AI is more accessible now, and I had a year of doing this the painful way. So I started building VisaArc to help them.
        </p>
        <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, marginTop: 20 }}>
          Especially with my software engineering background, I knew I could build a better solution. VisaArc is built in Edmonton, Alberta - Canadian software for Canadian immigration practices.
        </p>
      </PageHero>

      <section className="section-narrow" style={{ maxWidth: 1000 }}>
        <Reveal>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
            <div className="grid-values">
              {values.map((v) => (
                <div key={v.title} className="card-padding visaarc-step-card" style={{ background: BG }}>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: FG, letterSpacing: "-0.01em", marginBottom: 10 }}>{v.title}</p>
                  <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-narrow" style={{ paddingBottom: 96, maxWidth: 640, textAlign: "center" }}>
        <Reveal>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 32 }}>
            I&apos;ve been on both sides of this. The tedious document work that eats hours you should spend on the people you&apos;re actually trying to help. That&apos;s what VisaArc is for.
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
