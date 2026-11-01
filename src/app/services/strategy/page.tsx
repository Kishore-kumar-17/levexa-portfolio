import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import {
  ServiceDisciplineTemplate,
  DeliverableDetailed,
  DisciplineProcessStep,
  DisciplineFAQ,
  AdjacentDiscipline,
} from "@/components/services/ServiceDisciplineTemplate";

export const metadata: Metadata = constructMetadata({
  title: "Growth & Strategy Services — Levexa",
  description:
    "Diagnose commercial bottlenecks, clarify market positioning, and architect high-velocity GTM playbooks with Levexa's Growth Strategy advisory.",
  path: "/services/strategy",
});

export default function StrategyServicePage() {
  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "Commercial Diagnostic & Competitor Intelligence",
      description:
        "A rigorous deep-dive into your historical sales cycles, customer win/loss dynamics, and competitive positioning matrix.",
    },
    {
      title: "Defensible Brand Positioning & ICP Rubric",
      description:
        "Unambiguous differentiation that elevates your company out of price-based commoditization into category leadership.",
    },
    {
      title: "Enterprise Go-To-Market (GTM) Playbook",
      description:
        "The step-by-step commercial architecture that synchronizes demand generation channels with qualified sales cycles.",
    },
    {
      title: "Executive KPI Command Center & Governance",
      description:
        "The operational scorecard that aligns founder vision with real-time commercial execution and accountability.",
    },
  ];

  const roadmap: DisciplineProcessStep[] = [
    {
      week: "Weeks 1–3",
      phase: "DIAGNOSTIC AUDIT",
      title: "Commercial Friction Analysis",
      deliverable: "Comprehensive Revenue Audit & Win/Loss Report",
    },
    {
      week: "Weeks 4–6",
      phase: "POSITIONING REFRAME",
      title: "Strategic Differentiation",
      deliverable: "Executive Narrative Deck & ICP Rubric",
    },
    {
      week: "Weeks 7–9",
      phase: "GTM ARCHITECTURE",
      title: "Commercial Engine Design",
      deliverable: "Go-to-Market Playbook & Pricing Matrix",
    },
    {
      week: "Weeks 10–12",
      phase: "EXECUTION CADENCE",
      title: "Operational Enablement",
      deliverable: "KPI Command Center & Review Governance",
    },
  ];

  const faqs: DisciplineFAQ[] = [
    {
      question: "How long does a strategic growth advisory engagement take?",
      answer:
        "Our foundational strategy engagement typically spans 10 to 12 weeks. During this period, we conduct in-depth diagnostic discovery, reframe market positioning, model unit economics, and codify your go-to-market playbook. Following rollout, we often maintain quarterly advisory governance to ensure sustained execution.",
    },
    {
      question: "How do you collaborate with our existing leadership team?",
      answer:
        "We act as an executive partner alongside founders, CEOs, CMOs, and heads of revenue. Rather than working in isolation, we conduct structured discovery workshops, sit in on sales calls, and embed directly into weekly commercial cadences to ensure complete alignment and buy-in.",
    },
    {
      question: "What makes Levexa different from traditional management consultants?",
      answer:
        "Traditional consulting firms produce theoretical 200-slide presentations that end up gathering dust on Google Drive. Levexa builds living, operational commercial infrastructure: codified ICP rubrics, pricing calculators, sales enablement playbooks, and clear cross-team SLAs that produce measurable revenue.",
    },
    {
      question: "At what revenue stage is a business ready for this engagement?",
      answer:
        "Our strategy advisory is best suited for established businesses generating between $1M and $50M in annual revenue that have hit a growth plateau, are preparing for institutional capital, or are transitioning from founder-led sales into enterprise-grade commercial execution.",
    },
  ];

  const adjacentDisciplines: AdjacentDiscipline[] = [
    {
      number: "02",
      title: "Branding & Marketing",
      href: "/services/marketing",
      tagline:
        "Transform strategic positioning into high-intent inbound demand and full-funnel ad performance.",
    },
    {
      number: "03",
      title: "Sales & Conversion",
      href: "/services/sales",
      tagline:
        "Equip sales teams with scripts, objection frameworks, and CRM pipelines that close deals faster.",
    },
    {
      number: "04",
      title: "Technology & Automation",
      href: "/services/technology",
      tagline:
        "Scale operations with custom web architecture, AI workflow automation, and unified data pipelines.",
    },
  ];

  return (
    <ServiceDisciplineTemplate
      pillarNumber="01"
      categoryTag="COMMERCIAL ARCHITECTURE"
      titleLine1="Growth &"
      titleHighlight="Strategy"
      subtitle="Diagnosing revenue friction, defining defensible positioning, architecting enterprise GTM playbooks, and aligning executive leadership around compounding unit economics."
      image="/images/pillars/01-growth-strategy.jpg"
      imageAlt="Growth strategy planning with charts and notes"
      deliverablesDetailed={deliverablesDetailed}
      roadmap={roadmap}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to architect your"
      ctaHighlight="commercial growth strategy?"
      ctaSubtitle="Schedule an executive discovery session to diagnose revenue bottlenecks and map your next phase of scale."
    />
  );
}
