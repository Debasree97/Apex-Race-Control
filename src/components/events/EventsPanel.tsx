const severityColor: Record<string, string> = {
  info: "text-telemetry-cyan",
  tyre: "text-warning",
  weather: "text-info-blue",
  caution: "text-warning",
  critical: "text-critical",
};

export function EventsPanel({ sampleEvents }: { sampleEvents: string[] }) {
  return (
    <section className="bg-surface border border-border rounded-lg p-4 flex flex-col md:col-start-3 md:row-start-1 md:row-span-2">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        08 / Live events
      </h2>

      <div className="flex flex-col gap-2 font-mono text-xs overflow-y-auto">
        {sampleEvents.map((message, i) => (
          <div key={i} className="border border-border rounded-md p-2">
            <div className="flex justify-between text-text-secondary">
              <span className={severityColor.info}>SAMPLE</span>
              <span>—:—:—</span>
            </div>
            <p className="text-text-primary mt-0.5">{message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
