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
    <div className="min-h-screen flex flex-col bg-bg text-text-primary">
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        <Rail />
        <main className="dashboard-grid flex-1 min-w-0 p-4">
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
