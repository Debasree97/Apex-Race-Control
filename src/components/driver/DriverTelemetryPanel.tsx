export function DriverTelemetryPanel() {
  return (
    <section className="bg-surface border border-border rounded-lg p-4">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        03 / Driver
      </h2>

      <div className="flex flex-col gap-3 xl:grid xl:grid-cols-3">
        <div className="border border-border rounded-md p-3">
          <p className="text-text-secondary text-xs font-mono">HEART RATE</p>
          <p className="text-success text-2xl font-mono">
            65 <span className="text-xs text-text-secondary">BPM</span>
          </p>
          <div className="mt-2 h-10 border border-border rounded flex items-center justify-center text-text-secondary text-[10px] uppercase tracking-widest">
            chart
          </div>
        </div>

        <div className="border border-border rounded-md p-3">
          <p className="text-text-secondary text-xs font-mono">BREATHING</p>
          <p className="text-telemetry-cyan text-2xl font-mono">
            12 <span className="text-xs text-text-secondary">/min</span>
          </p>
          <div className="mt-2 h-10 border border-border rounded flex items-center justify-center text-text-secondary text-[10px] uppercase tracking-widest">
            chart
          </div>
        </div>

        <div className="border border-border rounded-md p-3">
          <p className="text-text-secondary text-xs font-mono">STRESS</p>
          <p className="text-stress-purple text-2xl font-mono">51</p>
          <div className="mt-2 h-10 border border-border rounded flex items-center justify-center text-text-secondary text-[10px] uppercase tracking-widest">
            chart
          </div>
        </div>
      </div>
    </section>
  );
}
