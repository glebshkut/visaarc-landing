export interface RelatedLink {
  href: string;
  label: string;
}

export interface SolutionPageContent {
  slug: string;
  path: string;
  titleTag: string;
  description: string;
  label: string;
  h1: string;
  intro: string[];
  howItWorks: { title: string; body: string }[];
  consultantKeeps: string[];
  documentNotes: string[];
  related: RelatedLink[];
}

export const SOLUTION_PAGES: SolutionPageContent[] = [
  {
    slug: "express-entry-automation",
    path: "/solutions/express-entry-automation",
    titleTag: "Express Entry Automation for RCICs",
    description:
      "Automate Express Entry document extraction, IMM form prep, and missing-file checks for every profile you manage. Built for Canadian RCICs.",
    label: "Express Entry",
    h1: "Express Entry automation for RCIC practices",
    intro: [
      "Express Entry files demand relentless document collection - passports, language results, education credentials, work history - then the same details get retyped into IMM forms and tracked across profile updates.",
      "For RCIC practices managing multiple CRS profiles at once, that manual loop is where hours disappear and small inconsistencies slip through before submission.",
    ],
    howItWorks: [
      {
        title: "Document extraction",
        body: "VisaArc pulls names, dates, passport numbers, and other structured fields from uploaded client documents so your team spends less time hunting through PDFs.",
      },
      {
        title: "IRCC field population",
        body: "Extracted data feeds IMM form preparation against IRCC field requirements, so profiles move from intake to review-ready faster.",
      },
      {
        title: "Missing-document flags",
        body: "Gaps in the Express Entry file are flagged before you submit - catching incomplete packages while there is still time to fix them.",
      },
      {
        title: "Dashboard status",
        body: "Every active Express Entry profile stays visible in one practice dashboard: outstanding tasks, file status, and what still needs a consultant review.",
      },
    ],
    consultantKeeps: [
      "Eligibility judgment and strategy for each client",
      "Review of auto-prepared forms before any IRCC submission",
      "Advice on CRS improvements, NOC selection, and program choice",
      "Final responsibility for accuracy and professional conduct under CICC rules",
    ],
    documentNotes: [
      "Identity and travel documents (e.g. passports)",
      "Language test results and education credentials",
      "Employment letters and work history evidence",
      "Supporting forms and profile-related IMM paperwork",
    ],
    related: [
      { href: "/solutions/work-permit-automation", label: "Work permit automation" },
      { href: "/solutions/study-permit-automation", label: "Study permit automation" },
      { href: "/solutions/permanent-residence-automation", label: "Permanent residence automation" },
      { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
    ],
  },
  {
    slug: "work-permit-automation",
    path: "/solutions/work-permit-automation",
    titleTag: "Work Permit Automation for Immigration Consultants",
    description:
      "Automate work permit document extraction and IMM form preparation. Missing-document detection catches gaps before IRCC submission.",
    label: "Work Permits",
    h1: "Work permit automation for Canadian immigration consultants",
    intro: [
      "Work permit files stack employer letters, identity documents, and application forms - then the same client details get entered again for every dependent or extension in the practice.",
      "VisaArc helps RCICs cut that re-entry loop with document extraction, IMM form prep, and missing-file checks scoped to work permit workflows.",
    ],
    howItWorks: [
      {
        title: "Document extraction",
        body: "Upload employer letters, passports, and supporting files - VisaArc extracts structured client and employment details for the application package.",
      },
      {
        title: "IMM form preparation",
        body: "Fields are prepared for IRCC work permit forms so your team reviews a populated draft instead of starting from a blank IMM PDF.",
      },
      {
        title: "Missing-document detection",
        body: "Common gaps - incomplete employer documentation, missing identity pages, unsigned letters - are flagged before submission.",
      },
      {
        title: "File tracking",
        body: "Active work permit cases stay on the practice dashboard with clear status, so nothing stalls in email threads or shared drives.",
      },
    ],
    consultantKeeps: [
      "LMIA-related strategy and employer advice where applicable",
      "Interpretation of offer letters and job duties against program rules",
      "Final review of every form and supporting exhibit",
      "Client counselling and CICC-regulated professional judgment",
    ],
    documentNotes: [
      "Passports and identity documents",
      "Employer offer or support letters",
      "LMIA-adjacent supporting materials when part of the file",
      "IMM work permit forms and dependent applications",
    ],
    related: [
      { href: "/solutions/express-entry-automation", label: "Express Entry automation" },
      { href: "/solutions/study-permit-automation", label: "Study permit automation" },
      { href: "/solutions/permanent-residence-automation", label: "Permanent residence automation" },
      { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
    ],
  },
  {
    slug: "study-permit-automation",
    path: "/solutions/study-permit-automation",
    titleTag: "Study Permit Automation for RCICs",
    description:
      "Automate study permit document extraction and IRCC form prep for every student file your practice manages.",
    label: "Study Permits",
    h1: "Study permit automation for RCIC practices",
    intro: [
      "Study permit practices juggle LOAs, financial proofs, identity documents, and family applications - often for dozens of students in the same intake cycle.",
      "Manual extraction and form re-entry slow every file. VisaArc automates the repetitive layer so consultants focus on counselling and completeness review.",
    ],
    howItWorks: [
      {
        title: "Document extraction",
        body: "Letters of acceptance, passports, and financial documents feed structured data into the student file without line-by-line retyping.",
      },
      {
        title: "IRCC form prep",
        body: "Study permit IMM fields are prepared from extracted data so your team reviews consistency across the primary applicant and any accompanying family members.",
      },
      {
        title: "Missing-file checks",
        body: "Incomplete financial evidence, missing LOA pages, or identity gaps are flagged before the package goes to IRCC.",
      },
      {
        title: "Practice visibility",
        body: "Track every active student file in one dashboard - status, outstanding documents, and who owns the next review step.",
      },
    ],
    consultantKeeps: [
      "Study plan counselling and school/program advice",
      "Assessment of financial sufficiency and genuine intent",
      "Review of every auto-prepared form before submission",
      "Professional responsibility under CICC for advice given",
    ],
    documentNotes: [
      "Letters of acceptance and school documentation",
      "Passports and biographic pages",
      "Financial proofs and supporting statements",
      "Study permit IMM forms and family member applications",
    ],
    related: [
      { href: "/solutions/express-entry-automation", label: "Express Entry automation" },
      { href: "/solutions/work-permit-automation", label: "Work permit automation" },
      { href: "/solutions/permanent-residence-automation", label: "Permanent residence automation" },
      { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
    ],
  },
  {
    slug: "permanent-residence-automation",
    path: "/solutions/permanent-residence-automation",
    titleTag: "Permanent Residence Application Software",
    description:
      "Automate PR application document extraction, IMM form prep, and file tracking. Built for regulated Canadian immigration consultants.",
    label: "Permanent Residence",
    h1: "Permanent residence automation for RCICs",
    intro: [
      "Permanent residence applications are document-heavy and form-dense - identity, civil status, employment, and dependent files all need to stay consistent across a long IMM package.",
      "VisaArc gives RCIC practices application software that automates extraction, form prep, and tracking so PR files move with fewer manual bottlenecks.",
    ],
    howItWorks: [
      {
        title: "Document extraction",
        body: "Pull structured data from civil documents, passports, and supporting evidence into the PR file instead of re-keying every field.",
      },
      {
        title: "IMM form preparation",
        body: "Populate PR-related IMM forms from extracted client data, then review against IRCC requirements before anything is submitted.",
      },
      {
        title: "Missing document detection",
        body: "Flag incomplete schedules, missing dependent documents, or gaps that commonly delay or weaken a PR package.",
      },
      {
        title: "Application tracking",
        body: "Keep multi-stage PR files visible across the practice - who is waiting on documents, who is ready for consultant review, and what is submitted.",
      },
    ],
    consultantKeeps: [
      "Program selection and eligibility strategy",
      "Legal and factual review of the full application narrative",
      "Final sign-off on forms and supporting exhibits",
      "Client advice and regulated professional accountability",
    ],
    documentNotes: [
      "Identity and civil status documents",
      "Employment and residence history evidence",
      "Dependent and family member documentation",
      "PR IMM forms and supporting schedules",
    ],
    related: [
      { href: "/solutions/express-entry-automation", label: "Express Entry automation" },
      { href: "/solutions/work-permit-automation", label: "Work permit automation" },
      { href: "/solutions/study-permit-automation", label: "Study permit automation" },
      { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
    ],
  },
];

export function getSolutionBySlug(slug: string) {
  return SOLUTION_PAGES.find((page) => page.slug === slug);
}
