"use client";

import HeroButton from "@/features/home/components/HeroButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-950 font-sans">
      <span className="mt-2 block px-4 text-center font-mono text-xs md:max-w-full md:px-0 md:text-base">
        Welcome to my portfolio! My name is{" "}
        <strong>José Manuel Morales Gómez</strong>.
      </span>

      <main className="relative flex flex-1 flex-col px-4 py-1 md:flex-row">
        <Image
          src="/hero-image.jpg"
          alt="Main picture"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full outline-10 outline-gray-950 md:block"
        />
        <section className="flex flex-2/5 flex-col md:flex-1">
          <HeroButton
            text="Projects"
            color={"var(--projects-main)"}
            icon="projects"
          />
          <HeroButton
            text="Experience"
            color={"var(--experience-main)"}
            icon="experience"
          />
        </section>
        <section className="flex flex-3/5 flex-col md:flex-1">
          <HeroButton
            text="Skills"
            color={"var(--skills-main)"}
            icon="skills"
          />
          <HeroButton
            text="Education"
            color={"var(--education-main)"}
            icon="education"
          />
          <HeroButton
            text="Contact me"
            color={"var(--contact-main)"}
            icon="contact"
          />
        </section>
      </main>
    </div>
  );
}
