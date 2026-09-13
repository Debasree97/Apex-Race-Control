import { useRace } from "../../context/RaceContext";
import { CloudIcon } from "../../icons/CloudIcon";
import { HumidityIcon } from "../../icons/Humidityicon";
import { TemperatureIcon } from "../../icons/TempatureIcon";
import { WindIcon } from "../../icons/WIndIcon";

export function WeatherPanel() {
  const { simState } = useRace();
  const {
    airTempC,
    cloudCoverPercent,
    humidityPercent,
    pressureMb,
    windSpeedKmh,
  } = simState.weather;

  return (
    <section className="bg-surface border border-border rounded-lg p-4 [grid-area:weather]">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        07 / Weather
      </h2>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5 font-mono text-xs text-text-secondary">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <TemperatureIcon className="w-3.5 h-3.5 text-telemetry-cyan" />
            <p>AIR TEMP</p>
          </div>
          <p className="text-text-primary text-sm">{airTempC.toFixed(1)}°C</p>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <CloudIcon className="w-3.5 h-3.5 text-telemetry-cyan" />
            <p>CLOUD COVER</p>
          </div>
          <p className="text-text-primary text-sm">
            {Math.round(cloudCoverPercent)}%
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <HumidityIcon className="w-3.5 h-3.5 text-telemetry-cyan" />
            <p>HUMIDITY</p>
          </div>
          <p className="text-text-primary text-sm">
            {Math.round(humidityPercent)}%
          </p>
        </div>
        <div>
          <p className="mb-1">PRESSURE</p>
          <p className="text-text-primary text-sm">
            {Math.round(pressureMb)} mb
          </p>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <WindIcon className="w-3.5 h-3.5 text-telemetry-cyan" />
            <p>WIND</p>
          </div>
          <p className="text-text-primary text-sm">
            {windSpeedKmh.toFixed(1)} km/h
          </p>
        </div>
      </div>
    </section>
  );
}
