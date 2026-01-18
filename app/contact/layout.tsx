"use client";

import BackIcon from "@/shared/components/images/back-icon";
import ContactIcon from "@/shared/components/images/contact-icon";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="bg-contact-background relative isolate w-full overflow-hidden">
      <ContactIcon className="absolute -bottom-25 z-0 size-170 fill-white/8" />
      <Button
        onClick={() => router.back()}
        className="bg-contact-main hover:bg-contact-main/80 absolute -top-9 -left-5 z-11 size-20 rotate-12 cursor-pointer hover:scale-105"
      >
        <BackIcon className="absolute right-2 bottom-1 size-10 -rotate-12" />
      </Button>
      {children}
    </div>
  );
}
