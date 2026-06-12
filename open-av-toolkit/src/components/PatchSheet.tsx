type Props = {
  portsRequired: number;
  totalCabinets: number;
  redundancy: string;
};

export default function PatchSheet({
  portsRequired,
  totalCabinets,
  redundancy,
}: Props) {
  const cabinetsPerPort = Math.ceil(
    totalCabinets / Math.max(portsRequired, 1)
  );

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl hover:border-zinc-700 transition-all">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Patch Sheet
        </h2>

        <span className="text-zinc-400 text-sm">
          {portsRequired} Active Ports
        </span>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead>
            <tr className="border-b border-zinc-700">

              <th className="text-left py-3">
                Port
              </th>

              <th className="text-left py-3">
                Cabinets
              </th>

              {redundancy === "backup" && (
                <th className="text-left py-3">
                  Backup
                </th>
              )}

              <th className="text-left py-3">
                Status
              </th>

            </tr>
          </thead>

          <tbody>

            {Array.from({
              length: portsRequired,
            }).map((_, index) => {
              const start =
                index * cabinetsPerPort + 1;

              const end = Math.min(
                (index + 1) *
                  cabinetsPerPort,
                totalCabinets
              );

              return (
                <tr
                  key={index}
                  className="border-b border-zinc-800"
                >

                  <td className="py-3 font-medium text-green-400">
                    P
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </td>

                  <td className="py-3">
                    {String(
                      start
                    ).padStart(
                      3,
                      "0"
                    )}
                    {" - "}
                    {String(
                      end
                    ).padStart(
                      3,
                      "0"
                    )}
                  </td>

                  {redundancy === "backup" && (
                    <td className="py-3 text-blue-400">
                      BP
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </td>
                  )}

                  <td className="py-3">
                    <span className="px-2 py-1 rounded bg-green-900 text-green-300 text-xs">
                      Active
                    </span>
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}