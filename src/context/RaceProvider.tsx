import { useEffect, useState, type ReactNode } from "react";
import { createRaceSimulator } from "../simulator/engine";
import type { RaceSeed, SimState } from "../types";
import { RaceContext } from "./RaceContextInstace";

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

  useEffect(() => {
    const unsubscribe = sim.subscribe((state) => setSimState({ ...state }));
    sim.start();
    return () => {
      unsubscribe();
      sim.stop();
    };
  }, [sim]);

  return (
    <RaceContext.Provider
      value={{ seed, simState, activeDriverId, setActiveDriverId }}
    >
      {children}
    </RaceContext.Provider>
  );
}
