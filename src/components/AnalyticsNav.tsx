"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/analytics" },
  { label: "Work", href: "/analytics/work" },
  { label: "Hobbies", href: "/analytics/hobbies" },
  { label: "Resume", href: "/analytics/resume" },
];

export default function AnalyticsNav() {
  const pathname = usePathname();

  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/analytics") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // otherwise: let it go to /analytics#contact
  }

  return (
    <nav className="flex items-center gap-6 text-sm text-white/70">
      {nav.map((item) => (
        <Link key={item.href} href={item.href} className="hover:text-white">
          {item.label}
        </Link>
      ))}
      <Link
        href="/analytics#contact"
        onClick={handleContactClick}
        className="hover:text-white"
      >
        Contact
      </Link>
    </nav>
  );
}
