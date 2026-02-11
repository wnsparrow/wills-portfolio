import Link from "next/link";

const highlights = [
  {
    id: "project-1",
    title: "Product Workflow Improvements",
    subtitle: "Product • Engineering • Ops",
    blurb:
      "Improved core product flows and internal tooling to reduce friction and support growth.",
  },
  {
    id: "project-2",
    title: "Data + Reporting / Insights",
    subtitle: "Analytics • Data Quality • Dashboards",
    blurb:
      "Built reporting and analysis to help teams make decisions with better visibility and cleaner data.",
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

export default function LedgerInvestingCaseStudyPage() {
  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <Link href="/work" className="text-sm text-white/70 hover:text-white">
          ← Back to Work
        </Link>

        <header className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Ledger Investing
          </h1>
          <p className="mt-2 text-white/70">
            Startup environment spanning product, engineering, and analytics — building workflows and improving visibility.
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
              <strong>Objective:</strong> Build and improve platform workflows while supporting operational decision-making.
            </li>
            <li>
              <strong>My role:</strong> Cross-functional contributor — product thinking + implementation + analysis.
            </li>
          </ul>
        </Section>

        <Section title="Highlights">
          <p className="mb-4 text-white/70">
            Two core areas of work I contributed to at Ledger:
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <HighlightCard key={h.id} {...h} />
            ))}
          </div>
        </Section>

        {/* Detail sections (anchors) */}
        <Section id="project-1" title="Product Workflow Improvements — Details">
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Context:</strong> (what workflow / user problem)</li>
            <li><strong>What I did:</strong> (2–4 bullets)</li>
            <li><strong>Impact:</strong> (speed, reliability, conversion, reduced manual work)</li>
            <li><strong>Tools:</strong> (stack/tools you used)</li>
          </ul>
        </Section>

        <Section id="project-2" title="Data + Reporting / Insights — Details">
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Context:</strong> </li>
            <li><strong>What I did:</strong> </li>
            <li><strong>Impact:</strong> </li>
            <li><strong>Tools:</strong> </li>
          </ul>
        </Section>
      </main>
    </div>
  );
}
