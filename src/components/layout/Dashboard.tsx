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
    <div className="h-screen flex flex-col bg-bg text-text-primary overflow-hidden">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 min-h-0">
        <Rail />
        <main
          id="dashboard-scroll-area"
          className="dashboard-grid flex-1 min-w-0 min-h-0 p-4 overflow-y-auto"
        >
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
