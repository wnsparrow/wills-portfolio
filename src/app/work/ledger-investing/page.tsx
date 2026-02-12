import CompanyLinkPill from "@/components/CompanyLinkPill";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    id: "project-1",
    title: "Platform Engineering & Analytics",
    subtitle: "Software Engineer",
    blurb:
      "Built and optimized core platform flows, internal tools, and data systems to reduce friction, automate manual processes, and support marketplace scale.",
    imageSrc: "/work/ledger/project-1.png",
    workUrl: "", // optional
    workLabel: "View work",
  },
  {
    id: "project-2",
    title: "Product Strategy & Execution",
    subtitle: "Product Manager",
    blurb:
      "Owned feature planning and delivery, writing specs, aligning stakeholders, and using analytics to guide product decisions and launches.",
    imageSrc: "/work/ledger/project-2.png",
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

export default function LedgerInvestingCaseStudyPage() {
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
            src="/logos/ledger.svg"
            alt="Ledger Investing logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Ledger Investing
          </h1>
        </div>

          <CompanyLinkPill href="https://ledgerinvesting.com" />
        </div>
          <p className="mt-2 text-white/70 text-justify">
          In 2022, I joined Ledger Investing, an insurance-focused fintech startup building a marketplace that connects insurers with traditional investors for reinsurance. I worked hands-on across product, engineering, and analytics, contributing to front-end features, back-end services, internal tools, and reporting systems that supported a growing platform and new class of insurance-linked securities.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Product + Engineering / Analytics</Pill>
            <Pill>Skills: React • Django • HubSpot • Reporting • Stakeholder Management</Pill>
            <Pill>Timeline: 2022 - 2024</Pill>
          </div>
        </header>

        {/* <Section title="Overview">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Objective:</strong> Improve platform workflows and reduce operational friction while enabling better decision-making through clear reporting.
            </li>
            <li>
              <strong>My role:</strong> Cross-functional contributor — product thinking + implementation + analysis (partnering with ops and engineering).
            </li>
          </ul>
        </Section> */}

        <Section title="Highlights">
          <p className="mb-4 text-white/70">
            Two core areas of work I contributed to at Ledger:
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          id="project-1"
          title="Platform Engineering & Analytics"
          imageSrc="/work/ledger-investing/project-1.png"
          workUrl=""
          workLabel="View work"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context: </span>{" "}
              Worked on Ledger Investing’s investor platform and internal analytics infrastructure supporting large-scale capital markets data and investor workflows.
            </li>

            <li>
              <span className="font-semibold text-white">Responsibilities: </span>{" "}
              
              <span className="font-semibold text-white">
                Developed and enhanced a web-based investor portal managing ~$300B in premium.
              </span>{" "}
              Built features using{" "}
              <span className="text-cyan-400 font-medium">React</span>{" "}
              including investor interest tracking, in-app messaging, and workflow-triggered notifications.{" "}
              
              <span className="font-semibold text-white">
                Built a capital markets database architecture
              </span>{" "}
              by defining schemas and writing optimized{" "}
              <span className="text-cyan-400 font-medium">SQL</span>{" "}
              scripts with testing and logging to support reporting, analytics, and platform microservices.{" "}
              
              <span className="font-semibold text-white">
                Created engagement and performance dashboards
              </span>{" "}
              using{" "}
              <span className="text-cyan-400 font-medium">Google Analytics</span>{" "}
              while optimizing backend APIs for faster application load times.
            </li>

            <li>
              <span className="font-semibold text-white">Impact: </span>{" "}
              
              <span className="font-semibold text-white">
                Improved click-through rates by ~35% and reduced page load times by ~40%. Cut database query execution time by ~50%
              </span>{" "}
              while increasing data accessibility across multiple internal services.
            </li>
          </ul>

        </CampaignDetail>

        <CampaignDetail
          id="project-2"
          title="Product Strategy & Execution"
          imageSrc="/work/ledger-investing/project-2.jpeg"
          workUrl=""
          workLabel="View work"
        >
         <ul className="space-y-3 text-sm text-white/80">
          <li>
            <span className="font-semibold text-white">Context: </span>{" "}
            Supported product planning and cross-functional execution for Ledger Investing’s investor platform and capital marketplace tools.
          </li>

          <li>
            <span className="font-semibold text-white">Responsibilities: </span>{" "}
            
            <span className="font-semibold text-white">
              Led product roadmap development and authored detailed requirement documents.
            </span>{" "}
            Drove delivery of major platform capabilities including instant quotes, historical and live market data feeds, and in-app messaging.{" "}
            
            <span className="font-semibold text-white">
              Collaborated with sales and marketing teams
            </span>{" "}
            to create ad-hoc funnel and lead visualizations using{" "}
            <span className="text-cyan-400 font-medium">HubSpot</span>{" "}
            to map investor progression through the capital application lifecycle.{" "}
            
            <span className="font-semibold text-white">
              Coordinated cross-team execution
            </span>{" "}
            between engineering, analytics, and business stakeholders to align releases with user engagement and revenue goals.
          </li>

          <li>
            <span className="font-semibold text-white">Impact: </span>{" "}
            
            <span className="font-semibold text-white">
              Reduced user drop-off by ~20% and increased lead conversion rates by ~15%.
            </span>{" "}
            Improved sales efficiency and product adoption through clearer funnel visibility and feature prioritization.
          </li>
        </ul>

        </CampaignDetail>
      </main>
    </div>
  );
}
