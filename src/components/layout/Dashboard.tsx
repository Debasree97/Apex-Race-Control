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

      <div className="flex flex-1 flex-col md:flex-row">
        <Rail />

        <main
          className="
    grid flex-1 min-w-0 gap-3 p-4
    sm:grid-cols-2
    lg:grid-cols-3
    lg:grid-rows-4
    lg:min-h-[calc(100vh-5rem)]
  "
        >
          <div className="md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 min-h-0 flex flex-col">
            <RaceStatusPanel />
          </div>

          <div className="md:col-start-2 md:row-start-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 min-h-0 flex flex-col">
            <CarTyresPanel />
          </div>

          <div className="md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-3 lg:row-span-1 min-h-0 flex flex-col">
            <CarTelemetryPanel />
          </div>

          <div className="md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-3 lg:row-span-2 min-h-0 flex flex-col">
            <DriverTelemetryPanel />
          </div>

          <div className="md:col-start-1 md:row-start-3 lg:col-start-1 lg:row-start-4 lg:row-span-1 min-h-0 flex flex-col">
            <WeatherPanel />
          </div>

          <div className="md:col-start-2 md:row-start-3 min-h-0 h-full flex flex-col lg:col-start-3 lg:row-start-1 lg:row-span-4">
            <EventsPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
