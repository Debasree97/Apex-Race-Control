import type { IconProps } from "../types";

export function CloudIcon({ className }: IconProps) {
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
      <path d="M4 14a6 6 0 0 1 12 0" />
      <path d="M4 14h12" />
      <path d="M8 10c1-3 3-5 4-5s3 2 4 5" opacity="0.7" />
      <path d="M17 8c2 0 3 1.5 3 3.5S19 15 17 15" opacity="0.5" />
    </svg>
  );
}
