export interface CompareRow {
  criterion: string;
  visaarc: string;
  competitor: string;
}

export interface ComparePageContent {
  slug: string;
  path: string;
  titleTag: string;
  description: string;
  label: string;
  h1: string;
  competitorName: string;
  intro: string[];
  rows: CompareRow[];
  chooseVisaArc: string[];
  chooseCompetitor: string[];
  disclaimer: string;
}

export const COMPARE_PAGES: ComparePageContent[] = [
  {
    slug: "visaarc-vs-visaflo",
    path: "/compare/visaarc-vs-visaflo",
    titleTag: "VisaArc vs. VisaFlo",
    description:
      "Comparing VisaArc and VisaFlo for RCIC practice automation - data residency, onboarding model, and workflow scope.",
    label: "Comparison",
    h1: "VisaArc vs. VisaFlo",
    competitorName: "VisaFlo",
    intro: [
      "Both VisaArc and VisaFlo serve Canadian immigration practices looking to automate repetitive casework. This page is a neutral orientation for RCICs evaluating which onboarding model and workflow fit their firm - not a claim that one platform is universally better.",
      "Feature sets and commercial terms change. Verify anything material about a competitor directly on their site before you decide.",
    ],
    rows: [
      {
        criterion: "Primary focus",
        visaarc: "Practice workflow automation with white-glove setup scoped to how your RCIC firm already works",
        competitor:
          "AI-powered intake, document collection, IMM PDF autofill, and IRCC portal autofill for RCICs and law firms (per VisaFlo’s public positioning)",
      },
      {
        criterion: "Data residency",
        visaarc: "Client data stored on AWS ca-central-1 in Canada; PIPEDA-compliant by design",
        competitor: "Confirm current hosting and residency terms directly with VisaFlo",
      },
      {
        criterion: "Onboarding model",
        visaarc: "Workflow audit + dedicated setup configured to your practice",
        competitor:
          "Public docs describe demo-then-invite access; older materials mentioned self-serve trials - confirm current process with VisaFlo",
      },
      {
        criterion: "Consultant judgment",
        visaarc: "Automation prepares work for review; regulated consultants retain final decisions",
        competitor: "Positioned as accelerating prep with consultant review before submission",
      },
    ],
    chooseVisaArc: [
      "You want Canadian-only infrastructure called out clearly (AWS ca-central-1) as a hard requirement",
      "You prefer white-glove onboarding that maps your existing workflow before features are turned on",
      "You want a relationship-style setup rather than configuring a generic toolkit alone",
    ],
    chooseCompetitor: [
      "You specifically need IRCC online portal autofill as a primary workflow (VisaFlo markets this publicly)",
      "You want a broader CRM/intake/pricing-tier product surface and are comfortable verifying current plans with their team",
      "A demo-and-invite commercial model already fits how your firm evaluates software",
    ],
    disclaimer:
      "Competitor details above are based on publicly available VisaFlo materials at the time of writing and may change. VisaArc does not guarantee the accuracy of third-party product claims. Always verify directly before purchasing.",
  },
  {
    slug: "visaarc-vs-caseeasy",
    path: "/compare/visaarc-vs-caseeasy",
    titleTag: "VisaArc vs. CaseEasy 360",
    description:
      "Comparing VisaArc and CaseEasy 360 - data residency, setup model, and who each platform is built for.",
    label: "Comparison",
    h1: "VisaArc vs. CaseEasy 360",
    competitorName: "CaseEasy 360",
    intro: [
      "VisaArc and CaseEasy 360 both help Canadian immigration practitioners reduce manual form and casework. Use this comparison to understand positioning and fit - not as a scorecard of every feature.",
      "CaseEasy has operated since 2017 as an all-in-one practice platform (retainers, questionnaires, form autofill, and more). Confirm any scale or speed claims on CaseEasy’s current site before citing them in a buying decision.",
    ],
    rows: [
      {
        criterion: "Primary focus",
        visaarc: "AI document extraction, IRCC form prep, missing-document detection, and workflow-first onboarding for RCICs",
        competitor:
          "All-in-one case management for immigration law practitioners - questionnaires, retainers, document checklists, and IRCC PDF autofill (per CaseEasy’s public positioning)",
      },
      {
        criterion: "Data residency",
        visaarc: "AWS ca-central-1 in Canada; PIPEDA-compliant by design",
        competitor: "Confirm current hosting and residency terms directly with CaseEasy",
      },
      {
        criterion: "Setup model",
        visaarc: "White-glove workflow audit, then features snapped to your practice",
        competitor: "Self-serve / trial-oriented evaluation common for established case platforms - confirm current onboarding with CaseEasy",
      },
      {
        criterion: "Best fit framing",
        visaarc: "Practices that want automation configured around their existing RCIC workflow",
        competitor: "Firms looking for a broad, mature case-management suite with questionnaire-driven autofill",
      },
    ],
    chooseVisaArc: [
      "Canadian data residency on AWS ca-central-1 is non-negotiable and you want it stated upfront",
      "You want onboarding that starts with how your practice already runs, not a generic tool tour",
      "You care most about document extraction → form prep → missing-file detection as the core loop",
    ],
    chooseCompetitor: [
      "You need a long-standing all-in-one case platform covering retainers, portals, and questionnaires in one suite",
      "Your firm already standardizes on questionnaire-driven IRCC PDF autofill workflows",
      "You prefer evaluating an established product with extensive help-center documentation",
    ],
    disclaimer:
      "Competitor details above are based on publicly available CaseEasy materials at the time of writing and may change. VisaArc does not guarantee the accuracy of third-party product claims. Always verify directly before purchasing.",
  },
];

export function getCompareBySlug(slug: string) {
  return COMPARE_PAGES.find((page) => page.slug === slug);
}
