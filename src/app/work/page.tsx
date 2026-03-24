import WorkCard from "@/components/WorkCard";
import { productionWorkItems } from "@/data/workItems";

export default function WorkIndexPage() {
  const primaryExperienceItems = productionWorkItems.filter(
    (item) => item.title === "Raindrop" || item.title === "OBG"
  );

  const additionalExperienceItems = productionWorkItems.filter(
    (item) => item.title === "Ledger Investing" || item.title === "Accenture"
  );

  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <h1 className="sr-only">Work</h1>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Professional Experience
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Production and creative experience across shoots, events, and supporting roles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {primaryExperienceItems.map((item) => (
              <WorkCard key={item.href} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5">
            <h2 className="text-xl font-semibold tracking-tight text-white/95 sm:text-2xl">
              Additional Experience
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Product, analytics, and technical work that has strengthened how I organize, communicate, and execute.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {additionalExperienceItems.map((item) => (
              <WorkCard key={item.href} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}