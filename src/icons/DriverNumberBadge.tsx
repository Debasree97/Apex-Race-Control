import type { DriverNumberBadgeProps } from "../types";

export function DriverNumberBadge({
  number,
  isActive,
}: DriverNumberBadgeProps) {
  return (
    <div
      className={`  font-bold font-mono rounded flex items-center justify-center w-6 h-6 text-xs shrink-0 ${isActive ? "bg-telemetry-cyan text-bg" : "border border-border "}`}
    >
      {number}
    </div>
  );
}
