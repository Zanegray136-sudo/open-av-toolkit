type Props = {
widthMetres: number;
heightMetres: number;
resWidth: number;
resHeight: number;
totalPixels: number;
totalWeight: number;
totalPower: number;
processorLoading: string;
portsRequired: number;
availablePorts: number;
overloaded: boolean;
backupEnabled: boolean;
};

export default function ProcessorAnalysis({
widthMetres,
heightMetres,
resWidth,
resHeight,
totalPixels,
totalWeight,
totalPower,
processorLoading,
portsRequired,
availablePorts,
overloaded,
backupEnabled,
}: Props) {
const loading =
Number(processorLoading);

return ( <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl hover:border-zinc-700 transition-all">

```
  <h2 className="text-xl font-semibold mb-6">
    Processor Analysis
  </h2>

<div className="grid grid-cols-2 gap-4">

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Screen Size
      </span>

      <span>
        {widthMetres.toFixed(2)}m ×{" "}
        {heightMetres.toFixed(2)}m
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Resolution
      </span>

      <span>
        {resWidth} × {resHeight}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Total Pixels
      </span>

      <span>
        {totalPixels.toLocaleString()}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Weight
      </span>

      <span>
        {totalWeight.toFixed(1)}kg
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Max Power
      </span>

      <span>
        {(totalPower / 1000).toFixed(2)}
        kW
      </span>
    </div>

  

    <div className="flex justify-between pt-4">
      <span className="text-zinc-400">
        Ports Required
      </span>

      <span>
        {portsRequired}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Available Ports
      </span>

      <span>
        {availablePorts}
      </span>
    </div>


      <div className="grid gap-4">

        <div>

          <div className="text-sm text-zinc-400 mb-2">
            Primary Outputs
          </div>

          <div className="grid grid-cols-5 gap-2">

            {Array.from({
              length: availablePorts,
            }).map((_, index) => (
              <div
                key={`P${index}`}
                className={`rounded-lg p-2 text-center text-sm border ${
                  index + 1 <=
                  portsRequired
                    ? "bg-green-900 border-green-700"
                    : "bg-zinc-800 border-zinc-700"
                }`}
              >
                P{index + 1}
              </div>
            ))}

          </div>

        </div>

        {backupEnabled && (

          <div>

            <div className="text-sm text-zinc-400 mb-2">
              Backup Outputs
            </div>

            <div className="grid grid-cols-5 gap-2">

              {Array.from({
                length:
                  availablePorts,
              }).map(
                (_, index) => (
                  <div
                    key={`BP${index}`}
                    className={`rounded-lg p-2 text-center text-sm border ${
                      index + 1 <=
                      portsRequired
                        ? "bg-blue-900 border-blue-700"
                        : "bg-zinc-800 border-zinc-700"
                    }`}
                  >
                    BP{index + 1}
                  </div>
                )
              )}

            </div>

          </div>

        )}

      </div>

    </div>


      <span
        className={`px-3 py-2 rounded-lg text-sm ${
          overloaded
            ? "bg-red-900 text-red-200"
            : "bg-green-900 text-green-200"
        }`}
      >
        {overloaded
          ? "Processor Overloaded"
          : "Processor OK"}
      </span>

    </div>





);
}
