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
  title: "Branding & Marketing Services — Levexa",
  description:
    "Transform positioning into qualified inbound pipeline with Levexa's full-funnel Branding, Meta Ads, and Performance Marketing architecture.",
  path: "/services/marketing",
});

export default function MarketingServicePage() {
  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "Executive Personal & Corporate Brand Architecture",
      description:
        "Establish an unmistakable, premium brand identity that commands immediate trust and separates you from commodity competitors.",
    },
    {
      title: "Authority Content Strategy & Video Creative Engine",
      description:
        "High-production educational and narrative assets engineered to educate prospects before they ever speak with sales.",
    },
    {
      title: "Full-Funnel Meta Ads & Paid Acquisition Architecture",
      description:
        "Systematic ad campaigns designed to capture existing market demand and manufacture new pipeline at predictable unit economics.",
    },
    {
      title: "Closed-Loop CRM Attribution & Funnel Optimization",
      description:
        "Uncompromising data transparency that connects top-of-funnel clicks to closed-won revenue in your pipeline.",
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
      number: "01",
      title: "Growth & Strategy",
      href: "/services/strategy",
      tagline:
        "Align market positioning, unit economics, and executive prioritization to underpin your marketing engine.",
    },
    {
      number: "03",
      title: "Sales & Conversion",
      href: "/services/sales",
      tagline:
        "Convert the inbound demand generated into signed contracts with codified sales scripts and CRM playbooks.",
    },
    {
      number: "04",
      title: "Technology & Automation",
      href: "/services/technology",
      tagline:
        "Build high-converting landing pages, WhatsApp automation, and automated CRM lead distribution.",
    },
  ];

  return (
    <ServiceDisciplineTemplate
      pillarNumber="02"
      categoryTag="DEMAND GENERATION"
      titleLine1="Branding &"
      titleHighlight="Marketing"
      subtitle="Transforming brand authority into predictable, high-intent inbound pipelines through multi-channel content strategy, Meta Ads, and full-funnel performance creative."
      image="/images/pillars/02-branding-marketing.jpg"
      imageAlt="Brand identity materials on a desk"
      deliverablesDetailed={deliverablesDetailed}
      roadmap={roadmap}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to scale your"
      ctaHighlight="inbound demand engine?"
      ctaSubtitle="Schedule a strategic consultation to audit your current acquisition channels and map a predictable pipeline roadmap."
    />
  );
}
