import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="border-b border-line" aria-labelledby="hero-title">
      <div className="wrap grid gap-12 py-16 lg:grid-cols-[minmax(0,1.35fr)_20rem] lg:items-end lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2.5 text-sm text-muted">
            <span className="status-dot" aria-hidden />
            {profile.availability}
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-[clamp(2.8rem,7vw,5.1rem)] leading-[0.96] font-medium tracking-[-0.045em] text-ink"
          >
            {profile.name}
          </h1>
          <p className="mt-5 text-xl tracking-[-0.02em] text-ink sm:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.heroSummary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <Link className="btn btn-ghost" to="/resume">
              Download Resume
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <a className="inline-flex items-center gap-1 text-ink no-underline hover:underline" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={14} aria-hidden />
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-1 text-ink no-underline hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={14} aria-hidden />
              </a>
            </li>
            <li>
              <a className="text-ink no-underline hover:underline" href={`mailto:${profile.email}`}>
                Email
              </a>
            </li>
          </ul>
        </div>

        <aside className="card p-6 sm:p-7" aria-label="Profile summary">
          <dl className="space-y-5 text-base">
            <div>
              <dt className="eyebrow">School</dt>
              <dd className="mt-2 text-base text-ink">{profile.schoolShort}</dd>
              <dd className="text-muted">{profile.degreeShort}</dd>
              <dd className="text-muted">
                {profile.gpa} GPA · {profile.graduation}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Focus</dt>
              <dd className="mt-2 text-ink">IT support, networking, systems, and infrastructure</dd>
            </div>
            <div>
              <dt className="eyebrow">Certifications</dt>
              <dd className="mt-2 text-ink">CompTIA A+</dd>
              <dd className="text-ink">Google IT Support Professional Certificate</dd>
              <dd className="text-muted">Both in progress. Neither is earned yet.</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
