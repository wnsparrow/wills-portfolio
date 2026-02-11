import Link from "next/link";
import React from "react";

type SkillBarProps = {
  skills: string[];
  accentClassName?: string; // e.g. "bg-sky-500/15 border-sky-400/30"
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

// Default grid: up to 4 columns on wide screens
function MediaGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
}

// Music videos grid: max 2 columns (2x2 for 4 items)
function MediaGrid2({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
      {children}
      {title ? (
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
  src?: string; // local/public mp4 path like "/work/obg/videos/video1.mp4"
  embedUrl?: string; // youtube/vimeo embed url
};

function VideoCard(item: VideoItem) {
  const { title, src, embedUrl } = item;

  return (
    <Card title={title}>
      {/* Slightly taller than aspect-video can feel "bigger" in grid */}
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
          <video className="h-full w-full object-cover" controls preload="metadata">
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
  src: string; // e.g. "/obg/images/event1.jpg"
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
          <p className="mt-1 text-xs leading-relaxed text-white/70">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

export default function OBGPage() {
  const overview =
    "After never taking a dance class my entire life, I started dancing in 2023 — and it genuinely changed my life. OBG became my home base for learning, performing, filming, and building community.";

  const musicVideoSummary =
    "A few music video projects where I supported planning, on-set coordination, and post-production — helping get ideas from concept to final cut.";

  const danceEventsSummary =
    "Dance events and competitions where I helped with logistics, run-of-show, capturing content, and supporting performers/teams.";

  const thirdSummary =
    "A third bucket for anything else you want (workshops, socials, behind-the-scenes, brand content, etc.).";

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

  const thirdSkills = ["(Add)", "(Add)", "(Add)"];

  const musicVideos: VideoItem[] = [
    { id: "mv-1", title: "Music Video Project 1", src: "/work/obg/videos/music-video-1.mp4" },
    { id: "mv-2", title: "Music Video Project 2", src: "/work/obg/videos/music-video-2.mp4" },
    { id: "mv-3", title: "Music Video Project 3", src: "/work/obg/videos/music-video-3.mp4" },
    { id: "mv-4", title: "Music Video Project 4", src: "/work/obg/videos/music-video-4.mp4" },
  ];

  const danceEvents: ImageItem[] = [
    {
      id: "ev-1",
      title: "Event / Competition 1",
      description: "What it was + what you handled.",
      src: "/obg/images/event-1.jpg",
    },
    {
      id: "ev-2",
      title: "Event / Competition 2",
      description: "What it was + what you handled.",
      src: "/obg/images/event-2.jpg",
    },
  ];

  const thirdCategory: ImageItem[] = [
    {
      id: "th-1",
      title: "Third Category Item 1",
      description: "Short description.",
      src: "/obg/images/third-1.jpg",
    },
    {
      id: "th-2",
      title: "Third Category Item 2",
      description: "Short description.",
      src: "/obg/images/third-2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-5xl">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Back
        </Link>

        {/* TOP OVERVIEW */}
        <header className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Oldies But Goodies (OBG)
              </h1>
              <p className="mt-2 text-white/70">
                Dance, community, projects, and the work behind the scenes.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-white/80">
            <p className="text-sm leading-relaxed">{overview}</p>
          </div>
        </header>

        {/* SECTION 1: MUSIC VIDEOS (2x2 grid + title only) */}
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

        {/* SECTION 2: DANCE EVENTS */}
        <SectionShell
          title="Dance Events & Competitions"
          subtitle={danceEventsSummary}
        >
          <SkillBar
            skills={danceEventSkills}
            accentClassName="bg-sky-500/15 border-sky-400/30"
          />
          <MediaGrid>
            {danceEvents.map((img) => (
              <ImageCard key={img.id} {...img} />
            ))}
          </MediaGrid>
        </SectionShell>

        {/* SECTION 3: THIRD CATEGORY */}
        <SectionShell title="(Third Category)" subtitle={thirdSummary}>
          <SkillBar
            skills={thirdSkills}
            accentClassName="bg-fuchsia-500/15 border-fuchsia-400/30"
          />
          <MediaGrid>
            {thirdCategory.map((img) => (
              <ImageCard key={img.id} {...img} />
            ))}
          </MediaGrid>
        </SectionShell>

        <div className="mt-12 text-xs text-white/45">
          Tip: anything inside <span className="text-white/70">/public</span> is
          served from the root URL (e.g.{" "}
          <span className="text-white/70">/work/obg/videos/...</span>).
        </div>
      </main>
    </div>
  );
}
