import { FaqAccordion } from "@/components/FaqAccordion";
import HeroComponent from "@/components/HeroComponent";
import { categoriesData } from "@/constants/constant";
import Image from "next/image";

export default function home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full">
        <HeroComponent />
      </div>
      <div className="flex flex-col gap-10 px-10 md:px-20 py-16 h-[100vh]">
        <h1 className="text-4xl text-center font-inter">
          Featured Collections
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesData.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] md:h-[700px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.img}
                alt={`${item.name}-image`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-10 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-xl font-semibold tracking-wide mb-4">
                  {item.name}
                </h2>
                <button className="bg-white rounded text-black px-6 py-2 text-sm font-medium uppercase hover:bg-black duration-200 hover:text-white transition cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 w-[50%] mx-auto mb-10">
        <FaqAccordion />
      </div>
    </div>
  );
}
