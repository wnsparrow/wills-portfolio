import WorkCard from "@/components/WorkCard";
import { workItems } from "@/data/workItems";

export default function AnalyticsWorkIndexPage() {
  const analyticsWorkItems = workItems
    .slice()
    .reverse()
    .map((item) => ({
      ...item,
      // "/work/accenture" -> "/analytics/work/accenture"
      href: item.href.replace(/^\/work/, "/analytics/work"),
    }));

  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Work
        </h1>
        <p className="mt-2 text-white/70">
          Selected case studies and highlights.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {analyticsWorkItems.map((item) => (
            <WorkCard key={item.href} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}
