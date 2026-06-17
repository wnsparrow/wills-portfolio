import CompanyLinkPill from "@/components/CompanyLinkPill";
import Image from "next/image";
import Link from "next/link";

const responsibilities = [
  {
    title: "Production Coordination",
    description:
      "Supporting day-to-day coordination across schedules, vendor requests, deliverables, meeting notes, and production logistics.",
  },
  {
    title: "Vendor & Pricing Support",
    description:
      "Preparing vendor outreach, tracking pricing and quantities, organizing options, and helping the team evaluate selections.",
  },
  {
    title: "Budget & Detail Tracking",
    description:
      "Helping maintain visibility across budget updates, furniture options, scope changes, and production needs.",
  },
  {
    title: "Internal & Client Communication",
    description:
      "Capturing meeting notes, identifying next steps, drafting follow-ups, and helping keep internal teams aligned before client shares.",
  },
  {
    title: "Schedule Management",
    description:
      "Supporting workback updates, deadline tracking, review timing, and coordination across multiple moving parts.",
  },
  {
    title: "Large-Scale Event Support",
    description:
      "Contributing to production planning for Autodesk University and Executive Summit across stage, seating, scenic, and attendee experience elements.",
  },
];

const projectAreas = [
  "Autodesk University",
  "Executive Summit",
  "Keynote + General Session",
  "Main Stage",
  "Audience Seating",
  "Furniture Coordination",
  "Demo Desk Support",
  "Tunnel Experience",
  "Vendor Requests",
  "Client Review Prep",
];

const tools = [
    "Google Sheets",
    "ClickUp",
    "Airtable",
    "Google Slides",
    "2D Floor Plans",
    "3D Renderings",
    "Google Docs",
    "SharePoint",
    "Slack",   
  ];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-100/85">
      {children}
    </span>
  );
}

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">
          {eyebrow}
        </p>
      )}

      <h2 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>

      <div className="mt-4 text-sm leading-relaxed text-white/75">
        {children}
      </div>
    </section>
  );
}

function AutodeskBrandTile() {
  return (
    <div className="flex min-h-[260px] flex-col rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/15 via-black/40 to-black p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
        Client
      </p>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2">
          <Image
            src="/work/xda/adsk-logo.png"
            alt="Autodesk logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        <h3 className="text-5xl font-bold tracking-tight text-white">
          Autodesk
        </h3>
      </div>

      <div className="mt-6 h-px w-24 bg-amber-400/30" />

      <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70">
        Technology company serving architecture, engineering, construction,
        manufacturing, and media professionals worldwide.
      </p>
    </div>
  );
}

function EventTile() {
  return (
    <div className="flex min-h-[260px] flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
        Programs
      </p>

      <div className="mt-5 space-y-5">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            Autodesk University
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Keynote + General Session production support for Autodesk’s major
            customer and industry event.
          </p>
        </div>

        <div className="h-px bg-white/10" />

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            Executive Summit
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Production coordination support for a focused executive-level event
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

function ResponsibilityCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
      <h3 className="text-base font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  );
}

export default function XDACaseStudyPage() {
  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <Link href="/work" className="text-sm text-white/70 hover:text-white">
          ← Back to Work
        </Link>

        <header className="mt-6 rounded-2xl border border-amber-400/25 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10">
                <Image
                    src="/logos/xda.svg"
                    alt="XD Agency logo"
                    width={26}
                    height={26}
                    className="object-contain"
                />
                </div>

                <h1 className="text-3xl font-semibold tracking-tight text-white">
                XD Agency
                </h1>
            </div>

            <CompanyLinkPill
                href="https://xdagency.com"
                label="Website"
            />

            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                Current Role
            </span>
            </div>

          <div className="mt-4 space-y-4 text-base leading-relaxed text-white/75">
            <p>
              I currently work with XD Agency as a Production Coordinator and
              Lead Project Manager, helping deliver Autodesk University and
              Autodesk Executive Summit.
            </p>

            <p>
              My role spans production logistics, vendor coordination, budget
              tracking, schedules, internal communication, and client-facing
              deliverables across multiple workstreams and event experiences.
            </p>

            <p>
              The role has given me the opportunity to work across many parts of the
              production process while collaborating closely with producers,
              designers, vendors, and client teams to keep projects organized and
              moving forward.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Pill>Role: Production Coordinator</Pill>
            <Pill>Client: Autodesk</Pill>
            <Pill>Timeline: Apr 2026 - Sep 2026</Pill>
            <Pill>
              Focus: Live Events • Experiential • Production Logistics
            </Pill>
          </div>
        </header>

        <Section title="Client & Event Context" eyebrow="Scope">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <AutodeskBrandTile />
            <EventTile />
          </div>
        </Section>

        <Section title="Project Context" eyebrow="Overview">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p>
                XD Agency was selected as Autodesk's production partner for the 2026
                Autodesk University and Executive Summit in Las Vegas. As a first-year
                engagement between our teams, the project includes both large-scale
                attendee experiences and executive-focused programming, requiring close
                coordination across creative, production, logistics, technology, and
                client stakeholders.
                </p>

                <p className="mt-4">
                Autodesk University is Autodesk's flagship annual conference, bringing
                together professionals from architecture, engineering, construction,
                manufacturing, media, and technology to explore emerging trends,
                product innovation, AI, digital transformation, and the future of
                design and making. The event includes keynote presentations, industry
                sessions, networking opportunities, hands-on learning, and product
                announcements. Autodesk expects more than 10,000 attendees from around
                the world to participate.
                </p>

                <p className="mt-4">
                Executive Summit serves as Autodesk's invitation-only leadership
                experience, bringing together senior executives, business leaders, and
                strategic decision-makers for a more focused series of presentations,
                conversations, and networking opportunities. The event is designed to
                facilitate discussions around industry challenges, future innovation,
                technology strategy, and business transformation.
                </p>

                <p className="mt-4">
                Together, the events represent a multi-million-dollar production effort
                spanning keynote and general session programming, executive experiences,
                experiential activations, audience engagement, scenic environments,
                furniture installations, and numerous supporting production workstreams.
                My role supports the coordination and planning efforts required to move
                these experiences from concept through execution.
                </p>
            </div>
            </Section>

        <Section title="My Role" eyebrow="Responsibilities">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((item) => (
              <ResponsibilityCard key={item.title} {...item} />
            ))}
          </div>
        </Section>

        <Section title="Tools & Platforms" eyebrow="Workflow">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {tools.map((tool) => (
                <div
                    key={tool}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur"
                >
                    <p className="text-sm font-medium text-white">{tool}</p>
                </div>
                ))}
            </div>
            </Section>

      </main>
    </div>
  );
}