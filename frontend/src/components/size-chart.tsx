"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

const sizeData = [
  { size: "XXS", bust: "79-83", waist: "65-69", hip: "90-94" },
  { size: "XS", bust: "84-88", waist: "70-74", hip: "95-99" },
  { size: "S", bust: "89-93", waist: "75-79", hip: "100-104" },
  { size: "M", bust: "94-98", waist: "80-83", hip: "105-109" },
  { size: "L", bust: "99-103", waist: "84-89", hip: "110-114" },
  { size: "XL", bust: "104-109", waist: "90-95", hip: "115-120" },
  { size: "XXL", bust: "110-115", waist: "96-101", hip: "121-126" },
]

interface SizeChartProps {
  selectedSize: string | undefined
  setSelectedSize: (size: string) => void
}

export default function SizeChart({ selectedSize, setSelectedSize }: SizeChartProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start justify-center p-6">
      <div className="bg-white overflow-hidden w-full">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Bust</TableHead>
              <TableHead>Waist</TableHead>
              <TableHead>Hip</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizeData.map((item) => (
              <TableRow
                key={item.size}
                className={cn("hover:bg-gray-50 cursor-pointer", selectedSize === item.size && "bg-gray-50")}
                onClick={() => setSelectedSize(item.size)}
              >
                <TableCell className="py-3">
                  <div className="flex items-center justify-center">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                        selectedSize === item.size ? "border-[#d45700]" : "border-gray-300",
                      )}
                    >
                      {selectedSize === item.size && <div className="w-3 h-3 rounded-full bg-[#d45700]"></div>}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{item.size}</TableCell>
                <TableCell>
                  <span>{item.bust}</span>
                </TableCell>
                <TableCell>
                  <span>{item.waist}</span>
                </TableCell>
                <TableCell>
                  <span>{item.hip}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-6 bg-white rounded-lg w-full md:w-64">
        <h2 className="text-xl font-semibold mb-4">Your Selected Size</h2>
        {selectedSize ? (
          <div className="space-y-2">
            <p className="text-lg font-medium">
              Size: <span className="text-[#d45700] font-bold">{selectedSize}</span>
            </p>
            <p className="text-sm text-gray-600">
              Measurements (cm):
              <br />
              Bust: {sizeData.find((item) => item.size === selectedSize)?.bust}
              <br />
              Waist: {sizeData.find((item) => item.size === selectedSize)?.waist}
              <br />
              Hip: {sizeData.find((item) => item.size === selectedSize)?.hip}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">Select a size from the chart</p>
        )}
      </div>
    </div>
  )
}
