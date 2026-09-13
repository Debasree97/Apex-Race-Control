import type { IconProps } from "../types";

export function CheckeredFlagIcon({ className }: IconProps) {
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
      <path d="M5 4v16" />
      <path d="M5 5c3 0 4 2 7 2s4-2 7-2v8c-3 0-4 2-7 2s-4-2-7-2" />
    </svg>
  );
}
