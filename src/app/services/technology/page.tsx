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
  title: "Technology & Automation Services — Levexa",
  description:
    "Scale commercial leverage with custom web applications, AI chatbots, WhatsApp automation, and seamless CRM integrations engineered by Levexa.",
  path: "/services/technology",
});

export default function TechnologyServicePage() {
  const deliverablesDetailed: DeliverableDetailed[] = [
    {
      title: "High-Converting Web Platforms & Web Applications",
      description:
        "Bespoke, blazingly fast digital architectures built with modern engineering standards to maximize brand prestige and conversion.",
    },
    {
      title: "CRM Integration & Speed-to-Lead Workflows",
      description:
        "Instant automated routing connecting every inbound marketing touchpoint directly into your sales team's hands.",
    },
    {
      title: "WhatsApp Bots, AI Agents & Workflow Automation",
      description:
        "Intelligent conversational bots and AI agents that engage prospects 24/7, answer technical questions, and pre-qualify leads.",
    },
    {
      title: "Executive Business Intelligence Dashboards",
      description:
        "Real-time operational visibility that consolidates traffic, ad spend, pipeline velocity, and client retention into one pane.",
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
        "We build with Next.js, React, TypeScript, TailwindCSS, and serverless Node.js infrastructure. This gives you fast load times, secure modern infrastructure, flawless mobile responsiveness, and zero reliance on fragile, bloated plugins.",
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
      number: "01",
      title: "Growth & Strategy",
      href: "/services/strategy",
      tagline:
        "Ground your digital platforms in clear positioning, market research, and targeted customer journey funnels.",
    },
    {
      number: "02",
      title: "Branding & Marketing",
      href: "/services/marketing",
      tagline:
        "Drive high-volume, high-intent traffic directly into your newly automated conversion funnels.",
    },
    {
      number: "03",
      title: "Sales & Conversion",
      href: "/services/sales",
      tagline:
        "Equip your sales team with automated speed-to-lead notifications and CRM qualification workflows.",
    },
  ];

  return (
    <ServiceDisciplineTemplate
      pillarNumber="04"
      categoryTag="DIGITAL SYSTEMS"
      titleLine1="Technology &"
      titleHighlight="Automation"
      subtitle="Custom web development, mobile apps, WhatsApp & AI bots, CRM integrations, and automated operational workflows engineered to maximize commercial leverage."
      image="/images/pillars/04-technology-automation.jpg"
      imageAlt="A laptop showing an automation dashboard"
      deliverablesDetailed={deliverablesDetailed}
      roadmap={roadmap}
      faqs={faqs}
      adjacentDisciplines={adjacentDisciplines}
      ctaTitle="Ready to automate and scale your"
      ctaHighlight="digital revenue systems?"
      ctaSubtitle="Schedule a technical consultation to map out automated workflows, custom web architecture, and AI integrations."
    />
  );
}
