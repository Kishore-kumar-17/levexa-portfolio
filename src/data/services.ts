import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "growth-strategy",
    title: "Growth & Strategy",
    tagline: "Market research, commercial positioning, GTM architecture, and KPI planning.",
    description:
      "Business growth strategy, GTM strategy, market research, positioning, competitor analysis, customer journey, funnels, growth consulting and KPI planning.",
    iconName: "Compass",
    challenges: [
      "Ambiguous value proposition causing weak market differentiation",
      "Misaligned executive priorities and fragmented growth initiatives",
      "Stalled market penetration in existing or adjacent customer segments",
      "Inefficient pricing models eroding margins as transaction volume expands",
    ],
    deliverables: [
      "Business Growth Strategy & GTM Playbook",
      "Comprehensive Market Research & Competitor Analysis",
      "Customer Journey Mapping & Conversion Funnels",
      "Growth Consulting & Executive KPI Planning",
    ],
    metricsFocus: [
      "Customer Acquisition Cost (CAC) Efficiency",
      "Gross Margin Expansion",
      "Market Share Penetration Rate",
    ],
  },
  {
    id: "branding-marketing",
    title: "Branding & Marketing",
    tagline: "Personal & business branding, Meta Ads, and performance creative engines.",
    description:
      "Personal branding, business branding, content strategy, social media management, video production/editing, organic lead generation, Meta Ads, performance marketing and creative strategy.",
    iconName: "TrendingUp",
    challenges: [
      "High ad spend with declining conversion rates and volatile lead volume",
      "Inconsistent brand messaging that fails to build enterprise trust",
      "Disjointed funnel metrics masking where high-value prospects drop off",
      "Over-reliance on a single acquisition channel prone to algorithm shifts",
    ],
    deliverables: [
      "Personal & Business Brand Architecture",
      "Authority Content Strategy & Social Media Management",
      "High-Production Video Editing & Creative Strategy",
      "Meta Ads & Full-Funnel Performance Marketing",
    ],
    metricsFocus: [
      "Marketing Qualified Lead (MQL) Velocity",
      "Customer Acquisition Cost Payback Period",
      "Organic vs Paid Lead Efficiency Ratio",
    ],
  },
  {
    id: "sales-conversion",
    title: "Sales & Conversion",
    tagline: "Sales playbooks, team training, CRM infrastructure, and conversion rate optimization.",
    description:
      "Sales strategy, scripts, sales-team training, call audits, objection handling, lead-management systems, CRM setup, SOPs and conversion optimization.",
    iconName: "Target",
    challenges: [
      "Lengthy deal cycles and stalled opportunities lingering in pipeline limbo",
      "Unpredictable win rates heavily dependent on individual star performers",
      "Poor handoffs between marketing generation and sales qualification",
      "Discounting pressure during final negotiations eroding deal value",
    ],
    deliverables: [
      "High-Conversion Sales Strategy & Negotiation Scripts",
      "Sales Team Training & Call Quality Audits",
      "Lead-Management Systems & CRM Pipeline Setup",
      "Standard Operating Procedures (SOPs) & CRO",
    ],
    metricsFocus: [
      "Sales Pipeline Velocity",
      "Opportunity-to-Close Win Rate",
      "Average Contract Value (ACV)",
    ],
  },
  {
    id: "technology-automation",
    title: "Technology & Automation",
    tagline: "Custom web development, mobile apps, CRM, AI, and workflow automation.",
    description:
      "Website and landing-page development, e-commerce development, custom web applications, mobile apps, CRM implementation, WhatsApp/chatbot automation, marketing automation, AI integrations, dashboards and custom business software.",
    iconName: "Layers",
    challenges: [
      "Slow, generic websites failing to convert high-intent traffic",
      "Manual repetitive tasks wasting valuable commercial team hours",
      "Fragmented software tools that don't synchronize customer data",
      "Lack of executive real-time visibility into business performance",
    ],
    deliverables: [
      "High-Converting Websites & E-Commerce Platforms",
      "Custom Web Applications & Mobile App Development",
      "CRM Implementation & WhatsApp/Chatbot Automation",
      "AI Integrations, Marketing Workflows & Executive Dashboards",
    ],
    metricsFocus: [
      "Automated Workflow Time Savings",
      "Visitor-to-Lead Conversion Rate",
      "System Uptime & Data Synchronization Accuracy",
    ],
  },
];
