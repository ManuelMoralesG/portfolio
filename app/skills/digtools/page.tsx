"use client";

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
        imageLink: "/tools/",
      },
      {
        name: "Google Workspace",
        imageLink: "/tools/",
      },
      {
        name: "LibreOffice",
        imageLink: "/tools/",
      },
      {
        name: "Onlyoffice",
        imageLink: "/tools/",
      },
    ],
  },
  {
    name: "Linux Distributions",
    value: "linux-distros",
    tools: [
      {
        name: "EndeavourOS - KDE (Arch)",
        imageLink: "/tools/",
      },
      {
        name: "Linux Mint - Cinnamon (Ubuntu)",
        imageLink: "/tools/",
      },
    ],
  },
  {
    name: "Creative Tools",
    value: "creative-tools",
    tools: [
      {
        name: "Figma",
        imageLink: "/tools/",
      },
      {
        name: "Photopea",
        imageLink: "/tools/",
      },
      {
        name: "DaVinci Resolve",
        imageLink: "/tools/",
      },
      {
        name: "Blender",
        imageLink: "/tools/",
      },
      {
        name: "Shotcut",
        imageLink: "/tools/",
      },
    ],
  },
  {
    name: "Cloud Computing and Services",
    value: "cloud-computing",
    tools: [
      {
        name: "AWS",
        imageLink: "/tools/",
      },
      {
        name: "Github",
        imageLink: "/tools/",
      },
      {
        name: "Azure Devops",
        imageLink: "/tools/",
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
            <AccordionContent className="bg-skills-foreground mx-auto w-49/50 rounded-b-xl px-10 py-4">
              {data.tools.map((data_t, index_t) => (
                <p key={index_t}>{data_t.name}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
