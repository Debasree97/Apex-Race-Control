export function RaceStatusPanel() {
  return (
    <section className="bg-surface border border-border rounded-lg p-4 md:col-span-2">
      <h2 className="text-xs text-text-secondary uppercase tracking-widest mb-3">
        01 / Race status
      </h2>

      <div className="flex flex-col  lg:divide-x divide-border lg:flex-row justify-between items-center">
        <div className="w-full lg:w-fit lg:pr-4 flex lg:flex-col justify-between items-center lg:items-start lg:justify-start">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between md:justify-start lg:gap-8">
            <span className="text-4xl font-bold text-accent font-mono">P1</span>
            <div className="text-right md:text-left font-mono text-sm text-text-secondary">
              <p>LAP</p>
              <p className="text-text-primary text-lg">16 / 67</p>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-border">
            <div className="lg:mt-4 pb-2 flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between lg:justify-start border-0 lg:border-b lg:divide-x divide-border font-mono text-xs text-text-secondary">
              <div className="flex justify-between lg:flex-col lg:pr-4 text-right lg:text-left">
                <p>CURRENT LAP</p>
                <p className=" text-sm ">
                  <span className="lg:hidden mr-1">:</span>
                  <span className="text-text-primary">1:21.542</span>
                </p>
              </div>
              <div className="flex justify-between lg:flex-col lg:px-4 text-right lg:text-left">
                <p>BEST LAP</p>
                <p className=" text-sm ">
                  <span className="lg:hidden mr-1">:</span>
                  <span className="text-text-primary">1:20.871</span>
                </p>
              </div>
              <div className="flex justify-between lg:flex-col lg:pl-4 text-right lg:text-left">
                <p>TOP SPEED</p>
                <p className=" text-sm">
                  <span className="lg:hidden mr-1">:</span>
                  <span className="text-text-primary">287 km/h</span>
                </p>
              </div>
            </div>

            <div className="hidden pt-2 lg:flex flex-col font-mono">
              <span className="text-2xl text-accent ">+1.075</span>
              <span className="text-xs text-text-secondary">Gap to Leader</span>
            </div>
          </div>
        </div>

        <div className="mt-4 border border-border rounded-md h-40 flex flex-col items-center justify-center text-text-secondary text-xs uppercase tracking-widest">
          <span>Track map</span>
          <span className="text-text-primary normal-case mt-1">
            Hockenheim, Germany
          </span>
        </div>
      </div>
    </section>
  );
}
