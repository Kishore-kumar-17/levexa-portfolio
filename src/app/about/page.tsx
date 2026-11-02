import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Instagram, Lightbulb, LineChart, RefreshCw, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Underline } from "@/components/ui/Underline";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PageBanner } from "@/components/sections/PageBanner";
import { GetStartedBox } from "@/components/sections/GetStartedBox";
import { instagramProfileData } from "@/data/instagram-works";
import { companyConfig } from "@/data/company";
import { reelTotals } from "@/lib/reelStats";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "About Levexa — Strategic Business Growth Advisory",
  description:
    "Levexa is a founder-led growth advisory helping businesses turn marketing into measurable revenue by connecting strategy, content, sales and automation.",
  path: "/about",
});

const VALUES = [
  { title: "Clarity", desc: "We focus on the few numbers that truly drive your growth.", icon: Lightbulb },
  { title: "Measurable impact", desc: "Every recommendation links to leads, sales or revenue.", icon: LineChart },
  { title: "Ownership", desc: "We work alongside you until the plan delivers.", icon: ShieldCheck },
  { title: "Continuous improvement", desc: "We test, measure and refine as your market changes.", icon: RefreshCw },
];

export default function AboutPage() {
  const whatsappHref = `${companyConfig.socials.whatsapp}?text=${encodeURIComponent(
    companyConfig.socials.whatsappGreeting
  )}`;

  return (
    <div className="bg-[#FAF8F5] text-[#07192F]">
      {/* 1. Banner */}
      <PageBanner
        image="/images/process/01-discovery.jpg"
        title={
          <>
            About us? It&apos;s really about <span className="text-[#C88A1A]">you.</span>
          </>
        }
        subtitle={
          <>
            Most About pages talk about the agency. Ours starts with you: your goals, your customers and
            the revenue you want to reach. No recycled templates and no vanity metrics, just a{" "}
            <Underline>clear plan</Underline> and steady execution that move your numbers.
          </>
        }
        ctaLabel="Work with us"
        ctaHref="/contact"
      />

      {/* 2. Our story */}
      <section className="py-20 sm:py-24 bg-white border-t border-stone-200/70">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="type-h2 mb-8">
                <Underline>Levexa</Underline>…
              </h2>
              <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
                <p>
                  <span className="text-[#C88A1A] font-semibold">Levexa</span> is a founder-led growth advisory,
                  built on one simple idea: marketing only matters when it turns into revenue.
                </p>
                <p>
                  <span className="text-[#C88A1A] font-semibold">Lavanya</span>, our founder, saw the same
                  problem again and again. Businesses posted content, ran ads and hired salespeople, but each
                  part worked on its own. Attention never became enquiries, and enquiries never became
                  customers.
                </p>
                <p>
                  So Levexa connects all of it: a clear strategy, content that people stop for, a sales
                  process that closes, and automation that keeps everything running. Every engagement is led by
                  Lavanya personally, from the first call to the results.
                </p>
                <p>
                  Today we script reels, build brands and set up sales systems for founders, coaches and
                  growing businesses, and help them reach new customers in the{" "}
                  <span className="text-[#C88A1A] font-semibold">digital world</span>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:ml-auto aspect-[4/5] rounded-3xl overflow-hidden border border-stone-200 shadow-card-elevated bg-stone-100">
                <Image
                  src="/images/about/founder-lavanya.jpg"
                  alt="Lavanya, Founder & CEO of Levexa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl bg-[#07192F]/85 backdrop-blur-md border border-white/10">
                  <p className="text-base font-bold text-white">Lavanya</p>
                  <p className="text-xs font-mono font-semibold text-[#E4AB3C] uppercase tracking-wider">
                    Founder &amp; CEO, Levexa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Community + follow */}
      <section className="py-20 sm:py-24 border-t border-stone-200/70">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Instagram profile card */}
            <a
              href={instagramProfileData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md mx-auto w-full rounded-2xl bg-white border border-stone-200 text-[#07192F] p-6 shadow-card-elevated transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#C88A1A] ring-offset-2 shrink-0">
                  <Image src={instagramProfileData.avatarUrl} alt="" fill sizes="80px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold truncate">{instagramProfileData.handle}</p>
                  <ul className="flex gap-4 text-sm mt-1.5">
                    <li><span className="font-bold">{instagramProfileData.counts.posts}</span> posts</li>
                    <li><span className="font-bold">{instagramProfileData.counts.followers}</span> followers</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-sm leading-snug space-y-0.5">
                <p className="font-semibold">{instagramProfileData.displayName}</p>
                {instagramProfileData.bio.slice(0, 2).map((line) => (
                  <p key={line} className="text-slate-700">{line}</p>
                ))}
              </div>
              <span className="mt-5 flex items-center justify-center gap-2 h-10 rounded-lg bg-[#07192F] text-white text-sm font-semibold">
                <Instagram className="w-4 h-4" aria-hidden="true" />
                View on Instagram
              </span>
            </a>

            <div>
              <h2 className="type-h2 mb-6">
                Join the <span className="text-[#C88A1A]">Levexa community</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8">
                Get Lavanya&apos;s practical tips on content, leads and sales, straight to your WhatsApp. If
                you&apos;re ready to grow your brand, reach out to Lavanya and the team directly.
              </p>
              <a
                href={instagramProfileData.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Users className="w-4 h-4" aria-hidden="true" />
                Join the community
              </a>

              <h3 className="text-xl font-bold mt-12 mb-4">Follow Lavanya</h3>
              <div className="flex items-center gap-3">
                <a
                  href={companyConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lavanya on Instagram"
                  className="w-11 h-11 rounded-full bg-[#C88A1A] text-[#07192F] flex items-center justify-center hover:bg-[#F5A900] transition-colors"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Levexa on WhatsApp"
                  className="w-11 h-11 rounded-full bg-[#C88A1A] text-[#07192F] flex items-center justify-center hover:bg-[#F5A900] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Proof band */}
      <section className="bg-[#C88A1A] text-[#07192F] py-12 sm:py-14">
        <Container>
          <p className="text-center text-2xl sm:text-3xl font-bold tracking-tight max-w-4xl mx-auto leading-snug">
            Reels scripted by Levexa have earned{" "}
            <span className="font-mono">{reelTotals.views}</span> views for our clients, and we&apos;re only
            getting started!
          </p>
        </Container>
      </section>

      {/* 5. Levexa is… */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="type-h2 mb-6">
              Levexa <Underline>is…</Underline>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
              …a growth partner for businesses that want results they can measure. We plan your strategy,
              create content that earns attention, train your team to close, and automate the follow-up, so
              you get a stronger brand, more leads and more sales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                  <Icon className="w-7 h-7 text-[#C88A1A] mb-5" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-base text-slate-700 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. Closing */}
      <GetStartedBox />
    </div>
  );
}
