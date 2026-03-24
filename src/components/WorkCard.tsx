import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/workItems";

export default function WorkCard({
  title,
  subtitle,
  role,
  teaser,
  href,
  logo,
  date,
}: WorkItem) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Top Row: Logo + Company */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <div className="relative h-5 w-5">
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
            </div>

            {/* Subtitle + Role inline */}
            {(subtitle || role) && (
              <p className="mt-1 text-sm flex flex-wrap items-center gap-1 text-white/50">
                {subtitle && <span>{subtitle}</span>}

                {subtitle && role && <span className="text-white/40">•</span>}

                {role && <span className="font-medium text-white/50">{role}</span>}
              </p>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col items-end text-right">
            {date && (
              <span className="text-xs text-white/50 tracking-wide">
                {date}
              </span>
            )}
          </div>
        </div>

        {/* Teaser */}
        <p className="mt-4 text-sm leading-relaxed text-white/80">
          {teaser}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-5 flex items-center justify-between">
          <span className="text-sm font-medium text-white/80 group-hover:text-white">
            View
          </span>

          <span className="text-white/60 transition group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}