import type { Driver } from "../../types";

export function Rail({
  drivers,
  activeDriverId,
}: {
  drivers: Driver[];
  activeDriverId: string;
}) {
  return (
    <aside className="flex flex-row gap-2 overflow-x-auto border-b border-border bg-surface p-3 md:w-48 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-4">
      <p className="hidden md:block text-xs text-text-secondary uppercase tracking-widest mb-2">
        Drivers
      </p>

      {drivers.map((driver) => {
        const isActive = driver.id === activeDriverId;
        return (
          <div
            key={driver.id}
            className={`shrink-0 whitespace-nowrap md:whitespace-normal text-sm font-mono px-2 py-1 rounded-md border ${
              isActive
                ? "border-accent text-accent"
                : "border-transparent text-text-secondary"
            }`}
          >
            {driver.shortName}{" "}
            <span className="text-xs">P{driver.baseline.position}</span>
          </div>
        );
      })}
    </aside>
  );
}
