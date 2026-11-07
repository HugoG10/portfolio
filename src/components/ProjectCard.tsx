import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export function ProjectCard({ project, index }: { project: Project; index: string }) {
  return (
    <li className="card group p-6 sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow">{project.category}</p>
        <span className="font-mono text-sm text-faint">{index}</span>
      </div>
      <h3 className="mt-3 text-2xl leading-tight font-medium tracking-[-0.03em]">
        <Link
          to={`/projects/${project.slug}`}
          className="text-ink no-underline hover:text-accent"
        >
          {project.title}
        </Link>
      </h3>
      {project.period ? <p className="mt-2 text-sm text-faint">{project.period}</p> : null}
      <p className="mt-3 max-w-2xl text-muted">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-medium text-ink no-underline"
        >
          View project
          <ArrowRight size={16} className="arrow-shift" aria-hidden />
        </Link>
        {project.demo ? (
          <a className="text-muted no-underline hover:text-ink" href={project.demo} target="_blank" rel="noreferrer">
            {project.demoLabel ?? "Live demo"}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
        {project.github ? (
          <a className="text-muted no-underline hover:text-ink" href={project.github} target="_blank" rel="noreferrer">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </li>
  );
}
