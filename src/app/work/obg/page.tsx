import Link from "next/link";

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
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-3 text-sm leading-relaxed text-white/80">
        {children}
      </div>
    </section>
  );
}

export default function LedgerCaseStudyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-3xl">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Back
        </Link>

        <header className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Ledger Investing
          </h1>
          <p className="mt-2 text-white/70">
            Startup environment shipping product workflows for a reinsurance
            marketplace.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Product + Software</Pill>
            <Pill>Tools: (add)</Pill>
            <Pill>Timeline: (add)</Pill>
          </div>
        </header>

        <Section title="Project Snapshot">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Objective:</strong> Build a platform connecting
              organizations seeking reinsurance with capital investors.
            </li>
            <li>
              <strong>Users:</strong> Insurers/reinsurers, investors, internal ops.
            </li>
            <li>
              <strong>My focus:</strong> Requirements, delivery, coordination, and
              shipping features in tight iteration cycles.
            </li>
          </ul>
        </Section>

        <Section title="Context / Mission">
          <p>
            (Write 4–6 sentences) What the product solved, why it mattered, and
            what was broken about the old process.
          </p>
        </Section>

        <Section title="My Role">
          <ul className="list-disc space-y-2 pl-5">
            <li>Translated stakeholder needs into clear requirements.</li>
            <li>Partnered with engineers to ship features and fixes.</li>
            <li>Helped define workflows and operational processes.</li>
            <li>Tracked work, scoped priorities, and unblocked delivery.</li>
          </ul>
        </Section>

        <Section title="Process / What We Did">
          <div className="space-y-4">
            <div>
              <p className="font-medium text-white">Define</p>
              <p className="text-white/80">
                Clarified users, workflows, edge cases, and success metrics.
              </p>
            </div>
            <div>
              <p className="font-medium text-white">Build</p>
              <p className="text-white/80">
                Implemented core product flows with fast iteration cycles.
              </p>
            </div>
            <div>
              <p className="font-medium text-white">Test & Iterate</p>
              <p className="text-white/80">
                Tight feedback loops; refined UX, logic, and documentation.
              </p>
            </div>
            <div>
              <p className="font-medium text-white">Launch</p>
              <p className="text-white/80">
                Rolled out improvements and supported adoption internally.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Challenges & Decisions">
          <ul className="list-disc space-y-2 pl-5">
            <li>(Example) Complex domain → simplified concepts for the team.</li>
            <li>(Example) Bandwidth constraints → prioritized highest-leverage work.</li>
            <li>(Example) Ambiguity → wrote acceptance criteria to reduce churn.</li>
          </ul>
        </Section>

        <Section title="Impact / Results">
          <ul className="list-disc space-y-2 pl-5">
            <li>(Add) Reduced manual ops effort by __ hours/week.</li>
            <li>(Add) Improved deal processing speed by __%.</li>
            <li>Enabled smoother collaboration between business + engineering.</li>
          </ul>
        </Section>

        <Section title="Artifacts">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-white/70">
            Add screenshots, diagrams, specs, or sanitized examples here.
          </div>
        </Section>

        <Section title="Reflection">
          <p>
            (3–5 sentences) What startup life taught you about shipping,
            prioritization, and ownership.
          </p>
        </Section>
      </main>
    </div>
  );
}
