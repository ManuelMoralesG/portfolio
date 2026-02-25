"use client";

import Image from "next/image";

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
            <Image
              src="/softdev/js.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/ts.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/tailwind.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/nextjs.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/react.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/native.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/html.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/css.webp"
              alt="Frontend Development"
              width={73}
              height={73}
            />
            <Image
              src="/softdev/python.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="w-3/7">
          <h2 className="bg-skills-main rounded-t-xl py-2 text-center font-bold">
            Backend Development
          </h2>

          <div className="bg-skills-foreground grid h-110 grid-cols-3 place-items-center items-center justify-center rounded-b-xl">
            <Image
              src="/softdev/csharp.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/docker.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/hono.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/mongo.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/mysql.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/postgres.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/php.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/swagger.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
            <Image
              src="/softdev/ts.webp"
              alt="Frontend Development"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
