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
  title: "Sales Enablement & Pipeline Conversion — Levexa",
  description:
    "Standardize sales execution, accelerate deal velocity, and eliminate rep discounting with Levexa's commercial Sales & Conversion architecture.",
  path: "/services/sales",
});

export default function SalesServicePage() {
  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "Commercial Sales Strategy & Negotiation Playbook",
      description:
        "The definitive operating playbook that equips every rep with high-conviction objection scripts and closing rubrics.",
    },
    {
      title: "Live Sales Coaching & Call Quality Auditing",
      description:
        "Direct coaching clinics and deal teardowns that turn average performers into consistent quota-carrying closers.",
    },
    {
      title: "Lead-Management Systems & CRM Pipeline Setup",
      description:
        "Rock-solid CRM architecture (HubSpot, Salesforce) that enforces pipeline hygiene and provides accurate revenue forecasting.",
    },
    {
      title: "Sales SOPs & Conversion Rate Optimization (CRO)",
      description:
        "Standardized operating procedures covering the entire customer lifecycle from first demo to post-sale handoff.",
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
      deliverablesDetailed={deliverablesDetailed}
      roadmap={roadmap}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to accelerate your"
      ctaHighlight="sales pipeline velocity?"
      ctaSubtitle="Schedule a sales architecture consultation to audit your current close rates and build a high-performance playbook."
    />
  );
}
