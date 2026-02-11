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

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* School */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs text-white/60">School</p>
                <div className="mt-1 flex items-center gap-2">
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
                <ul className="mt-2 space-y-1 text-sm text-white/75">
                  <li>B.A. Economics</li>
                  <li>B.A. Psychology</li>
                </ul>
              </div>

              {/* Leadership */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs text-white/60">Leadership</p>
                <p className="mt-1 text-base font-semibold text-white">
                  Men’s Club Basketball
                </p>
                <ul className="mt-2 space-y-1 text-sm text-white/75">
                  <li>President</li>
                  <li>Treasurer</li>
                  <li>Player + Coach</li>
                </ul>
              </div>

              {/* Community */}
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs text-white/60">Community</p>
                <p className="mt-1 text-base font-semibold text-white">
                  Madison House
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Volunteer organization focused on service in Charlottesville.
                </p>
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
