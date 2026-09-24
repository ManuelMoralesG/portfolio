import FullStar from "@/shared/components/images/fstar-icon";
import EmptyStar from "@/shared/components/images/estar-icon";

const projectData = [
  {
    project: "DENEST",
    completedOn: "18-Feb-2026",
    complexity: 4,
    format: "Team",
  },
  {
    project: "Plannify",
    completedOn: "Ongoing",
    complexity: 5,
    format: "Team",
  },
  {
    project: "Portafolio",
    completedOn: "Ongoing",
    complexity: 3,
    format: "Individual",
  },
  {
    project: "MEDLY",
    completedOn: "25-Apr-2026",
    complexity: 5,
    format: "Team",
  },
];

export default function ProjectsTable() {
  return (
    <div className="w-4/5">
      <section>
        <input
          className="bg-zinc-100 text-stone-600"
          type="text"
          placeholder="Search..."
        />
      </section>

      <div className="overflow-hidden rounded-xl">
        <table className="w-full text-lg font-normal">
          <thead className="bg-projects-main">
            <tr className="h-12 text-left">
              <th className="pl-10">Project</th>
              <th className="pl-10">Completed on</th>
              <th className="pl-10">Complexity</th>
              <th className="pl-10">Format</th>
            </tr>
          </thead>
          <tbody className="bg-projects-foreground">
            {projectData.map((project, index) => (
              <tr key={index} className="h-12">
                <td className="pl-10">{project.project}</td>
                <td className="pl-10">{project.completedOn}</td>
                <td className="pl-10 align-middle">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < project.complexity ? (
                        <FullStar key={i} className="size-4" />
                      ) : (
                        <EmptyStar key={i} className="size-4" />
                      ),
                    )}
                  </div>
                </td>
                <td className="pl-10">{project.format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
