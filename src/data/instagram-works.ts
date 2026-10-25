export interface ScriptClientWork {
  id: string;
  clientName: string;
  clientHandle?: string;
  category: "Founders & Tech" | "Finance & Wealth" | "E-Commerce" | "Health & Lifestyle" | "B2B SaaS";
  instagramUrl: string;
  thumbnail: string;
  views: string;
  likes?: string;
  shares?: string;
  scriptHook: string;
  scriptConcept: string;
  scriptBreakdown: {
    hookDuration: string;
    hookContent: string;
    hookTechnique: string;
    bodyDuration: string;
    bodyContent: string;
    bodyTechnique: string;
    ctaDuration: string;
    ctaContent: string;
    ctaTechnique: string;
  };
  keyResult: string;
}

export const instagramProfileData = {
  handle: "levexa.scripts",
  displayName: "Levexa • Scriptwriting & Content Architecture",
  verified: true,
  avatarUrl: "/images/about/who-we-are-team.jpg",
  bio: [
    "✍️ High-retention scriptwriting for founders, creators & high-growth brands",
    "🎯 Viral hooks • Narrative pacing • 0-3s retention engineering",
    "📈 18.4M+ Total organic views generated across 120+ client reels",
    "📍 London • Global Remote Advisory",
  ],
  stats: {
    reelsScripted: "140+",
    totalViews: "18.4M+",
    avgRetention: "82.4%",
    clientsScaled: "38",
  },
  highlights: [
    { title: "Viral Hooks", icon: "🔥", count: "18" },
    { title: "Frameworks", icon: "📐", count: "12" },
    { title: "Case Studies", icon: "📊", count: "24" },
    { title: "Client Wins", icon: "🏆", count: "35" },
    { title: "Script Breakdowns", icon: "💡", count: "40" },
  ],
};

export const clientScriptWorks: ScriptClientWork[] = [
  {
    id: "reel-01",
    clientName: "Enterprise AI Founder",
    clientHandle: "@alex.techscale",
    category: "Founders & Tech",
    instagramUrl: "https://www.instagram.com/reels/",
    thumbnail: "/images/pillars/04-tech-automation.jpg",
    views: "1.4M",
    likes: "84.2K",
    shares: "19.5K",
    scriptHook: "“Most founders build AI products nobody wants because they skip this 60-second test.”",
    scriptConcept: "Negative-bias contrast hook paired with a 3-step validation framework for technical founders.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:03",
      hookContent: "“Most founders build AI products nobody wants because they skip this 60-second test.”",
      hookTechnique: "Counter-intuitive pattern interrupt + threat to status quo.",
      bodyDuration: "00:03 - 00:44",
      bodyContent: "Break down the exact 3-step 'Pain-First Validation Rule' using real screen recordings and relatable customer quote demonstrations.",
      bodyTechnique: "Rapid B-roll cuts every 2.4s + kinetic typography highlighting quantifiable metrics.",
      ctaDuration: "00:44 - 00:55",
      ctaContent: "“Comment 'VALIDATE' and I will send you our complete 1-page Notion validation template for free.”",
      ctaTechnique: "Zero-friction keyword trigger for automated ManyChat DM delivery.",
    },
    keyResult: "+4,200 inbound DMs & 1.4M organic views in 7 days",
  },
  {
    id: "reel-02",
    clientName: "Private Wealth Advisory",
    clientHandle: "@wealtharchitects",
    category: "Finance & Wealth",
    instagramUrl: "https://www.instagram.com/reels/",
    thumbnail: "/images/pillars/01-growth-strategy.jpg",
    views: "890K",
    likes: "46.1K",
    shares: "12.8K",
    scriptHook: "“The wealthy don't buy real estate the way your financial advisor tells you to.”",
    scriptConcept: "Challenging mainstream financial advice with high-net-worth commercial tax and depreciation strategies.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:04",
      hookContent: "“The wealthy don't buy real estate the way your financial advisor tells you to. Here's what they do instead.”",
      hookTechnique: "Us vs. Them framing with secret knowledge curiosity gap.",
      bodyDuration: "00:04 - 00:46",
      bodyContent: "Visual breakdown on a minimalist whiteboard comparing traditional mortgage debt vs. cost segregation & asset-backed liquidity leverage.",
      bodyTechnique: "Pacing escalation: gradual reveal of numbers keeping viewer eyes locked on the drawing.",
      ctaDuration: "00:46 - 00:58",
      ctaContent: "“Save this reel so you have the 3 criteria when reviewing your next commercial acquisition.”",
      ctaTechnique: "High-save prompt targeting algorithm distribution signals.",
    },
    keyResult: "12,800+ saves (Top 1% algorithm bookmark ratio)",
  },
  {
    id: "reel-03",
    clientName: "Direct-to-Consumer Brand",
    clientHandle: "@lumiere.wellness",
    category: "Health & Lifestyle",
    instagramUrl: "https://www.instagram.com/reels/",
    thumbnail: "/images/pillars/02-marketing-demand.jpg",
    views: "1.1M",
    likes: "62.3K",
    shares: "15.4K",
    scriptHook: "“We tested 40 morning routines for 6 months. 39 of them were complete waste of time.”",
    scriptConcept: "Extreme experimentation format providing immediate actionable protocol simplification.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:03",
      hookContent: "“We tested 40 morning routines for 6 months. 39 of them were complete waste of time.”",
      hookTechnique: "Hyperbolic effort proof + drastic simplification hook.",
      bodyDuration: "00:03 - 00:42",
      bodyContent: "Dissecting the single protocol that actually improved cortisol and focus markers, debunking 5 common fitness influencer rituals in 15 seconds.",
      bodyTechnique: "Visual countdown format with instant visual payoff.",
      ctaDuration: "00:42 - 00:52",
      ctaContent: "“Link in bio for our clinical breakdown and morning routine checklist.”",
      ctaTechnique: "Curiosity payoff driven directly to biological protocol landing page.",
    },
    keyResult: "340% spike in direct store traffic during campaign launch",
  },
  {
    id: "reel-04",
    clientName: "B2B SaaS Growth Lab",
    clientHandle: "@pipeline.velocity",
    category: "B2B SaaS",
    instagramUrl: "https://www.instagram.com/reels/",
    thumbnail: "/images/pillars/03-sales-conversion.jpg",
    views: "640K",
    likes: "31.8K",
    shares: "8.9K",
    scriptHook: "“If your cold emails start with 'Hope this email finds you well', delete your account right now.”",
    scriptConcept: "Humorous shock-value critique followed by a high-converting 3-sentence outbound template.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:04",
      hookContent: "“If your cold emails start with 'Hope this email finds you well', delete your account right now.”",
      hookTechnique: "Polarizing shock hook instantly qualifying B2B sales professionals.",
      bodyDuration: "00:04 - 00:38",
      bodyContent: "Side-by-side comparison of a 4-paragraph generic pitch vs. our 3-sentence trigger-event cold outreach framework.",
      bodyTechnique: "Visual red highlighter markup on screen showing exact friction points.",
      ctaDuration: "00:38 - 00:50",
      ctaContent: "“Drop 'SCRIPT' below and I'll send you our 12 highest-converting outbound templates.”",
      ctaTechnique: "Interactive comment trigger creating viral engagement loop.",
    },
    keyResult: "28% reply rate achieved by client's outbound SDR team",
  },
  {
    id: "reel-05",
    clientName: "Personal Brand Accelerator",
    clientHandle: "@executive.voice",
    category: "Founders & Tech",
    instagramUrl: "https://www.instagram.com/reels/",
    thumbnail: "/images/about/who-we-are-team.jpg",
    views: "2.1M",
    likes: "118K",
    shares: "34.2K",
    scriptHook: "“How a CEO with 200 followers closed a $500K contract using a 45-second video.”",
    scriptConcept: "Case study storytelling narrative proving authority over vanity follower counts.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:04",
      hookContent: "“How a CEO with 200 followers closed a $500K contract using a 45-second video.”",
      hookTechnique: "Extreme contrast (low followers vs. monumental revenue outcome).",
      bodyDuration: "00:04 - 00:45",
      bodyContent: "Step-by-step deconstruction of the CEO's exact 3-part script: Problem statement, confidential client anecdote, and invitation for briefing.",
      bodyTechnique: "Documentary-style voiceover with sleek typography overlays.",
      ctaDuration: "00:45 - 00:55",
      ctaContent: "“If you want our exact CEO Video Scripting Framework, tap the link in bio.”",
      ctaTechnique: "High-ticket authority qualification CTA.",
    },
    keyResult: "2.1M views, client signed 3 enterprise retainer accounts",
  },
  {
    id: "reel-06",
    clientName: "High-Ticket E-Commerce",
    clientHandle: "@atelier.london",
    category: "E-Commerce",
    instagramUrl: "https://www.instagram.com/reels/",
    thumbnail: "/images/process/step-01.jpg",
    views: "780K",
    likes: "42.5K",
    shares: "11.2K",
    scriptHook: "“Why luxury brands never explain their prices (and why you shouldn't either).”",
    scriptConcept: "Psychological pricing and prestige brand storytelling deconstruction.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:04",
      hookContent: "“Why luxury brands never explain their prices (and why you shouldn't either).”",
      hookTechnique: "Prestige psychology curiosity gap.",
      bodyDuration: "00:04 - 00:40",
      bodyContent: "Analyzing the difference between justifying features vs. conveying craftsmanship, scarcity, and emotional identity.",
      bodyTechnique: "Slow cinematic pacing with classical orchestral audio bed.",
      ctaDuration: "00:40 - 00:50",
      ctaContent: "“Comment 'LUXURY' to receive our brand positioning master guide.”",
      ctaTechnique: "Automated direct response distribution.",
    },
    keyResult: "Client's average order value increased from £280 to £540",
  },
];
