import HardwareCarousel from "../../../features/skills/hardware/components/HardwareCarousel";

export default function HardwarePage() {
  return (
    <div>
      <div className="font-roboto-mono relative z-10 mx-auto flex min-h-screen w-5/6 flex-col items-center justify-center">
        <h1 className="font-konkhmer mx-auto mb-2 w-full text-left text-6xl font-bold text-zinc-100">
          Hardware Maintenance
        </h1>

        <p className="mb-4 ml-2 w-full text-left">
          I have plenty of experience in this field, from cleaning to swapping
          out components to building entire systems from scratch.
        </p>

        <HardwareCarousel />
      </div>
    </div>
  );
}
