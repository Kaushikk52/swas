"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Facebook, Twitter } from "lucide-react";
import { GrMail } from "react-icons/gr";
import { useParams } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import SizeChart from "@/components/size-chart";
import { cn } from "@/lib/utils";

import { buttonStyle, disabledButtonStyle } from "@/constants/StyleConstants";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  PiEnvelopeFill,
  PiMailboxFill,
  PiPinterestLogoFill,
} from "react-icons/pi";

export default function ProductPage() {
  const { product } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const tags = ["accessories", "fitness", "gym"];

  return (
    <div className="min-h-screen p-5 w-full mt-18">
      <div className="mx-auto max-w-8xl bg-white px-7 py-6">
        <div className="flex flex-col lg:flex-row gap-8 w-full xl:items-center xl:justify-center">
          {/* left - image section */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1 cursor-pointer">
              <ChevronLeft height={12} width={12} strokeWidth={3} />
              <p className="text-xs font-archivo align-middle text-gray-700 uppercase">
                Back to shop
              </p>
            </div>
            <div className="relative">
              <Image
                src={"/product/Tank-top.jpg"}
                height={800}
                width={600}
                alt="Product Image"
              />
              <div className="absolute top-2 left-2 h-12 w-12 rounded-full px-1 py-3 text-center font-archivo tracking-wider font-semibold text-white bg-[#D45700]">
                Sale!
              </div>
            </div>
          </div>

          {/* right - info section */}
          <ScrollArea className="h-[800px]">
            <div className="mt-10 pl-0 lg:pl-16 w-full lg:w-2xl">
              <h2 className="text-4xl lg:text-5xl/tight font-gotu text-[#344033]">
                Comfy Tank
              </h2>
              <p className="mt-4 text-wrap text-[#344033] font-archivo">
                Skin friendly, just like Swas (breath) the material is
                sustainable modal fabric. The cami with the inbuilt bra perfect
                for studio and outer wear. Crafted in super soft modal this
                piece is versatile and can be paired with athleisure or
                workmode!
              </p>
              <div className="text-[#344033] font-archivo mt-2">
                <p>Care Instructions : </p>
                <ul className="list-disc pl-5">
                  <li>Wash inside out with like colours</li>
                  <li>Gentle wash 30 degrees</li>
                  <li>Do not bleach</li>
                  <li>Dry inside out</li>
                  <li>Do not dry in direct sunlight</li>
                  <li>Avoid rough surfaces</li>
                  <li>Do not tumble dry</li>
                  <li>Do not iron</li>
                </ul>
              </div>
              <p className="text-[#344033] font-archivo mt-2">
                Fabric: 82% Micromodal, 18% Lyrca
              </p>
              {/* price */}
              <p className="mt-4 font-gotu font-medium text-[#344033] text-2xl">
                ₹ 16.99 – ₹ 32.00
              </p>

              <Separator
                orientation="horizontal"
                className="bg-slate-500 my-8"
              />

              <div className="mt-5 flex items-center gap-4">
                <p className="font-bold font-open-sans uppercase text-sm text-[#344033]">
                  Size
                </p>
                <Drawer>
                  <DrawerTrigger className="flex gap-1 align-bottom cursor-pointer">
                    <p className="font-bold font-open-sans uppercase text-xs text-[#344033] align-text-bottom">
                      Size Chart
                    </p>
                    <ChevronRight height={12} width={12} strokeWidth={3} />
                  </DrawerTrigger>
                  <DrawerContent className="bg-white border-gray-200 border-3 rounded-lg">
                    <ScrollArea className="h-[400px]">
                      <DrawerHeader>
                        <DrawerTitle className="text-2xl/tight font-gotu text-[#344033]">
                          Light Power Resistance Band
                        </DrawerTitle>
                        <DrawerDescription className="mt-4 font-gotu font-medium text-[#344033] text-md">
                          ₹ 16.99 – ₹ 32.00
                        </DrawerDescription>
                      </DrawerHeader>
                      <SizeChart
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                      />
                      <DrawerFooter>
                        <DrawerClose className="flex justify-center gap-2">
                          <Button variant="outline">Cancel</Button>
                          <Button className="bg-[#D45700] hover:bg-[#c14e00] text-white">
                            Add to Cart
                          </Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </ScrollArea>
                  </DrawerContent>
                </Drawer>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    className={cn(
                      "h-10 w-10 rounded-full px-0 py-0 font-medium text-center text-sm border",
                      selectedSize === size
                        ? "bg-[#D45700] text-white border-[#D45700] hover:bg-[#c14e00]"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-gray-100"
                    )}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>

              <div>
                <div className="flex flex-col mt-4 font-gotu font-medium text-[#344033] text-xl">
                  <div>
                    <span className="line-through text-gray-500">₹ 16.99</span>{" "}
                    ₹ 32.00
                  </div>
                  <span className="text-red-700 font-open-sans font-medium text-sm">
                    Out of stock
                  </span>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button variant={"outline"} className="px-5 py-6 rounded-3xl">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-10 border-0"
                    />
                  </Button>
                  <Button
                    className={`${
                      true ? buttonStyle : disabledButtonStyle
                    } px-8 py-6  rounded-3xl`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>

              <Separator
                orientation="horizontal"
                className="bg-slate-500 my-8"
              />

              <div>
                <ul>
                  <li className="font-semibold text-[#344033] font-archivo tracking-wider">
                    Sku: 056794
                  </li>
                  <li className="font-semibold text-[#344033] font-archivo tracking-wider">
                    Category:{" "}
                    <Link href={"/category/accessories"}>
                      <span className="font-light font-archivo capitalize">
                        accessories
                      </span>
                    </Link>
                  </li>
                  <li className="font-semibold text-[#344033] font-archivo tracking-wider">
                    Tags:{" "}
                    {tags.map((tag, index) => (
                      <Link key={tag} href={`/tags/${tag}`}>
                        <span className="font-light font-archivo capitalize">
                          {tag}
                          {index !== tags.length - 1 && ", "}
                        </span>
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>

              <Separator
                orientation="horizontal"
                className="bg-slate-500 my-8"
              />

              <div className="flex gap-4">
                <div className="h-10 w-10 bg-[#F2E9E3] rounded-full py-2.5 px-3">
                  <Facebook fill="black" height={20} width={20} />
                </div>
                <div className="h-10 w-10 bg-[#F2E9E3] rounded-full py-2.5 px-3">
                  <Twitter fill="black" height={20} width={20} />
                </div>
                <div className="h-10 w-10 bg-[#F2E9E3] rounded-full py-2 px-2">
                  <PiPinterestLogoFill size={25} />
                </div>
                <div className="h-10 w-10 bg-[#F2E9E3] rounded-full py-2 px-2.5">
                  <GrMail size={20} />
                </div>
              </div>

              <div className="flex flex-col gap-6 mt-15">
                <h2 className="text-2xl lg:text-3xl/tight font-gotu text-[#344033]">
                  Related products
                </h2>
                <div className="flex gap-8">
                  <div className="relative group overflow-hidden">
                    <Link href={"/shop/2"}>
                      <Image
                        src={"/product/Tank-top.jpg"}
                        height={400}
                        width={400}
                        alt="Product Image"
                      />
                    </Link>
                    <div className="absolute -bottom-14 bg-white w-full px-2 py-1 group-hover:bottom-0 transition-all duration-300 ease-in-out">
                      <h3 className="mt-4 font-gotu font-medium text-[#344033] text-lg">
                        Tank Top
                      </h3>
                      <p className="font-archivo font-semibold text-[#344033] text-sm tracking-wider">
                        ₹32.00
                      </p>
                      <Button
                        className={`${buttonStyle} mx-auto w-full mt-2 py-5`}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden">
                    <Link href={"/shop/3"}>
                      <Image
                        src={"/product/Tank-top.jpg"}
                        height={400}
                        width={400}
                        alt="Product Image"
                      />
                    </Link>
                    <div className="absolute -bottom-14 bg-white w-full px-2 py-1 group-hover:bottom-0 transition-all duration-300 ease-in-out">
                      <h3 className="mt-4 font-gotu font-medium text-[#344033] text-lg">
                        Tank Top
                      </h3>
                      <p className="font-archivo font-semibold text-[#344033] text-sm tracking-wider">
                        ₹32.00
                      </p>
                      <Button
                        className={`${buttonStyle} mx-auto w-full mt-2 py-5`}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
