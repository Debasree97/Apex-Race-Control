import type { IconProps } from "../types";

export function WindIcon({ className }: IconProps) {
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
      <path d="M12 3v18" />
      <path d="M5 9l7-4 7 4" />
      <path d="M5 15l7 4 7-4" />
    </svg>
  );
}
