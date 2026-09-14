import { useRace } from "../../context/RaceContext";
import {
  formatMsAsLapTime,
  parseLapTimeToSeconds,
} from "../../utils/formatter";
import { CollapsiblePanel } from "../layout/CollapsiblePanel";
import { TrackMap } from "./TrackMap";

export function RaceStatusPanel() {
  const { seed, simState, activeDriverId } = useRace();
  const circuit = seed.circuit;
  const baseline = simState.drivers[activeDriverId];

  const leader = Object.values(simState.drivers).find((d) => d.position === 1);
  const isLeader = baseline.position === 1;
  const lapTimeSeconds = parseLapTimeToSeconds(baseline.bestLap);
  const gapSeconds =
    leader && !isLeader
      ? ((leader.lap * 1000 +
          leader.trackProgress -
          (baseline.lap * 1000 + baseline.trackProgress)) /
          1000) *
        lapTimeSeconds
      : 0;
  return (
    <CollapsiblePanel title="01 / Race status" gridArea="race">
      <div className="flex flex-col lg:divide-x divide-border lg:flex-row items-center lg:items-stretch">
        <div className="w-full lg:w-fit lg:pr-4 flex lg:flex-col justify-between items-center lg:items-start lg:justify-start">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between md:justify-start lg:gap-8">
            <span className="text-4xl font-bold text-accent font-mono">
              P{baseline.position}
            </span>
            <div className="flex lg:flex-col items-center lg:items-start font-mono text-sm text-text-secondary">
              <p>LAP</p>
              <p className=" text-sm lg:text-lg">
                <span className="lg:hidden mr-1">:</span>
                <span className="text-text-primary">
                  {baseline.lap} / {circuit.totalLaps}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-border">
            <div className="lg:mt-4 lg:pb-2 flex flex-col gap-1 lg:gap-0 lg:flex-row justify-between lg:justify-start border-0 lg:border-b lg:divide-x divide-border font-mono text-xs text-text-secondary">
              <div className="flex justify-between lg:flex-col lg:pr-4 text-right lg:text-left">
                <p>CURRENT LAP</p>
                <p className=" text-sm ">
                  <span className="lg:hidden mr-1">:</span>
                  <span className="text-text-primary">
                    {formatMsAsLapTime(baseline.currentLapMs)}
                  </span>
                </p>
              </div>
              <div className="flex justify-between lg:flex-col lg:px-4 text-right lg:text-left">
                <p>BEST LAP</p>
                <p className=" text-sm ">
                  <span className="lg:hidden mr-1">:</span>
                  <span className="text-text-primary">{baseline.bestLap}</span>
                </p>
              </div>
              <div className="flex justify-between lg:flex-col lg:pl-4 text-right lg:text-left">
                <p>TOP SPEED</p>
                <p className=" text-sm">
                  <span className="lg:hidden mr-1">:</span>
                  <span className="text-text-primary">
                    {Math.round(baseline.topSpeedKmh)} km/h
                  </span>
                </p>
              </div>
            </div>

            <div className="hidden pt-2 lg:flex flex-col font-mono">
              <span className="text-2xl text-accent ">
                {" "}
                {isLeader ? "LEADER" : `+${gapSeconds.toFixed(3)}`}
              </span>
              <span className="text-xs text-text-secondary">Gap to Leader</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:pl-4 mt-4 lg:mt-0 flex flex-col gap-2">
          <div className="w-full max-w-55 flex items-center gap-1.5 text-xs text-text-secondary uppercase tracking-widest">
            <span>🇩🇪</span>
            <span className="text-text-primary normal-case">
              {circuit.name}
            </span>
          </div>
          <div className="w-full max-w-55 border border-border rounded-md p-2 aspect-square">
            <TrackMap progress={baseline.trackProgress} />
          </div>
        </div>
      </div>
    </CollapsiblePanel>
  );
}
