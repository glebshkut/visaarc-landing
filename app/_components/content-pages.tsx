"use client";

import { useState } from "react";
import Link from "next/link";
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
import { PageHero, Reveal, AnimateIn } from "./motion";
import type { SolutionPageContent } from "@/lib/content/solutions";
import {
  SOLUTION_AI_REASSURANCE,
  SOLUTION_CLIENT_FIT,
} from "@/lib/content/solutions";
import type { ComparePageContent } from "@/lib/content/compare";
import type { BlogPost } from "@/lib/content/blog";
import { GUIDE } from "@/lib/content/guide";
import { SWITCHING } from "@/lib/content/switching";

const prose: React.CSSProperties = {
  fontSize: 15,
  color: MUTED,
  lineHeight: 1.75,
  marginBottom: 16,
};

const h2Style: React.CSSProperties = {
  fontSize: "clamp(20px,2.8vw,28px)",
  fontWeight: 600,
  letterSpacing: "-0.03em",
  color: FG,
  marginBottom: 16,
  marginTop: 8,
  lineHeight: 1.2,
};

const h3Style: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: FG,
  letterSpacing: "-0.01em",
  marginBottom: 8,
};

function RelatedBlock({
  links,
  title = "Related pages",
}: {
  links: { href: string; label: string }[];
  title?: string;
}) {
  return (
    <Reveal>
      <h2 style={{ ...h2Style, marginTop: 0 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              display: "block",
              padding: "16px 20px",
              fontSize: 14,
              color: MUTED,
              textDecoration: "none",
              borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
              background: BG,
              transition: "color 0.12s, background 0.12s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = FG;
              e.currentTarget.style.background = SURFACE;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = MUTED;
              e.currentTarget.style.background = BG;
            }}
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </Reveal>
  );
}

function PageShell({
  children,
  label,
  title,
  subtitle,
  heroChildren,
}: {
  children: React.ReactNode;
  label: string;
  title: string;
  subtitle?: string;
  heroChildren?: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <AccessModal onClose={() => setModalOpen(false)} />}
      <Nav onGetAccess={() => setModalOpen(true)} />
      <PageHero label={label} title={title} subtitle={subtitle} align="left">
        {heroChildren}
      </PageHero>
      {children}
      <section className="section-narrow" style={{ paddingBottom: 96, maxWidth: 640, textAlign: "center" }}>
        <AnimateIn delay={1}>
          <CtaButton size="lg" onClick={() => setModalOpen(true)}>
            Claim your spot →
          </CtaButton>
        </AnimateIn>
      </section>
      <Footer onGetAccess={() => setModalOpen(true)} />
    </>
  );
}

export function SolutionPageView({ content }: { content: SolutionPageContent }) {
  return (
    <PageShell
      label={content.label}
      title={content.h1}
      heroChildren={
        <div style={{ marginTop: 8 }}>
          {content.intro.map((p) => (
            <p key={p.slice(0, 32)} style={{ ...prose, marginBottom: 14 }}>
              {p}
            </p>
          ))}
        </div>
      }
    >
      <section className="section-narrow" style={{ maxWidth: 720 }}>
        <Reveal delay={80}>
          <h2 style={{ ...h2Style, marginTop: 0 }}>How VisaArc handles it</h2>
          <p style={{ ...prose, marginBottom: 20 }}>{SOLUTION_AI_REASSURANCE}</p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", marginBottom: 40 }}>
            {content.howItWorks.map((step, i) => (
              <div key={step.title}>
                {i > 0 && <div style={{ height: 1, background: BORDER }} />}
                <div className="card-padding" style={{ background: BG }}>
                  <h3 style={h3Style}>{step.title}</h3>
                  <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.7 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h2 style={h2Style}>Built around how your clients actually send documents</h2>
          <p style={{ ...prose, marginBottom: 40 }}>{SOLUTION_CLIENT_FIT}</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 style={h2Style}>Documents this workflow typically involves</h2>
          <ul style={{ marginBottom: 40, paddingLeft: 20 }}>
            {content.documentNotes.map((note) => (
              <li key={note} style={{ ...prose, marginBottom: 8 }}>
                {note}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <h2 style={h2Style}>What stays with the consultant</h2>
          <p style={prose}>
            VisaArc automates repetitive paperwork. It does not replace regulated judgment - important for CICC-compliant practice.
          </p>
          <ul style={{ marginBottom: 48, paddingLeft: 20 }}>
            {content.consultantKeeps.map((item) => (
              <li key={item} style={{ ...prose, marginBottom: 8 }}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <RelatedBlock
          links={[
            { href: "/security", label: "PIPEDA & security" },
            ...content.related,
          ]}
        />
      </section>
    </PageShell>
  );
}

export function ComparePageView({ content }: { content: ComparePageContent }) {
  return (
    <PageShell
      label={content.label}
      title={content.h1}
      heroChildren={
        <div style={{ marginTop: 8 }}>
          {content.intro.map((p) => (
            <p key={p.slice(0, 32)} style={{ ...prose, marginBottom: 14 }}>
              {p}
            </p>
          ))}
        </div>
      }
    >
      <section className="section-narrow" style={{ maxWidth: 800 }}>
        <Reveal>
          <h2 style={{ ...h2Style, marginTop: 0 }}>Side-by-side</h2>
          <div style={{ overflowX: "auto", marginBottom: 40, border: `1px solid ${BORDER}`, borderRadius: 8 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
              <thead>
                <tr style={{ background: SURFACE }}>
                  <th style={{ textAlign: "left", padding: "14px 16px", fontSize: 12, color: MUTED, fontWeight: 600 }}>Criterion</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", fontSize: 12, color: ACCENT, fontWeight: 600 }}>VisaArc</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", fontSize: 12, color: MUTED, fontWeight: 600 }}>{content.competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr key={row.criterion} style={{ borderTop: `1px solid ${BORDER}` }}>
                    <td style={{ padding: "14px 16px", fontSize: 13, color: FG, fontWeight: 600, verticalAlign: "top" }}>{row.criterion}</td>
                    <td style={{ padding: "14px 16px", fontSize: 13, color: MUTED, lineHeight: 1.6, verticalAlign: "top" }}>{row.visaarc}</td>
                    <td style={{ padding: "14px 16px", fontSize: 13, color: MUTED, lineHeight: 1.6, verticalAlign: "top" }}>{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", marginBottom: 40 }}>
            <div className="grid-compare">
              <div className="card-padding" style={{ background: BG }}>
                <h2 style={{ ...h3Style, fontSize: 16, marginBottom: 14 }}>Choose VisaArc if…</h2>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {content.chooseVisaArc.map((item) => (
                    <li key={item} style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.65, marginBottom: 10 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-padding" style={{ background: BG }}>
                <h2 style={{ ...h3Style, fontSize: 16, marginBottom: 14 }}>{content.competitorName} may be a better fit if…</h2>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {content.chooseCompetitor.map((item) => (
                    <li key={item} style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.65, marginBottom: 10 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.65, marginBottom: 40 }}>{content.disclaimer}</p>
        </Reveal>

        <RelatedBlock
          title="Keep exploring"
          links={[
            { href: "/switching-from-legacy-immigration-software", label: "Switching from legacy software" },
            { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
            { href: "/security", label: "Security & PIPEDA" },
          ]}
        />
      </section>
    </PageShell>
  );
}

export function BlogPageView({ content }: { content: BlogPost }) {
  return (
    <PageShell label={content.label} title={content.h1}>
      <section className="section-narrow" style={{ maxWidth: 720 }}>
        {content.sections.map((section, i) => (
          <Reveal key={section.heading} delay={i * 40}>
            <h2 style={{ ...h2Style, marginTop: i === 0 ? 0 : undefined }}>{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} style={prose}>
                {p}
              </p>
            ))}
          </Reveal>
        ))}

        <Reveal>
          <p style={{ ...prose, marginTop: 24, marginBottom: 48 }}>{content.closing}</p>
        </Reveal>

        <RelatedBlock title="Related reading" links={content.related} />
      </section>
    </PageShell>
  );
}

export function GuidePageView() {
  const content = GUIDE;

  return (
    <PageShell label={content.label} title={content.h1}>
      <section className="section-narrow" style={{ maxWidth: 720 }}>
        {content.sections.map((section, i) => (
          <Reveal key={section.heading} delay={i * 40}>
            <h2 style={{ ...h2Style, marginTop: i === 0 ? 0 : undefined }}>{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} style={prose}>
                {p}
              </p>
            ))}
          </Reveal>
        ))}

        <Reveal>
          <h2 style={h2Style}>Use-case workflows</h2>
          <p style={prose}>Dive into how automation applies to the application types most RCIC practices manage:</p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", marginBottom: 40 }}>
            {content.useCases.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  padding: "18px 20px",
                  textDecoration: "none",
                  borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
                  background: BG,
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 600, color: FG, marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{item.blurb}</p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 style={h2Style}>From the blog</h2>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", marginBottom: 24 }}>
            {content.blogLinks.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  padding: "18px 20px",
                  textDecoration: "none",
                  borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
                  background: BG,
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 600, color: FG, marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{item.blurb}</p>
              </Link>
            ))}
          </div>
        </Reveal>

        <RelatedBlock
          title="Also worth reading"
          links={[
            { href: "/about", label: "About VisaArc" },
            { href: "/security", label: "Security & PIPEDA" },
            { href: "/solutions/express-entry-automation", label: "Express Entry automation" },
          ]}
        />
      </section>
    </PageShell>
  );
}

export function SwitchingPageView() {
  const content = SWITCHING;

  return (
    <PageShell
      label={content.label}
      title={content.h1}
      heroChildren={
        <div style={{ marginTop: 8 }}>
          {content.intro.map((p) => (
            <p key={p.slice(0, 32)} style={{ ...prose, marginBottom: 14 }}>
              {p}
            </p>
          ))}
        </div>
      }
    >
      <section className="section-narrow" style={{ maxWidth: 720 }}>
        <Reveal>
          <h2 style={{ ...h2Style, marginTop: 0 }}>Signs it may be time to switch</h2>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", marginBottom: 40 }}>
            {content.signs.map((sign, i) => (
              <div key={sign.title}>
                {i > 0 && <div style={{ height: 1, background: BORDER }} />}
                <div className="card-padding" style={{ background: BG }}>
                  <h3 style={h3Style}>{sign.title}</h3>
                  <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.7 }}>{sign.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 style={h2Style}>What VisaArc emphasizes instead</h2>
          <ul style={{ marginBottom: 48, paddingLeft: 20 }}>
            {content.differentiators.map((item) => (
              <li key={item} style={{ ...prose, marginBottom: 8 }}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <RelatedBlock
          title="Related pages"
          links={[
            { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
            { href: "/security", label: "Security, PIPEDA & AI accuracy" },
            { href: "/about", label: "About VisaArc" },
            { href: "/solutions/express-entry-automation", label: "Express Entry automation" },
          ]}
        />
      </section>
    </PageShell>
  );
}
