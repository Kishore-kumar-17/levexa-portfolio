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
  title: "Branding & Demand Generation — Levexa",
  description:
    "Transform positioning into qualified inbound pipeline with Levexa's full-funnel Branding, Meta Ads, and Performance Marketing architecture.",
  path: "/services/marketing",
});

export default function MarketingServicePage() {
  const metrics: MetricItem[] = [
    {
      label: "MQL Pipeline Velocity",
      value: "+164%",
      detail:
        "Increase in qualified demo bookings and high-intent commercial inquiries generated within the first 90 days.",
    },
    {
      label: "CAC Payback Window",
      value: "4.2 Mo",
      detail:
        "Accelerated payback period achieved through high-converting creative hooks and targeted organic nurture funnels.",
    },
    {
      label: "Organic Lead Share",
      value: "62%",
      detail:
        "Proportion of inbound pipeline driven by executive personal branding, organic search, and authority content assets.",
    },
  ];

  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "Executive Personal & Corporate Brand Architecture",
      description:
        "Establish an unmistakable, premium brand identity that commands immediate trust and separates you from commodity competitors.",
      timeline: "Weeks 1–3",
      items: [
        "Executive Founder / Leadership Personal Brand Playbook",
        "Visual Identity Guidelines, Typography & Design Tokens",
        "Key Opinion Leader (KOL) Market Positioning Thesis",
        "Corporate Social Proof, Testimonial & Case Collateral",
      ],
    },
    {
      title: "Authority Content Strategy & Video Creative Engine",
      description:
        "High-production educational and narrative assets engineered to educate prospects before they ever speak with sales.",
      timeline: "Weeks 4–7",
      items: [
        "Bi-Weekly Executive Thought-Leadership Content System",
        "High-Impact Short-Form & Long-Form Video Post-Production",
        "Interactive Benchmark Tools, Calculators & Whitepapers",
        "Omni-Channel Distribution Cadence (LinkedIn, X, YouTube)",
      ],
    },
    {
      title: "Full-Funnel Meta Ads & Paid Acquisition Architecture",
      description:
        "Systematic ad campaigns designed to capture existing market demand and manufacture new pipeline at predictable unit economics.",
      timeline: "Weeks 8–11",
      items: [
        "Meta Ads (Facebook & Instagram) Campaign Structure",
        "Direct-Response Ad Creative, Angles & Scriptwriting",
        "High-Intent Retargeting & Lead Re-Engagement Funnels",
        "Creative Fatigue Testing Cadence & Budget Allocation Models",
      ],
    },
    {
      title: "Closed-Loop CRM Attribution & Funnel Optimization",
      description:
        "Uncompromising data transparency that connects top-of-funnel clicks to closed-won revenue in your pipeline.",
      timeline: "Weeks 12–14",
      items: [
        "Multi-Touch Attribution Modeling in CRM & Analytics",
        "Landing Page Conversion Rate Optimization (CRO)",
        "Automated Lead Scoring & Sales Qualification Routing",
        "Weekly Return-on-Ad-Spend (ROAS) Executive Dashboards",
      ],
    },
  ];

  const frictionVsSolution: FrictionVsSolution[] = [
    {
      friction:
        "Escalating cost-per-click and diminishing returns from generic ad agencies running basic boost campaigns.",
      solution:
        "Performance creative frameworks rooted in customer psychology that cut through feed fatigue and lower acquisition costs.",
    },
    {
      friction:
        "Inconsistent brand aesthetics that look amateurish and erode trust when pitching enterprise decision-makers.",
      solution:
        "Luxury, unified visual language and executive thought leadership that positions your firm as the undisputed industry authority.",
    },
    {
      friction:
        "Marketing reports full of vanity metrics (impressions, clicks) while sales complains of low lead quality.",
      solution:
        "Lead scoring calibrated to actual deal qualification criteria, prioritizing high-intent decision-makers over empty clicks.",
    },
    {
      friction:
        "Single-channel fragility that leaves monthly revenue hostage to algorithm adjustments and platform policy changes.",
      solution:
        "Balanced demand engine blending high-velocity paid acquisition with durable, compounding organic authority assets.",
    },
  ];

  const roadmap: DisciplineProcessStep[] = [
    {
      week: "Weeks 1–3",
      phase: "DIAGNOSIS & POSITIONING",
      title: "Demand Infrastructure Audit",
      deliverable: "Creative Gap Analysis & Channel Strategy Plan",
    },
    {
      week: "Weeks 4–7",
      phase: "CREATIVE PRODUCTION",
      title: "Brand & Video Engine Setup",
      deliverable: "Content System, Video Assets & Lead Magnets",
    },
    {
      week: "Weeks 8–11",
      phase: "PAID CAMPAIGN ROLLOUT",
      title: "Meta Ads & ABM Deployment",
      deliverable: "Active Multi-Tier Ad Campaigns & Tracking",
    },
    {
      week: "Weeks 12–14",
      phase: "ATTRIBUTION & SCALE",
      title: "CRO & Funnel Scaling",
      deliverable: "Closed-Loop Attribution & Scale Playbook",
    },
  ];

  const faqs: DisciplineFAQ[] = [
    {
      question: "Which advertising platforms does Levexa manage?",
      answer:
        "We specialize in full-funnel Meta Ads (Facebook & Instagram) for consumer, founder, and SMB scale, paired with targeted LinkedIn Account-Based Marketing (ABM) and high-intent Google Search for high-ticket B2B deals.",
    },
    {
      question: "Do you produce all creative assets, scripts, and video editing?",
      answer:
        "Yes. We operate an end-to-end creative studio. We handle angle ideation, scriptwriting, hook development, professional post-production video editing, color grading, and graphic design tailored to modern social platforms.",
    },
    {
      question: "How quickly do we see results from your marketing campaigns?",
      answer:
        "Paid acquisition campaigns begin gathering conversion telemetry within 14 days of launch. Typically, we reach initial creative efficiency by Week 4, while organic thought-leadership and authority nurture assets compound significantly between Months 2 and 6.",
    },
    {
      question: "How do you ensure leads generated are actually qualified for our sales team?",
      answer:
        "We co-design the lead qualification rubric directly with your sales leaders before launching a single campaign. We use multi-step qualification forms, budget validation gates, and automated CRM scoring to ensure reps only speak with genuine decision-makers.",
    },
  ];

  const adjacentDisciplines: AdjacentDiscipline[] = [
    {
      number: "01 // COMMERCIAL ARCHITECTURE",
      title: "Growth & Strategy",
      href: "/services/strategy",
      tagline:
        "Align market positioning, unit economics, and executive prioritization to underpin your marketing engine.",
    },
    {
      number: "03 // REVENUE ENGINE",
      title: "Sales & Conversion",
      href: "/services/sales",
      tagline:
        "Convert the inbound demand generated into signed contracts with codified sales scripts and CRM playbooks.",
    },
    {
      number: "04 // DIGITAL SYSTEMS",
      title: "Technology & Automation",
      href: "/services/technology",
      tagline:
        "Build high-converting landing pages, WhatsApp automation, and automated CRM lead distribution.",
    },
  ];

  const featuredCaseStudy = caseStudiesData[1]; // Fintech Demand Engine

  return (
    <ServiceDisciplineTemplate
      pillarNumber="02"
      categoryTag="DEMAND GENERATION"
      titleLine1="High-Performance Branding &"
      titleHighlight="Demand Generation."
      subtitle="Transforming brand authority into predictable, high-intent inbound pipelines through multi-channel content strategy, Meta Ads, and full-funnel performance creative."
      image="/images/pillars/02-branding-marketing.jpg"
      imageAlt="Levexa Branding & Demand Generation"
      overviewSummary="Personal & business branding, Meta Ads, and performance creative engines."
      metrics={metrics}
      deliverablesDetailed={deliverablesDetailed}
      frictionVsSolution={frictionVsSolution}
      roadmap={roadmap}
      featuredCaseStudy={featuredCaseStudy}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to scale your"
      ctaHighlight="inbound demand engine?"
      ctaSubtitle="Schedule a strategic consultation to audit your current acquisition channels and map a predictable pipeline roadmap."
    />
  );
}
