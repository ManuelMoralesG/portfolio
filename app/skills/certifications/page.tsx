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
      <h1 className="font-konkhmer mx-auto mb-4 w-full text-left text-6xl font-bold text-zinc-100">
        Certifications
      </h1>

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="h-140">
          {certificationData.map((data, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p>{data.title}</p>

              <Image src={data.image} alt={data.title} width={300} height={0} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
