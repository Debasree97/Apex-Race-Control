import type { SparklineProps } from "../../types";

export function Sparkline({
  data,
  min,
  max,
  colorClass,
  fillClass,
}: SparklineProps) {
  if (data.length < 2)
    return <svg viewBox="0 0 100 40" className="w-full h-10" />;

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * 100;
    const clamped = Math.max(min, Math.min(max, value));
    const y = 40 - ((clamped - min) / (max - min)) * 40;
    return { x, y };
  });

  const lineString = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaString = `0,40 ${lineString} 100,40`;
  return (
    <div className="border border-border rounded-sm ">
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="w-full h-10"
      >
        <polygon points={areaString} className={fillClass} opacity="0.2" />
        <polyline
          points={lineString}
          fill="none"
          strokeWidth="2"
          className={colorClass}
        />
      </svg>
    </div>
  );
}
