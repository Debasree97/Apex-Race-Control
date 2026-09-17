import { useRace } from "../../context/RaceContext";
import { useRollingHistory } from "../../hooks/useRollingHistory";
import { CollapsiblePanel } from "../layout/CollapsiblePanel";
import { CircularGauge } from "./CircularGauge";
import { Sparkline } from "./Sparkline";

export function DriverTelemetryPanel() {
  const { simState, activeDriverId } = useRace();
  const { heartRateBpm, breathsPerMin, stress } =
    simState.drivers[activeDriverId];

  const heartRateHistory = useRollingHistory(heartRateBpm);
  const breathsHistory = useRollingHistory(breathsPerMin);
  const stressHistory = useRollingHistory(stress);

  return (
    <CollapsiblePanel title="03 / Driver state">
      <div className="flex flex-col gap-3 flex-1 justify-around">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <CircularGauge
              value={heartRateBpm}
              min={45}
              max={160}
              colorClass="text-success"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-sm text-text-primary leading-none">
                {Math.round(heartRateBpm)}
              </span>
              <span className="text-[8px] text-text-secondary leading-none mt-0.5">
                BPM
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0 ">
            <p className="text-text-secondary text-xs mb-1">Heart Rate</p>
            <Sparkline
              data={heartRateHistory}
              min={45}
              max={160}
              colorClass="stroke-success"
              fillClass="fill-success"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <CircularGauge
              value={breathsPerMin}
              min={8}
              max={25}
              colorClass="text-telemetry-cyan"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-sm text-text-primary leading-none">
                {Math.round(breathsPerMin)}
              </span>
              <span className="text-[8px] text-text-secondary leading-none mt-0.5">
                /min
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-text-secondary text-xs mb-1">Breathing Rate</p>
            <Sparkline
              data={breathsHistory}
              min={8}
              max={25}
              colorClass="stroke-telemetry-cyan"
              fillClass="fill-telemetry-cyan"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <CircularGauge
              value={stress}
              min={0}
              max={100}
              colorClass="text-stress-purple"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-sm text-text-primary leading-none">
                {Math.round(stress)}
              </span>
              <span className="text-[8px] text-text-secondary leading-none mt-0.5">
                STRESS
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-text-secondary text-xs mb-1">Stress Level</p>
            <Sparkline
              data={stressHistory}
              min={0}
              max={100}
              colorClass="stroke-stress-purple"
              fillClass="fill-stress-purple"
            />
          </div>
        </div>
      </div>
    </CollapsiblePanel>
  );
}
