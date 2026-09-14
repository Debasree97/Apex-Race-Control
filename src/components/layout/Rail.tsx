import apexMark from "../../assets/apex-racing-mark.svg";

export function Rail() {
  return (
    <aside className="relative flex overflow-hidden border-b border-border bg-surface md:w-16 md:flex-col md:border-b-0 md:border-r">
      {/* Accent line */}
      <div className="absolute inset-y-0 left-0 z-30 hidden w-0.5  md:block" />

      {/* Diagonal logo */}
      <img
        src={apexMark}
        alt=""
        className="
    pointer-events-none
    absolute
    z-20
    block
    w-45
    max-w-none
    left-1/2
    top-2/5
    -translate-x-1/2
    -translate-y-1/2
    -rotate-90
    opacity-[0.35]
  "
      />
    </aside>
  );
}
