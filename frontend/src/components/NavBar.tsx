import { headerBarLinks, headerLinks } from "@/constants/constant";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="p-2 flex justify-end px-10 bg-[#DFE3E8]">
        {/* Change layout here to horizontal flex */}
        <div className="flex items-center gap-5">
          {headerBarLinks.map((bar, index) => (
            <div key={index} className="flex items-center gap-2 py-1">
              <p className="text-xs cursor-pointer font-inter">{bar.name}</p>
              {index < headerBarLinks.length - 1 && (
                <div className="bg-gray-400 border-r-blue-500 w-[1px] h-5 ml-2" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-10">
        <div className=" flex items-center justify-center gap-10">
          {headerLinks.map((item, index) => (
            <div className="flex items-center gap-2" key={item.name}>
              <h1 className="uppercase font-inter cursor-pointer text-sm">
                {item.name}
              </h1>
              {index < headerBarLinks.length - 1 && (
                <div className="bg-gray-400 border-r-blue-500 w-[1px] h-5 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
