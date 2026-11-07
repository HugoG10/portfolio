import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-b border-line py-20 sm:py-24" aria-labelledby="about-title">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_18rem] lg:items-start">
        <div>
          <SectionHeading
            id="about-title"
            index="01 — About"
            title="Curious about how systems actually behave."
          />
          <div className="mt-8 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              I study computer science at {profile.schoolShort}. The work I want next is close to
              the computers and networks people rely on: a machine that is slow, a connection that
              fails, or a change that did not do what it was supposed to do.
            </p>
            <p>
              Most of my practice so far has been on Windows and Linux. I use Task Manager and
              other built-in tools to look at performance, and I use virtual machines, the
              terminal, Wireshark, and Scapy to see how traffic moves. I have also designed and
              deployed a live business website, including the domain, DNS, and HTTPS setup.
            </p>
            <p>
              I am preparing for CompTIA A+. The studying covers hardware, operating systems,
              networking, troubleshooting, and IT support fundamentals. I have not earned the
              certification. Longer term I want to work in cybersecurity, after I have real
              experience supporting systems and seeing how an organization runs its infrastructure.
            </p>
            <p>
              I am fluent in English and Spanish. I am looking for an internship or entry-level IT
              role where I can support users, learn from people who do this work, and get better at
              the practical side of it.
            </p>
          </div>
        </div>

        <aside className="card p-6" aria-label="Education">
          <p className="eyebrow">Education</p>
          <p className="mt-4 text-lg leading-snug font-medium text-ink">{profile.schoolShort}</p>
          <p className="mt-1 text-muted">{profile.degreeShort}</p>
          <dl className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Graduation</dt>
              <dd className="text-ink">{profile.graduation}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">GPA</dt>
              <dd className="text-ink">
                {profile.gpa} / {profile.gpaScale}
              </dd>
            </div>
            <div>
              <dt className="text-muted">Honors</dt>
              <dd className="mt-1 text-ink">{profile.honors.join(" · ")}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
