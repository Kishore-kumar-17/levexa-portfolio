import { clientReels, ClientReel } from "@/data/instagram-works";
import { formatCount, parseCount } from "@/lib/counts";

// Real totals and best single results, computed from the featured client reels so every
// page shows the same numbers as the reel cards.
const sum = (key: "views" | "likes" | "comments") =>
  formatCount(clientReels.reduce((total, reel) => total + parseCount(reel[key]), 0));

const best = (key: "views" | "likes" | "comments"): string =>
  clientReels.reduce((top: ClientReel, reel) => (parseCount(reel[key]) > parseCount(top[key]) ? reel : top))[key];

export const reelTotals = {
  views: sum("views"),
  likes: sum("likes"),
  comments: sum("comments"),
  reels: String(clientReels.length),
};

export const reelBests = {
  views: best("views"),
  likes: best("likes"),
  comments: best("comments"),
};
