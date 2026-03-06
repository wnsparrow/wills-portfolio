import RecentProjectCard from "@/components/RecentProjectCard";
import WorkCard from "@/components/WorkCard";
import { recentProjects, workItems } from "@/data/workItems";

export default function WorkIndexPage() {
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
          {workItems.map((item) => (
            <WorkCard key={item.href} {...item} />
          ))}
        </div>

        <section className="mt-12">
          <div className="mb-4">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Recent Projects
            </h2>
            <p className="mt-1 text-sm text-white/70">
              A couple of recent projects I’ve been working on.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {recentProjects.map((project) => (
              <RecentProjectCard key={project.href} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}