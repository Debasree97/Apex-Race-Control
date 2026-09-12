import type { DriverTelemetry } from "../../types";

export function CarTelemetryPanel({
  telemetry,
}: {
  telemetry: Pick<DriverTelemetry, "rpm" | "engineTempC" | "fuelPercent">;
}) {
  const { rpm, engineTempC, fuelPercent } = telemetry;
  const rpmPercent = Math.min((rpm / 12000) * 100, 100); // 12,000 as an assumed redline for the bar fill
  const engineTempCPercent = Math.min((engineTempC / 140) * 100, 100); // 140 as an assumed maximum for the bar fill
  return (
    <section className="bg-surface border border-border rounded-lg p-4">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        04 / Car telemetry
      </h2>

      <div className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">RPM</span>
            <span className="text-text-primary">{rpm.toLocaleString()}</span>
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
            <span className="text-text-primary">{engineTempC}°C</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-warning"
              style={{
                width: `${engineTempCPercent}%`,
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">FUEL</span>
            <span className="text-text-primary">{fuelPercent}%</span>
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
            <span className="text-text-primary">72%</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-stress-purple" style={{ width: "72%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
