import { useRace } from "../../context/RaceContext";
import { CloudIcon } from "../../icons/CloudIcon";
import { HumidityIcon } from "../../icons/HumidityIcon";
import { PressureIcon } from "../../icons/PressureIcon";
import { TemperatureIcon } from "../../icons/TempatureIcon";
import { WindIcon } from "../../icons/WIndIcon";
import { CollapsiblePanel } from "../layout/CollapsiblePanel";

export function WeatherPanel() {
  const { simState } = useRace();
  const {
    airTempC,
    cloudCoverPercent,
    humidityPercent,
    pressureMb,
    windSpeedKmh,
  } = simState.weather;

  const items = [
    {
      Icon: TemperatureIcon,
      label: "AIR TEMP",
      value: `${airTempC.toFixed(1)}°C`,
    },
    {
      Icon: CloudIcon,
      label: "CLOUD",
      value: `${Math.round(cloudCoverPercent)}%`,
    },
    {
      Icon: HumidityIcon,
      label: "HUMIDITY",
      value: `${Math.round(humidityPercent)}%`,
    },
    {
      Icon: PressureIcon,
      label: "PRESSURE",
      value: `${Math.round(pressureMb)} mb`,
    },
    { Icon: WindIcon, label: "WIND", value: `${windSpeedKmh.toFixed(1)} km/h` },
  ];

  return (
    <CollapsiblePanel title="05 / Weather">
      <div className="grid grid-cols-5 sm:grid-cols-3 xl:grid-cols-5 gap-3 font-mono text-xs text-text-secondary">
        {items.map(({ Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center gap-1 min-w-0"
          >
            <Icon className="w-4 h-4 text-telemetry-cyan shrink-0" />
            <p className="hidden sm:inline whitespace-nowrap">{label}</p>
            <p className="text-text-primary text-sm whitespace-nowrap">
              {value}
            </p>
          </div>
        ))}
      </div>
    </CollapsiblePanel>
  );
}
