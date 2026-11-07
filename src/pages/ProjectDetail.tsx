import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { getProject } from "../data/projects";
import { asset } from "../lib/assets";
import { NotFound } from "./NotFound";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10 border-t border-line pt-6">
      <h2 className="text-sm font-medium tracking-[0.14em] text-faint uppercase">{title}</h2>
      <div className="mt-3 max-w-2xl text-muted">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-ink">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [slug]);

  if (!project) return <NotFound />;

  return (
    <article className="wrap py-12 sm:py-16">
      <Seo
        title={`${project.title} | Hugo Guerra-Garcia`}
        description={project.summary}
        path={`/projects/${project.slug}`}
      />
      <Link
        to="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-ink"
      >
        <ArrowLeft size={16} aria-hidden />
        All projects
      </Link>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18.5rem]">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">{project.category}</p>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="mt-3 text-4xl leading-tight font-medium tracking-[-0.035em] text-ink sm:text-5xl"
          >
            {project.title}
          </h1>
          {project.period ? <p className="mt-3 font-mono text-sm text-faint">{project.period}</p> : null}
          <p className="mt-5 max-w-2xl text-lg text-muted">{project.summary}</p>

          <Block title="Overview">
            <p>{project.overview}</p>
          </Block>
          <Block title="Objective">
            <p>{project.objective}</p>
          </Block>
          {project.implementation.length > 0 ? (
            <Block title="Implementation">
              <BulletList items={project.implementation} />
            </Block>
          ) : null}
          {project.challenges.length > 0 ? (
            <Block title="Troubleshooting and technical challenges">
              <BulletList items={project.challenges} />
            </Block>
          ) : null}
          {project.results.length > 0 ? (
            <Block title="Results">
              <BulletList items={project.results} />
            </Block>
          ) : null}
          {project.lessons.length > 0 ? (
            <Block title="Lessons learned">
              <BulletList items={project.lessons} />
            </Block>
          ) : null}
          {project.screenshots && project.screenshots.length > 0 ? (
            <Block title="Screenshots">
              <ul className="grid gap-5">
                {project.screenshots.map((shot) => (
                  <li key={shot.src}>
                    <img
                      src={asset(shot.src)}
                      alt={shot.alt}
                      className="w-full rounded-lg border border-line"
                      loading="lazy"
                    />
                    <p className="mt-2 text-sm text-faint">{shot.caption}</p>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}
        </div>

        <aside className="card order-1 p-5 lg:sticky lg:top-24 lg:order-2">
          <p className="eyebrow">Tools and technologies</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          {project.highlights && project.highlights.length > 0 ? (
            <dl className="mt-6 space-y-3 border-t border-line pt-5">
              {project.highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm text-muted">{item.label}</dt>
                  <dd className="text-2xl font-medium tracking-tight text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
            {project.github ? (
              <a className="btn btn-ghost" href={project.github} target="_blank" rel="noreferrer">
                GitHub repository <ArrowUpRight size={15} aria-hidden />
              </a>
            ) : null}
            {project.demo ? (
              <a className="btn btn-primary" href={project.demo} target="_blank" rel="noreferrer">
                {project.demoLabel ?? "Live demo"} <ArrowUpRight size={15} aria-hidden />
              </a>
            ) : null}
            {!project.github && !project.demo ? (
              <p className="text-sm text-muted">No public repository or live demo for this project.</p>
            ) : null}
          </div>
        </aside>
      </div>
    </article>
  );
}
