import type { RaceSeed } from "../../types";
import { CarTelemetryPanel } from "../car/CarTelemetryPanel";
import { CarTyresPanel } from "../car/CarTyresPanel";
import { DriverTelemetryPanel } from "../driver/DriverTelemetryPanel";
import { EventsPanel } from "../events/EventsPanel";
import { RaceStatusPanel } from "../race/RaceStatusPanel";
import { WeatherPanel } from "../weather/WeatherPanel";
import { Header } from "./Header";
import { Rail } from "./Rail";

export function Dashboard({ seed }: { seed: RaceSeed }) {
  const activeDriver = seed.drivers[0];
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header driver={activeDriver} circuit={seed.circuit} />
      <div className="flex flex-col md:flex-row">
        <Rail drivers={seed.drivers} activeDriverId={activeDriver.id} />
        <main className="dashboard-grid p-4">
          <RaceStatusPanel driver={activeDriver} circuit={seed.circuit} />
          <CarTyresPanel tyres={activeDriver.baseline.tyres} />
          <EventsPanel sampleEvents={seed.sampleEvents} />
          <CarTelemetryPanel telemetry={activeDriver.baseline} />
          <DriverTelemetryPanel telemetry={activeDriver.baseline} />
          <WeatherPanel weather={seed.weatherBaseline} />
        </main>
      </div>
    </div>
  );
}
