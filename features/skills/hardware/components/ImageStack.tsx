"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const hardwareInfo = [
  { image: "/hardware/newpc-1.jpg", text: "My first ever self-built PC" },
  { image: "/hardware/newpc-2.jpg", text: "Swapped GPUs" },
  { image: "/hardware/oldpc-3.jpg", text: "My first PC (pre-built)" },
  { image: "/hardware/oldpc-1.jpg", text: "My first PC dissassembled" },
  { image: "/hardware/oldpc-2.jpg", text: "My first PC reassembled" },
  { image: "/hardware/repair-1.jpg", text: "One of my first commissioned repairs" },
  { image: "/hardware/repair-2.jpg", text: "Another repair" },
  { image: "/hardware/htpc-2.jpg", text: "Old PC from marketplace repurposed into a HTPC. Upgraded with a PCIe WiFi card and a 6500xt low profile GPU" },
  { image: "/hardware/htpc-1.jpg", text: "For the PCIe BT to work, I had to 'sacrifice' some of the USB ports to connect the card to the only USB 3.0 header" },
];

type SwipeState = {
  direction: "forward" | "backward";
  index: number;
} | null;

export default function ImageStack() {
  const [order, setOrder] = useState(() => hardwareInfo.map((_, i) => i));
  const [animating, setAnimating] = useState(false);
  const [swipe, setSwipe] = useState<SwipeState>(null);

  const finishAnimation = useCallback(() => {
    setAnimating(false);
    setSwipe(null);
  }, []);

  const cycle = useCallback(() => {
    if (animating || order.length <= 1) return;
    const leavingIndex = order[0];
    setAnimating(true);
    setSwipe({ direction: "forward", index: leavingIndex });

    setOrder((prev) => {
      const next = [...prev];
      next.push(next.shift()!);
      return next;
    });

    setTimeout(finishAnimation, 400);
  }, [animating, order, finishAnimation]);

  const cycleBackward = useCallback(() => {
    if (animating || order.length <= 1) return;
    const enteringIndex = order[order.length - 1];
    setAnimating(true);
    setSwipe({ direction: "backward", index: enteringIndex });

    setOrder((prev) => {
      const next = [...prev];
      next.unshift(next.pop()!);
      return next;
    });

    setTimeout(finishAnimation, 400);
  }, [animating, order, finishAnimation]);

  const rotations = [-6, -2, 3, 6, 0];

  return (
    <div className="mx-auto mt-12 w-full max-w-xl">
      <style>{`
        @keyframes swipeOut {
          0%   { transform: translateX(0) rotate(0deg); opacity: 1; }
          100% { transform: translateX(-40%) rotate(-12deg); opacity: 0; }
        }
        @keyframes swipeIn {
          0%   { transform: translateX(40%) rotate(calc(var(--sr, 0deg) + 12deg)); opacity: 0.3; }
          100% { transform: translateX(0) rotate(var(--sr, 0deg)); opacity: 1; }
        }
      `}</style>

      <div className="relative">
        <button
          type="button"
          onClick={cycle}
          className="relative block aspect-square w-full cursor-pointer"
          aria-label="Cycle through hardware images"
        >
          {order.map((imgIndex, stackPos) => {
            const isTop = stackPos === 0;
            const rotIdx = imgIndex % rotations.length;
            const rotation = rotations[rotIdx];
            const isEntering =
              swipe?.direction === "backward" && isTop && swipe.index === imgIndex;
            // Only load actual images for the top 4 cards + any entering card
            const shouldLoad = stackPos <= 3 || isEntering;

            return (
              <div
                key={`${imgIndex}-${stackPos}`}
                className="absolute inset-0 block"
                style={{
                  zIndex: order.length - stackPos,
                  transform: `rotate(${rotation}deg)`,
                  opacity: isTop ? 1 : 0.8,
                  scale: isTop ? "1" : "0.97",
                  ...(isEntering
                    ? ({
                        "--sr": `${rotation}deg`,
                        animation: "swipeIn 0.4s ease-out forwards",
                      } as React.CSSProperties)
                    : !swipe
                      ? { transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)" }
                      : undefined),
                }}
              >
                {shouldLoad ? (
                  <Image
                    src={hardwareInfo[imgIndex].image}
                    alt={`Hardware image ${imgIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 512px"
                    quality={75}
                    priority={isTop}
                    className="rounded-2xl border-6 border-stone-900 object-cover shadow-xl"
                  />
                ) : (
                  <div className="size-full rounded-2xl border-6 border-stone-900 bg-stone-800 shadow-xl" />
                )}
              </div>
            );
          })}
        </button>

        {/* Swipe-out overlay for forward direction */}
        {swipe?.direction === "forward" && (
          <div
            className="pointer-events-none absolute inset-0 z-50"
            style={{ animation: "swipeOut 0.4s ease-out forwards" }}
          >
            <Image
              src={hardwareInfo[swipe.index].image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 512px"
              quality={75}
              className="rounded-lg border-6 border-stone-900 object-cover shadow-xl"
            />
          </div>
        )}

        <Button
          variant="outline"
          size="icon"
          onClick={cycleBackward}
          className="absolute top-1/2 -left-20 size-10 -translate-y-1/2 rounded-full"
          aria-label="Previous image"
        >
          <ArrowLeft />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={cycle}
          className="absolute top-1/2 -right-20 size-10 -translate-y-1/2 rounded-full"
          aria-label="Next image"
        >
          <ArrowRight />
        </Button>
      </div>

      <p className="mt-6 line-clamp-2 min-h-14 text-center text-lg text-zinc-300">
        {hardwareInfo[order[0]].text}
      </p>
    </div>
  );
}
