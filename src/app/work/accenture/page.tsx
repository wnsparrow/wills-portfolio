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
          I began working for Accenture in 2017, supporting multiple federal agencies through analytics, engineering, and product-oriented initiatives. My work spanned building data visualization and reporting platforms, developing predictive and machine-learning models, constructing ETL pipelines and dashboards, and collaborating with cross-functional teams to translate technical requirements into scalable applications and workflows. Across engagements, I contributed to improvements in cybersecurity visibility, applicant processing transparency, and large-scale workforce planning, helping organizations make faster, more informed decisions through reliable data systems and user-facing tools.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Role: Analytics / Consulting</Pill>
            <Pill>Tools: SQL • Python • Tableau • Excel • Databricks • JIRA • Project Management • Communication</Pill>
            <Pill>Timeline: 2017 – 2022</Pill>
          </div>
        </header>

        {/* <Section title="Overview">
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
        </Section> */}

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
              Accenture was brought on to help DHS increase agent hiring over a 5-year period.
            </li>

            <li>
              <span className="font-semibold text-white">Responsibilities: </span>{" "}
              
              <span className="font-semibold text-white">
                Modeled the end-to-end hiring pipeline for 5,000 federal agents over five years.
              </span>{" "}
              
              <span className="font-semibold text-white">
                Owned and managed a $13M contract forecast
              </span>{" "}
              incorporating financial and operational inputs. Built workforce and financial planning models using{" "}
              
              <span className="text-cyan-400 font-medium">Microsoft Excel</span>{" "}
              and{" "}
              <span className="text-cyan-400 font-medium">SQL</span>{" "}
              
              to analyze hiring funnel performance, including cost per hiring step, attrition and pass/fail rates, time-to-hire distributions, and seasonality.{" "}
              
              <span className="font-semibold text-white">
                Developed key performance metrics
              </span>{" "}
              
              and communicated model findings and recommendations to leadership and operations teams to align strategy with margin targets.
            </li>

            <li>
              <span className="font-semibold text-white">Impact: </span>{" "}
              
              <span className="font-semibold text-white">
                Maintained ~15% operational income (OI) margin targets
              </span>{" "}
              
              through proactive scenario planning. Improved visibility into hiring pipeline efficiency and enabled more informed budgeting and workforce decisions through structured forecasting and KPI reporting.
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
              <span className="font-semibold text-white">Context: </span>{" "}
              Accenture was brought on to revamp the U.S. Citizenship and Immigration Services website by enhancing applicant web forms and leveraging data-driven tools to better serve users.
            </li>

            <li>
              <span className="font-semibold text-white">Responsibilities: </span>{" "}
              
              <span className="font-semibold text-white">
                Developed and deployed predictive models to estimate processing timelines for ~8 million annual applicants.
              </span>{" "}
              Used{" "}
              <span className="text-cyan-400 font-medium">Python</span>{" "}
              as part of the Big Data team to support large-scale forecasting and automation.{" "}
              
              <span className="font-semibold text-white">
                Led exploratory data analysis
              </span>{" "}
              using{" "}
              <span className="text-cyan-400 font-medium">Jupyter Notebooks</span>{" "}
              to clean, transform, and visualize datasets to identify trends and bottlenecks.{" "}
              
              <span className="font-semibold text-white">
                Built scalable ETL pipelines
              </span>{" "}
              with{" "}
              <span className="text-cyan-400 font-medium">Databricks</span>{" "}
              to process and load applicant data into{" "}
              <span className="text-cyan-400 font-medium">Postgres</span>, leveraging{" "}
              <span className="text-cyan-400 font-medium">Amazon S3</span>{" "}
              and{" "}
              <span className="text-cyan-400 font-medium">EC2</span>{" "}
              for large-scale data storage and processing.{" "}
              
              <span className="font-semibold text-white">
                Coordinated with front-end teams
              </span>{" "}
              to integrate APIs and a gradient-boosted FAQ classification model into live web forms.
            </li>

            <li>
              <span className="font-semibold text-white">Impact: </span>{" "}
              
              <span className="font-semibold text-white">
                Improved accuracy of applicant processing time estimates across millions of users.
              </span>{" "}
              Reduced applicant uncertainty through real-time wait-time visibility and automated FAQ routing while improving cross-team data accessibility.
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
              <span className="font-semibold text-white">Context: </span>{" "}
              Supported the IRS as part of an analytics R&D team delivering cybersecurity and workforce insights through data visualization and internal applications.
            </li>

            <li>
              <span className="font-semibold text-white">Responsibilities: </span>{" "}
              
              <span className="font-semibold text-white">
                Led design and deployment of a vulnerability analytics application analyzing ~20,000 web vulnerabilities weekly.
              </span>{" "}
              Built the interface using{" "}
              <span className="text-cyan-400 font-medium">React</span>{" "}
              and{" "}
              <span className="text-cyan-400 font-medium">D3</span>{" "}
              while managing two junior developers.{" "}
              
              <span className="font-semibold text-white">
                Spearheaded internal application deployments
              </span>{" "}
              by collaborating with{" "}
              <span className="text-cyan-400 font-medium">Linux</span>{" "}
              infrastructure teams and translating requirements into automated{" "}
              <span className="text-cyan-400 font-medium">Ansible</span>{" "}
              jobs.{" "}
              
              <span className="font-semibold text-white">
                Developed workforce and reporting dashboards
              </span>{" "}
              using{" "}
              <span className="text-cyan-400 font-medium">Tableau</span>{" "}
              while conducting requirements gathering, wireframing, and UAT sessions with stakeholders.
            </li>

            <li>
              <span className="font-semibold text-white">Impact: </span>{" "}
              
              <span className="font-semibold text-white">
                Increased hiring throughput by ~50% and reduced candidate time-to-hire by ~30 days
              </span>{" "}
              through data-driven dashboards. Improved internal security visibility and reduced manual reporting effort through automated deployment and analytics tooling.
            </li>
          </ul>

        </CampaignDetail>
      </main>
    </div>
  );
}
