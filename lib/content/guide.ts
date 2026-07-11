export const GUIDE = {
  path: "/guide/rcic-practice-automation",
  titleTag: "The RCIC's Guide to Practice Automation",
  description:
    "A practical guide to automating document extraction, IRCC forms, and file management for Canadian immigration consulting practices.",
  label: "Pillar guide",
  h1: "The RCIC's guide to practice automation",
  datePublished: "2026-07-11",
  sections: [
    {
      heading: "What manual RCIC workflows typically look like",
      paragraphs: [
        "Most regulated immigration practices still run a familiar loop: clients upload or email documents, staff pull passport numbers and dates by hand, someone retypes those facts into IMM forms, and a consultant reviews the package while chasing whatever is still missing.",
        "VisaArc’s founder spent a year doing that work manually before building the product - the same re-entry pain RCICs describe across Express Entry, work permits, study permits, and permanent residence files. The details change by program; the labour does not.",
        "Status tracking often lives in inboxes, spreadsheets, or a patchwork of folders. When volume rises, completeness checks become heroic rather than systematic - which is how documentation gaps reach IRCC.",
      ],
    },
    {
      heading: "Where automation helps",
      paragraphs: [
        "Automation earns its keep on repetitive, structured work: reading identity documents, populating known IMM fields, flagging missing exhibits, and showing every active file in one place.",
        "Practices that automate those steps typically reclaim consultant and coordinator hours for counselling, strategy, and quality review - the work that actually requires a regulated professional.",
        "Canadian data residency and PIPEDA-aligned handling matter here too. Client files are sensitive; tooling should keep that data in Canada with access scoped to the practice team.",
      ],
    },
    {
      heading: "Where consultant judgment must stay final",
      paragraphs: [
        "No ethical automation product “does immigration law.” Eligibility calls, program strategy, how to present a complicated history, and whether a file is ready to submit remain the consultant’s responsibility under CICC rules.",
        "Frame software as preparation infrastructure: it drafts and detects; you decide. That framing protects clients and keeps the practice compliant with professional obligations.",
      ],
    },
    {
      heading: "A practical automation stack for RCIC practices",
      paragraphs: [
        "Start with document intake and extraction so facts enter the system once. Layer IMM form preparation on top of that data. Add missing-document detection as a pre-submit gate. Finish with a dashboard so the whole practice sees status without hunting through threads.",
        "Onboarding should map your real workflow - not force a generic template. White-glove setup (workflow audit, then features snapped to your practice) is how VisaArc approaches that requirement.",
      ],
    },
  ],
  useCases: [
    {
      href: "/solutions/express-entry-automation",
      title: "Express Entry automation",
      blurb: "CRS profile document extraction, IMM prep, and missing-file checks for RCIC practices.",
    },
    {
      href: "/solutions/work-permit-automation",
      title: "Work permit automation",
      blurb: "Employer letters, identity docs, and form prep with gaps flagged before submission.",
    },
    {
      href: "/solutions/study-permit-automation",
      title: "Study permit automation",
      blurb: "Student file extraction and IRCC form prep across intake cycles.",
    },
    {
      href: "/solutions/permanent-residence-automation",
      title: "Permanent residence automation",
      blurb: "PR package extraction, IMM prep, and multi-stage file tracking.",
    },
  ],
  blogLinks: [
    {
      href: "/blog/reduce-ircc-application-refusals",
      title: "How to reduce IRCC application refusals",
      blurb: "Documentation gaps, inconsistencies, and pre-submit checks.",
    },
    {
      href: "/blog/automate-ircc-form-preparation",
      title: "How to automate IRCC form preparation",
      blurb: "Extraction, auto-population, and validation - conceptually and in VisaArc.",
    },
  ],
} as const;
