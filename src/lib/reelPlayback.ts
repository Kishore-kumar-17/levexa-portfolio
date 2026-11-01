"use client";

// Coordinates reel playback so only one reel plays at a time across the page.
// Each card registers a pause() for itself; making a reel active pauses the previous one.

type Player = { pause: () => void };

const players = new Map<string, Player>();
let activeId: string | null = null;

export function registerPlayer(id: string, player: Player): () => void {
  players.set(id, player);
  return () => {
    players.delete(id);
    if (activeId === id) activeId = null;
  };
}

/** Marks a reel as the one playing and pauses whichever reel was playing before. */
export function setActiveReel(id: string): void {
  if (activeId && activeId !== id) players.get(activeId)?.pause();
  activeId = id;
}

export function clearActiveReel(id: string): void {
  if (activeId === id) activeId = null;
}

export function getActiveReel(): string | null {
  return activeId;
}

// Self-hosted videos currently on screen (insertion order), used to hand autoplay over to
// the next visible video when the playing one scrolls away.
const visibleVideos = new Map<string, () => void>();

export function markVideoVisible(id: string, play: () => void): void {
  visibleVideos.set(id, play);
}

export function markVideoHidden(id: string): void {
  visibleVideos.delete(id);
}

export function firstVisibleVideo(): [string, () => void] | undefined {
  return visibleVideos.entries().next().value;
}
