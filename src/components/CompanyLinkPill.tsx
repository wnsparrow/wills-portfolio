export default function CompanyLinkPill({
    href,
    label = "Website",
  }: {
    href: string;
    label?: string;
  }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        {label}
        <span aria-hidden>↗</span>
      </a>
    );
  }
  