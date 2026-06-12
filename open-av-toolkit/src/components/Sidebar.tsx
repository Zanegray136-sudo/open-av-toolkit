export default function Sidebar() {
  return (
    <div className="bg-zinc-900 border-r border-zinc-800 h-screen p-4">
      <h2 className="text-xl font-bold mb-6">
        Open AV Toolkit
      </h2>

      <div className="space-y-6">

        <div>
          <h3 className="text-zinc-500 text-xs mb-2">
            LED TOOLS
          </h3>

          <div className="space-y-2">
            <button className="block text-left w-full hover:text-blue-400">
              Screen Calculator
            </button>

            <button className="block text-left w-full hover:text-blue-400">
              Routing Planner
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-zinc-500 text-xs mb-2">
            PROCESSORS
          </h3>

          <div className="space-y-2">
            <button className="block text-left w-full hover:text-blue-400">
              NovaStar
            </button>

            <button className="block text-left w-full hover:text-blue-400">
              Brompton
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}