"use client";

import Image from "next/image";

const languageData = [
  {
    language: "Spanish",
    flagLink: "/flags/mexico.webp",
    description: "My mother tongue",
  },
  {
    language: "English",
    flagLink: "/flags/uk.webp",
    description: "Certified with a level of C1",
  },
  {
    language: "German",
    flagLink: "/flags/germany.webp",
    description: "Basic understanding and speaking",
  },
];

export default function LanguagesPage() {
  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-5/6 flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-2 w-full text-left text-6xl font-bold text-zinc-100">
        Languages
      </h1>

      <p className="ml-2 w-full text-left">
        These are the languages in which I have a high level of profiency.
      </p>

      <section className="mt-12 flex w-9/10 max-w-5xl items-baseline justify-between">
        {languageData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="text-3xl font-bold">{data.language}</p>
            <Image
              alt={data.language}
              width={300}
              height={300}
              src={data.flagLink}
            />
            <p className="max-w-60 text-center text-lg">{data.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
