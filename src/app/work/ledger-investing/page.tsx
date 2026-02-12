import CompanyLinkPill from "@/components/CompanyLinkPill";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    id: "project-1",
    title: "Product Workflow Improvements",
    subtitle: "Product • Engineering • Ops",
    blurb:
      "Improved core product flows and internal tooling to reduce friction, manual work, and support growth.",
    imageSrc: "/work/ledger/project-1.png",
    workUrl: "", // optional
    workLabel: "View work",
  },
  {
    id: "project-2",
    title: "Data + Reporting / Insights",
    subtitle: "Analytics • Data Quality • Dashboards",
    blurb:
      "Built reporting and analysis to improve visibility, drive decisions, and keep data trustworthy.",
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
          <p className="mt-2 text-white/70">
            Startup environment spanning product, engineering, and analytics — building workflows, internal tooling, and reporting to support a growing platform.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Product + Engineering / Analytics</Pill>
            <Pill>Focus: Workflows • Tooling • Reporting</Pill>
            <Pill>Timeline: (add)</Pill>
          </div>
        </header>

        <Section title="Overview">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Objective:</strong> Improve platform workflows and reduce operational friction while enabling better decision-making through clear reporting.
            </li>
            <li>
              <strong>My role:</strong> Cross-functional contributor — product thinking + implementation + analysis (partnering with ops and engineering).
            </li>
          </ul>
        </Section>

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
          title="Product Workflow Improvements"
          imageSrc="/work/ledger-investing/project-1.png"
          workUrl=""
          workLabel="View work"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context:</span>{" "}
              (Where users or internal teams were hitting friction — manual steps, inconsistent handoffs, or unclear status across a workflow.)
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              Led roadmap planning and cross-functional execution across engineering, sales, and operations. Authored detailed product requirement documents, defined feature scope and edge cases, and coordinated releases for major platform capabilities including instant quotes, historical/live market data feeds, and in-app messaging. Worked closely with sales teams to translate pipeline data into actionable visualizations and workflow insights.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Successfully launched three major product features that reduced user drop-off by ~20% and improved investor engagement. Enabled data-driven sales strategies through HubSpot visualizations that increased lead conversion rates by ~15% and improved team efficiency. Strengthened alignment across departments by clarifying workflow states, priorities, and success metrics.
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span>{" "}
              Jira/Linear, HubSpot, Google Analytics, SQL (for analysis/validation), internal dashboards, roadmap & PRD documentation tools (Notion/Confluence-style), cross-functional sprint planning frameworks
            </li>
          </ul>
        </CampaignDetail>

        <CampaignDetail
          id="project-2"
          title="Data + Reporting / Insights"
          imageSrc="/work/ledger-investing/project-2.jpeg"
          workUrl=""
          workLabel="View work"
        >
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <span className="font-semibold text-white">Context:</span>{" "}
              (Teams needed consistent metrics and a reliable source of truth for pipeline/operations performance.)
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities:</span>{" "}
              Partnered with product, ops, and engineering to design and implement improvements to the investor portal and supporting data infrastructure. Built and shipped front-end features in a React-based application, defined database schemas, wrote SQL scripts, and established testing/logging patterns to support scalable capital markets data access across multiple microservices.
            </li>
            <li>
              <span className="font-semibold text-white">Impact:</span>{" "}
              Improved user engagement and platform performance by introducing investor interest signaling, in-app messaging, and cart-style selection tracking, resulting in a ~35% increase in click-through rates and ~40% reduction in page load times. Reduced query execution time by ~50% through database optimization, increasing reliability and accessibility of capital markets data across reporting, analytics, and platform services.
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span>{" "}
              React, JavaScript/TypeScript, SQL, Google Analytics, REST APIs, internal admin tools, logging/testing frameworks, Git, Jira/Linear-style ticketing systems
            </li>
          </ul>
        </CampaignDetail>
      </main>
    </div>
  );
}
