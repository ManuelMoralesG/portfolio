"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

const hardwareInfo = [
  { image: "/hardware/newpc-1.jpg", text: "My first ever self-built PC" },
  { image: "/hardware/newpc-2.jpg", text: "GPU Collection" },
  { image: "/hardware/oldpc-3.jpg", text: "My first PC (pre-built)" },
  { image: "/hardware/oldpc-1.jpg", text: "My first PC dissassembled" },
  { image: "/hardware/oldpc-2.jpg", text: "My first PC reassembled" },
  {
    image: "/hardware/repair-1.jpg",
    text: "One of my first commissioned repairs",
  },
  { image: "/hardware/repair-2.jpg", text: "Another repair" },
  {
    image: "/hardware/htpc-2.jpg",
    text: "Old PC from marketplace repurposed into a HTPC. Upgraded with a PCIe WiFi card and a 6500xt low profile GPU",
  },
  {
    image: "/hardware/htpc-1.jpg",
    text: "For the PCIe BT to work, I had to 'sacrifice' some of the USB ports to connect the card to the only USB 3.0 header",
  },
];

const AUTOPLAY_INTERVAL = 3500;

export default function HardwareCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onPointerDown = useCallback(() => {
    setPaused(true);
  }, []);

  const onPointerUp = useCallback(() => {
    setPaused(false);
    setResetKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, onSelect, onPointerDown, onPointerUp]);

  // Autoplay: continuously scroll to the left
  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [emblaApi, resetKey, paused]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    setResetKey((k) => k + 1);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    setResetKey((k) => k + 1);
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <div className="mx-auto mt-12 w-full max-w-6xl">
      <div
        ref={emblaRef}
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
        }}
      >
        <div className="flex gap-3">
          {hardwareInfo.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={index}
                className="relative aspect-4/3 min-w-0 shrink-0 grow-0 basis-2/3"
              >
                <Image
                  src={item.image}
                  alt={item.text || `Hardware image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 66vw, 512px"
                  quality={100}
                  priority={index === 0}
                  className={cn(
                    "rounded-2xl object-cover shadow-xl transition-all duration-700",
                    isActive ? "opacity-100" : "opacity-60 blur-sm",
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-6 line-clamp-2 min-h-14 w-2xl text-center text-lg text-zinc-300">
        {hardwareInfo[selectedIndex].text}
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="size-10 rounded-full"
          aria-label="Previous image"
        >
          <ArrowLeft />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="size-10 rounded-full"
          aria-label="Next image"
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
