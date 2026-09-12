import { useState } from "react";
import carImg from "../../assets/f1-car.png";
import { useRace } from "../../context/RaceContext";
import type { TyreLabel } from "../../types";
import {
  getTyreStatus,
  gridAreaClass,
  tyreLabels,
  tyreStatusBg,
  tyreStatusBorder,
  tyreStatusLabel,
  tyreStatusText,
} from "../../utils/tyreStatus";

export function CarTyresPanel() {
  const { simState, activeDriverId } = useRace();
  const { tyres, brakes } = simState.drivers[activeDriverId];
  const [selected, setSelected] = useState<TyreLabel | null>(null);
  const [prevTyresSnapshot, setPrevTyresSnapshot] = useState(tyres);

  if (tyres !== prevTyresSnapshot) {
    setPrevTyresSnapshot(tyres);
  }

  return (
    <section className="bg-surface border border-border rounded-lg p-4 [grid-area:tyres]">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        02 / Car & tyres
      </h2>

      <div className="flex flex-col lg:flex-row  ">
        <div className="tyre-grid border-b lg:border-b-0 lg:border-r border-border pb-4 md:pb-0 ">
          {(["fl", "fr"] as const).map((corner) => {
            const status = getTyreStatus(tyres[corner].tempC);
            return (
              <div
                key={corner}
                className={`${gridAreaClass[corner]} font-mono text-xs flex flex-col items-center  `}
              >
                <span className="text-text-secondary">
                  {tyreLabels[corner]}
                </span>
                <span className={tyreStatusText[status]}>
                  {tyres[corner].tempC.toFixed(0)}°C ·{" "}
                  {tyres[corner].pressureBar.toFixed(2)}b
                </span>
              </div>
            );
          })}

          <div
            className="[grid-area:car] relative h-56 md:h-64 mx-auto"
            style={{ aspectRatio: "800 / 1836" }}
          >
            <img
              src={carImg}
              alt="Apex Racing car, top-down"
              className="w-full h-full object-contain"
            />

            {(["fl", "fr", "rl", "rr"] as const).map((corner) => {
              const isFront = corner === "fl" || corner === "fr";
              const isLeft = corner === "fl" || corner === "rl";
              const isSelected = selected === corner;
              const status = getTyreStatus(tyres[corner].tempC);
              return (
                <button
                  key={corner}
                  aria-label={`${tyreLabels[corner]} tyre`}
                  aria-pressed={isSelected}
                  onClick={() => setSelected(isSelected ? null : corner)}
                  className={`absolute ${isLeft ? "left-[1.5%]" : "right-[1.5%]"} ${isFront ? "top-[14%]" : "bottom-[8%]"} w-[18%] h-[14%] rounded-full border-2 outline-none transition-colors z-10 ${
                    isSelected
                      ? `${tyreStatusBorder[status]} ${tyreStatusBg[status]}`
                      : "border-transparent hover:border-telemetry-cyan focus-visible:border-telemetry-cyan"
                  }`}
                />
              );
            })}
          </div>

          {(["rl", "rr"] as const).map((corner) => {
            const status = getTyreStatus(tyres[corner].tempC);
            return (
              <div
                key={corner}
                className={`${gridAreaClass[corner]} font-mono text-xs  flex flex-col items-center pb-1`}
              >
                <span className="text-text-secondary">
                  {tyreLabels[corner]}
                </span>
                <span className={tyreStatusText[status]}>
                  {tyres[corner].tempC.toFixed(0)}°C ·{" "}
                  {tyres[corner].pressureBar.toFixed(2)}b
                </span>
              </div>
            );
          })}
        </div>
        <div className="basis-1/4 p-6 ">
          {selected ? (
            (() => {
              const status = getTyreStatus(tyres[selected].tempC);
              return (
                <div
                  className={`flex flex-col justify-evenly z-20 w-full h-full border rounded-md p-2 font-mono text-sm shadow-lg pointer-events-none ${tyreStatusBorder[status]} ${tyreStatusBg[status]}`}
                >
                  <div className="flex  lg:flex-col items-center justify-between mb-1">
                    <span className="text-text-primary uppercase tracking-widest">
                      {tyreLabels[selected]} TYRE
                    </span>
                    <span className={`${tyreStatusText[status]} lg:text-2xl`}>
                      {tyreStatusLabel[status]}
                    </span>
                  </div>
                  <div className="flex lg:flex-col items-center justify-between">
                    <span className="text-text-secondary">TEMP</span>
                    <span className={`${tyreStatusText[status]}  lg:text-2xl`}>
                      {tyres[selected].tempC.toFixed(1)}°C{" "}
                    </span>
                  </div>
                  <div className="flex lg:flex-col items-center justify-between mt-1">
                    <span className="text-text-secondary">PRESS</span>
                    <span className="text-text-primary  lg:text-2xl">
                      {tyres[selected].pressureBar.toFixed(2)} bar
                    </span>
                  </div>
                  <div className="flex lg:flex-col items-center justify-between mt-1">
                    <span className="text-text-secondary">BRAKE</span>
                    <span className="text-text-primary  lg:text-2xl">
                      {brakes[selected].tempC.toFixed(0)}°C
                    </span>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="border border-border rounded-lg h-27.5 lg:h-full w-full flex items-center justify-center text-text-secondary">
              <span className="text-center p-2"> Display Tyres Telemetry</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
