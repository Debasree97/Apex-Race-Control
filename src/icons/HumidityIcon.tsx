import type { IconProps } from "../types";

export function HumidityIcon({ className }: IconProps) {
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
      <path d="M8 16a3 3 0 1 1-3-3h14" />
      <path d="M16 13a3 3 0 1 0 3-3H5" />
      <path d="M12 7a3 3 0 1 1 3-3H6" />
    </svg>
  );
}
