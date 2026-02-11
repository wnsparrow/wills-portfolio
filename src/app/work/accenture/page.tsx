import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    id: "account-1",
    title: "DHS",
    subtitle: "Data Analyst",
    blurb:
      "Built models + dashboards to improve staffing visibility and decision-making.",
    imageSrc: "/work/accenture/project-1.png",
    workUrl: "", // optional
    workLabel: "View work",
  },
  {
    id: "account-2",
    title: "USCIS",
    subtitle: "Senior Data Analyst",
    blurb:
      "Automated recurring reporting and added validation to reduce manual effort.",
    imageSrc: "/work/accenture/project-2.png",
    workUrl: "",
    workLabel: "View work",
  },
  {
    id: "account-3",
    title: "IRS",
    subtitle: "Analytics Consultant",
    blurb:
      "Created views and narratives that helped leadership align on priorities.",
    imageSrc: "/work/accenture/project-3.png",
    workUrl: "",
    workLabel: "View work",
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
      <h2 className="text-lg font-semibold tracking-tight text-white">{title}</h2>
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
  workUrl,
  workLabel,
  children,
}: {
  id: string;
  title: string;
  imageSrc: string;
  workUrl?: string;
  workLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
        </div>
      </div>

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

            {(workUrl ?? "").trim().length > 0 ? (
              <div className="mt-5">
                <a
                  href={workUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {workLabel ?? "View work"} <span aria-hidden>↗</span>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AccentureCaseStudyPage() {
  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <Link href="/work" className="text-sm text-white/70 hover:text-white">
          ← Back to Work
        </Link>

        <header className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Accenture
          </h1>
          <p className="mt-2 text-white/70">
            Workforce analytics, forecasting, and process optimization in a high-stakes
            environment.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Analytics / Consulting</Pill>
            <Pill>Tools: SQL • Python • Tableau • Excel</Pill>
            <Pill>Timeline: 2017–2022</Pill>
          </div>
        </header>

        <Section title="Overview">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Objective:</strong> Improve forecasting and reporting to support
              staffing and operational decisions.
            </li>
            <li>
              <strong>My focus:</strong> Modeling, automation, dashboards, and
              stakeholder communication.
            </li>
          </ul>
        </Section>

        <Section title="Highlights">
          <p className="mb-4 text-white/70">
            A few mini-projects / accounts I worked on during my time at Accenture:
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <HighlightCard
                key={h.id}
                id={h.id}
                title={h.title}
                subtitle={h.subtitle}
                blurb={h.blurb}
              />
            ))}
          </div>
        </Section>

        {/* Detail sections */}
        <CampaignDetail
          id="account-1"
          title="DHS"
          imageSrc="/work/accenture/project-1.png"
          workUrl=""
          workLabel="View work"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context:</span>{" "}
               Accenture was brought onto help DHS increase their hiring, hiring a certain number of agents over 5 year period.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              (what you personally owned / delivered)
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              (time saved, clearer decisions, fewer errors, faster reporting, etc.)
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span>{" "}
              (SQL, Python, Tableau, Excel, etc.)
            </li>
          </ul>
        </CampaignDetail>

        <CampaignDetail
          id="account-2"
          title="USCIS"
          imageSrc="/work/accenture/project-2.png"
          workUrl=""
          workLabel="View work"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context: </span>
              Accenture was brought onto revamp the United States Citzenship and Immigration Services website, and was responsibile for building and improving upon existing web forms, and leverage data trends to serve applicants.
            </li>
            <li>
            <span className="font-semibold text-white">Responsibilities:</span>{" "}
            Used <span className="text-cyan-400 font-medium">Tableau</span> to create dashboards and
            <span className="text-cyan-400 font-medium"> SQL</span> to query datasets.
          </li>

            <li>
              <span className="font-semibold text-white">Impact:</span> (…)
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> (…)
            </li>
          </ul>
        </CampaignDetail>

        <CampaignDetail
          id="account-3"
          title="IRS"
          imageSrc="/work/accenture/project-3.png"
          workUrl=""
          workLabel="View work"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context: </span>
              To help the IRS with hiring.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span> (…)
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span> (…)
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> (…)
            </li>
          </ul>
        </CampaignDetail>
      </main>
    </div>
  );
}
