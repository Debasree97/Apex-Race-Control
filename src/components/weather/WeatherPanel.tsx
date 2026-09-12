import { useRace } from "../../context/RaceContext";

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
          <p>AIR TEMP</p>
          <p className="text-text-primary text-sm">{airTempC.toFixed(1)}°C</p>
        </div>
        <div>
          <p>CLOUD COVER</p>
          <p className="text-text-primary text-sm">
            {Math.round(cloudCoverPercent)}%
          </p>
        </div>
        <div>
          <p>HUMIDITY</p>
          <p className="text-text-primary text-sm">
            {Math.round(humidityPercent)}%
          </p>
        </div>
        <div>
          <p>PRESSURE</p>
          <p className="text-text-primary text-sm">
            {Math.round(pressureMb)} mb
          </p>
        </div>
        <div>
          <p>WIND</p>
          <p className="text-text-primary text-sm">
            {windSpeedKmh.toFixed(1)} km/h
          </p>
        </div>
      </div>
    </section>
  );
}
