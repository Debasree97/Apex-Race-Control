import type { ReactNode } from "react";

export interface TyreCorner {
  tempC: number;
  pressureBar: number;
}

export interface BrakeCorner {
  tempC: number;
}

export interface DriverTelemetry {
  position: number;
  lap: number;
  topSpeedKmh: number;
  bestLap: string;
  heartRateBpm: number;
  breathsPerMin: number;
  stress: number;
  rpm: number;
  engineTempC: number;
  fuelPercent: number;
  ersPercent: number;
  tyres: {
    fl: TyreCorner;
    fr: TyreCorner;
    rl: TyreCorner;
    rr: TyreCorner;
  };
  brakes: {
    fl: BrakeCorner;
    fr: BrakeCorner;
    rl: BrakeCorner;
    rr: BrakeCorner;
  };
  trackProgress: number;
  currentSpeedKmh: number;
  currentLapMs: number;
}

export interface Driver {
  id: string;
  name: string;
  shortName: string;
  number: number;
  team: string;
  baseline: DriverTelemetry;
}

export interface Circuit {
  name: string;
  country: string;
  totalLaps: number;
}

export interface Weather {
  airTempC: number;
  cloudCoverPercent: number;
  humidityPercent: number;
  pressureMb: number;
  windSpeedKmh: number;
}

export interface RaceEvent {
  id: string;
  timestamp: string;
  severity: "info" | "tyre" | "weather" | "caution" | "critical";
  message: string;
}

export interface RaceSeed {
  circuit: Circuit;
  drivers: Driver[];
  weatherBaseline: Weather;
  sampleEvents: string[];
}

// simulator
export interface SimState {
  drivers: Record<string, DriverTelemetry>;
  weather: Weather;
}

export type Listener = (state: SimState) => void;

// context
export interface RaceContextValue {
  seed: RaceSeed;
  simState: SimState;
  activeDriverId: string;
  setActiveDriverId: (id: string) => void;
  events: RaceEvent[];
}

// tyres
export type TyreLabel = "fl" | "fr" | "rl" | "rr";

export type TyreStatus = "cold" | "optimal" | "warning" | "critical";

//driver
export interface SparklineProps {
  data: number[];
  min: number;
  max: number;
  colorClass: string;
  fillClass: string;
}

export interface CircularGaugeProps {
  value: number;
  min: number;
  max: number;
  colorClass: string; // e.g. 'stroke-success'
  size?: number;
}

//event
export type EventSeverity =
  | "info"
  | "tyre"
  | "weather"
  | "caution"
  | "critical";

export interface RaceEvent {
  id: string;
  timestamp: string;
  severity: EventSeverity;
  message: string;
}

// icon
export interface IconProps {
  className?: string;
}
export interface DriverNumberBadgeProps {
  number: number;
  className?: string;
}

//
export interface CollapsiblePanelProps {
  title: string;
  children: ReactNode;
  gridArea: string;
  defaultOpen?: boolean;
}
