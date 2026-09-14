import type { IconProps } from "../types";

export function PressureIcon({ className }: IconProps) {
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
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13l3-3.5" />
      <path
        d="M12 6v1M17 8.5l-.7.7M7 8.5l.7.7M9.5 6.7l.4.9M14.5 6.7l-.4.9"
        opacity="0.6"
      />
    </svg>
  );
}
