"use client"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { NavigationMenuDemo } from "./shopdropdown";
import { SheetSide } from "./hamburger";
export default function Header(){
    return(
        <section>
            {/* Header Top */}
            <div className="h-6 bg-black text-white flex justify-center items-center text-[10px] md:text-[12px] md:h-7 lg:text-[13px] lg:h-8  xl:text-[14px] xl:h-9">
                <p>Sign up and get 20% off to your first order. Sign Up Now</p>
            </div>
            {/* Header */}
            <div className="flex h-16 w-full p-2 md:p-5 justify-between md:justify-evenly items-center">
            <div className="flex items-center gap-x-2 md:gap-0">
            <div className="block md:hidden"><SheetSide /></div>
                    <p className=" text-lg md:text-xl lg:text-2xl xl:text-3xl font-[900]"> <Link href="/">SHOP.CO</Link></p>
                </div>
                <div className=" text-sm md:text-xs xl:text-[15px] hidden md:block ">
                    <ul className="flex items-center  gap-5">
                    <li ><Link href="/" className=""> <NavigationMenuDemo /></Link></li>
                    <li><Link href="#sell">On Sale</Link></li>
                    <li><Link href="casual">New Arrivals</Link></li>
                    <li><Link href="casual">Brands</Link></li>
                    </ul>
                </div>
{/* seacrch bar */}
                <div className=" w-[550px] h-9  rounded-3xl pl-3 hidden lg:block lg:w-[400px] bg-gray-200" >
                    <div className="flex items-center gap-x-2"><Link href="/"><CiSearch className="text-lg"/> </Link>
                    <input type="text" placeholder="Search for products..." className=" w-[500px] lg:w-[350px] h-9 text-xs p-2 outline-none	bg-gray-200	" />  
                </div></div>
                {/* icons */}
                <div className="flex gap-x-2 items-center text-lg md:text-xl xl:text-2xl">
                <Link href="/cart"><FiShoppingCart /></Link>
               <Link href="/"><VscAccount /></Link> 
               </div>
                </div>
        </section>
    )
}