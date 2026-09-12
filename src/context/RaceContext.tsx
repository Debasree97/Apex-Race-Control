import { useContext } from "react";
import { RaceContext } from "./RaceContextInstace";

export function useRace() {
  const ctx = useContext(RaceContext);
  if (!ctx) throw new Error("useRace must be used within a RaceProvider");
  return ctx;
}
