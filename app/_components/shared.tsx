"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { getStoredUtmParams } from "@/lib/utm-client";

export const BORDER = "#1e2124";
export const MUTED = "#9ca3af";
export const ACCENT = "#5b8df6";
export const FG = "#f0f2f4";
export const BG = "#08090a";
export const SURFACE = "#0e1012";

/* ─── CTA button ─── */
export const ctaBtnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background: "linear-gradient(135deg, #6b9fff 0%, #5b8df6 40%, #4a7ae8 100%)",
  color: "#fff",
  fontFamily: "Inter,system-ui,sans-serif",
  fontWeight: 600,
  letterSpacing: "-0.01em",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease",
  boxShadow: "0 0 0 1px rgba(91,141,246,0.35), 0 4px 16px rgba(91,141,246,0.28), 0 1px 3px rgba(0,0,0,0.5)",
  userSelect: "none",
  WebkitUserSelect: "none",
};

export function CtaButton({
  children,
  onClick,
  size = "md",
  style: extraStyle,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}) {
  const sizeStyles: React.CSSProperties =
    size === "lg"
      ? { fontSize: 15, padding: "14px 32px", borderRadius: 9 }
      : size === "sm"
      ? { fontSize: 13, padding: "8px 18px", borderRadius: 7 }
      : { fontSize: 14, padding: "12px 26px", borderRadius: 8 };

  return (
    <button
      onClick={onClick}
      style={{ ...ctaBtnBase, ...sizeStyles, ...extraStyle }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-1px)";
        el.style.boxShadow = "0 0 0 1px rgba(91,141,246,0.5), 0 8px 28px rgba(91,141,246,0.38), 0 2px 6px rgba(0,0,0,0.5)";
        el.style.filter = "brightness(1.08)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 0 0 1px rgba(91,141,246,0.35), 0 4px 16px rgba(91,141,246,0.28), 0 1px 3px rgba(0,0,0,0.5)";
        el.style.filter = "brightness(1)";
      }}
      onMouseDown={e => { e.currentTarget.style.transform = "translateY(0px) scale(0.985)"; }}
      onMouseUp={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
    >
      {children}
    </button>
  );
}

/* ─── Logo - Canadian palette arc ─── */
export function Logo({ width = 48 }: { width?: number }) {
  const h = Math.round(width * (62 / 120));
  return (
    <svg width={width} height={h} viewBox="0 0 120 62" fill="none" style={{ flexShrink: 0, display: "block" }}>
      <path d="M8 58 A52 52 0 0 1 112 58" stroke="#7a1220" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M17 58 A43 43 0 0 1 103 58" stroke="#c23b3b" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M26 58 A34 34 0 0 1 94 58" stroke="#ece8e0" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M35 58 A25 25 0 0 1 85 58" stroke="#c23b3b" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M44 58 A16 16 0 0 1 76 58" stroke="#7a1220" strokeWidth="2.6" strokeLinecap="round"/>
    </svg>
  );
}

export const WORDMARK: React.CSSProperties = {
  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', system-ui, sans-serif",
  fontWeight: 600,
  letterSpacing: "0.04em",
  color: FG,
};

/* ─── Modal ─── */
const VOLUME_OPTIONS = ["0-10", "10-50", "50-100", "100-500", "500+"] as const;
type VolumeOption = typeof VOLUME_OPTIONS[number];

const inputStyle: React.CSSProperties = {
  background: "#0a0c0e",
  border: `1px solid ${BORDER}`,
  borderRadius: 8,
  padding: "11px 14px",
  fontSize: 14,
  color: FG,
  fontFamily: "Inter,system-ui,sans-serif",
  width: "100%",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: MUTED,
  letterSpacing: "0.02em",
  marginBottom: 6,
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `+${digits}`;
  if (digits.length <= 6) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
  if (digits.length <= 10) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
}

const CAL_BOOKING_URL = "https://cal.com/team/thelvon/strategy-call";

function toE164Phone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

function buildCalBookingUrl({ name, email, phone }: { name: string; email: string; phone: string }) {
  const params = new URLSearchParams();
  params.set("name", name.trim());
  params.set("email", email.trim());
  const e164 = toE164Phone(phone);
  if (e164) params.set("smsReminderNumber", e164);
  return `${CAL_BOOKING_URL}?${params.toString()}`;
}

export function AccessModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [volume, setVolume] = useState<VolumeOption | "">("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const calBookingUrl = useMemo(
    () => buildCalBookingUrl({ name, email, phone }),
    [name, email, phone],
  );

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  function validate() {
    const errs: Record<string, string> = {};
    if (name.trim().length < 2) errs.name = "Please enter your full name (at least 2 characters).";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = "Please enter a valid email address.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) errs.phone = "Please enter a valid phone number.";
    if (!volume) errs.volume = "Please select your monthly application volume.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    fetch("/api/access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone,
        volume,
        source: "visaarc-landing",
        timestamp: new Date().toISOString(),
        utm: getStoredUtmParams(),
      }),
    }).catch(() => {});
    setSubmitted(true);
  }

  function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    e.target.style.borderColor = ACCENT;
    e.target.style.boxShadow = "0 0 0 3px rgba(91,141,246,0.12)";
  }
  function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    e.target.style.borderColor = errors[e.target.name] ? "#f87171" : BORDER;
    e.target.style.boxShadow = "none";
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.18s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        .modal-input::placeholder { color: #4b5563; }
        .modal-select option { background: #0d0f11; color: #f0f2f4; }
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        className="modal-panel"
        style={{
          background: "#0d0f11",
          border: `1px solid ${BORDER}`,
          borderRadius: 14,
          width: "100%",
          maxWidth: 480,
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          animation: "slideUp 0.22s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "none", border: "none", cursor: "pointer",
            color: MUTED, padding: 6, borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "color 0.12s, background 0.12s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = FG; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.background = "none"; }}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "8px 0" }}>
            <div style={{
              width: 52, height: 52,
              background: "linear-gradient(135deg, rgba(91,141,246,0.2) 0%, rgba(91,141,246,0.08) 100%)",
              borderRadius: "50%", border: `1px solid rgba(91,141,246,0.25)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11l5.5 5.5 9-9" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontSize: 19, fontWeight: 600, color: FG, letterSpacing: "-0.025em", marginBottom: 10 }}>
              You&apos;re in.
            </p>
            <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.7, marginBottom: 32 }}>
              Your account is being configured. Book a setup session to get VisaArc running for your practice today.
            </p>
            <a
              href={calBookingUrl}
              target="_blank" rel="noopener"
              style={{ ...ctaBtnBase, fontSize: 14, padding: "13px 26px", borderRadius: 8, display: "inline-flex" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-1px)"; el.style.filter = "brightness(1.08)"; el.style.boxShadow = "0 0 0 1px rgba(91,141,246,0.5), 0 8px 28px rgba(91,141,246,0.38), 0 2px 6px rgba(0,0,0,0.5)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.filter = ""; el.style.boxShadow = "0 0 0 1px rgba(91,141,246,0.35), 0 4px 16px rgba(91,141,246,0.28), 0 1px 3px rgba(0,0,0,0.5)"; }}
            >
              Book your setup session →
            </a>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <Logo width={36} />
                <span style={{ fontSize: 14, ...WORDMARK, position: "relative", top: 1 }}>VisaArc</span>
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: FG, letterSpacing: "-0.03em", marginBottom: 6 }}>
                Fill out the form
              </h2>
              <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.65 }}>
                Available to Regulated Canadian Immigration Consultants only
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Full name">
                <input
                  className="modal-input"
                  name="name"
                  type="text"
                  placeholder="e.g. Sarah Johnson"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.name ? "#f87171" : BORDER }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  autoComplete="name"
                />
                {errors.name && <p style={{ fontSize: 11.5, color: "#f87171", marginTop: 4 }}>{errors.name}</p>}
              </Field>

              <Field label="Email address">
                <input
                  className="modal-input"
                  name="email"
                  type="email"
                  placeholder="e.g. sarah@immigrationfirm.ca"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.email ? "#f87171" : BORDER }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  autoComplete="email"
                  inputMode="email"
                />
                {errors.email && <p style={{ fontSize: 11.5, color: "#f87171", marginTop: 4 }}>{errors.email}</p>}
              </Field>

              <Field label="Phone number">
                <input
                  className="modal-input"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +1 (416) 555-0123"
                  value={phone}
                  onChange={e => setPhone(formatPhone(e.target.value))}
                  style={{ ...inputStyle, borderColor: errors.phone ? "#f87171" : BORDER }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                  autoComplete="tel"
                  inputMode="tel"
                />
                {errors.phone && <p style={{ fontSize: 11.5, color: "#f87171", marginTop: 4 }}>{errors.phone}</p>}
              </Field>

              <Field label="Applications processed per month">
                <select
                  className="modal-select"
                  name="volume"
                  value={volume}
                  onChange={e => setVolume(e.target.value as VolumeOption)}
                  style={{
                    ...inputStyle,
                    borderColor: errors.volume ? "#f87171" : BORDER,
                    appearance: "none",
                    WebkitAppearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: 36,
                    cursor: "pointer",
                    color: volume ? FG : "#4b5563",
                  }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                >
                  <option value="" disabled>Select a range</option>
                  {VOLUME_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt} applications / month</option>
                  ))}
                </select>
                {errors.volume && <p style={{ fontSize: 11.5, color: "#f87171", marginTop: 4 }}>{errors.volume}</p>}
              </Field>

              <CtaButton size="md" style={{ width: "100%", marginTop: 4, padding: "14px 24px", borderRadius: 8, fontSize: 14 }}>
                Proceed →
              </CtaButton>

              <p style={{ fontSize: 11.5, color: "#6b7280", textAlign: "center", lineHeight: 1.6, marginTop: -2 }}>
                By submitting you agree to our{" "}
                <a href="/terms" onClick={onClose} style={{ color: "#6b7280", textDecoration: "underline", textUnderlineOffset: 2 }}>
                  Terms of Service & Privacy Policy
                </a>.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Shared Nav ─── */
export function Nav({
  onGetAccess,
  activePage,
}: {
  onGetAccess: () => void;
  activePage?: "about" | "security";
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: 13,
    color: active ? FG : MUTED,
    textDecoration: "none",
    letterSpacing: "-0.01em",
    transition: "color 0.12s",
  });

  return (
    <>
      <nav className="site-nav">
        <div className="site-nav-inner">
          <div className="site-nav-left">
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <Logo width={40} />
              <span style={{ fontSize: 16, ...WORDMARK, position: "relative", top: 1 }}>VisaArc</span>
            </Link>
            <a
              href="https://thelvon.com"
              target="_blank"
              rel="noopener"
              className="nav-thelvon-desktop"
              style={{ fontSize: 12, color: MUTED, textDecoration: "none", letterSpacing: "-0.01em", paddingTop: 3, transition: "color 0.12s" }}
              onMouseEnter={e => (e.currentTarget.style.color = FG)}
              onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
            >
              by Thelvon
            </a>
          </div>

          <div className="site-nav-center">
            <Link href="/about" style={linkStyle(activePage === "about")}
              onMouseEnter={e => (e.currentTarget.style.color = FG)}
              onMouseLeave={e => (e.currentTarget.style.color = activePage === "about" ? FG : MUTED)}>
              About
            </Link>
            <Link href="/security" style={linkStyle(activePage === "security")}
              onMouseEnter={e => (e.currentTarget.style.color = FG)}
              onMouseLeave={e => (e.currentTarget.style.color = activePage === "security" ? FG : MUTED)}>
              Security
            </Link>
            <Link href="/#features" style={linkStyle(false)}
              onMouseEnter={e => (e.currentTarget.style.color = FG)}
              onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              Features
            </Link>
          </div>

          <div className="site-nav-right">
            <CtaButton size="sm" onClick={onGetAccess}>Try it out</CtaButton>
            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMenuOpen(open => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu" role="dialog" aria-label="Navigation menu">
          <Link
            href="/about"
            className={`nav-mobile-link${activePage === "about" ? " nav-mobile-link--active" : ""}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/security"
            className={`nav-mobile-link${activePage === "security" ? " nav-mobile-link--active" : ""}`}
            onClick={closeMenu}
          >
            Security
          </Link>
          <Link href="/#features" className="nav-mobile-link" onClick={closeMenu}>
            Features
          </Link>
          <a
            href="https://thelvon.com"
            target="_blank"
            rel="noopener"
            className="nav-mobile-thelvon"
            onClick={closeMenu}
          >
            by Thelvon
          </a>
        </div>
      )}
    </>
  );
}

/* ─── Shared Footer ─── */
export function Footer({ onGetAccess }: { onGetAccess?: () => void }) {
  const linkHover = (color: string) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = FG),
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = color),
  });

  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "48px 20px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="grid-footer">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
              <Logo width={36} />
              <span style={{ fontSize: 15, ...WORDMARK, position: "relative", top: 1 }}>VisaArc</span>
            </div>
            <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65, marginBottom: 16, maxWidth: 260 }}>
              AI-powered practice management and workflow automation for Regulated Canadian Immigration Consultants (RCICs).
            </p>
            <p style={{ fontSize: 11, color: MUTED, letterSpacing: "0.01em" }}>
              A product by Thelvon · SHKUT Acquisition DNA Inc.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:info@thelvon.com"
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                {...linkHover(MUTED)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke={MUTED} strokeWidth="1.2" /><path d="M1 4.5l6 4.5L13 4.5" stroke={MUTED} strokeWidth="1.2" strokeLinecap="round" /></svg>
                info@thelvon.com
              </a>
              <a href="https://cal.com/team/thelvon/strategy-call" target="_blank" rel="noopener"
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                {...linkHover(MUTED)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="12" height="11" rx="1.5" stroke={MUTED} strokeWidth="1.2" /><path d="M1 5.5h12M5 1v2M9 1v2" stroke={MUTED} strokeWidth="1.2" strokeLinecap="round" /></svg>
                Book a strategy call →
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: MUTED }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5C4.791 1.5 3 3.291 3 5.5c0 3.25 4 7 4 7s4-3.75 4-7c0-2.209-1.791-4-4-4Z" stroke={MUTED} strokeWidth="1.2" /><circle cx="7" cy="5.5" r="1.5" stroke={MUTED} strokeWidth="1.2" /></svg>
                Edmonton, AB, Canada
              </div>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Link href="/about"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                About
              </Link>
              <Link href="/security"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                Security
              </Link>
              <Link href="/guide/rcic-practice-automation"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                Practice automation guide
              </Link>
              <a href="https://linkedin.com/company/thelvon" target="_blank" rel="noopener"
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                {...linkHover(MUTED)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke={MUTED} strokeWidth="1.2" /><path d="M3.5 6v4.5M3.5 4.5V4" stroke={MUTED} strokeWidth="1.5" strokeLinecap="round" /><path d="M6.5 10.5V8.25C6.5 7.007 7.507 6 8.75 6s2.25 1.007 2.25 2.25v2.25" stroke={MUTED} strokeWidth="1.2" strokeLinecap="round" /></svg>
                LinkedIn
              </a>
              <a href="https://youtube.com/@thelvon" target="_blank" rel="noopener"
                style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                {...linkHover(MUTED)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="2" stroke={MUTED} strokeWidth="1.2" /><path d="M6 5.5l3.5 1.5L6 8.5V5.5Z" fill={MUTED} /></svg>
                YouTube
              </a>
            </div>
          </div>

          <div>
            <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.1em", color: MUTED, textTransform: "uppercase", marginBottom: 20 }}>Resources</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Link href="/solutions/express-entry-automation"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                Express Entry automation
              </Link>
              <Link href="/guide/rcic-practice-automation"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                Practice automation guide
              </Link>
              <Link href="/blog/automate-ircc-form-preparation"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                Automate IRCC form prep
              </Link>
              <Link href="/blog/reduce-ircc-application-refusals"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                Reduce IRCC refusals
              </Link>
              <Link href="/switching-from-legacy-immigration-software"
                style={{ fontSize: 13, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
                onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                Switching from legacy software
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bar" style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 0", display: "flex" }}>
          <p style={{ fontSize: 11, color: MUTED }}>© 2026 SHKUT Acquisition DNA Inc. (operating as Thelvon). All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <a href="/terms"
              style={{ fontSize: 11, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
              onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              Terms of Service
            </a>
            <a href="/terms#4"
              style={{ fontSize: 11, color: MUTED, textDecoration: "none", transition: "color 0.12s" }}
              onMouseEnter={e => (e.currentTarget.style.color = FG)} onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
