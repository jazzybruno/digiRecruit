import hiring from '../images/hiringEdited.png'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StatisticsComponent = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  } , [])

    return ( 
       <div className="flex h-[100vh] flex-row justify-center items-center w-[100%] bg-[#f0fbfe]">
        {/* the image div  */}
                  <div data-aos="zoom-out" className="h-[100%] w-[50%] flex flex-row justify-center items-center">
                    <img src={hiring} alt="" />
                  </div>
        {/* the statistics div  */}
                  <div data-aos="fade-up" className="w-[50%] flex flex-col justify-center items-start p-20 space-y-14">
                    <div className="flex flex-col space-y-4">
                    <h1 className="text-black w-[80%] "><span className="text-customTeal">World's</span> best success on <span className="text-sky-700">Hiring</span></h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio minima minus maxime quidem, eius corporis doloribus ullam cum, vitae qui? Et dolor laboriosam ratione temporibus mollitia amet cumque a.</p>
                    </div>
                   <div className=" w-[80%] flex flex-row justify-between items-start">
                          <div>
                                <h1 className="text-[#fb913a]">23K</h1>
                                <p className="font-bold text-xl">Users</p>
                            </div>

                            <div>
                                <h1 className="text-[#67c340]">2K+</h1>
                                <p className="font-bold text-xl">Success</p>
                            </div>

                            <div>
                                <h1 className="text-[#c265dc]">7K</h1>
                                <p className="font-bold text-xl">Subscribed</p>
                            </div>
                   </div>
                  </div>
       </div>
     );
}
 
export default StatisticsComponent;