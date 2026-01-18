"use client";

import BackIcon from "@/shared/components/images/back-icon";
import SkillsIcon from "@/shared/components/images/skills-icon";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="bg-skills-background relative isolate w-full overflow-hidden">
      <SkillsIcon className="absolute -bottom-20 -left-40 z-0 size-180 fill-white/8" />
      <Button
        onClick={() => router.back()}
        className="bg-skills-main hover:bg-skills-main/80 absolute -top-9 -left-5 z-11 size-20 rotate-12 cursor-pointer hover:scale-110"
      >
        <BackIcon className="absolute right-2 bottom-1 size-10 -rotate-12" />
      </Button>
      {children}
    </div>
  );
}
