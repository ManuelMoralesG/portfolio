import ContactIcon from "@/shared/components/images/contact-icon";
import GithubIcon from "@/shared/components/images/github-icon";
import LinkedInIcon from "@/shared/components/images/linkedin-icon";
import TwitterIcon from "@/shared/components/images/twitter-icon";

export default function ContactPage() {
  return (
    <div className="font-roboto-mono mx-auto w-fit">
      <h1 className="font-konkhmer mx-auto text-center text-4xl font-bold text-zinc-100">
        Contact me
      </h1>

      <section className="text-center">
        <p>Want to contact me?</p>
        <p>Here&apos;s my contact information and social media links</p>
      </section>

      <section>
        <a href="mailto:manuelmoralesg2504@gmail.com">
          <div className="flex items-center justify-center">
            <ContactIcon />
            <p>manuelmoralesg2504@gmail.com</p>
          </div>
        </a>

        <a target="_blank" href="#">
          <div className="flex items-center justify-start">
            <LinkedInIcon />
            <p>José Manuel Morales</p>
          </div>
        </a>

        <a target="_blank" href="https://github.com/ManuelMoralesG">
          <div className="flex items-center justify-start">
            <GithubIcon />
            <p>ManuelMoralesG</p>
          </div>
        </a>

        <a target="_blank" href="https://twitter.com/@ChepeXD4">
          <div className="flex items-center justify-start">
            <TwitterIcon />
            <p>@ChepeXD4</p>
          </div>
        </a>
      </section>
    </div>
  );
}
