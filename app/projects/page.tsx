import ProjectsTable from "@/features/projects/components/ProjectsTable";

export default function ProjectsPage() {
  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-4 text-center text-6xl font-bold text-zinc-100">
        Projects
      </h1>

      <p className="mb-4 ml-2 w-full text-center">
        Take a look at the projects I have worked on throughout my career,
        you&apos;ll find both professional and personal projects.
      </p>

      <ProjectsTable />
    </div>
  );
}
