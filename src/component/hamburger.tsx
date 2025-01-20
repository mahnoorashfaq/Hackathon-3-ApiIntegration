"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import { NavigationMenuDemo } from "./shopdropdown"

const SHEET_SIDES = ["left"] as const
type SheetSide = (typeof SHEET_SIDES)[number]
export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button><RxHamburgerMenu /></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>SHOP.CO</SheetTitle>
            </SheetHeader>
            <div className="flex-col text-sm md:text-xs lg:text-base">
                    <li ><Link href="/" className=""> <NavigationMenuDemo /></Link></li>
                    <li><Link href="/">On Sale</Link></li>
                    <li><Link href="/">New Arrivals</Link></li>
                    <li><Link href="/">Brands</Link></li>
                </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
