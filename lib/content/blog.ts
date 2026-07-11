export interface BlogPost {
  slug: string;
  path: string;
  titleTag: string;
  description: string;
  label: string;
  h1: string;
  datePublished: string;
  sections: { heading: string; paragraphs: string[] }[];
  closing: string;
  related: { href: string; label: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-a-rcic",
    path: "/blog/what-is-a-rcic",
    titleTag: "What Is a RCIC? Regulated Canadian Immigration Consultants Explained",
    description:
      "A plain-language explainer on what a Regulated Canadian Immigration Consultant (RCIC) is, what CICC regulation means, and how RCICs differ from lawyers.",
    label: "Guide",
    h1: "What is a RCIC?",
    datePublished: "2026-07-11",
    sections: [
      {
        heading: "The short definition",
        paragraphs: [
          "A Regulated Canadian Immigration Consultant (RCIC) is a licensed professional authorized to provide Canadian immigration advice and representation for a fee. RCICs help individuals and families navigate applications to Immigration, Refugees and Citizenship Canada (IRCC) - from temporary status to permanent residence pathways.",
          "If someone is charging for immigration advice in Canada, they generally must be authorized. RCICs are one of the main authorized categories alongside lawyers and certain Quebec notaries, depending on the work involved.",
        ],
      },
      {
        heading: "What CICC regulation means",
        paragraphs: [
          "RCICs are regulated by the College of Immigration and Citizenship Consultants (CICC). Licensing, professional standards, and complaints processes sit with the College - similar in spirit to how other professions are overseen by a regulatory body.",
          "In practice, that means clients should be able to verify that their consultant is in good standing, and consultants must follow rules around competence, confidentiality, recordkeeping, and ethical conduct. Software used in a practice should support those obligations, not cut across them.",
        ],
      },
      {
        heading: "RCIC vs. immigration lawyer",
        paragraphs: [
          "Immigration lawyers are members of a provincial or territorial law society. They can provide immigration advice and also handle legal matters that fall under the practice of law - for example, certain litigation or solicitor work that sits outside a consultant’s authorized scope.",
          "RCICs specialize in immigration consulting within the scope authorized by CICC. Many clients work with an RCIC for application preparation and representation before IRCC; others work with a lawyer when the matter requires legal services beyond that scope. The right professional depends on the file - not a universal ranking.",
        ],
      },
      {
        heading: "What RCICs are authorized to do",
        paragraphs: [
          "Broadly, licensed RCICs may advise on immigration options, prepare and submit applications, communicate with IRCC on a client’s behalf, and represent clients in matters within their authorized scope. Exact boundaries are set by legislation and College rules - this article is educational, not legal advice.",
          "Day to day, that work is document- and form-intensive: collecting evidence, completing IMM forms, checking completeness, and tracking status. Automation tools can reduce the repetitive parts of that labour while leaving professional judgment with the regulated consultant.",
        ],
      },
    ],
    closing:
      "If you are an RCIC looking to spend less time on document re-entry and form prep, VisaArc is practice automation built for regulated Canadian immigration consultants. Soft next step: claim a spot and walk through your workflow with the team.",
    related: [
      { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
      { href: "/blog/reduce-ircc-application-refusals", label: "How to reduce IRCC refusals" },
      { href: "/about", label: "About VisaArc" },
    ],
  },
  {
    slug: "reduce-ircc-application-refusals",
    path: "/blog/reduce-ircc-application-refusals",
    titleTag: "How to Reduce IRCC Application Refusals",
    description:
      "Common causes of IRCC refusals tied to missing or inconsistent documentation, and how to catch them before submission.",
    label: "Practice tips",
    h1: "How to reduce IRCC application refusals",
    datePublished: "2026-07-11",
    sections: [
      {
        heading: "Documentation gaps are a common refusal path",
        paragraphs: [
          "Not every refusal is about eligibility. Many applications fail - or stall - because something required was missing, inconsistent across forms, or not explained clearly enough for the officer reviewing the file.",
          "For busy RCIC practices, the risk rises with volume: the more files moving through email and shared folders, the easier it is for a passport page, financial proof, or employer letter to stay “almost ready” until it is too late.",
        ],
      },
      {
        heading: "Inconsistencies across forms and evidence",
        paragraphs: [
          "Names, dates of birth, travel history, and employment dates must match across IMM forms and supporting documents. Manual re-entry is a frequent source of small mismatches that create larger credibility problems.",
          "A practical habit: treat every retyped field as a risk. Prefer extracting once from source documents and reviewing the populated forms, rather than typing the same passport number into five places by hand.",
        ],
      },
      {
        heading: "Catch gaps before submission",
        paragraphs: [
          "Missing-document detection is the operational counterpart to a good checklist. Whether you use a spreadsheet, a case platform, or automation software, the goal is the same: know what is incomplete while the client can still supply it.",
          "Build a pre-submit gate: no file leaves the practice until identity, program-specific evidence, and form completeness have been checked by a human - ideally with tooling that surfaces gaps automatically.",
        ],
      },
      {
        heading: "Where VisaArc fits",
        paragraphs: [
          "VisaArc automates document extraction, IRCC form preparation, and missing-document flags so practices see gaps earlier in the workflow. It does not decide eligibility or replace consultant review - it reduces the chance that a refuseable paperwork miss survives to submission day.",
        ],
      },
    ],
    closing:
      "Want missing-document detection wired into how your practice already works? Claim your spot and we will scope the setup around your real file types.",
    related: [
      { href: "/blog/automate-ircc-form-preparation", label: "Automate IRCC form preparation" },
      { href: "/solutions/express-entry-automation", label: "Express Entry automation" },
      { href: "/security", label: "Security & PIPEDA" },
    ],
  },
  {
    slug: "automate-ircc-form-preparation",
    path: "/blog/automate-ircc-form-preparation",
    titleTag: "How to Automate IRCC Form Preparation",
    description:
      "A look at what IRCC form automation actually does - document data extraction, field auto-population, and validation against IRCC requirements.",
    label: "Automation",
    h1: "How to automate IRCC form preparation",
    datePublished: "2026-07-11",
    sections: [
      {
        heading: "What “form automation” actually means",
        paragraphs: [
          "Automating IRCC form preparation is not magic submission. It is a pipeline: read data from client documents, map that data into IMM (and related) fields, then present a draft for a regulated professional to review.",
          "The value is time and consistency. The risk is treating automation as a substitute for judgement. Good systems make the draft; consultants remain accountable for what goes to IRCC.",
        ],
      },
      {
        heading: "Step 1 - Document data extraction",
        paragraphs: [
          "Source documents (passports, letters, certificates) contain the facts forms need. Extraction pulls structured fields - names, dates, document numbers - so staff are not copying from a PDF into a form by hand.",
          "Quality still matters: OCR and AI can misread. Automation should make review easier, not remove review.",
        ],
      },
      {
        heading: "Step 2 - Field auto-population",
        paragraphs: [
          "Extracted values are mapped into IRCC form fields. That mapping has to respect how IMM forms are structured, including family members and repeating sections where practices often lose the most time.",
          "The output should be a reviewable package: populated fields the consultant can correct before anything is finalized.",
        ],
      },
      {
        heading: "Step 3 - Checks against requirements",
        paragraphs: [
          "Beyond filling boxes, useful automation flags missing documents and incomplete sections relative to the application type. That is where refusals tied to paperwork gaps get intercepted.",
          "VisaArc implements this loop for RCIC practices: extraction → IMM form prep → missing-document detection → dashboard tracking, with white-glove onboarding so the pipeline matches how your firm already works.",
        ],
      },
    ],
    closing:
      "If IRCC form prep is the bottleneck in your practice, claim your spot - we configure VisaArc around your workflow, not a generic demo script.",
    related: [
      { href: "/guide/rcic-practice-automation", label: "RCIC practice automation guide" },
      { href: "/blog/reduce-ircc-application-refusals", label: "Reduce IRCC refusals" },
      { href: "/solutions/work-permit-automation", label: "Work permit automation" },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
