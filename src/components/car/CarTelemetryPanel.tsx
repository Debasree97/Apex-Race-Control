import { useRace } from "../../context/RaceContext";
import { CollapsiblePanel } from "../layout/CollapsiblePanel";

export function CarTelemetryPanel() {
  const { simState, activeDriverId } = useRace();
  const { rpm, engineTempC, fuelPercent, ersPercent } =
    simState.drivers[activeDriverId];
  const rpmPercent = Math.min((rpm / 12000) * 100, 100);

  return (
    <CollapsiblePanel title="04 / Car telemetry" gridArea="cartel">
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">RPM</span>
            <span className="text-text-primary">
              {Math.round(rpm).toLocaleString()}
            </span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-telemetry-cyan"
              style={{ width: `${rpmPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">ENGINE TEMP</span>
            <span className="text-text-primary">
              {engineTempC.toFixed(1)}°C
            </span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-warning"
              style={{ width: `${Math.min((engineTempC / 140) * 100, 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">FUEL</span>
            <span className="text-text-primary">{fuelPercent.toFixed(1)}%</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-success"
              style={{ width: `${fuelPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">ERS</span>
            <span className="text-text-primary">{ersPercent.toFixed(0)}%</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-stress-purple" style={{ width: "72%" }} />
          </div>
        </div>
      </div>
    </CollapsiblePanel>
  );
}
