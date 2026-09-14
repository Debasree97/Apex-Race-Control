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
  defaultOpen = true,
}: CollapsiblePanelProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section
      className={`bg-surface border border-border rounded-lg p-4 xl:p-3 md:h-full md:min-h-0 flex flex-col ${gridAreaClass[gridArea]}`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left md:pointer-events-none md:cursor-default"
        aria-expanded={open}
      >
        <h2 className="text-xs text-text-secondary uppercase tracking-widest">
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
        className={`${open ? "flex flex-col flex-1 min-h-0 mt-3" : "hidden"} md:flex md:flex-col md:flex-1 md:min-h-0 md:mt-3`}
      >
        {children}
      </div>
    </section>
  );
}
