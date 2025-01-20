export default function Style(){
    return(
        <section className="w-full h-fit p-5  flex flex-col justify-center items-center">
        <div className="w-fit h-fit p-5  bg-gray-100  rounded-2xl flex flex-col justify-center items-center md:w-11/12 xl:w-[82%] 2xl:w-4/5">
      <h1 className="text-xl pb-4 font-extrabold text-center sm:text-2xl md:text-3xl lg:text-4xl">BROWSE BY DRESS STYLE</h1>
      <div className="flex-wrap md:flex justify-center gap-x-3 gap-y-1">
           <div className="style-box1 style h-[130px] w-[250px]  rounded-3xl sm:h-[140px] sm:w-[300px] mb-2 md:w-[200px] lg:w-[300px] lg:h-[180px] xl:w-[400px] xl:h-[230px] 2xl:w-[450px] 2xl:h-[250px] p-6 font-bold text-base lg:text-lg">Casual</div>
           <div className="style-box2 h-[130px] w-[250px] rounded-3xl sm:h-[140px] sm:w-[300px] mb-2 md:w-[350px] lg:w-[450px] lg:h-[180px] xl:w-[550px] xl:h-[230px] 2xl:w-[650px] 2xl:h-[250px] p-6 font-bold text-base lg:text-lg">Formal</div>
            <div className="style-box3 h-[130px] w-[250px] rounded-3xl sm:h-[140px] sm:w-[300px] mb-2 md:w-[350px] lg:w-[450px] lg:h-[180px] xl:w-[550px] xl:h-[230px] 2xl:w-[650px] 2xl:h-[250px] p-6 font-bold text-base lg:text-lg">Party</div>
           <div className="style-box4 h-[130px] w-[250px]  rounded-3xl sm:h-[140px] sm:w-[300px] md:w-[200px] lg:w-[300px] lg:h-[180px] xl:w-[400px] xl:h-[230px] 2xl:w-[450px] 2xl:h-[250px] p-6 font-bold text-base lg:text-lg">Gym</div>
   </div>

        </div>
    </section>
    )
}