import React from "react";
import Image from "next/image";
import { instagramProfileData, clientReels } from "@/data/instagram-works";
import { ReelRow } from "@/components/portfolio/ReelCard";
import { Clapperboard, Link2, MoreHorizontal, UserPlus } from "lucide-react";

export const InstagramProfileShowcase: React.FC = () => {
  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. INSTAGRAM PROFILE HEADER (mirrors the live profile)                    */}
      {/* ========================================================================= */}
      <div className="bg-[#07192F] text-[#FAF8F5] rounded-3xl border border-[#0E2849] shadow-sm overflow-hidden mb-10 sm:mb-12">
        <div className="px-5 sm:px-10 pt-7 sm:pt-10 pb-6 sm:pb-8">
          <div className="flex items-center sm:items-start gap-5 sm:gap-10">
            {/* Avatar */}
            <a
              href={instagramProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`@${instagramProfileData.handle} on Instagram`}
              className="relative shrink-0 w-[84px] h-[84px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden bg-[#0E2849] ring-2 ring-[#C88A1A] ring-offset-[3px] sm:ring-offset-4 ring-offset-[#07192F]"
            >
              <Image
                src={instagramProfileData.avatarUrl}
                alt={instagramProfileData.displayName}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 84px, 150px"
              />
            </a>

            {/* Identity, counts, bio and actions */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-lg sm:text-xl font-semibold truncate">{instagramProfileData.handle}</h2>
                <MoreHorizontal className="w-5 h-5 text-[#FAF8F5]/80 shrink-0" aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-[15px] text-stone-300 mt-1">{instagramProfileData.displayName}</p>

              {/* Counts (desktop position) */}
              <ul className="hidden sm:flex items-center gap-8 mt-4 text-[15px]">
                <li><span className="font-semibold">{instagramProfileData.counts.posts}</span> posts</li>
                <li><span className="font-semibold">{instagramProfileData.counts.followers}</span> followers</li>
                <li><span className="font-semibold">{instagramProfileData.counts.following}</span> following</li>
              </ul>

              {/* Bio (desktop position) */}
              <div className="hidden sm:block mt-4 text-[15px] leading-snug space-y-0.5">
                {instagramProfileData.bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <a
                  href={instagramProfileData.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 pt-1 font-semibold text-[#E4AB3C] hover:underline break-all"
                >
                  <Link2 className="w-4 h-4 shrink-0 -rotate-45" aria-hidden="true" />
                  {instagramProfileData.link.label}
                </a>
              </div>
            </div>
          </div>

          {/* Counts + bio (mobile position, full width under the avatar) */}
          <div className="sm:hidden mt-4">
            <ul className="flex items-center justify-between max-w-xs text-sm">
              <li><span className="font-semibold">{instagramProfileData.counts.posts}</span> posts</li>
              <li><span className="font-semibold">{instagramProfileData.counts.followers}</span> followers</li>
              <li><span className="font-semibold">{instagramProfileData.counts.following}</span> following</li>
            </ul>
            <div className="mt-3 text-sm leading-snug space-y-0.5">
              {instagramProfileData.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a
                href={instagramProfileData.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-1 font-semibold text-[#E4AB3C] hover:underline break-all"
              >
                <Link2 className="w-4 h-4 shrink-0 -rotate-45" aria-hidden="true" />
                {instagramProfileData.link.label}
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 sm:mt-7 flex items-center gap-2">
            <a
              href={instagramProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center h-10 sm:h-11 rounded-xl bg-[#C88A1A] hover:bg-[#F5A900] text-[#07192F] text-sm font-bold transition-colors"
            >
              Follow
            </a>
            <a
              href={instagramProfileData.messageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center h-10 sm:h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-[#FAF8F5] text-sm font-semibold transition-colors"
            >
              Message
            </a>
            <a
              href={instagramProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-[#FAF8F5] transition-colors"
            >
              <UserPlus className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reels tab (as on the Instagram profile) */}
        <div className="border-t border-white/10 flex justify-center">
          <span className="-mt-px py-4 px-8 flex items-center gap-2 border-t-2 border-[#C88A1A] text-xs font-semibold uppercase tracking-wider">
            <Clapperboard className="w-4 h-4" aria-hidden="true" />
            Client Reels ({clientReels.length})
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REELS: autoplaying video when a file is set, Instagram embed otherwise   */}
      {/* ========================================================================= */}
      <ReelRow reels={clientReels} />
    </div>
  );
};
