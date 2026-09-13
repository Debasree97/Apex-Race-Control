import type { IconProps } from "../types";

export function FuelIcon({ className }: IconProps) {
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
      <path d="M4 18V8" />
      <path d="M4 18h16" />
      <path d="M7 14l3-4 3 2 4-6" />
    </svg>
  );
}
