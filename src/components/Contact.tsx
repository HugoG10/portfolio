import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.setTimeout(() => setStatus("idle"), 2000);
  }

  const copyLabel =
    status === "copied" ? "Copied" : status === "failed" ? profile.email : "Copy email";

  return (
    <section id="contact" className="py-20 sm:py-24" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="eyebrow">06 — Contact</p>
        <h2
          id="contact-title"
          className="mt-3 max-w-3xl text-[2rem] leading-tight font-medium tracking-[-0.03em] text-ink sm:text-5xl"
        >
          Let's Connect
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          I'm currently seeking opportunities to gain hands-on experience in IT support,
          infrastructure, networking, and cybersecurity. I'm always interested in learning from
          experienced professionals and contributing to teams solving real technical challenges.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button type="button" className="btn btn-ghost" onClick={copyEmail}>
            {status === "copied" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
            {copyLabel}
          </button>
          <Link className="btn btn-ghost" to="/resume">
            Download Resume
          </Link>
        </div>
        <p className="sr-only" aria-live="polite">
          {status === "copied" ? "Email copied." : status === "failed" ? "Could not copy the email." : ""}
        </p>

        <ul className="mt-10 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
          <li>
            <a className="inline-flex items-center gap-1 text-ink no-underline hover:underline" href={profile.github} target="_blank" rel="noreferrer">
              {profile.githubLabel} <ArrowUpRight size={14} aria-hidden />
            </a>
          </li>
          <li>
            <a className="inline-flex items-center gap-1 text-ink no-underline hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel} <ArrowUpRight size={14} aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
