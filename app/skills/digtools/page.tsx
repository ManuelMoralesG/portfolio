"use client";

import AwsIcon from "@/features/skills/components/images/aws";
import AzureIcon from "@/features/skills/components/images/azure";
import BlenderIcon from "@/features/skills/components/images/blender";
import DaVinciIcon from "@/features/skills/components/images/davinci";
import EndeavourIcon from "@/features/skills/components/images/endeavour";
import FigmaIcon from "@/features/skills/components/images/figma";
import GithubIcon from "@/features/skills/components/images/github";
import GoogleIcon from "@/features/skills/components/images/google";
import KritaIcon from "@/features/skills/components/images/krita";
import LibreOfficeIcon from "@/features/skills/components/images/libre";
import MintIcon from "@/features/skills/components/images/mint";
import OfficeIcon from "@/features/skills/components/images/office";
import OnlyOfficeIcon from "@/features/skills/components/images/only";
import PhotopeaIcon from "@/features/skills/components/images/photopea";
import ShotCutIcon from "@/features/skills/components/images/shotcut";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

const toolsData = [
  {
    name: "Documents Suites",
    value: "document-suites",
    tools: [
      {
        name: "Microsoft Office",
        component: OfficeIcon,
      },
      {
        name: "Google Workspace",
        component: GoogleIcon,
      },
      {
        name: "LibreOffice",
        component: LibreOfficeIcon,
      },
      {
        name: "Onlyoffice",
        component: OnlyOfficeIcon,
      },
    ],
  },
  {
    name: "Linux Distributions",
    value: "linux-distros",
    tools: [
      {
        name: "EndeavourOS",
        component: EndeavourIcon,
      },
      {
        name: "Linux Mint",
        component: MintIcon,
      },
    ],
  },
  {
    name: "Creative Tools",
    value: "creative-tools",
    tools: [
      {
        name: "Figma",
        component: FigmaIcon,
      },
      {
        name: "Photopea",
        component: PhotopeaIcon,
      },
      {
        name: "DaVinci Resolve",
        component: DaVinciIcon,
      },
      {
        name: "Blender",
        component: BlenderIcon,
      },
      {
        name: "Shotcut",
        component: ShotCutIcon,
      },
      {
        name: "Krita",
        component: KritaIcon,
      },
    ],
  },
  {
    name: "Cloud Computing and Services",
    value: "cloud-computing",
    tools: [
      {
        name: "AWS",
        component: AwsIcon,
      },
      {
        name: "Github",
        component: GithubIcon,
      },
      {
        name: "Azure Devops",
        component: AzureIcon,
      },
    ],
  },
];

export default function DigitalToolsPage() {
  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-5/6 flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-2 w-full text-left text-6xl font-bold text-zinc-100">
        Digital Tools
      </h1>

      <p className="ml-2 w-full text-left">
        These are the tools in which I have ample experience using and can work
        easily with them.
      </p>

      <Accordion type="single" collapsible className="mt-12 w-full">
        {toolsData.map((data, index) => (
          <AccordionItem value={data.value} key={index} className="mb-3">
            <AccordionTrigger className="bg-skills-main rounded-xl px-8 text-lg font-semibold hover:brightness-120">
              {data.name}
            </AccordionTrigger>
            <AccordionContent className="bg-skills-foreground mx-auto grid w-49/50 grid-cols-4 gap-y-5 rounded-b-xl px-10 py-6">
              {data.tools.map((data_t, index_t) => {
                const Icon = data_t.component;

                return (
                  <section
                    key={index_t}
                    className="flex flex-col items-center gap-2"
                  >
                    <Icon className="size-15" />
                    <p className="text-center">{data_t.name}</p>
                  </section>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
