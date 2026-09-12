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
