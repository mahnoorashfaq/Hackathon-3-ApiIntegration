import { SheetSide1 } from "@/component/filter";
import { PaginationDemo } from "@/component/pagination";
import { SliderDemo } from "@/component/slider";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

interface Icasual{
  title: string,
  id:number,
  img_url:string,
  price:string,
  discount:string,
  percent:string,
  rate:string
}
const casual:Icasual[]=[
  {
    title :"T-SHIRT WITH TAPE",
    id:1,
    img_url:"/image1.png",
    price: "$120",
    rate:"4.5/5",
    discount :"",
    percent:"",

  },
  {
    title :"SKINNY FIT JEANS",
    id:2,
    img_url:"/image2.png",
    price: "$240",
    rate:"3.5/5",
    discount :"$260",
    percent:"-20%",

  },
  {
    title :"CHECKERED SHIRT",
    id:3,
    img_url:"/image3.png",
    price: "$180",
    rate:"4.5/5",
    discount :"",
    percent:"",
  },
  {
    title :"SLEEVE STRIPED T-SHIRT",
    id:4,
    img_url:"/image4.png",
    price: "$130",
    rate:"4.5/5",
    discount :"$160",
    percent:"-30%",

  },
  {
    title :"VERTICAL STRIPED SHIRT",
    id:5,
    img_url:"/image5.png",
    price: "$212",
    rate:"5.0/5",
    discount :"$232",
    percent:"-20%",

  },
  {
    title :"COURAGE GRAPHIC T-SHIRT",
    id:6,
    img_url:"/image6.png",
    price: "$145",
    rate:"4.0/5",
    discount :"",
    percent:"-",

  },
  {
    title :"LOOSE FIT SHORTS",
    id:7,
    img_url:"/image7.png",
    price: "$80",
    rate:"3.0/5",
    discount :"",
    percent:"",
  },
  {
    title :"FADED SKINNY JEANS",
    id:8,
    img_url:"/image8.png",
    price: "$210",
    rate:"4.5/5",
    discount :"",
    percent:"",

  },
  {
    title :"VERTICAL STRIPED SHIRT",
    id:9,
    img_url:"/image5.png",
    price: "$212",
    rate:"5.0/5",
    discount :"$232",
    percent:"-20%",

  },
]

export default function Casual() {
    return (
      <>   <div className="w-full flex flex-col justify-center items-center p-3 lg:p-8  mt-8">
               <div className="flex justify-center gap-x-5">
                                            {/* left */}

             <div className="lg:w-[220px] xl:w-[260px] 2xl:w-[280px] h-[980px] bg-gray-100 hidden lg:block p-3 rounded-2xl">
            <div className="text-xl font-bold pb-2 pt-2"> <p>Filters</p></div>
            <hr className=""/>
  <div className="pl-2 pr-2 casual-height pt-4">
    <p className="flex items-center text-base text-gray-400 gap-28 ">T-shirts</p>
    <p className="flex items-center text-base text-gray-400 gap-28">Shorts</p>
    <p className="flex items-center text-base text-gray-400 gap-28">Shirts</p>
    <p className="flex items-center text-base text-gray-400 gap-28">Hoodie</p>
    <p className="flex items-center text-base text-gray-400 gap-28">Jeans</p>
  </div><br />
  <hr />
  <br />
  <p className="flex items-center text-xl font-bold gap-28  pb-2">Price</p>
<div className="w-full text-white h-2 bg-black rounded-full"><SliderDemo /></div><br />
<hr />
<br />
    <p className="flex items-center text-xl font-bold gap-28 pb-3">Color</p>
     <div className="flex flex-wrap gap-3 w-52">
      <div className="rounded-full w-7 h-7 bg-lime-600 border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-red-700 border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-yellow-500 border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-orange-600 border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-blue-400 border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-blue-800 border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-purple-600 border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-pink-600 v"></div>
      <div  className="rounded-full w-7 h-7 bg-white border border-black"></div>
      <div  className="rounded-full w-7 h-7 bg-black border border-black"></div>
     </div><br />
     <hr className="w-full"/><br />
     <p className="text-xl font-bold pb-3">Size</p>
      <div className="grid grid-cols-2 gap-y-2 pt-3 pb-5 w-44 ">
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">XX-Small</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">X-Small</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">Small</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">Medium</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">Large</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">x-Large</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">XX-Large</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">3X-Large</div>
        <div className="w-[80px] h-7 text-sm flex items-center justify-center bg-gray-300 text-gray-500 rounded-full text-center">4X-Large</div>
      </div>
     <hr className="w-full"/><br />
     <p className="flex items-center text-xl font-bold gap-28 pb-3">Style</p>
     <div className="pl-2 pr-2  ">
    <p className="flex items-center text-base text-gray-400 gap-28 ">Casuals</p>
    <p className="flex items-center text-base text-gray-400 gap-28">Formals</p>
    <p className="flex items-center text-base text-gray-400 gap-28">Party</p>
    <p className="flex items-center text-base text-gray-400 gap-28">Gym</p>
  </div>
  <button className="h-9 bg-black text-white w-full text-xs rounded-2xl	mt-7">Apply Filter</button>

             </div>
                            {/* Right */}
<div className="ml-1 mr-1 lg:mr-0 w-full lg:w-[750px] xl:w-[850px]  h-fit ">
<div className="flex justify-evenly sm:justify-between lg:pl-3 lg:pr-3"><p className="text-xl font-bold sm:text-2xl md:text-3xl 2xl:text-4xl">Casual</p><p className="flex text-[11px] text-gray-400 items-center  sm:text-[14px]">Showing 1-10 of 100 Products&nbsp;&nbsp;<span className="hidden sm:block">Sort by: Most Popular</span>&nbsp;&nbsp;<span className="text-[10px] block lg:hidden text-black"><SheetSide1 /></span></p></div>
               <div className="flex-wrap flex justify-center items-center gap-4 xl:gap-x-8  pt-3">        
                  {
                       casual.map((data)=>{
                         return(
                          <div key={data.id}>
                          <Link href={`/casualproduct/${data.id}`}> <div>  <img src={data.img_url} alt={data.title} className="w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[236px] md:h-[236px] xl:w-[260px] xl:h-[250px] rounded-2xl " ></img></div></Link>
                          <Link href={`/casualproduct/${data.id}`}> <p className="text-sm md:text-base font-bold pt-1">{data.title}</p></Link>
                             <p className="flex text-sm"><span className="text-yellow-500 flex items-center"><IoStar /><IoStar /><IoStar /><IoStar />&nbsp;&nbsp;</span> {data.rate}</p>
                             <p className="text-base md:text-xl font-bold">{data.price}&nbsp;&nbsp;<span className="line-through text-gray-500">{data.discount}</span>&nbsp;&nbsp;<span className="text-red-700">{data.percent}</span></p>
                           </div>
                         )
                       }
                     )
                     }
                     </div>
                     <div className="mt-6"><PaginationDemo  /></div>
                   </div>
                   </div>
                   </div>
                   </>
    );
  }