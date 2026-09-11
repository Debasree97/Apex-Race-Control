export function Header() {
  return (
    <header className="border-b border-border bg-surface px-4 py-3 md:px-6 md:py-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-0">
      <div className="flex items-center justify-between md:contents">
        <div className="md:order-1">
          <p className="font-semibold tracking-wide text-sm md:text-base">
            APEX RACING
          </p>
          <p className="hidden md:block text-xs text-text-secondary tracking-widest">
            RACE CONTROL
          </p>
        </div>

        <span className="flex items-center gap-1 text-success text-xs font-mono md:order-2 md:text-sm">
          <span className="hidden md:inline">RACE 16/67</span>
          <span className="w-2 h-2 rounded-full bg-success" />
          LIVE
        </span>
      </div>

      <div className="flex items-center justify-between md:order-3 md:justify-end md:gap-4 text-xs md:text-sm font-mono text-text-secondary md:text-text-primary">
        <span>NOAH VOSS</span>
        <span>P1&nbsp;&nbsp;16/67</span>
      </div>
    </header>
  );
}
