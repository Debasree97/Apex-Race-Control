import { useEffect, useRef, useState } from "react";
import { useRace } from "../../context/RaceContext";
import { useClock } from "../../hooks/useClock";
import { CheckeredFlagIcon } from "../../icons/CheckeredFlagIcon";
import { DriverNumberBadge } from "../../icons/DriverNumberBadge";
import { DriverSilhouetteIcon } from "../../icons/DriverSilhoutteIcon";

export function Header() {
  const { seed, simState, activeDriverId, setActiveDriverId } = useRace();
  const driver = seed.drivers.find((d) => d.id === activeDriverId)!;
  const baseline = simState.drivers[activeDriverId];
  const circuit = seed.circuit;
  const clock = useClock();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const leaderEntry = Object.entries(simState.drivers).find(
    ([, d]) => d.position === 1,
  );
  const leaderDriver = leaderEntry
    ? seed.drivers.find((d) => d.id === leaderEntry[0])
    : undefined;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface px-4 py-2 md:px-6 md:py-3 flex flex-nowrap items-center justify-between gap-4">
      <div className="flex items-center gap-2 shrink-0">
        <div className="shrink-0">
          <p className="font-semibold tracking-wide text-sm md:text-base whitespace-nowrap">
            APEX RACING
          </p>
          <p className="hidden sm:block text-[10px] text-text-secondary tracking-widest whitespace-nowrap">
            RACE CONTROL
          </p>
        </div>
      </div>
      <span className="flex items-center gap-1 text-success text-xs font-mono shrink-0 whitespace-nowrap ml-2">
        <CheckeredFlagIcon className="hidden sm:inline w-3.5 h-3.5 text-text-secondary" />
        <span className="hidden sm:inline">
          RACE {baseline.lap}/{circuit.totalLaps}
        </span>
        <span className="w-2 h-2 rounded-full bg-success" />
        LIVE
      </span>
      <span className="flex items-center gap-1 text-xs font-mono shrink-0 whitespace-nowrap">
        <span className="text-accent uppercase">Lead</span>
        <span className="text-text-primary">
          {leaderDriver?.shortName ?? "—"}
        </span>
      </span>

      <span className="hidden lg:inline text-text-secondary text-sm font-mono shrink-0 whitespace-nowrap">
        {clock}
      </span>

      <div ref={dropdownRef} className="relative shrink-0 ">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="listbox"
          className="flex items-center gap-2 px-2 py-1 rounded-md border border-transparent hover:border-border transition-colors outline-none focus-visible:border-telemetry-cyan whitespace-nowrap"
        >
          <DriverSilhouetteIcon className="hidden lg:inline w-6 h-6 md:w-7 md:h-7 text-text-secondary bg-surface-elevated rounded-full p-1 shrink-0" />
          <span className="text-xs md:text-sm font-mono text-text-primary">
            {driver.shortName}
          </span>
          <span className="text-xs md:text-sm font-mono text-text-secondary hidden sm:inline">
            P{baseline.position}&nbsp;&nbsp;{baseline.lap}/{circuit.totalLaps}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`w-3 h-3 text-text-secondary transition-transform shrink-0 ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {open && (
          <div
            role="listbox"
            className="absolute right-0 top-full mt-1 w-[calc(100vw-2rem)] max-w-56 bg-surface-elevated border border-border rounded-md shadow-lg z-30 overflow-hidden"
          >
            {seed.drivers.map((d) => {
              const live = simState.drivers[d.id];
              const isActive = d.id === activeDriverId;
              return (
                <button
                  key={d.id}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveDriverId(d.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left font-mono text-xs transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:bg-border/40 hover:text-text-primary"
                  }`}
                >
                  <DriverNumberBadge number={d.number} isActive={isActive} />
                  <span>{d.shortName}</span>
                  <span className="ml-auto">P{live.position}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
