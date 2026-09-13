import type { IconProps } from "../types";

export function BreathingIcon({ className }: IconProps) {
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
      <path d="M4 14c2-4 4-6 8-6s6 2 8 6" />
      <path d="M4 10c2 4 4 6 8 6s6-2 8-6" opacity="0.55" />
    </svg>
  );
}
