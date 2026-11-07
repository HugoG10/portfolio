import type { KeyboardEvent } from "react";
import { filters, type FilterId } from "../data/projects";

export function ProjectFilter({
  value,
  onChange,
}: {
  value: FilterId;
  onChange: (value: FilterId) => void;
}) {
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = filters.findIndex((filter) => filter.id === value);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = filters[(index + direction + filters.length) % filters.length];
    onChange(next.id);
    const buttons = event.currentTarget.querySelectorAll("button");
    buttons[(index + direction + filters.length) % filters.length]?.focus();
  }

  return (
    <div
      className="mt-8 flex gap-2 overflow-x-auto pb-1"
      role="toolbar"
      aria-label="Filter projects"
      onKeyDown={onKeyDown}
    >
      {filters.map((filter) => {
        const selected = value === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(filter.id)}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-base ${
              selected ? "border-ink bg-ink text-canvas" : "border-line text-ink hover:bg-panel-2"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
