import "../assets/Othercss.css"
import CustomerFeedback from "./CustomerFeedback";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeedBackComponent = () => {

   useEffect(()=>{
      AOS.init({
        duration: 750,
      });
    } , [])

    return ( 
        <div id="feebBack" className="h-[100vh] w-[100%] flex justify-center items-center flex-col space-y-10 ">
         <div  data-aos="fade-up" className="w-[100%] flex flex-col items-center justify-center">
         <h1 className="text-black text-xl font-bold">Client's Stories</h1>
         <h1>What Our <span className="text-black font-extrabold">Beloved Customers</span> Says</h1>
         </div>
         <div className="w-[100%] flex justify-center items-center flex-row gap-10">
            <CustomerFeedback />
            <CustomerFeedback />
            <CustomerFeedback />
         </div>
        </div>
     );
}
 
export default FeedBackComponent;