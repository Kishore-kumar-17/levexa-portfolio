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
  handle: "levelupwith_lavanya",
  displayName: "Lavanya • Business Growth Strategist & Script Architect",
  verified: true,
  avatarUrl: "/images/about/who-we-are-team.jpg",
  profileUrl: "https://www.instagram.com/levelupwith_lavanya/",
  bio: [
    "✍️ High-retention scriptwriting & content architecture for founders and brands",
    "🎯 Viral hooks • Relational pacing • ManyChat lead-generation systems",
    "📈 6.8M+ Organic views & 25,000+ comment leads across client campaigns",
    "📍 Strategic Advisory & Global Creative Direction",
  ],
  stats: {
    reelsScripted: "140+",
    totalViews: "6.8M+",
    avgRetention: "84.2%",
    clientsScaled: "38",
  },
  highlights: [
    { title: "Viral Hooks", icon: "🔥", count: "18" },
    { title: "Client Wins", icon: "🏆", count: "35" },
    { title: "Frameworks", icon: "📐", count: "12" },
    { title: "ManyChat Leads", icon: "💬", count: "24" },
    { title: "Case Studies", icon: "💡", count: "40" },
  ],
};

export const clientScriptWorks: ScriptClientWork[] = [
  {
    id: "reel-01",
    clientName: "ArunBrandMonk | Business Coach",
    clientHandle: "@arunbrandmonk",
    category: "Founders & Tech",
    instagramUrl: "https://www.instagram.com/reel/DSFP44xk3Bi/?exln=aHN0Z3k5b2ZjZWdj",
    thumbnail: "/images/pillars/01-growth-strategy.jpg",
    views: "485K",
    likes: "2,758",
    shares: "890",
    scriptHook: "“The biggest lie about entrepreneurship they sell you on social media.”",
    scriptConcept: "Negative-bias contrarian mythbuster exposing 24/7 hustle burnout vs. building scalable operating SOPs.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:03",
      hookContent: "“The biggest lie about entrepreneurship they sell you on social media 👆🏻”",
      hookTechnique: "Direct contrarian statement + visual upward gesture interrupting mindless scrolling.",
      bodyDuration: "00:03 - 00:45",
      bodyContent: "Contrasting founders trapped working 18-hour days doing repetitive micro-tasks against high-velocity operators who deploy delegation and automation systems.",
      bodyTechnique: "Dynamic text accents on screen + steady conversational pacing escalation.",
      ctaDuration: "00:45 - 00:55",
      ctaContent: "“Save this reel and share it with a founder friend who needs to stop glorifying burnout.”",
      ctaTechnique: "Peer-to-peer distribution prompt driving high bookmark-to-share ratios.",
    },
    keyResult: "2,750+ likes, 485K views & massive founder reposts",
  },
  {
    id: "reel-02",
    clientName: "Varshan | Entrepreneur",
    clientHandle: "@buildwithvarshan_",
    category: "Health & Lifestyle",
    instagramUrl: "https://www.instagram.com/reel/DcYffSXzwqY/?mdxt=MTdodmhwcmY5MXJvYw==",
    thumbnail: "/images/process/02-strategy.jpg",
    views: "920K",
    likes: "7,169",
    shares: "3,400",
    scriptHook: "“Share and ask these 4 deep questions to your partner right now.”",
    scriptConcept: "High-retention emotional connection framework structured as a sequential 4-part relational challenge.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:03",
      hookContent: "“Share and ask these 4 deep questions to your partner right now 🫶🏻”",
      hookTechnique: "Curiosity loop paired with high-intent relational qualification.",
      bodyDuration: "00:03 - 00:42",
      bodyContent: "Step-by-step reveal of 4 psychological intimacy inquiries assessing communication, growth mindset, mutual honesty, and long-term values.",
      bodyTechnique: "Numbered countdown pacing keeping viewer completion rate above 85%.",
      ctaDuration: "00:42 - 00:50",
      ctaContent: "“Send this to your partner and see which question catches them off guard.”",
      ctaTechnique: "Direct viral loop (every share guarantees a second viewer who watches the full reel).",
    },
    keyResult: "7,100+ likes & 3,400+ direct DM partner shares",
  },
  {
    id: "reel-03",
    clientName: "Ayurveda Mompreneur",
    clientHandle: "@sriranganayagiofficial_",
    category: "E-Commerce",
    instagramUrl: "https://www.instagram.com/reel/DZujkB1zdQM/?xtok=MWRvYzVlZWszZGZrdw==",
    thumbnail: "/images/process/03-design.jpg",
    views: "2.8M",
    likes: "22K",
    shares: "17K",
    scriptHook: "“The ancient beauty secret behind Kerala girls that nobody talks about.”",
    scriptConcept: "Heritage curiosity gap paired with clean organic botanical formulation proof that sparked viral commenting.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:03",
      hookContent: "“Beauty secret behind Kerala girls 🤫”",
      hookTechnique: "Confidential insider framing ('secret' + whisper emoji) sparking powerful natural curiosity.",
      bodyDuration: "00:03 - 00:44",
      bodyContent: "Demystifying 3 natural botanical herbs and ancient scalp-nourishing rituals passed down through generations in South India.",
      bodyTechnique: "Aesthetic macro formulation visuals with soothing tactile ASMR audio design.",
      ctaDuration: "00:44 - 00:54",
      ctaContent: "“Comment 'HERBAL' and I will send you our complete botanical recipe & sourcing guide.”",
      ctaTechnique: "Automated keyword DM funnel yielding 17,000+ comment interactions.",
    },
    keyResult: "2.8M views, 22K likes & 17,000+ comment interactions",
  },
  {
    id: "reel-04",
    clientName: "Balance With Us • Wondr Diamonds",
    clientHandle: "@balance_with_us",
    category: "E-Commerce",
    instagramUrl: "https://www.instagram.com/reel/DPgiv1LD2Ep/?dlrf=MjN4ZzFkeG1zc3N2",
    thumbnail: "/images/process/04-development.jpg",
    views: "1.9M",
    likes: "16K",
    shares: "1.1K",
    scriptHook: "“Black makes you unstoppable: Why power dressing completely alters executive perception.”",
    scriptConcept: "Prestige psychology and high-status aesthetic framing featuring sustainable fine diamond jewelry.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:04",
      hookContent: "“Black makes you unstoppable 🔥 #Jewellery @wondrdiamonds”",
      hookTechnique: "Identity elevation hook: connecting personal color psychology with effortless leadership authority.",
      bodyDuration: "00:04 - 00:39",
      bodyContent: "Cinematic styling transition displaying bespoke diamond jewelry paired with clean modern executive silhouettes.",
      bodyTechnique: "Dramatic lighting shift and precise beat-synced rhythm maintaining high visual tension.",
      ctaDuration: "00:39 - 00:48",
      ctaContent: "“Drop a 🔥 in the comments if black is your power color.”",
      ctaTechnique: "Instant-reaction micro-commitment trigger driving 1,140+ active comments.",
    },
    keyResult: "16,000+ likes, 1.9M views & surge in diamond catalog inquiries",
  },
  {
    id: "reel-05",
    clientName: "Gradeze India • Higher Education",
    clientHandle: "@gradeze.india",
    category: "B2B SaaS",
    instagramUrl: "https://www.instagram.com/reel/DUAIwfCEfnW/?exln=NHlvZjJ1dHRkMW9v",
    thumbnail: "/images/process/05-optimization.jpg",
    views: "740K",
    likes: "4,541",
    shares: "3.2K",
    scriptHook: "“Confused between college courses? Stop guessing your future career.”",
    scriptConcept: "Pain-point relief framework transforming student decision paralysis into qualified admissions inquiries.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:03",
      hookContent: "“Confused between courses? 😵‍💫 Stop guessing your career path.”",
      hookTechnique: "Immediate emotional resonance diagnosing student & parent career anxiety.",
      bodyDuration: "00:03 - 00:40",
      bodyContent: "Comparing conventional career guesswork with a structured 3-pillar aptitude assessment system to choose future-proof university paths.",
      bodyTechnique: "Quick-cut kinetic graphic cards displaying high-growth industry salary bands.",
      ctaDuration: "00:40 - 00:50",
      ctaContent: "“Comment 'GUIDE' and our certified senior education advisors will reach out to you.”",
      ctaTechnique: "Direct ManyChat lead qualification automation driving 3,290+ organic lead comments.",
    },
    keyResult: "3,291 qualified admissions leads via automated comment trigger",
  },
  {
    id: "reel-06",
    clientName: "Lavanya | Business Growth Strategist",
    clientHandle: "@levelupwith_lavanya",
    category: "Finance & Wealth",
    instagramUrl: "https://www.instagram.com/reel/DdrEWUmR1Yw/?obrf=NXVrc2Z3MmwxYXVj",
    thumbnail: "/images/process/06-growth.jpg",
    views: "320K",
    likes: "878",
    shares: "410",
    scriptHook: "“Girls, you need to listen to this: Why financial self-reliance is your ultimate superpower.”",
    scriptConcept: "Empowering personal sovereignty script breaking down financial independence, resilience, and wealth mindset.",
    scriptBreakdown: {
      hookDuration: "00:00 - 00:04",
      hookContent: "“Girls, you should listen to this 🫶🏼”",
      hookTechnique: "Intimate sisterhood framing with high-empathy direct-to-camera eye contact.",
      bodyDuration: "00:04 - 00:48",
      bodyContent: "Deconstructing the hidden emotional and life costs of dependency, giving 3 non-negotiable wealth principles every woman must build.",
      bodyTechnique: "Authentic, raw vocal delivery without distracting gimmicks, maximizing emotional trust.",
      ctaDuration: "00:48 - 00:58",
      ctaContent: "“Save this for the next time you need a reminder to bet on yourself first.”",
      ctaTechnique: "High-retention personal affirmation bookmark trigger creating top 2% save rate.",
    },
    keyResult: "Top 2% algorithm save rate & authoritative personal brand affinity",
  },
];
