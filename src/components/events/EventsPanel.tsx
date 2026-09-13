import { useRace } from "../../context/RaceContext";

const severityColor: Record<string, string> = {
  info: "text-telemetry-cyan",
  tyre: "text-warning",
  weather: "text-info-blue",
  caution: "text-warning",
  critical: "text-critical",
};

export function EventsPanel({ maxHeight }: { maxHeight?: number }) {
  const { events } = useRace();

  return (
    <section
      className="bg-surface border border-border rounded-lg p-4 flex flex-col max-h-80 md:max-h-(--left-col-height) [grid-area:events]"
      style={
        maxHeight
          ? ({ "--left-col-height": `${maxHeight}px` } as React.CSSProperties)
          : undefined
      }
    >
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3 shrink-0">
        08 / Live events
      </h2>
      <div className="event-scroll flex flex-col gap-2 font-mono text-xs overflow-y-auto min-h-0 flex-1">
        {events.length === 0 && (
          <p className="text-text-secondary">Monitoring for events…</p>
        )}
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-border rounded-md p-2 shrink-0"
          >
            <div className="flex justify-between text-text-secondary">
              <span className={severityColor[event.severity]}>
                {event.severity.toUpperCase()}
              </span>
              <span>{event.timestamp}</span>
            </div>
            <p className="text-text-primary mt-0.5">{event.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
