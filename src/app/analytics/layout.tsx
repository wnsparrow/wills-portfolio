// src/app/analytics/layout.tsx
import Image from "next/image";
import Link from "next/link";
import AnalyticsNav from "@/components/AnalyticsNav";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto w-full max-w-6xl px-6 py-4 sm:px-10">
          <div className="flex items-center justify-between">
            {/* Match production Navbar brand */}
            <Link
              href="/analytics"
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

            {/* Right side nav */}
            <AnalyticsNav />
          </div>
        </div>
      </header>

      {children}
    </>
  );
}
