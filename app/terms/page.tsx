"use client";

import Link from "next/link";

const BORDER = "#1e2124";
const MUTED = "#6b7280";
const ACCENT = "#5b8df6";
const FG = "#f0f2f4";
const BG = "#08090a";
const SURFACE = "#0e1012";

export default function Terms() {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "rgba(8,9,10,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${BORDER}`,
          height: 56,
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
          <svg width="40" height="21" viewBox="0 0 120 62" fill="none" style={{ flexShrink: 0, display: "block" }}>
            <path d="M8 58 A52 52 0 0 1 112 58" stroke="#7a1220" strokeWidth="2.6" strokeLinecap="round"/>
            <path d="M17 58 A43 43 0 0 1 103 58" stroke="#c23b3b" strokeWidth="2.6" strokeLinecap="round"/>
            <path d="M26 58 A34 34 0 0 1 94 58" stroke="#ece8e0" strokeWidth="2.6" strokeLinecap="round"/>
            <path d="M35 58 A25 25 0 0 1 85 58" stroke="#c23b3b" strokeWidth="2.6" strokeLinecap="round"/>
            <path d="M44 58 A16 16 0 0 1 76 58" stroke="#7a1220" strokeWidth="2.6" strokeLinecap="round"/>
          </svg>
          <Link
            href="/"
            style={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: FG,
              textDecoration: "none",
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif",
              position: "relative",
              top: 1,
            }}
          >
            VisaArc
          </Link>
        </div>
      </nav>

      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "100px 24px 80px",
        }}
      >
        <p
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: ACCENT,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontSize: "clamp(24px,3vw,36px)",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            color: FG,
            marginBottom: 8,
          }}
        >
          Terms of Service & Privacy Policy
        </h1>
        <p style={{ fontSize: 12, color: MUTED, marginBottom: 48 }}>
          Last updated: July 2, 2026
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            body: `By submitting your information through the VisaArc access form, you agree to these Terms of Service and Privacy Policy. These terms are entered into between you and SHKUT Acquisition DNA Inc. (operating as Thelvon), the operator of VisaArc ("we," "us," or "our"). If you do not agree, do not submit your information.`,
          },
          {
            title: "2. Access & Onboarding",
            body: `VisaArc is currently available to a limited number of regulated Canadian immigration consultants. Submitting the access form initiates your onboarding process. A member of our team will contact you to complete setup, verify your RCIC credentials, and configure your account. Access is subject to availability and our sole discretion.`,
          },
          {
            title: "3. Communications Consent",
            body: `By submitting your information, you expressly consent to being contacted by SHKUT Acquisition DNA Inc. (Thelvon/VisaArc) via:\n\n• Email — including onboarding information, product updates, feature announcements, and promotional offers\n• SMS/text message — including account setup messages, reminders, and marketing communications\n• Phone call — including calls from our team for onboarding, support, or sales purposes\n\nYou may opt out of marketing communications at any time by replying STOP to any SMS, clicking unsubscribe in any email, or contacting us at gleb@thelvon.com. Opting out of marketing communications does not affect transactional or service-related messages necessary to operate your account.`,
          },
          {
            title: "4. Information We Collect",
            body: `We collect the information you submit in the access form (full name, email address, phone number), as well as usage data, device information, and any documents or data you upload to the VisaArc platform. We use this information to operate and improve VisaArc, communicate with you, and comply with applicable law.`,
          },
          {
            title: "5. PIPEDA Compliance & Data Residency",
            body: `We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy laws. All personal data collected through VisaArc is stored on AWS infrastructure located in the ca-central-1 (Canada) region. We do not transfer your personal data outside of Canada without your consent, except as required by law.`,
          },
          {
            title: "6. Data Sharing",
            body: `We do not sell your personal information. We may share your information with trusted third-party service providers that assist us in operating the platform (e.g., cloud infrastructure, email delivery, analytics). These providers are bound by confidentiality agreements and are prohibited from using your data for any other purpose. We may also disclose information where required by law or regulatory authority.`,
          },
          {
            title: "7. Retention",
            body: `We retain your personal information for as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements. You may request deletion of your data at any time by contacting gleb@thelvon.com.`,
          },
          {
            title: "8. Your Rights",
            body: `Under PIPEDA, you have the right to access the personal information we hold about you, request corrections to inaccurate information, withdraw consent (subject to legal or contractual restrictions), and lodge a complaint with the Office of the Privacy Commissioner of Canada. To exercise any of these rights, contact us at gleb@thelvon.com.`,
          },
          {
            title: "9. Limitation of Liability",
            body: `VisaArc is provided "as is." To the maximum extent permitted by law, SHKUT Acquisition DNA Inc. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform or reliance on its output. Nothing in VisaArc constitutes legal advice. You remain solely responsible for all immigration applications and filings submitted to IRCC.`,
          },
          {
            title: "10. Changes to These Terms",
            body: `We may update these terms from time to time. Material changes will be communicated via email or a notice within the platform. Continued use of VisaArc after such notice constitutes acceptance of the revised terms.`,
          },
          {
            title: "11. Contact",
            body: `Questions about these terms or your privacy? Contact us:\n\nSHKUT Acquisition DNA Inc. (operating as Thelvon)\ngleb@thelvon.com\nEdmonton, Alberta, Canada`,
          },
        ].map((section) => (
          <div
            key={section.title}
            style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 32,
              paddingBottom: 32,
            }}
          >
            <h2
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: FG,
                letterSpacing: "-0.01em",
                marginBottom: 12,
              }}
            >
              {section.title}
            </h2>
            {section.body.split("\n").map((line, i) => (
              <p
                key={i}
                style={{
                  fontSize: 13.5,
                  color: line.startsWith("•") ? MUTED : "#9ca3af",
                  lineHeight: 1.75,
                  marginTop: line.startsWith("•") ? 4 : line === "" ? 8 : 0,
                  paddingLeft: line.startsWith("•") ? 16 : 0,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        ))}

        <div
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: SURFACE,
            borderRadius: 8,
            border: `1px solid ${BORDER}`,
          }}
        >
          <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>
            By submitting the VisaArc access form, you acknowledge that you have read and agree to these Terms of Service and Privacy Policy, including consent to communications as described in Section 3.
          </p>
        </div>

        <div style={{ marginTop: 48, borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}>
          <Link
            href="/"
            style={{ fontSize: 13, color: ACCENT, textDecoration: "none" }}
          >
            ← Back to VisaArc
          </Link>
        </div>
      </main>

      <footer
        style={{
          borderTop: `1px solid ${BORDER}`,
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 11, color: MUTED }}>
          © 2026 SHKUT Acquisition DNA Inc. (operating as Thelvon). All rights reserved.
        </p>
      </footer>
    </>
  );
}
