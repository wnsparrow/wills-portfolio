import CompanyLinkPill from "@/components/CompanyLinkPill";
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
        <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/accenture.svg"
            alt="Accenture logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Accenture
          </h1>
        </div>


          <CompanyLinkPill
            href="https://www.accenture.com/us-en"
            label="Website"
          />
        </div>

          <p className="mt-2 text-white/70">
            Workforce analytics, forecasting, and process optimization in a high-stakes
            environment.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Analytics / Consulting</Pill>
            <Pill>Tools: SQL • Python • Tableau • Excel • Databricks • JIRA • Project Management • Communication</Pill>
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
              <span className="font-semibold text-white">Context: </span>{" "}
               Accenture was brought onto help DHS increase their hiring, hiring a certain number of agents over 5 year period.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities: </span>{" "}
              Built and maintained financial and workforce planning models to project hiring capacity for 5,000+ agents over a 5-year period. Designed Tableau dashboards to track employee time-to-hire, recruitment funnel metrics, and workforce capacity. Conducted requirements gathering, stakeholder workshops, and UAT sessions with leadership to ensure dashboard accuracy and usability. Managed and mentored two junior developers while coordinating cross-functional input from marketing, technology, and operations teams. Developed key performance metrics used in weekly executive syncs and strategic planning reviews.
            </li>
            <li>
              <span className="font-semibold text-white">Impact: </span>{" "}
              Increased hiring throughput by ~50% while reducing candidate time-to-hire by ~30 days. Improved executive decision-making through real-time dashboards and forecast scenario modeling. Helped maintain financial targets and operational margins through proactive planning models.
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
              Accenture was brought onto revamp the U.S. Citizenship and Immigration Services website by building and enhancing web forms while leveraging data to better serve applicants.
            </li>
            <li>
            <span className="font-semibold text-white">Responsibilities: </span>{" "}
            Developed predictive models, including a Cox Proportional Hazards model, to estimate processing timelines across multiple USCIS forms covering ~8 million annual applicants. Performed exploratory data analysis in Jupyter Notebooks to clean, transform, aggregate, and visualize large datasets to uncover bottlenecks and trends. Built ETL pipelines in Databricks to process and load applicant data into Postgres, enabling both internal analytics and external wait-time visibility for applicants. Helped develop a gradient-boosted classification model to select optimal FAQ responses from ~60 templates. Coordinated with front-end teams to integrate APIs and models into live web forms and applicant-facing experiences.
          </li>
            <li>
              <span className="font-semibold text-white">Impact: </span>
              Enabled more accurate applicant processing time estimates across millions of users. Reduced applicant uncertainty by surfacing real-time wait-time data and automated FAQ responses. Improved data accessibility and cross-team collaboration through scalable ETL pipelines.
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
              Supported the IRS as part of an analytics team, delivering insights on cybersecurity initiatives and workforce staffing trends through data visualization and reporting.
            </li>
            <li>
              <span className="font-semibold text-white">Responsibilities: </span>
              Led development and deployment of a React + D3 application analyzing ~20,000 web vulnerabilities weekly. Collaborated with Linux infrastructure teams to deploy applications using Ansible, translating technical requirements into automated jobs. Automated agile and sprint metric tracking (velocity, burndown, cycle time) using Python scripts. Spearheaded deployment coordination for internal applications and supported cross-team engineering workflows.
            </li>
            <li>
              <span className="font-semibold text-white">Impact: </span>
              Saved teams 4–10 hours per week through automation and deployment efficiencies. Improved internal application security visibility through real-time vulnerability analytics. Streamlined engineering workflows and reduced manual reporting overhead.
            </li>
          </ul>
        </CampaignDetail>
      </main>
    </div>
  );
}
