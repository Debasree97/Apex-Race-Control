import type { DriverNumberBadgeProps } from "../types";

export function DriverNumberBadge({
  number,
  className,
}: DriverNumberBadgeProps) {
  return (
    <div
      className={`bg-telemetry-cyan text-bg font-bold font-mono rounded flex items-center justify-center ${className ?? "w-8 h-8 text-sm"}`}
    >
      {number}
    </div>
  );
}
