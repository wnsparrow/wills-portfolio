"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function MaybeNavbar() {
  const pathname = usePathname();
  const isAnalytics = pathname?.startsWith("/analytics");

  // If we are on /analytics, DO NOT render the global navbar
  if (isAnalytics) return null;

  return <Navbar />;
}
