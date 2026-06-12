import { useState } from "react";

import { ledPanels } from "./data/ledPanels";
import { processors } from "./data/processors";

import Sidebar from "./components/Sidebar";
import ScreenSetup from "./components/ScreenSetup";
import ProcessorAnalysis from "./components/ProcessorAnalysis";
import RoutingControls from "./components/RoutingControls";
import DataRoutingMap from "./components/DataRoutingMap";
import PatchSheet from "./components/PatchSheet";
import ProcessorOutputs from "./components/ProcessorOutputs";
import ProjectDetails from "./components/ProjectDetails";

function App() {
const [manufacturer, setManufacturer] =
useState("");

const [model, setModel] =
useState("");

const [processor, setProcessor] =
useState("");

const [wide, setWide] =
useState(10);

const [high, setHigh] =
useState(5);

const [dataStart, setDataStart] =
useState("top-left");

const [routingStyle, setRoutingStyle] =
useState("snake");

const [direction, setDirection] =
useState("horizontal");

const [numberingMode, setNumberingMode] =
useState("standard");

const [redundancy, setRedundancy] =
useState("primary");

const [projectName, setProjectName] =
  useState("");

const [client, setClient] =
  useState("");

const [venue, setVenue] =
  useState("");

const [engineer, setEngineer] =
  useState("");

const manufacturers = [
...new Set(
ledPanels.map(
(panel) =>
panel.manufacturer
)
),
];

const models = ledPanels.filter(
(panel) =>
panel.manufacturer ===
manufacturer
);

const selectedPanel =
ledPanels.find(
(panel) =>
panel.model === model
);

const selectedProcessor =
processors.find(
(proc) =>
proc.model === processor
);

const widthMetres =
selectedPanel
? (selectedPanel.width *
wide) /
1000
: 0;

const heightMetres =
selectedPanel
? (selectedPanel.height *
high) /
1000
: 0;

const resWidth =
selectedPanel
? Math.round(
(selectedPanel.width *
wide) /
selectedPanel.pitch
)
: 0;

const resHeight =
selectedPanel
? Math.round(
(selectedPanel.height *
high) /
selectedPanel.pitch
)
: 0;

const totalPixels =
resWidth * resHeight;
const totalCabinets =
  wide * high;

const totalWeight =
selectedPanel
? selectedPanel.weight *
wide *
high
: 0;

const totalPower =
selectedPanel
? selectedPanel.maxPower *
wide *
high
: 0;

const processorLoading =
selectedProcessor &&
totalPixels
? (
(totalPixels /
selectedProcessor.maxPixels) *
100
).toFixed(1)
: "0";

const portsRequired =
selectedProcessor &&
totalPixels
? Math.max(
1,
Math.ceil(
totalPixels /
selectedProcessor.pixelsPerPort
)
)
: 0;

const availablePorts =
selectedProcessor
?.ethernetPorts ?? 0;

const overloaded =
selectedProcessor
? totalPixels >
selectedProcessor.maxPixels
: false;

const createSnakeMap = () => {
if (
!selectedProcessor ||
portsRequired === 0
) {
return [];
}


const map = [];

const totalCabinets =
  wide * high;

const cabinetsPerPort =
  Math.ceil(
    totalCabinets /
      portsRequired
  );


for (
  let row = 0;
  row < high;
  row++
) {
  const rowData = [];

  for (
    let col = 0;
    col < wide;
    col++
  ) {
    const cabinetIndex =
  row * wide + col;

const port =
  Math.min(
    Math.floor(
      cabinetIndex /
        cabinetsPerPort
    ) + 1,
    portsRequired
  );
    let arrow = "→";

    if (
      direction ===
      "horizontal"
    ) {
      if (
        routingStyle ===
        "snake"
      ) {
        if (
          dataStart ===
            "top-right" ||
          dataStart ===
            "bottom-right"
        ) {
          arrow =
            row % 2 === 0
              ? "←"
              : "→";
        } else {
          arrow =
            row % 2 === 0
              ? "→"
              : "←";
        }
      } else {
        arrow =
          dataStart.includes(
            "right"
          )
            ? "←"
            : "→";
      }
    } else {
      arrow =
        dataStart.includes(
          "bottom"
        )
          ? "↑"
          : "↓";
    }

    rowData.push({
      port,
      direction: arrow,
    });
  }

  map.push(rowData);
}

return map;
};

const snakeMap =
createSnakeMap();

return (
  <div className="min-h-screen bg-zinc-950 text-white flex">


  <div className="w-72 shrink-0">
    <Sidebar />
  </div>

  <div className="flex-1">

    <header className="border-b border-zinc-800">
      <div className="px-8 py-5">

        <h1 className="text-4xl font-bold">
          Open AV Toolkit
        </h1>

        <p className="text-zinc-400">
          LED Engineering &
          Production Tools
        </p>

      </div>
    </header>

    <main className="p-8">

  <div className="grid gap-6 xl:grid-cols-3">
<div>
  <ProjectDetails
    projectName={projectName}
    setProjectName={setProjectName}
    client={client}
    setClient={setClient}
    venue={venue}
    setVenue={setVenue}
    engineer={engineer}
    setEngineer={setEngineer}
  />
</div>
    <div>
      <ScreenSetup
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        model={model}
        setModel={setModel}
        processor={processor}
        setProcessor={setProcessor}
        wide={wide}
        setWide={setWide}
        high={high}
        setHigh={setHigh}
        manufacturers={manufacturers}
        models={models}
        processors={processors}
      />
    </div>

  <div className="xl:col-span-2">
    <ProcessorAnalysis
      widthMetres={widthMetres}
      heightMetres={heightMetres}
      resWidth={resWidth}
      resHeight={resHeight}
      totalPixels={totalPixels}
      totalWeight={totalWeight}
      totalPower={totalPower}
      processorLoading={processorLoading}
      portsRequired={portsRequired}
      availablePorts={availablePorts}
      overloaded={overloaded}
      backupEnabled={
        redundancy === "backup"
      }
    />
  </div>


<div className="xl:col-span-2">
  <ProcessorOutputs
  processorName={processor}
  totalPorts={availablePorts}
  portsRequired={portsRequired}
  redundancy={redundancy}
  totalPixels={totalPixels}
  pixelsPerPort={
    selectedProcessor?.pixelsPerPort ?? 
    650000
  }
  totalCabinets={totalCabinets}
/>
</div>

  <div className="xl:col-span-3">
    <RoutingControls
      dataStart={dataStart}
      setDataStart={setDataStart}
      routingStyle={routingStyle}
      setRoutingStyle={
        setRoutingStyle
      }
      direction={direction}
      setDirection={setDirection}
      numberingMode={
        numberingMode
      }
      setNumberingMode={
        setNumberingMode
      }
      redundancy={redundancy}
      setRedundancy={
        setRedundancy
      }
    />
  </div>

  <div className="xl:col-span-3">
    <DataRoutingMap
      snakeMap={snakeMap}
      wide={wide}
      numberingMode={
        numberingMode
      }
      redundancy={redundancy}
    />
  </div>

   <div className="xl:col-span-3">
    <PatchSheet
      portsRequired={portsRequired}
      totalCabinets={totalCabinets}
      redundancy={redundancy}
    />
  </div>

</div>

</main>

</div>

</div>

);
}

export default App;