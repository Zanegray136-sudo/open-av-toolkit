type Props = {
  portsRequired: number;
  processorLoading: string;
};

export default function PortLoading({
  portsRequired,
  processorLoading,
}: Props) {
  const totalLoad =
    Number(processorLoading);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">

      <h2 className="text-xl font-semibold mb-6">
        Port Loading
      </h2>

      <div className="space-y-4">

        {Array.from({
          length: portsRequired,
        }).map((_, index) => {
          const portLoad =
            totalLoad / portsRequired;

          return (
            <div key={index}>

              <div className="flex justify-between mb-1">

                <span>
                  P{index + 1}
                </span>

                <span>
                  {portLoad.toFixed(1)}%
                </span>

              </div>

              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">

                <div
                  className={`h-full ${
                    portLoad > 90
                      ? "bg-red-500"
                      : portLoad > 70
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{
                    width: `${Math.min(
                      portLoad,
                      100
                    )}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}