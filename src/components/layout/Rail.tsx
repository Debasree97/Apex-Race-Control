import { useRace } from "../../context/RaceContext";

export function Rail() {
  const { seed, simState, activeDriverId } = useRace();

  return (
    <aside className="flex flex-row gap-2 overflow-x-auto border-b border-border bg-surface p-3 md:w-48 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-4">
      <p className="hidden md:block text-xs text-text-secondary uppercase tracking-widest mb-2">
        Drivers
      </p>

      {seed.drivers.map((driver) => {
        const isActive = driver.id === activeDriverId;
        const live = simState.drivers[driver.id];
        return (
          <div
            key={driver.id}
            className={`flex-shrink-0 whitespace-nowrap md:whitespace-normal text-sm font-mono px-2 py-1 rounded-md border ${
              isActive
                ? "border-accent text-accent"
                : "border-transparent text-text-secondary"
            }`}
          >
            {driver.shortName} <span className="text-xs">P{live.position}</span>
          </div>
        );
      })}
    </aside>
  );
}
