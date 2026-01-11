"use client";

import ContactIcon from "@/shared/components/images/contact-icon";
import GithubIcon from "@/shared/components/images/github-icon";
import LinkedInIcon from "@/shared/components/images/linkedin-icon";
import TwitterIcon from "@/shared/components/images/twitter-icon";

export default function ContactPage() {
  return (
    <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-full flex-col items-center justify-center">
      <h1 className="font-konkhmer mx-auto mb-2 text-center text-6xl font-bold text-zinc-100">
        Contact me
      </h1>

      <section className="text-center">
        <p>Want to contact me?</p>
        <p>Here&apos;s my contact information and social media links</p>
      </section>

      <section className="mt-12 flex w-full max-w-xl flex-col gap-4 px-8 md:px-0">
        <a
          href="mailto:manuelmoralesg2504@gmail.com"
          className="bg-contact-main hover:bg-contact-main/80 mb-4 flex w-full items-center justify-center gap-6 rounded-xl p-4 transition hover:scale-105"
        >
          <ContactIcon className="size-10 fill-white" />
          <p className="text-lg font-medium">manuelmoralesg2504@gmail.com</p>
        </a>

        <a
          target="_blank"
          href="https://github.com/ManuelMoralesG"
          className="flex items-center justify-start gap-4 rounded-xl bg-zinc-100 p-1 pl-4 transition hover:scale-105 hover:bg-gray-300"
        >
          <GithubIcon className="fill-contact-main size-10" />
          <p className="text-contact-main">ManuelMoralesG</p>
        </a>

        <a
          target="_blank"
          href="#"
          className="flex items-center justify-start gap-4 rounded-xl bg-zinc-100 p-1 pl-4 transition hover:scale-105 hover:bg-gray-300"
        >
          <LinkedInIcon className="stroke-contact-main size-10" />
          <p className="text-contact-main">José Manuel Morales</p>
        </a>

        <a
          target="_blank"
          href="https://twitter.com/@ChepeXD4"
          className="flex items-center justify-start gap-4 rounded-xl bg-zinc-100 p-1 pl-4 transition hover:scale-105 hover:bg-gray-300"
        >
          <TwitterIcon className="fill-contact-main size-10" />
          <p className="text-contact-main">@ChepeXD4</p>
        </a>
      </section>
    </div>
  );
}
