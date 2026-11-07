import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · Computer Science · {profile.schoolShort}
        </p>
        <div className="flex gap-4">
          <a className="text-ink no-underline hover:underline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-ink no-underline hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link to="/" className="text-ink no-underline hover:underline">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
