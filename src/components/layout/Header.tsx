export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-6 py-3">
      <div>
        <p className="font-semibold tracking-wide ">APEX RACING</p>
        <p className="text-xs text-text-secondary tracking-widest">
          RACE CONTROL
        </p>
      </div>
      <div className="flex items-center gap-2 font-mono text-sm">
        <span>RACE 16/67</span>
        <span className="flex items-center gap-1 text-success">
          <span className="w-2 h-2 rounded-full bg-success" />
          LIVE
        </span>
      </div>
      <div className="text-sm text-text-secondary">Driver context</div>
    </header>
  );
}
