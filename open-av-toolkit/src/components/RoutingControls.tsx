type Props = {
  dataStart: string;
  setDataStart: (value: string) => void;

  routingStyle: string;
  setRoutingStyle: (value: string) => void;

  direction: string;
  setDirection: (value: string) => void;

  numberingMode: string;
  setNumberingMode: (value: string) => void;

  redundancy: string;
  setRedundancy: (value: string) => void;
};

export default function RoutingControls({
  dataStart,
  setDataStart,
  routingStyle,
  setRoutingStyle,
  direction,
  setDirection,
  numberingMode,
  setNumberingMode,
  redundancy,
  setRedundancy,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-6">
        Routing Configuration
      </h2>

      <div className="grid md:grid-cols-5 gap-4">

        <div>
          <label className="block mb-2 text-zinc-400">
            Data Start
          </label>

          <select
            className="w-full bg-zinc-800 p-3 rounded-lg"
            value={dataStart}
            onChange={(e) =>
              setDataStart(e.target.value)
            }
          >
            <option value="top-left">
              Top Left
            </option>

            <option value="top-right">
              Top Right
            </option>

            <option value="bottom-left">
              Bottom Left
            </option>

            <option value="bottom-right">
              Bottom Right
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-zinc-400">
            Routing Style
          </label>

          <select
            className="w-full bg-zinc-800 p-3 rounded-lg"
            value={routingStyle}
            onChange={(e) =>
              setRoutingStyle(
                e.target.value
              )
            }
          >
            <option value="snake">
              Snake
            </option>

            <option value="straight">
              Straight
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-zinc-400">
            Direction
          </label>

          <select
            className="w-full bg-zinc-800 p-3 rounded-lg"
            value={direction}
            onChange={(e) =>
              setDirection(
                e.target.value
              )
            }
          >
            <option value="horizontal">
              Horizontal
            </option>

            <option value="vertical">
              Vertical
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-zinc-400">
            Numbering
          </label>

          <select
            className="w-full bg-zinc-800 p-3 rounded-lg"
            value={numberingMode}
            onChange={(e) =>
              setNumberingMode(
                e.target.value
              )
            }
          >
            <option value="standard">
              Standard
            </option>

            <option value="snake">
              Snake
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-zinc-400">
            Redundancy
          </label>

          <select
            className="w-full bg-zinc-800 p-3 rounded-lg"
            value={redundancy}
            onChange={(e) =>
              setRedundancy(
                e.target.value
              )
            }
          >
            <option value="primary">
              Primary Only
            </option>

            <option value="backup">
              Primary + Backup
            </option>
          </select>
        </div>

      </div>
    </div>
  );
}