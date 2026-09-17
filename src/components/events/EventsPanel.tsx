import { useRace } from "../../context/RaceContext";
import { CollapsiblePanel } from "../layout/CollapsiblePanel";

const severityColor: Record<string, string> = {
  info: "text-telemetry-cyan",
  tyre: "text-warning",
  weather: "text-info-blue",
  caution: "text-warning",
  critical: "text-critical",
};

export function EventsPanel() {
  const { events } = useRace();

  return (
    <CollapsiblePanel title="06 / Live events">
      <div className="event-scroll flex-1 min-h-0 overflow-y-auto flex flex-col gap-2 font-mono text-xs max-h-60 lg:max-h-200">
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
    </CollapsiblePanel>
  );
}
