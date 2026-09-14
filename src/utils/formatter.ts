export function parseLapTimeToSeconds(lapStr: string): number {
  const [min, sec] = lapStr.split(":");
  return parseInt(min, 10) * 60 + parseFloat(sec);
}

export function formatMsAsLapTime(ms: number): string {
  const totalSeconds = ms / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toFixed(2).padStart(5, "0");
  return `${minutes}:${seconds}`;
}
