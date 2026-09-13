import type { DriverTelemetry, RaceEvent } from "../types";
import { getTyreStatus } from "../utils/tyreStatus";

export function detectDriverEvents(
  driverName: string,
  prev: DriverTelemetry,
  curr: DriverTelemetry,
): RaceEvent[] {
  const events: RaceEvent[] = [];
  const now = new Date().toLocaleTimeString("en-GB", { hour12: false });

  (["fl", "fr", "rl", "rr"] as const).forEach((corner) => {
    const prevStatus = getTyreStatus(prev.tyres[corner].tempC);
    const currStatus = getTyreStatus(curr.tyres[corner].tempC);
    if (
      prevStatus !== currStatus &&
      (currStatus === "warning" || currStatus === "critical")
    ) {
      events.push({
        id: `${driverName}-${corner}-${Date.now()}`,
        timestamp: now,
        severity: currStatus === "critical" ? "critical" : "tyre",
        message: `${driverName}: ${corner.toUpperCase()} tyre temperature ${currStatus === "critical" ? "critical" : "rising"} (${Math.round(curr.tyres[corner].tempC)}°C)`,
      });
    }
  });

  if (Math.floor(prev.lap) !== Math.floor(curr.lap)) {
    events.push({
      id: `${driverName}-lap-${curr.lap}-${Date.now()}`,
      timestamp: now,
      severity: "info",
      message: `${driverName}: Lap ${Math.floor(prev.lap)} completed`,
    });
  }

  if (curr.engineTempC > 130 && prev.engineTempC <= 130) {
    events.push({
      id: `${driverName}-engine-${Date.now()}`,
      timestamp: now,
      severity: "caution",
      message: `${driverName}: Engine temperature high (${curr.engineTempC.toFixed(0)}°C)`,
    });
  }

  if (curr.fuelPercent < 10 && prev.fuelPercent >= 10) {
    events.push({
      id: `${driverName}-fuel-${Date.now()}`,
      timestamp: now,
      severity: "caution",
      message: `${driverName}: Fuel critical (${curr.fuelPercent.toFixed(1)}%)`,
    });
  }

  return events;
}
