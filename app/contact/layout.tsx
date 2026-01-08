import BackIcon from "@/shared/components/images/back-icon";
import { Button } from "@/shared/components/ui/button";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-contact-background w-full">
      <Button className="bg-contact-main hover:bg-contact-main/90 absolute -top-10 -left-5 size-20 rotate-12 hover:scale-105">
        <BackIcon className="absolute right-2 bottom-1 size-10 -rotate-12" />
      </Button>
      {children}
    </div>
  );
}
