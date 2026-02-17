// src/components/RecentProjectCard.tsx
import Link from "next/link";
import type { RecentProject } from "@/data/workItems";

export default function RecentProjectCard({
  title,
  description,
  href,
  external = false,
}: RecentProject) {
  const linkProps = external
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:border-white/15">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Link
          href={href}
          {...linkProps}
          className="text-sm text-white/70 hover:text-white"
        >
          View
        </Link>

        <span className="text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white/60">
          →
        </span>
      </div>
    </div>
  );
}
