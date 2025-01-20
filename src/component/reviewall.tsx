import { IoStar } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

interface IReviewAll{
    title: string,
    description: string,
    date:string,
  }
  const Reviewall:IReviewAll[]=[
    {
      title :"Sarah M.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
      ,date: "Posted on August 14, 2023"
    },
    {
      title :"Alex K.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
      ,date: "Posted on August 14, 2023"

    },
    {
      title :"James L.",
      description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
      ,date: "Posted on August 14, 2023"
    },
    {
        title :"Ethan R.",
        description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        ,date: "Posted on August 14, 2023"
      },
      {
        title :"Olivia P.",
        description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        ,date: "Posted on August 14, 2023"
      },
      {
        title :"Liam K.",
        description: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        ,date: "Posted on August 14, 2023"
      }
  ]
  export default function ReviewAll() {
    return (
    <div className="p-3 flex-col flex w-full h-fit  justify-between items-center">
                   <h1 className="text-xl  sm:text-2xl lg:text-3xl xl:text-4xl pb-4 font-extrabold text-center ">All Reviews</h1> 
                   <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4">        
                      {
                           Reviewall.map((data1)=>{
                             return(
                              <div className="w-[280px] md:w-[360px]  lg:w-[500px] h-fit  p-5 border-2	 border-gray-200	rounded-3xl">
                                   <p className="flex text-yellow-500 pb-1"><IoStar /><IoStar /><IoStar /><IoStar /></p>
                                   <p className="font-bold flex text-base md:text-lg pb-1">{data1.title}&nbsp;<span className="bg-green-700 text-white h-5 w-5 rounded-full flex justify-center items-center"><TiTick />  </span></p>
                                   <p className="text-xs md:text-sm  text-gray-400">{data1.description}</p>
                                   <p className="text-xs md:text-sm  text-gray-400 pt-3">{data1.date}</p>
                              </div>
                             )
                           }
                         )
                         }
                         </div>
                         <button className="text-[11px] w-40 h-8 border border-gray-300 rounded-full mt-4">Load More Reviews</button>
                       </div>
    );
  }
  