import RecentProjectCard from "@/components/RecentProjectCard";
import WorkCard from "@/components/WorkCard";
import {
  analyticsWorkItems,
  additionalExperienceItems,
  recentProjects,
} from "@/data/workItems";

export default function AnalyticsWorkIndexPage() {
  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <h1 className="sr-only">Work</h1>

        {/* Analytics Experience */}
        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Professional Experience
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Roles focused on analytics, product, and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {analyticsWorkItems.map((item) => (
              <WorkCard key={item.href} {...item} />
            ))}
          </div>
        </section>

        {/* Recent Projects */}
        <section className="mt-14">
          <div className="mb-5">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Recent Projects
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Selected analytics projects and case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {recentProjects.map((project) => (
              <RecentProjectCard key={project.href} {...project} />
            ))}
          </div>
        </section>

        {/* Additional Experience */}
        <section className="mt-14">
          <div className="mb-5">
            <h2 className="text-xl font-semibold tracking-tight text-white/95 sm:text-2xl">
              Additional Experience
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:text-base">
              Creative and production work that has strengthened coordination,
              communication, and execution.
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