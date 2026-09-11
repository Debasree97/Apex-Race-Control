export function CarTelemetryPanel() {
  return (
    <section className="bg-surface border border-border rounded-lg p-4">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        04 / Car telemetry
      </h2>

      <div className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">RPM</span>
            <span className="text-text-primary">8,420</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-telemetry-cyan"
              style={{ width: "70%" }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">ENGINE TEMP</span>
            <span className="text-text-primary">108°C</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-warning" style={{ width: "60%" }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">FUEL</span>
            <span className="text-text-primary">64%</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-success" style={{ width: "64%" }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between font-mono text-xs">
            <span className="text-text-secondary">ERS</span>
            <span className="text-text-primary">72%</span>
          </div>
          <div className="mt-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-stress-purple" style={{ width: "72%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
