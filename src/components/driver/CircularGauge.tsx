import type { CircularGaugeProps } from "../../types";

export function CircularGauge({
  value,
  min,
  max,
  colorClass,
  size = 56,
}: CircularGaugeProps) {
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(min, Math.min(max, value));
  const fraction = (clamped - min) / (max - min);
  const offset = circumference * (1 - fraction);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-border"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className={colorClass}
      />
    </svg>
  );
}
