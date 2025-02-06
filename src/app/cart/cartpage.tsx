import { AiFillDelete } from "react-icons/ai";
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus } from "lucide-react";
import { addition, delItem, subraction } from "../Redux/features/cartSlice";
import { Cart } from "../../../types/page";

function Cartpage() {
    const cartItem:Cart[] = useSelector((state:any)=>state.cart)
    const dispatch = useDispatch();
  return (
    <div>
      {
        cartItem.length >= 1 && 
        cartItem.map((item:any,i:any)=>{
            return(
                <div key={i} className="flex  lg:w-[650px] p-4 rounded-[16px] border  justify-between">
                    <div className="flex">
                    <Image src={item.img_url} alt={item.title} width={100} height={100} ></Image>
                    <div className="flex flex-col ml-3">
                        {/* <span>${items.price}</span> */}
                        <p className="font-bold" key={i}>{item.title}</p>
                        <p className="font-bold" key={i}>{item.price}</p>
                        <p className="font-bold" key={i}>{item.rate}</p>

                    </div>
                    </div>
                    <div className="relative">
                         {/* btn */}
                      <button  onClick={()=>dispatch(delItem(item.uuid))}><AiFillDelete className="text-red-500 cursor-pointer absolute right-2 top-0"/></button>
                     {/* INcreament decreament */}
                     <div className='flex justify-start items-center pt-10 '>
                     <button 
                     onClick={()=>dispatch(subraction(item))}
                     className='w-10'><Minus/></button>
                     <span className='w-4'>{item.qty}</span>
                     <button
                       onClick={()=>dispatch(addition(item))}
                     className='w-10'><Plus/></button>
                     </div>
                    </div>

                </div>
            )
        })
      }
    </div>
  )
}

export default Cartpage