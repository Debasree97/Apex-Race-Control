import type { Weather } from "../../types";

export function WeatherPanel({ weather }: { weather: Weather }) {
  const {
    airTempC,
    cloudCoverPercent,
    humidityPercent,
    pressureMb,
    windSpeedKmh,
  } = weather;
  return (
    <section className="bg-surface border border-border rounded-lg p-4">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        07 / Weather
      </h2>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5 font-mono text-xs text-text-secondary">
        <div>
          <p>AIR TEMP</p>
          <p className="text-text-primary text-sm">{airTempC}°C</p>
        </div>
        <div>
          <p>CLOUD COVER</p>
          <p className="text-text-primary text-sm">{cloudCoverPercent}%</p>
        </div>
        <div>
          <p>HUMIDITY</p>
          <p className="text-text-primary text-sm">{humidityPercent}%</p>
        </div>
        <div>
          <p>PRESSURE</p>
          <p className="text-text-primary text-sm">{pressureMb} mb</p>
        </div>
        <div>
          <p>WIND</p>
          <p className="text-text-primary text-sm">{windSpeedKmh} km/h</p>
        </div>
      </div>
    </section>
  );
}
