import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

interface Iproduct{
  title: string,
  id:number,
  img_url:string,
  price:string,
  discount:string,
  percent:string,
  rate:string

}
const product:Iproduct[]=[
  {
    title :"T-SHIRT WITH TAPE DETAILS",
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
]

export default function NewProduct() {
    return (
    <div className="p-5 flex-col flex w-full h-fit  justify-between items-center md:mt-5 md:mb-5">
               <h1 className="text-2xl  sm:text-3xl lg:text-4xl xl:text-5xl pb-3 font-extrabold ">NEW ARRIVALS</h1> 
               <div className="md:mt-5  w-3/4 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-2 md:w-full   lg:grid-cols-4 lg:gap-x-3 xl:gap-x-0 2xl:w-3/4 justify-items-center">        
                  {
                       product.map((data)=>{
                         return(
                          <div key={data.id}>
                        <Link href={`/newproduct/${data.id}`}> <div>  <Image src={data.img_url} width={200} height={200}  alt={data.title} className="rounded-2xl w-[180px] h-100px] sm:w-[220px] sm:h-[200px] md:w-[250px] md:h-[220px] lg:w-[250px] lg:h-[230px] xl:lg:w-[270px] xl:h-[260px]" ></Image></div></Link>
                        <Link href={`/newproduct/${data.id}`}>  <p className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[15px] font-bold pt-1">{data.title}</p></Link>
                             <p className="text-[11px] sm:text-[13px] md:text-[14px] xl:text-[15px] flex items-center"><span className="text-yellow-500 flex items-center"><IoStar /><IoStar /><IoStar /><IoStar />&nbsp;&nbsp;</span> {data.rate}</p>
                             <p className="text-[11px] sm:text-[13px] md:text-[14px] xl:text-[15px] font-bold">{data.price}&nbsp;&nbsp;<span className="line-through text-gray-500">{data.discount}</span>&nbsp;&nbsp;<span className="text-red-700">{data.percent}</span></p>
                           </div>
                         )
                       }
                     )
                     }
                     </div>
                   <Link href={"casual"}>  <button className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] w-20 h-7 md:w-24 md:h-8 lg:w-28 lg:h-9 bg-gray-200 rounded-2xl mt-8">View All</button> </Link>
                   </div>
    );
  }
  
