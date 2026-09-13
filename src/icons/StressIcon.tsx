import type { IconProps } from "../types";

export function StressIcon({ className }: IconProps) {
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
      <path d="M12 3l2.2 4.5L19 9l-3.5 3.4.8 4.8L12 15.2 7.7 17.2l.8-4.8L5 9l4.8-1.5L12 3z" />
    </svg>
  );
}
