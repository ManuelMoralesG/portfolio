"use client";

import BackIcon from "@/shared/components/images/back-icon";
import EducationIcon from "@/shared/components/images/education-icon";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="bg-education-background relative isolate w-full overflow-hidden">
      <EducationIcon className="absolute -bottom-40 -left-20 z-0 size-230 fill-white/8" />
      <Button
        onClick={() => router.back()}
        className="bg-education-main hover:bg-education-main/80 absolute -top-9 -left-5 z-11 size-20 rotate-12 cursor-pointer hover:scale-105"
      >
        <BackIcon className="absolute right-2 bottom-1 size-10 -rotate-12" />
      </Button>
      {children}
    </div>
  );
}
