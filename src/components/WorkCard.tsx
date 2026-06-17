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
  featured = false,
}: WorkItem) {
  return (
    <Link
      href={href}
      className={`group block h-full rounded-2xl p-6 shadow-sm backdrop-blur transition
        ${
          featured
            ? "border border-amber-400/30 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 hover:border-amber-300/50 hover:bg-amber-500/10"
            : "border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
        }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            {/* Top Row */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  featured ? "bg-amber-400/10" : "bg-white/10"
                }`}
              >
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

              {featured && (
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs font-medium text-amber-300">
                  Current
                </span>
              )}
            </div>

            {/* Subtitle + Role */}
            {(subtitle || role) && (
              <p
                className={`mt-1 flex flex-wrap items-center gap-1 text-sm ${
                  featured ? "text-amber-100/70" : "text-white/50"
                }`}
              >
                {subtitle && <span>{subtitle}</span>}

                {subtitle && role && (
                  <span className={featured ? "text-amber-200/40" : "text-white/40"}>
                    •
                  </span>
                )}

                {role && (
                  <span
                    className={`font-medium ${
                      featured ? "text-amber-100/80" : "text-white/50"
                    }`}
                  >
                    {role}
                  </span>
                )}
              </p>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col items-end text-right">
            {date && (
              <span
                className={`text-xs tracking-wide ${
                  featured ? "text-amber-300" : "text-white/50"
                }`}
              >
                {date}
              </span>
            )}
          </div>
        </div>

        {/* Teaser */}
        <p
          className={`mt-4 text-sm leading-relaxed ${
            featured ? "text-amber-50/90" : "text-white/80"
          }`}
        >
          {teaser}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-5">
          <span
            className={`text-sm font-medium ${
              featured
                ? "text-amber-200 group-hover:text-amber-100"
                : "text-white/80 group-hover:text-white"
            }`}
          >
            View
          </span>

          <span
            className={`transition group-hover:translate-x-0.5 ${
              featured ? "text-amber-300" : "text-white/60"
            }`}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}