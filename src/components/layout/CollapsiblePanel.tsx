import { useState } from "react";
import type { CollapsiblePanelProps } from "../../types";

const gridAreaClass: Record<string, string> = {
  race: "[grid-area:race]",
  tyres: "[grid-area:tyres]",
  driver: "[grid-area:driver]",
  cartel: "[grid-area:cartel]",
  weather: "[grid-area:weather]",
  events: "[grid-area:events]",
};

export function CollapsiblePanel({
  title,
  children,
  gridArea,
  defaultOpen = false,
}: CollapsiblePanelProps) {
  const [open, setOpen] = useState(defaultOpen);
  const variantClass = open
    ? "panel-primary border-transparent"
    : "border-border";
  return (
    <section
      className={`bg-surface border rounded-xl p-4 xl:p-3 flex flex-col ${variantClass} ${gridAreaClass[gridArea]}`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left md:pointer-events-none md:cursor-default"
        aria-expanded={open}
      >
        <h2 className="flex items-center gap-2 text-xs text-text-secondary uppercase tracking-widest">
          <span
            className={`w-1 h-3 rounded-full ${open ? "bg-accent" : "bg-border"}`}
          />
          {title}
        </h2>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`w-4 h-4 text-text-secondary transition-transform md:hidden ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`${open ? "flex flex-col mt-3" : "hidden"} md:flex md:flex-col md:mt-3`}
      >
        {children}
      </div>
    </section>
  );
}
