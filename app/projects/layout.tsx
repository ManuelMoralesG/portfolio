"use client";

import BackIcon from "@/shared/components/images/back-icon";
import ProjectsIcon from "@/shared/components/images/projects-icon";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="bg-projects-background relative isolate w-full overflow-hidden">
      <ProjectsIcon className="absolute -bottom-35 -left-20 z-0 size-200 fill-white/8" />
      <Button
        onClick={() => router.back()}
        className="bg-projects-main hover:bg-projects-main/80 absolute -top-9 -left-5 z-11 size-20 rotate-12 cursor-pointer hover:scale-105"
      >
        <BackIcon className="absolute right-2 bottom-1 size-10 -rotate-12" />
      </Button>
      {children}
    </div>
  );
}
