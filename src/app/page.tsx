import BrandsName from "@/component/brandsname";
import NewProduct from "@/component/newproduct";
import Review from "@/component/review";
import SellingProduct from "@/component/sellingproduct";
import Style from "@/component/style";
import Link from "next/link";


export default function Home() {
    return (
      <>
      {/* Hero Section */}
<section className="hero-section flex-wrap flex justify-center items-center md:gap-5 lg:gap-14 xl:gap-20 2xl:gap-32">
<div className="hero-des p-3 w-[320px] md:w-[370px] lg:w-[440px] xl:w-[500px] 2xl:w-[520px]  h-fit">
 <h1 className="leading-[27px] text-3xl md:text-[35px] lg:md:text-[40px] xl:md:text-[45px] 2xl:md:text-[50px] 2xl:leading-[40px] xl:leading-[38px] lg:leading-[35px] md:leading-[30px] ">FIND CLOTHES <br />
  THATS MATCHES  <br />
  YOUR STYLE</h1>
  <p className="text-[9px] md:text-[10px] lg:text-[11px]  xl:text-[12px] pt-3">Browse Through our diverse range of meticulously crafted garments, designed
  to bring out you individuality and cater to ypur sense and style.</p>
  <button className="w-full rounded-full bg-black text-white h-8 text-[10px] md:text-[12px]  mt-2 md:w-32"><Link  href="/casual">Shop Now</Link></button>
  <div className="flex-col flex lg:flex-row items-center lg:mt-5">
  <div className="hero-review flex justify-center items  gap-x-5 mt-4">
<div><h4 className="text-black text-[35px] font-bold">200+</h4><p className="text-[12px] text-black">International Brands</p></div> <hr  className="h-[70px] w-[1px] bg-gray-300"/>
<div><h4 className="text-black text-[35px] font-bold">2000+</h4><p className="text-[12px] text-black">High-Quality Products</p></div>
</div>
<hr  className="hidden lg:block h-[70px] w-[2px] bg-gray-300 lg:ml-4 lg:mr-3"/>
<div className=""><h4 className="text-black text-[35px] font-bold text-center pt-3">30000+</h4><p className="text-[12px] text-black text-center">Happy Customers</p></div>
</div></div>

<div className="w-[300px] md:w-[370px] lg:w-[440px]  flex items-center">
  <div className="heroimg1 w-[300px] h-[300px] md:w-[340px] md:h-[330px]  lg:h-[380px] xl:h-[420px] 2xl:w-[380px] 2xl:h-[480px] ">
<div className="heroimg2 w-[36px] h-[36px] relative	top-24 left-5"></div>
<div className="heroimg3 w-[56px] h-[56px] relative left-60 2xl:left-[300px] "></div>
</div></div>
  </section>
<BrandsName />
<NewProduct />
<hr />
<SellingProduct />
<Style />
<Review />
          </>
    );
  }