import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import {
  ServiceDisciplineTemplate,
  MetricItem,
  DeliverableDetailed,
  FrictionVsSolution,
  DisciplineProcessStep,
  DisciplineFAQ,
  AdjacentDiscipline,
} from "@/components/services/ServiceDisciplineTemplate";
import { caseStudiesData } from "@/data/case-studies";

export const metadata: Metadata = constructMetadata({
  title: "Business Growth Strategy & GTM Advisory — Levexa",
  description:
    "Diagnose commercial bottlenecks, clarify market positioning, and architect high-velocity GTM playbooks with Levexa's Growth Strategy advisory.",
  path: "/services/strategy",
});

export default function StrategyServicePage() {
  const metrics: MetricItem[] = [
    {
      label: "Customer Acquisition Cost",
      value: "-38%",
      detail:
        "Average reduction in blended CAC by eliminating non-converting segments and refocusing resources on high-intent accounts.",
    },
    {
      label: "Gross Margin Expansion",
      value: "+14%",
      detail:
        "Margin lift achieved through value-based pricing restructuring and eliminating arbitrary sales discounting.",
    },
    {
      label: "Pipeline Deal Velocity",
      value: "2.4x",
      detail:
        "Acceleration in deal progression from initial qualification to executed contract across targeted enterprise tiers.",
    },
  ];

  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "Commercial Diagnostic & Competitor Intelligence",
      description:
        "A rigorous deep-dive into your historical sales cycles, customer win/loss dynamics, and competitive positioning matrix.",
      timeline: "Weeks 1–3",
      items: [
        "TAM, SAM & High-Yield SOM Opportunity Mapping",
        "Win/Loss Analysis with Key Decision-Makers",
        "Competitive Moat & Pricing Strategy Matrix",
        "Full Commercial Revenue Friction Audit",
      ],
    },
    {
      title: "Defensible Brand Positioning & ICP Rubric",
      description:
        "Unambiguous differentiation that elevates your company out of price-based commoditization into category leadership.",
      timeline: "Weeks 4–6",
      items: [
        "Category Narrative & Executive Value Proposition",
        "Tier-1 Ideal Customer Profile (ICP) Scoring Matrix",
        "Key Stakeholder Motivation & Pain-Point Archetypes",
        "Positioning Alignment Guide for Marketing & Sales",
      ],
    },
    {
      title: "Enterprise Go-To-Market (GTM) Playbook",
      description:
        "The step-by-step commercial architecture that synchronizes demand generation channels with qualified sales cycles.",
      timeline: "Weeks 7–9",
      items: [
        "Inbound vs. Outbound Channel Prioritization Framework",
        "Value-Based Pricing Architecture & Tiering Logic",
        "Customer Journey Map from Awareness to Expansion",
        "Channel Unit Economics & Resource Allocation Plan",
      ],
    },
    {
      title: "Executive KPI Command Center & Governance",
      description:
        "The operational scorecard that aligns founder vision with real-time commercial execution and accountability.",
      timeline: "Weeks 10–12",
      items: [
        "Executive Revenue Cockpit & Leading Indicator Dashboard",
        "Weekly & Monthly Commercial Review Cadence Protocols",
        "Departmental SLA (Service Level Agreement) Definitions",
        "Annual Strategic Growth Milestone Roadmap",
      ],
    },
  ];

  const frictionVsSolution: FrictionVsSolution[] = [
    {
      friction:
        "Ambiguous value proposition forces sales reps into pricing wars against generic commodity competitors.",
      solution:
        "Defensible positioning establishing clear category authority and justifying premium contract value.",
    },
    {
      friction:
        "Disjointed executive priorities cause marketing to chase vanity clicks while sales starves for qualified opportunities.",
      solution:
        "Unified revenue architecture ensuring marketing pipeline promises directly align with sales closing criteria.",
    },
    {
      friction:
        "Arbitrary contract discounting by sales reps eroding gross margins as transaction volume expands.",
      solution:
        "Codified value-based pricing tiers that demonstrate verifiable client ROI and eliminate discount dependency.",
    },
    {
      friction:
        "Fragmented channel experimentation with zero visibility into which customer segments produce the highest LTV.",
      solution:
        "Rigorous unit economic mapping identifying the top 20% of high-intent accounts driving 80% of enterprise margin.",
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
      number: "02 // DEMAND GENERATION",
      title: "Branding & Marketing",
      href: "/services/marketing",
      tagline:
        "Transform strategic positioning into high-intent inbound demand and full-funnel ad performance.",
    },
    {
      number: "03 // REVENUE ENGINE",
      title: "Sales & Conversion",
      href: "/services/sales",
      tagline:
        "Equip sales teams with scripts, objection frameworks, and CRM pipelines that close deals faster.",
    },
    {
      number: "04 // DIGITAL SYSTEMS",
      title: "Technology & Automation",
      href: "/services/technology",
      tagline:
        "Scale operations with custom web architecture, AI workflow automation, and unified data pipelines.",
    },
  ];

  const featuredCaseStudy = caseStudiesData[0]; // B2B SaaS GTM Overhaul

  return (
    <ServiceDisciplineTemplate
      pillarNumber="01"
      categoryTag="COMMERCIAL ARCHITECTURE"
      titleLine1="Market Differentiation &"
      titleHighlight="Business Growth Strategy."
      subtitle="Diagnosing revenue friction, defining defensible positioning, architecting enterprise GTM playbooks, and aligning executive leadership around compounding unit economics."
      image="/images/pillars/01-growth-strategy.jpg"
      imageAlt="Levexa Growth & Strategy Architecture"
      overviewSummary="Market research, commercial positioning, GTM architecture, and KPI planning."
      metrics={metrics}
      deliverablesDetailed={deliverablesDetailed}
      frictionVsSolution={frictionVsSolution}
      roadmap={roadmap}
      featuredCaseStudy={featuredCaseStudy}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to architect your"
      ctaHighlight="commercial growth strategy?"
      ctaSubtitle="Schedule an executive discovery session to diagnose revenue bottlenecks and map your next phase of scale."
    />
  );
}
