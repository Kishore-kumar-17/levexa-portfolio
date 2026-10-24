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
  title: "Technology & Automation Advisory — Levexa",
  description:
    "Scale commercial leverage with custom web applications, AI chatbots, WhatsApp automation, and seamless CRM integrations engineered by Levexa.",
  path: "/services/technology",
});

export default function TechnologyServicePage() {
  const metrics: MetricItem[] = [
    {
      label: "Operational Time Savings",
      value: "40+ Hrs/Wk",
      detail:
        "Commercial team hours reclaimed through automated lead routing, meeting follow-ups, and AI-driven document drafting.",
    },
    {
      label: "Visitor-to-Lead Lift",
      value: "3.8x",
      detail:
        "Increase in conversion rate achieved by transitioning from outdated template sites to high-speed, luxury digital experiences.",
    },
    {
      label: "Pipeline Data Accuracy",
      value: "99.9%",
      detail:
        "Zero dropped lead records through robust, two-way API synchronization between ad platforms, CRM, and billing systems.",
    },
  ];

  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "High-Converting Web Platforms & Web Applications",
      description:
        "Bespoke, blazingly fast digital architectures built with modern engineering standards to maximize brand prestige and conversion.",
      timeline: "Weeks 1–4",
      items: [
        "Modern Full-Stack Web Development (Next.js, TypeScript)",
        "Luxury Responsive UI/UX with Micro-Interactions",
        "Conversion Funnel Architecture & Speed-Optimized Landing Pages",
        "Enterprise SEO Infrastructure, Structured Data & Security Headers",
      ],
    },
    {
      title: "CRM Integration & Speed-to-Lead Workflows",
      description:
        "Instant automated routing connecting every inbound marketing touchpoint directly into your sales team's hands.",
      timeline: "Weeks 5–7",
      items: [
        "Two-Way Native CRM Sync (HubSpot, Salesforce, Pipedrive)",
        "Sub-2-Minute Automated Lead Notification Protocols",
        "Calendar Scheduling & Round-Robin Meeting Assignment",
        "Dynamic Form Gating & Enrichment Telemetry",
      ],
    },
    {
      title: "WhatsApp Bots, AI Agents & Workflow Automation",
      description:
        "Intelligent conversational bots and AI agents that engage prospects 24/7, answer technical questions, and pre-qualify leads.",
      timeline: "Weeks 8–10",
      items: [
        "Official WhatsApp Business API Setup & Verified Sender",
        "AI Chatbots Trained on Your Company SOPs & Pricing",
        "Automated Meeting Reminders & No-Show Rescheduling Flows",
        "AI Lead Summarization & CRM Deal Update Workflows",
      ],
    },
    {
      title: "Executive Business Intelligence Dashboards",
      description:
        "Real-time operational visibility that consolidates traffic, ad spend, pipeline velocity, and client retention into one pane.",
      timeline: "Weeks 11–12",
      items: [
        "Executive KPI Cockpit (Looker Studio, Metabase, Custom)",
        "Multi-Platform Ad Spend & Revenue Reconciliation",
        "Automated Weekly Executive Summary Reports via Email/Slack",
        "Data Backup, Security Compliance & API Governance",
      ],
    },
  ];

  const frictionVsSolution: FrictionVsSolution[] = [
    {
      friction:
        "Slow, generic WordPress or builder sites that look identical to budget competitors and suffer 60%+ bounce rates.",
      solution:
        "Bespoke, ultra-responsive digital architecture with instant load times and luxury aesthetics that build immediate authority.",
    },
    {
      friction:
        "Inbound leads sit untouched for hours, allowing hot prospects to cool off or book consultations with competitors.",
      solution:
        "Automated sub-120-second speed-to-lead routing with instant WhatsApp and calendar triggers that secure commitments.",
    },
    {
      friction:
        "Customer records fragmented across disparate spreadsheets, outdated forms, and disconnected marketing software.",
      solution:
        "Unified automated data pipeline synchronizing advertising platforms, CRM deal stages, and billing systems seamlessly.",
    },
    {
      friction:
        "Skilled commercial staff wasting half their week performing repetitive administrative tasks and manual data entry.",
      solution:
        "Intelligent AI agents and webhook automations that handle meeting notes, CRM field updates, and follow-up emails.",
    },
  ];

  const roadmap: DisciplineProcessStep[] = [
    {
      week: "Weeks 1–3",
      phase: "SYSTEM ARCHITECTURE",
      title: "Tech Stack Audit & UI/UX Blueprints",
      deliverable: "Technical Architecture Spec & Interactive Mockups",
    },
    {
      week: "Weeks 4–7",
      phase: "CORE ENGINEERING",
      title: "Web Platform & CRM Integration",
      deliverable: "Production-Ready Web App & Integrated CRM",
    },
    {
      week: "Weeks 8–10",
      phase: "AUTOMATION ENGINE",
      title: "AI Agents & WhatsApp Bots",
      deliverable: "Live WhatsApp API & Pre-Qualification Bots",
    },
    {
      week: "Weeks 11–12",
      phase: "TESTING & LAUNCH",
      title: "Security, CRO & Dashboards",
      deliverable: "Executive BI Dashboard & System Documentation",
    },
  ];

  const faqs: DisciplineFAQ[] = [
    {
      question: "Which modern technologies do you build websites and applications with?",
      answer:
        "We build with Next.js, React, TypeScript, TailwindCSS, and serverless Node.js infrastructure. This ensures sub-second load times, bank-grade security, flawless mobile responsiveness, and zero reliance on fragile, bloated plugins.",
    },
    {
      question: "How do your WhatsApp and AI bots interact with our existing CRM?",
      answer:
        "We use official Meta WhatsApp Business Cloud APIs and OpenAI/Claude language models connected through secure webhook infrastructure. Every incoming message, qualification answer, and meeting link is automatically synchronized into your CRM contact record in real time.",
    },
    {
      question: "Can you automate workflows across the tools our company already uses?",
      answer:
        "Yes. Whether through Make, Zapier, n8n, or custom API microservices, we connect your advertising channels, landing pages, CRM, calendar software, and payment gateways into a cohesive, hands-off workflow.",
    },
    {
      question: "Do you provide hosting, security, and ongoing technical maintenance?",
      answer:
        "Yes. We offer fully managed enterprise hosting on global edge networks (Vercel, AWS), continuous uptime monitoring, SSL certificate management, and priority technical support to ensure your digital revenue systems never fail.",
    },
  ];

  const adjacentDisciplines: AdjacentDiscipline[] = [
    {
      number: "01 // COMMERCIAL ARCHITECTURE",
      title: "Growth & Strategy",
      href: "/services/strategy",
      tagline:
        "Ground your digital platforms in clear positioning, market research, and targeted customer journey funnels.",
    },
    {
      number: "02 // DEMAND GENERATION",
      title: "Branding & Marketing",
      href: "/services/marketing",
      tagline:
        "Drive high-volume, high-intent traffic directly into your newly automated conversion funnels.",
    },
    {
      number: "03 // REVENUE ENGINE",
      title: "Sales & Conversion",
      href: "/services/sales",
      tagline:
        "Equip your sales team with automated speed-to-lead notifications and CRM qualification workflows.",
    },
  ];

  const featuredCaseStudy = caseStudiesData[3]; // Healthcare Expansion Model

  return (
    <ServiceDisciplineTemplate
      pillarNumber="04"
      categoryTag="DIGITAL SYSTEMS"
      titleLine1="Scalable Digital Architecture &"
      titleHighlight="Intelligent Automation."
      subtitle="Custom web development, mobile apps, WhatsApp & AI bots, CRM integrations, and automated operational workflows engineered to maximize commercial leverage."
      image="/images/pillars/04-technology-automation.jpg"
      imageAlt="Levexa Technology & Automation Architecture"
      overviewSummary="Custom web development, mobile apps, CRM, AI, and workflow automation."
      metrics={metrics}
      deliverablesDetailed={deliverablesDetailed}
      frictionVsSolution={frictionVsSolution}
      roadmap={roadmap}
      featuredCaseStudy={featuredCaseStudy}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to automate and scale your"
      ctaHighlight="digital revenue systems?"
      ctaSubtitle="Schedule a technical consultation to map out automated workflows, custom web architecture, and AI integrations."
    />
  );
}
