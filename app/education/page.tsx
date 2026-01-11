"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";

import Image from "next/image";

const educationData = [
  {
    level: "Bachelor's Degree",
    institution: "Universidad Autónoma de Querétaro",
    career: "Software Engineering",
    duration: "9 Semesters (2022 - 2027)",
    degreeMethod: "Automatic graduation by average",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique erat dictum ullamcorper ac aliquam pellentesque lectus interdum. Ultrices urna leo pulvinar laoreet quis sit amet pellentesque. Amet diam semper amet nisi egestas quis consequat in diam. Varius nunc turpis nisl facilisis vestibulum viverra at nec. Posuere mi sapien at quis sit gravida et ut ultrices. Id id velit vulputate varius. Nisi orci felis viverra id arcu risus condimentum. Ut nisi tellus cursus tempor facilisis sit. Urna hac condimentum egestas sit mauris commodo. Malesuada in arcu cursus tortor. Cras odio tellus facilisis urna pharetra sollicitudin. Libero turpis vel vitae sed ut vitae tristique integer. Aliquam viverra elementum eu tempor adipiscing egestas. Egestas ac vel orci eget sit nibh pellentesque consectetur nulla",
    image: "/institution-icons/uaq.webp",
  },
  {
    level: "Associate's Degree",
    institution:
      "Centro de Bachillerato Tecnológico Industrial y de Servicios No. 118",
    career: "Programming",
    duration: "6 Semesters (2019 - 2022)",
    degreeMethod: "Automatic graduation by average",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique erat dictum ullamcorper ac aliquam pellentesque lectus interdum. Ultrices urna leo pulvinar laoreet quis sit amet pellentesque. Amet diam semper amet nisi egestas quis consequat in diam. Varius nunc turpis nisl facilisis vestibulum viverra at nec. Posuere mi sapien at quis sit gravida et ut ultrices. Id id velit vulputate varius. Nisi orci felis viverra id arcu risus condimentum. Ut nisi tellus cursus tempor facilisis sit. Urna hac condimentum egestas sit mauris commodo. Malesuada in arcu cursus tortor. Cras odio tellus facilisis urna pharetra sollicitudin. Libero turpis vel vitae sed ut vitae tristique integer. Aliquam viverra elementum eu tempor adipiscing egestas. Egestas ac vel orci eget sit nibh pellentesque consectetur nulla",
    image: "/institution-icons/cbtis.webp",
  },
];

export default function EducationPage() {
  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-2 text-center text-6xl font-bold text-zinc-100">
        Education
      </h1>

      <section className="text-center">
        <p>Explore my academic journey</p>
      </section>

      <Carousel>
        <CarouselContent className="mt-8 max-w-4xl">
          {educationData.map((data, index) => (
            <CarouselItem key={index}>
              <div className="bg-education-main rounded-t-xl py-2 text-center">
                {data.level}
              </div>

              <div className="bg-education-foreground mx-auto rounded-b-xl p-6">
                <section className="flex items-center gap-4">
                  <div className="flex size-30 items-center justify-center rounded-full bg-white p-6">
                    <Image
                      src={data.image}
                      alt={data.institution}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {data.institution}
                    </h2>
                    <p>
                      <strong>Degree:</strong> {data.career}
                    </p>
                    <p>
                      <strong>Duration:</strong> {data.duration}
                    </p>
                    <p>
                      <strong>Graduation:</strong> {data.degreeMethod}
                    </p>
                  </div>
                </section>

                <section className="mt-4 w-full">
                  <p className="text-justify font-light">{data.description}</p>
                </section>
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
