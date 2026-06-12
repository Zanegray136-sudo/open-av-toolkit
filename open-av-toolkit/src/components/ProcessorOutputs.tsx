type Props = {
processorName: string;
totalPorts: number;
portsRequired: number;
redundancy: string;
totalPixels: number;
pixelsPerPort: number;
totalCabinets: number;
};

export default function ProcessorOutputs({
processorName,
totalPorts,
portsRequired,
redundancy,
totalPixels,
pixelsPerPort,
totalCabinets,
}: Props) {

const ports = Array.from(
{ length: totalPorts },
(_, i) => i + 1
);

const pixelsPerUsedPort =
portsRequired > 0
? Math.ceil(
totalPixels /
portsRequired
)
: 0;

const loadingPercent =
pixelsPerPort > 0
? (
(pixelsPerUsedPort /
pixelsPerPort) *
100
).toFixed(0)
: "0";

const cabinetsPerUsedPort =
  portsRequired > 0 &&
  totalCabinets
    ? Math.ceil(
        totalCabinets /
        portsRequired
      )
    : 0;
return (

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold">
      Processor Outputs
    </h2>

    <span className="text-zinc-400 text-sm">
      {processorName}
    </span>
  </div>

  <div className="flex gap-4 mb-6 text-sm">

    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded bg-green-500" />
      <span>Active</span>
    </div>

    <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded bg-zinc-600" />
      <span>Unused</span>
    </div>

    {redundancy === "backup" && (
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-blue-500" />
        <span>Backup Enabled</span>
      </div>
    )}

  </div>

  <div className="grid grid-cols-4 gap-3">

    {ports.map((port) => {
      const active =
        port <= portsRequired;

      return (
        <div
          key={port}
          className={
            active
              ? redundancy === "backup"
                ? "h-24 rounded border border-blue-500 bg-blue-950 flex items-center justify-center"
                : "h-24 rounded border border-green-500 bg-green-950 flex items-center justify-center"
              : "h-24 rounded border border-zinc-700 bg-zinc-800 flex items-center justify-center text-zinc-500"
          }
        >
          <div className="text-center">

            <div className="font-semibold">
              P{String(port).padStart(2, "0")}
            </div>

            {active && (
              <div className="text-[10px] leading-tight mt-1">

                <div>
                  {Math.round(
                    pixelsPerUsedPort /
                      1000
                  )}
                  k px
                </div>

                <div>
                  {loadingPercent}%
                </div>

                <div>
                  {cabinetsPerUsedPort}
                  {" "}
                  cabs
                </div>

              </div>
            )}

          </div>
        </div>
      );
    })}

  </div>

  <div className="mt-6 text-sm text-zinc-400">
    Active Ports: {portsRequired} / {totalPorts}
  </div>

</div>

);
}
