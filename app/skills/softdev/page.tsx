"use client";

import Image from "next/image";

const frontendImageData = [
  { src: "/softdev/js.webp", alt: "Frontend Development" },
  { src: "/softdev/ts.webp", alt: "Frontend Development" },
  { src: "/softdev/tailwind.webp", alt: "Frontend Development" },
  { src: "/softdev/nextjs.webp", alt: "Frontend Development" },
  { src: "/softdev/react.webp", alt: "Frontend Development" },
  { src: "/softdev/native.webp", alt: "Frontend Development" },
  { src: "/softdev/html2.webp", alt: "Frontend Development" },
  { src: "/softdev/css.webp", alt: "Frontend Development" },
  { src: "/softdev/python.webp", alt: "Frontend Development" },
];

const backendImageData = [
  { src: "/softdev/csharp.webp", alt: "Backend Development" },
  { src: "/softdev/docker.webp", alt: "Backend Development" },
  { src: "/softdev/hono.webp", alt: "Backend Development" },
  { src: "/softdev/mongo.webp", alt: "Backend Development" },
  { src: "/softdev/mysql.webp", alt: "Backend Development" },
  { src: "/softdev/postgres.webp", alt: "Backend Development" },
  { src: "/softdev/php.webp", alt: "Backend Development" },
  { src: "/softdev/swagger.webp", alt: "Backend Development" },
  { src: "/softdev/expressjs.webp", alt: "Backend Development" },
];

export default function SoftDevPage() {
  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-5/6 flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-2 w-full text-left text-6xl font-bold text-zinc-100">
        Software Development
      </h1>

      <p className="ml-2 w-full text-left">
        Here are most of the frameworks, libraries, tools and programming
        languages I have worked with.
      </p>

      <section className="mt-10 flex w-full items-center justify-around">
        <div className="w-3/7">
          <h2 className="bg-skills-main rounded-t-xl py-2 text-center font-bold">
            Frontend Development
          </h2>

          <div className="bg-skills-foreground grid h-110 grid-cols-3 place-items-center items-center justify-center rounded-b-xl">
            {frontendImageData.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={90}
                height={90}
              />
            ))}
          </div>
        </div>

        <div className="w-3/7">
          <h2 className="bg-skills-main rounded-t-xl py-2 text-center font-bold">
            Backend Development
          </h2>

          <div className="bg-skills-foreground grid h-110 grid-cols-3 place-items-center items-center justify-center rounded-b-xl">
            {backendImageData.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={90}
                height={90}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
