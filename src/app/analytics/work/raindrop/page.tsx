import CompanyLinkPill from "@/components/CompanyLinkPill";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    id: "account-1",
    title: "DandyMen",
    subtitle: "Production Assistant",
    blurb:
      "Coordinated street-style interviews and on-set logistics to keep production running smoothly.",
  },
  {
    id: "account-2",
    title: "Laundry Sauce",
    subtitle: "Production Assistant",
    blurb:
      "Helped execute a holiday product shoot through set styling and brand-consistent visuals.",
  },
  {
    id: "account-3",
    title: "Supreme Source",
    subtitle: "Production Assistant",
    blurb:
      "Supported comedic commercial shoot with props, technical setup, and seamless scene transitions.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-24">
      <h2 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-relaxed text-white/80">{children}</div>
    </section>
  );
}

function HighlightCard({
  id,
  title,
  subtitle,
  blurb,
}: {
  id: string;
  title: string;
  subtitle: string;
  blurb: string;
}) {
  return (
    <a
      href={`#${id}`}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-1 text-xs text-white/60">{subtitle}</p>
        </div>
        <span className="text-white/60 transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
      <p className="mt-3 text-sm text-white/75">{blurb}</p>
      <p className="mt-4 text-xs font-medium text-white/70 group-hover:text-white">
        Jump to details
      </p>
    </a>
  );
}

function CampaignDetail({
  id,
  title,
  imageSrc,
  children,
}: {
  id: string;
  title: string;
  imageSrc: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-24">
      <h2 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-sm">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={imageSrc}
                alt={`${title} image`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}



export default function RaindropCaseStudyPage() {
  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <Link href="/analytics/work" className="text-sm text-white/70 hover:text-white">
          ← Back to Work
        </Link>

        <header className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/raindrop.svg"
            alt="Raindrop Marketing logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Raindrop
          </h1>
        </div>

          <CompanyLinkPill
            href="https://raindrop.agency"
            label="Website"
          />
        </div>
          <p className="mt-2 text-white/70 text-justify">
          I also worked part-time with Raindrop as a Production Assistant, supporting commercial, social, and branded shoots. I handled on-set coordination, props and wardrobe, lighting/equipment support, street interview outreach, and crew logistics, helping keep productions running smoothly while maintaining a relaxed, organized environment.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Production Support</Pill>
            <Pill>Skills: Google Workspace • StudioBinder • ClickUp • Adobe Creative Suite • Coordination • Communication • Logistics • Organization</Pill>
            <Pill>Timeline: 2023 - 2025</Pill>
          </div>
        </header>

        {/* <Section title="Overview">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Objective:</strong> Support teams and projects so production stays organized, efficient, and on schedule.
            </li>
            <li>
              <strong>My role:</strong> Assist with coordination, asset organization, shoot-day support, and delivery tracking.
            </li>
          </ul>
        </Section> */}

        <Section title="Highlights">
          <p className="mb-4 text-white/70">
            A few mini-projects / accounts I supported at Raindrop:
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <HighlightCard key={h.id} {...h} />
            ))}
          </div>
        </Section>

        {/* Detail sections (anchors) */}
        <CampaignDetail
          id="account-1"
          title="DandyMen"
          imageSrc="/work/raindrop/campaign-1.png"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context:</span>{" "}
              Raindrop partnered with DandyMen to film a people-on-the-street style campaign capturing authentic reactions to DandyMen hair products at Pure Project Brewery in North Park, San Diego.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              Supported on-location production logistics including coordinating interview setup, assisting with lighting placement, organizing wardrobe and props, and managing crew needs throughout the shoot. Helped recruit participants, provided on-camera support when needed, and assisted with equipment staging, shot transitions, and general set organization to keep production moving efficiently.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Contributed to a relaxed and welcoming environment that encouraged genuine participant interactions, resulting in more natural on-camera responses and smoother interview flow across multiple takes.
            </li>
            <li>
              <a
                href="https://vimeo.com/854417328"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                  View Work (Vimeo) ↗
              </a>
            </li>
          </ul>
        </CampaignDetail>

        <CampaignDetail
          id="account-2"
          title="Laundry Sauce"
          imageSrc="/work/raindrop/campaign-2.png"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context:</span>{" "}
              Raindrop partnered with Laundry Sauce to produce a holiday-themed still photography campaign highlighting a new seasonal product line.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              Assisted with set styling and product presentation, including assembling and decorating holiday set pieces, organizing products by color and category, preparing wardrobe through steaming and arrangement, and refining small visual details such as ribbons, bows, and prop placement to align with creative direction.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Helped maintain a cohesive visual aesthetic across shots, enabling efficient scene resets and supporting a polished, brand-consistent final image set.
            </li>
            <li>
              <a
                href="https://www.instagram.com/reel/C0m1OP9SGRW/?utm_source=ig_web_copy_link&igshid=MjJkMmIyYzQxYw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                  View Work (Instagram) ↗
              </a>
            </li>
          </ul>
        </CampaignDetail>

        <CampaignDetail
          id="account-3"
          title="Supreme Source"
          imageSrc="/work/raindrop/campaign-3.png"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context:</span>{" "}
              Raindrop partnered with Supreme Source to produce a series of comedic digital spots introducing a new pet food product line.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              Supported multi-scene shoot execution through prop fabrication and setup, assisting the head of props with asset organization and continuity, and serving as on-camera stand-in during lighting and framing tests. Collaborated with lighting, camera, and audio teams to prepare scenes, stage equipment, and facilitate smooth set builds and breakdowns while managing supplies and crew support needs throughout the day.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Helped sustain production momentum across multiple locations and setups by reinforcing prop readiness, technical preparation, and efficient scene transitions, allowing the creative team to focus on performance, timing, and comedic delivery.
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=NnDFdSi8Enk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                  View Work (YouTube) ↗
              </a>
            </li>
          </ul>
        </CampaignDetail>

      </main>
    </div>
  );
}
