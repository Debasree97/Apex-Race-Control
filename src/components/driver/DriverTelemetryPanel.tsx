import { useRace } from "../../context/RaceContext";
import { useRollingHistory } from "../../hooks/useRollingHistory";
import { Sparkline } from "./Sparkline";

export function DriverTelemetryPanel() {
  const { simState, activeDriverId } = useRace();
  const { heartRateBpm, breathsPerMin, stress } =
    simState.drivers[activeDriverId];

  const heartRateHistory = useRollingHistory(heartRateBpm);
  const breathsHistory = useRollingHistory(breathsPerMin);
  const stressHistory = useRollingHistory(stress);

  return (
    <section className="bg-surface border border-border rounded-lg p-4 [grid-area:driver]">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        03 / Driver
      </h2>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
        <div className="border border-border rounded-md p-3">
          <p className="text-text-secondary text-xs font-mono">HEART RATE</p>
          <p className="text-success text-2xl font-mono">
            {Math.round(heartRateBpm)}{" "}
            <span className="text-xs text-text-secondary">BPM</span>
          </p>
          <div className="mt-2 border border-border rounded-sm">
            <Sparkline
              data={heartRateHistory}
              min={45}
              max={160}
              colorClass="stroke-success"
            />
          </div>
        </div>

        <div className="border border-border rounded-md p-3">
          <p className="text-text-secondary text-xs font-mono">BREATHING</p>
          <p className="text-telemetry-cyan text-2xl font-mono">
            {Math.round(breathsPerMin)}{" "}
            <span className="text-xs text-text-secondary">/min</span>
          </p>
          <div className="mt-2 border border-border rounded-sm">
            <Sparkline
              data={breathsHistory}
              min={8}
              max={25}
              colorClass="stroke-telemetry-cyan"
            />
          </div>
        </div>

        <div className="border border-border rounded-md p-3">
          <p className="text-text-secondary text-xs font-mono">STRESS</p>
          <p className="text-stress-purple text-2xl font-mono">
            {Math.round(stress)}
          </p>
          <div className="mt-2 border border-border rounded-sm">
            <Sparkline
              data={stressHistory}
              min={0}
              max={100}
              colorClass="stroke-stress-purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
