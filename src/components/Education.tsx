import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="border-b border-line py-20 sm:py-24" aria-labelledby="education-title">
      <div className="wrap">
        <SectionHeading
          id="education-title"
          index="05 — Education"
          title="School, honors, and a certification in progress."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="card p-6 sm:p-7">
            <p className="eyebrow">Degree</p>
            <h3 className="mt-3 text-2xl leading-tight font-medium tracking-[-0.03em] text-ink">
              {profile.school}
            </h3>
            <p className="mt-2 text-muted">
              {profile.college} · {profile.degree}
            </p>
            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-muted">Expected graduation</dt>
                <dd className="mt-1 text-ink">{profile.graduation}</dd>
              </div>
              <div>
                <dt className="text-muted">GPA</dt>
                <dd className="mt-1 text-ink">
                  {profile.gpa} / {profile.gpaScale}
                </dd>
              </div>
            </dl>
            <h4 className="mt-6 text-sm font-medium tracking-wide text-ink uppercase">Honors</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {profile.honors.map((honor) => (
                <li key={honor} className="chip">
                  {honor}
                </li>
              ))}
            </ul>
            <h4 className="mt-6 text-sm font-medium tracking-wide text-ink uppercase">Coursework</h4>
            <ul className="mt-3 space-y-2 text-muted">
              {profile.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </article>

          <article className="card p-6 sm:p-7">
            <p className="eyebrow">Certification</p>
            <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-ink">CompTIA A+</h3>
            <p className="mt-2 inline-flex rounded-full border border-line px-2.5 py-1 text-sm text-ink">
              In progress
            </p>
            <p className="mt-5 text-muted">
              I am currently studying computer hardware, operating systems, networking,
              troubleshooting, and IT support fundamentals. I have not taken the exam, and I have
              not earned the certification.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
