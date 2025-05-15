"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function page() {
  return (
    <div className="bg-[#FAF9F7] h-screen p-5">
      <div className="mx-auto max-w-8xl bg-white px-7 py-6">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <ChevronLeft height={12} width={12} strokeWidth={3} />
              <p className="text-sm font-archivo align-middle text-gray-700 uppercase">
                Back to shop
              </p>
              
            </div>
            <div className="relative">
                <Image src={"/product/Tank-top.jpg"} height={800} width={550} alt="Product Image" />
                <div className="absolute top-2 left-2 h-12 w-12 rounded-full px-1 py-3 text-center font-archivo tracking-wider font-semibold text-white bg-[#D45700]">Sale!</div>
            </div>
          </div>

          {/* right - info section */}
          <div>
            {/* title */}
            <h2></h2>
            {/* desc */}
            <p></p>
            {/* price */}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
