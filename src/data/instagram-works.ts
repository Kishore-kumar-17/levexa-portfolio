export interface ClientReel {
  id: string;
  clientName: string;
  clientHandle: string;
  /** Instagram reel shortcode, e.g. "DSFP44xk3Bi" from instagram.com/reel/DSFP44xk3Bi/ */
  reelCode: string;
  views: string;
  likes: string;
  comments: string;
}

// Mirrors the live Instagram profile; update the counts when they change
export const instagramProfileData = {
  handle: "levelupwith_lavanya",
  displayName: "Lavanya | Revenue Marketer",
  avatarUrl: "/images/about/founder-lavanya-avatar.jpg",
  profileUrl: "https://www.instagram.com/levelupwith_lavanya/",
  messageUrl: "https://ig.me/m/levelupwith_lavanya",
  counts: {
    posts: "16",
    followers: "958",
    following: "15",
  },
  bio: [
    "I help business turn marketing into measurable revenue",
    "Founder | Content , leads & Sales systems",
    "Join our community👇🏻",
  ],
  link: {
    label: "chat.whatsapp.com/LaKzGGzM66LIvlvPUbsZMY",
    url: "https://chat.whatsapp.com/LaKzGGzM66LIvlvPUbsZMY",
  },
};

export const reelUrl = (reel: ClientReel) => `https://www.instagram.com/reel/${reel.reelCode}/`;

// Client reels scripted by Levexa; view/like/comment counts as recorded at publication
export const clientReels: ClientReel[] = [
  {
    id: "reel-01",
    clientName: "ArunBrandMonk | Business Coach",
    clientHandle: "@arunbrandmonk",
    reelCode: "DSFP44xk3Bi",
    views: "485K",
    likes: "2,758",
    comments: "28",
  },
  {
    id: "reel-02",
    clientName: "Varshan | Entrepreneur",
    clientHandle: "@buildwithvarshan_",
    reelCode: "DcYffSXzwqY",
    views: "920K",
    likes: "7,169",
    comments: "7",
  },
  {
    id: "reel-03",
    clientName: "Ayurveda Mompreneur",
    clientHandle: "@sriranganayagiofficial_",
    reelCode: "DZujkB1zdQM",
    views: "2.8M",
    likes: "22K",
    comments: "17K",
  },
  {
    id: "reel-04",
    clientName: "Balance With Us • Wondr Diamonds",
    clientHandle: "@balance_with_us",
    reelCode: "DPgiv1LD2Ep",
    views: "1.9M",
    likes: "16K",
    comments: "1,141",
  },
  {
    id: "reel-05",
    clientName: "Gradeze India • Higher Education",
    clientHandle: "@gradeze.india",
    reelCode: "DUAIwfCEfnW",
    views: "740K",
    likes: "4,541",
    comments: "3,291",
  },
  {
    id: "reel-06",
    clientName: "Lavanya | Business Growth Strategist",
    clientHandle: "@levelupwith_lavanya",
    reelCode: "DdrEWUmR1Yw",
    views: "320K",
    likes: "878",
    comments: "8",
  },
];
