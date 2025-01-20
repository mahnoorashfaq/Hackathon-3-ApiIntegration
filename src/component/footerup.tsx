export default function FooterUp(){
    return(
<section className="flex-wrap flex justify-center items-center w-full h-fit p-3 ">
    <div className="bg-black flex-wrap flex w-auto p-5 md:p-8 lg:p-9 xl:p-11 justify-center items-center rounded-2xl gap-2 sm:gap-8 md:gap-12">
  <div><h2 className="font-extrabold text-xl leading-5 sm:text-2xl sm:leading-7 md:text-3xl lg:text-4xl md:leading-7 lg:leading-8 text-white">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h2></div>
  <div><input type="text" placeholder="Enter your email address" className="w-[220px] h-6 md:h-8 text-[10px] pl-3 mb-1 rounded-3xl"/><br /><input type="text" placeholder="Subscribe to Newsletter" className="w-[220px] h-6 md:h-8 text-[10px] pl-3 rounded-3xl outline-none	"/></div></div>
  </section>
    )
}