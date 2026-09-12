import type { TyreLabel, TyreStatus } from "../types";

export const tyreLabels: Record<TyreLabel, string> = {
  fl: "FL",
  fr: "FR",
  rl: "RL",
  rr: "RR",
};

export function getTyreStatus(tempC: number): TyreStatus {
  if (tempC < 85) return "cold";
  if (tempC <= 110) return "optimal";
  if (tempC <= 120) return "warning";
  return "critical";
}

export const tyreStatusText: Record<TyreStatus, string> = {
  cold: "text-info-blue",
  optimal: "text-success",
  warning: "text-warning",
  critical: "text-critical",
};

export const tyreStatusBorder: Record<TyreStatus, string> = {
  cold: "border-info-blue",
  optimal: "border-success",
  warning: "border-warning",
  critical: "border-critical",
};

export const tyreStatusBg: Record<TyreStatus, string> = {
  cold: "bg-info-surface",
  optimal: "bg-success-surface",
  warning: "bg-warning-surface",
  critical: "bg-critical-surface",
};

export const tyreStatusLabel: Record<TyreStatus, string> = {
  cold: "COLD",
  optimal: "OPTIMAL",
  warning: "WARNING",
  critical: "CRITICAL",
};

export const gridAreaClass: Record<TyreLabel, string> = {
  fl: "[grid-area:fl]",
  fr: "[grid-area:fr]",
  rl: "[grid-area:rl]",
  rr: "[grid-area:rr]",
};
