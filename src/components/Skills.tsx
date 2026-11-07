import { Code2, GitBranch, Monitor, Network, Radar, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups } from "../data/skills";
import { SectionHeading } from "./SectionHeading";

const icons: Record<(typeof skillGroups)[number]["id"], LucideIcon> = {
  os: Monitor,
  support: Wrench,
  networking: Network,
  tools: Radar,
  programming: Code2,
  devtools: GitBranch,
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-line py-20 sm:py-24" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading id="skills-title" index="02 — Skills" title="Practical familiarity, not a mastery chart.">
          <p>
            Tools and topics I have used in labs, coursework, and projects. This is hands-on
            familiarity. It is not a claim of expert-level mastery.
          </p>
        </SectionHeading>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = icons[group.id];
            return (
              <li key={group.id} className="card p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Icon size={18} aria-hidden className="text-accent" />
                  <h3 className="text-base font-medium text-ink">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 max-w-2xl text-muted">
          I also use Excel, Power BI, Power Query, and R in the data projects further down. Analysis
          work is part of my record. It is not the center of the roles I am applying for now.
          Outside of tools: fluent English and Spanish, customer service, and technical
          communication.
        </p>
      </div>
    </section>
  );
}
