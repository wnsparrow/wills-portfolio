import CompanyLinkPill from "@/components/CompanyLinkPill";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    id: "account-1",
    title: "DandyMen",
    subtitle: "Production Assistant",
    blurb:
      "Helped coordinate moving parts across pre-pro, shoot, and post to keep timelines on track.",
  },
  {
    id: "account-2",
    title: "Laundry Sauce",
    subtitle: "Production Assistant",
    blurb:
      "Supported shoot-day logistics and communication so the crew could focus on execution.",
  },
  {
    id: "account-3",
    title: "Supreme Source",
    subtitle: "Production Assistant",
    blurb:
      "Assisted with organizing assets and tracking deliverables through final handoff.",
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
        <Link href="/work" className="text-sm text-white/70 hover:text-white">
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
          <p className="mt-2 text-white/70">
            Creative production support across multiple accounts — coordinating details, timelines, and deliverables.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Production Support</Pill>
            <Pill>Focus: Coordination • Logistics • Post Workflow</Pill>
            <Pill>Timeline: (add)</Pill>
          </div>
        </header>

        <Section title="Overview">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Objective:</strong> Support teams and projects so production stays organized, efficient, and on schedule.
            </li>
            <li>
              <strong>My role:</strong> Assist with coordination, asset organization, shoot-day support, and delivery tracking.
            </li>
          </ul>
        </Section>

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
                Raindrop partnered with DandyMen to conduct a People on the Street Interview getting organic user's genuine reactions to using DandyMen's hair products at Pure Project Brewery in North Park, San Diego.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
                My responsiblities included grabbing breakfast and lunch for crew, organizing the set up of interviews, holding lighting pieces in place, asking people on street if they'd like to participate, participating in interview myself (pictured to left), managing wardrobe.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Helped create a relaxed and welcoming environment for participants, contributing to more natural on-camera responses and smoother interview transitions.
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span>{" "}
              (Sheets, docs, email, Slack, file org, etc.)
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
              Raindrop partnered with Laundry Sauce to showcase a new line of holiday products through a still photography commercial shoot.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              Organized the set up of chrismtas tree, organized laundry sauce pods into their respective color baskets, steam pressed clothes, tie ribbons and bows.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Impact: Contributed to a visually consistent and well-organized set, helping the team move quickly between shots and maintain a polished brand presentation throughout the shoot.
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span>{" "}
              (…)
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
              Raindrop partened with Supreme Source to showcase comedic videos introducing a new line of pet food.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              Assisted with the creation of several props to be used during shoot. Filled in as stand-in for certain shots. Worked with lightning, camera, and audio to make sure everything was running as projected. Retrieved apple boxes and helped head of props. Set build up, set tear down, organized supplies, retrieved breakfast and lunch for cast and crew.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Helped maintain production momentum across multiple scenes by supporting props, set transitions, and technical setup, reducing downtime and enabling the creative team to stay focused on performance and timing.
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span>{" "}
              (…)
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
