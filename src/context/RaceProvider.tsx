import { useEffect, useState, type ReactNode } from "react";
import type { RaceEvent, RaceSeed, SimState } from "../types";
import { createRaceSimulator } from "../simulator/engine";
import { detectDriverEvents } from "../simulator/eventRules";
import { RaceContext } from "./RaceContextInstace";

const MAX_EVENTS = 20;

export function RaceProvider({
  seed,
  children,
}: {
  seed: RaceSeed;
  children: ReactNode;
}) {
  const [sim] = useState(() =>
    createRaceSimulator(seed.drivers, seed.weatherBaseline),
  );
  const [simState, setSimState] = useState<SimState>(() => sim.getState());
  const [activeDriverId, setActiveDriverId] = useState(seed.drivers[0].id);
  const [events, setEvents] = useState<RaceEvent[]>([]);

  useEffect(() => {
    let prevState: SimState = structuredClone(sim.getState());

    const unsubscribe = sim.subscribe((state) => {
      const newState = structuredClone(state);
      const newEvents: RaceEvent[] = [];

      seed.drivers.forEach((driver) => {
        const prev = prevState.drivers[driver.id];
        const curr = newState.drivers[driver.id];
        newEvents.push(...detectDriverEvents(driver.shortName, prev, curr));
      });

      if (newEvents.length > 0) {
        setEvents((existing) =>
          [...newEvents, ...existing].slice(0, MAX_EVENTS),
        );
      }

      prevState = newState;
      setSimState(newState);
    });

    sim.start();
    return () => {
      unsubscribe();
      sim.stop();
    };
  }, [sim, seed.drivers]);

  return (
    <RaceContext.Provider
      value={{ seed, simState, activeDriverId, setActiveDriverId, events }}
    >
      {children}
    </RaceContext.Provider>
  );
}
