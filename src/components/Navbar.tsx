"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Hobbies", href: "/hobbies" },
];

export default function Navbar() {
  const pathname = usePathname();

  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // If we're already on the homepage, manually scroll
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // If not on homepage, allow normal navigation to /#contact
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/60 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white/90 hover:text-white"
        >
          <div className="relative h-7 w-7 overflow-hidden rounded-full border border-white/15">
            <Image
              src="/headshot.png"
              alt="Will Sparrow"
              fill
              className="object-cover"
              priority
            />
          </div>

          <span>Will Sparrow</span>
        </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            {/* Contact: special behavior */}
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
