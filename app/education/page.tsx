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
    duration: "9 Semesters (2022 - In Course)",
    degreeMethod: "Pending",
    description:
      "When I first started university I was fairly tired of engineering, I has spent the last 3 years learning and developing and I didn't take a gap year, so I was a bit overwhelmed by the drastic change between high school and university. I had so many more classes across many more hours and I lived very far from the campus, between that and major construction work through the city I ended up spending about 6 hours a day on the bus just to make it to the campus. I had to re-learn a lot of what I already learnt in high school which was a bit frustrating. After the first couple of semesters the classes really took off, not in terms of amount of work but in the quality of the topics and classes overall, I learned a lot about mobile development, APIs and most importantly, teamwork. I participated in many hackathons and bigger projects, mainly taking up a role as one of the main frontend developers, this time I used a lot more than vanilla HTML and CSS, I learned about web developing frameworks and libraries but I mainly used React and NextJS.",
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
      "This was my first serious exposure to engineering as a whole. Although this stage of my journey was partially disrupted by the COVID-19 pandemic, I never lost motivation or interest in programming. During this time, I learned the foundations of programming and software engineering, primarily working with Java and C++. However, the area that truly piqued my interest was web development. While I only applied the basics of HTML, CSS, and JavaScript, I quickly realized that this was the aspect of programming I enjoyed the most. Seeing my first completed web page and sharing it with friends and family—who were very encouraging—meant a lot to me, even though the design itself was far from perfect. Beyond the praise, what mattered most was how much I enjoyed the process of developing a web page. In my free time, I also began experimenting with game development by following Unity and C# tutorials, which allowed me to create my first small games.",
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
        <CarouselContent className="mt-8 max-w-4xl items-center">
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
