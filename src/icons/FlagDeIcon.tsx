import type { IconProps } from "../types";

export function FlagDeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="5.3" fill="#1a1a1a" />
      <rect x="2" y="9.3" width="20" height="5.4" fill="#dd0000" />
      <rect x="2" y="14.7" width="20" height="5.3" fill="#ffce00" />
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  );
}
