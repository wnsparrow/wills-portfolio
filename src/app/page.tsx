import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { workItems } from "@/data/workItems";

export default function Home() {
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
          Production Coordinator  •  Creative + Technical
        </p>

        {/* Message */}
        <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur sm:p-6">
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Hello! So glad you stopped by — I’m still building out this site, but check out this short presentation in the meantime.
          </p>

          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Watch my About presentation →
            </Link>

            <Link
              href="/work"
              className="text-sm text-white/70 hover:text-white"
            >
              View all work
            </Link>
          </div>
        </div>

        {/* Education */}
        <section className="mt-10 w-full">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Education
                </h2>
              </div>

              {/* Optional: right-side badge */}
              <div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                Charlottesville, VA
              </div>
            </div>

            {/* Two-card layout */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-12">
              {/* Left: Education (1/3) */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:col-span-3">
                <p className="text-xs text-white/60">School</p>

                <div className="mt-2 flex items-center gap-2">
                  <div className="relative h-5 w-5">
                    <Image
                      src="/logos/uva.svg"
                      alt="University of Virginia logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-base font-semibold text-white">
                    University of Virginia
                  </p>
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider text-white/45">
                  Major
                </p>

                <ul className="mt-3 space-y-1 text-sm text-white/75">
                  <li>B.A. Economics</li>
                  <li>B.A. Psychology</li>
                </ul>
                <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/45">
                    Started
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    2013
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/45">
                    Graduated
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    2017
                  </p>
                </div>
              </div>


              </div>

              {/* Right: Organizations (2/3) */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:col-span-9">
                <p className="text-xs text-white/60">Organizations</p>

                <div className="mt-3 space-y-5">
                {/* UVA Men's Club Basketball */}
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    {/* Left side: Title + Highlight pill */}
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-base font-semibold text-white">
                        UVA Men’s Club Basketball
                      </p>

                      {/* Highlight pill */}
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/80">
                        {/* Medal icon (inline SVG) */}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="none"
                        >
                          <path
                            d="M8 3h3l1 4-2 2-3-6Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 3h-3l-1 4 2 2 3-6Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M12 13.2l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 15.3l2-.3.9-1.8Z"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <span>2x Champion</span>
                      </span>
                    </div>

                    {/* Right side: roles */}
                    <p className="text-xs text-white/55">
                      Player/Coach • Treasurer • President
                    </p>
                  </div>

                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75">
                    <li>
                      Served as Treasurer junior year overseeing dues collection, tournament
                      funding requests, and reimbursements.
                    </li>
                    <li>
                      Served as President senior year, running practices, managing personnel,
                      and coordinating tournaments.
                    </li>
                  </ul>
                </div>


                  {/* Madison House */}
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="text-base font-semibold text-white">Madison House</p>
                      <p className="text-xs text-white/55">Volunteer</p>
                    </div>

                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75">
                      <li>
                        Volunteer camp counselor for a weekend youth soccer camp serving
                        pre-K children in the Charlottesville community.
                      </li>
                      <li>
                        Taught fundamentals through games, drills, and simple technique
                        progressions in a supportive, high-energy setting.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Selected Work */}
        <section className="mt-10 w-full">
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Professional Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <WorkCard key={item.href} {...item} />
            ))}
          </div>
        </section>

        {/* Contact (anchor target) */}
        <section id="contact" className="mt-12 w-full">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Contact
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Feel free to reach out — happy to chat about projects or opportunities.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Email */}
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-white/60">Email</p>
                <a
                  href="mailto:wnsparrow@gmail.com"
                  className="mt-1 block text-sm text-white/85 hover:text-white"
                >
                  wnsparrow@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
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

              {/* Location */}
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-white/60">Location</p>
                <p className="mt-1 text-sm text-white/85">
                  Washington, DC / San Diego, CA
                </p>
              </div>
            </div>

            {/* Availability line */}
            <p className="mt-6 text-sm text-white/70">
              Open to freelance, contract, and full-time opportunities.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
