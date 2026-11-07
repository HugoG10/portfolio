import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { experience } from "../data/experience";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

export function Resume() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="py-8 sm:py-12">
      <Seo
        title={`Resume | ${profile.name}`}
        description={`${profile.name}, Computer Science student at ${profile.schoolShort}, seeking IT internships and entry-level IT roles.`}
        path="/resume"
      />
      <div className="no-print wrap mb-6 flex flex-wrap items-center gap-3">
        <Link to="/" className="btn btn-ghost">
          Back
        </Link>
        <button type="button" className="btn btn-primary" onClick={() => window.print()}>
          Save as PDF
        </button>
        <p className="w-full text-sm text-muted sm:w-auto">
          In the print dialog, choose Save as PDF.
        </p>
      </div>

      <article className="resume-sheet">
        <header>
          <h1>{profile.name}</h1>
          <p className="resume-role">{profile.role}</p>
          <p className="resume-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden> · </span>
            <a href={profile.linkedin}>{profile.linkedinLabel}</a>
            <span aria-hidden> · </span>
            <a href={profile.github}>{profile.githubLabel}</a>
            <span aria-hidden> · </span>
            <a href={profile.siteUrl}>hugog10.github.io/portfolio</a>
          </p>
          <p className="resume-summary">{profile.heroSummary}</p>
        </header>

        <section>
          <h2>Education</h2>
          <div className="resume-row">
            <p>
              <strong>{profile.school}</strong>
              <br />
              {profile.degree}
            </p>
            <p>
              Expected {profile.graduation}
              <br />
              GPA {profile.gpa} / {profile.gpaScale}
            </p>
          </div>
          <p>Honors: {profile.honors.join(", ")}</p>
          <p>Coursework: {profile.coursework.join("; ")}</p>
        </section>

        <section>
          <h2>Technical skills</h2>
          <ul>
            {skillGroups.map((group) => (
              <li key={group.id}>
                <strong>{group.title}:</strong> {group.items.join(", ")}
              </li>
            ))}
          </ul>
          <p>Also: Excel, Power BI, Power Query, DAX, Pandas, Matplotlib, R. Fluent in English and Spanish.</p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            {featured.map((project) => (
              <li key={project.slug}>
                <strong>{project.title}</strong> — {project.summary} {project.technologies.join(", ")}.
              </li>
            ))}
          </ul>
          <p>
            Additional analysis projects: SQL job-market study, Excel e-commerce dashboard, Power BI
            sales dashboard, Python churn analysis, and an R housing-price regression report.
          </p>
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((item) => (
            <div key={`${item.role}-${item.organization}`} className="resume-job">
              <div className="resume-row">
                <p>
                  <strong>{item.role}</strong>, {item.organization}
                </p>
                <p>{item.dates}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Certification</h2>
          <p>
            <strong>CompTIA A+</strong> — In progress. Studying hardware, operating systems,
            networking, troubleshooting, and IT support fundamentals. Not yet earned.
          </p>
        </section>
      </article>
    </div>
  );
}
