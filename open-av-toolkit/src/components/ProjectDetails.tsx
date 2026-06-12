type Props = {
  projectName: string;
  setProjectName: (
    value: string
  ) => void;

  client: string;
  setClient: (
    value: string
  ) => void;

  venue: string;
  setVenue: (
    value: string
  ) => void;

  engineer: string;
  setEngineer: (
    value: string
  ) => void;
};

export default function ProjectDetails({
  projectName,
  setProjectName,
  client,
  setClient,
  venue,
  setVenue,
  engineer,
  setEngineer,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl hover:border-zinc-700 transition-all">

      <h2 className="text-xl font-semibold mb-6">
        Project Details
      </h2>

      <div className="grid gap-4">

        <input
          className="bg-zinc-800 rounded-lg p-3"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) =>
            setProjectName(
              e.target.value
            )
          }
        />

        <input
          className="bg-zinc-800 rounded-lg p-3"
          placeholder="Client"
          value={client}
          onChange={(e) =>
            setClient(
              e.target.value
            )
          }
        />

        <input
          className="bg-zinc-800 rounded-lg p-3"
          placeholder="Venue"
          value={venue}
          onChange={(e) =>
            setVenue(
              e.target.value
            )
          }
        />

        <input
          className="bg-zinc-800 rounded-lg p-3"
          placeholder="Engineer"
          value={engineer}
          onChange={(e) =>
            setEngineer(
              e.target.value
            )
          }
        />

      </div>

    </div>
  );
}