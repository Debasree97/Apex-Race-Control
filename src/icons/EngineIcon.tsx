import type { IconProps } from "../types";

export function EngineIcon({ className }: IconProps) {
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
      <rect x="5" y="4" width="10" height="16" rx="2" />
      <path d="M15 8h2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2" />
      <path d="M8 8h4" />
    </svg>
  );
}
