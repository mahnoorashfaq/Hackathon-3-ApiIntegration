"use client"
import { BiMinus, BiPlus } from "react-icons/bi";
import { LiaStarSolid } from "react-icons/lia";
import Image from "next/image";
import { useParams } from "next/navigation"
import ReviewAll from "@/component/reviewall";
import LikeProduct from "@/component/likeproduct";

interface ILikeproduct{
  title: string,
  id:number,
  img_url:string,
  price:string,
  discount:string,
  percent:string,
  rate:string

}
const likeProduct:ILikeproduct[]=[
  {
    title :"Polo with Contrast Trims",
    id:1,
    img_url:"/image16.png",
    price: "$120",
    rate:"4.5/5",
    discount :"",
    percent:"",

  },
  {
    title :"Gradient Graphic T-shirt",
    id:2,
    img_url:"/image13.png",
    price: "$240",
    rate:"3.5/5",
    discount :"$260",
    percent:"-20%",

  },
  {
    title :"Polo with Tipping Details",
    id:3,
    img_url:"/image14.png",
    price: "$180",
    rate:"4.5/5",
    discount :"",
    percent:"",
  },
  {
    title :"Black Striped T-shirt",
    id:4,
    img_url:"/image15.png",
    price: "$130",
    rate:"4.5/5",
    discount :"$160",
    percent:"-30%",

  },
]
  
export default function NewProduct(){
  const params = useParams();
    const id = params.id
    const item = likeProduct.find((item)=> item.id === Number(id))
    if (!item){
      <h1>Product Not Find</h1>
    }
    return(
      <>
        <section className="flex-wrap flex gap-2 xl:gap-5 justify-center w-full h-fit p-3 md:p-2 lg:p-3 xl:p-8">
            {/* Left */}
           <div className="flex justify-evenly md:flex-col  items-center w-[340px] sm:w-[600px] h-auto xl:w-[152px] lg:h-[480px]  md:w-[100px] lg:w-[130px] order-2 md:order-1 ">   
           {item?.img_url && (<Image src={item?.img_url} alt="image" width={100} height={100} className="w-[110px] h-[90px] sm:h-[130px] sm:w-[170px] md:w-full md:h-[130px] lg:h-[150px]  rounded-2xl "></Image>)}
           {item?.img_url && (<Image src={item?.img_url} alt="image" width={100} height={100} className="w-[110px] h-[90px] sm:h-[130px] sm:w-[170px] md:w-full md:h-[130px] lg:h-[150px]  rounded-2xl  ml-1 xl:mt-4"></Image>)}
           {item?.img_url && (<Image src={item?.img_url} alt="image" width={100} height={100} className="w-[110px] h-[90px] sm:h-[130px] sm:w-[170px] md:w-full md:h-[130px] lg:h-[150px]  rounded-2xl ml-1 xl:mt-4"></Image>)}
         </div>
         <div  className="w-[340px] sm:w-[600px] xl:w-[444px] lg:h-[480px] md:w-[280px] lg:w-[350px] md:h-[400px]  order-1 md:order-2">{item?.img_url && (<Image src={item?.img_url} alt="image" width={350} height={350} className="w-full h-full  rounded-3xl"></Image>)} </div>
{/* Right */}
<div className="w-[340px] sm:w-[600px] h-[400px] md:w-[350px] lg:md:w-[500px] xl:w-[550px]  lg:h-[480px]  order-3 md:order-3">
<h3 className="text-2xl sm:text-3xl font-extrabold lg:text-4xl pt-1 pb-2 lg:pb-4">{item?.title}</h3>
<p className="flex items-center gap-x-1 text-yellow-400 text-[13px] sm:text-[16px] lg:text-[16px] pb-2"><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><span className="text-gray-500 text-[16px]">{item?.rate}</span></p>
<p className="font-semibold text-[18px] sm:text-[19px] lg:text-[20px] pb-2">{item?.price} &nbsp;&nbsp;<span className="line-through text-gray-400">{item?.discount}</span></p>
<p className="xl:w-62 text-[11px] sm:text-[13px] lg:text-[14px] pb-2 lg:pb-3 text-gray-400">This graphic t-shirt which is perfect for any occasion. Crafted from a soft 
    and breathable fabric, it offers superior comfort and style.</p>
    <hr className="pb-2 lg:pb-4"/>
    <p className="text-[11px] sm:text-[13px] lg:text-[14px] text-gray-400 pb-2 lg:pb-2" >Select Colors</p>
    <div className="flex gap-1 pb-3 lg:pb-4">
    <div className="w-6 h-6 xl:w-8 xl:h-8 bg-black rounded-full text-white text-xs flex items-center justify-center"></div>
    <div className="w-6 h-6 xl:w-8 xl:h-8 bg-yellow-400 rounded-full"></div>
    <div className="w-6 h-6 xl:w-8 xl:h-8 bg-green-500 rounded-full"></div>
    </div>
    <hr className="pb-3 lg:pb-4"/>
    <p className="text-[11px] sm:text-[13px] lg:text-[14px] pb-2 lg:pb-3 text-gray-400">Choose Size</p>
    <div className="flex gap-x-1 pb-3 lg:pb-4">
<div className="h-6 w-12  lg:w-16 lg:h-8  flex justify-center items-center text-[8px] sm:text-[9px] lg:text-[12px] rounded-full bg-gray-200 text-gray-400">Small </div>
<div className="h-6 w-12 lg:w-16 lg:h-8 flex justify-center items-center text-[8px] sm:text-[9px] lg:text-[12px] rounded-full bg-gray-200 text-gray-400">Medium </div>
<div className=" h-6 w-12 lg:w-16 lg:h-8 flex justify-center items-center text-[8px] sm:text-[9px]lg:text-[12px] rounded-full bg-black text-white">Large </div>
<div className="h-6 w-12 lg:w-16 lg:h-8 flex justify-center items-center text-[8px] sm:text-[9px] lg:text-[12px] rounded-full bg-gray-200 text-gray-400">X-Large </div>
    </div>
    <hr className="pb-3 lg:pb-4"/>
    <div className="flex gap-x-3 lg:gap-x-5 lg:pt-2 items-center">
    <div className="flex items-center text-[10px] sm:text-[13px] lg:text-[14px] justify-center pl-2 pr-2 gap-5 h-7 lg:h-10 bg-gray-200 lg:w-40 rounded-full " >
<div className="flex justify-between"><BiMinus /></div><div>1</div><div><BiPlus /></div>
</div>
<button className="text-[10px] sm:text-[13px] lg:text-[14px] h-8 lg:h-10 w-full rounded-full bg-black text-white">Add to Cart</button>
</div>
</div>
        </section>
        <ReviewAll />
         <LikeProduct />
        <br /></>
    )
}