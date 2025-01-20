import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

interface Isellproduct{
  title: string,
  id:number,
  img_url:string,
  price:string,
  discount:string,
  percent:string,
  rate:string

}
const sellProduct:Isellproduct[]=[
  {
    title :"VERTICAL STRIPED SHIRT",
    id:1,
    img_url:"/image5.png",
    price: "$212",
    rate:"5.0/5",
    discount :"$232",
    percent:"-20%",

  },
  {
    title :"COURAGE GRAPHIC T-SHIRT",
    id:2,
    img_url:"/image6.png",
    price: "$145",
    rate:"4.0/5",
    discount :"",
    percent:"-",

  },
  {
    title :"LOOSE FIT BERMUDA SHORTS",
    id:3,
    img_url:"/image7.png",
    price: "$80",
    rate:"3.0/5",
    discount :"",
    percent:"",
  },
  {
    title :"FADED SKINNY JEANS",
    id:4,
    img_url:"/image8.png",
    price: "$210",
    rate:"4.5/5",
    discount :"",
    percent:"",

  },
]

export default function SellingProduct() {
    return (
     <div className="p-5 flex-col flex w-full h-fit  justify-between items-center">
           <h1 className="text-xl  sm:text-2xl lg:text-3xl xl:text-4xl pb-3 font-extrabold ">TOP SELLING</h1> 
           <div className="md:mt-5  w-3/4 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-2 md:w-full   lg:grid-cols-4 lg:gap-x-3 xl:gap-x-0 2xl:w-3/4 justify-items-center">        
              {
                   sellProduct.map((data)=>{
                     return(
                      <div key={data.id}>
                    <Link href={`/sellingproduct/${data.id}`}> <Image src={data.img_url} alt={data.title} className="rounded-2xl w-[180px] h-100px] sm:w-[220px] sm:h-[200px] md:w-[250px] md:h-[220px] lg:w-[250px] lg:h-[230px] xl:lg:w-[270px] xl:h-[260px]" ></Image></Link> 
                    <Link href={`/sellingproduct/${data.id}`}>  <p className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] font-bold pt-1">{data.title}</p></Link> 
                         <p className="text-[11px] sm:text-[13px] md:text-[14px] xl:text-[15px] flex items-center"><span className="text-yellow-500 flex items-center"><IoStar /><IoStar /><IoStar /><IoStar />&nbsp;&nbsp;</span> {data.rate}</p>
                         <p className="text-[11px] sm:text-[13px] md:text-[14px] xl:text-[15px] font-bold">{data.price}&nbsp;&nbsp;<span className="line-through text-gray-500">{data.discount}</span>&nbsp;&nbsp;<span className="text-red-700">{data.percent}</span></p>
                       </div>
                     )
                   }
                 )
                 }
                 </div>
                 <Link href={"casual"}>     <button className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] w-20 h-7 md:w-24 md:h-8 lg:w-28 lg:h-9 bg-gray-200 rounded-2xl mt-8">View All</button></Link>
               </div>
    );
  }