export const SWITCHING = {
  path: "/switching-from-legacy-immigration-software",
  titleTag: "Switching from Legacy Immigration Software",
  description:
    "Signs it may be time to switch immigration practice software - slow IRCC form updates, incomplete field transfer, weak multilingual support, and tools not built for RCIC workflows.",
  label: "Switching",
  h1: "Switching from legacy immigration software",
  intro: [
    "Many RCIC practices already pay for software that fills forms - and still spend hours fixing gaps the tool creates. Switching is hard when a past migration went badly, or when the current stack is \"good enough\" until IRCC changes a form again.",
    "This page is not a hit list of named competitors. It is a practical checklist of friction that shows up again and again when firms outgrow legacy or general-purpose tools - and how VisaArc is built to address those gaps without forcing your practice into a fixed template.",
  ],
  signs: [
    {
      title: "IRCC form changes take too long to land in your tool",
      body: "When form libraries lag policy or form updates, staff fall back to manual work at the worst possible moment - right after a change. VisaArc treats timely IRCC-aligned prep as core to the workflow, not an afterthought.",
    },
    {
      title: "Data does not carry cleanly between related forms",
      body: "Re-checking the same passport number, address, or employment history across linked IMM forms burns time and creates inconsistency risk. Extraction-once, review-once is the loop VisaArc is built around.",
    },
    {
      title: "Accented characters and foreign names break autofill",
      body: "Renewals and multilingual client bases expose tools that were never designed for real immigration paperwork. Your practice should not need a workaround for every accented character.",
    },
    {
      title: "You are paying for general legal software that ignores immigration realities",
      body: "Broad practice platforms can be expensive without solving IRCC-specific intake, missing-document checks, or Canadian data residency expectations. Immigration-first tooling should lead with those needs.",
    },
    {
      title: "Onboarding last time meant ripping up your workflow",
      body: "A failed CRM or form-tool migration makes firms cling to manual processes. VisaArc onboarding starts with a workflow audit - mapping how your firm already works - then configures the platform around that process, with a direct line to the people who set it up.",
    },
  ],
  differentiators: [
    "Canadian data residency on AWS ca-central-1, PIPEDA-compliant by design",
    "Practice-first onboarding - features snapped to your firm, not a generic package",
    "AI that suggests and flags for review - never auto-submits - with an audit trail of AI vs consultant-verified fields",
    "Flexible intake for WhatsApp, email, in-person, and handwritten documents - no client portal required",
    "Application-type coverage scoped during onboarding to what you actually process",
  ],
} as const;
