export function Rail() {
  return (
    <aside className="flex flex-row gap-2 overflow-x-auto border-b border-border bg-surface p-3 md:w-48 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-4">
      <p className="hidden md:block text-xs text-text-secondary uppercase tracking-widest mb-2">
        Drivers
      </p>
      <div className="text-sm text-text-primary whitespace-nowrap md:whitespace-normal">
        Driver switcher
      </div>
    </aside>
  );
}
