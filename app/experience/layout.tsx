"use client";

import BackIcon from "@/shared/components/images/back-icon";
import ExperienceIcon from "@/shared/components/images/experience-icon";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="bg-experience-background relative isolate w-full overflow-hidden">
      <ExperienceIcon className="absolute -bottom-25 -left-10 z-0 size-200 fill-white/8" />
      <Button
        onClick={() => router.back()}
        className="bg-experience-main hover:bg-experience-main/80 absolute -top-9 -left-5 z-11 size-20 rotate-12 cursor-pointer hover:scale-105"
      >
        <BackIcon className="absolute right-2 bottom-1 size-10 -rotate-12" />
      </Button>
      {children}
    </div>
  );
}
