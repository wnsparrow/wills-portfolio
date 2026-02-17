// src/app/analytics/page.tsx
import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { workItems } from "@/data/workItems";

export default function AnalyticsHome() {
  const analyticsWorkItems = workItems
    .slice()
    .reverse()
    .map((item) => ({
      ...item,
      href: item.href.replace(/^\/work/, "/analytics/work"),
    }));

  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {/* Headshot */}
        <div className="mb-6 mt-2 flex w-full justify-center">
          <div className="relative h-44 w-40 overflow-hidden rounded-[999px] ring-2 ring-white/15 sm:h-56 sm:w-52">
            <Image
              src="/headshot.png"
              alt="Will Sparrow headshot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name + subtitle */}
        <h1 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Will Sparrow
        </h1>
        <p className="mt-2 text-center text-sm text-white/70 sm:text-base">
          Data & Product Analytics • Creative + Technical
        </p>

        {/* Message / Status card */}
        <div className="mt-4 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 pb-5 pt-3 text-center shadow-sm backdrop-blur sm:px-6 sm:pb-6 sm:pt-4">
          <div className="mt-1 flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
                📍 Based: Washington, DC
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                Roles: Data Analyst • Senior Data Analyst • BI Analyst
              </span>
            </div>

            <p className="text-sm text-white/55">
              Open to major US hubs + remote (LA, SD, SF, Chicago, NYC).
            </p>

            <p className="text-sm text-white/65 sm:text-base">
              Product + analytics experience across marketplaces, user workflows,
              and performance reporting.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/analytics/resume"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              View Resume →
            </Link>

            <Link
              href="/analytics/work"
              className="text-sm text-white/70 hover:text-white"
            >
              View all work
            </Link>
          </div>
        </div>

        {/* Professional Experience */}
        <section className="mt-10 w-full">
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Professional Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {analyticsWorkItems.map((item) => (
              <WorkCard key={item.href} {...item} />
            ))}
          </div>
        </section>

        {/* Recent Projects teaser */}
        <section className="mt-8 w-full">
          <Link
            href="/analytics/work"
            className="group block w-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur transition hover:border-white/15 hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  Check out some of my recent projects
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  A couple quick deliverables I’ve been building lately.
                </p>
              </div>
              <span className="text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white/60">
                →
              </span>
            </div>
          </Link>
        </section>


        {/* Contact */}
        <section id="contact" className="mt-12 w-full">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Contact
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Feel free to reach out — happy to chat about projects or opportunities.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-white/60">Email</p>
                <a
                  href="mailto:wnsparrow@gmail.com"
                  className="mt-1 block text-sm text-white/85 hover:text-white"
                >
                  wnsparrow@gmail.com
                </a>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-white/60">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/will-sparrow-3ab482115/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-sm text-white/85 hover:text-white"
                >
                  linkedin.com/in/will-sparrow
                </a>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-white/60">Location</p>
                <p className="mt-1 text-sm text-white/85">
                  Washington, DC / San Diego, CA
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-white/70">
              Open to freelance, contract, and full-time opportunities.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
