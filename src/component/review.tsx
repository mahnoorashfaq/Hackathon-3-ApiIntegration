import { IoStar } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

interface Ireview{
    title: string,
    description: string
  }
  const review:Ireview[]=[
    {
      title :"Sarah M.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      title :"Alex K.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      title :"James L.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    }
  ]
  export default function Review() {
    return (
    <div className="p-3 flex-col flex w-full h-fit  justify-between items-center">
                   <h1 className="text-xl  sm:text-2xl lg:text-3xl xl:text-4xl pb-4 font-extrabold text-center ">OUR HAPPY CUSTOMERS</h1> 
                   <div className=" flex-wrap flex justify-center gap-4">        
                      {
                           review.map((data1)=>{
                             return(
                              <div className="w-[280px] md:w-[300px]  xl:w-[400px] h-fit  p-5 border-2	 border-gray-200	rounded-3xl">
                                   <p className="flex text-yellow-500 pb-1"><IoStar /><IoStar /><IoStar /><IoStar /></p>
                                   <p className="font-bold flex text-base md:text-lg pb-1">{data1.title}&nbsp;<span className="bg-green-700 text-white h-5 w-5 rounded-full flex justify-center items-center"><TiTick />  </span></p>
                                   <p className="text-xs md:text-sm  text-gray-400">{data1.description}</p>
    
                              </div>
                             )
                           }
                         )
                         }
                         </div>
                       </div>
    );
  }
  