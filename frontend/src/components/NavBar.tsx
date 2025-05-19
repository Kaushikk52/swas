"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/constants/constant";
import { PiAsteriskThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";

// style imports
import { buttonStyle, navLinkStyle } from "@/constants/StyleConstants";

export default function NavBar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      {/* Mobile Nav */}
      <div className="flex items-center justify-between px-6 py-4 w-full lg:hidden bg-[#FFFFFF]">
        {/* Logo */}
        <div className="cursor-pointer">
          <Image src="/logo.svg" alt="logo" height={40} width={100} />
        </div>

        {/* Menu Toggle */}
        <button
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="text-sm px-4 py-2 transition duration-300"
        >
          {openMobileMenu ? (
            <IoMdClose size={24} />
          ) : (
            <RxHamburgerMenu size={24} />
          )}
        </button>
        <div className={`hidden md:block lg:hidden`}>
          <div className={`${buttonStyle}`}>
            <PiAsteriskThin size={20} />
            <span className="font-bold">Join</span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`block lg:hidden bg-[#F2E9E3] px-6 transition-all duration-300 ease-in-out ${
          openMobileMenu
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 items-start">
          {navLinks.map((nav) => (
            <h1
              key={nav.name}
              className="text-sm font-medium text-gray-700 flex items-center gap-1"
            >
              {nav.name}
              {nav.isDropDown && <IoMdArrowDropdown size={16} />}
            </h1>
          ))}
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center justify-between bg-transparent px-6 py-4 w-full">
        {/* Logo */}
        <div className="cursor-pointer">
          <Image src="/logo.svg" alt="logo" height={40} width={100} />
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          {navLinks.map((nav) => (
            <h1
              key={nav.name}
              className={`flex items-center gap-1 ${navLinkStyle}`}
            >
              {nav.name}
              {nav.isDropDown && <IoMdArrowDropdown size={18} />}
            </h1>
          ))}
        </div>

        {/* Join Button */}
        <div className={`flex items-center gap-2 ${buttonStyle}`}>
          <PiAsteriskThin size={20} />
          <span className="font-bold">Join</span>
        </div>
      </div>
    </div>
  );
}
