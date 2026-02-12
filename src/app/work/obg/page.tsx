import CompanyLinkPill from "@/components/CompanyLinkPill";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SkillBarProps = {
  skills: string[];
  accentClassName?: string;
};

function SkillBar({ skills, accentClassName }: SkillBarProps) {
  if (!skills?.length) return null;

  return (
    <div
      className={[
        "mt-4 rounded-xl border px-4 py-2 text-sm text-white/85",
        "backdrop-blur",
        accentClassName ?? "bg-sky-500/15 border-sky-400/30",
      ].join(" ")}
    >
      <span className="font-medium text-white/90">Skills:</span>{" "}
      {skills.map((s, i) => (
        <React.Fragment key={`${s}-${i}`}>
          <span className="text-white/80">{s}</span>
          {i !== skills.length - 1 && (
            <span className="mx-2 text-white/35">•</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function SectionShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="mt-2 text-sm leading-relaxed text-white/70">{subtitle}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function MediaGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
}

function MediaGrid2({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {children}
    </div>
  );
}

/** NEW: for Dance Events — aims for one row on desktop */
function MediaGrid4OneRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}

function Card({
  title,
  hideTitle,
  children,
}: {
  title?: string;
  hideTitle?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
      {children}
      {!hideTitle && title ? (
        <div className="mt-3">
          <p className="text-sm font-medium text-white">{title}</p>
        </div>
      ) : null}
    </div>
  );
}


type VideoItem = {
  id: string;
  title: string;
  src?: string;
  embedUrl?: string;
  poster?: string;
};

function VideoCard(item: VideoItem) {
  const { title, src, embedUrl, poster } = item;

  return (
    <Card title={title}>
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
        {embedUrl ? (
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            controls
            preload="metadata"
            poster={poster}
          >
            {src ? <source src={src} /> : null}
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Card>
  );
}

type ImageItem = {
  id: string;
  title: string;
  description?: string;
  src: string;
  alt?: string;
};

function ImageCard(item: ImageItem) {
  const { title, description, src, alt } = item;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <img
          src={src}
          alt={alt ?? title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium text-white">{title}</p>
        {description ? (
          <p className="mt-1 text-xs leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** NEW: Tall portrait-ish card for Dance Events (best default for flyers/posters) */
function TallImageCard(item: ImageItem) {
  const { title, description, src, alt } = item;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60">
        <img
          src={src}
          alt={alt ?? title}
          // "contain" is best for posters so nothing is cropped
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium text-white">{title}</p>
        {description ? (
          <p className="mt-1 text-xs leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** Mixed media for section 3 */
type MixedMediaItem =
  | {
      kind: "image";
      id: string;
      title: string;
      description?: string;
      src: string;
      alt?: string;
      fit?: "cover" | "contain";
    }
  | {
      kind: "video";
      id: string;
      title: string;
      src: string;
      poster?: string;
      description?: string;
      fit?: "cover" | "contain";
    };

function MixedMediaCard(item: MixedMediaItem & { hideTitle?: boolean }) {
  const fitClass = item.fit === "contain" ? "object-contain" : "object-cover";

  if (item.kind === "image") {
    const { title, description, src, alt, hideTitle } = item;

    return (
      <Card title={title} hideTitle={hideTitle}>
        <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60">
          <img
            src={src}
            alt={alt ?? title}
            className={`h-full w-full ${fitClass}`}
            loading="lazy"
          />
        </div>

        {description ? (
          <p className="mt-2 text-sm text-white/80">{description}</p>
        ) : null}
      </Card>
    );
  }

  const { title, src, poster, hideTitle, description } = item;

  return (
    <Card title={title} hideTitle={hideTitle}>
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <video
          className={`h-full w-full ${fitClass}`}
          controls
          preload="metadata"
          poster={poster}
        >
          <source src={src} />
          Your browser does not support the video tag.
        </video>
      </div>
  
      {description ? (
        <p className="mt-2 text-sm text-white/80">{description}</p>
      ) : null}
    </Card>
  );
}
    


export default function OBGPage() {
  const overview =
    "I began dancing in 2023 at Culture Shock Studio in San Diego, despite never having taken a dance class before, and it completely changed my life. As I grew more confident, I joined OBG, a local hip-hop dance team that took training seriously and fostered a strong sense of community. OBG became my home base for learning, performing, filming, and connecting with other dancers. From there, I branched out into helping organize and support events for Culture Shock, New Style Hustle, Illmatics, and Red Bull.";

  const musicVideoSummary =
    "A few music video projects where I supported planning, on-set coordination, and post-production — helping get ideas from concept to final cut.";

  const danceEventsSummary =
    "Dance events and competitions where I helped with logistics, run-of-show, capturing content, and supporting performers/teams.";

  const thirdSummary =
    "Assisted New Style Hustle SD with weekly dance classes and social events, teaching New Style Hustle and supporting event logistics including DJ equipment, tables, tents, and venue setup. Helped foster a safe and welcoming environment for attendees. Also supported the monthly “Illfunction” event series (held the last Thursday of each month) by coordinating setup, managing admissions, preparing gaming and DJ areas, and assisting with overall event operations.";

  const musicVideoSkills = [
    "Adobe Premiere",
    "On-set Support",
    "Story/Blocking",
    "Shot List Assist",
    "Coordination",
  ];

  const danceEventSkills = [
    "Event Organization",
    "Run of Show",
    "Content Capture",
    "Coordination",
    "Logistics",
  ];

  const thirdSkills = [
    "Class Instruction",
    "DJ & AV Setup",
    "Venue Setup & Breakdown",
    "Check-In Management",
    "Community",
  ];


  const musicVideos: VideoItem[] = [
    {
      id: "mv-1",
      title: "Are You That Somebody - Filmed at Libery Station",
      src: "/work/obg/videos/music-video-1.mp4",
      poster: "/work/obg/posters/mv1-poster.png",
    },
    {
      id: "mv-2",
      title: "RnB Love Mashup - Filmed at Liberty Station",
      src: "/work/obg/videos/music-video-2.mp4",
      poster: "/work/obg/posters/mv2-poster.png",
    },
    {
      id: "mv-3",
      title: "Tems Del Mar Fair Set - Filmed at Culture Shock",
      src: "/work/obg/videos/music-video-3.mp4",
      poster: "/work/obg/posters/mv3-poster.png",
    },
    {
      id: "mv-4",
      title: "Don't Let Me Down - Filmed at Drip Studios",
      src: "/work/obg/videos/music-video-4.mp4",
      poster: "/work/obg/posters/mv4-poster.png",
    },
  ];

  /** UPDATED: now 4 items for a single-row layout on desktop */
  const danceEvents: ImageItem[] = [
    {
      id: "ev-1",
      title: "Shock in the Park",
      description: "Annual Culture Shock community celebration.",
      src: "/work/obg/images/event-1.png",
    },
    {
      id: "ev-2",
      title: "RnB 3v3 Battles",
      description: "R&B dance battles at Studio FX.",
      src: "/work/obg/images/event-2.png",
    },
    {
      id: "ev-3",
      title: "Legacy Summer Showcase",
      description: "Legacy Showcase featuring San Diego choreographers.",
      src: "/work/obg/images/event-3.png",
    },
    {
      id: "ev-4",
      title: "SD Del Mar County Fair",
      description: "Dance performances on the Funville Stage at the Del Mar Fair.",
      src: "/work/obg/images/event-4.png",
    },
  ];

  const thirdMedia: MixedMediaItem[] = [
    {
      kind: "image",
      id: "ns-pic-1",
      title: "New Style Pic 1",
      description: "Beginner class & summer session flyer design.",
      src: "/work/obg/images/new-style-pic1.png",
      fit: "contain",
    },
    {
      kind: "image",
      id: "ill-pic-1",
      title: "Illfunction Pic 1",
      description: "Monthly illfunction DJ battle night.",
      src: "/work/obg/images/illfunction-pic1.png",
      fit: "contain",
    },
    {
      kind: "video",
      id: "ns-vid-1",
      title: "New Style Video 1",
      description: "Outdoor social — community session clip.",
      src: "/work/obg/videos/new-style-vid1.mp4",
      poster: "/work/obg/posters/new-style-vid1-poster.png",
    },
    {
      kind: "video",
      id: "ill-vid-1",
      title: "Illfunction Video 1",
      description: "Illfunction night — crowd + energy moment.",
      src: "/work/obg/videos/illfunction-vid1.mp4",
      poster: "/work/obg/posters/illfunction-vid1-poster.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-5xl">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Back
        </Link>

        <header className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
          {/* Title Row */}
          <div className="flex items-center gap-3">
            <Image
              src="/logos/obg.svg"
              alt="OBG logo"
              width={32}
              height={32}
              className="rounded-sm"
            />

            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Oldies But Goodies (OBG)
            </h1>

            <CompanyLinkPill
              href="https://www.instagram.com/obg.sandiego/"
              label="Instagram"
            />
          </div>

          {/* Tightened Subtitle */}
          <p className="mt-2 text-white/70">
            Dance. Community. Behind the scenes.
          </p>

          {/* Overview Card */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-white/80">
            <p className="text-sm leading-relaxed">
              I began dancing in 2023 at Culture Shock Studio in San Diego, despite
              never having taken a dance class before, and it completely changed my
              life. As I grew more confident, I joined OBG, a local hip-hop dance
              team that took training seriously and fostered a strong sense of
              community. OBG became my home base for learning, performing, filming,
              and connecting with other dancers. From there, I branched out into
              helping organize and support events for Culture Shock, New Style
              Hustle, Illmatics, and Red Bull.
            </p>
          </div>

          {/* Bridge / Section Intro */}
          <div className="mt-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
                Selected work below
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="mt-3 text-sm text-white/60 text-center">
              A few highlights from performances, projects, and events.
            </p>
          </div>
        </header>


        <SectionShell title="Music Video Projects" subtitle={musicVideoSummary}>
          <SkillBar
            skills={musicVideoSkills}
            accentClassName="bg-emerald-500/15 border-emerald-400/30"
          />
          <MediaGrid2>
            {musicVideos.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </MediaGrid2>
        </SectionShell>

        <SectionShell
          title="Dance Events & Competitions"
          subtitle={danceEventsSummary}
        >
          <SkillBar
            skills={danceEventSkills}
            accentClassName="bg-sky-500/15 border-sky-400/30"
          />

          {/* One row on desktop + taller, poster-like cards */}
          <MediaGrid4OneRow>
            {danceEvents.map((img) => (
              <TallImageCard key={img.id} {...img} />
            ))}
          </MediaGrid4OneRow>
        </SectionShell>

        <SectionShell
          title="New Style Hustle SD & illfunctions"
          subtitle={thirdSummary}
        >
          <SkillBar
            skills={thirdSkills}
            accentClassName="bg-fuchsia-500/15 border-fuchsia-400/30"
          />
        <MediaGrid2>
          {thirdMedia.map((m) => (
            <MixedMediaCard key={m.id} {...m} hideTitle />
          ))}
        </MediaGrid2>
        </SectionShell>
      </main>
    </div>
  );
}
