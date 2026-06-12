type Cell = {
  port: number;
  direction: string;
};

type Props = {
  snakeMap: Cell[][];
  wide: number;
  numberingMode: string;
  redundancy: string;
};

const portColours = [
  "#ff4444",
  "#4488ff",
  "#44cc44",
  "#ff9900",
  "#cc44ff",
  "#00cccc",
  "#ff66aa",
  "#999999",
];

export default function DataRoutingMap({
  snakeMap,
  wide,
  numberingMode,
  redundancy,
}: Props) {
  const getCabinetNumber = (
    rowIndex: number,
    colIndex: number,
    rowLength: number
  ) => {
    if (numberingMode === "snake") {
      if (rowIndex % 2 === 1) {
        return (
          rowIndex * rowLength +
          (rowLength - colIndex)
        );
      }
    }

    return (
      rowIndex * rowLength +
      colIndex +
      1
    );
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-semibold">
          Data Routing Map
        </h2>

        <div className="flex gap-4 text-sm">
          <div>
            Numbering:
            <span className="ml-2 text-zinc-300">
              {numberingMode}
            </span>
          </div>

          <div>
            Mode:
            <span className="ml-2 text-zinc-300">
              {redundancy === "backup"
                ? "Primary + Backup"
                : "Primary"}
            </span>
          </div>
        </div>

      </div>

      {/* Legend */}

      <div className="flex flex-wrap gap-3 mb-6">

        {Array.from(
          new Set(
            snakeMap.flat().map(
              (c) => c.port
            )
          )
        ).map((port) => (
          <div
            key={port}
            className="flex items-center gap-2"
          >
            <div
              className="w-4 h-4 rounded"
              style={{
                backgroundColor:
                  portColours[
                    (port - 1) %
                      portColours.length
                  ],
              }}
            />

            <div className="flex flex-col text-[11px]">

  <span>
    P{port}
  </span>

  {redundancy === "backup" && (
    <span className="text-blue-400">
      BP{port}
    </span>
  )}

</div>
          </div>
        ))}

      </div>

      {/* Cabinets */}

      <div className="flex flex-col gap-1 overflow-auto">

        {snakeMap.map(
          (row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-1"
            >
              {row.map(
                (
                  cell,
                  colIndex
                ) => (
                  <div
                    key={colIndex}
                    className="w-20 h-20 rounded flex flex-col items-center justify-center text-xs border-2"
                    style={{
                      borderColor:
                        portColours[
                          (cell.port - 1) %
                            portColours.length
                        ],
                    }}
                  >
                    <div className="font-bold">
                      #
                      {String(
                        getCabinetNumber(
                          rowIndex,
                          colIndex,
                          wide
                        )
                      ).padStart(
                        3,
                        "0"
                      )}
                    </div>

                 <div className="text-green-400 font-semibold">
  P{cell.port}
</div>

{redundancy === "backup" && (
  <div className="text-blue-400 font-semibold">
    BP{cell.port}
  </div>
)}

<div>
  {cell.direction}
</div>
                  </div>
                )
              )}
            </div>
          )
        )}

      </div>
    </div>
  );
}