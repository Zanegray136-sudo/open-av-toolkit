type Props = {
  manufacturer: string;
  setManufacturer: (value: string) => void;
  model: string;
  setModel: (value: string) => void;
  processor: string;
  setProcessor: (value: string) => void;
  wide: number;
  setWide: (value: number) => void;
  high: number;
  setHigh: (value: number) => void;
  manufacturers: string[];
  models: { model: string }[];
  processors: {
    manufacturer: string;
    model: string;
  }[];
};

export default function ScreenSetup(props: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-6">
        Screen Setup
      </h2>

      <div className="space-y-4">
        <select
          className="w-full bg-zinc-800 p-3 rounded-lg"
          value={props.manufacturer}
          onChange={(e) =>
            props.setManufacturer(
              e.target.value
            )
          }
        >
          <option value="">
            Select Manufacturer
          </option>

          {props.manufacturers.map(
            (m) => (
              <option key={m}>
                {m}
              </option>
            )
          )}
        </select>

        <select
          className="w-full bg-zinc-800 p-3 rounded-lg"
          value={props.model}
          onChange={(e) =>
            props.setModel(
              e.target.value
            )
          }
        >
          <option value="">
            Select Product
          </option>

          {props.models.map(
            (m) => (
              <option
                key={m.model}
                value={m.model}
              >
                {m.model}
              </option>
            )
          )}
        </select>

        <select
          className="w-full bg-zinc-800 p-3 rounded-lg"
          value={props.processor}
          onChange={(e) =>
            props.setProcessor(
              e.target.value
            )
          }
        >
          <option value="">
            Select Processor
          </option>

          {props.processors.map(
            (p) => (
              <option
                key={p.model}
                value={p.model}
              >
                {p.manufacturer} -{" "}
                {p.model}
              </option>
            )
          )}
        </select>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="bg-zinc-800 p-3 rounded-lg"
            value={props.wide}
            onChange={(e) =>
              props.setWide(
                Number(
                  e.target.value
                )
              )
            }
          />

          <input
            type="number"
            className="bg-zinc-800 p-3 rounded-lg"
            value={props.high}
            onChange={(e) =>
              props.setHigh(
                Number(
                  e.target.value
                )
              )
            }
          />
        </div>
      </div>
    </div>
  );
}