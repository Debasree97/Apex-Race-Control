import { CarTelemetryPanel } from "../car/CarTelemetryPanel";
import { CarTyresPanel } from "../car/CarTyresPanel";
import { DriverTelemetryPanel } from "../driver/DriverTelemetryPanel";
import { EventsPanel } from "../events/EventsPanel";
import { RaceStatusPanel } from "../race/RaceStatusPanel";
import { WeatherPanel } from "../weather/WeatherPanel";
import { Header } from "./Header";
import { Rail } from "./Rail";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [leftColumnEl, setLeftColumnEl] = useState<HTMLDivElement | null>(null);
  const [leftColumnHeight, setLeftColumnHeight] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!leftColumnEl) return;

    const observer = new ResizeObserver((entries) => {
      setLeftColumnHeight(entries[0].contentRect.height);
    });
    observer.observe(leftColumnEl);
    return () => observer.disconnect();
  }, [leftColumnEl]);

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Rail />
        <main className="dashboard-grid p-4">
          <div
            ref={setLeftColumnEl}
            className="[grid-area:leftstack] flex flex-col gap-3"
          >
            <RaceStatusPanel />
            <CarTyresPanel />
          </div>
          <EventsPanel maxHeight={leftColumnHeight} />
          <CarTelemetryPanel />
          <DriverTelemetryPanel />
          <WeatherPanel />
        </main>
      </div>
    </div>
  );
}
