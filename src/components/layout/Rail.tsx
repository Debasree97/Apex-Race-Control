import { useRace } from "../../context/RaceContext";
import { DriverNumberBadge } from "../../icons/DriverNumberBadge";

export function Rail() {
  const { seed, simState, activeDriverId, setActiveDriverId } = useRace();

  return (
    <aside className="flex flex-row gap-2 overflow-x-auto border-b border-border bg-surface p-3 md:w-48 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-4">
      <p className="hidden md:block text-xs text-text-secondary uppercase tracking-widest mb-2">
        Drivers
      </p>

      {seed.drivers.map((driver) => {
        const isActive = driver.id === activeDriverId;
        const live = simState.drivers[driver.id];
        return (
          <button
            key={driver.id}
            onClick={() => setActiveDriverId(driver.id)}
            aria-pressed={isActive}
            className={`shrink-0 flex items-center gap-2 whitespace-nowrap  md:whitespace-normal text-left text-sm font-mono px-2 py-1 rounded-md border outline-none transition-colors ${
              isActive
                ? "border-accent text-accent"
                : "border-transparent text-text-secondary hover:border-border hover:text-text-primary focus-visible:border-telemetry-cyan"
            }`}
          >
            <DriverNumberBadge
              number={driver.number}
              className="w-6 h-6 text-xs shrink-0"
            />
            {driver.shortName} <span className="text-xs">P{live.position}</span>
          </button>
        );
      })}
    </aside>
  );
}
