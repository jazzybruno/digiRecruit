import hired from "../images/hiredImage.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AssuranceComponent = () => {
    useEffect(()=>{
        AOS.init({
          duration: 750,
        });
      } , [])
    return ( 
        <div className="flex flex-row justify-center items-center">
            <div data-aos="fade-up" className="w-[50%] h-[100%] flex flex-col items-center justify-center space-y-10">
               <div className=" w-[100%] flex flex-col items-center justify-center space-y-5">
               <h1 className="w-[70%] text-[3rem] font-extrabold">Best Secure Place to get connected with your dreams</h1>
                <p className="w-[70%]">This is the best place to  get started with your dreams as you will get your job dream on this site and also get connection to outer companies</p>
               </div>
                <div className=" w-[73%] flex flex-row items-start ">
                <a href="#" className="py-3 rounded-md px-5 font-bold bg-sky-700 text-white border-1 border-white shadow-sm shadow-customTeal">Get Started</a>
                </div>
            </div>
            <div data-aos="zoom-in" className=" h-[100vh] w-[50%] flex flex-row justify-center items-center">
                <div className=" shadow-sm rounded-b-md shadow-customTeal h-[60%] w-[95%] border-2 border-customTeal rounded-t-md overflow-hidden">
                    <img className=" w-full h-full object-cover" src={hired} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default AssuranceComponent;