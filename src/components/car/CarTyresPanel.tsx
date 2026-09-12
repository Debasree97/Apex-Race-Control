import type { Driver } from "../../types";

export function CarTyresPanel({
  tyres,
}: {
  tyres: Driver["baseline"]["tyres"];
}) {
  return (
    <section className="bg-surface border border-border rounded-lg p-4 md:col-span-2">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        02 / Car & tyres
      </h2>

      <div className="tyre-grid">
        <div className="[grid-area:fl] border border-border rounded-md p-2 font-mono text-xs">
          <p className="text-text-secondary">FL</p>
          <p className="text-text-primary">
            {tyres.fl.tempC}°C · {tyres.fl.pressureBar} bar
          </p>
        </div>
        <div className="[grid-area:fr] border border-border rounded-md p-2 font-mono text-xs">
          <p className="text-text-secondary">FR</p>
          <p className="text-text-primary">
            {tyres.fr.tempC}°C · {tyres.fr.pressureBar} bar
          </p>
        </div>
        <div className="[grid-area:car] border border-border rounded-md h-40 md:h-56 flex items-center justify-center text-text-secondary text-xs uppercase tracking-widest">
          Car art
        </div>
        <div className="[grid-area:rl] border border-border rounded-md p-2 font-mono text-xs">
          <p className="text-text-secondary">RL</p>
          <p className="text-text-primary">
            {tyres.rl.tempC}°C · {tyres.rl.pressureBar} bar
          </p>
        </div>
        <div className="[grid-area:rr] border border-border rounded-md p-2 font-mono text-xs">
          <p className="text-text-secondary">RR</p>
          <p className="text-text-primary">
            {tyres.rr.tempC}°C · {tyres.rr.pressureBar} bar
          </p>
        </div>
      </div>

      <div className="mt-4 border border-border rounded-md p-3 font-mono text-xs">
        <p className="text-text-secondary uppercase tracking-widest mb-1">
          Selected tyre
        </p>
        <p className="text-text-primary">Tap a tyre to see details</p>
      </div>
    </section>
  );
}
