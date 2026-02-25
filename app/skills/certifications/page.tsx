"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";

import Image from "next/image";

const certificationData = [
  {
    title: "Certificate in Advanced English",
    date: "2022",
    link: "",
    image: "/certifications/cambridge.webp",
  },
  {
    title: "Responsive Web Development",
    date: "2022",
    link: "",
    image: "/certifications/rwd.webp",
  },
  {
    title: "Javascript Algorithms and Data Structures",
    date: "2024",
    link: "",
    image: "/certifications/js.webp",
  },
  {
    title: "Introduction to Indie Games",
    date: "2020",
    link: "",
    image: "/certifications/gamedev.webp",
  },
  {
    title: "German at Work: Post-Beginners",
    date: "2020",
    link: "",
    image: "/certifications/german.webp",
  },
];

export default function CertificationsPage() {
  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-5/6 flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-2 w-full text-left text-6xl font-bold text-zinc-100">
        Certifications
      </h1>

      <p className="ml-2 w-full text-left">
        Check out my obtained certifications across many years.
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="mt-12 w-full"
      >
        <CarouselContent className="mx-auto h-120 w-1/2">
          {certificationData.map((data, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="bg-skills-main w-full rounded-t-xl py-2 text-center font-bold">
                {data.title}
              </p>

              <div className="bg-skills-foreground flex h-100 w-full items-center justify-center rounded-b-xl">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={250}
                  height={0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
