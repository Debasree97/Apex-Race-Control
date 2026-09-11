import { CarTelemetryPanel } from "../car/CarTelemetryPanel";
import { CarTyresPanel } from "../car/CarTyresPanel";
import { DriverTelemetryPanel } from "../driver/DriverTelemetryPanel";
import { EventsPanel } from "../events/EventsPanel";
import { RaceStatusPanel } from "../race/RaceStatusPanel";
import { WeatherPanel } from "../weather/WeatherPanel";
import { Header } from "./Header";
import { Rail } from "./Rail";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Rail />
        <main className="flex-1 grid grid-cols-1 gap-3 p-4 md:grid-cols-3">
          <RaceStatusPanel />
          <CarTyresPanel />
          <EventsPanel />
          <CarTelemetryPanel />
          <DriverTelemetryPanel />
          <WeatherPanel />
        </main>
      </div>
    </div>
  );
}
