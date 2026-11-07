import { experience } from "../data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line py-20 sm:py-24" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHeading
          id="experience-title"
          index="04 — Experience"
          title="What I have actually been responsible for."
        >
          <p>
            One technical role and two roles that trained the communication side of support work.
            I am not describing the retail or volunteer work as IT experience.
          </p>
        </SectionHeading>

        <ol className="mt-12 max-w-3xl border-l border-line">
          {experience.map((item) => (
            <li key={`${item.role}-${item.organization}`} className="relative pb-12 pl-8 last:pb-0">
              <span
                className="absolute top-1.5 -left-px size-2.5 -translate-x-1/2 rounded-full border border-accent bg-canvas"
                aria-hidden
              />
              <p className="font-mono text-sm text-faint">{item.dates}</p>
              <h3 className="mt-1 text-2xl font-medium tracking-[-0.03em] text-ink">{item.role}</h3>
              <p className="text-muted">{item.organization}</p>
              <p className="mt-3 text-muted">{item.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
