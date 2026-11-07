import { useState } from "react";
import { filters, projects, type FilterId } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { SectionHeading } from "./SectionHeading";

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");
  const visible = projects.filter((project) => {
    if (filter === "all") return true;
    return project.filters.includes(filter);
  });
  const featured = visible.filter((project) => project.featured);
  const additional = visible.filter((project) => !project.featured);
  const label = filters.find((item) => item.id === filter)?.label ?? "All";

  return (
    <section id="projects" className="border-b border-line py-20 sm:py-24" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeading id="projects-title" index="03 — Projects" title="Work a hiring manager can open.">
          <p>
            The first group is IT support, networking, deployment, and application work. Data
            analysis projects from my earlier portfolio are kept underneath, so that record is
            still here.
          </p>
        </SectionHeading>

        <ProjectFilter value={filter} onChange={setFilter} />
        <p className="mt-4 text-sm text-faint" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
          {filter === "all" ? "" : ` · ${label}`}
        </p>

        {visible.length === 0 ? (
          <div className="mt-8 rounded-xl border border-dashed border-line px-6 py-10">
            <p className="text-lg text-ink">No completed project in this category yet.</p>
            {filter === "cybersecurity" ? (
              <p className="mt-2 max-w-xl text-muted">
                Cybersecurity is a long-term goal, not work I have finished. The closest published
                practice is the Linux and networking labs.
              </p>
            ) : null}
            {filter === "cybersecurity" ? (
              <button
                type="button"
                className="btn btn-ghost mt-6"
                onClick={() => setFilter("networking")}
              >
                Show networking labs
              </button>
            ) : null}
          </div>
        ) : null}

        {featured.length > 0 ? (
          <div className="mt-10">
            <p className="eyebrow">Featured</p>
            <ul className="mt-4 grid gap-4">
              {featured.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={pad(index)} />
              ))}
            </ul>
          </div>
        ) : null}

        {additional.length > 0 ? (
          <div className="mt-14">
            <p className="eyebrow">Additional projects</p>
            <p className="mt-3 max-w-2xl text-muted">
              Earlier analysis work in SQL, Excel, Power BI, Python, and R. Useful evidence of
              careful technical work, and not the focus of my IT applications.
            </p>
            <ul className="mt-4 grid gap-4">
              {additional.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={pad(featured.length + index)} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
