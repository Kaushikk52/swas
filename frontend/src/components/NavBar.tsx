import Image from "next/image";
import { navLinks } from "@/constants/constant";
import { PiAsteriskThin } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

// style impoerts
import { buttonStyle } from "@/constants/StyleConstants";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-transparent px-5 py-4">
      {/* Logo */}
      <div>
        <Image src={"/logo.svg"} alt="logo" height={100} width={100} />
      </div>
      {/* nav links */}
      <div className="flex items-center space-x-4">
        {navLinks.map((nav) => (
          <h1 key={nav.name} className="flex items-center gap-2">
            {nav.name}{" "}
            <span>{nav.isDropDown && <IoMdArrowDropdown size={20} />}</span>
          </h1>
        ))}
      </div>
      {/* join btn */}
      <div className={`${buttonStyle}`}>
        <PiAsteriskThin size={20} />
        <span className="font-bold">Join</span>
      </div>
    </div>
  );
}
