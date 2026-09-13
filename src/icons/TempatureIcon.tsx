import type { IconProps } from "../types";

export function TemperatureIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3v2" />
      <circle cx="12" cy="14" r="6" fill="currentColor" opacity="0.15" />
      <circle cx="12" cy="14" r="6" />
      <path d="M12 11v3l2 1" />
    </svg>
  );
}
