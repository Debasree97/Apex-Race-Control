const severityColor: Record<string, string> = {
  info: "text-telemetry-cyan",
  tyre: "text-warning",
  weather: "text-info-blue",
  caution: "text-warning",
  critical: "text-critical",
};

<section className="bg-surface border border-border rounded-lg p-4 flex flex-col md:col-start-3 md:row-start-1 md:row-span-2">
  <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
    08 / Live events
  </h2>

  <div className="flex flex-col gap-2 font-mono text-xs overflow-y-auto">
    {/* ...same three event blocks as before, unchanged... */}
  </div>
</section>;

export function EventsPanel() {
  return (
    <section className="bg-surface border border-border rounded-lg p-4 flex flex-col md:col-start-3 md:row-start-1 md:row-span-2">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        08 / Live events
      </h2>

      <div className="flex flex-col gap-2 font-mono text-xs overflow-y-auto">
        <div className="border border-border rounded-md p-2">
          <div className="flex justify-between text-text-secondary">
            <span className={severityColor.caution}>CAUTION</span>
            <span>14:31:02</span>
          </div>
          <p className="text-text-primary mt-0.5">Debris reported — Turn 12</p>
        </div>

        <div className="border border-border rounded-md p-2">
          <div className="flex justify-between text-text-secondary">
            <span className={severityColor.info}>INFO</span>
            <span>14:29:45</span>
          </div>
          <p className="text-text-primary mt-0.5">Sector 2 — personal best</p>
        </div>

        <div className="border border-border rounded-md p-2">
          <div className="flex justify-between text-text-secondary">
            <span className={severityColor.tyre}>TYRE</span>
            <span>14:28:17</span>
          </div>
          <p className="text-text-primary mt-0.5">
            Rear-right temperature rising
          </p>
        </div>
      </div>
    </section>
  );
}
