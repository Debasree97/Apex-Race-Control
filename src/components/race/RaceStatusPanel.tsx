import { useRace } from "../../context/RaceContext";
import { formatMsAsLapTime } from "../../utils/formatter";
import { CollapsiblePanel } from "../layout/CollapsiblePanel";
import { TrackMap } from "./TrackMap";

export function RaceStatusPanel() {
  const { seed, simState, activeDriverId } = useRace();
  const circuit = seed.circuit;
  const baseline = simState.drivers[activeDriverId];

  return (
    <CollapsiblePanel title="01 / Race status" defaultOpen={true}>
      <div className="flex flex-col gap-4 divide-border ">
        <div className="w-full lg:w-fit flex lg:flex-col gap-2 justify-between items-center lg:items-start lg:justify-start">
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
            <div className=" flex flex-col gap-1 lg:gap-0 lg:flex-row justify-between lg:justify-start lg:divide-x divide-border font-mono text-xs text-text-secondary">
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
          </div>
        </div>

        <div className="w-full lg:w-auto lg:pl-4 mt-4 lg:mt-0 flex flex-col gap-2 items-center">
          <div className="w-full max-w-fit">
            <TrackMap progress={baseline.trackProgress} />
          </div>
          <div className="w-full max-w-55 flex items-center gap-1.5 text-xs text-text-secondary uppercase tracking-widest">
            <span>🇩🇪</span>
            <span className="text-text-primary normal-case">
              {circuit.name}
            </span>
          </div>
        </div>
      </div>
    </CollapsiblePanel>
  );
}
