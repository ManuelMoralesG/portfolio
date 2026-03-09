"use client";

import DigitalToolsIcon from "@/shared/components/images/digtools-icon";
import FileFIcon from "@/shared/components/images/filef-icon";
import LanguagesIcon from "@/shared/components/images/languages";
import MaintenanceIcon from "@/shared/components/images/maintenance-icon";
import SoftDevIcon from "@/shared/components/images/softdev-icon";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function SkillsPage() {
  const router = useRouter();

  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-4 text-center text-6xl font-bold text-zinc-100">
        Skills
      </h1>

      <p>
        These are the areas in which I have solid knowledge and practical
        experience
      </p>

      <section className="mt-12 flex w-3/4 max-w-4xl items-center justify-between">
        <button
          onClick={() => router.push("skills/softdev")}
          className="bg-skills-foreground hover:bg-skills-main focus:bg-skills-main flex h-90 w-52 flex-col items-center justify-center gap-4 rounded-2xl transition hover:-translate-y-5 hover:cursor-pointer focus:-translate-y-5"
        >
          <SoftDevIcon className="size-30 fill-zinc-100" />
          <h2 className="w-26 text-center">Software Development</h2>
        </button>
        <button
          onClick={() => router.push("skills/digtools")}
          className="bg-skills-foreground hover:bg-skills-main focus:bg-skills-main flex h-90 w-52 flex-col items-center justify-center gap-4 rounded-2xl transition hover:-translate-y-5 hover:cursor-pointer focus:-translate-y-5"
        >
          <DigitalToolsIcon className="size-30 fill-zinc-100" />
          <h2 className="w-25 text-center">Digital Tools</h2>
        </button>
        <button
          onClick={() => router.push("skills/languages")}
          className="bg-skills-foreground hover:bg-skills-main focus:bg-skills-main flex h-90 w-52 flex-col items-center justify-center gap-4 rounded-2xl transition hover:-translate-y-5 hover:cursor-pointer focus:-translate-y-5"
        >
          <LanguagesIcon className="size-30 fill-zinc-100" />
          <h2 className="w-25 text-center">Languages</h2>
        </button>
        <button className="bg-skills-foreground hover:bg-skills-main focus:bg-skills-main flex h-90 w-52 flex-col items-center justify-center gap-4 rounded-2xl transition hover:-translate-y-5 hover:cursor-pointer focus:-translate-y-5">
          <MaintenanceIcon className="size-30 stroke-zinc-100" />
          <h2 className="w-25 text-center">Hardware Maintenance</h2>
        </button>
      </section>

      <Button
        onClick={() => router.push("skills/certifications")}
        className="bg-skills-foreground hover:bg-skills-main absolute -right-1 -bottom-8 size-30 -rotate-12 cursor-pointer rounded-xl hover:-bottom-1 hover:scale-y-110"
      >
        <FileFIcon className="size-15 fill-white" />
      </Button>
    </div>
  );
}
