import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, profile } from "../data/profile";
import { useTheme } from "../lib/theme";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuId = useId();
  const onHome = location.pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!onHome) {
      setActive("");
      return;
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  const projectsCurrent = location.pathname.startsWith("/projects");

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="site-bar wrap flex items-center gap-4">
        <Link to="/" className="min-w-0 truncate font-medium tracking-tight text-ink no-underline">
          <span className="sm:hidden">Hugo</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const current =
              (onHome && active === link.id) || (link.id === "projects" && projectsCurrent);
            return (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                aria-current={current ? "true" : undefined}
                className={`text-sm no-underline ${current ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
          </button>
          <Link to="/resume" className="btn btn-primary hidden sm:inline-flex">
            Resume
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id={menuId} className="border-t border-line lg:hidden" aria-label="Primary">
          <div className="wrap flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className="rounded-lg px-2 py-3 text-ink no-underline hover:bg-panel-2"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/resume" className="rounded-lg px-2 py-3 text-ink no-underline hover:bg-panel-2">
              Resume
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
