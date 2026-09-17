import type { Driver, Listener, SimState, Weather } from "../types";

function evolve(
  current: number,
  baseline: number,
  {
    pullStrength,
    noiseAmount,
    spikeChance,
    spikeSize,
    min,
    max,
  }: {
    pullStrength: number;
    noiseAmount: number;
    spikeChance: number;
    spikeSize: number;
    min: number;
    max: number;
  },
): number {
  const pull = (baseline - current) * pullStrength;
  const noise = (Math.random() - 0.5) * noiseAmount;
  const spike = Math.random() < spikeChance ? Math.random() * spikeSize : 0;
  const next = current + pull + noise + spike;
  return Math.max(min, Math.min(max, next));
}

export function createRaceSimulator(
  drivers: Driver[],
  weatherBaseline: Weather,
) {
  const state: SimState = {
    drivers: Object.fromEntries(
      drivers.map((d) => [
        d.id,
        {
          ...d.baseline,
          trackProgress: 0,
          currentSpeedKmh: 200,
          currentLapMs: 0,
          ersPercent: 65,
        },
      ]),
    ),
    weather: { ...weatherBaseline },
  };

  let listeners: Listener[] = [];
  let intervalId: number | null = null;

  function subscribe(listener: Listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function tick() {
    for (const id in state.drivers) {
      const d = state.drivers[id];

      d.currentLapMs ??= 0;
      d.trackProgress ??= 0;

      // Lap
      d.currentLapMs += 1000;

      if (d.trackProgress >= 1000) {
        d.trackProgress -= 1000;
        d.lap += 1;
        d.currentLapMs = 0;
      }

      // Driver Telemetry

      d.heartRateBpm = evolve(d.heartRateBpm, 65, {
        pullStrength: 0.05,
        noiseAmount: 2,
        spikeChance: 0.03,
        spikeSize: 15,
        min: 45,
        max: 160,
      });

      d.breathsPerMin = evolve(d.breathsPerMin, 13, {
        pullStrength: 0.08,
        noiseAmount: 0.5,
        spikeChance: 0.02,
        spikeSize: 4,
        min: 8,
        max: 25,
      });

      d.stress = evolve(d.stress, 50, {
        pullStrength: 0.04,
        noiseAmount: 2,
        spikeChance: 0.05,
        spikeSize: 20,
        min: 0,
        max: 100,
      });

      d.rpm = evolve(d.rpm, 9500, {
        pullStrength: 0.1,
        noiseAmount: 300,
        spikeChance: 0.05,
        spikeSize: 1500,
        min: 4000,
        max: 12500,
      });

      d.ersPercent = evolve(d.ersPercent ?? 0, 60, {
        pullStrength: 0.03,
        noiseAmount: 3,
        spikeChance: 0.06,
        spikeSize: -15,
        min: 0,
        max: 100,
      });

      d.engineTempC = evolve(d.engineTempC, 112, {
        pullStrength: 0.02,
        noiseAmount: 0.3,
        spikeChance: 0.02,
        spikeSize: 3,
        min: 80,
        max: 140,
      });

      d.fuelPercent = Math.max(0, d.fuelPercent - 0.02); // fuel only decreases

      // Cars & Tyres
      const corners = ["fl", "fr", "rl", "rr"] as const;
      corners.forEach((corner) => {
        const tyre = d.tyres[corner];
        // Front tyres run hotter under braking/steering load than rears — reflected in baseline + pull strength
        const isFront = corner === "fl" || corner === "fr";

        tyre.tempC = evolve(tyre.tempC, isFront ? 104 : 98, {
          pullStrength: 0.03,
          noiseAmount: 0.8,
          spikeChance: 0.04,
          spikeSize: 6,
          min: 60,
          max: 140,
        });

        tyre.pressureBar = evolve(tyre.pressureBar, isFront ? 1.2 : 1.17, {
          pullStrength: 0.05,
          noiseAmount: 0.005,
          spikeChance: 0.02,
          spikeSize: 0.03,
          min: 1.0,
          max: 1.6,
        });
      });

      // Progress
      d.currentSpeedKmh = evolve(d.currentSpeedKmh ?? 0, 220, {
        pullStrength: 0.1,
        noiseAmount: 15,
        spikeChance: 0.1,
        spikeSize: 40,
        min: 60,
        max: 320,
      });

      d.topSpeedKmh = Math.max(d.topSpeedKmh, Math.round(d.currentSpeedKmh));

      d.trackProgress += d.currentSpeedKmh * 0.02;

      if (d.trackProgress >= 1000) {
        d.trackProgress -= 1000;
        d.lap += 1;
      }
    }

    // Weather
    state.weather.airTempC = evolve(state.weather.airTempC, 23.4, {
      pullStrength: 0.01,
      noiseAmount: 0.05,
      spikeChance: 0.01,
      spikeSize: 0.3,
      min: 10,
      max: 40,
    });

    state.weather.cloudCoverPercent = evolve(
      state.weather.cloudCoverPercent,
      13,
      {
        pullStrength: 0.01,
        noiseAmount: 0.5,
        spikeChance: 0.02,
        spikeSize: 8,
        min: 0,
        max: 100,
      },
    );

    state.weather.humidityPercent = evolve(state.weather.humidityPercent, 75, {
      pullStrength: 0.01,
      noiseAmount: 0.3,
      spikeChance: 0.01,
      spikeSize: 3,
      min: 20,
      max: 100,
    });

    state.weather.pressureMb = evolve(state.weather.pressureMb, 1012, {
      pullStrength: 0.01,
      noiseAmount: 0.1,
      spikeChance: 0.01,
      spikeSize: 1,
      min: 970,
      max: 1040,
    });

    state.weather.windSpeedKmh = evolve(state.weather.windSpeedKmh, 7, {
      pullStrength: 0.02,
      noiseAmount: 0.3,
      spikeChance: 0.03,
      spikeSize: 4,
      min: 0,
      max: 40,
    });

    listeners.forEach((l) => l(state));
  }

  function start(tickMs = 1000) {
    if (intervalId !== null) return;
    intervalId = window.setInterval(tick, tickMs);
  }

  function stop() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function getState() {
    return state;
  }

  return { subscribe, start, stop, getState };
}
