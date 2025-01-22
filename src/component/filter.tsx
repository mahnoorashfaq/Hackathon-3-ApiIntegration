"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SliderDemo } from "./slider"
import { CiFilter } from "react-icons/ci"

const SHEET_SIDES = ["left"] as const
type SheetSide1 = (typeof SHEET_SIDES)[number]
export function SheetSide1() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button><CiFilter /></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Filter</SheetTitle>
            </SheetHeader>
            <div>
                        <hr />
              <div className="pl-2 pr-2 casual-height pt-4 ">
                <p className="flex items-center text-sm text-gray-400 gap-28 ">T-shirts    </p>
                <p className="flex items-center text-sm text-gray-400 gap-28">Shorts     </p>
                <p className="flex items-center text-sm text-gray-400 gap-28">Shirts     </p>
                <p className="flex items-center text-sm text-gray-400 gap-28">Hoodie    </p>
                <p className="flex items-center text-sm text-gray-400 gap-28">Jeans    </p>
              </div><br />
              <hr />
              <p className="flex items-center text-xl font-bold gap-52  pb-4 pt-3">Price</p>
            <div className="w-full text-white h-2 bg-black rounded-full"><SliderDemo /></div><br />
           <hr />
                <p className="flex items-center text-xl font-bold gap-52 pt-3 pb-3">Color </p>
                 <div className="flex flex-wrap gap-3 w-56 pb-4">
                  <div className="rounded-full w-6 h-6 bg-lime-600 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-red-700 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-yellow-500 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-orange-600 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-blue-400 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-blue-800 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-purple-600 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-pink-600 border-[1px] border-black"></div>
                  <div  className="rounded-full w-6 h-6 bg-white border-[1px] border-black "></div>
                  <div  className="rounded-full w-6 h-6 bg-black border-[1px] border-black"></div>
                 </div>
                 <hr className="w-full "/>
                 <p className="text-xl font-bold pt-3">Size</p>
                  <div className="grid grid-cols-2 pt-3 pb-2 w-44 gap-2 ">
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">XX-Small</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">X-Small</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">Small</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">Medium</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">Large</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">x-Large</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">XX-Large</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">3X-Large</div>
                    <div className="w-[75px] h-6 text-xs flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">4X-Large</div>
                  </div>
                 <hr className="w-full"/>
                 <p className="flex items-center text-xl font-bold gap-28 pb-4 pt-2">Style </p>
                 <div className="pl-2 pr-2 ">
                <p className="flex items-center text-sm text-gray-400">Casuals    </p>
                <p className="flex items-center text-sm text-gray-400">Formals    </p>
                <p className="flex items-center text-sm text-gray-400 ">Party   </p>
                <p className="flex items-center text-sm text-gray-400 ">Gym    </p>
              </div>
              <button className="h-7 bg-black text-white w-full text-[11px] rounded-2xl	mt-7">Apply Filter</button>
                         </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
