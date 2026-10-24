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
  title: "Sales Enablement & Pipeline Conversion — Levexa",
  description:
    "Standardize sales execution, accelerate deal velocity, and eliminate rep discounting with Levexa's commercial Sales & Conversion architecture.",
  path: "/services/sales",
});

export default function SalesServicePage() {
  const metrics: MetricItem[] = [
    {
      label: "Opportunity Win Rate",
      value: "+34%",
      detail:
        "Lift in proposal-to-close conversion rate achieved through structured qualification and consultative objection handling.",
    },
    {
      label: "Deal Cycle Compression",
      value: "-42 Days",
      detail:
        "Reduction in average sales cycle duration through structured mutual action plans and multi-stakeholder consensus mapping.",
    },
    {
      label: "Average Contract Value",
      value: "+28%",
      detail:
        "Expansion in ACV driven by tiered value packaging, multi-year incentives, and eliminating unapproved rep discounting.",
    },
  ];

  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "Commercial Sales Strategy & Negotiation Playbook",
      description:
        "The definitive operating playbook that equips every rep with high-conviction objection scripts and closing rubrics.",
      timeline: "Weeks 1–3",
      items: [
        "End-to-End Discovery Call Script & Question Architecture",
        "Top-10 Objection Handling Rubric (Price, Timing, Competitor)",
        "Procurement Negotiation & Concession Frameworks",
        "Executive Mutual Action Plan (MAP) Templates",
      ],
    },
    {
      title: "Live Sales Coaching & Call Quality Auditing",
      description:
        "Direct coaching clinics and deal teardowns that turn average performers into consistent quota-carrying closers.",
      timeline: "Weeks 4–6",
      items: [
        "Weekly Recorded Call Audits & Rubric Scoring",
        "Live Interactive Role-Play Clinics with Objection Scenarios",
        "Multi-Threaded Stakeholder Selling Methodology",
        "Pipeline Hygiene Coaching for Account Executives",
      ],
    },
    {
      title: "Lead-Management Systems & CRM Pipeline Setup",
      description:
        "Rock-solid CRM architecture (HubSpot, Salesforce) that enforces pipeline hygiene and provides accurate revenue forecasting.",
      timeline: "Weeks 7–8",
      items: [
        "Deal Stage Exit Criteria & Automated Field Validations",
        "Lead Routing Protocols & Speed-to-Lead Workflows",
        "Executive Pipeline Dashboard & Stage Velocity Metrics",
        "Win/Loss Tagging & Lost Deal Retargeting Sequences",
      ],
    },
    {
      title: "Sales SOPs & Conversion Rate Optimization (CRO)",
      description:
        "Standardized operating procedures covering the entire customer lifecycle from first demo to post-sale handoff.",
      timeline: "Weeks 9–10",
      items: [
        "Sales-to-Customer Success Handoff SOP Documentation",
        "Proposal & Pitch Deck Template Redesign",
        "Automated Meeting Follow-Up Sequences & Collateral Packs",
        "Rep Compensation & Commission Incentive Modeling",
      ],
    },
  ];

  const frictionVsSolution: FrictionVsSolution[] = [
    {
      friction:
        "Revenue fluctuates wildly based entirely on whether your single star rainmaker has a good or bad quarter.",
      solution:
        "Codified sales playbooks and qualification rubrics that systematically level up the entire middle 70% of your sales team.",
    },
    {
      friction:
        "Promising deals sit dormant in pipeline limbo for 60+ days without clear next steps or executive urgency.",
      solution:
        "Mutual Action Plans (MAPs) signed with buyer champions that establish concrete milestone deadlines and procurement paths.",
    },
    {
      friction:
        "Sales reps immediately cave during contract negotiations, sacrificing profit margin just to hit monthly unit quota.",
      solution:
        "Structured concession frameworks that require give-and-take trade-offs, preserving margins and contract value.",
    },
    {
      friction:
        "Sales reps manually enter incomplete data into CRM, making executive revenue forecasting a guessing game.",
      solution:
        "Enforced CRM stage validation criteria and automated data capture that guarantees complete pipeline predictability.",
    },
  ];

  const roadmap: DisciplineProcessStep[] = [
    {
      week: "Weeks 1–2",
      phase: "WIN/LOSS AUDIT",
      title: "Sales Call & Deal Diagnostics",
      deliverable: "Recorded Call Scoring & Bottleneck Audit",
    },
    {
      week: "Weeks 3–5",
      phase: "PLAYBOOK DESIGN",
      title: "Scripts & Qualification Rubrics",
      deliverable: "Custom Sales Playbook & Objection Guides",
    },
    {
      week: "Weeks 6–8",
      phase: "COACHING & CRM",
      title: "Team Clinics & Pipeline Setup",
      deliverable: "Certified Reps & Validated CRM Pipelines",
    },
    {
      week: "Weeks 9–10",
      phase: "SOPs & VELOCITY",
      title: "Conversion Optimization & Handoffs",
      deliverable: "Commercial SOP Manual & Forecast Engine",
    },
  ];

  const faqs: DisciplineFAQ[] = [
    {
      question: "Do you train our existing reps or do you provide outsourced sales reps?",
      answer:
        "We focus on empowering and upskilling your internal team. We audit your existing team's calls, build custom scripts tailored to your buyer psychology, and run hands-on coaching sessions until your reps consistently execute at a high standard.",
    },
    {
      question: "Which CRM platforms do you configure and optimize?",
      answer:
        "We have deep expertise across HubSpot, Salesforce, Pipedrive, and Zoho CRM. We restructure pipeline stages, build custom deal properties, and implement automated validation rules to ensure data accuracy.",
    },
    {
      question: "How long before we see improvements in our sales win rates?",
      answer:
        "Improvements in discovery quality and deal qualification typically show up within the first 14 days of playbook deployment. Concrete improvements in win rate and shortened deal cycles become measurable within 60 to 90 days.",
    },
    {
      question: "Can you help hire and evaluate new account executives or SDRs?",
      answer:
        "Yes. We frequently develop candidate assessment rubrics, role-play evaluation tests, and 30-60-90 day onboarding plans so that new commercial hires ramp to full quota productivity in half the normal time.",
    },
  ];

  const adjacentDisciplines: AdjacentDiscipline[] = [
    {
      number: "01 // COMMERCIAL ARCHITECTURE",
      title: "Growth & Strategy",
      href: "/services/strategy",
      tagline:
        "Establish defensible market positioning and pricing power that gives your sales team an unfair competitive advantage.",
    },
    {
      number: "02 // DEMAND GENERATION",
      title: "Branding & Marketing",
      href: "/services/marketing",
      tagline:
        "Fill your newly optimized sales pipeline with high-intent decision-makers educated by authority content.",
    },
    {
      number: "04 // DIGITAL SYSTEMS",
      title: "Technology & Automation",
      href: "/services/technology",
      tagline:
        "Automate speed-to-lead routing, WhatsApp follow-ups, and calendar booking infrastructure.",
    },
  ];

  const featuredCaseStudy = caseStudiesData[2]; // Industrial Sales Enablement

  return (
    <ServiceDisciplineTemplate
      pillarNumber="03"
      categoryTag="REVENUE ENGINE"
      titleLine1="Pipeline Velocity &"
      titleHighlight="High-Conversion Sales Systems."
      subtitle="Standardizing commercial sales execution, objection handling, CRM pipeline hygiene, and deal closing rubrics to eliminate reliance on individual star performers."
      image="/images/pillars/03-sales-conversion.jpg"
      imageAlt="Levexa Sales & Conversion Enablement"
      overviewSummary="Sales playbooks, team training, CRM infrastructure, and conversion rate optimization."
      metrics={metrics}
      deliverablesDetailed={deliverablesDetailed}
      frictionVsSolution={frictionVsSolution}
      roadmap={roadmap}
      featuredCaseStudy={featuredCaseStudy}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to accelerate your"
      ctaHighlight="sales pipeline velocity?"
      ctaSubtitle="Schedule a sales architecture consultation to audit your current close rates and build a high-performance playbook."
    />
  );
}
