import { buttonStyle } from "@/constants/StyleConstants";
import Image from "next/image";
import { PiAsteriskThin } from "react-icons/pi";

export default function HeroComponent() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-img.webp" // use your uploaded image path here
        alt="hero background"
        fill
        quality={100}
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-10 top-40">
        <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-7xl font-light text-[#2c3e3e] leading-snug flex items-center custom-gap md:gap-24 lg:gap-28 xl:gap-36">
          <span className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            body
          </span>
          <span className="text-[#FFDFCD] text-6xl font-normal">&</span>
          <span className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            mind
          </span>
        </h1>

        <p className="text-xs text-[#FFDFCD] font-semibold opacity-90 w-[100px]">
          Connect to your inner flow.
        </p>

        <button className={buttonStyle}>
          <PiAsteriskThin size={18} />
          Join Our Classes
        </button>
      </div>
    </div>
  );
}
