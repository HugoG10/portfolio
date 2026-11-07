import type { ReactNode } from "react";

export function SectionHeading({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{index}</p>
      <h2
        id={id}
        className="mt-3 text-[2rem] leading-tight font-medium tracking-[-0.03em] text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {children ? <div className="mt-4 space-y-3 text-muted">{children}</div> : null}
    </div>
  );
}
